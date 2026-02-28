import { useEffect, useState } from "react";
import { StatusBar } from "./StatusBar";
import { HomeIndicator } from "./HomeIndicator";
import svgPaths from "../../imports/svg-v1qm2o1j29";

interface ChatScreenProps {
  name: string;
  avatar?: string;
  status?: string;
  onClose: () => void;
  onCall?: () => void;
}

function BackIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <svg
        className="absolute block"
        style={{ width: 10.5, height: 20, left: "calc(50% - 4.25px)", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 10.5 20"
      >
        <path d={svgPaths.p11c550f0} fill="var(--foreground)" />
      </svg>
    </div>
  );
}

function CallIconSmall() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d={svgPaths.p39b37080} fill="var(--card-foreground)" style={{ transform: "scale(0.9)", transformOrigin: "center" }} />
    </svg>
  );
}

function PresenceDot({ status }: { status?: string }) {
  const color = status === "available" ? "#6BB700" :
    status === "busy" ? "#C50F1F" :
    status === "away" ? "#FFAA44" : "#8A8886";
  return (
    <div
      className="absolute bottom-0 right-0 rounded-full"
      style={{ width: 10, height: 10, backgroundColor: color, border: "1.5px solid white" }}
    />
  );
}

const CHAT_MESSAGES = [
  { id: 1, sender: "them", text: "yesterday. ENT queue cleared faster than expected" },
  { id: 2, sender: "me", text: "Heads-up: Care queue might need coverage today. Dr. Lin's clinic is short-staffed" },
  { id: 3, sender: "them", text: "Got it" },
  { id: 4, sender: "them", text: "I'll opt in after rounds" },
  { id: 5, sender: "them", text: "Will ping if I need backup" },
  { id: 6, sender: "me", text: "Morning. Can you check if the call queue for Nurse line is active?" },
  { id: 7, sender: "me", text: "Got a ping from front desk" },
  { id: 8, sender: "me", text: "thanks" },
  { id: 9, sender: "them", text: "Hey Lydia, just checked" },
  { id: 10, sender: "them", text: "Opted myself in, should be good now.." },
  { id: 11, sender: "me", text: "Thanks. Can you keep an eye on it till noon?" },
  { id: 12, sender: "me", text: "We've got consults stacking up" },
];

