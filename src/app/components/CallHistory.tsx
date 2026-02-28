import { type CallRecord } from "../data";
import { useSimulator } from "../hooks/useSimulator";
import svgPaths from "../../imports/svg-ub3hkc8mkg";

// Missed/bounced call icon (red arrow bounce down)
function MissedCallIcon() {
  return (
    <div className="relative rounded-full shrink-0" style={{ backgroundColor: "var(--missed-call-icon-bg)" }}>
      <div className="flex items-center p-[10px]">
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <svg
            className="absolute block"
            style={{ width: 20, height: 11.75, left: "50%", top: "calc(50% - 0.13px)", transform: "translate(-50%, -50%)" }}
            fill="none"
            viewBox="0 0 20 11.75"
          >
            <path d={svgPaths.p1efe9e00} fill="var(--missed-call)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Received/answered call icon (gray arrow down-left in circle)
function AnsweredCallIcon() {
  return (
    <div className="relative rounded-full shrink-0" style={{ backgroundColor: "var(--icon-surface)" }}>
      <div className="flex items-center p-[12px]">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <svg
            className="absolute block"
            style={{ width: 14, height: 14, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
            fill="none"
            viewBox="0 0 14 14"
          >
            <path d={svgPaths.p28f55f80} fill="var(--icon-secondary)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Outgoing call icon (gray arrow up-right in circle)
function OutgoingCallIcon() {
  return (
    <div className="relative rounded-full shrink-0" style={{ backgroundColor: "var(--icon-surface)" }}>
      <div className="flex items-center p-[12px]">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <svg
            className="absolute block"
            style={{ width: 14, height: 14, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
            fill="none"
            viewBox="0 0 14 14"
          >
            <path d={svgPaths.p2b729500} fill="var(--icon-secondary)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Info icon
function InfoIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <svg
        className="absolute block"
        style={{ width: 16, height: 16, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 16 16"
      >
        <path d={svgPaths.p28b43400} fill="var(--card-foreground)" />
      </svg>
    </div>
  );
}

// Video clip icon
function VideoIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <svg
        className="absolute block"
        style={{ width: 16, height: 14, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 16 14"
      >
        <path d={svgPaths.p34fd7b80} fill="var(--card-foreground)" />
      </svg>
    </div>
  );
}

// Transcript/slide text icon
function TranscriptIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <svg
        className="absolute block"
        style={{ width: 16, height: 12, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 16 12"
      >
        <path d={svgPaths.p146e8c80} fill="var(--card-foreground)" />
      </svg>
    </div>
  );
}

function CallStatusIcon({ type }: { type: CallRecord["type"] }) {
  switch (type) {
    case "missed":
    case "forwarded":
      return <MissedCallIcon />;
    case "outgoing":
      return <OutgoingCallIcon />;
    case "answered":
    default:
      return <AnsweredCallIcon />;
  }
}

function CallHistoryRow({ call, onCallTap, onInfoTap }: { call: CallRecord; onCallTap?: (call: CallRecord) => void; onInfoTap?: (call: CallRecord) => void }) {
  const isMissedOrForwarded = call.type === "missed" || call.type === "forwarded";
  const subtitleColor = isMissedOrForwarded ? "var(--missed-call)" : "var(--muted-foreground)";

  return (
    <div className="bg-background relative shrink-0 w-full">
      <div className="flex items-center py-[12px] w-full">
        {/* Left: icon + text — tap to call */}
        <div
          className="flex-1 flex items-center gap-[6px] pl-[16px] min-w-0 cursor-pointer active:bg-secondary/30 transition-colors"
          onClick={() => onCallTap?.(call)}
        >
          <CallStatusIcon type={call.type} />
          <div className="flex flex-col gap-[2px] items-start justify-center pl-[6px] shrink-0 max-w-[55%]">
            <span
              className="truncate w-full"
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--card-foreground)",
                letterSpacing: "-0.41px",
                lineHeight: "22px",
              }}
            >
              {call.callerName}
            </span>
            <span
              className="truncate w-full"
              style={{
                fontSize: "var(--text-h4)",
                fontWeight: "var(--font-weight-normal)",
                color: subtitleColor,
                letterSpacing: "-0.08px",
                lineHeight: "20px",
              }}
            >
              {call.subtitle}
            </span>
          </div>
        </div>

        {/* Right: time + accessories — tap to open action sheet */}
        <div
          className="flex flex-col gap-[8px] items-end pr-[12px] shrink-0 cursor-pointer active:bg-secondary/30 transition-colors py-[4px] pl-[8px]"
          onClick={() => onInfoTap?.(call)}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--muted-foreground)",
              lineHeight: "16px",
            }}
          >
            {call.time}
          </span>
          <div className="flex gap-[4px] items-center justify-end">
            {call.hasVideo && <VideoIcon />}
            {call.hasTranscript && <TranscriptIcon />}
            <InfoIcon />
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 h-px left-0 right-0">
        <div className="absolute bg-border bottom-0 h-[0.5px] left-[56px] right-0" />
      </div>
    </div>
  );
}

export function CallHistory({ queueId, onCallTap, onInfoTap }: { queueId: string; onCallTap?: (call: CallRecord) => void; onInfoTap?: (call: CallRecord) => void }) {
  const { liveCallHistories } = useSimulator();
  const calls = liveCallHistories[queueId] || [];

  if (calls.length === 0) {
    return (
      <div className="flex items-center justify-center w-full py-[48px]">
        <span
          style={{
            fontSize: "var(--text-h4)",
            fontWeight: "var(--font-weight-normal)",
            color: "var(--muted-foreground)",
          }}
        >
          No recent call history
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start w-full">
      {calls.map((call) => (
        <CallHistoryRow key={call.id} call={call} onCallTap={onCallTap} onInfoTap={onInfoTap} />
      ))}
      {/* Bottom padding for scrollability */}
      <div style={{ height: 40 }} className="shrink-0 w-full" />
    </div>
  );
}