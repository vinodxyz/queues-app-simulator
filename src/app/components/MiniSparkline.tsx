/**
 * MiniSparkline — a tiny inline SVG sparkline inspired by After the Flood's Sparks.
 * Renders a series of values as a compact polyline with no labels, numbers, or axes.
 * Color is determined by trend direction (improving = green, worsening = red).
 *
 * @param values  Array of numeric values (at least 2 to render).
 * @param lowerIsBetter  If true, a downward trend is green (good). Default true.
 * @param width   SVG width in px. Default 28.
 * @param height  SVG height in px. Default 12.
 */

interface MiniSparklineProps {
  values: number[];
  lowerIsBetter?: boolean;
  width?: number;
  height?: number;
}

export function MiniSparkline({
  values,
  lowerIsBetter = true,
  width = 28,
  height = 12,
}: MiniSparklineProps) {
  if (values.length < 3) return null;

  // Determine trend: compare the average of the first third to the last third
  const third = Math.max(1, Math.floor(values.length / 3));
  const firstAvg =
    values.slice(0, third).reduce((a, b) => a + b, 0) / third;
  const lastAvg =
    values.slice(-third).reduce((a, b) => a + b, 0) / third;

  const delta = lastAvg - firstAvg;
  const isImproving = lowerIsBetter ? delta < 0 : delta > 0;
  const isFlat = Math.abs(delta) < 0.5;

  const color = isFlat
    ? "var(--muted-foreground)"
    : isImproving
    ? "var(--success)"
    : "var(--destructive)";

  // Normalize values to SVG coordinate space
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const pad = 1; // internal padding

  const points = values
    .map((v, i) => {
      const x = pad + (i / (values.length - 1)) * (width - 2 * pad);
      const y = pad + (1 - (v - min) / range) * (height - 2 * pad);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
