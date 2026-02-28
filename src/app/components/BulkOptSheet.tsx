import { useEffect, useState, useMemo } from "react";
import { type Person } from "../data";
import svgPaths from "../../imports/svg-v1qm2o1j29";

interface BulkOptSheetProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "opt-in" | "opt-out";
  /** All agents (not leads) in the queue */
  agents: Person[];
  onConfirm: (selectedIds: string[]) => void;
}

function CloseIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M4.09 4.22a.75.75 0 0 1 1.06-.04L10 8.94l4.85-4.76a.75.75 0 1 1 1.06 1.06L11.06 10l4.85 4.76a.75.75 0 1 1-1.06 1.06L10 11.06l-4.85 4.76a.75.75 0 1 1-1.06-1.06L8.94 10 4.09 5.24a.75.75 0 0 1 .04-1.06Z" fill="var(--card-foreground)" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
      <path d="M11.74 10.68a6.5 6.5 0 1 0-1.06 1.06l3.79 3.79a.75.75 0 1 0 1.06-1.06l-3.79-3.79ZM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="var(--muted-foreground)" />
    </svg>
  );
}

function CheckmarkIcon() {
  return (
    <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
      <path d="M10.28 2.72a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06L4.25 7.69l4.97-4.97a.75.75 0 0 1 1.06 0Z" fill="white" />
    </svg>
  );
}

function PresenceBadge({ status }: { status: Person["status"] }) {
  if (status === "available") {
    return (
      <div className="absolute bottom-[1px] right-[1px] size-[10px]">
        <svg className="block" style={{ width: 12, height: 12, margin: "-1px" }} fill="none" viewBox="0 0 14 14">
          <path d={svgPaths.p329da780} fill="#6BB700" stroke="white" strokeWidth="1.4" />
        </svg>
      </div>
    );
  }
  if (status === "busy") {
    return (
      <div className="absolute bottom-[1px] right-[1px] size-[10px]">
        <svg className="block" style={{ width: 12, height: 12, margin: "-1px" }} fill="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" r="6.3" fill="#C50F1F" stroke="white" strokeWidth="1.4" />
        </svg>
      </div>
    );
  }
  if (status === "away") {
    return (
      <div className="absolute bottom-[1px] right-[1px] size-[10px]">
        <svg className="block" style={{ width: 12, height: 12, margin: "-1px" }} fill="none" viewBox="0 0 14 14">
          <path d={svgPaths.p1b798180} fill="#FFAA44" stroke="white" strokeWidth="1.4" />
        </svg>
      </div>
    );
  }
  if (status === "offline") {
    return (
      <div className="absolute bottom-[1px] right-[1px] size-[10px]">
        <svg className="block" style={{ width: 13, height: 13, margin: "-1.5px" }} fill="none" viewBox="0 0 15.2 15.2">
          <path d={svgPaths.p36a1c080} fill="#8A8886" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    );
  }
  return null;
}

