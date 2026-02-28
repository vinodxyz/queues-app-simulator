import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { agentUser, agentProfileAvatar, AGENT_QUEUE_IDS } from "../data";
import { useSimulator } from "../hooks/useSimulator";
import type { QueueBadgeMode } from "../hooks/useSimulator";
import { StatusBar } from "./StatusBar";
import { TabBar } from "./TabBar";
import { HomeIndicator } from "./HomeIndicator";
import { ServiceLevelBadge } from "./ServiceLevelBadge";
import { WaitingCallsBadge } from "./WaitingCallsBadge";
import { QueueFilters } from "./QueueFilters";
import { API_DELAYS } from "../config";
import svgPaths from "../../imports/svg-an0cakibws";

/* ── Skeleton primitives ── */

function SkeletonBar({ width, height = 17 }: { width: number; height?: number }) {
  return (
    <div
      className="rounded-[2px] shrink-0"
      style={{
        width,
        height,
        background: "linear-gradient(90deg, var(--border) 0%, var(--border) 50%, var(--secondary) 86%)",
        animation: "shimmer-pulse 1.5s ease-in-out infinite",
      }}
    />
  );
}

function SkeletonCircle({ size = 48 }: { size?: number }) {
  return (
    <div className="shrink-0" style={{ width: size, height: size, animation: "shimmer-pulse 1.5s ease-in-out infinite" }}>
      <svg className="block size-full" fill="none" viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill="var(--border)" />
      </svg>
    </div>
  );
}

/** Full skeleton row — both APIs still loading */
function SkeletonQueueRow() {
  return (
    <div className="bg-background relative shrink-0 w-full">
      <div className="flex items-center w-full">
        <div className="flex-1 flex items-center gap-[16px] px-[15px] py-[18px]">
          <SkeletonCircle size={48} />
          <div className="flex-1 flex flex-col gap-[6px] min-w-0">
            <div className="flex items-start justify-between w-full">
              <SkeletonBar width={184} height={17} />
              <SkeletonBar width={54} height={12} />
            </div>
            <SkeletonBar width={87} height={17} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-px left-0 right-0">
        <div className="absolute bottom-0 h-[0.5px] left-[80px] right-0" style={{ backgroundColor: "var(--border)" }} />
      </div>
    </div>
  );
}

/* ── Toggle (iOS-style, matching Figma) ── */

function Toggle({ toggled, onToggle, disabled = false }: { toggled: boolean; onToggle: () => void; disabled?: boolean }) {
  return (
    <button
      className="block cursor-pointer h-[31px] overflow-clip relative rounded-[20px] w-[51px] transition-colors shrink-0"
      style={{
        backgroundColor: toggled ? "var(--primary)" : "var(--toggle-off)",
        opacity: disabled ? 0.7 : 1,
        pointerEvents: disabled ? "none" : "auto",
      }}
      onClick={(e) => { e.stopPropagation(); onToggle(); }}
      disabled={disabled}
    >
      <div
        className="absolute top-1/2 -translate-y-1/2 size-[28px] rounded-full bg-white transition-all"
        style={{
          left: toggled ? "21.5px" : "1.5px",
          boxShadow: "0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)",
        }}
      />
    </button>
  );
}

function ChevronRight() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <svg
        className="absolute block"
        style={{ width: 6, height: 10.5, left: "calc(50% + 5px)", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 6 10.5"
      >
        <path d={svgPaths.p2c0a4900} fill="var(--muted-foreground)" />
      </svg>
    </div>
  );
}

function AlertIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg
        className="absolute block"
        style={{ width: 21, height: 20, left: "calc(50% + 0.5px)", top: "calc(50% + 1px)", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 21 20"
      >
        <path d={svgPaths.p30829580} fill="var(--destructive)" />
      </svg>
    </div>
  );
}

/* ── Queue row: name + avatar loaded, real-time data shimmer ── */

