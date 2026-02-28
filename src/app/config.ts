/**
 * Simulated API delay configuration (in milliseconds).
 * Adjust these values to test different loading states.
 */
export const API_DELAYS = {
  /** Delay for the Queues REST API (queue names, IDs, initials, etc.) */
  queuesApi: 300,
  /** Delay for the SignalR real-time API (opted-in counts, service level, waiting calls per queue) */
  realtimeApi: 700,
  /** Delay for the Queue Details API (people list, opt-in toggle) on the details screen */
  detailsQueueApi: 1800,
  /** Delay for the Details Analytics API (calls waiting, longest wait, avg answer time) */
  detailsAnalyticsApi: 1000,
} as const;

/**
 * Queue simulator configuration.
 * Controls the behavior of the real-time data simulator.
 */
export const SIMULATOR_CONFIG = {
  /** How often (ms) the simulator ticks and potentially updates data */
  tickInterval: 3000,

  /* ── Agent opt-in/out noise ── */
  /** Probability (0–1) that any given agent self-opts in or out on a tick */
  optToggleProbability: 0.04,

  /* ── Agent presence ── */
  /** Probability (0–1) that an idle (non-in-call) agent's presence status changes on a tick */
  statusChangeProbability: 0.06,

  /* ── Call arrival / answering ── */
  /** Base probability (0–1) that a new call arrives in a queue each tick */
  callArrivalBase: 0.45,
  /** Extra arrival probability multiplier for busy queues (scales with initial callsWaiting) */
  callArrivalBusyBoost: 0.04,
  /** Probability (0–1) that a waiting call is missed (caller hangs up) each tick */
  callMissProbability: 0.12,
  /** Min ticks an agent stays in a call before finishing */
  callDurationMinTicks: 2,
  /** Max ticks an agent stays in a call before finishing */
  callDurationMaxTicks: 6,

  /* ── Analytics smoothing ── */
  /** How fast longest wait grows per tick when calls are waiting (seconds) */
  longestWaitGrowthSec: 18,
  /** How fast longest wait decays per tick when no calls waiting (seconds) */
  longestWaitDecaySec: 25,
  /** Smoothing factor for avg answer time (0–1, higher = faster convergence) */
  avgAnswerTimeSmoothing: 0.15,

  /* ── Service Level ── */
  /** SL threshold in seconds: calls answered within this time count toward SL numerator */
  serviceLevelThresholdSec: 20,
  /** Calls abandoned in fewer than this many seconds are excluded from SL denominator */
  serviceLevelShortAbandonSec: 5,
  /** SL smoothing factor per tick (0–1, higher = faster convergence to target) */
  serviceLevelSmoothingUp: 0.14,
  serviceLevelSmoothingDown: 0.12,

  /* ── Supervisor actions ── */
  /** Probability (0–1) that each active supervisor acts on a given tick */
  supervisorActProbability: 0.35,
  /** Max agents a supervisor will toggle per action (1–2) */
  supervisorMaxTogglePerAction: 2,

  /* ── Call history ── */
  /** Max call history entries to keep per queue (prevents unbounded growth) */
  maxCallHistoryPerQueue: 60,
} as const;

/* ══════════════════════════════════════════════════════
   Time-of-day simulation configuration
   ══════════════════════════════════════════════════════ */

/**
 * Default real-world duration (ms) for one simulated 24-hour day.
 * 180 000 ms = 3 minutes.  Configurable via the SimulatorPanel speed slider.
 */
export const DEFAULT_DAY_DURATION_MS = 180_000;

/** Simulation starts at this hour (0–23). */
export const SIM_START_HOUR = 9;

/** Simulation starts on this day (0 = Sun, 1 = Mon … 6 = Sat). */
export const SIM_START_DAY = 1; // Monday

/* ── Shift definitions ── */

