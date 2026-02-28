/* Simulator control panel – rendered outside the phone frame */
import { useState } from "react";
import { useSimulator } from "../hooks/useSimulator";
import type { QueueBadgeMode } from "../hooks/useSimulator";
import { DEFAULT_CALL_CONFIG, DEMO_SCENARIOS } from "../hooks/useSimulator";
import type { DemoScenario } from "../hooks/useSimulator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip, ReferenceLine } from "recharts";
import { queues as staticQueues } from "../data";
import { SHIFTS, DAY_NAMES } from "../config";

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 1.5V12.5L12 7L3 1.5Z" fill="currentColor" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2.5" y="1.5" width="3" height="11" rx="0.75" fill="currentColor" />
      <rect x="8.5" y="1.5" width="3" height="11" rx="0.75" fill="currentColor" />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2" y="2" width="10" height="10" rx="1.5" fill="currentColor" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.15s ease",
      }}
    >
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Shared button label style ── */
const btnLabelStyle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: "var(--font-weight-medium)",
  letterSpacing: "-0.08px",
};

/* ── Shared section label style ── */
const sectionLabelStyle: React.CSSProperties = {
  fontSize: "var(--text-label)",
  fontWeight: "var(--font-weight-semibold)" as string,
  color: "var(--muted-foreground)",
  letterSpacing: "0.5px",
  textTransform: "uppercase" as const,
};

/* ── Shared stat styles ── */
const statLabelStyle: React.CSSProperties = {
  fontSize: "var(--text-label)",
  fontWeight: "var(--font-weight-normal)",
  color: "var(--muted-foreground)",
  letterSpacing: "0.06px",
};

const statValueStyle: React.CSSProperties = {
  fontSize: "var(--text-h4)",
  fontWeight: "var(--font-weight-semibold)",
  color: "var(--card-foreground)",
  letterSpacing: "-0.24px",
};

/* ── Section heading style for Features / Parameters ── */
const groupHeadingStyle: React.CSSProperties = {
  fontSize: "var(--text-caption)",
  fontWeight: "var(--font-weight-semibold)",
  color: "var(--primary)",
  letterSpacing: "0.3px",
  textTransform: "uppercase" as const,
};

/* ── Badge mode options ── */
const BADGE_OPTIONS: { value: QueueBadgeMode; label: string }[] = [
  { value: "avatar", label: "Avatar" },
  { value: "service-level", label: "Service level" },
  { value: "waiting-calls", label: "Waiting calls" },
];

