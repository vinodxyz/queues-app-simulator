import { useState, useEffect } from "react";
import { useSimulator } from "./useSimulator";
import { API_DELAYS } from "../config";

/**
 * 1st API — Queue REST endpoint (fast: ~300ms)
 * Returns queue metadata: names, IDs, initials, avatar colors.
 */
export interface QueueBasicInfo {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  avatarTextColor: string;
}

/**
 * 2nd API — SignalR real-time feed (slower: ~700ms)
 * Returns live metrics per queue: opted-in count, service level, waiting calls.
 */
export interface QueueRealtimeData {
  optedInCount: number;
  serviceLevel: number;
  callsWaiting: number;
  hasAlert: boolean;
}

export type RealtimeMap = Record<string, QueueRealtimeData>;

/**
 * Simulates two independent APIs:
 * 1. Queues REST API → queue list (names, IDs, initials, avatar colors)
 * 2. SignalR real-time → opted-in counts, service level, waiting calls
 *
 * The 1st API resolves quickly (300ms), the 2nd arrives ~400ms later (700ms).
 * This creates a visible stagger: names + avatars appear first, then
 * metrics shimmer in.
 *
 * Once both load, live data comes from the SimulatorContext.
 */
export function useQueuesData() {
  const { liveQueues } = useSimulator();
  const [queuesList, setQueuesList] = useState<QueueBasicInfo[] | null>(null);
  const [realtimeData, setRealtimeData] = useState<RealtimeMap | null>(null);

  // Simulate Queues REST API initial load (fast)
  useEffect(() => {
    const timer = setTimeout(() => {
      const basicInfo: QueueBasicInfo[] = liveQueues.map((q) => ({
        id: q.id,
        name: q.name,
        initials: q.initials,
        avatarBg: q.avatarBg,
        avatarTextColor: q.avatarTextColor,
      }));
      setQueuesList(basicInfo);
    }, API_DELAYS.queuesApi);

    return () => clearTimeout(timer);
    // Only run on mount — initial load simulation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Simulate SignalR real-time API initial load (arrives later)
  useEffect(() => {
    const timer = setTimeout(() => {
      const data: RealtimeMap = {};
      liveQueues.forEach((q) => {
        data[q.id] = {
          optedInCount: q.optedInCount,
          serviceLevel: q.serviceLevel,
          callsWaiting: q.callsWaiting,
          hasAlert: q.hasAlert ?? false,
        };
      });
      setRealtimeData(data);
    }, API_DELAYS.realtimeApi);

    return () => clearTimeout(timer);
    // Only run on mount — initial load simulation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // After initial load, keep queuesList and realtimeData in sync with simulator
  useEffect(() => {
    if (queuesList !== null) {
      setQueuesList(
        liveQueues.map((q) => ({
          id: q.id,
          name: q.name,
          initials: q.initials,
          avatarBg: q.avatarBg,
          avatarTextColor: q.avatarTextColor,
        }))
      );
    }
    if (realtimeData !== null) {
      const data: RealtimeMap = {};
      liveQueues.forEach((q) => {
        data[q.id] = {
          optedInCount: q.optedInCount,
          serviceLevel: q.serviceLevel,
          callsWaiting: q.callsWaiting,
          hasAlert: q.hasAlert ?? false,
        };
      });
      setRealtimeData(data);
    }
    // Only react to liveQueues changes (simulator ticks), not our own state
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liveQueues]);

  return {
    /** Queue list from REST API — null if still loading */
    queuesList,
    /** Real-time data from SignalR — null if still loading */
    realtimeData,
    /** Full queue data — only available once both APIs have loaded */
    fullQueues: queuesList && realtimeData ? liveQueues : null,
    /** True when the queues REST API is still loading */
    isQueuesLoading: queuesList === null,
    /** True when the real-time SignalR data is still loading */
    isRealtimeLoading: realtimeData === null,
  };
}