export interface ShiftDef {
  id: number;
  label: string;
  /** Hour the shift starts (0–23, wraps around midnight). */
  startHour: number;
  /** Hour the shift ends (exclusive, may be < startHour for overnight wraps). */
  endHour: number;
  /** Staffing multiplier vs full strength (1.0 = 100 %). */
  staffingFactor: number;
  /** Extra probability agents self-opt-OUT each tick. */
  optOutBias: number;
}

export const SHIFTS: ShiftDef[] = [
  { id: 1, label: "Day",     startHour: 9,  endHour: 17, staffingFactor: 1.0,  optOutBias: 0.0 },
  { id: 2, label: "Evening", startHour: 17, endHour: 1,  staffingFactor: 0.70, optOutBias: 0.03 },
  { id: 3, label: "Night",   startHour: 1,  endHour: 9,  staffingFactor: 0.40, optOutBias: 0.07 },
];

/** Resolve which shift owns a given sim hour (0–23). */
export function getShiftForHour(hour: number): ShiftDef {
  for (const s of SHIFTS) {
    if (s.startHour < s.endHour) {
      // Normal range (e.g., 9–17)
      if (hour >= s.startHour && hour < s.endHour) return s;
    } else {
      // Overnight wrap (e.g., 17–1  →  17..23 + 0..1)
      if (hour >= s.startHour || hour < s.endHour) return s;
    }
  }
  return SHIFTS[0]; // fallback
}

/* ── Per-queue peak schedule ── */

export interface QueuePeakProfile {
  /** Hours (0–23) that are "peak" for this queue. */
  peakHours: number[];
  /** Days (0=Sun..6=Sat) with extra volume. Empty = all days equal. */
  peakDays: number[];
  /** Multiplier during peak hours (stacks with peakDay boost). */
  peakMultiplier: number;
  /** Multiplier for peak-day boost (extra on top of peakMultiplier if matching day). */
  peakDayBoost: number;
  /** Multiplier during off-peak hours. */
  offPeakMultiplier: number;
  /** Short narrative shown during surge (day + hour match). */
  surgeNarrative?: string;
  /** Day-specific narrative overrides: dayIndex → narrative. */
  dayNarratives?: Record<number, string>;
}

const hrs = (...ranges: [number, number][]) => {
  const out: number[] = [];
  for (const [a, b] of ranges) {
    if (a <= b) { for (let h = a; h < b; h++) out.push(h); }
    else { for (let h = a; h < 24; h++) out.push(h); for (let h = 0; h < b; h++) out.push(h); }
  }
  return out;
};

/**
 * Peak profiles keyed by queue ID.
 * Queues not listed here use the DEFAULT_PEAK_PROFILE.
 */
