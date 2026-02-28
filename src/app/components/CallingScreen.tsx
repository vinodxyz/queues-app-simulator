import { useEffect, useState, useRef } from "react";
import { StatusBar } from "./StatusBar";
import { HomeIndicator } from "./HomeIndicator";
import svgPaths from "../../imports/svg-v1qm2o1j29";

interface CallingScreenProps {
  name: string;
  avatar?: string;
  onClose: () => void;
}

function MicIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M10 1a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3ZM5 8.5a.75.75 0 0 0-1.5 0V9a6.5 6.5 0 0 0 5.75 6.46v2.29a.75.75 0 0 0 1.5 0v-2.29A6.5 6.5 0 0 0 16.5 9v-.5a.75.75 0 0 0-1.5 0V9a5 5 0 0 1-10 0v-.5Z" fill="white" />
    </svg>
  );
}

function SpeakerIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path d="M10.47 2.22a.75.75 0 0 1 .28.58v14.4a.75.75 0 0 1-1.26.55L5.44 14H2.75A1.75 1.75 0 0 1 1 12.25v-4.5C1 6.78 1.78 6 2.75 6h2.69l4.05-3.75a.75.75 0 0 1 .98-.03ZM14 6.5a.75.75 0 0 1 1.06 0A5.97 5.97 0 0 1 17 10.5a5.97 5.97 0 0 1-1.94 4 .75.75 0 1 1-1.06-1.06A4.47 4.47 0 0 0 15.5 10.5 4.47 4.47 0 0 0 14 7.56.75.75 0 0 1 14 6.5Z" fill="white" />
    </svg>
  );
}

function HangUpIcon() {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path d="M3.67 8.67C5.88 6.45 8.79 5 12 5s6.12 1.45 8.33 3.67a.75.75 0 0 1 .17.77l-1.5 4.5a.75.75 0 0 1-.6.5l-3.5.5a.75.75 0 0 1-.8-.5L13 11.06V10a1 1 0 0 0-2 0v1.06l-1.1 3.38a.75.75 0 0 1-.8.5l-3.5-.5a.75.75 0 0 1-.6-.5l-1.5-4.5a.75.75 0 0 1 .17-.77Z" fill="white" />
    </svg>
  );
}

export function CallingScreen({ name, avatar, onClose }: CallingScreenProps) {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ringIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /** Play a Teams-style double-beep ringtone using Web Audio API */
  function startRinging() {
    try {
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      function playBeepPair() {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") return;
        const now = audioCtxRef.current.currentTime;

        // First beep
        const osc1 = audioCtxRef.current.createOscillator();
        const gain1 = audioCtxRef.current.createGain();
        osc1.type = "sine";
        osc1.frequency.value = 440;
        gain1.gain.setValueAtTime(0.15, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc1.connect(gain1);
        gain1.connect(audioCtxRef.current.destination);
        osc1.start(now);
        osc1.stop(now + 0.25);

        // Second beep (higher pitch, slight delay)
        const osc2 = audioCtxRef.current.createOscillator();
        const gain2 = audioCtxRef.current.createGain();
        osc2.type = "sine";
        osc2.frequency.value = 554.37; // C#5
        gain2.gain.setValueAtTime(0.15, now + 0.3);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
        osc2.connect(gain2);
        gain2.connect(audioCtxRef.current.destination);
        osc2.start(now + 0.3);
        osc2.stop(now + 0.55);
      }

      // Play immediately, then repeat every 2 seconds
      playBeepPair();
      ringIntervalRef.current = setInterval(playBeepPair, 2000);
    } catch {
      // Audio not available — silently ignore
    }
  }

  function stopRinging() {
    if (ringIntervalRef.current) {
      clearInterval(ringIntervalRef.current);
      ringIntervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
  }

  useEffect(() => {
    setVisible(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimating(true));
    });
    startRinging();
    return () => stopRinging();
  }, []);

  const handleClose = () => {
    stopRinging();
    setAnimating(false);
    setTimeout(() => {
      setVisible(false);
      onClose();
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col"
      style={{
        backgroundColor: "#1a1a1a",
        opacity: animating ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <StatusBar light />

      {/* Name */}
      <div className="flex items-center justify-center pt-[8px]">
        <span
          style={{
            fontSize: "var(--text-h3)",
            fontWeight: "var(--font-weight-semibold)",
            color: "white",
            letterSpacing: "-0.41px",
            lineHeight: "22px",
          }}
        >
          {name}
        </span>
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Avatar */}
        <div
          className="rounded-full overflow-hidden"
          style={{ width: 120, height: 120, border: "3px solid rgba(255,255,255,0.2)" }}
        >
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="object-cover size-full pointer-events-none"
              style={{ objectPosition: "center 20%" }}
            />
          ) : (
            <div
              className="flex items-center justify-center size-full"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "white",
                }}
              >
                {name.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </span>
            </div>
          )}
        </div>

        <span
          className="mt-[16px]"
          style={{
            fontSize: "var(--text-h4)",
            fontWeight: "var(--font-weight-normal)",
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "-0.24px",
            lineHeight: "20px",
          }}
        >
          Calling...
        </span>
      </div>

      {/* Bottom controls */}
      <div className="flex items-center justify-center gap-[16px] pb-[20px]">
        <button
          className="flex items-center justify-center rounded-full cursor-pointer"
          style={{ width: 48, height: 48, backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <MicIcon />
        </button>
        <button
          className="flex items-center justify-center rounded-full cursor-pointer"
          style={{ width: 48, height: 48, backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <SpeakerIcon />
        </button>
        <button
          className="flex items-center justify-center rounded-full cursor-pointer"
          style={{ width: 48, height: 48, backgroundColor: "#c4314b" }}
          onClick={handleClose}
        >
          <HangUpIcon />
        </button>
      </div>

      <HomeIndicator light />
    </div>
  );
}