/* Queue simulator – manages live queue state for the prototype */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import {
  queues,
  otherSupervisors,
  agentUser,
  callHistories,
  QUEUE_CALL_WEIGHTS,
  type Queue,
  type Person,
  type PresenceStatus,
  type Supervisor,
  type CallRecord,
} from "../data";
import { SIMULATOR_CONFIG } from "../config";
import {
  DEFAULT_DAY_DURATION_MS,
  SIM_START_HOUR,
  SIM_START_DAY,
  DAY_NAMES,
  DAY_NAMES_FULL,
  getShiftForHour,
  getTimeSurgeInfo,
  type ShiftDef,
} from "../config";

/* ══════════════════════════════════════════════════════
   Helpers
   ══════════════════════════════════════════════════════ */

function deepCloneQueues(qs: Queue[]): Queue[] {
  return qs.map((q) => ({
    ...q,
    people: q.people.map((p) => ({ ...p })),
  }));
}

function deepCloneCallHistories(
  ch: Record<string, CallRecord[]>
): Record<string, CallRecord[]> {
  const out: Record<string, CallRecord[]> = {};
  for (const k in ch) out[k] = sortCallHistoryDesc([...ch[k]]);
  return out;
}

function parseTime(str: string): number {
  const parts = str.split(":").map(Number);
  return (parts[0] || 0) * 60 + (parts[1] || 0);
}

