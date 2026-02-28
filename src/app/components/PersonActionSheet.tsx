import { useEffect, useState } from "react";
import { type Person, currentUser, agentUser } from "../data";
import { type ActiveRole } from "../hooks/useSimulator";
import svgPaths from "../../imports/svg-7qav5i78ss";

/* ── Icon components using Figma SVGs ── */

function OptInIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg
        className="absolute block"
        style={{ width: 20, height: 20, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 14 14"
      >
        <path d={svgPaths.p142fa6f0} fill="var(--card-foreground)" />
      </svg>
    </div>
  );
}

function OptOutIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg
        className="absolute block"
        style={{ width: 20, height: 20, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 15 14"
      >
        <path d={svgPaths.p11d3bb70} fill="var(--card-foreground)" />
      </svg>
    </div>
  );
}

function CallIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg
        className="absolute block"
        style={{ width: 15.3, height: 20, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 15.302 20.096"
      >
        <path d={svgPaths.p39b37080} fill="var(--card-foreground)" />
      </svg>
    </div>
  );
}

function SendMessageIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg
        className="absolute block"
        style={{ width: 20, height: 20, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 20 20.002"
      >
        <path d={svgPaths.p3c8e8a00} fill="var(--card-foreground)" />
      </svg>
    </div>
  );
}

function ViewProfileIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg
        className="absolute block"
        style={{ width: 20, height: 16, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 20 16.0046"
      >
        <path d={svgPaths.p27af3f00} fill="var(--card-foreground)" />
      </svg>
    </div>
  );
}

/* ── Action item ── */

interface ActionItem {
  icon: React.ReactNode;
  label: string;
  onAction?: () => void;
}

/* ── Build the action list based on role & person context ── */

function getActions(
  person: Person,
  activeRole: ActiveRole,
  onOptToggle?: () => void,
): ActionItem[] {
  const isSelf =
    (activeRole === "supervisor" && person.id === currentUser.id) ||
    (activeRole === "agent" && person.id === agentUser.id);

  if (activeRole === "supervisor") {
    if (isSelf) {
      // Self (supervisor/lead)
      return [
        {
          icon: person.optedIn ? <OptOutIcon /> : <OptInIcon />,
          label: person.optedIn ? "Opt out" : "Opt in",
          onAction: onOptToggle,
        },
        { icon: <ViewProfileIcon />, label: "View profile" },
      ];
    }
    if (person.role === "lead") {
      // Another lead
      return [
        { icon: <CallIcon />, label: "Call" },
        { icon: <SendMessageIcon />, label: "Send message" },
        { icon: <ViewProfileIcon />, label: "View profile" },
      ];
    }
    // Agent (supervisor can opt in/out agents)
    return [
      {
        icon: person.optedIn ? <OptOutIcon /> : <OptInIcon />,
        label: person.optedIn ? "Opt out" : "Opt in",
        onAction: onOptToggle,
      },
      { icon: <CallIcon />, label: "Call" },
      { icon: <SendMessageIcon />, label: "Send message" },
      { icon: <ViewProfileIcon />, label: "View profile" },
    ];
  }

  // Agent role
  if (isSelf) {
    return [
      {
        icon: person.optedIn ? <OptOutIcon /> : <OptInIcon />,
        label: person.optedIn ? "Opt out" : "Opt in",
        onAction: onOptToggle,
      },
      { icon: <ViewProfileIcon />, label: "View profile" },
    ];
  }
  // Any other person (lead or agent)
  return [
    { icon: <CallIcon />, label: "Call" },
    { icon: <SendMessageIcon />, label: "Send message" },
    { icon: <ViewProfileIcon />, label: "View profile" },
  ];
}

/* ── Bottom sheet ── */

interface PersonActionSheetProps {
  person: Person | null;
  activeRole: ActiveRole;
  isOpen: boolean;
  onClose: () => void;
  onOptToggle?: () => void;
  onCall?: (person: Person) => void;
  onChat?: (person: Person) => void;
}

export function PersonActionSheet({
  person,
  activeRole,
  isOpen,
  onClose,
  onOptToggle,
  onCall,
  onChat,
}: PersonActionSheetProps) {
  // Track animation state for slide-in/out
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      // Trigger enter animation on next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true));
      });
    } else {
      setAnimating(false);
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible || !person) return null;

  const isSelf =
    (activeRole === "supervisor" && person.id === currentUser.id) ||
    (activeRole === "agent" && person.id === agentUser.id);

  const actions = getActions(person, activeRole, onOptToggle);
  const subtitle = person.activity || (person.optedIn ? "Opted in" : "Opted out");

  return (
    <>
      {/* Backdrop */}
      <div
        className="absolute inset-0 z-40"
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          opacity: animating ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className="absolute left-0 right-0 bottom-0 z-50 flex flex-col bg-background"
        style={{
          borderTopLeftRadius: "var(--radius-card)",
          borderTopRightRadius: "var(--radius-card)",
          transform: animating ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* Drag handle */}
        <div className="flex items-center justify-center pt-[8px] pb-[4px]">
          <div
            className="rounded-full"
            style={{ width: 36, height: 5, backgroundColor: "var(--border)" }}
          />
        </div>

        {/* Header: name + subtitle */}
        <div className="flex flex-col items-center pb-[16px] pt-[8px]">
          <span
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--card-foreground)",
              letterSpacing: "-0.41px",
              lineHeight: "22px",
            }}
          >
            {person.name}{isSelf ? " (You)" : ""}
          </span>
          <span
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--muted-foreground)",
              letterSpacing: "-0.08px",
              lineHeight: "20px",
            }}
          >
            {subtitle}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px relative shrink-0 w-full">
          <div className="absolute bg-border h-[0.5px] left-0 right-0 top-0" />
        </div>

        {/* Action rows */}
        <div className="flex flex-col">
          {actions.map((action, idx) => (
            <button
              key={idx}
              className="flex items-center gap-[16px] px-[20px] py-[14px] cursor-pointer w-full active:bg-secondary/50 transition-colors"
              style={{ background: "none", border: "none", textAlign: "left" }}
              onClick={() => {
                if (action.label === "Call" && onCall && person) {
                  onCall(person);
                  onClose();
                  return;
                }
                if (action.label === "Send message" && onChat && person) {
                  onChat(person);
                  onClose();
                  return;
                }
                action.onAction?.();
                onClose();
              }}
            >
              {action.icon}
              <span
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--card-foreground)",
                  letterSpacing: "-0.41px",
                  lineHeight: "22px",
                }}
              >
                {action.label}
              </span>
            </button>
          ))}
        </div>

        {/* Safe area bottom padding + home indicator space */}
        <div style={{ height: 34 }} />
      </div>
    </>
  );
}