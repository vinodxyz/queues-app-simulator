import { useEffect, useState } from "react";
import { type CallRecord } from "../data";
import svgPaths from "../../imports/svg-7qav5i78ss";

/* ── Icon components ── */

function CallBackIcon() {
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

function BlockIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg
        className="absolute block"
        style={{ width: 20, height: 20, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 20 20"
      >
        <path d={svgPaths.p399cfc00} fill="var(--card-foreground)" />
        <path d="M4.5 10h11" stroke="var(--card-foreground)" strokeWidth="1.5" strokeLinecap="round" />
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

function ViewRecapIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg
        className="absolute block"
        style={{ width: 20, height: 20, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 20 20"
      >
        <path d="M10 1.5C7.4 1.5 5.08 2.66 3.52 4.5H5.25a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 5.25V1.75a.75.75 0 0 1 1.5 0v1.64A9.97 9.97 0 0 1 10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10a.8.8 0 0 1 .1-.41A.8.8 0 0 1 .8 8c.48 0 .83.45.77.92A8.5 8.5 0 1 0 10 1.5ZM9.23 6.19A1.75 1.75 0 0 0 7 7.5v5a1.75 1.75 0 0 0 2.23 1.69l4.5-1.81a1.75 1.75 0 0 0 0-3.26l-4.5-1.93Z" fill="var(--card-foreground)" />
      </svg>
    </div>
  );
}

function TrashIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg
        className="absolute block"
        style={{ width: 20, height: 20, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 20 20.5"
      >
        <path d="M8 3.5h4a2 2 0 0 0-4 0Zm-1.5 0a3.5 3.5 0 0 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.11A3.25 3.25 0 0 1 13.53 20H6.97a3.25 3.25 0 0 1-3.23-2.89L2.57 5H1.25a.75.75 0 0 1 0-1.5H6.5Zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5Zm3.75-.75a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75ZM5.23 16.97a1.75 1.75 0 0 0 1.74 1.53h6.06a1.75 1.75 0 0 0 1.74-1.53L15.92 5H4.08l1.16 11.97Z" fill="var(--destructive)" />
      </svg>
    </div>
  );
}

/* ── Helpers ── */

function isExternalCaller(callerName: string): boolean {
  return callerName.startsWith("+") || /^\d/.test(callerName);
}

interface ActionItem {
  icon: React.ReactNode;
  label: string;
  destructive?: boolean;
  onAction?: () => void;
}

function getCallActions(call: CallRecord, onCall?: () => void, onChat?: () => void): ActionItem[] {
  if (isExternalCaller(call.callerName)) {
    return [
      { icon: <CallBackIcon />, label: "Call back", onAction: onCall },
      { icon: <BlockIcon />, label: "Block number" },
      { icon: <TrashIcon />, label: "Remove", destructive: true },
    ];
  }
  // Internal caller
  return [
    { icon: <CallBackIcon />, label: "Call back", onAction: onCall },
    { icon: <SendMessageIcon />, label: "Send message", onAction: onChat },
    { icon: <ViewRecapIcon />, label: "View recap" },
    { icon: <TrashIcon />, label: "Remove", destructive: true },
  ];
}

/* ── Bottom sheet ── */

interface CallHistoryActionSheetProps {
  call: CallRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onCall?: (callerName: string) => void;
  onChat?: (callerName: string) => void;
}

export function CallHistoryActionSheet({
  call,
  isOpen,
  onClose,
  onCall,
  onChat,
}: CallHistoryActionSheetProps) {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true));
      });
    } else {
      setAnimating(false);
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible || !call) return null;

  const isExternal = isExternalCaller(call.callerName);
  const title = isExternal
    ? `${call.type === "missed" || call.type === "forwarded" ? "Missed call" : call.type === "outgoing" ? "Outgoing" : "Call"}: ${call.callerName}`
    : `Outgoing: ${call.callerName}`;
  const subtitle = `Today, ${call.time}`;

  const actions = getCallActions(
    call,
    onCall ? () => onCall(call.callerName) : undefined,
    onChat ? () => onChat(call.callerName) : undefined,
  );

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

        {/* Header */}
        <div className="flex flex-col items-center pb-[16px] pt-[8px]">
          <span
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--card-foreground)",
              letterSpacing: "-0.41px",
              lineHeight: "22px",
              textAlign: "center",
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            {title}
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
                action.onAction?.();
                onClose();
              }}
            >
              {action.icon}
              <span
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-normal)",
                  color: action.destructive ? "var(--destructive)" : "var(--card-foreground)",
                  letterSpacing: "-0.41px",
                  lineHeight: "22px",
                }}
              >
                {action.label}
              </span>
            </button>
          ))}
        </div>

        {/* Safe area bottom padding */}
        <div style={{ height: 34 }} />
      </div>
    </>
  );
}