function formatTime(totalSec: number): string {
  const clamped = Math.max(0, totalSec);
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

const IDLE_STATUSES: PresenceStatus[] = ["available", "busy", "away", "offline"];

function recalcOptedInCount(people: Person[]): number {
  return people.filter((p) => p.optedIn).length;
}

function recalcQueue(queue: Queue, newPeople: Person[]): Queue {
  const optedInCount = recalcOptedInCount(newPeople);
  return {
    ...queue,
    people: newPeople,
    optedInCount,
    hasAlert: optedInCount === 0,
  };
}

/* ── Random generators ── */

let _callIdCounter = 0;
function nextCallId(): string {
  return `sim-c-${Date.now()}-${++_callIdCounter}`;
}

function randomPhoneNumber(): string {
  const area = 200 + Math.floor(Math.random() * 800);
  const mid = 100 + Math.floor(Math.random() * 900);
  const end = 1000 + Math.floor(Math.random() * 9000);
  return `+1 (${area}) ${mid}-${end}`;
}

/**
 * Build a simulated time string from a fractional hour (0–24).
 * Adds an optional random minute jitter so entries within the same tick
 * get slightly different timestamps.
 */
function simTimeString(simHour: number, jitterMinutes: number = 0): string {
  const totalMinutes = simHour * 60 + jitterMinutes;
  const wrapped = ((totalMinutes % 1440) + 1440) % 1440; // 0-1439
  const h24 = Math.floor(wrapped / 60);
  const m = Math.floor(wrapped % 60);
  const ampm = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
}

/**
 * Parse a time string like "11:42 AM" into minutes since midnight for sorting.
 */
function parseTimeToMinutes(timeStr: string): number {
  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return 0;
  let h = parseInt(match[1], 10);
  const m = parseInt(match[2], 10);
  const ampm = match[3].toUpperCase();
  if (ampm === "PM" && h !== 12) h += 12;
  if (ampm === "AM" && h === 12) h = 0;
  return h * 60 + m;
}

/**
 * Sort call records by time descending (latest first).
 */
function sortCallHistoryDesc(records: CallRecord[]): CallRecord[] {
  return [...records].sort(
    (a, b) => parseTimeToMinutes(b.time) - parseTimeToMinutes(a.time)
  );
}

function randomCallDuration(): string {
  const mins = Math.floor(Math.random() * 12);
  const secs = Math.floor(Math.random() * 60);
  return `${mins} min ${secs} sec`;
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

/* ══════════════════════════════════════════════════════
   Active call tracking (agent → call info)
   ══════════════════════════════════════════════════════ */

interface ActiveCall {
  agentId: string;
  queueId: string;
  endTick: number;
  callerName: string;
}

/* ══════════════════════════════════════════════════════
   Opt Momentum — tracks recent bulk opt events per queue
   Positive = agents recently opted IN → queue improves
   Negative = agents recently opted OUT → queue degrades
   ══════════════════════════════════════════════════════ */

const MOMENTUM_DECAY = 0.65; // per tick — momentum halves roughly every 2 ticks
const MOMENTUM_THRESHOLD = 0.3; // ignore very small residual momentum

/* ══════════════════════════════════════════════════════
   Waiting call age tracking
   Each queue tracks ages (in ticks) of every waiting call
   Used for accurate longestWait & avgAnswerTime
   ══════════════════════════════════════════════════════ */

type WaitingAges = Map<string, number[]>; // queueId → array of tick-ages

/* ══════════════════════════════════════════════════════
   Per-queue SL counters — ROLLING WINDOW
   Old calls roll off so SL can actually recover when
   agents are opted in. Window size is tuned for demo pace.
   ══════════════════════════════════════════════════════ */

/** Default SL window in simulated minutes */
const DEFAULT_SL_WINDOW_MINUTES = 15;

/** Individual call outcome timestamped with the tick it occurred */
interface SLCallOutcome {
  tick: number;
  answeredInThreshold: boolean;
  shortAbandon: boolean;
  answered: boolean;
}

interface SLCounters {
  recentCalls: SLCallOutcome[];
  totalOffered: number;
  totalAnswered: number;
}

type SLCounterMap = Map<string, SLCounters>;

/** Convert sim-minutes to ticks given the current day duration.
 *  1 sim-day (1440 sim-min) = dayDurationMs real ms.
 *  1 tick = tickMs real ms.
 *  N sim-min = N × (dayDurationMs / 1440) / tickMs ticks. */
function simMinutesToTicks(minutes: number, dayDurationMs: number): number {
  const tickMs = SIMULATOR_CONFIG.tickInterval;
  return (minutes * dayDurationMs) / (1440 * tickMs);
}

function getOrCreateSLCounters(map: SLCounterMap, queueId: string, queue: Queue, currentTick: number): SLCounters {
  let c = map.get(queueId);
  if (!c) {
    const recentCalls: SLCallOutcome[] = [];
    const seedCount = queue.callsPresented;
    const answeredInThreshold = Math.round(queue.callsAnswered * (queue.serviceLevel / 100));
    const missed = queue.callsPresented - queue.callsAnswered;
    const shortAbandons = Math.round(missed * 0.15);

    // Spread seed calls across ticks before now so they age out naturally
    let idx = 0;
    const makeTick = () => Math.max(0, currentTick - seedCount + idx++);

    for (let i = 0; i < answeredInThreshold; i++) {
      recentCalls.push({ tick: makeTick(), answeredInThreshold: true, shortAbandon: false, answered: true });
    }
    const answeredSlow = queue.callsAnswered - answeredInThreshold;
    for (let i = 0; i < answeredSlow; i++) {
      recentCalls.push({ tick: makeTick(), answeredInThreshold: false, shortAbandon: false, answered: true });
    }
    for (let i = 0; i < shortAbandons; i++) {
      recentCalls.push({ tick: makeTick(), answeredInThreshold: false, shortAbandon: true, answered: false });
    }
    const normalAbandons = missed - shortAbandons;
    for (let i = 0; i < normalAbandons; i++) {
      recentCalls.push({ tick: makeTick(), answeredInThreshold: false, shortAbandon: false, answered: false });
    }

    c = { recentCalls, totalOffered: queue.callsPresented, totalAnswered: queue.callsAnswered };
    map.set(queueId, c);
  }
  return c;
}

/** Push a call outcome into the rolling window */
function pushSLOutcome(slc: SLCounters, outcome: SLCallOutcome): void {
  slc.recentCalls.push(outcome);
}

/** Prune outcomes outside the time window, then compute SL% */
function computeRollingSL(slc: SLCounters, currentTick: number, windowTicks: number): number {
  const cutoff = currentTick - windowTicks;
  while (slc.recentCalls.length > 0 && slc.recentCalls[0].tick < cutoff) {
    slc.recentCalls.shift();
  }
  const calls = slc.recentCalls;
  if (calls.length === 0) return 100;
  const denominator = calls.filter(c => !c.shortAbandon).length;
  if (denominator === 0) return 100;
  const numerator = calls.filter(c => c.answeredInThreshold).length;
  return (numerator / denominator) * 100;
}

/* ══════════════════════════════════════════════════════
   Sim-clock helpers — map sim ticks → simulated time of day + day of week
   ══════════════════════════════════════════════════════ */

export interface SimTimeInfo {
  /** Current sim hour (0–23, fractional). */
  hour: number;
  /** Current sim hour (0–23, integer). */
  hourInt: number;
  /** Current sim minute (0–59, integer). */
  minute: number;
  /** Current day of week (0=Sun..6=Sat). */
  day: number;
  /** Day name short, e.g. "Mon". */
  dayShort: string;
  /** Day name full, e.g. "Monday". */
  dayFull: string;
  /** Formatted clock string, e.g. "9:00 AM". */
  clockStr: string;
  /** Current shift definition. */
  shift: ShiftDef;
  /** Whether any queue is currently in a surge. */
  anySurge: boolean;
  /** Number of surging queues. */
  surgeCount: number;
  /** IDs of queues currently surging. */
  surgeQueueIds: string[];
  /** Active surge narratives (deduplicated). */
  surgeNarratives: string[];
  /** Queue IDs per surge narrative (parallel to surgeNarratives). */
  surgeNarrativeQueueIds: string[][];
  /** Day duration in ms (current setting). */
  dayDurationMs: number;
}

function computeSimTime(
  tickCount: number,
  dayDurationMs: number
): { hour: number; day: number } {
  const tickMs = SIMULATOR_CONFIG.tickInterval;
  const elapsedMs = tickCount * tickMs;
  // Total sim hours elapsed
  const totalSimHours = (elapsedMs / dayDurationMs) * 24;
  // Add to start time
  const totalHours = SIM_START_HOUR + totalSimHours;
  // Days elapsed
  const daysElapsed = Math.floor(totalHours / 24);
  const hour = ((totalHours % 24) + 24) % 24; // ensure positive
  const day = (SIM_START_DAY + daysElapsed) % 7;
  return { hour, day };
}

function formatSimClock(hour: number): string {
  const h24 = Math.floor(hour);
  const m = Math.floor((hour - h24) * 60);
  const ampm = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
}

/* ══════════════════════════════════════════════════════
   Core simulation tick — realistic queue dynamics
   ══════════════════════════════════════════════════════ */

interface TickResult {
  queues: Queue[];
  newCallEntries: Record<string, CallRecord[]>;
  /** Agents who received calls this tick (for activity log) */
  callPickups: SupervisorAction[];
}

function applyRealisticTick(
  prev: Queue[],
  activeCalls: Map<string, ActiveCall>,
  currentTick: number,
  optMomentum: Map<string, number>,
  focusedQueueId: string | null,
  waitingAges: WaitingAges,
  slCounters: SLCounterMap,
  dayDurationMs: number,
  simHour: number,
  callCfg: CallConfig = DEFAULT_CALL_CONFIG,
  focusedBoostOff: boolean = false
): TickResult {
  const {
    statusChangeProbability,
    serviceLevelThresholdSec,
    serviceLevelShortAbandonSec,
  } = SIMULATOR_CONFIG;

  const {
    callArrivalBase,
    callArrivalBusyBoost,
    callDurationMinTicks,
    callDurationMaxTicks,
  } = callCfg;
  const surgeMultiplier = callCfg.surgeMultiplier ?? 1;
  const slWindowMinutes = callCfg.slWindowMinutes ?? DEFAULT_SL_WINDOW_MINUTES;
  const agentReadinessChance = callCfg.agentReadinessChance ?? 0.85;

  const tickIntervalSec = SIMULATOR_CONFIG.tickInterval / 1000;
  const newCallEntries: Record<string, CallRecord[]> = {};
  const callPickups: SupervisorAction[] = [];

  // 1. Complete finished calls — agents go back to available
  const completedCalls: ActiveCall[] = [];
  const completedIds: string[] = [];
  activeCalls.forEach((call, agentId) => {
    if (currentTick >= call.endTick) {
      completedCalls.push(call);
      completedIds.push(agentId);
    }
  });
  for (const id of completedIds) {
    activeCalls.delete(id);
  }

  const result = prev.map((queue) => {
    const entries: CallRecord[] = [];
    const answerTimesThisTick: number[] = []; // in seconds
    let missedThisTick = 0;
    // Track an entry counter so each entry within this tick gets a unique
    // jittered timestamp (spread across a simulated ~2–5 min window)
    let entryIdx = 0;

    // Read momentum for this queue (positive = agents recently opted in)
    const momentum = optMomentum.get(queue.id) ?? 0;
    const absMomentum = Math.abs(momentum);
    const hasMomentum = absMomentum > MOMENTUM_THRESHOLD;

    // Get/create waiting ages for this queue
    if (!waitingAges.has(queue.id)) {
      // Initialize with ages spread out for existing waiting calls
      const ages: number[] = [];
      for (let i = 0; i < queue.callsWaiting; i++) {
        ages.push(Math.floor(parseTime(queue.longestWait) / tickIntervalSec * ((i + 1) / queue.callsWaiting)));
      }
      waitingAges.set(queue.id, ages);
    }
    const ages = waitingAges.get(queue.id)!;

    // Age all waiting calls by 1 tick
    for (let i = 0; i < ages.length; i++) {
      ages[i] += 1;
    }

    // Get/create SL counters
    const slc = getOrCreateSLCounters(slCounters, queue.id, queue, currentTick);

    // Is this the queue currently viewed in detail?
    const isFocused = queue.id === focusedQueueId;

    // Queue-specific call volume weight
    const callWeight = QUEUE_CALL_WEIGHTS[queue.id] ?? 1.0;

    // ── Time-of-day surge multiplier ──
    const { hour: simHour, day: simDay } = computeSimTime(currentTick, dayDurationMs);
    const surgeInfo = getTimeSurgeInfo(queue.id, simHour, simDay);
    const timeMult = surgeInfo.multiplier;

    // Clone people
    let newPeople: Person[] = queue.people.map((p) => ({ ...p }));

    // ── Focused queue: bias opted-out agents toward away/offline for visual clarity ──
    // Do NOT bias opted-in agents toward available — let the queue degrade naturally
    if (isFocused) {
      newPeople = newPeople.map((p) => {
        if (p.role !== "agent") return p;
        if (activeCalls.has(p.id)) return p; // already in a call
        if (!p.optedIn) {
          // Opted-out agents: drift toward away/offline
          if (p.status === "available" && Math.random() < 0.35) {
            const offStatus: PresenceStatus = Math.random() < 0.5 ? "away" : "offline";
            return { ...p, status: offStatus, activity: undefined };
          }
        }
        return p;
      });
    }

    // 1a. Mark completed calls in this queue → agents become available
    for (const call of completedCalls) {
      if (call.queueId === queue.id) {
        const agentIdx = newPeople.findIndex((p) => p.id === call.agentId);
        if (agentIdx !== -1 && !activeCalls.has(call.agentId)) {
          newPeople[agentIdx] = {
            ...newPeople[agentIdx],
            status: "available",
            activity: undefined,
          };
        }
        // Add answered call to history
        const jitter1 = -Math.floor(Math.random() * 4) - entryIdx;
        entries.push({
          id: nextCallId(),
          callerName: call.callerName,
          subtitle: randomCallDuration(),
          time: simTimeString(simHour, jitter1),
          type: "answered",
          hasTranscript: Math.random() < 0.15,
        });
        entryIdx++;
      }
    }

    // 2. Random idle status changes (only for agents NOT in a call)
    newPeople = newPeople.map((p) => {
      if (activeCalls.has(p.id)) return p; // in a call — don't touch
      if (
        p.role === "agent" &&
        Math.random() < statusChangeProbability
      ) {
        const newStatus =
          IDLE_STATUSES[Math.floor(Math.random() * IDLE_STATUSES.length)];
        return { ...p, status: newStatus, activity: undefined };
      }
      return p;
    });

    // 2a. Agent readiness — opted-in agents who are away/offline may transition to available
    if (agentReadinessChance > 0) {
      newPeople = newPeople.map((p) => {
        if (p.role !== "agent") return p;
        if (!p.optedIn) return p;
        if (activeCalls.has(p.id)) return p;
        if (p.status === "available") return p;
        // Opted-in but not available — roll readiness chance
        if (Math.random() < agentReadinessChance) {
          return { ...p, status: "available" as const, activity: undefined };
        }
        return p;
      });
    }

    // 3. Simulate new incoming calls — weighted by callWeight and time-of-day surge
    const busyFactor =
      callArrivalBase * callWeight * timeMult +
      queue.callsWaiting * callArrivalBusyBoost;
    const arrivalChance = Math.min(0.95, busyFactor);
    let newArrivals = 0;
    // Focused queues get boosted arrival rate (~60% more) for demo visibility
    // Can be disabled via focusedBoostOff for recovery-demo scenarios
    const focusedArrivalBoost = (isFocused && !focusedBoostOff) ? 1.6 : 1;
    if (Math.random() < arrivalChance * focusedArrivalBoost) newArrivals++;
    if (callWeight * timeMult > 1.5 && Math.random() < arrivalChance * 0.4 * focusedArrivalBoost) newArrivals++;
    if (callWeight * timeMult > 2.0 && Math.random() < arrivalChance * 0.3) newArrivals++;
    if (isFocused && !focusedBoostOff && Math.random() < arrivalChance * 0.3) newArrivals++;
    // Apply surge multiplier — multiply arrivals then add fractional remainder probabilistically
    if (surgeMultiplier > 1) {
      const multiplied = newArrivals * surgeMultiplier;
      const whole = Math.floor(multiplied);
      const frac = multiplied - whole;
      newArrivals = whole + (Math.random() < frac ? 1 : 0);
    }
    // Low-volume queues during off-peak may skip arrivals (disabled during surge)
    if (surgeMultiplier <= 1 && callWeight * timeMult < 0.35 && Math.random() < 0.5) newArrivals = 0;

    let callsWaiting = ages.length; // use ages as source of truth
    let callsPresented = queue.callsPresented;
    let callsAnswered = queue.callsAnswered;

    // Pre-compute staffing counts
    const optedIn = recalcOptedInCount(newPeople);
    const totalAgents = newPeople.filter((p) => p.role === "agent").length;
    const staffingRatio = optedIn / Math.max(1, totalAgents);

    for (let i = 0; i < newArrivals; i++) {
      callsPresented++;
      slc.totalOffered++;
      const callerName = randomPhoneNumber();

      // Try to find an available, opted-in agent to take the call
      const availableAgentIdx = newPeople.findIndex(
        (p) =>
          p.role === "agent" &&
          p.optedIn &&
          p.status === "available" &&
          !activeCalls.has(p.id)
      );

      if (availableAgentIdx !== -1) {
        // Agent takes the call immediately — answer time ≈ 0-3s (quick pickup)
        const agent = newPeople[availableAgentIdx];
        const duration =
          callDurationMinTicks +
          Math.floor(
            Math.random() * (callDurationMaxTicks - callDurationMinTicks + 1)
          );
        activeCalls.set(agent.id, {
          agentId: agent.id,
          queueId: queue.id,
          endTick: currentTick + duration,
          callerName,
        });
        newPeople[availableAgentIdx] = {
          ...agent,
          status: "busy",
          activity: "In a call",
        };
        callsAnswered++;
        slc.totalAnswered++;
        // Log call pickup
        callPickups.push({
          supervisorId: "",
          supervisorName: "",
          queueId: queue.id,
          queueName: queue.name,
          agentName: agent.name,
          action: "received-call",
          callerName,
        });
        // Immediate pickup → within SL threshold
        const answerTimeSec = Math.random() * 5; // 0-5s
        answerTimesThisTick.push(answerTimeSec);
        pushSLOutcome(slc, {
          tick: currentTick,
          answeredInThreshold: answerTimeSec <= serviceLevelThresholdSec,
          shortAbandon: false,
          answered: true,
        });
      } else {
        // No available agent — call goes to waiting
        ages.push(0); // new call, age = 0
        callsWaiting++;
      }
    }

    // 4. Some waiting calls get missed (caller hangs up / abandoned)
    if (callsWaiting > 0 && ages.length > 0) {
      // Momentum adjusts miss probability:
      const momentumMissMod = hasMomentum
        ? momentum > 0
          ? -absMomentum * 0.03
          : absMomentum * 0.06
        : 0;

      // Staffing-based miss reduction
      const staffingMissMod = optedIn > 0
        ? -clamp((optedIn / Math.max(1, totalAgents)) * 0.06, 0, 0.08)
        : 0.04;

      const baseMissProb = callCfg.callMissProbability * callWeight;
      const effectiveMissProb = clamp(baseMissProb + momentumMissMod + staffingMissMod, 0.02, 0.5);

      const missCount = Math.min(
        ages.length,
        Math.floor(ages.length * effectiveMissProb) +
          (Math.random() < effectiveMissProb ? 1 : 0)
      );
      for (let i = 0; i < missCount; i++) {
        if (ages.length === 0) break;
        // Remove the oldest call (highest age) — it's been waiting longest
        let maxIdx = 0;
        for (let j = 1; j < ages.length; j++) {
          if (ages[j] > ages[maxIdx]) maxIdx = j;
        }
        const abandonedAge = ages[maxIdx];
        ages.splice(maxIdx, 1);
        callsWaiting--;
        missedThisTick++;

        // Check if this was a "short abandon" (< 5s)
        const abandonTimeSec = abandonedAge * tickIntervalSec;
        pushSLOutcome(slc, {
          tick: currentTick,
          answeredInThreshold: false,
          shortAbandon: abandonTimeSec < serviceLevelShortAbandonSec,
          answered: false,
        });

        const jitter2 = -Math.floor(Math.random() * 4) - entryIdx;
        entries.push({
          id: nextCallId(),
          callerName: randomPhoneNumber(),
          subtitle: "Missed call",
          time: simTimeString(simHour, jitter2),
          type: "missed",
        });
        entryIdx++;
      }
    }

    // 4a. Momentum-driven waiting call drain (positive momentum = agents recently opted in)
    if (hasMomentum && momentum > 0 && ages.length > 0) {
      const drainCount = Math.min(
        ages.length,
        Math.floor(momentum * 0.6 * (0.5 + Math.random()))
      );
      for (let i = 0; i < drainCount; i++) {
        const availIdx = newPeople.findIndex(
          (p) =>
            p.role === "agent" &&
            p.optedIn &&
            p.status === "available" &&
            !activeCalls.has(p.id)
        );
        if (availIdx !== -1 && ages.length > 0) {
          const agent = newPeople[availIdx];
          const duration =
            callDurationMinTicks +
            Math.floor(
              Math.random() * (callDurationMaxTicks - callDurationMinTicks + 1)
            );
          // Remove youngest waiting call (agent picks up next in queue)
          const pickedAge = ages.shift()!;
          const answerTimeSec = pickedAge * tickIntervalSec;
          answerTimesThisTick.push(answerTimeSec);

          const momCallerName = randomPhoneNumber();
          activeCalls.set(agent.id, {
            agentId: agent.id,
            queueId: queue.id,
            endTick: currentTick + duration,
            callerName: momCallerName,
          });
          newPeople[availIdx] = {
            ...agent,
            status: "busy",
            activity: "In a call",
          };
          callsAnswered++;
          slc.totalAnswered++;
          callPickups.push({
            supervisorId: "", supervisorName: "",
            queueId: queue.id, queueName: queue.name,
            agentName: agent.name, action: "received-call",
            callerName: momCallerName,
          });
          pushSLOutcome(slc, {
            tick: currentTick,
            answeredInThreshold: answerTimeSec <= serviceLevelThresholdSec,
            shortAbandon: false,
            answered: true,
          });
          callsWaiting--;
        } else {
          break;
        }
      }
    }

    // Staffing-driven waiting call drain — idle opted-in agents pick up queued calls
    // More aggressive when heavily staffed (>70% opted in) so recovery is visible
    if (ages.length > 0 && optedIn > 0) {
      const idleOptedIn = newPeople.filter(
        (p) => p.role === "agent" && p.optedIn && p.status === "available" && !activeCalls.has(p.id)
      ).length;
      const drainRate = staffingRatio > 0.7 ? 0.7 : staffingRatio > 0.5 ? 0.55 : 0.4;
      const staffDrain = Math.min(
        ages.length,
        Math.floor(idleOptedIn * drainRate * (0.3 + Math.random() * 0.7))
      );
      for (let i = 0; i < staffDrain; i++) {
        const availIdx = newPeople.findIndex(
          (p) =>
            p.role === "agent" &&
            p.optedIn &&
            p.status === "available" &&
            !activeCalls.has(p.id)
        );
        if (availIdx !== -1 && ages.length > 0) {
          const agent = newPeople[availIdx];
          const duration =
            callDurationMinTicks +
            Math.floor(
              Math.random() * (callDurationMaxTicks - callDurationMinTicks + 1)
            );
          const pickedAge = ages.shift()!;
          const answerTimeSec = pickedAge * tickIntervalSec;
          answerTimesThisTick.push(answerTimeSec);

          const staffCallerName = randomPhoneNumber();
          activeCalls.set(agent.id, {
            agentId: agent.id,
            queueId: queue.id,
            endTick: currentTick + duration,
            callerName: staffCallerName,
          });
          newPeople[availIdx] = {
            ...agent,
            status: "busy",
            activity: "In a call",
          };
          callsAnswered++;
          slc.totalAnswered++;
          callPickups.push({
            supervisorId: "", supervisorName: "",
            queueId: queue.id, queueName: queue.name,
            agentName: agent.name, action: "received-call",
            callerName: staffCallerName,
          });
          pushSLOutcome(slc, {
            tick: currentTick,
            answeredInThreshold: answerTimeSec <= serviceLevelThresholdSec,
            shortAbandon: false,
            answered: true,
          });
          callsWaiting--;
        } else {
          break;
        }
      }
    }

    // 4b. Momentum-driven waiting call growth (negative momentum)
    if (hasMomentum && momentum < 0) {
      const extraWaiting = Math.floor(absMomentum * 0.4 * (0.3 + Math.random()));
      for (let i = 0; i < extraWaiting; i++) {
        ages.push(0);
        callsPresented++;
        slc.totalOffered++;
      }
      callsWaiting += extraWaiting;
    }

    // 5. Longest wait = age of oldest waiting call × tickInterval
    const longestWaitSec = ages.length > 0
      ? Math.max(...ages) * tickIntervalSec
      : 0;

    // 6. Avg answer time — from actual answer times this tick, smoothed with previous
    const prevAvgSec = parseTime(queue.avgAnswerTime);
    let newAvgSec: number;
    if (answerTimesThisTick.length > 0) {
      const tickAvg = answerTimesThisTick.reduce((a, b) => a + b, 0) / answerTimesThisTick.length;
      // Smooth: 60% new data, 40% previous (so it converges quickly but not instantly)
      newAvgSec = prevAvgSec * 0.4 + tickAvg * 0.6;
    } else {
      // No answers this tick — trend slowly toward 0 if no waiting, or grow if calls waiting
      if (ages.length > 0) {
        newAvgSec = prevAvgSec + (Math.random() - 0.3) * 3;
      } else {
        newAvgSec = prevAvgSec * 0.92; // decay toward 0
      }
    }

    // 7. Service level — time-based rolling window:
    // SL = (calls answered within 20s) / (total calls − short abandons) × 100
    // Only calls within the last N sim-minutes are included
    const windowTicks = simMinutesToTicks(slWindowMinutes, dayDurationMs);
    const computedSL = computeRollingSL(slc, currentTick, windowTicks);

    // Smooth SL toward computed value for visual stability
    const prevSL = queue.serviceLevel;
    const slDelta = computedSL - prevSL;
    // When improving: use staffing ratio to boost smoothing speed
    // With all agents opted in, SL should recover noticeably faster
    const staffingBoost = staffingRatio > 0.7 ? 0.12 : staffingRatio > 0.5 ? 0.06 : 0;
    const momentumSmoothBoost = hasMomentum && momentum > 0 ? absMomentum * 0.06 : 0;
    const slSmoothing = slDelta > 0
      ? SIMULATOR_CONFIG.serviceLevelSmoothingUp + momentumSmoothBoost + staffingBoost
      : SIMULATOR_CONFIG.serviceLevelSmoothingDown;
    const newSL = clamp(
      prevSL + slDelta * slSmoothing + (Math.random() - 0.5) * 1.5,
      0,
      100
    );

    // 8. Abandon rate — (presented - answered) / presented × 100
    const newAbandonRate = callsPresented > 0
      ? ((callsPresented - callsAnswered) / callsPresented) * 100
      : 0;

    if (entries.length > 0) {
      newCallEntries[queue.id] = entries;
    }

    // Sync ages back (they're mutated in place via reference)
    // callsWaiting should match ages.length
    const finalCallsWaiting = Math.max(0, ages.length);

    const optedIn2 = recalcOptedInCount(newPeople);

    return {
      ...queue,
      people: newPeople,
      optedInCount: optedIn2,
      callsWaiting: finalCallsWaiting,
      longestWait: formatTime(Math.round(clamp(longestWaitSec, 0, 999))),
      avgAnswerTime: formatTime(Math.round(clamp(newAvgSec, 0, 599))),
      serviceLevel: Math.round(clamp(newSL, 0, 100)),
      callsPresented,
      callsAnswered: Math.min(callsPresented, callsAnswered),
      abandonRate: Math.round(clamp(newAbandonRate, 0, 100)),
      hasAlert: optedIn2 === 0,
    };
  });

  return { queues: result, newCallEntries, callPickups };
}

/* ══════════════════════════════════════════════════════
   Agent self-opt toggles (autonomous behavior)
   ══════════════════════════════════════════════════════ */

function applyAgentSelfOptToggles(
  prev: Queue[],
  activeCalls: Map<string, ActiveCall>,
  churnRate: number = 0.015
): Queue[] {
  return prev.map((queue) => {
    const newPeople = queue.people.map((p) => {
      // Don't toggle: agent user, leads, agents currently in a call
      if (p.id === agentUser.id) return p;
      if (p.role !== "agent") return p;
      if (activeCalls.has(p.id)) return p;
      if (Math.random() < churnRate) {
        return { ...p, optedIn: !p.optedIn };
      }
      return p;
    });
    return recalcQueue(queue, newPeople);
  });
}

/* ══════════════════════════════════════════════════════
   Supervisor-driven opt-in/out actions
   ══════════════════════════════════════════════════════ */

export interface SupervisorAction {
  supervisorId: string;
  supervisorName: string;
  queueId: string;
  queueName?: string;
  agentName: string;
  action: "opted-in" | "opted-out" | "received-call";
  /** Caller info for received-call actions */
  callerName?: string;
}

function applySupervisorActions(
  prev: Queue[],
  activeSupervisors: Supervisor[],
  activeCalls: Map<string, ActiveCall>,
  actProbability: number = 0.15
): { queues: Queue[]; actions: SupervisorAction[] } {
  const { supervisorMaxTogglePerAction } = SIMULATOR_CONFIG;
  const supervisorActProbability = actProbability;

  let result = prev.map((q) => ({
    ...q,
    people: q.people.map((p) => ({ ...p })),
  }));
  const actions: SupervisorAction[] = [];

  for (const sup of activeSupervisors) {
    if (Math.random() > supervisorActProbability) continue;

    const eligibleQueueIds = sup.queueIds.filter((qid) =>
      result.some((q) => q.id === qid)
    );
    if (eligibleQueueIds.length === 0) continue;
    const targetQueueId =
      eligibleQueueIds[Math.floor(Math.random() * eligibleQueueIds.length)];
    const queueIdx = result.findIndex((q) => q.id === targetQueueId);
    if (queueIdx === -1) continue;

    const queue = result[queueIdx];
    const agents = queue.people.filter(
      (p) =>
        p.role === "agent" &&
        p.id !== agentUser.id &&
        !activeCalls.has(p.id) // don't toggle agents in a call
    );
    if (agents.length === 0) continue;

    const toggleCount = Math.min(
      1 + Math.floor(Math.random() * supervisorMaxTogglePerAction),
      agents.length
    );

    const shuffled = [...agents].sort(() => Math.random() - 0.5);
    const toToggle = shuffled.slice(0, toggleCount);

    const newPeople = queue.people.map((p) => {
      const match = toToggle.find((t) => t.id === p.id);
      if (match) {
        const newOptedIn = !p.optedIn;
        actions.push({
          supervisorId: sup.id,
          supervisorName: sup.name,
          queueId: queue.id,
          agentName: p.name,
          action: newOptedIn ? "opted-in" : "opted-out",
        });
        return { ...p, optedIn: newOptedIn };
      }
      return p;
    });

    result[queueIdx] = recalcQueue(queue, newPeople);
  }

  return { queues: result, actions };
}

/* ── Bulk helpers ── */

function applyOptAllIn(prev: Queue[]): Queue[] {
  return prev.map((queue) => {
    const newPeople = queue.people.map((p) => ({
      ...p,
      optedIn: p.role === "agent" ? true : p.optedIn,
    }));
    return recalcQueue(queue, newPeople);
  });
}

function applyOptAllOut(prev: Queue[]): Queue[] {
  return prev.map((queue) => {
    const newPeople = queue.people.map((p) => ({
      ...p,
      optedIn: p.role === "agent" ? false : p.optedIn,
    }));
    return recalcQueue(queue, newPeople);
  });
}

/* ══════════════════════════════════════════════════════
   Agent → Shift assignment (deterministic, built once)
   Each unique agent is assigned to exactly one of 3 shifts
   ══════════════════════════════════════════════════════ */

type AgentShiftMap = Map<string, number>; // agentId → shift id (1, 2, 3)

function buildAgentShiftMap(allQueues: Queue[]): AgentShiftMap {
  const map = new Map<string, number>();
  const seen = new Set<string>();
  const allAgentIds: string[] = [];
  for (const q of allQueues) {
    for (const p of q.people) {
      if (p.role === "agent" && p.id !== agentUser.id && !seen.has(p.id)) {
        seen.add(p.id);
        allAgentIds.push(p.id);
      }
    }
  }
  allAgentIds.sort(); // deterministic order
  const third = Math.ceil(allAgentIds.length / 3);
  for (let i = 0; i < allAgentIds.length; i++) {
    map.set(allAgentIds[i], Math.min(Math.floor(i / third) + 1, 3));
  }
  return map;
}

/** Number of ticks the gap between outgoing and incoming shifts lasts */
const SHIFT_DELAY_TICKS = 3;

/** Apply shift transition: opt-out outgoing agents or opt-in incoming agents */
function applyShiftTransition(
  qs: Queue[],
  shiftMap: AgentShiftMap,
  outgoingShiftId: number | null,
  incomingShiftId: number | null,
  activeCalls: Map<string, ActiveCall>,
): Queue[] {
  return qs.map((queue) => {
    const newPeople = queue.people.map((p) => {
      if (p.role !== "agent" || p.id === agentUser.id) return p;
      if (activeCalls.has(p.id)) return p; // in a call — don't disrupt
      const agentShift = shiftMap.get(p.id);
      if (!agentShift) return p;

      // Outgoing shift agents opt-out (80-90%)
      if (outgoingShiftId !== null && agentShift === outgoingShiftId) {
        if (Math.random() < 0.85) {
          const offStatus: PresenceStatus = Math.random() < 0.6 ? "away" : "offline";
          return { ...p, optedIn: false, status: offStatus, activity: undefined };
        }
      }

      // Incoming shift agents opt-in (~25% of net agent count)
      if (incomingShiftId !== null && agentShift === incomingShiftId) {
        if (Math.random() < 0.25) {
          return { ...p, optedIn: true, status: "available", activity: undefined };
        }
      }

      return p;
    });
    return recalcQueue(queue, newPeople);
  });
}

/* ══════════════════════════════════════════════════════
   Graph data point for mini-charts
   ══════════════════════════════════════════════════════ */

export interface GraphDataPoint {
  /** Sim hour (fractional, e.g. 9.5 = 9:30 AM) */
  hour: number;
  /** Calls waiting for the focused queue (or total if none focused) */
  calls: number;
  /** Agents opted-in for the focused queue (or total if none focused) */
  optedIn: number;
  /** Service level % for the focused queue */
  serviceLevel: number;
  /** Cumulative calls missed (presented - answered) for the focused queue */
  callsMissed: number;
  /** Which queue this data point belongs to */
  queueId: string | null;
}

/** Per-queue metric history for sparkline trends */
export interface QueueMetricSnapshot {
  longestWaitSec: number;
  avgAnswerSec: number;
  callsWaiting: number;
  serviceLevel: number;
  abandonRate: number;
}

const METRIC_HISTORY_LEN = 10; // keep last 10 ticks

/* ══════════════════════════════════════════════════════
   Context
   ══════════════════════════════════════════════════════ */

export type SimulatorStatus = "off" | "running" | "paused";
export type ActiveRole = "supervisor" | "agent";
export type QueueBadgeMode = "avatar" | "service-level" | "waiting-calls";
export type QueueFilterType = "waiting" | "no-agents" | "10+-waiting" | "low-waiting" | null;

/** Configurable call parameters exposed to the simulator panel */
export interface CallConfig {
  callArrivalBase: number;
  callArrivalBusyBoost: number;
  callMissProbability: number;
  callDurationMinTicks: number;
  callDurationMaxTicks: number;
  /** Surge multiplier — multiplies new call arrivals per tick (1 = normal) */
  surgeMultiplier: number;
  /** SL rolling window in simulated minutes — only calls within this window affect SL */
  slWindowMinutes: number;
  /** Agent self-opt churn rate (0–1): probability each agent toggles opt-in/out per tick */
  agentChurnRate: number;
  /** Supervisor activity rate (0–1): probability each supervisor acts per tick */
  supervisorActivity: number;
  /** Agent readiness chance (0–1): probability an opted-in non-available agent transitions to available per tick */
  agentReadinessChance: number;
}

export const DEFAULT_CALL_CONFIG: CallConfig = {
  callArrivalBase: SIMULATOR_CONFIG.callArrivalBase,
  callArrivalBusyBoost: SIMULATOR_CONFIG.callArrivalBusyBoost,
  callMissProbability: SIMULATOR_CONFIG.callMissProbability,
  callDurationMinTicks: SIMULATOR_CONFIG.callDurationMinTicks,
  callDurationMaxTicks: SIMULATOR_CONFIG.callDurationMaxTicks,
  surgeMultiplier: 1,
  slWindowMinutes: DEFAULT_SL_WINDOW_MINUTES,
  agentChurnRate: 0.015,
  supervisorActivity: 0.15,
  agentReadinessChance: 0.85,
};

/* ══════════════════════════════════════════════════════
   Demo Scenarios — pre-configured queue states for demos
   ══════════════════════════════════════════════════════ */

export interface DemoScenario {
  id: string;
  label: string;
  description: string;
  /** Day to jump to (0=Sun..6=Sat) */
  day: number;
  /** Hour to jump to (0–23) */
  hour: number;
  /** Call config overrides */
  callConfig?: Partial<CallConfig>;
  /** Queue-specific overrides applied to initial state */
  queueOverrides: Record<string, {
    serviceLevel?: number;
    callsWaiting?: number;
    optInPercent?: number;
    callsPresented?: number;
    callsAnswered?: number;
    longestWait?: string;
    avgAnswerTime?: string;
  }>;
  /** Whether to disable focused queue boost (helps recovery demos) */
  disableFocusedBoost?: boolean;
  /** Force shift delay on/off for this scenario */
  shiftDelayEnabled?: boolean;
  /** Force badge mode for this scenario */
  badgeMode?: QueueBadgeMode;
}

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: "monday-morning-surge",
    label: "Monday Morning Surge",
    description: "Primary Care overwhelmed — weekend backlog, low staff, SL in the red. Opt in agents to recover.",
    day: 1, // Monday
    hour: 9,
    callConfig: {
      callArrivalBase: 0.55,
      callMissProbability: 0.18,
    },
    queueOverrides: {
      q2: {
        serviceLevel: 18,
        callsWaiting: 14,
        optInPercent: 15,
        callsPresented: 42,
        callsAnswered: 18,
        longestWait: "6:32",
        avgAnswerTime: "3:45",
      },
    },
    disableFocusedBoost: true,
  },
  {
    id: "friday-night-er-surge",
    label: "Friday Night ER Surge",
    description: "It's 11 PM Friday — parties, accidents. ED is red & overwhelmed. Surgical ICU is green & quiet. Move agents across to stabilise.",
    day: 5, // Friday
    hour: 23,
    callConfig: {
      callArrivalBase: 0.55,
      callMissProbability: 0.16,
    },
    queueOverrides: {
      // ED: crisis — SL deep red, many waiting, most agents opted out
      q4: {
        serviceLevel: 14,
        callsWaiting: 19,
        optInPercent: 15,
        callsPresented: 58,
        callsAnswered: 20,
        longestWait: "7:42",
        avgAnswerTime: "5:05",
      },
      // Trauma also stressed (night surge)
      q3: {
        serviceLevel: 32,
        callsWaiting: 8,
        optInPercent: 30,
        callsPresented: 34,
        callsAnswered: 16,
        longestWait: "4:20",
        avgAnswerTime: "3:15",
      },
      // Surgical ICU: very green & overstaffed at night — prime donor queue
      q6: {
        serviceLevel: 96,
        callsWaiting: 0,
        optInPercent: 90,
        callsPresented: 4,
        callsAnswered: 4,
        longestWait: "0:12",
        avgAnswerTime: "0:22",
      },
      // Palliative care: also green, quiet at night
      q8: {
        serviceLevel: 98,
        callsWaiting: 0,
        optInPercent: 85,
        callsPresented: 3,
        callsAnswered: 3,
        longestWait: "0:00",
        avgAnswerTime: "0:18",
      },
      // Radiology: dead at night
      q11: {
        serviceLevel: 99,
        callsWaiting: 0,
        optInPercent: 75,
        callsPresented: 1,
        callsAnswered: 1,
        longestWait: "0:00",
        avgAnswerTime: "0:10",
      },
    },
    disableFocusedBoost: true,
    badgeMode: "service-level",
  },
  {
    id: "midnight-shift-gap",
    label: "Midnight Shift Gap",
    description: "Just before the 1 AM shift change — evening agents leave before night crew arrives. Switch to Waiting Calls to spot the coverage gap.",
    day: 6, // Saturday (early morning)
    hour: 0, // midnight — shift change at 1 AM is ~8 sec away
    callConfig: {
      callArrivalBase: 0.45,
      callMissProbability: 0.12,
    },
    queueOverrides: {
      // Moderate evening state across key queues — not in crisis yet
      q4: { serviceLevel: 68, callsWaiting: 5, optInPercent: 55, callsPresented: 30, callsAnswered: 22, longestWait: "2:30", avgAnswerTime: "1:50" },
      q3: { serviceLevel: 72, callsWaiting: 4, optInPercent: 50, callsPresented: 22, callsAnswered: 17, longestWait: "2:05", avgAnswerTime: "1:35" },
      q14: { serviceLevel: 60, callsWaiting: 6, optInPercent: 45, callsPresented: 26, callsAnswered: 16, longestWait: "3:10", avgAnswerTime: "2:20" },
      q13: { serviceLevel: 65, callsWaiting: 4, optInPercent: 50, callsPresented: 18, callsAnswered: 12, longestWait: "2:45", avgAnswerTime: "2:00" },
      q1: { serviceLevel: 80, callsWaiting: 2, optInPercent: 60, callsPresented: 14, callsAnswered: 12, longestWait: "1:20", avgAnswerTime: "1:00" },
    },
    shiftDelayEnabled: true,
    disableFocusedBoost: false,
    badgeMode: "waiting-calls",
  },
  {
    id: "smooth-operations",
    label: "Smooth Operations",
    description: "Midweek calm — all queues healthy, high opt-in, low wait times.",
    day: 3, // Wednesday
    hour: 14,
    callConfig: {
      callArrivalBase: 0.30,
      callMissProbability: 0.06,
    },
    queueOverrides: {
      q1: { serviceLevel: 94, callsWaiting: 0, optInPercent: 85 },
      q2: { serviceLevel: 91, callsWaiting: 1, optInPercent: 80 },
      q3: { serviceLevel: 96, callsWaiting: 0, optInPercent: 90 },
      q4: { serviceLevel: 88, callsWaiting: 2, optInPercent: 75 },
      q5: { serviceLevel: 95, callsWaiting: 0, optInPercent: 85 },
    },
    disableFocusedBoost: false,
  },
];

