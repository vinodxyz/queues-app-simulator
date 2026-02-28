import { useSimulator } from "../hooks/useSimulator";
import type { QueueFilterType } from "../hooks/useSimulator";
import filterSvgPaths from "../../imports/svg-6bua68n19h";

/* ── Filter icon SVGs matching the Figma reference ── */

function WaitingIcon({ active }: { active: boolean }) {
  const fill = active ? "var(--primary)" : "var(--card-foreground)";
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="overflow-clip absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[24px]">
        <svg
          className="absolute block"
          style={{ width: 19.5, height: 20, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
          fill="none"
          viewBox="0 0 19.5 20"
        >
          <path d={filterSvgPaths.p2591b00} fill={fill} />
        </svg>
      </div>
    </div>
  );
}

function NoAgentsIcon({ active }: { active: boolean }) {
  const fill = active ? "var(--primary)" : "var(--card-foreground)";
  const stroke = active ? "var(--primary)" : "var(--card-foreground)";
  return (
    <div className="relative shrink-0 size-[24px]">
      {/* People icon */}
      <div className="overflow-clip absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[24px]">
        <svg
          className="absolute block"
          style={{ width: 20, height: 17, left: "50%", top: "calc(50% + 0.5px)", transform: "translate(-50%, -50%)" }}
          fill="none"
          viewBox="0 0 20.001 17"
        >
          <path d={filterSvgPaths.p2acd3800} fill={fill} />
        </svg>
      </div>
      {/* Strikethrough line */}
      <div
        className="absolute flex items-center justify-center"
        style={{ width: 21, height: 21, left: "50%", top: "calc(50% + 0.3px)", transform: "translate(-50%, -50%)" }}
      >
        <div className="rotate-45" style={{ width: 29.7, height: 0 }}>
          <svg className="block" fill="none" viewBox="0 0 31.7 1.6" preserveAspectRatio="none" style={{ width: "100%", height: 1.6 }}>
            <line stroke={stroke} strokeLinecap="round" strokeWidth="1.6" x1="0.8" x2="28.9" y1="0.8" y2="0.8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TenPlusWaitingIcon({ active }: { active: boolean }) {
  const fill = active ? "var(--primary)" : "var(--card-foreground)";
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="overflow-clip absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[24px]">
        <svg
          className="absolute block"
          style={{ width: 20, height: 20, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
          fill="none"
          viewBox="0 0 19.9698 19.9704"
        >
          <path d={filterSvgPaths.p116d4380} fill={fill} />
        </svg>
      </div>
    </div>
  );
}

function LowWaitingIcon({ active }: { active: boolean }) {
  const fill = active ? "var(--primary)" : "var(--card-foreground)";
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="overflow-clip absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[24px]">
        <svg
          className="absolute block"
          style={{ width: 22, height: 21, left: "calc(50% - 1px)", top: "calc(50% + 0.5px)", transform: "translate(-50%, -50%)" }}
          fill="none"
          viewBox="0 0 22 21"
        >
          <path d={filterSvgPaths.p3f783700} fill={fill} />
        </svg>
      </div>
    </div>
  );
}

/* ── Filter definitions ── */

interface FilterDef {
  id: QueueFilterType;
  label: string;
  icon: (active: boolean) => React.ReactNode;
}

const FILTERS: FilterDef[] = [
  { id: "waiting", label: "Waiting", icon: (a) => <WaitingIcon active={a} /> },
  { id: "no-agents", label: "No agents", icon: (a) => <NoAgentsIcon active={a} /> },
  { id: "10+-waiting", label: "10+ Waiting", icon: (a) => <TenPlusWaitingIcon active={a} /> },
  { id: "low-waiting", label: "Low Waiting", icon: (a) => <LowWaitingIcon active={a} /> },
];

/* ── Filter chip ── */

function FilterChip({
  filter,
  active,
  onClick,
}: {
  filter: FilterDef;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="relative shrink-0 cursor-pointer"
      style={{
        minWidth: 68,
        borderRadius: "var(--radius-card)",
        backgroundColor: active ? "var(--tab-active-bg)" : "var(--background)",
        border: "none",
        padding: 0,
      }}
      onClick={onClick}
    >
      {/* Outer border + shadow */}
      <div
        className="absolute inset-[-0.5px] pointer-events-none"
        style={{
          borderRadius: "12.5px",
          border: "0.5px solid var(--border)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.14), 0px 0px 2px 0px rgba(0,0,0,0.12)",
        }}
      />
      <div className="flex flex-col gap-[4px] items-center min-w-[inherit] pb-[8px] pt-[12px] px-[8px]">
        {filter.icon(active)}
        <span
          style={{
            fontSize: "var(--text-label)",
            fontWeight: "var(--font-weight-bold)",
            color: active ? "var(--primary)" : "var(--card-foreground)",
            letterSpacing: "0.06px",
            lineHeight: "11px",
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {filter.label}
        </span>
      </div>
    </button>
  );
}

/* ── Main export ── */

export function QueueFilters() {
  const { showFilters, activeFilter, setActiveFilter } = useSimulator();

  if (!showFilters) return null;

  return (
    <div
      className="bg-background relative shrink-0 w-full"
      style={{ height: 75 }}
    >
      <div
        className="absolute left-0 top-0 flex gap-[12px] items-center px-[16px] py-[8px] overflow-x-auto"
        style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
      >
        {FILTERS.map((f) => (
          <FilterChip
            key={f.id}
            filter={f}
            active={activeFilter === f.id}
            onClick={() => setActiveFilter(activeFilter === f.id ? null : f.id!)}
          />
        ))}
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
      </div>
    </div>
  );
}