function AgentQueueRowRealtimeLoading({
  queue,
  onTapInfo,
}: {
  queue: { id: string; name: string; initials: string; avatarBg: string; avatarTextColor: string };
  onTapInfo: () => void;
}) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-background absolute inset-0" />
      <div className="flex items-center relative w-full">
        {/* Left: tappable area for navigation */}
        <div
          className="flex-1 flex items-center pl-[16px] pr-[12px] py-[12px] cursor-pointer active:bg-secondary/50 transition-colors"
          onClick={onTapInfo}
        >
          <div className="pr-[16px] shrink-0">
            {/* Always show initials avatar during RT loading */}
            <div className="relative shrink-0 size-[40px]">
              <div
                className="absolute inset-0 rounded-full flex items-center justify-center"
                style={{ backgroundColor: queue.avatarBg }}
              >
                <span
                  style={{
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-semibold)",
                    color: queue.avatarTextColor,
                  }}
                >
                  {queue.initials}
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center min-w-0 gap-[3px]">
            <span
              className="w-full"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--card-foreground)",
                letterSpacing: "-0.41px",
                lineHeight: "22px",
              }}
            >
              {queue.name}
            </span>
            {/* Shimmer bar for opted-in subtitle */}
            <SkeletonBar width={100} height={14} />
          </div>
        </div>
        {/* Right: shimmer for toggle */}
        <div className="flex gap-[8px] items-center pr-[12px] shrink-0">
          <div
            className="rounded-[20px] shrink-0"
            style={{
              width: 51,
              height: 31,
              backgroundColor: "var(--border)",
              animation: "shimmer-pulse 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
      <div className="absolute bottom-0 h-px left-0 right-0">
        <div className="absolute bottom-0 h-[0.5px] left-[56px] right-0" style={{ backgroundColor: "var(--border)" }} />
      </div>
    </div>
  );
}

/* ── Agent queue row with opt-in toggle (fully loaded) ── */

interface AgentQueueRowProps {
  queue: { id: string; name: string; initials: string; optedInCount: number; hasAlert?: boolean; avatarBg: string; avatarTextColor: string; serviceLevel: number; callsWaiting: number };
  agentOptedIn: boolean;
  pendingState?: 'opting-in' | 'opting-out';
  badgeMode: QueueBadgeMode;
  onToggle: () => void;
  onTapInfo: () => void;
}

function AgentQueueRow({ queue, agentOptedIn, pendingState, badgeMode, onToggle, onTapInfo }: AgentQueueRowProps) {
  // Determine subtitle and toggle visual state based on pending/actual state
  let subtitle: string;
  let subtitleColor: string;
  let toggleVisualOn: boolean;
  let toggleDisabled: boolean;

  if (pendingState === 'opting-in') {
    subtitle = "Opting in...";
    subtitleColor = "var(--muted-foreground)";
    toggleVisualOn = true;
    toggleDisabled = true;
  } else if (pendingState === 'opting-out') {
    subtitle = "Opting out...";
    subtitleColor = "var(--muted-foreground)";
    toggleVisualOn = false;
    toggleDisabled = true;
  } else if (agentOptedIn) {
    const othersOptedIn = queue.optedInCount - 1;
    subtitle = othersOptedIn > 0 ? `You & ${othersOptedIn} other${othersOptedIn !== 1 ? 's' : ''} opted in` : "You're opted in";
    subtitleColor = "var(--primary)";
    toggleVisualOn = true;
    toggleDisabled = false;
  } else {
    subtitle = `${queue.optedInCount} opted in`;
    subtitleColor = "var(--muted-foreground)";
    toggleVisualOn = false;
    toggleDisabled = false;
  }

  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-background absolute inset-0" />
      <div className="flex items-center relative w-full">
        {/* Left: tappable area for navigation */}
        <div
          className="flex-1 flex items-center pl-[16px] pr-[12px] py-[12px] cursor-pointer active:bg-secondary/50 transition-colors"
          onClick={onTapInfo}
        >
          <div className="pr-[16px] shrink-0">
            <div className="relative shrink-0 size-[40px]">
              {/* Avatar */}
              <div
                className="absolute inset-0 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: queue.avatarBg,
                  opacity: badgeMode === "avatar" ? 1 : 0,
                  transform: badgeMode === "avatar" ? "scale(1)" : "scale(0.85)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-semibold)",
                    color: queue.avatarTextColor,
                  }}
                >
                  {queue.initials}
                </span>
              </div>
              {/* Service level */}
              <div
                className="absolute inset-0"
                style={{
                  opacity: badgeMode === "service-level" ? 1 : 0,
                  transform: badgeMode === "service-level" ? "scale(1)" : "scale(0.85)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <ServiceLevelBadge value={queue.serviceLevel} size={40} />
              </div>
              {/* Waiting calls */}
              <div
                className="absolute inset-0"
                style={{
                  opacity: badgeMode === "waiting-calls" ? 1 : 0,
                  transform: badgeMode === "waiting-calls" ? "scale(1)" : "scale(0.85)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <WaitingCallsBadge count={queue.callsWaiting} size={40} />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center min-w-0">
            <span
              className="w-full"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--card-foreground)",
                letterSpacing: "-0.41px",
                lineHeight: "22px",
              }}
            >
              {queue.name}
            </span>
            <span
              className="w-full truncate"
              style={{
                fontSize: "var(--text-h4)",
                fontWeight: "var(--font-weight-normal)",
                color: subtitleColor,
                letterSpacing: "-0.08px",
                lineHeight: "20px",
              }}
            >
              {subtitle}
            </span>
          </div>
        </div>
        {/* Right: alert + toggle */}
        <div className="flex gap-[8px] items-center pr-[12px] shrink-0">
          {queue.optedInCount === 0 && queue.hasAlert && <AlertIcon />}
          <Toggle toggled={toggleVisualOn} onToggle={onToggle} disabled={toggleDisabled} />
        </div>
      </div>
      <div className="absolute bottom-0 h-px left-0 right-0">
        <div className="absolute bottom-0 h-[0.5px] left-[56px] right-0" style={{ backgroundColor: "var(--border)" }} />
      </div>
    </div>
  );
}