interface SimulatorState {
  status: SimulatorStatus;
  liveQueues: Queue[];
  liveCallHistories: Record<string, CallRecord[]>;
  start: () => void;
  pause: () => void;
  stop: () => void;
  optAllIn: () => void;
  optAllOut: () => void;
  tickCount: number;
  activeSupervisorIds: Set<string>;
  toggleSupervisor: (id: string) => void;
  enableAllSupervisors: () => void;
  disableAllSupervisors: () => void;
  supervisorLog: SupervisorAction[];
  supervisors: Supervisor[];
  queueBadgeMode: QueueBadgeMode;
  setQueueBadgeMode: (mode: QueueBadgeMode) => void;
  activeRole: ActiveRole;
  setActiveRole: (role: ActiveRole) => void;
  toggleAgentOptIn: (queueId: string) => void;
  pendingAgentToggles: Map<string, "opting-in" | "opting-out">;
  toggleSupervisorOptIn: (queueId: string) => void;
  pendingSupervisorToggle: Map<string, "opting-in" | "opting-out">;
  supervisorOptedIn: Map<string, boolean>;
  supervisorToggleAgentOpt: (queueId: string, agentId: string) => void;
  pendingSupervisorAgentToggles: Map<string, "opting-in" | "opting-out">;
  supervisorBulkOpt: (
    queueId: string,
    agentIds: string[],
    optIn: boolean
  ) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  activeFilter: QueueFilterType;
  setActiveFilter: (filter: QueueFilterType) => void;
  focusedQueueId: string | null;
  setFocusedQueueId: (id: string | null) => void;
  simTime: SimTimeInfo;
  dayDurationMs: number;
  setDayDurationMs: (ms: number) => void;
  shiftDelayEnabled: boolean;
  setShiftDelayEnabled: (v: boolean) => void;
  graphData: GraphDataPoint[];
  skipHour: (delta: number) => void;
  /** Jump to a specific day (0=Sun..6=Sat) and hour (0–23) */
  jumpToTime: (day: number, hour: number) => void;
  /** Per-queue metric history for sparkline trends (ref-based, updates each tick) */
  queueMetricHistory: Map<string, QueueMetricSnapshot[]>;
  /** Configurable call parameters */
  callConfig: CallConfig;
  setCallConfig: (config: CallConfig) => void;
  /** Demo scenario support */
  applyScenario: (scenario: DemoScenario) => void;
  activeScenarioId: string | null;
  /** Whether focused queue arrival boost is disabled (for recovery demos) */
  focusedBoostDisabled: boolean;
  setFocusedBoostDisabled: (v: boolean) => void;
  /** Demo narrator subtitle overlay */
  narratorEnabled: boolean;
  setNarratorEnabled: (v: boolean) => void;
  narratorStep: number;
  setNarratorStep: (step: number) => void;
  /** Toggle sparklines in queue detail metrics */
  showSparklines: boolean;
  setShowSparklines: (v: boolean) => void;
}

