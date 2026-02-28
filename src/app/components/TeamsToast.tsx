import { useEffect, useState, useCallback } from "react";
import dismissSvg from "../../imports/svg-tf0phru8ed";

interface TeamsToastProps {
  message: string | null;
  /** Auto-dismiss duration in ms (default 3000) */
  duration?: number;
  /** Called when toast is fully dismissed */
  onDismiss: () => void;
}

/**
 * Teams-style iOS toast — matches the Figma "Toast bottom (Teams 2 iOS)" reference.
 * Slides up with an iOS spring curve, and slides back down on dismiss.
 */
export function TeamsToast({ message, duration = 3000, onDismiss }: TeamsToastProps) {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const dismiss = useCallback(() => {
    setAnimateIn(false);
    // Wait for exit animation to complete, then hide
    setTimeout(() => {
      setVisible(false);
      onDismiss();
    }, 340);
  }, [onDismiss]);

  useEffect(() => {
    if (message) {
      setVisible(true);
      // Trigger enter animation on next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimateIn(true));
      });
      // Auto-dismiss
      const timer = setTimeout(dismiss, duration);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
      const hideTimer = setTimeout(() => setVisible(false), 340);
      return () => clearTimeout(hideTimer);
    }
  }, [message, duration, dismiss]);

  if (!visible || !message) return null;

  return (
    <div
      className="absolute left-[16px] right-[16px] z-30"
      style={{
        bottom: 80,
        transform: animateIn ? "translateY(0)" : "translateY(24px)",
        opacity: animateIn ? 1 : 0,
        transition: animateIn
          ? "transform 0.44s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.22s ease-out"
          : "transform 0.34s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.18s ease-in",
        pointerEvents: animateIn ? "auto" : "none",
      }}
    >
      <div
        className="relative w-full"
        style={{
          backgroundColor: "var(--secondary)",
          borderRadius: "var(--radius-card)",
          boxShadow: "var(--elevation-sm)",
        }}
      >
        {/* Inner border (Figma reference) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "var(--radius-card)",
            border: "0.5px solid var(--secondary)",
          }}
        />
        <div className="flex items-center justify-between p-[16px]">
          {/* Message */}
          <span
            className="flex-1 min-w-0"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--card-foreground)",
              letterSpacing: "-0.41px",
              lineHeight: "22px",
            }}
          >
            {message}
          </span>
          {/* Dismiss button */}
          <button
            className="shrink-0 flex items-center justify-center cursor-pointer ml-[16px]"
            style={{ background: "none", border: "none", padding: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              dismiss();
            }}
          >
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="absolute left-1/2 top-1/2 size-[12.5px] -translate-x-1/2 -translate-y-1/2">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
                  <path d={dismissSvg.p162d1c00} fill="var(--icon-secondary)" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