export function BulkOptSheet({ isOpen, onClose, mode, agents, onConfirm }: BulkOptSheetProps) {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Filter agents based on mode: opt-in shows opted-out agents, opt-out shows opted-in agents
  // Leads are excluded (already done by parent passing only agents)
  const eligibleAgents = useMemo(() => {
    const filtered = mode === "opt-in"
      ? agents.filter((a) => !a.optedIn)
      : agents.filter((a) => a.optedIn);
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [agents, mode]);

  const filteredAgents = useMemo(() => {
    if (!search.trim()) return eligibleAgents;
    const q = search.toLowerCase();
    return eligibleAgents.filter((a) => a.name.toLowerCase().includes(q));
  }, [eligibleAgents, search]);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setSearch("");
      setSelectedIds(new Set());
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true));
      });
    } else {
      setAnimating(false);
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleConfirm = () => {
    onConfirm(Array.from(selectedIds));
    onClose();
  };

  const title = mode === "opt-in" ? "Opt in agents" : "Opt out agents";
  const ctaLabel = mode === "opt-in"
    ? `Opt ${selectedIds.size} agent${selectedIds.size !== 1 ? "s" : ""} in`
    : `Opt ${selectedIds.size} agent${selectedIds.size !== 1 ? "s" : ""} out`;

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col bg-background"
      style={{
        transform: animating ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
      }}
    >
      {/* Header */}
      <div className="flex items-center px-[16px] pt-[16px] pb-[12px] gap-[12px] shrink-0">
        <button className="cursor-pointer shrink-0" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="flex-1 flex items-center justify-center">
          <span
            style={{
              fontSize: "var(--text-h3)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--card-foreground)",
              letterSpacing: "-0.41px",
              lineHeight: "22px",
            }}
          >
            {title}
          </span>
        </div>
        <button
          className="cursor-pointer shrink-0"
          onClick={onClose}
        >
          <span
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--card-foreground)",
              letterSpacing: "-0.24px",
              lineHeight: "20px",
            }}
          >
            Cancel
          </span>
        </button>
      </div>

      {/* Search */}
      <div className="px-[16px] pb-[12px] shrink-0">
        <div
          className="flex items-center gap-[8px] px-[12px] rounded-[var(--radius)]"
          style={{
            height: 36,
            backgroundColor: "var(--input-background)",
          }}
        >
          <SearchIcon />
          <input
            className="flex-1 bg-transparent outline-none border-none"
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--card-foreground)",
              letterSpacing: "-0.24px",
            }}
            placeholder="Filter agent's name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Agent list */}
      <div className="flex-1 overflow-y-auto">
        {filteredAgents.length === 0 ? (
          <div className="flex items-center justify-center py-[48px]">
            <span
              style={{
                fontSize: "var(--text-h4)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--muted-foreground)",
              }}
            >
              No agents found
            </span>
          </div>
        ) : (
          filteredAgents.map((agent) => {
            const isSelected = selectedIds.has(agent.id);
            return (
              <div
                key={agent.id}
                className="flex items-center gap-[12px] px-[16px] py-[10px] cursor-pointer active:bg-secondary/50 transition-colors"
                onClick={() => toggleSelect(agent.id)}
              >
                {/* Checkbox */}
                <div
                  className="shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: 24,
                    height: 24,
                    backgroundColor: isSelected ? "var(--primary)" : "transparent",
                    border: isSelected ? "none" : "2px solid var(--border)",
                  }}
                >
                  {isSelected && <CheckmarkIcon />}
                </div>

                {/* Avatar */}
                <div className="relative shrink-0 size-[40px]">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <img
                      alt=""
                      className="absolute max-w-none object-cover rounded-full size-full pointer-events-none"
                      style={{ objectPosition: "center 20%" }}
                      src={agent.avatar}
                    />
                  </div>
                  <PresenceBadge status={agent.status} />
                </div>

                {/* Name */}
                <span
                  className="flex-1 truncate"
                  style={{
                    fontSize: "var(--text-h4)",
                    fontWeight: "var(--font-weight-normal)",
                    color: "var(--card-foreground)",
                    letterSpacing: "-0.08px",
                    lineHeight: "20px",
                  }}
                >
                  {agent.name}
                </span>
              </div>
            );
          })
        )}
      </div>

      {/* Bottom CTA */}
      <div
        className="shrink-0 px-[16px] pt-[12px] pb-[34px]"
        style={{ borderTop: "0.5px solid var(--border)" }}
      >
        <button
          className="w-full flex items-center justify-center gap-[8px] rounded-[var(--radius-button)] cursor-pointer"
          style={{
            height: 52,
            backgroundColor: selectedIds.size > 0 ? "var(--primary)" : "var(--secondary)",
            opacity: selectedIds.size > 0 ? 1 : 0.6,
            pointerEvents: selectedIds.size > 0 ? "auto" : "none",
          }}
          onClick={handleConfirm}
          disabled={selectedIds.size === 0}
        >
          {mode === "opt-in" ? (
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <svg className="absolute block" style={{ width: 12, height: 10, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} fill="none" viewBox="0 0 12.25 10">
                <path d="M11.78.47a.75.75 0 0 1 0 1.06L4.53 8.78a.75.75 0 0 1-1.06 0L.22 5.53a.75.75 0 1 1 1.06-1.06L4 7.19 10.72.47a.75.75 0 0 1 1.06 0Z" fill={selectedIds.size > 0 ? "var(--primary-foreground)" : "var(--muted-foreground)"} />
              </svg>
            </div>
          ) : null}
          <span
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-medium)",
              color: selectedIds.size > 0 ? "var(--primary-foreground)" : "var(--muted-foreground)",
              letterSpacing: "-0.24px",
              lineHeight: "20px",
            }}
          >
            {ctaLabel}
          </span>
        </button>
      </div>
    </div>
  );
}