export function SimulatorPanel() {
  const {
    status,
    start,
    pause,
    stop,
    tickCount,
    liveQueues,
    activeSupervisorIds,
    toggleSupervisor,
    enableAllSupervisors,
    disableAllSupervisors,
    supervisorLog,
    supervisors,
    queueBadgeMode,
    setQueueBadgeMode,
    activeRole,
    setActiveRole,
    showFilters,
    setShowFilters,
    setActiveFilter,
    simTime,
    dayDurationMs,
    setDayDurationMs,
    shiftDelayEnabled,
    setShiftDelayEnabled,
    graphData,
    skipHour,
    jumpToTime,
    callConfig,
    setCallConfig,
    applyScenario,
    activeScenarioId,
    focusedBoostDisabled,
    setFocusedBoostDisabled,
    narratorEnabled,
    setNarratorEnabled,
    focusedQueueId,
    showSparklines,
    setShowSparklines,
  } = useSimulator();

  const [supSectionOpen, setSupSectionOpen] = useState(false);
  const [logOpen, setLogOpen] = useState(false);
  const [narrativeOpen, setNarrativeOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [panelCollapsed, setPanelCollapsed] = useState(false);
  const [dayPickerOpen, setDayPickerOpen] = useState(false);
  const [callsOpen, setCallsOpen] = useState(false);
  const [queueHealthOpen, setQueueHealthOpen] = useState(false);
  const [scenariosOpen, setScenariosOpen] = useState(false);
  const isSupervisor = activeRole === "supervisor";

  const isOff = status === "off";
  const isRunning = status === "running";
  const isPaused = status === "paused";

  const totalOptedIn = liveQueues.reduce((sum, q) => sum + q.optedInCount, 0);
  const totalAgents = liveQueues.reduce(
    (sum, q) => sum + q.people.filter((p) => p.role === "agent").length,
    0
  );
  const activeSupCount = activeSupervisorIds.size;

  // Build a map of queueId → initials for surge display
  const queueInitialsMap = new Map<string, string>();
  for (const q of staticQueues) {
    queueInitialsMap.set(q.id, q.initials);
  }

  // Build a map of queueId → avatar colors for matching queue badges
  const queueColorMap = new Map<string, { bg: string; text: string }>();
  for (const q of staticQueues) {
    queueColorMap.set(q.id, { bg: q.avatarBg, text: q.avatarTextColor });
  }

  // Smart surge label: "DP, SI & 1 more surging" instead of "3 queues surging"
  const surgingInitials = simTime.surgeQueueIds
    .map((qid) => queueInitialsMap.get(qid) ?? "?")
    .filter(Boolean);
  let surgeLabel = "Normal volume";
  if (simTime.anySurge) {
    if (surgingInitials.length <= 2) {
      surgeLabel = `${surgingInitials.join(", ")} surging`;
    } else {
      const shown = surgingInitials.slice(0, 2);
      const remaining = surgingInitials.length - 2;
      surgeLabel = `${shown.join(", ")} & ${remaining} more`;
    }
  }

  // Focused queue label for graph header
  const focusedQueueLabel = focusedQueueId
    ? (liveQueues.find((q) => q.id === focusedQueueId)?.name ?? staticQueues.find((q) => q.id === focusedQueueId)?.name ?? "All queues")
    : "All queues";
  const focusedQueueInitials = focusedQueueId
    ? queueInitialsMap.get(focusedQueueId) ?? "?"
    : null;

  // Filter graph data: show from 9am onwards for the current focused queue
  const filteredGraphData = graphData.filter((d) => d.hour >= 9);

  // Handle chart click-to-jump: extract the hour from the clicked data point
  const handleChartClick = (data: any) => {
    if (data?.activePayload?.[0]?.payload?.hour != null) {
      const hour = data.activePayload[0].payload.hour;
      jumpToTime(simTime.day, Math.floor(hour));
    }
  };

  // Custom tooltip for mini charts
  const MiniTooltip = ({ active, payload, label, valueKey, color, suffix }: any) => {
    if (!active || !payload?.length) return null;
    const val = payload[0]?.value;
    const hour = payload[0]?.payload?.hour;
    // Format hour for display
    const formatHour = (h: number) => {
      const h24 = Math.floor(h);
      const m = Math.floor((h - h24) * 60);
      const ampm = h24 >= 12 ? "p" : "a";
      const h12 = h24 % 12 || 12;
      return m > 0 ? `${h12}:${String(m).padStart(2, "0")}${ampm}` : `${h12}${ampm}`;
    };
    return (
      <div
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-sm)",
          padding: "3px 7px",
          boxShadow: "var(--elevation-sm)",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        {hour != null && (
          <span
            style={{
              fontSize: "9px",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--muted-foreground)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {formatHour(hour)}
          </span>
        )}
        <span
          style={{
            fontSize: "10px",
            fontWeight: "var(--font-weight-semibold)",
            color: color,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {val}{suffix || ""}
        </span>
      </div>
    );
  };

  return (
    <div
      className="flex flex-col w-[280px] select-none"
      style={{
        background: "var(--card)",
        borderRadius: "var(--radius-card)",
        boxShadow: "var(--elevation-sm)",
        border: "1px solid var(--border)",
        overflowY: "auto",
        maxHeight: 852,
      }}
    >
      {/* ─── Header ─── */}
      <div
        className="flex items-center justify-between px-[16px] py-[12px]"
        style={{ borderBottom: panelCollapsed ? "none" : "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-[8px]">
          <div
            className="shrink-0 size-[8px] rounded-full"
            style={{
              backgroundColor: isRunning ? "var(--presence-available)" : isPaused ? "var(--presence-away)" : "var(--muted-foreground)",
              boxShadow: isRunning ? "0 0 6px 2px rgba(107,183,0,0.4)" : "none",
              animation: isRunning ? "pulse-dot 1.5s ease-in-out infinite" : "none",
            }}
          />
          <span
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--card-foreground)",
              letterSpacing: "-0.24px",
            }}
          >
            Simulator
          </span>
          {panelCollapsed && (
            <span
              style={{
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-medium)",
                color: isRunning ? "var(--presence-available)" : isPaused ? "var(--presence-away)" : "var(--muted-foreground)",
                letterSpacing: "0.06px",
                textTransform: "uppercase",
              }}
            >
              {isRunning ? "Running" : isPaused ? "Paused" : "Off"}
            </span>
          )}
        </div>
        <div className="flex items-center gap-[6px]">
          {panelCollapsed && (
            <div className="flex items-center gap-[4px]">
              <span
                style={{
                  fontSize: "var(--text-caption)",
                  fontWeight: "var(--font-weight-semibold)",
                  fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  color: "var(--card-foreground)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {simTime.clockStr}
              </span>
              <span style={{ fontSize: "9px", fontWeight: "var(--font-weight-medium)", color: "var(--muted-foreground)" }}>
                {simTime.dayShort}
              </span>
            </div>
          )}
          {!panelCollapsed && (
            <span
              style={{
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-medium)",
                color: isRunning ? "var(--presence-available)" : isPaused ? "var(--presence-away)" : "var(--muted-foreground)",
                letterSpacing: "0.06px",
                textTransform: "uppercase",
              }}
            >
              {isRunning ? "Running" : isPaused ? "Paused" : "Off"}
            </span>
          )}
          <button
            onClick={() => setPanelCollapsed((v) => !v)}
            className="flex items-center justify-center cursor-pointer transition-colors"
            style={{
              width: 24, height: 24,
              borderRadius: "var(--radius-sm)",
              backgroundColor: "var(--secondary)",
              border: "1px solid var(--border)",
              color: "var(--muted-foreground)",
            }}
            title={panelCollapsed ? "Expand panel" : "Collapse panel"}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
              style={{ transform: panelCollapsed ? "rotate(-90deg)" : "rotate(0deg)", transition: "transform 0.15s ease" }}>
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* ─── Collapsed: mini inline controls ─── */}
      {panelCollapsed && (
        <div className="flex items-center gap-[6px] px-[12px] py-[8px]">
          {isRunning ? (
            <button onClick={pause} className="flex items-center justify-center h-[28px] px-[10px] rounded-[var(--radius-button)] cursor-pointer transition-colors"
              style={{ backgroundColor: "var(--warning-bg)", color: "var(--warning)", border: "1px solid var(--warning-border)" }}><PauseIcon /></button>
          ) : (
            <button onClick={start} className="flex items-center justify-center h-[28px] px-[10px] rounded-[var(--radius-button)] cursor-pointer transition-colors"
              style={{ backgroundColor: "var(--success-bg)", color: "var(--success)", border: "1px solid var(--success-border)" }}><PlayIcon /></button>
          )}
          <button onClick={stop} disabled={isOff} className="flex items-center justify-center h-[28px] px-[10px] rounded-[var(--radius-button)] cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: isOff ? "var(--secondary)" : "var(--destructive-bg)", color: isOff ? "var(--muted-foreground)" : "var(--destructive)", border: `1px solid ${isOff ? "var(--border)" : "var(--destructive-border)"}` }}><StopIcon /></button>
          {simTime.anySurge && (
            <span style={{ fontSize: "9px", fontWeight: "var(--font-weight-semibold)", color: "var(--destructive)", backgroundColor: "var(--destructive-bg)", padding: "2px 6px", borderRadius: "4px", letterSpacing: "0.5px", textTransform: "uppercase" as const, animation: "pulse-dot 2s ease-in-out infinite" }}>SURGE</span>
          )}
          <div className="flex-1" />
          <span style={{ fontSize: "9px", fontWeight: "var(--font-weight-medium)", color: "var(--muted-foreground)", fontVariantNumeric: "tabular-nums" }}>
            {totalOptedIn}/{totalAgents} in
          </span>
        </div>
      )}

      {!panelCollapsed && (<>
      {/* ─── Playback controls (Start / Reset at top) ─── */}
      <div
        className="flex items-center gap-[8px] px-[16px] py-[12px]"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {isRunning ? (
          <button
            onClick={pause}
            className="flex-1 flex items-center justify-center gap-[6px] h-[36px] rounded-[var(--radius-button)] cursor-pointer transition-colors"
            style={{ backgroundColor: "var(--warning-bg)", color: "var(--warning)", border: "1px solid var(--warning-border)" }}
          >
            <PauseIcon />
            <span style={btnLabelStyle}>Pause</span>
          </button>
        ) : (
          <button
            onClick={start}
            className="flex-1 flex items-center justify-center gap-[6px] h-[36px] rounded-[var(--radius-button)] cursor-pointer transition-colors"
            style={{ backgroundColor: "var(--success-bg)", color: "var(--success)", border: "1px solid var(--success-border)" }}
          >
            <PlayIcon />
            <span style={btnLabelStyle}>{isPaused ? "Resume" : "Start"}</span>
          </button>
        )}
        <button
          onClick={stop}
          disabled={isOff}
          className="flex items-center justify-center gap-[6px] h-[36px] px-[12px] rounded-[var(--radius-button)] cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            backgroundColor: isOff ? "var(--secondary)" : "var(--destructive-bg)",
            color: isOff ? "var(--muted-foreground)" : "var(--destructive)",
            border: `1px solid ${isOff ? "var(--border)" : "var(--destructive-border)"}`,
          }}
        >
          <StopIcon />
          <span style={btnLabelStyle}>Reset</span>
        </button>
      </div>

      {/* ═══════════════════════════════════════════
           FEATURES section (collapsible)
           ═══════════════════════════════════════════ */}
      <div style={{ borderBottom: featuresOpen ? "none" : "1px solid var(--border)" }}>
        <button
          onClick={() => setFeaturesOpen((v) => !v)}
          className="flex items-center justify-between w-full px-[16px] pt-[12px] pb-[6px] cursor-pointer"
          style={{ background: "none", border: "none" }}
        >
          <span style={groupHeadingStyle}>Features</span>
          <ChevronIcon open={featuresOpen} />
        </button>
      </div>

      {featuresOpen && (
        <>
          {/* ─── Role Switcher ─── */}
          <div
            className="flex flex-col gap-[6px] px-[16px] py-[10px]"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span style={sectionLabelStyle}>Viewing as</span>
            <div className="flex gap-[6px]">
              <button
                onClick={() => setActiveRole("supervisor")}
                className="flex-1 h-[32px] flex items-center justify-center rounded-[var(--radius-button)] cursor-pointer transition-colors"
                style={{
                  fontSize: "13px",
                  fontWeight: "var(--font-weight-medium)",
                  letterSpacing: "-0.08px",
                  color: isSupervisor ? "var(--primary-foreground)" : "var(--card-foreground)",
                  backgroundColor: isSupervisor ? "var(--primary)" : "var(--secondary)",
                  border: isSupervisor ? "1px solid var(--primary)" : "1px solid var(--border)",
                }}
              >
                Supervisor
              </button>
              <button
                onClick={() => setActiveRole("agent")}
                className="flex-1 h-[32px] flex items-center justify-center rounded-[var(--radius-button)] cursor-pointer transition-colors"
                style={{
                  fontSize: "13px",
                  fontWeight: "var(--font-weight-medium)",
                  letterSpacing: "-0.08px",
                  color: !isSupervisor ? "var(--primary-foreground)" : "var(--card-foreground)",
                  backgroundColor: !isSupervisor ? "var(--primary)" : "var(--secondary)",
                  border: !isSupervisor ? "1px solid var(--primary)" : "1px solid var(--border)",
                }}
              >
                Agent
              </button>
            </div>
          </div>

          {/* ─── Queue badge mode (3-option selector) ─── */}
          <div
            className="flex flex-col gap-[6px] px-[16px] py-[10px]"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span style={sectionLabelStyle}>Queue badge</span>
            <div className="flex gap-[4px]">
              {BADGE_OPTIONS.map((opt) => {
                const isActive = queueBadgeMode === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setQueueBadgeMode(opt.value)}
                    className="flex-1 h-[30px] flex items-center justify-center rounded-full cursor-pointer transition-colors"
                    style={{
                      fontSize: "11px",
                      fontWeight: "var(--font-weight-medium)",
                      letterSpacing: "-0.02px",
                      color: isActive ? "var(--primary-foreground)" : "var(--card-foreground)",
                      backgroundColor: isActive ? "var(--primary)" : "var(--secondary)",
                      border: isActive ? "1px solid var(--primary)" : "1px solid var(--border)",
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── Queue filters toggle ─── */}
          <div
            className="flex items-center justify-between px-[16px] py-[10px]"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span style={sectionLabelStyle}>Queue filters</span>
            <button
              onClick={() => {
                const newVal = !showFilters;
                setShowFilters(newVal);
                if (!newVal) {
                  setActiveFilter(null);
                }
              }}
              className="h-[28px] px-[12px] flex items-center justify-center rounded-[var(--radius-button)] cursor-pointer transition-colors"
              style={{
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-medium)",
                letterSpacing: "0.06px",
                color: showFilters ? "var(--primary-foreground)" : "var(--card-foreground)",
                backgroundColor: showFilters ? "var(--primary)" : "var(--secondary)",
                border: showFilters ? "1px solid var(--primary)" : "1px solid var(--border)",
              }}
            >
              {showFilters ? "Shown" : "Hidden"}
            </button>
          </div>

          {/* ─── Sparklines toggle ─── */}
          <div
            className="flex items-center justify-between px-[16px] py-[10px]"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <span style={sectionLabelStyle}>Sparklines</span>
            <button
              onClick={() => setShowSparklines(!showSparklines)}
              className="h-[28px] px-[12px] flex items-center justify-center rounded-[var(--radius-button)] cursor-pointer transition-colors"
              style={{
                fontSize: "var(--text-label)",
                fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeight: "var(--font-weight-medium)",
                letterSpacing: "0.06px",
                color: showSparklines ? "var(--primary-foreground)" : "var(--card-foreground)",
                backgroundColor: showSparklines ? "var(--primary)" : "var(--secondary)",
                border: showSparklines ? "1px solid var(--primary)" : "1px solid var(--border)",
              }}
            >
              {showSparklines ? "Shown" : "Hidden"}
            </button>
          </div>
        </>
      )}

      {/* ═══════════════════════════════════════════
           TIME & DAY section — redesigned
           ═══════════════════════════════════════════ */}
      <div
        className="px-[16px] pt-[12px] pb-[4px]"
        style={{ borderBottom: "none" }}
      >
        <span style={groupHeadingStyle}>Time & Day</span>
      </div>

      {/* ─── Clock card ─── */}
      <div
        className="flex flex-col gap-[10px] mx-[12px] mb-[8px] p-[12px]"
        style={{
          borderRadius: "var(--radius)",
          backgroundColor: "var(--secondary)",
          border: "1px solid var(--border)",
        }}
      >
        {/* Clock row */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-[6px]">
            <span
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: "var(--font-weight-bold)",
                fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                color: "var(--card-foreground)",
                letterSpacing: "-0.5px",
                fontVariantNumeric: "tabular-nums",
                lineHeight: 1,
              }}
            >
              {simTime.clockStr.split(" ")[0]}
            </span>
            <span
              style={{
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--muted-foreground)",
                letterSpacing: "0.3px",
              }}
            >
              {simTime.clockStr.split(" ")[1]}
            </span>
          </div>
          <div className="flex items-center gap-[6px]">
            <span
              style={{
                fontSize: "var(--text-caption)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--card-foreground)",
                letterSpacing: "-0.08px",
              }}
            >
              {simTime.dayFull}
            </span>
            {simTime.anySurge && (
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--destructive)",
                  backgroundColor: "var(--destructive-bg)",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              >
                SURGE
              </span>
            )}
          </div>
        </div>

        {/* Shift + volume status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <span
              style={{
                fontSize: "9px",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--muted-foreground)",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              Shift
            </span>
            <span
              style={{
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-semibold)",
                color: simTime.shift.id === 3 ? "var(--night-shift)" : "var(--warning)",
                backgroundColor: simTime.shift.id === 3 ? "var(--night-shift-bg)" : "var(--warning-bg)",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              {simTime.shift.id === 1 ? (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ display: "inline", verticalAlign: "-1px", marginRight: 3 }}>
                  <circle cx="5" cy="5" r="3" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                    <line x1="5" y1="0.5" x2="5" y2="1.5" />
                    <line x1="5" y1="8.5" x2="5" y2="9.5" />
                    <line x1="0.5" y1="5" x2="1.5" y2="5" />
                    <line x1="8.5" y1="5" x2="9.5" y2="5" />
                    <line x1="1.8" y1="1.8" x2="2.5" y2="2.5" />
                    <line x1="7.5" y1="7.5" x2="8.2" y2="8.2" />
                    <line x1="8.2" y1="1.8" x2="7.5" y2="2.5" />
                    <line x1="2.5" y1="7.5" x2="1.8" y2="8.2" />
                  </g>
                </svg>
              ) : simTime.shift.id === 2 ? (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ display: "inline", verticalAlign: "-1px", marginRight: 3 }}>
                  <path d="M1 7.5 Q5 2 9 7.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                  <line x1="5" y1="3" x2="5" y2="1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <line x1="2.5" y1="5" x2="1.5" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <line x1="7.5" y1="5" x2="8.5" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <line x1="0.5" y1="7.5" x2="9.5" y2="7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ display: "inline", verticalAlign: "-1px", marginRight: 3 }}>
                  <path d="M6.5 1.5 A3.5 3.5 0 1 0 8.5 6.5 A2.8 2.8 0 0 1 6.5 1.5Z" fill="currentColor" />
                </svg>
              )}
              {simTime.shift.label}
            </span>
          </div>
          <span
            style={{
              fontSize: "var(--text-label)",
              fontWeight: "var(--font-weight-medium)",
              color: simTime.anySurge ? "var(--destructive)" : "var(--muted-foreground)",
            }}
          >
            {surgeLabel}
          </span>
        </div>

        {/* 24h timeline bar — click to jump */}
        <div
          className="flex flex-col gap-[4px]"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const fraction = Math.max(0, Math.min(1, x / rect.width));
            const targetHour = Math.round(fraction * 24);
            jumpToTime(simTime.day, targetHour % 24);
          }}
        >
          <div className="relative" style={{ height: 6 }}>
            {/* Track */}
            <div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(simTime.hour / 24) * 100}%`,
                  backgroundColor: simTime.anySurge ? "var(--destructive)" : "var(--primary)",
                  transition: "width 0.3s ease, background-color 0.3s ease",
                }}
              />
            </div>
            {/* Shift boundary ticks */}
            {SHIFTS.map((s) => (
              <div
                key={s.id}
                className="absolute"
                style={{
                  left: `${(s.startHour / 24) * 100}%`,
                  top: -3,
                  width: 1,
                  height: 12,
                  backgroundColor: "var(--muted-foreground)",
                  opacity: 0.5,
                }}
              />
            ))}
            {/* Current position indicator */}
            <div
              className="absolute rounded-full"
              style={{
                width: 10,
                height: 10,
                top: -2,
                left: `calc(${(simTime.hour / 24) * 100}% - 5px)`,
                backgroundColor: simTime.anySurge ? "var(--destructive)" : "var(--primary)",
                border: "2px solid var(--card)",
                boxShadow: "0 0 0 1px var(--border)",
                transition: "left 0.3s ease, background-color 0.3s ease",
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span style={{ fontSize: "9px", color: "var(--muted-foreground)", fontVariantNumeric: "tabular-nums" }}>12a</span>
            <span style={{ fontSize: "9px", color: "var(--muted-foreground)", fontVariantNumeric: "tabular-nums" }}>6a</span>
            <span style={{ fontSize: "9px", color: "var(--muted-foreground)", fontVariantNumeric: "tabular-nums" }}>12p</span>
            <span style={{ fontSize: "9px", color: "var(--muted-foreground)", fontVariantNumeric: "tabular-nums" }}>6p</span>
            <span style={{ fontSize: "9px", color: "var(--muted-foreground)", fontVariantNumeric: "tabular-nums" }}>12a</span>
          </div>
        </div>
      </div>

      {/* ─── Live mini graphs ─── */}
      {filteredGraphData.length > 1 && (
        <div
          className="flex flex-col gap-[8px] px-[16px] py-[10px]"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {/* Row 1: Calls Waiting + Agents Opted In */}
          <div className="flex gap-[8px]">
            {/* Calls Waiting chart */}
            <div className="flex-1 flex flex-col gap-[3px]">
              <span style={{ fontSize: "9px", fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: "var(--font-weight-semibold)", color: "var(--muted-foreground)", letterSpacing: "0.3px", textTransform: "uppercase" as const }}>
                Calls waiting
              </span>
              <div
                style={{
                  height: 52,
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--secondary)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                }}
              >
                <ResponsiveContainer width="100%" height={52}>
                  <AreaChart data={filteredGraphData} margin={{ top: 4, right: 2, bottom: 0, left: 2 }} onClick={handleChartClick} syncId="simCharts">
                    <defs>
                      <linearGradient id="callsGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--destructive)" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="var(--destructive)" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <YAxis hide domain={[0, (dataMax: number) => Math.max(dataMax, 5)]} />
                    <ReferenceLine y={0} stroke="var(--border)" strokeWidth={1} />
                    <Tooltip
                      content={<MiniTooltip color="var(--destructive)" />}
                      cursor={{ stroke: "var(--muted-foreground)", strokeWidth: 1, strokeDasharray: "3 3" }}
                      isAnimationActive={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="calls"
                      stroke="var(--destructive)"
                      strokeWidth={1.5}
                      fill="url(#callsGrad)"
                      isAnimationActive={false}
                      dot={false}
                      activeDot={{ r: 3, fill: "var(--destructive)", stroke: "var(--card)", strokeWidth: 1.5 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <span style={{ fontSize: "9px", fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: "var(--font-weight-medium)", color: "var(--card-foreground)", fontVariantNumeric: "tabular-nums" }}>
                {filteredGraphData.length > 0 ? filteredGraphData[filteredGraphData.length - 1].calls : 0}
              </span>
            </div>

            {/* Agents Opted In chart */}
            <div className="flex-1 flex flex-col gap-[3px]">
              <span style={{ fontSize: "9px", fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: "var(--font-weight-semibold)", color: "var(--muted-foreground)", letterSpacing: "0.3px", textTransform: "uppercase" as const }}>
                Agents opted in
              </span>
              <div
                style={{
                  height: 52,
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--secondary)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                }}
              >
                <ResponsiveContainer width="100%" height={52}>
                  <AreaChart data={filteredGraphData} margin={{ top: 4, right: 2, bottom: 0, left: 2 }} onClick={handleChartClick} syncId="simCharts">
                    <defs>
                      <linearGradient id="optedInGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <YAxis hide domain={[0, (dataMax: number) => Math.max(dataMax, 5)]} />
                    <ReferenceLine y={0} stroke="var(--border)" strokeWidth={1} />
                    <Tooltip
                      content={<MiniTooltip color="var(--primary)" />}
                      cursor={{ stroke: "var(--muted-foreground)", strokeWidth: 1, strokeDasharray: "3 3" }}
                      isAnimationActive={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="optedIn"
                      stroke="var(--primary)"
                      strokeWidth={1.5}
                      fill="url(#optedInGrad)"
                      isAnimationActive={false}
                      dot={false}
                      activeDot={{ r: 3, fill: "var(--primary)", stroke: "var(--card)", strokeWidth: 1.5 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <span style={{ fontSize: "9px", fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: "var(--font-weight-medium)", color: "var(--card-foreground)", fontVariantNumeric: "tabular-nums" }}>
                {filteredGraphData.length > 0 ? filteredGraphData[filteredGraphData.length - 1].optedIn : 0}
              </span>
            </div>
          </div>

          {/* Row 2: Service Level + Calls Missed */}
          <div className="flex gap-[8px]">
            {/* Service Level chart */}
            <div className="flex-1 flex flex-col gap-[3px]">
              <span style={{ fontSize: "9px", fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: "var(--font-weight-semibold)", color: "var(--muted-foreground)", letterSpacing: "0.3px", textTransform: "uppercase" as const }}>
                Service level
              </span>
              <div
                style={{
                  height: 52,
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--secondary)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                }}
              >
                <ResponsiveContainer width="100%" height={52}>
                  <AreaChart data={filteredGraphData} margin={{ top: 4, right: 2, bottom: 0, left: 2 }} onClick={handleChartClick} syncId="simCharts">
                    <defs>
                      <linearGradient id="slGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--success)" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="var(--success)" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <YAxis hide domain={[0, 100]} />
                    <ReferenceLine y={80} stroke="var(--warning)" strokeWidth={1} strokeDasharray="3 3" />
                    <Tooltip
                      content={<MiniTooltip color="var(--success)" suffix="%" />}
                      cursor={{ stroke: "var(--muted-foreground)", strokeWidth: 1, strokeDasharray: "3 3" }}
                      isAnimationActive={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="serviceLevel"
                      stroke="var(--success)"
                      strokeWidth={1.5}
                      fill="url(#slGrad)"
                      isAnimationActive={false}
                      dot={false}
                      activeDot={{ r: 3, fill: "var(--success)", stroke: "var(--card)", strokeWidth: 1.5 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <span style={{ fontSize: "9px", fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: "var(--font-weight-medium)", color: "var(--card-foreground)", fontVariantNumeric: "tabular-nums" }}>
                {filteredGraphData.length > 0 ? `${filteredGraphData[filteredGraphData.length - 1].serviceLevel}%` : "—"}
              </span>
            </div>

            {/* Calls Missed chart */}
            <div className="flex-1 flex flex-col gap-[3px]">
              <span style={{ fontSize: "9px", fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: "var(--font-weight-semibold)", color: "var(--muted-foreground)", letterSpacing: "0.3px", textTransform: "uppercase" as const }}>
                Calls missed
              </span>
              <div
                style={{
                  height: 52,
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--secondary)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                }}
              >
                <ResponsiveContainer width="100%" height={52}>
                  <AreaChart data={filteredGraphData} margin={{ top: 4, right: 2, bottom: 0, left: 2 }} onClick={handleChartClick} syncId="simCharts">
                    <defs>
                      <linearGradient id="missedGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--warning)" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="var(--warning)" stopOpacity={0.05} />
                      </linearGradient>
                    </defs>
                    <YAxis hide domain={[0, (dataMax: number) => Math.max(dataMax, 3)]} />
                    <ReferenceLine y={0} stroke="var(--border)" strokeWidth={1} />
                    <Tooltip
                      content={<MiniTooltip color="var(--warning)" />}
                      cursor={{ stroke: "var(--muted-foreground)", strokeWidth: 1, strokeDasharray: "3 3" }}
                      isAnimationActive={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="callsMissed"
                      stroke="var(--warning)"
                      strokeWidth={1.5}
                      fill="url(#missedGrad)"
                      isAnimationActive={false}
                      dot={false}
                      activeDot={{ r: 3, fill: "var(--warning)", stroke: "var(--card)", strokeWidth: 1.5 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <span style={{ fontSize: "9px", fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: "var(--font-weight-medium)", color: "var(--card-foreground)", fontVariantNumeric: "tabular-nums" }}>
                {filteredGraphData.length > 0 ? filteredGraphData[filteredGraphData.length - 1].callsMissed : 0}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ─── Surge narratives (collapsible) ─── */}
      {simTime.surgeNarratives.length > 0 && (
        <div style={{ borderBottom: "1px solid var(--border)" }}>
          <button
            onClick={() => setNarrativeOpen((v) => !v)}
            className="flex items-center justify-between w-full px-[16px] py-[8px] cursor-pointer"
            style={{ background: "none", border: "none" }}
          >
            <div className="flex items-center gap-[6px]">
              <span style={sectionLabelStyle}>Active surges</span>
              <span
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--destructive)",
                  backgroundColor: "var(--destructive-bg)",
                  padding: "1px 6px",
                  borderRadius: "4px",
                }}
              >
                {simTime.surgeNarratives.length}
              </span>
            </div>
            <ChevronIcon open={narrativeOpen} />
          </button>
          {/* Collapsed preview: show first narrative */}
          {!narrativeOpen && simTime.surgeNarratives.length > 0 && (
            <div className="px-[16px] pb-[8px]">
              <div
                className="flex items-start gap-[5px]"
                style={{ fontSize: "11px", lineHeight: "14px" }}
              >
                <div className="flex gap-[2px] shrink-0" style={{ marginTop: 0 }}>
                  {(simTime.surgeNarrativeQueueIds[0] ?? []).map((qid) => {
                    const init = queueInitialsMap.get(qid);
                    const colors = queueColorMap.get(qid);
                    return init ? (
                      <span
                        key={qid}
                        style={{
                          fontSize: "9px",
                          fontWeight: "var(--font-weight-semibold)",
                          color: colors?.text ?? "var(--destructive)",
                          backgroundColor: colors?.bg ?? "var(--destructive-bg)",
                          padding: "1px 4px",
                          borderRadius: "3px",
                          letterSpacing: "0.3px",
                          lineHeight: "14px",
                        }}
                      >
                        {init}
                      </span>
                    ) : null;
                  })}
                </div>
                <span style={{ color: "var(--muted-foreground)", fontSize: "9px" }}>
                  {simTime.surgeNarratives[0]}
                </span>
              </div>
            </div>
          )}
          {/* Expanded: show up to 5 with scroll */}
          {narrativeOpen && (
            <div
              className="px-[16px] pb-[10px] flex flex-col gap-[4px] overflow-y-auto"
              style={{ maxHeight: 90 }}
            >
              {simTime.surgeNarratives.map((narrative, i) => (
                <div
                  key={i}
                  className="flex items-start gap-[5px]"
                  style={{ fontSize: "11px", lineHeight: "14px" }}
                >
                  {/* Queue initials badges for this narrative */}
                  <div className="flex gap-[2px] shrink-0" style={{ marginTop: 0 }}>
                    {(simTime.surgeNarrativeQueueIds[i] ?? []).map((qid) => {
                      const init = queueInitialsMap.get(qid);
                      const colors = queueColorMap.get(qid);
                      return init ? (
                        <span
                          key={qid}
                          style={{
                            fontSize: "9px",
                            fontWeight: "var(--font-weight-semibold)",
                            color: colors?.text ?? "var(--destructive)",
                            backgroundColor: colors?.bg ?? "var(--destructive-bg)",
                            padding: "1px 4px",
                            borderRadius: "3px",
                            letterSpacing: "0.3px",
                            lineHeight: "14px",
                          }}
                        >
                          {init}
                        </span>
                      ) : null;
                    })}
                  </div>
                  <span style={{ color: "var(--card-foreground)", fontSize: "9px" }}>
                    {narrative}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ─── Day cycle speed slider ─── */}
      <div
        className="flex flex-col gap-[6px] px-[16px] py-[10px]"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center justify-between">
          <span style={sectionLabelStyle}>Day cycle speed</span>
          <div className="flex items-center gap-[4px]">
            <button
              onClick={() => skipHour(-1)}
              className="flex items-center justify-center cursor-pointer transition-colors"
              style={{
                width: 22,
                height: 22,
                borderRadius: "var(--radius-sm)",
                backgroundColor: "var(--secondary)",
                border: "1px solid var(--border)",
                color: "var(--card-foreground)",
                fontSize: "11px",
                fontWeight: "var(--font-weight-semibold)",
              }}
              title="Skip back 1 hour"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M6.5 2L3.5 5L6.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span
              style={{
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--card-foreground)",
                fontVariantNumeric: "tabular-nums",
                minWidth: 50,
                textAlign: "center",
              }}
            >
              {Math.round(dayDurationMs / 1000)}s/day
            </span>
            <button
              onClick={() => skipHour(1)}
              className="flex items-center justify-center cursor-pointer transition-colors"
              style={{
                width: 22,
                height: 22,
                borderRadius: "var(--radius-sm)",
                backgroundColor: "var(--secondary)",
                border: "1px solid var(--border)",
                color: "var(--card-foreground)",
                fontSize: "11px",
                fontWeight: "var(--font-weight-semibold)",
              }}
              title="Skip forward 1 hour"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M3.5 2L6.5 5L3.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <input
          type="range"
          min={60}
          max={600}
          step={30}
          value={dayDurationMs / 1000}
          onChange={(e) => setDayDurationMs(Number(e.target.value) * 1000)}
          className="w-full cursor-pointer"
          style={{
            height: 4,
            accentColor: "var(--primary)",
          }}
        />
        <div className="flex items-center justify-between">
          <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>1 min</span>
          <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>5 min</span>
          <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>10 min</span>
        </div>
      </div>

      {/* ─── Day of week picker (collapsible) ─── */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <button
          onClick={() => setDayPickerOpen((v) => !v)}
          className="flex items-center justify-between w-full px-[16px] py-[8px] cursor-pointer"
          style={{ background: "none", border: "none" }}
        >
          <div className="flex items-center gap-[6px]">
            <span style={sectionLabelStyle}>Jump to day</span>
            <span style={{ fontSize: "9px", fontWeight: "var(--font-weight-medium)", color: "var(--primary)", backgroundColor: "var(--primary-tint-bg)", padding: "1px 6px", borderRadius: "4px" }}>
              {simTime.dayShort}
            </span>
          </div>
          <ChevronIcon open={dayPickerOpen} />
        </button>
        {dayPickerOpen && (
          <div className="px-[16px] pb-[10px]">
            <div className="flex gap-[3px]">
              {([
                { day: 1, label: "M" },
                { day: 2, label: "Tu" },
                { day: 3, label: "W" },
                { day: 4, label: "Th" },
                { day: 5, label: "F" },
                { day: 6, label: "Sa" },
                { day: 0, label: "Su" },
              ] as const).map(({ day, label }) => {
                const isActive = simTime.day === day;
                return (
                  <button
                    key={day}
                    onClick={() => jumpToTime(day, Math.floor(simTime.hour))}
                    className="flex-1 h-[28px] flex items-center justify-center rounded-[var(--radius-sm)] cursor-pointer transition-colors"
                    style={{
                      fontSize: "11px",
                      fontWeight: "var(--font-weight-semibold)",
                      letterSpacing: "-0.02px",
                      color: isActive ? "var(--primary-foreground)" : "var(--card-foreground)",
                      backgroundColor: isActive ? "var(--primary)" : "var(--secondary)",
                      border: isActive ? "1px solid var(--primary)" : "1px solid var(--border)",
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════
           SCENARIOS section (hidden)
           ═══════════════════════════════════════════ */}
      {false && (
        <div
          className="flex flex-col gap-[6px] px-[16px] pb-[12px]"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {DEMO_SCENARIOS.map((scenario) => {
            const isActive = activeScenarioId === scenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => applyScenario(scenario)}
                className="flex flex-col gap-[3px] px-[10px] py-[8px] rounded-[var(--radius)] cursor-pointer transition-colors text-left"
                style={{
                  background: isActive ? "var(--primary-tint-bg)" : "var(--secondary)",
                  border: isActive ? "1px solid var(--primary-tint-border)" : "1px solid var(--border)",
                }}
              >
                <div className="flex items-center gap-[6px]">
                  <span
                    style={{
                      fontSize: "var(--text-caption)",
                      fontWeight: "var(--font-weight-semibold)",
                      color: isActive ? "var(--primary)" : "var(--card-foreground)",
                      letterSpacing: "-0.08px",
                    }}
                  >
                    {scenario.label}
                  </span>
                  {isActive && (
                    <span
                      style={{
                        fontSize: "8px",
                        fontWeight: "var(--font-weight-semibold)",
                        color: "var(--primary-foreground)",
                        backgroundColor: "var(--primary)",
                        padding: "1px 5px",
                        borderRadius: "3px",
                        letterSpacing: "0.4px",
                        textTransform: "uppercase" as const,
                      }}
                    >
                      Running
                    </span>
                  )}
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: "var(--font-weight-normal)",
                    color: "var(--muted-foreground)",
                    lineHeight: "12px",
                  }}
                >
                  {scenario.description}
                </span>
                <div className="flex items-center gap-[8px]" style={{ marginTop: 2 }}>
                  <span style={{ fontSize: "9px", fontWeight: "var(--font-weight-medium)", color: "var(--muted-foreground)" }}>
                    {DAY_NAMES[scenario.day]} {scenario.hour >= 12 ? `${scenario.hour === 12 ? 12 : scenario.hour - 12}p` : scenario.hour === 0 ? "12a" : `${scenario.hour}a`}
                  </span>
                  <span style={{ fontSize: "9px", fontWeight: "var(--font-weight-medium)", color: "var(--muted-foreground)" }}>
                    {Object.keys(scenario.queueOverrides).length} queue{Object.keys(scenario.queueOverrides).length !== 1 ? "s" : ""} affected
                  </span>
                  {scenario.badgeMode && (
                    <span style={{ fontSize: "8px", fontWeight: "var(--font-weight-semibold)", color: "var(--primary)", backgroundColor: "var(--primary-tint-bg)", padding: "0px 4px", borderRadius: "3px" }}>
                      {scenario.badgeMode === "service-level" ? "SL badge" : scenario.badgeMode === "waiting-calls" ? "Waiting badge" : ""}
                    </span>
                  )}
                  {scenario.shiftDelayEnabled && (
                    <span style={{ fontSize: "8px", fontWeight: "var(--font-weight-semibold)", color: "var(--warning)", backgroundColor: "var(--warning-bg)", padding: "0px 4px", borderRadius: "3px" }}>
                      Shift gap
                    </span>
                  )}
                </div>
              </button>
            );
          })}

          {/* ─── Toggles: Narrator + Focused boost ─── */}
          <div
            className="flex flex-col gap-[8px] pt-[8px] mt-[4px]"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            {/* Narrator toggle */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[1px]">
                <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--muted-foreground)", letterSpacing: "0.5px", textTransform: "uppercase" as const }}>
                  Narrator subtitles
                </span>
                <span style={{ fontSize: "9px", color: "var(--muted-foreground)", lineHeight: "12px" }}>
                  {narratorEnabled ? "Showing below phone frame" : "Off"}
                </span>
              </div>
              <button
                onClick={() => setNarratorEnabled(!narratorEnabled)}
                className="h-[26px] px-[10px] flex items-center justify-center rounded-[var(--radius-button)] cursor-pointer transition-colors"
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-semibold)",
                  letterSpacing: "0.06px",
                  color: narratorEnabled ? "var(--primary)" : "var(--muted-foreground)",
                  backgroundColor: narratorEnabled ? "var(--primary-tint-bg)" : "var(--secondary)",
                  border: narratorEnabled ? "1px solid var(--primary-tint-border)" : "1px solid var(--border)",
                }}
              >
                {narratorEnabled ? "On" : "Off"}
              </button>
            </div>

            {/* Focused queue boost toggle */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[2px]">
                <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--muted-foreground)", letterSpacing: "0.5px", textTransform: "uppercase" as const }}>
                  Focused queue boost
                </span>
                <span style={{ fontSize: "9px", color: "var(--muted-foreground)", lineHeight: "12px" }}>
                  {focusedBoostDisabled ? "Disabled — fair arrivals for recovery" : "Viewed queue gets +60% calls"}
                </span>
              </div>
              <button
                onClick={() => setFocusedBoostDisabled(!focusedBoostDisabled)}
                className="h-[26px] px-[10px] flex items-center justify-center rounded-[var(--radius-button)] cursor-pointer transition-colors"
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-semibold)",
                  letterSpacing: "0.06px",
                  color: focusedBoostDisabled ? "var(--success)" : "var(--warning)",
                  backgroundColor: focusedBoostDisabled ? "var(--success-bg)" : "var(--warning-bg)",
                  border: focusedBoostDisabled ? "1px solid var(--success-border)" : "1px solid var(--warning-border)",
                }}
              >
                {focusedBoostDisabled ? "Off" : "On"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════
           QUEUE HEALTH section (collapsible, collapsed by default)
           ═══════════════════════════════════════════ */}
      <div style={{ borderBottom: queueHealthOpen ? "none" : "1px solid var(--border)" }}>
        <button
          onClick={() => setQueueHealthOpen((v) => !v)}
          className="flex items-center justify-between w-full px-[16px] pt-[12px] pb-[6px] cursor-pointer"
          style={{ background: "none", border: "none" }}
        >
          <span style={groupHeadingStyle}>Queue health</span>
          <ChevronIcon open={queueHealthOpen} />
        </button>
      </div>

      {queueHealthOpen && (
        <div
          className="flex flex-col gap-[10px] px-[16px] pb-[12px]"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {/* ── Agent drift (churn rate) ── */}
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-center justify-between">
              <span style={sectionLabelStyle}>Agent drift</span>
              <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--card-foreground)", fontVariantNumeric: "tabular-nums" }}>
                {callConfig.agentChurnRate <= 0.005 ? "Off" : callConfig.agentChurnRate <= 0.015 ? "Low" : callConfig.agentChurnRate <= 0.04 ? "Med" : "High"}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={0.08}
              step={0.005}
              value={callConfig.agentChurnRate}
              onChange={(e) => setCallConfig({ ...callConfig, agentChurnRate: Number(e.target.value) })}
              className="w-full cursor-pointer"
              style={{ height: 4, accentColor: "var(--primary)" }}
            />
            <div className="flex items-center justify-between">
              <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>None</span>
              <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>High churn</span>
            </div>
            <span style={{ fontSize: "9px", color: "var(--muted-foreground)", lineHeight: "12px" }}>
              {callConfig.agentChurnRate <= 0.005
                ? "Agents won't self-toggle — fully manual"
                : `~${(callConfig.agentChurnRate * 100).toFixed(1)}% chance per agent per tick`}
            </span>
          </div>

          {/* ── Supervisor activity ── */}
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-center justify-between">
              <span style={sectionLabelStyle}>Supervisor activity</span>
              <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--card-foreground)", fontVariantNumeric: "tabular-nums" }}>
                {callConfig.supervisorActivity <= 0.05 ? "Off" : callConfig.supervisorActivity <= 0.15 ? "Low" : callConfig.supervisorActivity <= 0.35 ? "Med" : "High"}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={0.6}
              step={0.05}
              value={callConfig.supervisorActivity}
              onChange={(e) => setCallConfig({ ...callConfig, supervisorActivity: Number(e.target.value) })}
              className="w-full cursor-pointer"
              style={{ height: 4, accentColor: "var(--primary)" }}
            />
            <div className="flex items-center justify-between">
              <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>None</span>
              <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>Very active</span>
            </div>
            <span style={{ fontSize: "9px", color: "var(--muted-foreground)", lineHeight: "12px" }}>
              {callConfig.supervisorActivity <= 0.05
                ? "Supervisors won't auto-toggle agents"
                : `~${Math.round(callConfig.supervisorActivity * 100)}% chance each acts per tick`}
            </span>
          </div>

          {/* ── Agent readiness ── */}
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-center justify-between">
              <span style={sectionLabelStyle}>Agent readiness</span>
              <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--card-foreground)", fontVariantNumeric: "tabular-nums" }}>
                {Math.round((callConfig.agentReadinessChance ?? 0.85) * 100)}%
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={callConfig.agentReadinessChance ?? 0.85}
              onChange={(e) => setCallConfig({ ...callConfig, agentReadinessChance: Number(e.target.value) })}
              className="w-full cursor-pointer"
              style={{ height: 4, accentColor: "var(--primary)" }}
            />
            <div className="flex items-center justify-between">
              <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>Never ready</span>
              <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>Always ready</span>
            </div>
            <span style={{ fontSize: "9px", color: "var(--muted-foreground)", lineHeight: "12px" }}>
              {(callConfig.agentReadinessChance ?? 0.85) <= 0.05
                ? "Opted-in agents stay in their current status"
                : `${Math.round((callConfig.agentReadinessChance ?? 0.85) * 100)}% chance opted-in agents become available per tick`}
            </span>
          </div>

          {/* ── Shift change delay toggle ── */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[2px]">
              <span style={sectionLabelStyle}>Shift change delay</span>
              <span style={{ fontSize: "9px", color: "var(--muted-foreground)", lineHeight: "12px" }}>
                {shiftDelayEnabled ? "Gap between shifts — calls pile up" : "Seamless handoff — no gap"}
              </span>
            </div>
            <button
              onClick={() => setShiftDelayEnabled(!shiftDelayEnabled)}
              className="h-[26px] px-[10px] flex items-center justify-center rounded-[var(--radius-button)] cursor-pointer transition-colors"
              style={{
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-semibold)",
                letterSpacing: "0.06px",
                color: shiftDelayEnabled ? "var(--destructive)" : "var(--success)",
                backgroundColor: shiftDelayEnabled ? "var(--destructive-bg)" : "var(--success-bg)",
                border: shiftDelayEnabled ? "1px solid var(--destructive-border)" : "1px solid var(--success-border)",
              }}
            >
              {shiftDelayEnabled ? "On" : "Off"}
            </button>
          </div>

          {/* ── Surge multiplier — segmented control ── */}
          <div className="flex flex-col gap-[4px]">
            <span style={sectionLabelStyle}>Surge multiplier</span>
            <div className="flex gap-[4px]">
              {[1, 2, 3, 5, 10].map((m) => {
                const isActive = (callConfig.surgeMultiplier ?? 1) === m;
                return (
                  <button
                    key={m}
                    onClick={() => setCallConfig({ ...callConfig, surgeMultiplier: m })}
                    className="flex-1 h-[28px] flex items-center justify-center rounded-[var(--radius-button)] cursor-pointer transition-colors"
                    style={{
                      fontSize: "var(--text-label)",
                      fontWeight: isActive ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
                      fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      color: isActive
                        ? m >= 5 ? "var(--destructive)" : "var(--card-foreground)"
                        : "var(--muted-foreground)",
                      backgroundColor: isActive
                        ? m >= 5 ? "var(--destructive-bg)" : "var(--primary-tint-bg)"
                        : "var(--secondary)",
                      border: isActive
                        ? m >= 5 ? "1.5px solid var(--destructive)" : "1.5px solid var(--primary)"
                        : "1px solid var(--border)",
                    }}
                  >
                    {m}x
                  </button>
                );
              })}
            </div>
            {(callConfig.surgeMultiplier ?? 1) > 1 && (
              <span style={{
                fontSize: "9px",
                fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                color: (callConfig.surgeMultiplier ?? 1) >= 5 ? "var(--destructive)" : "var(--warning)",
                fontWeight: "var(--font-weight-medium)",
              }}>
                {callConfig.surgeMultiplier}× call volume — arrivals multiplied each tick
              </span>
            )}
          </div>

          {/* ── SL Window — time-based segmented control ── */}
          <div className="flex flex-col gap-[4px]">
            <span style={sectionLabelStyle}>SL window</span>
            <div className="flex gap-[4px]">
              {([
                { value: 10, label: "10m" },
                { value: 15, label: "15m" },
                { value: 30, label: "30m" },
                { value: 60, label: "1hr" },
              ] as const).map((opt) => {
                const isActive = (callConfig.slWindowMinutes ?? 15) === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setCallConfig({ ...callConfig, slWindowMinutes: opt.value })}
                    className="flex-1 h-[28px] flex items-center justify-center rounded-[var(--radius-button)] cursor-pointer transition-colors"
                    style={{
                      fontSize: "var(--text-label)",
                      fontWeight: isActive ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
                      color: isActive ? "var(--card-foreground)" : "var(--muted-foreground)",
                      backgroundColor: isActive ? "var(--primary-tint-bg)" : "var(--secondary)",
                      border: isActive ? "1.5px solid var(--primary)" : "1px solid var(--border)",
                    }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
            <span style={{
              fontSize: "9px",
              color: "var(--muted-foreground)",
              fontWeight: "var(--font-weight-medium)",
            }}>
              SL from last {callConfig.slWindowMinutes ?? 15} sim-min — {(callConfig.slWindowMinutes ?? 15) <= 10 ? "fast recovery, volatile" : (callConfig.slWindowMinutes ?? 15) <= 15 ? "standard interval" : (callConfig.slWindowMinutes ?? 15) <= 30 ? "half-hour, smoother" : "hourly, most stable"}
            </span>
          </div>

          {/* ── Calls sub-section (collapsible within Queue health) ── */}
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 8 }}>
            <button
              onClick={() => setCallsOpen((v) => !v)}
              className="flex items-center justify-between w-full cursor-pointer"
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <span style={sectionLabelStyle}>Calls</span>
              <ChevronIcon open={callsOpen} />
            </button>
          </div>

          {callsOpen && (
            <div className="flex flex-col gap-[10px]">
              {/* Arrival rate */}
              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center justify-between">
                  <span style={sectionLabelStyle}>Arrival rate</span>
                  <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--card-foreground)", fontVariantNumeric: "tabular-nums" }}>
                    {callConfig.callArrivalBase.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min={0.05}
                  max={0.95}
                  step={0.05}
                  value={callConfig.callArrivalBase}
                  onChange={(e) => setCallConfig({ ...callConfig, callArrivalBase: Number(e.target.value) })}
                  className="w-full cursor-pointer"
                  style={{ height: 4, accentColor: "var(--primary)" }}
                />
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>Low (0.05)</span>
                  <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>High (0.95)</span>
                </div>
              </div>

              {/* Busy boost */}
              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center justify-between">
                  <span style={sectionLabelStyle}>Busy boost</span>
                  <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--card-foreground)", fontVariantNumeric: "tabular-nums" }}>
                    {callConfig.callArrivalBusyBoost.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={0.15}
                  step={0.01}
                  value={callConfig.callArrivalBusyBoost}
                  onChange={(e) => setCallConfig({ ...callConfig, callArrivalBusyBoost: Number(e.target.value) })}
                  className="w-full cursor-pointer"
                  style={{ height: 4, accentColor: "var(--primary)" }}
                />
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>None</span>
                  <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>0.15/waiting</span>
                </div>
              </div>

              {/* Abandon rate */}
              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center justify-between">
                  <span style={sectionLabelStyle}>Abandon rate</span>
                  <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--card-foreground)", fontVariantNumeric: "tabular-nums" }}>
                    {callConfig.callMissProbability.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={0.40}
                  step={0.02}
                  value={callConfig.callMissProbability}
                  onChange={(e) => setCallConfig({ ...callConfig, callMissProbability: Number(e.target.value) })}
                  className="w-full cursor-pointer"
                  style={{ height: 4, accentColor: "var(--destructive)" }}
                />
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>None</span>
                  <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>High (0.40)</span>
                </div>
              </div>

              {/* Call duration (min/max ticks) */}
              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center justify-between">
                  <span style={sectionLabelStyle}>Call duration</span>
                  <span style={{ fontSize: "var(--text-label)", fontWeight: "var(--font-weight-semibold)", color: "var(--card-foreground)", fontVariantNumeric: "tabular-nums" }}>
                    {callConfig.callDurationMinTicks}–{callConfig.callDurationMaxTicks} ticks
                  </span>
                </div>
                <div className="flex gap-[8px] items-center">
                  <div className="flex-1 flex flex-col gap-[2px]">
                    <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>Min</span>
                    <input
                      type="range"
                      min={1}
                      max={callConfig.callDurationMaxTicks}
                      step={1}
                      value={callConfig.callDurationMinTicks}
                      onChange={(e) => setCallConfig({ ...callConfig, callDurationMinTicks: Number(e.target.value) })}
                      className="w-full cursor-pointer"
                      style={{ height: 4, accentColor: "var(--primary)" }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-[2px]">
                    <span style={{ fontSize: "9px", color: "var(--muted-foreground)" }}>Max</span>
                    <input
                      type="range"
                      min={callConfig.callDurationMinTicks}
                      max={12}
                      step={1}
                      value={callConfig.callDurationMaxTicks}
                      onChange={(e) => setCallConfig({ ...callConfig, callDurationMaxTicks: Number(e.target.value) })}
                      className="w-full cursor-pointer"
                      style={{ height: 4, accentColor: "var(--primary)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reset to defaults button */}
          <button
            onClick={() => setCallConfig(DEFAULT_CALL_CONFIG)}
            className="h-[28px] flex items-center justify-center rounded-[var(--radius-button)] cursor-pointer transition-colors"
            style={{
              fontSize: "var(--text-label)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--muted-foreground)",
              backgroundColor: "var(--secondary)",
              border: "1px solid var(--border)",
            }}
          >
            Reset to defaults
          </button>
        </div>
      )}

      {/* ═══════════════════════════════════════════
           PARAMETERS section
           ═══════════════════════════════════════════ */}
      <div
        className="px-[16px] pt-[12px] pb-[4px]"
        style={{ borderBottom: "none" }}
      >
        <span style={groupHeadingStyle}>Parameters</span>
      </div>

      {/* ─── Other Supervisors ─── */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        {/* Collapsible header */}
        <button
          onClick={() => setSupSectionOpen((v) => !v)}
          className="flex items-center justify-between w-full px-[16px] py-[10px] cursor-pointer"
          style={{ background: "none", border: "none" }}
        >
          <div className="flex items-center gap-[6px]">
            <span style={sectionLabelStyle}>Other supervisors</span>
            <span
              style={{
                fontSize: "var(--text-label)",
                fontWeight: "var(--font-weight-medium)",
                color: activeSupCount > 0 ? "var(--success)" : "var(--muted-foreground)",
                backgroundColor: activeSupCount > 0 ? "var(--success-bg)" : "var(--secondary)",
                padding: "1px 6px",
                borderRadius: "4px",
              }}
            >
              {activeSupCount}/{supervisors.length}
            </span>
          </div>
          <ChevronIcon open={supSectionOpen} />
        </button>

        {supSectionOpen && (
          <div className="px-[16px] pb-[12px]">
            {/* All / None toggles */}
            <div className="flex gap-[8px] mb-[8px]">
              <button
                onClick={enableAllSupervisors}
                className="flex-1 h-[28px] flex items-center justify-center rounded-[var(--radius-button)] cursor-pointer transition-colors"
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--primary)",
                  backgroundColor: "var(--primary-tint-bg)",
                  border: "1px solid var(--primary-tint-border)",
                }}
              >
                All active
              </button>
              <button
                onClick={disableAllSupervisors}
                className="flex-1 h-[28px] flex items-center justify-center rounded-[var(--radius-button)] cursor-pointer transition-colors"
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--muted-foreground)",
                  backgroundColor: "var(--secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                All inactive
              </button>
            </div>

            {/* Supervisor list */}
            <div
              className="flex flex-col gap-[2px] overflow-y-auto"
              style={{ maxHeight: 320 }}
            >
              {supervisors.map((sup) => {
                const isActive = activeSupervisorIds.has(sup.id);
                const queueNames = liveQueues
                  .filter((q) => sup.queueIds.includes(q.id))
                  .map((q) => q.initials);

                return (
                  <button
                    key={sup.id}
                    onClick={() => toggleSupervisor(sup.id)}
                    className="flex items-center gap-[8px] px-[8px] py-[6px] rounded-[var(--radius)] cursor-pointer transition-colors"
                    style={{
                      background: isActive ? "rgba(107,183,0,0.08)" : "transparent",
                      border: "none",
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    {/* Avatar */}
                    <div className="relative shrink-0">
                      <ImageWithFallback
                        src={sup.avatar}
                        alt={sup.name}
                        className="rounded-full object-cover"
                        style={{
                          width: 28,
                          height: 28,
                          opacity: isActive ? 1 : 0.4,
                          filter: isActive ? "none" : "grayscale(100%)",
                          transition: "opacity 0.15s, filter 0.15s",
                        }}
                      />
                      {/* Active dot */}
                      <div
                        className="absolute rounded-full"
                        style={{
                          width: 8,
                          height: 8,
                          bottom: -1,
                          right: -1,
                          backgroundColor: isActive ? "var(--presence-available)" : "var(--muted-foreground)",
                          border: "2px solid var(--card)",
                          transition: "background-color 0.15s",
                        }}
                      />
                    </div>

                    {/* Name + queue badges */}
                    <div className="flex flex-col min-w-0 flex-1">
                      <span
                        className="truncate"
                        style={{
                          fontSize: "13px",
                          fontWeight: "var(--font-weight-medium)",
                          color: isActive ? "var(--card-foreground)" : "var(--muted-foreground)",
                          letterSpacing: "-0.08px",
                          transition: "color 0.15s",
                        }}
                      >
                        {sup.name}
                      </span>
                      <div className="flex gap-[3px] flex-wrap">
                        {queueNames.map((initials, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: "9px",
                              fontWeight: "var(--font-weight-medium)",
                              color: isActive ? "var(--primary)" : "var(--muted-foreground)",
                              backgroundColor: isActive ? "var(--primary-tint-bg)" : "var(--secondary)",
                              padding: "0 4px",
                              borderRadius: "3px",
                              letterSpacing: "0.3px",
                            }}
                          >
                            {initials}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ─── Activity Log ─── */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <button
          onClick={() => setLogOpen((v) => !v)}
          className="flex items-center justify-between w-full px-[16px] py-[10px] cursor-pointer"
          style={{ background: "none", border: "none" }}
        >
          <div className="flex items-center gap-[6px]">
            <span style={sectionLabelStyle}>Activity log</span>
            {supervisorLog.length > 0 && (
              <span
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--primary)",
                  backgroundColor: "var(--primary-tint-bg)",
                  padding: "1px 6px",
                  borderRadius: "4px",
                }}
              >
                {supervisorLog.length}
              </span>
            )}
          </div>
          <ChevronIcon open={logOpen} />
        </button>

        {logOpen && (
          <div
            className="px-[16px] pb-[12px] overflow-y-auto flex flex-col gap-[4px]"
            style={{ maxHeight: 200 }}
          >
            {supervisorLog.length === 0 ? (
              <span
                style={{
                  fontSize: "var(--text-label)",
                  color: "var(--muted-foreground)",
                  fontStyle: "italic",
                }}
              >
                No actions yet. Start the simulator.
              </span>
            ) : (
              supervisorLog.map((entry, i) => (
                <div
                  key={i}
                  className="flex items-start gap-[6px]"
                  style={{
                    fontSize: "11px",
                    color: "var(--card-foreground)",
                    lineHeight: "14px",
                  }}
                >
                  <span
                    style={{
                      color: entry.action === "received-call"
                        ? "var(--primary)"
                        : entry.action === "opted-in" ? "var(--success)" : "var(--destructive)",
                      fontWeight: "var(--font-weight-semibold)",
                      whiteSpace: "nowrap",
                      fontSize: entry.action === "received-call" ? "10px" : undefined,
                    }}
                  >
                    {entry.action === "received-call" ? "📞" : entry.action === "opted-in" ? "+" : "-"}
                  </span>
                  <span style={{ fontSize: "9px" }}>
                    {entry.action === "received-call" ? (
                      <>
                        <span style={{ fontWeight: "var(--font-weight-medium)" }}>
                          {entry.agentName}
                        </span>
                        {" "}
                        <span style={{ color: "var(--muted-foreground)" }}>
                          answered
                        </span>
                        {entry.callerName && (
                          <>
                            {" "}
                            <span style={{ fontWeight: "var(--font-weight-medium)" }}>
                              {entry.callerName}
                            </span>
                          </>
                        )}
                        {entry.queueName && (
                          <>
                            {" "}
                            <span style={{ color: "var(--muted-foreground)" }}>in</span>
                            {" "}
                            <span style={{ fontWeight: "var(--font-weight-medium)", color: "var(--primary)" }}>
                              {entry.queueName}
                            </span>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <span style={{ fontWeight: "var(--font-weight-medium)" }}>
                          {entry.supervisorName}
                        </span>
                        {" "}
                        <span style={{ color: "var(--muted-foreground)" }}>
                          {entry.action === "opted-in" ? "opted in" : "opted out"}
                        </span>
                        {" "}
                        <span style={{ fontWeight: "var(--font-weight-medium)" }}>
                          {entry.agentName}
                        </span>
                      </>
                    )}
                  </span>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* ─── Stats footer ─── */}
      <div className="flex items-center justify-between px-[16px] py-[10px]">
        <div className="flex flex-col">
          <span style={statLabelStyle}>Opted in</span>
          <span style={statValueStyle}>
            {totalOptedIn} / {totalAgents}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span style={statLabelStyle}>In a call</span>
          <span style={statValueStyle}>
            {liveQueues.reduce(
              (sum, q) =>
                sum +
                q.people.filter(
                  (p) => p.role === "agent" && p.activity === "In a call"
                ).length,
              0
            )}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span style={statLabelStyle}>Ticks</span>
          <span style={statValueStyle}>{tickCount}</span>
        </div>
      </div>

      </>)}

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}