/* ── Main Agent Home ── */

const SKELETON_ROW_COUNT = 8;

export function AgentQueuesHome() {
  const navigate = useNavigate();
  const { liveQueues, toggleAgentOptIn, pendingAgentToggles, queueBadgeMode, activeFilter } = useSimulator();

  // Simulate staggered API loading
  const [queuesLoaded, setQueuesLoaded] = useState(false);
  const [realtimeLoaded, setRealtimeLoaded] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setQueuesLoaded(true), API_DELAYS.queuesApi);
    const t2 = setTimeout(() => setRealtimeLoaded(true), API_DELAYS.realtimeApi);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const bothLoading = !queuesLoaded && !realtimeLoaded;
  const queuesLoadedOnly = queuesLoaded && !realtimeLoaded;
  const bothLoaded = queuesLoaded && realtimeLoaded;

  // Build basic queue info for the loading state
  const agentQueueBasicInfo = AGENT_QUEUE_IDS.map((qid) => {
    const q = liveQueues.find((lq) => lq.id === qid);
    if (!q) return null;
    return { id: q.id, name: q.name, initials: q.initials, avatarBg: q.avatarBg, avatarTextColor: q.avatarTextColor };
  }).filter(Boolean) as { id: string; name: string; initials: string; avatarBg: string; avatarTextColor: string }[];

  return (
    <div className="bg-background flex flex-col items-start overflow-clip relative size-full">
      <StatusBar />

      {/* Navigation bar */}
      <div className="bg-background relative shrink-0 w-full">
        <div className="flex h-[48px] items-center w-full">
          <div className="flex-1 flex items-center pl-[16px]">
            <div className="flex gap-[12px] h-[40px] items-center">
              {/* User avatar */}
              <div className="relative shrink-0 size-[32px]">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img alt="" className="absolute max-w-none object-cover rounded-full size-full" style={{ objectPosition: "center 20%" }} src={agentProfileAvatar} />
                </div>
              </div>
              <h2 style={{ fontSize: "var(--text-h2)", fontWeight: "var(--font-weight-bold)", letterSpacing: "0.33px" }}>
                Queues
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-end pr-[18px]">
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <svg
                className="absolute block"
                style={{ width: 12.49, height: 17.5, left: "50%", top: "calc(50% - 0.5px)", transform: "translate(-50%, -50%)" }}
                fill="none"
                viewBox="0 0 12.4919 17.5"
              >
                <path d={svgPaths.p15863980} fill="var(--foreground)" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content - scrollable */}
      <div className="flex-1 flex flex-col items-start overflow-y-auto w-full">
        {/* Filter toolbar */}
        <QueueFilters />

        {/* Section header */}
        {bothLoading ? (
          <div className="bg-background relative shrink-0 w-full h-[48px] overflow-clip">
            <div className="absolute left-[20px] top-[18px]">
              <SkeletonBar width={169} height={17} />
            </div>
          </div>
        ) : (
          <div className="bg-background relative shrink-0 w-full">
            <div className="flex items-center justify-between px-[16px] pb-[8px] pt-[16px]">
              <span
                style={{
                  fontSize: "var(--text-h4)",
                  fontWeight: "var(--font-weight-bold)",
                  color: "var(--card-foreground)",
                  letterSpacing: "-0.24px",
                }}
              >
                Queues you're agent in
              </span>
            </div>
          </div>
        )}

        {/* State 1: Both loading → full skeleton */}
        {bothLoading &&
          Array.from({ length: SKELETON_ROW_COUNT }).map((_, i) => (
            <SkeletonQueueRow key={`skeleton-${i}`} />
          ))}

        {/* State 2: Queues loaded, real-time still loading → names + avatar visible, metrics shimmer */}
        {queuesLoadedOnly &&
          agentQueueBasicInfo.map((queue) => (
            <AgentQueueRowRealtimeLoading
              key={queue.id}
              queue={queue}
              onTapInfo={() => navigate(`/queue/${queue.id}`)}
            />
          ))}

        {/* State 3: Both loaded → full content (with filter applied) */}
        {bothLoaded &&
          AGENT_QUEUE_IDS
            .filter((queueId) => {
              if (!activeFilter) return true;
              const lq = liveQueues.find((q) => q.id === queueId);
              if (!lq) return true;
              switch (activeFilter) {
                case "waiting":
                  return lq.callsWaiting > 0;
                case "no-agents":
                  return lq.optedInCount === 0;
                case "10+-waiting":
                  return lq.callsWaiting >= 10;
                case "low-waiting":
                  return lq.callsWaiting <= 2;
                default:
                  return true;
              }
            })
            .map((queueId) => {
              const queue = liveQueues.find((q) => q.id === queueId);
              if (!queue) return null;
              const agentPerson = queue.people.find((p) => p.id === agentUser.id);
              const isOptedIn = agentPerson?.optedIn ?? false;
              const pending = pendingAgentToggles.get(queue.id);

              return (
                <AgentQueueRow
                  key={queue.id}
                  queue={queue}
                  agentOptedIn={isOptedIn}
                  pendingState={pending}
                  badgeMode={queueBadgeMode}
                  onToggle={() => toggleAgentOptIn(queue.id)}
                  onTapInfo={() => navigate(`/queue/${queue.id}`)}
                />
              );
            })}

        {/* Empty state when filter yields no results */}
        {bothLoaded && activeFilter && AGENT_QUEUE_IDS.filter((queueId) => {
          const lq = liveQueues.find((q) => q.id === queueId);
          if (!lq) return false;
          switch (activeFilter) {
            case "waiting": return lq.callsWaiting > 0;
            case "no-agents": return lq.optedInCount === 0;
            case "10+-waiting": return lq.callsWaiting >= 10;
            case "low-waiting": return lq.callsWaiting <= 2;
            default: return true;
          }
        }).length === 0 && (
          <div className="flex-1 flex items-center justify-center w-full py-[40px]">
            <span style={{ fontSize: "var(--text-h4)", fontWeight: "var(--font-weight-normal)", color: "var(--muted-foreground)" }}>
              No queues match this filter
            </span>
          </div>
        )}

        {/* Bottom padding for scrollability */}
        <div style={{ height: 40 }} className="shrink-0 w-full" />
      </div>

      <TabBar />
      <HomeIndicator />
    </div>
  );
}
