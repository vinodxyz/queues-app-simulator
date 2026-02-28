import { useNavigate } from "react-router";
import { supervisorProfileAvatar, SUPERVISOR_QUEUE_IDS } from "../data";
import { useQueuesData, type QueueBasicInfo, type QueueRealtimeData } from "../hooks/useQueuesData";
import { useSimulator } from "../hooks/useSimulator";
import type { QueueBadgeMode } from "../hooks/useSimulator";
import { StatusBar } from "./StatusBar";
import { TabBar } from "./TabBar";
import { HomeIndicator } from "./HomeIndicator";
import { ServiceLevelBadge } from "./ServiceLevelBadge";
import { WaitingCallsBadge } from "./WaitingCallsBadge";
import { AgentQueuesHome } from "./AgentQueuesHome";
import { QueueFilters } from "./QueueFilters";
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
      {/* Bottom divider */}
      <div className="absolute bottom-0 h-px left-0 right-0">
        <div className="absolute bottom-0 h-[0.5px] left-[80px] right-0" style={{ backgroundColor: "var(--border)" }} />
      </div>
    </div>
  );
}

/** Section header skeleton */
function SkeletonSectionHeader() {
  return (
    <div className="bg-background relative shrink-0 w-full h-[48px] overflow-clip">
      <div className="absolute left-[20px] top-[18px]">
        <SkeletonBar width={169} height={17} />
      </div>
    </div>
  );
}

/** Queue row: names + avatar visible, real-time data shimmer */
function QueueRowRealtimeLoading({
  queue,
  onClick,
}: {
  queue: QueueBasicInfo;
  onClick: () => void;
}) {
  return (
    <div
      className="relative shrink-0 w-full cursor-pointer active:bg-secondary/50 transition-colors"
      onClick={onClick}
    >
      <div className="bg-background absolute inset-0" />
      <div className="flex items-center relative w-full">
        <div className="flex-1 flex items-center pl-[16px] pr-[12px] py-[12px]">
          <div className="pr-[16px] shrink-0">
            {/* Always show initials avatar during RT loading — SL/WC data not yet available */}
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
            {/* Shimmer bar for opted-in count */}
            <SkeletonBar width={80} height={14} />
          </div>
        </div>
        <div className="flex gap-[8px] items-center px-[12px] shrink-0">
          <ChevronRight />
        </div>
      </div>
      <div className="absolute bottom-0 h-px left-0 right-0">
        <div className="absolute bottom-0 h-[0.5px] left-[56px] right-0" style={{ backgroundColor: "var(--border)" }} />
      </div>
    </div>
  );
}

/* ── Sub-components ── */

