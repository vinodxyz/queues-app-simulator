import { useSimulator } from "../hooks/useSimulator";
import { motion, AnimatePresence } from "motion/react";

/* ══════════════════════════════════════════════════════
   Demo Narrator Scripts
   ──────────────────────────────────────────────────────
   Each scenario maps to a sequence of subtitle steps.
   Steps with `type: "action"` are things the presenter does.
   Steps with `type: "insight"` are design thinking questions.
   ══════════════════════════════════════════════════════ */

interface NarratorStep {
  text: string;
  type: "narration" | "action" | "insight";
}

const NARRATOR_SCRIPTS: Record<string, NarratorStep[]> = {
  "monday-morning-surge": [
    { type: "narration", text: "It's Monday 9 AM. Weekend symptom backlog is flooding the Primary Care nurse line." },
    { type: "action", text: "Open Primary Care queue \u2014 SL is deep red at 18%, 14 calls waiting, most agents opted out." },
    { type: "narration", text: "The queue is in crisis. Callers are waiting 6+ minutes. Abandon rate is climbing." },
    { type: "action", text: "Bulk opt-in agents \u2014 select all available agents and toggle them on." },
    { type: "narration", text: "Watch the service level climb. Momentum kicks in as more agents handle calls." },
    { type: "narration", text: "Within a couple of minutes, the queue visibly recovers. SL moves toward green." },
    { type: "insight", text: "Could the app have alerted the supervisor before the queue reached crisis?" },
  ],
  "friday-night-er-surge": [
    { type: "action", text: "Switch to Service Level as the badge indicator. This is a lagging indicator \u2014 but still useful." },
    { type: "narration", text: "It's Friday, ~11 PM. There have been parties. Calls to the ER are increasing." },
    { type: "action", text: "Look at the home screen \u2014 the ER queue is red. You can spot it right here." },
    { type: "narration", text: "On the other hand, Surgical ICU is green. It's very, very stable at night." },
    { type: "action", text: "Open Surgical ICU. Opt out a couple of agents from here." },
    { type: "action", text: "Now go into the ER queue and opt in a couple of agents." },
    { type: "narration", text: "The ER queue stabilises. Service level starts recovering." },
    { type: "insight", text: "Should there be ways for a supervisor to move agents from one queue to another?" },
    { type: "insight", text: "Should this have been proactively suggested to the user \u2014 instead of them figuring it out late?" },
    { type: "action", text: "What if a simpler fix is to show waiting calls right on the home screen? Switch the badge now." },
    { type: "narration", text: "We see waiting calls on home now. Is this a better way to manage call queues?" },
  ],
  "midnight-shift-gap": [
    { type: "narration", text: "Let's look at another scenario. It's just past midnight \u2014 queues are moderately busy." },
    { type: "narration", text: "Notice the badge is set to Waiting Calls. Keep watching the home screen." },
    { type: "narration", text: "At 1 AM, there's a shift change. Evening agents will start opting out." },
    { type: "narration", text: "A gap exists \u2014 agents opt out before the night crew opts in." },
    { type: "action", text: "Watch the waiting calls numbers climb across multiple queues during the transition." },
    { type: "narration", text: "You can now clearly spot that waiting calls have increased during the shift gap." },
    { type: "insight", text: "Is the app helping you spot \u2014 and fix \u2014 staffing gaps like this?" },
    { type: "insight", text: "Should the system auto-stagger shift changes to prevent these coverage drops?" },
  ],
};

/* ══════════════════════════════════════════════════════
   Visual constants — all using CSS variables
   ══════════════════════════════════════════════════════ */

const TYPE_STYLES: Record<NarratorStep["type"], { icon: string; color: string; bg: string; border: string; labelColor: string }> = {
  narration: {
    icon: "\u25B6",
    color: "rgba(255,255,255,0.92)",
    bg: "rgba(0,0,0,0.80)",
    border: "rgba(255,255,255,0.06)",
    labelColor: "rgba(255,255,255,0.40)",
  },
  action: {
    icon: "\u270B",
    color: "var(--warning)",
    bg: "rgba(0,0,0,0.80)",
    border: "rgba(200,116,0,0.3)",
    labelColor: "var(--warning)",
  },
  insight: {
    icon: "\u2728",
    color: "rgba(255,255,255,0.95)",
    bg: "rgba(91,95,199,0.88)",
    border: "rgba(197,202,245,0.4)",
    labelColor: "rgba(255,255,255,0.55)",
  },
};

