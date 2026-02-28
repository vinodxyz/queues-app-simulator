import { useEffect, useRef, useState } from "react";

/**
 * Animated circular service-level badge matching the Figma design.
 *
 * States:
 *  - Red   (#C50F1F): 0–25 %
 *  - Yellow (#D8870E): 26–75 %
 *  - Green  (#469B74): 76–100 %
 *
 * The arc has a 60° gap at the bottom. Progress fills clockwise from
 * the bottom-left edge of the gap.
 */

/* ── Color config ── */

function getTheme(value: number) {
  if (value <= 25) {
    return {
      bg: "#fdf3f4",
      track: "#F2DEDE",
      stroke: "#C50F1F",
      dot: "#C50F1F",
    };
  }
  if (value <= 75) {
    return {
      bg: "#fff8f5",
      track: "#ECECEC",
      stroke: "#D8870E",
      dot: "#D8870E",
    };
  }
  return {
    bg: "#f1faf1",
    track: "#ECECEC",
    stroke: "#469B74",
    dot: "#469B74",
  };
}

/* ── Arc math ── */

const SIZE = 40;
const CX = 20;
const CY = 20;
const R = 17;
const STROKE_WIDTH = 2.4;
const GAP_DEG = 60; // degrees of gap at bottom
const ARC_DEG = 360 - GAP_DEG; // 300° of visible arc

function polarToCart(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + R * Math.cos(rad),
    y: CY + R * Math.sin(rad),
  };
}

/** Build an SVG arc path from startAngle (deg, CW from 3 o'clock) spanning spanDeg degrees CW. */
function arcPath(startDeg: number, spanDeg: number): string {
  if (spanDeg <= 0) return "";
  const start = polarToCart(startDeg);
  const end = polarToCart(startDeg + spanDeg);
  const largeArc = spanDeg > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${R} ${R} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

/* ── Component ── */

interface Props {
  /** Service level 0–100 */
  value: number;
  /** Size in px (default 40) */
  size?: number;
}

export function ServiceLevelBadge({ value, size = 40 }: Props) {
  const clamped = Math.max(0, Math.min(100, value));
  const theme = getTheme(clamped);

  // Animate the displayed number
  const [displayValue, setDisplayValue] = useState(clamped);
  const animRef = useRef<number | null>(null);
  const prevValueRef = useRef(clamped);

  useEffect(() => {
    const from = prevValueRef.current;
    const to = clamped;
    if (from === to) return;
    prevValueRef.current = to;

    const startTime = performance.now();
    const duration = 400; // ms

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.round(from + (to - from) * eased);
      setDisplayValue(current);
      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      }
    }

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [clamped]);

  // Arc paths
  const trackPath = arcPath(120, ARC_DEG);
  const progressSpan = (clamped / 100) * ARC_DEG;
  const progressPath = arcPath(120, progressSpan);

  // Dot position at end of progress arc
  const dotAngle = 120 + progressSpan;
  const dotPos = polarToCart(dotAngle);

  const scale = size / SIZE;

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
    >
      {/* Background circle */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: theme.bg,
          transition: "background-color 0.4s ease",
        }}
      />

      {/* SVG arcs */}
      <svg
        className="absolute inset-0"
        width={size}
        height={size}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        fill="none"
      >
        {/* Track */}
        <path
          d={trackPath}
          stroke={theme.track}
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          fill="none"
          style={{ transition: "stroke 0.4s ease" }}
        />

        {/* Progress */}
        {progressSpan > 0 && (
          <path
            d={progressPath}
            stroke={theme.stroke}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            fill="none"
            style={{
              transition: "d 0.4s ease, stroke 0.4s ease",
            }}
          />
        )}

        {/* Dot at end of progress */}
        <circle
          cx={dotPos.x}
          cy={dotPos.y}
          r={2.72}
          fill={theme.dot}
          stroke="white"
          strokeWidth={1.59}
          style={{ transition: "cx 0.4s ease, cy 0.4s ease, fill 0.4s ease" }}
        />
      </svg>

      {/* Center label */}
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{
          fontSize: "var(--text-h4)",
          fontWeight: "var(--font-weight-normal)",
          color: "var(--card-foreground)",
          letterSpacing: "-0.08px",
          lineHeight: 1,
          paddingTop: 1,
        }}
      >
        {displayValue}
      </span>
    </div>
  );
}