export function ChatScreen({ name, avatar, status, onClose, onCall }: ChatScreenProps) {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setVisible(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimating(true));
    });
  }, []);

  const handleClose = () => {
    setAnimating(false);
    setTimeout(() => {
      setVisible(false);
      onClose();
    }, 300);
  };

  if (!visible) return null;

  const statusLabel = status === "available" ? "Available" :
    status === "busy" ? "Busy" :
    status === "away" ? "Away" : "Offline";

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col bg-background"
      style={{
        transform: animating ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
      }}
    >
      <StatusBar />

      {/* Header */}
      <div className="flex items-center px-[12px] py-[8px] gap-[8px] shrink-0" style={{ borderBottom: "0.5px solid var(--border)" }}>
        <button className="cursor-pointer shrink-0 p-[4px]" onClick={handleClose}>
          <BackIcon />
        </button>

        {/* Avatar */}
        <div className="relative shrink-0" style={{ width: 36, height: 36 }}>
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {avatar ? (
              <img src={avatar} alt={name} className="object-cover size-full pointer-events-none" style={{ objectPosition: "center 20%" }} />
            ) : (
              <div
                className="flex items-center justify-center size-full"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <span style={{ fontSize: "14px", fontWeight: "var(--font-weight-medium)", color: "white" }}>
                  {name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </span>
              </div>
            )}
          </div>
          <PresenceDot status={status} />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <span
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--card-foreground)",
              letterSpacing: "-0.24px",
              lineHeight: "20px",
            }}
          >
            {name}
          </span>
          <span
            style={{
              fontSize: "12px",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--muted-foreground)",
              lineHeight: "16px",
            }}
          >
            {statusLabel}
          </span>
        </div>

        <button className="cursor-pointer shrink-0 p-[4px]" onClick={onCall}>
          <CallIconSmall />
        </button>
        <button className="cursor-pointer shrink-0 p-[4px]">
          <svg width="20" height="20" fill="none" viewBox="0 0 13.5 3.5">
            <path d={svgPaths.pd80200} fill="var(--muted-foreground)" />
          </svg>
        </button>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-[16px] py-[12px] flex flex-col gap-[4px]">
        {CHAT_MESSAGES.map((msg) => (
          <div
            key={msg.id}
            className="flex"
            style={{ justifyContent: msg.sender === "me" ? "flex-end" : "flex-start" }}
          >
            <div
              className="px-[12px] py-[8px] max-w-[75%]"
              style={{
                backgroundColor: msg.sender === "me" ? "var(--primary)" : "var(--secondary)",
                borderRadius: msg.sender === "me"
                  ? "var(--radius-card) var(--radius-card) 4px var(--radius-card)"
                  : "var(--radius-card) var(--radius-card) var(--radius-card) 4px",
              }}
            >
              <span
                style={{
                  fontSize: "var(--text-h4)",
                  fontWeight: "var(--font-weight-normal)",
                  color: msg.sender === "me" ? "white" : "var(--card-foreground)",
                  letterSpacing: "-0.24px",
                  lineHeight: "20px",
                }}
              >
                {msg.text}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div
        className="shrink-0 flex items-center gap-[8px] px-[12px] py-[8px]"
        style={{ borderTop: "0.5px solid var(--border)" }}
      >
        <div
          className="flex items-center justify-center shrink-0 rounded-full"
          style={{ width: 28, height: 28, backgroundColor: "var(--primary)" }}
        >
          <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
            <path d="M7 0a.75.75 0 0 1 .75.75v5.5h5.5a.75.75 0 0 1 0 1.5h-5.5v5.5a.75.75 0 0 1-1.5 0v-5.5H.75a.75.75 0 0 1 0-1.5h5.5V.75A.75.75 0 0 1 7 0Z" fill="white" />
          </svg>
        </div>
        <div
          className="flex-1 flex items-center px-[12px] rounded-full"
          style={{
            height: 36,
            backgroundColor: "var(--input-background)",
            border: "1px solid var(--border)",
          }}
        >
          <span
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-normal)",
              color: "var(--muted-foreground)",
              letterSpacing: "-0.24px",
            }}
          >
            Type a message
          </span>
        </div>
        <div className="flex gap-[4px] shrink-0">
          <div className="p-[4px] cursor-pointer">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="9" stroke="var(--muted-foreground)" strokeWidth="1.5" />
              <circle cx="7" cy="8.5" r="1" fill="var(--muted-foreground)" />
              <circle cx="13" cy="8.5" r="1" fill="var(--muted-foreground)" />
              <path d="M6.5 12.5c.83 1.17 2.17 2 3.5 2s2.67-.83 3.5-2" stroke="var(--muted-foreground)" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="p-[4px] cursor-pointer">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <rect x="3" y="3" width="14" height="14" rx="3" stroke="var(--muted-foreground)" strokeWidth="1.5" />
              <circle cx="7.5" cy="8" r="1.25" fill="var(--muted-foreground)" />
              <path d="M3 14l4-4 3 3 2.5-2.5L17 15" stroke="var(--muted-foreground)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="p-[4px] cursor-pointer">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M10 1a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3ZM5 8.5a.75.75 0 0 0-1.5 0V9a6.5 6.5 0 0 0 5.75 6.46v2.29a.75.75 0 0 0 1.5 0v-2.29A6.5 6.5 0 0 0 16.5 9v-.5a.75.75 0 0 0-1.5 0V9a5 5 0 0 1-10 0v-.5Z" fill="var(--muted-foreground)" />
            </svg>
          </div>
        </div>
      </div>

      <HomeIndicator />
    </div>
  );
}