export function DemoNarrator() {
  const {
    activeScenarioId,
    narratorEnabled,
    narratorStep,
    setNarratorStep,
  } = useSimulator();

  if (!narratorEnabled || !activeScenarioId) return null;

  const script = NARRATOR_SCRIPTS[activeScenarioId];
  if (!script || script.length === 0) return null;

  const clampedStep = Math.min(narratorStep, script.length - 1);
  const step = script[clampedStep];
  const ts = TYPE_STYLES[step.type];
  const isFirst = clampedStep === 0;
  const isLast = clampedStep === script.length - 1;

  /* Keyboard nav */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      if (!isLast) setNarratorStep(clampedStep + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!isFirst) setNarratorStep(clampedStep - 1);
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-[8px]"
      style={{ width: 393, marginTop: 16 }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Subtitle card — animated on step change */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeScenarioId}-${clampedStep}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative flex items-start gap-[10px] w-full"
          style={{
            padding: "12px 16px",
            borderRadius: "var(--radius-card)",
            backgroundColor: ts.bg,
            border: `1px solid ${ts.border}`,
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          }}
        >
          {/* Type icon */}
          <span style={{ fontSize: "13px", lineHeight: "22px", flexShrink: 0 }}>
            {ts.icon}
          </span>

          {/* Text */}
          <p
            style={{
              fontSize: "var(--text-caption)",
              fontWeight: "var(--font-weight-medium)",
              color: ts.color,
              lineHeight: "20px",
              letterSpacing: "-0.08px",
              margin: 0,
              flex: 1,
            }}
          >
            {step.text}
          </p>

          {/* Step type label */}
          <span
            style={{
              fontSize: "9px",
              fontWeight: "var(--font-weight-semibold)",
              color: ts.labelColor,
              textTransform: "uppercase" as const,
              letterSpacing: "0.8px",
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            {step.type}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Navigation row */}
      <div className="flex items-center justify-between w-full" style={{ padding: "0 2px" }}>
        {/* Prev button */}
        <button
          onClick={() => !isFirst && setNarratorStep(clampedStep - 1)}
          disabled={isFirst}
          className="flex items-center gap-[4px] cursor-pointer"
          style={{
            background: "none",
            border: "none",
            fontSize: "var(--text-label)",
            fontWeight: "var(--font-weight-semibold)",
            color: isFirst ? "var(--border)" : "var(--muted-foreground)",
            letterSpacing: "0.3px",
            padding: "4px 0",
            opacity: isFirst ? 0.6 : 1,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7.5 9L4.5 6L7.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Prev
        </button>

        {/* Step dots */}
        <div className="flex items-center gap-[5px]">
          {script.map((s, i) => {
            const isActive = i === clampedStep;
            const dotColor = isActive
              ? (s.type === "insight" ? "var(--primary)" : s.type === "action" ? "var(--warning)" : "var(--card-foreground)")
              : "var(--border)";
            return (
              <button
                key={i}
                onClick={() => setNarratorStep(i)}
                className="cursor-pointer"
                title={`Step ${i + 1}: ${s.type}`}
                style={{
                  width: isActive ? 18 : 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: dotColor,
                  border: "none",
                  padding: 0,
                  transition: "all 0.2s ease",
                }}
              />
            );
          })}
        </div>

        {/* Step counter */}
        <span
          style={{
            fontSize: "var(--text-label)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--muted-foreground)",
            letterSpacing: "0.2px",
            minWidth: 36,
            textAlign: "center",
          }}
        >
          {clampedStep + 1}/{script.length}
        </span>

        {/* Next button */}
        <button
          onClick={() => !isLast && setNarratorStep(clampedStep + 1)}
          disabled={isLast}
          className="flex items-center gap-[4px] cursor-pointer"
          style={{
            background: "none",
            border: "none",
            fontSize: "var(--text-label)",
            fontWeight: "var(--font-weight-semibold)",
            color: isLast ? "var(--border)" : "var(--muted-foreground)",
            letterSpacing: "0.3px",
            padding: "4px 0",
            opacity: isLast ? 0.6 : 1,
          }}
        >
          Next
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
