/**
 * Shimmer / skeleton loading components for the Queue Details view.
 * Matches the Teams 2 iOS skeleton patterns from the Figma design system.
 * Uses CSS variables from the design system for all colors.
 */

/* ── Shared shimmer gradient bar ── */
function ShimmerBar({ width, height, className }: { width: number; height: number; className?: string }) {
  return (
    <div
      className={`rounded-[2px] shrink-0 ${className ?? ""}`}
      style={{
        width,
        height,
        background: `linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.03) 86%)`,
        animation: "shimmer-pulse 1.8s ease-in-out infinite",
      }}
    />
  );
}

/* ── Skeleton for a single person row (matches Figma SkeletonChatLoaderTeams2IOs) ── */
export function SkeletonPersonRow() {
  return (
    <div className="relative shrink-0 w-full" style={{ height: 84, backgroundColor: "var(--background)" }}>
      <div className="flex items-center size-full">
        <div className="flex gap-[16px] items-center px-[15px] py-[18px] relative size-full">
          {/* Avatar circle */}
          <div className="relative shrink-0 size-[48px]">
            <svg className="absolute block size-full" fill="none" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="24"
                fill="var(--border)"
                style={{ animation: "shimmer-pulse 1.8s ease-in-out infinite" }}
              />
            </svg>
          </div>
          {/* Text bars */}
          <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0">
            <div className="flex items-start justify-between w-full">
              <ShimmerBar width={184} height={17} />
              <ShimmerBar width={54} height={12} />
            </div>
            <ShimmerBar width={87} height={17} />
          </div>
          {/* Bottom divider */}
          <div className="absolute bottom-0 h-px left-0 right-0">
            <div
              className="absolute h-[0.5px] right-0 bottom-0"
              style={{ left: 80, backgroundColor: "var(--border)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Skeleton for a section header (matches Figma SkeletonChannelTeams2IOs Section header) ── */
export function SkeletonSectionHeader() {
  return (
    <div
      className="overflow-clip relative shrink-0 w-full"
      style={{ height: 48, backgroundColor: "var(--background)" }}
    >
      <div className="absolute" style={{ left: 20, top: 18 }}>
        <ShimmerBar width={169} height={17} />
      </div>
    </div>
  );
}

/* ── Skeleton for the opt-in toggle row ── */
export function SkeletonOptToggle() {
  return (
    <div
      className="overflow-clip relative shrink-0 w-full"
      style={{ height: 48, backgroundColor: "var(--background)" }}
    >
      <div className="absolute" style={{ left: 20, top: 18 }}>
        <ShimmerBar width={169} height={17} />
      </div>
    </div>
  );
}

/* ── Skeleton for the analytics carousel (3 circles + labels) ── */
export function SkeletonAnalytics() {
  return (
    <div
      className="overflow-clip relative shrink-0 w-full"
      style={{ height: 92, backgroundColor: "var(--background)" }}
    >
      <div className="absolute flex items-center left-0 top-0 w-full">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex flex-1 flex-col gap-[8px] items-center justify-center"
            style={{ height: 92 }}
          >
            {/* Circle */}
            <div className="relative shrink-0 size-[52px]">
              <svg className="absolute block size-full" fill="none" viewBox="0 0 52 52">
                <circle
                  cx="26"
                  cy="26"
                  r="26"
                  fill="var(--border)"
                  style={{ animation: "shimmer-pulse 1.8s ease-in-out infinite" }}
                />
              </svg>
            </div>
            {/* Label bar */}
            <ShimmerBar width={60} height={10} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Composite: full people list skeleton (3 sections × 2 rows each) ── */
export function SkeletonPeopleList() {
  return (
    <div className="flex flex-col items-start w-full">
      {/* Section 1 */}
      <SkeletonSectionHeader />
      <SkeletonPersonRow />
      <SkeletonPersonRow />
      {/* Section 2 */}
      <SkeletonSectionHeader />
      <SkeletonPersonRow />
      <SkeletonPersonRow />
      {/* Section 3 */}
      <SkeletonSectionHeader />
      <SkeletonPersonRow />
    </div>
  );
}

/* ── Skeleton person rows only (section headers are real, rows are shimmer) ── */
export function SkeletonPersonRows({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonPersonRow key={i} />
      ))}
    </>
  );
}