const DEFAULT_SIM_TIME: SimTimeInfo = {
  hour: SIM_START_HOUR, hourInt: SIM_START_HOUR, minute: 0,
  day: SIM_START_DAY, dayShort: DAY_NAMES[SIM_START_DAY], dayFull: DAY_NAMES_FULL[SIM_START_DAY],
  clockStr: formatSimClock(SIM_START_HOUR),
  shift: getShiftForHour(SIM_START_HOUR),
  anySurge: false, surgeCount: 0, surgeQueueIds: [], surgeNarratives: [], surgeNarrativeQueueIds: [],
  dayDurationMs: DEFAULT_DAY_DURATION_MS,
};

const SimulatorContext = createContext<SimulatorState>({
  status: "off",
  liveQueues: deepCloneQueues(queues),
  liveCallHistories: deepCloneCallHistories(callHistories),
  start: () => {},
  pause: () => {},
  stop: () => {},
  optAllIn: () => {},
  optAllOut: () => {},
  tickCount: 0,
  activeSupervisorIds: new Set(),
  toggleSupervisor: () => {},
  enableAllSupervisors: () => {},
  disableAllSupervisors: () => {},
  supervisorLog: [],
  supervisors: otherSupervisors,
  queueBadgeMode: "avatar",
  setQueueBadgeMode: () => {},
  activeRole: "agent",
  setActiveRole: () => {},
  toggleAgentOptIn: () => {},
  pendingAgentToggles: new Map(),
  toggleSupervisorOptIn: () => {},
  pendingSupervisorToggle: new Map(),
  supervisorOptedIn: new Map(),
  supervisorToggleAgentOpt: () => {},
  pendingSupervisorAgentToggles: new Map(),
  supervisorBulkOpt: () => {},
  showFilters: false,
  setShowFilters: () => {},
  activeFilter: null,
  setActiveFilter: () => {},
  focusedQueueId: null,
  setFocusedQueueId: () => {},
  simTime: DEFAULT_SIM_TIME,
  dayDurationMs: DEFAULT_DAY_DURATION_MS,
  setDayDurationMs: () => {},
  shiftDelayEnabled: true,
  setShiftDelayEnabled: () => {},
  graphData: [],
  skipHour: () => {},
  jumpToTime: () => {},
  queueMetricHistory: new Map(),
  callConfig: DEFAULT_CALL_CONFIG,
  setCallConfig: () => {},
  applyScenario: () => {},
  activeScenarioId: null,
  focusedBoostDisabled: false,
  setFocusedBoostDisabled: () => {},
  narratorEnabled: false,
  setNarratorEnabled: () => {},
  narratorStep: 0,
  setNarratorStep: () => {},
  showSparklines: false,
  setShowSparklines: () => {},
});