export const QUEUE_PEAK_PROFILES: Record<string, QueuePeakProfile> = {
  /* ── Supervisor queues ── */
  q1: { // ICU North Wing hotline
    peakHours: hrs([5, 8]),
    peakDays: [],
    peakMultiplier: 1.8,
    peakDayBoost: 1.0,
    offPeakMultiplier: 0.7,
    surgeNarrative: "Early-morning ICU surge — overnight complications surfacing",
  },
  q2: { // Primary care nurse line
    peakHours: hrs([8, 11]),
    peakDays: [1], // Monday
    peakMultiplier: 2.0,
    peakDayBoost: 1.5,
    offPeakMultiplier: 0.5,
    surgeNarrative: "Primary care phones ringing off the hook",
    dayNarratives: { 1: "Monday morning — weekend symptom backlog flooding nurse line" },
  },
  q3: { // Trauma unit
    peakHours: hrs([20, 4]),
    peakDays: [5, 6], // Fri, Sat
    peakMultiplier: 2.2,
    peakDayBoost: 1.4,
    offPeakMultiplier: 0.5,
    surgeNarrative: "Nighttime trauma surge — accident & injury calls rising",
    dayNarratives: {
      5: "Friday night — trauma calls spiking after bars close",
      6: "Saturday night — weekend trauma volume at peak",
    },
  },
  q4: { // Emergency department
    peakHours: hrs([22, 4]),
    peakDays: [5, 6], // Fri, Sat
    peakMultiplier: 2.5,
    peakDayBoost: 1.6,
    offPeakMultiplier: 0.45,
    surgeNarrative: "ER triage overwhelmed with late-night emergencies",
    dayNarratives: {
      5: "Friday night — ER filling up with party-related injuries",
      6: "Saturday night — peak ER volume, intoxication & falls",
    },
  },
  q5: { // Discharge planning
    peakHours: hrs([9, 12]),
    peakDays: [],
    peakMultiplier: 1.8,
    peakDayBoost: 1.0,
    offPeakMultiplier: 0.3,
    surgeNarrative: "Morning discharge rush — families coordinating pick-ups",
  },
  q6: { // Surgical ICU post-op
    peakHours: hrs([6, 10]),
    peakDays: [1, 2], // Mon, Tue (weekend surgery follow-ups)
    peakMultiplier: 1.6,
    peakDayBoost: 1.3,
    offPeakMultiplier: 0.6,
    surgeNarrative: "Post-op checks surging as overnight surgeries conclude",
    dayNarratives: { 1: "Monday AM — weekend emergency surgery follow-ups rolling in" },
  },
  q7: { // General medicine floor 5
    peakHours: hrs([9, 12]),
    peakDays: [],
    peakMultiplier: 1.6,
    peakDayBoost: 1.0,
    offPeakMultiplier: 0.55,
    surgeNarrative: "Mid-morning medicine calls peaking — rounding questions",
  },
  q8: { // Palliative care
    peakHours: hrs([14, 17]),
    peakDays: [],
    peakMultiplier: 1.4,
    peakDayBoost: 1.0,
    offPeakMultiplier: 0.6,
    surgeNarrative: "Afternoon family check-in calls on palliative line",
  },
  q9: { // Oncology consultation
    peakHours: hrs([10, 14]),
    peakDays: [1, 2, 3], // Mon-Wed (treatment scheduling)
    peakMultiplier: 1.7,
    peakDayBoost: 1.2,
    offPeakMultiplier: 0.4,
    surgeNarrative: "Oncology consultation demand surging",
    dayNarratives: { 1: "Monday — week's treatment plans driving oncology call volume" },
  },
  q10: { // Pediatric urgent care
    peakHours: hrs([17, 21]),
    peakDays: [0, 6], // Weekend
    peakMultiplier: 2.0,
    peakDayBoost: 1.4,
    offPeakMultiplier: 0.4,
    surgeNarrative: "After-school & evening pediatric calls surging",
    dayNarratives: {
      0: "Sunday — parents calling in after weekend activities",
      6: "Saturday — kids' sports injuries and illness calls peaking",
    },
  },
  q11: { // Radiology results
    peakHours: hrs([10, 13]),
    peakDays: [],
    peakMultiplier: 1.5,
    peakDayBoost: 1.0,
    offPeakMultiplier: 0.2,
    surgeNarrative: "Late-morning radiology result callbacks ramping up",
  },
  q12: { // Post-surgical follow-up
    peakHours: hrs([9, 12]),
    peakDays: [1], // Monday
    peakMultiplier: 1.6,
    peakDayBoost: 1.3,
    offPeakMultiplier: 0.4,
    surgeNarrative: "Morning post-surgical follow-up calls peaking",
    dayNarratives: { 1: "Monday — post-weekend surgery patients calling in" },
  },
  q13: { // Mental health crisis line
    peakHours: hrs([20, 2]),
    peakDays: [5, 0], // Friday, Sunday
    peakMultiplier: 2.3,
    peakDayBoost: 1.5,
    offPeakMultiplier: 0.5,
    surgeNarrative: "Late-night mental health crisis calls surging",
    dayNarratives: {
      5: "Friday night — crisis calls rising after difficult week",
      0: "Sunday night — pre-Monday anxiety driving crisis volume",
    },
  },
  q14: { // Labor & delivery
    peakHours: hrs([20, 6]),
    peakDays: [],
    peakMultiplier: 2.0,
    peakDayBoost: 1.0,
    offPeakMultiplier: 0.5,
    surgeNarrative: "Overnight labor & delivery triage volume peaking",
  },
  q15: { // Pharmacy benefits
    peakHours: hrs([9, 17]),
    peakDays: [4], // Thursday
    peakMultiplier: 1.5,
    peakDayBoost: 1.4,
    offPeakMultiplier: 0.2,
    surgeNarrative: "Pharmacy benefits calls active during business hours",
    dayNarratives: { 4: "Thursday — end-of-week prescription rush before weekend" },
  },

  /* ── Agent-only queues ── */
  aq1: { // Outpatient scheduling
    peakHours: hrs([8, 11]),
    peakDays: [1], // Monday
    peakMultiplier: 1.8,
    peakDayBoost: 1.4,
    offPeakMultiplier: 0.3,
    surgeNarrative: "Morning scheduling rush — appointment requests flooding in",
    dayNarratives: { 1: "Monday morning — outpatient scheduling slammed from weekend requests" },
  },
  aq2: { // Patient transport
    peakHours: hrs([7, 9], [16, 18]),
    peakDays: [],
    peakMultiplier: 1.7,
    peakDayBoost: 1.0,
    offPeakMultiplier: 0.35,
    surgeNarrative: "Shift-change transport coordination peak",
  },
  aq3: { // Cardiology nurse on-call
    peakHours: hrs([5, 8], [22, 2]),
    peakDays: [],
    peakMultiplier: 1.9,
    peakDayBoost: 1.0,
    offPeakMultiplier: 0.5,
    surgeNarrative: "Overnight cardiac events driving call volume",
  },
  aq4: { // Insurance verification
    peakHours: hrs([13, 17]),
    peakDays: [4], // Thursday
    peakMultiplier: 2.0,
    peakDayBoost: 1.6,
    offPeakMultiplier: 0.25,
    surgeNarrative: "Afternoon insurance verification rush",
    dayNarratives: { 4: "Thursday PM — end-of-week claims rush, deadline pressure" },
  },
  aq5: { // Rehab & PT intake
    peakHours: hrs([8, 10]),
    peakDays: [1],
    peakMultiplier: 1.5,
    peakDayBoost: 1.2,
    offPeakMultiplier: 0.35,
    surgeNarrative: "Morning rehab intake calls peaking",
  },
};

