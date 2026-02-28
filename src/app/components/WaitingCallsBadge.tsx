import svgPaths from "../../imports/svg-9pcrcscppr";

/**
 * Waiting calls badge — shows the number of calls waiting.
 * Gray variant when count < 10, red variant when count >= 10.
 * Uses the Figma-imported clock icon from svg-9pcrcscppr.
 */
export function WaitingCallsBadge({ count, size = 40 }: { count: number; size?: number }) {
  const isHigh = count >= 10;
  const iconSize = size * 0.5; // 20px at size=40
  const iconSvgSize = iconSize * 0.8; // ~16px at size=40

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Background circle */}
      <div
        className="absolute left-0 top-0 rounded-full flex items-center justify-center"
        style={{
          width: size,
          height: size,
          backgroundColor: isHigh ? "var(--missed-call-icon-bg)" : "var(--secondary)",
          border: isHigh ? "2px solid var(--missed-call-border, #fdf3f4)" : "none",
          boxSizing: "border-box",
        }}
      >
        {/* Count number */}
        <span
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-semibold)",
            color: "var(--card-foreground)",
            letterSpacing: "-0.41px",
            lineHeight: `${size}px`,
          }}
        >
          {count}
        </span>
      </div>

      {/* Clock icon — bottom-right */}
      <div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          width: iconSize,
          height: iconSize,
          bottom: 0,
          right: 0,
          backgroundColor: "var(--background)",
        }}
      >
        <svg
          className="block"
          style={{ width: iconSvgSize, height: iconSvgSize }}
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 15.9726 15.9727"
        >
          <path
            d={svgPaths.p34638700}
            fill={isHigh ? "var(--missed-call, #CC4A31)" : "var(--muted-foreground)"}
          />
        </svg>
      </div>
    </div>
  );
}