/** Renders the initials avatar, service-level badge, or waiting-calls badge based on mode */
function QueueBadge({
  initials,
  serviceLevel,
  callsWaiting,
  badgeMode,
  avatarBg,
  avatarTextColor,
}: {
  initials: string;
  serviceLevel: number;
  callsWaiting: number;
  badgeMode: QueueBadgeMode;
  avatarBg: string;
  avatarTextColor: string;
}) {
  const isAvatar = badgeMode === "avatar";
  const isSL = badgeMode === "service-level";
  const isWC = badgeMode === "waiting-calls";
  return (
    <div className="relative shrink-0 size-[40px]">
      {/* Avatar */}
      <div
        className="absolute inset-0 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: avatarBg,
          opacity: isAvatar ? 1 : 0,
          transform: isAvatar ? "scale(1)" : "scale(0.85)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <span
          style={{
            fontSize: "var(--text-label)",
            fontWeight: "var(--font-weight-semibold)",
            color: avatarTextColor,
          }}
        >
          {initials}
        </span>
      </div>
      {/* Service level */}
      <div
        className="absolute inset-0"
        style={{
          opacity: isSL ? 1 : 0,
          transform: isSL ? "scale(1)" : "scale(0.85)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <ServiceLevelBadge value={serviceLevel} size={40} />
      </div>
      {/* Waiting calls */}
      <div
        className="absolute inset-0"
        style={{
          opacity: isWC ? 1 : 0,
          transform: isWC ? "scale(1)" : "scale(0.85)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <WaitingCallsBadge count={callsWaiting} size={40} />
      </div>
    </div>
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

/* ── Full loaded queue row ── */

function QueueRow({
  queue,
  rt,
  badgeMode,
  onClick,
}: {
  queue: QueueBasicInfo;
  rt: QueueRealtimeData;
  badgeMode: QueueBadgeMode;
  onClick: () => void;
}) {
  return (
    <div
      className="relative shrink-0 w-full cursor-pointer active:bg-secondary/50 transition-colors"
      onClick={onClick}
    >
      <div className="bg-background absolute inset-0" />
      <div className="flex items-center relative w-full">
        <div className="flex-1 flex items-center pl-[16px] pr-[12px] py-[12px]">
          <div className="pr-[16px] shrink-0">
            <QueueBadge
              initials={queue.initials}
              serviceLevel={rt.serviceLevel}
              callsWaiting={rt.callsWaiting}
              badgeMode={badgeMode}
              avatarBg={queue.avatarBg}
              avatarTextColor={queue.avatarTextColor}
            />
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
                color: "var(--muted-foreground)",
                letterSpacing: "-0.08px",
                lineHeight: "20px",
              }}
            >
              {rt.optedInCount} opted in
            </span>
          </div>
        </div>
        <div className="flex gap-[8px] items-center px-[12px] shrink-0">
          {rt.optedInCount === 0 && <AlertIcon />}
          <ChevronRight />
        </div>
      </div>
      <div className="absolute bottom-0 h-px left-0 right-0">
        <div className="absolute bottom-0 h-[0.5px] left-[56px] right-0" style={{ backgroundColor: "var(--border)" }} />
      </div>
    </div>
  );
}

/* ── Main component ── */

const SKELETON_ROW_COUNT = 8;

export function QueuesHome() {
  const navigate = useNavigate();
  const { queuesList, realtimeData, isQueuesLoading, isRealtimeLoading } = useQueuesData();
  const { queueBadgeMode, activeRole, activeFilter, liveQueues } = useSimulator();

  // If agent role, render agent home
  if (activeRole === "agent") {
    return <AgentQueuesHome />;
  }

  const bothLoading = isQueuesLoading && isRealtimeLoading;
  const queuesLoadedOnly = !isQueuesLoading && isRealtimeLoading;
  const bothLoaded = !isQueuesLoading && !isRealtimeLoading;

  // Filter to supervisor-only queues
  const supQueueIds = new Set(SUPERVISOR_QUEUE_IDS);
  const filteredQueuesList = queuesList?.filter((q) => supQueueIds.has(q.id)) ?? null;

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
                  <img alt="" className="absolute max-w-none object-cover rounded-full size-full" style={{ objectPosition: "center 20%" }} src={supervisorProfileAvatar} />
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
          <SkeletonSectionHeader />
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
                Queues you lead
              </span>
            </div>
          </div>
        )}

        {/* State 1: Both loading → full skeleton */}
        {bothLoading &&
          Array.from({ length: SKELETON_ROW_COUNT }).map((_, i) => (
            <SkeletonQueueRow key={`skeleton-${i}`} />
          ))}

        {/* State 2: Queues loaded, real-time still loading → names + avatars visible, metrics shimmer */}
        {queuesLoadedOnly &&
          filteredQueuesList!.map((queue) => (
            <QueueRowRealtimeLoading
              key={queue.id}
              queue={queue}
              onClick={() => navigate(`/queue/${queue.id}`)}
            />
          ))}

        {/* State 3: Both loaded → full content (with filter applied) */}
        {bothLoaded &&
          filteredQueuesList!
            .filter((queue) => {
              if (!activeFilter) return true;
              const lq = liveQueues.find((q) => q.id === queue.id);
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
            .map((queue) => {
              const rt = realtimeData![queue.id];
              if (!rt) return null;
              return (
                <QueueRow
                  key={queue.id}
                  queue={queue}
                  rt={rt}
                  badgeMode={queueBadgeMode}
                  onClick={() => navigate(`/queue/${queue.id}`)}
                />
              );
            })}

        {/* Empty state when filter yields no results */}
        {bothLoaded && activeFilter && filteredQueuesList!.filter((queue) => {
          const lq = liveQueues.find((q) => q.id === queue.id);
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