export function useSimulator(): SimulatorState {
  return useContext(SimulatorContext);
}

export function SimulatorProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<SimulatorStatus>("off");
  const [liveQueues, setLiveQueues] = useState<Queue[]>(() =>
    deepCloneQueues(queues)
  );
  const [liveCallHistories, setLiveCallHistories] = useState<
    Record<string, CallRecord[]>
  >(() => deepCloneCallHistories(callHistories));
  const [tickCount, setTickCount] = useState(0);
  const [activeSupervisorIds, setActiveSupervisorIds] = useState<Set<string>>(
    () => new Set(otherSupervisors.map((s) => s.id))
  );
  const [supervisorLog, setSupervisorLog] = useState<SupervisorAction[]>([]);
  const [queueBadgeMode, setQueueBadgeMode] = useState<QueueBadgeMode>("avatar");
  const [activeRole, setActiveRole] = useState<ActiveRole>("supervisor");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState<QueueFilterType>(null);
  const [focusedQueueId, setFocusedQueueId] = useState<string | null>(null);
  const [dayDurationMs, setDayDurationMs] = useState(DEFAULT_DAY_DURATION_MS);
  const [shiftDelayEnabled, setShiftDelayEnabled] = useState(true);
  const [graphData, setGraphData] = useState<GraphDataPoint[]>([]);
  const [callConfig, setCallConfig] = useState<CallConfig>(DEFAULT_CALL_CONFIG);
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);
  const [focusedBoostDisabled, setFocusedBoostDisabled] = useState(false);
  const [narratorEnabled, setNarratorEnabled] = useState(false);
  const [narratorStep, setNarratorStep] = useState(0);
  const [showSparklines, setShowSparklines] = useState(false);

  const focusedQueueIdRef = useRef<string | null>(null);
  const callConfigRef = useRef<CallConfig>(DEFAULT_CALL_CONFIG);
  const focusedBoostDisabledRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeSupervisorIdsRef = useRef(activeSupervisorIds);
  const tickCountRef = useRef(0);
  const dayDurationMsRef = useRef(dayDurationMs);
  const shiftDelayEnabledRef = useRef(true);

  // Active agent calls: agentId → call info
  const activeCallsRef = useRef<Map<string, ActiveCall>>(new Map());

  // Opt momentum: queueId → signed float (positive = recent opt-ins, negative = opt-outs)
  const optMomentumRef = useRef<Map<string, number>>(new Map());

  // Waiting call ages: queueId → number[] (tick-ages of each waiting call)
  const waitingAgesRef = useRef<WaitingAges>(new Map());

  // SL counters: queueId → cumulative SL tracking
  const slCountersRef = useRef<SLCounterMap>(new Map());

  // Shift transition tracking
  const agentShiftMapRef = useRef<AgentShiftMap>(buildAgentShiftMap(queues));
  const prevShiftIdRef = useRef<number | null>(null);
  const shiftDelayTicksRef = useRef(0);
  const pendingIncomingShiftRef = useRef<number | null>(null);
  const prevDayRef = useRef<number | null>(null);

  // Per-queue metric history for sparkline trends
  const queueMetricHistoryRef = useRef<Map<string, QueueMetricSnapshot[]>>(new Map());

  // Pending toggle states
  const [pendingAgentToggles, setPendingAgentToggles] = useState<
    Map<string, "opting-in" | "opting-out">
  >(new Map());
  const [pendingSupervisorToggle, setPendingSupervisorToggle] = useState<
    Map<string, "opting-in" | "opting-out">
  >(new Map());
  const [supervisorOptedIn, setSupervisorOptedIn] = useState<
    Map<string, boolean>
  >(new Map());
  const [pendingSupervisorAgentToggles, setPendingSupervisorAgentToggles] =
    useState<Map<string, "opting-in" | "opting-out">>(new Map());
  const pendingTimersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(
    new Map()
  );

  // Keep refs in sync
  useEffect(() => {
    activeSupervisorIdsRef.current = activeSupervisorIds;
  }, [activeSupervisorIds]);

  useEffect(() => {
    focusedQueueIdRef.current = focusedQueueId;
  }, [focusedQueueId]);

  useEffect(() => {
    dayDurationMsRef.current = dayDurationMs;
  }, [dayDurationMs]);

  useEffect(() => {
    callConfigRef.current = callConfig;
    // When SL window changes, pruning happens naturally on the next tick
    // via computeRollingSL which prunes based on time, not count
  }, [callConfig]);

  useEffect(() => {
    focusedBoostDisabledRef.current = focusedBoostDisabled;
  }, [focusedBoostDisabled]);

  useEffect(() => {
    shiftDelayEnabledRef.current = shiftDelayEnabled;
  }, [shiftDelayEnabled]);

  const clearTicker = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  /* ── Compute simTime from tickCount (derived, not stored) ── */
  const computeCurrentSimTime = useCallback((): SimTimeInfo => {
    const tc = tickCountRef.current;
    const ddMs = dayDurationMsRef.current;
    const { hour, day } = computeSimTime(tc, ddMs);
    const hourInt = Math.floor(hour);
    const minute = Math.floor((hour - hourInt) * 60);

    // Compute surge info across all visible queues
    const allQueueIds = queues.map((q) => q.id);
    let surgeCount = 0;
    const surgeQueueIds: string[] = [];
    const surgeNarratives: string[] = [];
    const surgeNarrativeQueueIds: string[][] = [];
    for (const qid of allQueueIds) {
      const info = getTimeSurgeInfo(qid, hour, day);
      if (info.isSurge) {
        surgeCount++;
        surgeQueueIds.push(qid);
        if (info.narrative && !surgeNarratives.includes(info.narrative)) {
          surgeNarratives.push(info.narrative);
          surgeNarrativeQueueIds.push([qid]);
        } else if (info.narrative) {
          const idx = surgeNarratives.indexOf(info.narrative);
          if (idx !== -1) {
            surgeNarrativeQueueIds[idx].push(qid);
          }
        }
      }
    }

    return {
      hour, hourInt, minute, day,
      dayShort: DAY_NAMES[day],
      dayFull: DAY_NAMES_FULL[day],
      clockStr: formatSimClock(hour),
      shift: getShiftForHour(hourInt),
      anySurge: surgeCount > 0,
      surgeCount,
      surgeQueueIds,
      surgeNarratives,
      surgeNarrativeQueueIds,
      dayDurationMs: ddMs,
    };
  }, []);

  const [simTime, setSimTime] = useState<SimTimeInfo>(DEFAULT_SIM_TIME);

  const startTicker = useCallback(() => {
    clearTicker();
    intervalRef.current = setInterval(() => {
      tickCountRef.current += 1;
      const currentTick = tickCountRef.current;

      // Compute simulated hour for this tick so call history timestamps
      // use the simulated clock rather than wall-clock time.
      const { hour: tickSimHour } = computeSimTime(currentTick, dayDurationMsRef.current);

      setLiveQueues((prev) => {
        // 1. Realistic tick: arrivals, answering, misses, analytics
        const { queues: afterTick, newCallEntries, callPickups } = applyRealisticTick(
          prev,
          activeCallsRef.current,
          currentTick,
          optMomentumRef.current,
          focusedQueueIdRef.current,
          waitingAgesRef.current,
          slCountersRef.current,
          dayDurationMsRef.current,
          tickSimHour,
          callConfigRef.current,
          focusedBoostDisabledRef.current
        );

        // Decay momentum after it was consumed this tick
        const mom = optMomentumRef.current;
        for (const [qid, val] of mom.entries()) {
          const decayed = val * MOMENTUM_DECAY;
          if (Math.abs(decayed) < MOMENTUM_THRESHOLD) {
            mom.delete(qid);
          } else {
            mom.set(qid, decayed);
          }
        }

        // 2. Agent self-opt toggles
        const cfg = callConfigRef.current;
        let next = applyAgentSelfOptToggles(afterTick, activeCallsRef.current, cfg.agentChurnRate);

        // 3. Supervisor-driven actions
        const activeIds = activeSupervisorIdsRef.current;
        const activeSups = otherSupervisors.filter((s) => activeIds.has(s.id));
        if (activeSups.length > 0) {
          const { queues: updated, actions } = applySupervisorActions(
            next,
            activeSups,
            activeCallsRef.current,
            cfg.supervisorActivity
          );
          next = updated;
          if (actions.length > 0) {
            setSupervisorLog((log) => [...actions, ...log].slice(0, 80));
          }
        }

        // 3b. Log call pickups (sample max 3 per tick to avoid log spam)
        if (callPickups.length > 0) {
          const sampled = callPickups.length <= 3
            ? callPickups
            : callPickups.sort(() => Math.random() - 0.5).slice(0, 3);
          setSupervisorLog((log) => [...sampled, ...log].slice(0, 80));
        }

        // 4. Append new call history entries (prepend to existing)
        if (Object.keys(newCallEntries).length > 0) {
          setLiveCallHistories((prevHist) => {
            const updated = { ...prevHist };
            for (const queueId in newCallEntries) {
              const existing = updated[queueId] || [];
              updated[queueId] = [
                ...newCallEntries[queueId],
                ...existing,
              ].slice(0, SIMULATOR_CONFIG.maxCallHistoryPerQueue);
            }
            return updated;
          });
        }

        return next;
      });

      // Update sim time each tick
      const newSimTime = computeCurrentSimTime();
      setSimTime(newSimTime);

      // ── Shift transition logic ──
      const curShiftId = newSimTime.shift.id;
      const prevShift = prevShiftIdRef.current;

      if (prevShift !== null && prevShift !== curShiftId) {
        // Shift just changed!
        if (shiftDelayEnabledRef.current) {
          // Phase 1: Outgoing agents leave, incoming agents DON'T arrive yet
          setLiveQueues((prev) =>
            applyShiftTransition(prev, agentShiftMapRef.current, prevShift, null, activeCallsRef.current)
          );
          shiftDelayTicksRef.current = SHIFT_DELAY_TICKS;
          pendingIncomingShiftRef.current = curShiftId;
        } else {
          // No delay: simultaneous transition
          setLiveQueues((prev) =>
            applyShiftTransition(prev, agentShiftMapRef.current, prevShift, curShiftId, activeCallsRef.current)
          );
        }
      }

      // Handle delayed incoming shift
      if (shiftDelayTicksRef.current > 0) {
        shiftDelayTicksRef.current--;
        if (shiftDelayTicksRef.current === 0 && pendingIncomingShiftRef.current !== null) {
          const incomingId = pendingIncomingShiftRef.current;
          pendingIncomingShiftRef.current = null;
          setLiveQueues((prev) =>
            applyShiftTransition(prev, agentShiftMapRef.current, null, incomingId, activeCallsRef.current)
          );
        }
      }

      prevShiftIdRef.current = curShiftId;

      // ── Graph data recording ──
      // Reset graph data when day changes
      const curDay = newSimTime.day;
      if (prevDayRef.current !== null && prevDayRef.current !== curDay) {
        setGraphData([]);
        queueMetricHistoryRef.current.clear();
      }
      prevDayRef.current = curDay;

      // Record data point (read latest queues) — per-focused-queue
      setLiveQueues((currentQueues) => {
        const fqId = focusedQueueIdRef.current;
        const focusedQ = fqId ? currentQueues.find((q) => q.id === fqId) : null;
        const calls = focusedQ ? focusedQ.callsWaiting : currentQueues.reduce((sum, q) => sum + q.callsWaiting, 0);
        const optedIn = focusedQ ? focusedQ.optedInCount : currentQueues.reduce((sum, q) => sum + q.optedInCount, 0);
        const serviceLevel = focusedQ ? focusedQ.serviceLevel : Math.round(currentQueues.reduce((sum, q) => sum + q.serviceLevel, 0) / (currentQueues.length || 1));
        const callsMissed = focusedQ ? Math.max(0, focusedQ.callsPresented - focusedQ.callsAnswered) : currentQueues.reduce((sum, q) => sum + Math.max(0, q.callsPresented - q.callsAnswered), 0);
        setGraphData((prev) => {
          // If focused queue changed, clear old data
          const lastQueueId = prev.length > 0 ? prev[prev.length - 1].queueId : null;
          const base = (fqId !== lastQueueId) ? [] : prev;
          return [...base, { hour: newSimTime.hour, calls, optedIn, serviceLevel, callsMissed, queueId: fqId }].slice(-400);
        });

        // Record per-queue metric history for sparklines
        const hist = queueMetricHistoryRef.current;
        for (const q of currentQueues) {
          const snap: QueueMetricSnapshot = {
            longestWaitSec: parseTime(q.longestWait),
            avgAnswerSec: parseTime(q.avgAnswerTime),
            callsWaiting: q.callsWaiting,
            serviceLevel: q.serviceLevel,
            abandonRate: q.abandonRate,
          };
          const arr = hist.get(q.id);
          if (arr) {
            arr.push(snap);
            if (arr.length > METRIC_HISTORY_LEN) arr.shift();
          } else {
            hist.set(q.id, [snap]);
          }
        }

        return currentQueues; // no mutation
      });

      setTickCount((c) => c + 1);
    }, SIMULATOR_CONFIG.tickInterval);
  }, [clearTicker, computeCurrentSimTime]);

  const start = useCallback(() => setStatus("running"), []);
  const pause = useCallback(() => setStatus("paused"), []);
  const stop = useCallback(() => setStatus("off"), []);

  const optAllIn = useCallback(() => {
    // Add strong positive momentum to all queues for demo effect
    setLiveQueues((prev) => {
      for (const q of prev) {
        const agents = q.people.filter((p) => p.role === "agent" && !p.optedIn);
        if (agents.length > 0) {
          const prevMom = optMomentumRef.current.get(q.id) ?? 0;
          optMomentumRef.current.set(q.id, prevMom + agents.length);
        }
      }
      return applyOptAllIn(prev);
    });
  }, []);

  const optAllOut = useCallback(() => {
    // Add strong negative momentum to all queues for demo effect
    setLiveQueues((prev) => {
      for (const q of prev) {
        const agents = q.people.filter((p) => p.role === "agent" && p.optedIn);
        if (agents.length > 0) {
          const prevMom = optMomentumRef.current.get(q.id) ?? 0;
          optMomentumRef.current.set(q.id, prevMom - agents.length);
        }
      }
      return applyOptAllOut(prev);
    });
  }, []);

  /** Apply a demo scenario: reset + pre-seed queue states */
  const applyScenario = useCallback((scenario: DemoScenario) => {
    // 1. Stop the ticker directly (don't set status to "off" — that triggers full reset)
    clearTicker();

    // 2. Apply queue overrides to initial data
    const baseQueues = deepCloneQueues(queues);
    const seededQueues = baseQueues.map((q) => {
      const overrides = scenario.queueOverrides[q.id];
      if (!overrides) return q;

      // Apply opt-in percentage
      if (overrides.optInPercent !== undefined) {
        const agents = q.people.filter((p) => p.role === "agent");
        const targetOptIn = Math.round(agents.length * (overrides.optInPercent / 100));
        const shuffled = agents.sort(() => Math.random() - 0.5);
        let optedInCount = 0;
        q.people = q.people.map((p) => {
          if (p.role !== "agent") return p;
          const idx = shuffled.indexOf(p);
          const shouldBeOptedIn = idx < targetOptIn;
          optedInCount += shouldBeOptedIn ? 1 : 0;
          return {
            ...p,
            optedIn: shouldBeOptedIn,
            status: shouldBeOptedIn ? p.status : (Math.random() < 0.6 ? "away" as const : "offline" as const),
            activity: shouldBeOptedIn ? p.activity : undefined,
          };
        });
        q.optedInCount = optedInCount;
      }

      if (overrides.serviceLevel !== undefined) q.serviceLevel = overrides.serviceLevel;
      if (overrides.callsWaiting !== undefined) q.callsWaiting = overrides.callsWaiting;
      if (overrides.callsPresented !== undefined) q.callsPresented = overrides.callsPresented;
      if (overrides.callsAnswered !== undefined) q.callsAnswered = overrides.callsAnswered;
      if (overrides.longestWait !== undefined) q.longestWait = overrides.longestWait;
      if (overrides.avgAnswerTime !== undefined) q.avgAnswerTime = overrides.avgAnswerTime;
      if (q.callsPresented > 0) {
        q.abandonRate = Math.round(((q.callsPresented - q.callsAnswered) / q.callsPresented) * 100);
      }
      q.hasAlert = q.optedInCount === 0;

      return q;
    });

    setLiveQueues(seededQueues);
    setLiveCallHistories(deepCloneCallHistories(callHistories));
    setSupervisorLog([]);

    // 3. Pre-seed SL counters (time-based rolling window) to match scenario initial state
    const slMap = slCountersRef.current;
    slMap.clear();
    const scenarioTick = tickCountRef.current;
    for (const [qid, overrides] of Object.entries(scenario.queueOverrides)) {
      const q = seededQueues.find((sq) => sq.id === qid);
      if (!q) continue;
      const sl = overrides.serviceLevel ?? q.serviceLevel;
      const answeredInThreshold = Math.round(q.callsAnswered * (sl / 100));
      const missed = q.callsPresented - q.callsAnswered;
      const shortAbandons = Math.round(missed * 0.15);
      const recentCalls: SLCallOutcome[] = [];
      const seedCount = q.callsPresented;

      // Spread seed calls across ticks before now so they age out naturally
      let idx = 0;
      const makeTick = () => Math.max(0, scenarioTick - seedCount + idx++);

      for (let i = 0; i < answeredInThreshold; i++) {
        recentCalls.push({ tick: makeTick(), answeredInThreshold: true, shortAbandon: false, answered: true });
      }
      const answeredSlow = q.callsAnswered - answeredInThreshold;
      for (let i = 0; i < answeredSlow; i++) {
        recentCalls.push({ tick: makeTick(), answeredInThreshold: false, shortAbandon: false, answered: true });
      }
      for (let i = 0; i < shortAbandons; i++) {
        recentCalls.push({ tick: makeTick(), answeredInThreshold: false, shortAbandon: true, answered: false });
      }
      const normalAbandons = missed - shortAbandons;
      for (let i = 0; i < normalAbandons; i++) {
        recentCalls.push({ tick: makeTick(), answeredInThreshold: false, shortAbandon: false, answered: false });
      }
      slMap.set(qid, {
        recentCalls,
        totalOffered: q.callsPresented,
        totalAnswered: q.callsAnswered,
      });
    }

    // 4. Pre-seed waiting ages to match callsWaiting
    const agesMap = waitingAgesRef.current;
    agesMap.clear();
    for (const q of seededQueues) {
      const overrides = scenario.queueOverrides[q.id];
      if (overrides?.callsWaiting && overrides.callsWaiting > 0) {
        const ages: number[] = [];
        for (let i = 0; i < overrides.callsWaiting; i++) {
          ages.push(Math.floor((overrides.callsWaiting - i) * 2 + Math.random() * 3));
        }
        agesMap.set(q.id, ages);
      }
    }

    // 5. Clear other state
    activeCallsRef.current.clear();
    optMomentumRef.current.clear();
    prevShiftIdRef.current = null;
    shiftDelayTicksRef.current = 0;
    pendingIncomingShiftRef.current = null;
    prevDayRef.current = null;
    setGraphData([]);
    queueMetricHistoryRef.current.clear();

    // 6. Apply call config overrides
    if (scenario.callConfig) {
      const newConfig = { ...DEFAULT_CALL_CONFIG, ...scenario.callConfig };
      setCallConfig(newConfig);
      callConfigRef.current = newConfig;
    }

    // 7. Set focused boost toggle
    setFocusedBoostDisabled(scenario.disableFocusedBoost ?? false);
    focusedBoostDisabledRef.current = scenario.disableFocusedBoost ?? false;

    // 7b. Set shift delay if specified
    if (scenario.shiftDelayEnabled !== undefined) {
      setShiftDelayEnabled(scenario.shiftDelayEnabled);
      shiftDelayEnabledRef.current = scenario.shiftDelayEnabled;
    }

    // 7c. Set badge mode if specified
    if (scenario.badgeMode !== undefined) {
      setQueueBadgeMode(scenario.badgeMode);
    }

    // 8. Track active scenario + reset narrator
    setActiveScenarioId(scenario.id);
    setNarratorStep(0);

    // 9. Apply time jump using tick-count (same approach as jumpToTime)
    const ddMs = dayDurationMsRef.current;
    const tickMs = SIMULATOR_CONFIG.tickInterval;
    const daysFromStart = ((scenario.day - SIM_START_DAY) % 7 + 7) % 7;
    const totalHours = daysFromStart * 24 + scenario.hour;
    let totalSimHours = totalHours - SIM_START_HOUR;
    if (totalSimHours < 0) totalSimHours += 7 * 24;
    const newTc = Math.max(0, Math.round((totalSimHours / 24) * ddMs / tickMs));
    tickCountRef.current = newTc;
    setTickCount(newTc);

    const newSimTime = computeCurrentSimTime();
    setSimTime(newSimTime);

    // 10. Auto-start the simulation
    // Force status cycle to ensure useEffect fires the ticker
    setStatus("paused");
    setTimeout(() => setStatus("running"), 50);
  }, [computeCurrentSimTime, clearTicker]);

  const toggleSupervisor = useCallback((id: string) => {
    setActiveSupervisorIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const enableAllSupervisors = useCallback(() => {
    setActiveSupervisorIds(new Set(otherSupervisors.map((s) => s.id)));
  }, []);

  const disableAllSupervisors = useCallback(() => {
    setActiveSupervisorIds(new Set());
  }, []);

  const handleSetQueueBadgeMode = useCallback((mode: QueueBadgeMode) => {
    setQueueBadgeMode(mode);
  }, []);

  const toggleAgentOptIn = useCallback(
    (queueId: string) => {
      if (pendingAgentToggles.has(queueId)) return;

      const queue = liveQueues.find((q) => q.id === queueId);
      if (!queue) return;
      const agentPerson = queue.people.find((p) => p.id === agentUser.id);
      if (!agentPerson) return;

      const currentlyOptedIn = agentPerson.optedIn;
      const pendingState = currentlyOptedIn ? "opting-out" : "opting-in";

      setPendingAgentToggles((prev) => {
        const next = new Map(prev);
        next.set(queueId, pendingState);
        return next;
      });

      const delay = 300 + Math.random() * 300;
      const timer = setTimeout(() => {
        setLiveQueues((prev) => {
          const queueIdx = prev.findIndex((q) => q.id === queueId);
          if (queueIdx === -1) return prev;
          const q = prev[queueIdx];
          const newPeople = q.people.map((p) => {
            if (p.id === agentUser.id) {
              return { ...p, optedIn: !p.optedIn };
            }
            return p;
          });
          return [
            ...prev.slice(0, queueIdx),
            recalcQueue(q, newPeople),
            ...prev.slice(queueIdx + 1),
          ];
        });
        setPendingAgentToggles((prev) => {
          const next = new Map(prev);
          next.delete(queueId);
          return next;
        });
        pendingTimersRef.current.delete(`agent-${queueId}`);
      }, delay);

      pendingTimersRef.current.set(`agent-${queueId}`, timer);
    },
    [pendingAgentToggles, liveQueues]
  );

  const toggleSupervisorOptIn = useCallback(
    (queueId: string) => {
      if (pendingSupervisorToggle.has(queueId)) return;

      const currentlyOptedIn = supervisorOptedIn.get(queueId) ?? false;
      const pendingState = currentlyOptedIn ? "opting-out" : "opting-in";

      setPendingSupervisorToggle((prev) => {
        const next = new Map(prev);
        next.set(queueId, pendingState);
        return next;
      });

      const delay = 300 + Math.random() * 300;
      const timer = setTimeout(() => {
        setSupervisorOptedIn((prev) => {
          const next = new Map(prev);
          next.set(queueId, !currentlyOptedIn);
          return next;
        });
        setPendingSupervisorToggle((prev) => {
          const next = new Map(prev);
          next.delete(queueId);
          return next;
        });
        pendingTimersRef.current.delete(`sup-${queueId}`);
      }, delay);

      pendingTimersRef.current.set(`sup-${queueId}`, timer);
    },
    [pendingSupervisorToggle, supervisorOptedIn]
  );

  const supervisorToggleAgentOpt = useCallback(
    (queueId: string, agentId: string) => {
      const key = `${queueId}-${agentId}`;
      if (pendingSupervisorAgentToggles.has(key)) return;

      const queue = liveQueues.find((q) => q.id === queueId);
      if (!queue) return;
      const agentPerson = queue.people.find((p) => p.id === agentId);
      if (!agentPerson) return;

      const currentlyOptedIn = agentPerson.optedIn;
      const pendingState = currentlyOptedIn ? "opting-out" : "opting-in";

      // Record momentum: +1 for opting in, -1 for opting out
      const momentumDelta = currentlyOptedIn ? -1 : 1;
      const prev = optMomentumRef.current.get(queueId) ?? 0;
      optMomentumRef.current.set(queueId, prev + momentumDelta);

      setPendingSupervisorAgentToggles((prev) => {
        const next = new Map(prev);
        next.set(key, pendingState);
        return next;
      });

      const delay = 300 + Math.random() * 300;
      const timer = setTimeout(() => {
        setLiveQueues((prev) => {
          const queueIdx = prev.findIndex((q) => q.id === queueId);
          if (queueIdx === -1) return prev;
          const q = prev[queueIdx];
          const newPeople = q.people.map((p) => {
            if (p.id === agentId) {
              return { ...p, optedIn: !p.optedIn };
            }
            return p;
          });
          return [
            ...prev.slice(0, queueIdx),
            recalcQueue(q, newPeople),
            ...prev.slice(queueIdx + 1),
          ];
        });
        setPendingSupervisorAgentToggles((prev) => {
          const next = new Map(prev);
          next.delete(key);
          return next;
        });
        pendingTimersRef.current.delete(key);
      }, delay);

      pendingTimersRef.current.set(key, timer);
    },
    [pendingSupervisorAgentToggles, liveQueues]
  );

  const supervisorBulkOpt = useCallback(
    (queueId: string, agentIds: string[], optIn: boolean) => {
      // Record bulk momentum: ±N where N is number of agents being toggled
      const momentumDelta = optIn ? agentIds.length : -agentIds.length;
      const prevMom = optMomentumRef.current.get(queueId) ?? 0;
      optMomentumRef.current.set(queueId, prevMom + momentumDelta);

      setLiveQueues((prev) => {
        const queueIdx = prev.findIndex((q) => q.id === queueId);
        if (queueIdx === -1) return prev;
        const q = prev[queueIdx];
        const newPeople = q.people.map((p) => {
          if (agentIds.includes(p.id)) {
            return { ...p, optedIn: optIn };
          }
          return p;
        });
        return [
          ...prev.slice(0, queueIdx),
          recalcQueue(q, newPeople),
          ...prev.slice(queueIdx + 1),
        ];
      });
    },
    []
  );

  const skipHour = useCallback(
    (delta: number) => {
      // ticksPerHour = dayDurationMs / (24 * tickInterval)
      const ddMs = dayDurationMsRef.current;
      const tickMs = SIMULATOR_CONFIG.tickInterval;
      const ticksPerHour = ddMs / (24 * tickMs);
      const ticksToSkip = Math.round(delta * ticksPerHour);
      const newTc = Math.max(0, tickCountRef.current + ticksToSkip);
      tickCountRef.current = newTc;
      setTickCount(newTc);
      setSimTime(computeCurrentSimTime());
    },
    [computeCurrentSimTime]
  );

  const jumpToTime = useCallback(
    (day: number, hour: number) => {
      // Compute the tick count that maps to the given (day, hour)
      // using the inverse of computeSimTime.
      const ddMs = dayDurationMsRef.current;
      const tickMs = SIMULATOR_CONFIG.tickInterval;
      // daysFromStart: how many days from SIM_START_DAY to target day (0-6)
      const daysFromStart = ((day - SIM_START_DAY) % 7 + 7) % 7;
      // totalHours from the epoch (midnight of start-day)
      const totalHours = daysFromStart * 24 + hour;
      // totalSimHours = totalHours - SIM_START_HOUR
      let totalSimHours = totalHours - SIM_START_HOUR;
      if (totalSimHours < 0) totalSimHours += 7 * 24; // wrap around a full week
      // tickCount = totalSimHours / 24 * dayDurationMs / tickMs
      const newTc = Math.max(0, Math.round((totalSimHours / 24) * ddMs / tickMs));
      tickCountRef.current = newTc;
      setTickCount(newTc);
      setSimTime(computeCurrentSimTime());
    },
    [computeCurrentSimTime]
  );

  useEffect(() => {
    if (status === "running") {
      startTicker();
    } else if (status === "paused") {
      clearTicker();
    } else {
      // Off — reset everything
      clearTicker();
      setLiveQueues(deepCloneQueues(queues));
      setLiveCallHistories(deepCloneCallHistories(callHistories));
      setTickCount(0);
      tickCountRef.current = 0;
      setSupervisorLog([]);
      activeCallsRef.current.clear();
      optMomentumRef.current.clear();
      waitingAgesRef.current.clear();
      slCountersRef.current.clear();
      setSimTime(DEFAULT_SIM_TIME);
      setGraphData([]);
      queueMetricHistoryRef.current.clear();
      prevShiftIdRef.current = null;
      shiftDelayTicksRef.current = 0;
      pendingIncomingShiftRef.current = null;
      prevDayRef.current = null;
      setActiveScenarioId(null);
    }

    return clearTicker;
  }, [status, startTicker, clearTicker]);

  // Cleanup pending timers on unmount
  useEffect(() => {
    return () => {
      pendingTimersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <SimulatorContext.Provider
      value={{
        status,
        liveQueues,
        liveCallHistories,
        start,
        pause,
        stop,
        optAllIn,
        optAllOut,
        tickCount,
        activeSupervisorIds,
        toggleSupervisor,
        enableAllSupervisors,
        disableAllSupervisors,
        supervisorLog,
        supervisors: otherSupervisors,
        queueBadgeMode,
        setQueueBadgeMode: handleSetQueueBadgeMode,
        activeRole,
        setActiveRole,
        toggleAgentOptIn,
        pendingAgentToggles,
        toggleSupervisorOptIn,
        pendingSupervisorToggle,
        supervisorOptedIn,
        supervisorToggleAgentOpt,
        pendingSupervisorAgentToggles,
        supervisorBulkOpt,
        showFilters,
        setShowFilters,
        activeFilter,
        setActiveFilter,
        focusedQueueId,
        setFocusedQueueId,
        simTime,
        dayDurationMs,
        setDayDurationMs,
        shiftDelayEnabled,
        setShiftDelayEnabled,
        graphData,
        skipHour,
        jumpToTime,
        queueMetricHistory: queueMetricHistoryRef.current,
        callConfig,
        setCallConfig,
        applyScenario,
        activeScenarioId,
        focusedBoostDisabled,
        setFocusedBoostDisabled,
        narratorEnabled,
        setNarratorEnabled,
        narratorStep,
        setNarratorStep,
        showSparklines,
        setShowSparklines,
      }}
    >
      {children}
    </SimulatorContext.Provider>
  );
}