/** Fallback profile for queues without a custom peak schedule. */
export const DEFAULT_PEAK_PROFILE: QueuePeakProfile = {
  peakHours: hrs([9, 12], [13, 16]),
  peakDays: [],
  peakMultiplier: 1.4,
  peakDayBoost: 1.0,
  offPeakMultiplier: 0.6,
};

/**
 * Day names for display.
 */
export const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
export const DAY_NAMES_FULL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;

/**
 * Compute the time-of-day surge multiplier for a given queue at a given sim hour + day.
 * Returns { multiplier, isSurge, narrative }.
 */
export function getTimeSurgeInfo(
  queueId: string,
  simHour: number,
  simDay: number
): { multiplier: number; isSurge: boolean; narrative: string | null } {
  const profile = QUEUE_PEAK_PROFILES[queueId] ?? DEFAULT_PEAK_PROFILE;
  const isPeakHour = profile.peakHours.includes(Math.floor(simHour));
  const isPeakDay = profile.peakDays.length > 0 && profile.peakDays.includes(simDay);

  let multiplier: number;
  let narrative: string | null = null;

  if (isPeakHour) {
    multiplier = profile.peakMultiplier;
    if (isPeakDay) {
      multiplier *= profile.peakDayBoost;
      // Use day-specific narrative if available
      narrative = profile.dayNarratives?.[simDay] ?? profile.surgeNarrative ?? null;
    } else {
      narrative = profile.surgeNarrative ?? null;
    }
  } else {
    multiplier = profile.offPeakMultiplier;
    // Slight day boost even during off-peak on peak days
    if (isPeakDay) {
      multiplier *= 1.15;
    }
  }

  return { multiplier, isSurge: isPeakHour, narrative };
}
