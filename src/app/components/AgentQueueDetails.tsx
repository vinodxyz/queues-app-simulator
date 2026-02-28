import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import { agentUser, type Person, type CallRecord } from "../data";
import { useSimulator } from "../hooks/useSimulator";
import { StatusBar } from "./StatusBar";
import { HomeIndicator } from "./HomeIndicator";
import { CallHistory } from "./CallHistory";
import { PersonActionSheet } from "./PersonActionSheet";
import { CallHistoryActionSheet } from "./CallHistoryActionSheet";
import { CallingScreen } from "./CallingScreen";
import { ChatScreen } from "./ChatScreen";
import { API_DELAYS } from "../config";
import {
  SkeletonOptToggle,
  SkeletonAnalytics,
  SkeletonPeopleList,
} from "./DetailsSkeleton";
import svgPaths from "../../imports/svg-v1qm2o1j29";

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

function MoreIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <svg
        className="absolute block"
        style={{ width: 13.5, height: 3.5, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 13.5 3.5"
      >
        <path d={svgPaths.pd80200} fill="var(--muted-foreground)" />
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg
        className="absolute block"
        style={{ width: 8, height: 4.5, left: "50%", top: "calc(50% + 0.75px)", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 8 4.5"
      >
        <path d={svgPaths.p2e2fea80} fill="var(--muted-foreground)" />
      </svg>
    </div>
  );
}

function ClockIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <svg
        className="absolute block"
        style={{ width: 12, height: 12, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        fill="none"
        viewBox="0 0 12 12"
      >
        <path d={svgPaths.p35ef8ec0} fill="var(--card-foreground)" />
      </svg>
    </div>
  );
}

function PresenceBadge({ status }: { status: Person["status"] }) {
  if (status === "available") {
    return (
      <div className="absolute bottom-[1.4px] right-[1.4px] size-[11.2px]">
        <svg className="block" style={{ width: 14, height: 14, margin: "-1.4px" }} fill="none" viewBox="0 0 14 14">
          <path d={svgPaths.p329da780} fill="var(--presence-available)" stroke="white" strokeWidth="1.4" />
        </svg>
      </div>
    );
  }
  if (status === "busy") {
    return (
      <div className="absolute bottom-[1.4px] right-[1.4px] size-[11.2px]">
        <svg className="block" style={{ width: 14, height: 14, margin: "-1.4px" }} fill="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" r="6.3" fill="var(--presence-busy)" stroke="white" strokeWidth="1.4" />
        </svg>
      </div>
    );
  }
  if (status === "away") {
    return (
      <div className="absolute bottom-[1.4px] right-[1.4px] size-[11.2px]">
        <svg className="block" style={{ width: 14, height: 14, margin: "-1.4px" }} fill="none" viewBox="0 0 14 14">
          <path d={svgPaths.p1b798180} fill="var(--presence-away)" stroke="white" strokeWidth="1.4" />
        </svg>
      </div>
    );
  }
  if (status === "offline") {
    return (
      <div className="absolute bottom-[1.4px] right-[1.4px] size-[11.2px]">
        <svg className="block" style={{ width: 15.2, height: 15.2, margin: "-2px" }} fill="none" viewBox="0 0 15.2 15.2">
          <path d={svgPaths.p36a1c080} fill="var(--presence-offline)" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    );
  }
  return null;
}

function PersonAvatar({ person }: { person: Person }) {
  return (
    <div className="pr-[16px] shrink-0">
      <div className="relative shrink-0 size-[40px]">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <img alt="" className="absolute max-w-none object-cover rounded-full size-full pointer-events-none" style={{ objectPosition: "center 20%" }} src={person.avatar} />
        </div>
        <PresenceBadge status={person.status} />
      </div>
    </div>
  );
}

function Toggle({ toggled, onToggle, disabled = false }: { toggled: boolean; onToggle: () => void; disabled?: boolean }) {
  return (
    <button
      className="block cursor-pointer h-[31px] overflow-clip relative rounded-[20px] w-[51px] transition-colors"
      style={{
        backgroundColor: toggled ? "var(--primary)" : "var(--toggle-off)",
        opacity: disabled ? 0.7 : 1,
        pointerEvents: disabled ? "none" : "auto",
      }}
      onClick={onToggle}
      disabled={disabled}
    >
      <div
        className="absolute top-1/2 -translate-y-1/2 size-[28px] rounded-full bg-white transition-all"
        style={{
          left: toggled ? "21.5px" : "1.5px",
          boxShadow: "0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)",
        }}
      />
    </button>
  );
}

function Divider({ inset = 0 }: { inset?: number }) {
  return (
    <div className="h-px relative shrink-0 w-full">
      <div className="absolute bg-border h-[0.5px] right-0 top-0" style={{ left: inset }} />
    </div>
  );
}

function PersonRow({ person, isYou = false, onTap }: { person: Person; isYou?: boolean; onTap: () => void }) {
  const showSubtitle = !!person.activity;
  return (
    <div className="relative shrink-0 w-full cursor-pointer active:bg-secondary/50 transition-colors" onClick={onTap}>
      <div className="bg-background absolute inset-0" />
      <div className="flex items-center relative w-full">
        <div className="flex-1 flex items-center pl-[16px] pr-[12px] py-[12px]">
          <PersonAvatar person={person} />
          <div className="flex-1 flex flex-col justify-center min-w-0">
            <span
              style={{
                fontSize: "var(--text-base)",
                fontWeight: "var(--font-weight-normal)",
                color: "var(--card-foreground)",
                letterSpacing: "-0.41px",
                lineHeight: "22px",
              }}
            >
              {person.name}{isYou ? " (You)" : ""}
            </span>
            {showSubtitle && (
              <span
                className="truncate"
                style={{
                  fontSize: "var(--text-caption)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--muted-foreground)",
                  letterSpacing: "-0.08px",
                  lineHeight: "18px",
                }}
              >
                {person.activity}
              </span>
            )}
          </div>
        </div>
        <div
          className="flex gap-[8px] items-center px-[12px] shrink-0 py-[12px]"
        >
          <MoreIcon />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, collapsed, onToggle }: { title: string; collapsed: boolean; onToggle: () => void }) {
  return (
    <div className="relative shrink-0 w-full cursor-pointer" onClick={onToggle}>
      <div className="bg-background absolute inset-0" />
      <div className="flex items-center relative w-full">
        <div className="flex-1 flex items-center gap-[4px] pb-[8px] pl-[4px] pt-[16px] px-[16px]">
          <div
            className="shrink-0 size-[12px] transition-transform"
            style={{ transform: collapsed ? "rotate(-90deg)" : "rotate(0deg)" }}
          >
            <ChevronDown />
          </div>
          <span
            style={{
              fontSize: "var(--text-h4)",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--card-foreground)",
              letterSpacing: "-0.24px",
              lineHeight: "20px",
            }}
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Loading hook ── */
function useDetailsLoading(queueId: string | undefined) {
  const [queueDataLoaded, setQueueDataLoaded] = useState(false);
  const [analyticsLoaded, setAnalyticsLoaded] = useState(false);

  useEffect(() => {
    setQueueDataLoaded(false);
    setAnalyticsLoaded(false);
    const qt = setTimeout(() => setQueueDataLoaded(true), API_DELAYS.detailsQueueApi);
    const at = setTimeout(() => setAnalyticsLoaded(true), API_DELAYS.detailsAnalyticsApi);
    return () => { clearTimeout(qt); clearTimeout(at); };
  }, [queueId]);

  return { queueDataLoaded, analyticsLoaded };
}

/* ── Main Component ── */

export function AgentQueueDetails() {
  const { queueId } = useParams();
  const navigate = useNavigate();
  const { liveQueues, liveCallHistories, toggleAgentOptIn, pendingAgentToggles, setFocusedQueueId } = useSimulator();

  // Register this queue as "focused" for boosted simulation while in detail view
  useEffect(() => {
    if (queueId) setFocusedQueueId(queueId);
    return () => setFocusedQueueId(null);
  }, [queueId, setFocusedQueueId]);

  const queue = liveQueues.find((q) => q.id === queueId);
  // Default to "history" for agent role
  const [activeTab, setActiveTab] = useState<"people" | "history">("history");
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const { queueDataLoaded, analyticsLoaded } = useDetailsLoading(queueId);

  // Bottom sheet state
  const [sheetPerson, setSheetPerson] = useState<Person | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  // Call history action sheet state
  const [callSheetRecord, setCallSheetRecord] = useState<CallRecord | null>(null);
  const [callSheetOpen, setCallSheetOpen] = useState(false);

  // Calling screen state
  const [callingTarget, setCallingTarget] = useState<{ name: string; avatar?: string } | null>(null);

  // Chat screen state
  const [chatTarget, setChatTarget] = useState<{ name: string; avatar?: string; status?: string } | null>(null);

  if (!queue) {
    return (
      <div className="bg-background flex items-center justify-center size-full">
        <span style={{ color: "var(--muted-foreground)" }}>Queue not found</span>
      </div>
    );
  }

  // Derive agent-specific callsPresented/callsAnswered from call history
  const queueHistory = queueId ? (liveCallHistories[queueId] ?? []) : [];
  const agentCallsPresented = queueHistory.filter(
    (c) => c.type === "answered" || c.type === "missed"
  ).length;
  const agentCallsAnswered = queueHistory.filter(
    (c) => c.type === "answered"
  ).length;

  const agentPerson = queue.people.find((p) => p.id === agentUser.id);
  const isAgentOptedIn = agentPerson?.optedIn ?? false;
  const pendingState = queueId ? pendingAgentToggles.get(queueId) : undefined;

  const leads = queue.people.filter((p) => p.role === "lead");
  const optedInAgentsRaw = queue.people.filter((p) => p.role === "agent" && p.optedIn);
  const optedOutAgentsRaw = queue.people.filter((p) => p.role === "agent" && !p.optedIn);

  // Sort: "you" first, then alphabetical
  const sortWithYouFirst = (people: Person[]) => {
    const you = people.filter((p) => p.id === agentUser.id);
    const others = people.filter((p) => p.id !== agentUser.id).sort((a, b) => a.name.localeCompare(b.name));
    return [...you, ...others];
  };

  const optedInAgents = sortWithYouFirst(optedInAgentsRaw);
  const optedOutAgents = sortWithYouFirst(optedOutAgentsRaw);
  const sortedLeads = [...leads].sort((a, b) => a.name.localeCompare(b.name));

  const totalOptedInAgents = optedInAgentsRaw.length;
  const totalLeads = leads.length;

  // Determine opt toggle display state
  let optLabel: string;
  let optToggleVisualOn: boolean;
  let optToggleDisabled: boolean;

  if (pendingState === 'opting-in') {
    optLabel = "Opting in...";
    optToggleVisualOn = true;
    optToggleDisabled = true;
  } else if (pendingState === 'opting-out') {
    optLabel = "Opting out...";
    optToggleVisualOn = false;
    optToggleDisabled = true;
  } else {
    optLabel = `You're opted ${isAgentOptedIn ? "in" : "out"}`;
    optToggleVisualOn = isAgentOptedIn;
    optToggleDisabled = false;
  }

  const toggleSection = (key: string) => {
    setCollapsedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const openSheet = (person: Person) => {
    setSheetPerson(person);
    setSheetOpen(true);
  };

  const handleSheetOptToggle = () => {
    if (sheetPerson && sheetPerson.id === agentUser.id) {
      toggleAgentOptIn(queue.id);
    }
  };

  // Call history: left tap = call
  const handleCallHistoryCallTap = (call: CallRecord) => {
    const person = queue.people.find((p) => p.name === call.callerName);
    setCallingTarget({ name: call.callerName, avatar: person?.avatar });
  };

  // Call history: right tap = open action sheet
  const handleCallHistoryInfoTap = (call: CallRecord) => {
    setCallSheetRecord(call);
    setCallSheetOpen(true);
  };

  const handleCallFromCallSheet = (callerName: string) => {
    const person = queue.people.find((p) => p.name === callerName);
    setCallingTarget({ name: callerName, avatar: person?.avatar });
  };

  const handleChatFromCallSheet = (callerName: string) => {
    const person = queue.people.find((p) => p.name === callerName);
    setChatTarget({ name: callerName, avatar: person?.avatar, status: person?.status });
  };

  const handlePersonCall = (person: Person) => {
    setCallingTarget({ name: person.name, avatar: person.avatar });
  };

  const handlePersonChat = (person: Person) => {
    setChatTarget({ name: person.name, avatar: person.avatar, status: person.status });
  };

  return (
    <div className="bg-background flex flex-col items-start overflow-clip relative size-full">
      <StatusBar />

      {/* Sticky header: nav bar */}
      <div className="bg-background relative shrink-0 w-full z-20">
        <div className="flex flex-col justify-center w-full">
          <div className="flex h-[48px] items-center relative w-full">
            <div className="flex-1 flex flex-col items-center justify-center h-[48px]">
              <span
                className="text-center truncate max-w-[calc(100%-80px)]"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--foreground)",
                  letterSpacing: "-0.24px",
                  lineHeight: "20px",
                }}
              >
                {queue.name}
              </span>
              <span
                className="text-center"
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--muted-foreground)",
                  letterSpacing: "0.06px",
                  lineHeight: "11px",
                }}
              >
                Opted in: {totalOptedInAgents} agents • {totalLeads} lead{totalLeads !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="absolute left-0 flex items-center h-[48px] pl-[16px]">
              <button className="flex items-center gap-[4px] cursor-pointer" onClick={() => navigate("/")}>
                <BackIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 flex flex-col items-start overflow-y-auto w-full">
        {/* Opt in/out toggle for agent */}
        {queueDataLoaded ? (
          <div className="bg-background relative shrink-0 w-full">
            <div className="flex items-center justify-between pl-[20px] pr-[12px] py-[12px]">
              <span
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--font-weight-normal)",
                  color: "var(--card-foreground)",
                  letterSpacing: "-0.41px",
                  lineHeight: "22px",
                }}
              >
                {optLabel}
              </span>
              <Toggle toggled={optToggleVisualOn} onToggle={() => toggleAgentOptIn(queue.id)} disabled={optToggleDisabled} />
            </div>
          </div>
        ) : (
          <SkeletonOptToggle />
        )}

        {/* Agent-specific analytics */}
        {analyticsLoaded ? (
          <div className="bg-background relative shrink-0 w-full px-[16px] py-[12px]">
            <Divider />
            <div className="flex gap-[12px] items-start justify-center py-[16px] w-full">
              <div className="flex-1 flex flex-col items-center gap-[4px]">
                <div className="flex gap-[4px] items-center justify-center">
                  <ClockIcon />
                  <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "var(--card-foreground)", letterSpacing: "-0.24px", lineHeight: "20px" }}>
                    {queue.callsWaiting}
                  </span>
                </div>
                <span className="text-center" style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-normal)", color: "var(--muted-foreground)", letterSpacing: "-0.078px", lineHeight: "18px" }}>
                  Calls waiting
                </span>
              </div>
              <div className="self-stretch w-px relative shrink-0">
                <div className="absolute bg-border left-1/2 -translate-x-1/2 top-0 bottom-0 w-px" />
              </div>
              <div className="flex-1 flex flex-col items-center gap-[4px]">
                <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "var(--card-foreground)", letterSpacing: "-0.24px", lineHeight: "20px" }}>
                  {agentCallsPresented}
                </span>
                <span className="text-center" style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-normal)", color: "var(--muted-foreground)", letterSpacing: "-0.078px", lineHeight: "18px" }}>
                  Calls presented
                </span>
              </div>
              <div className="self-stretch w-px relative shrink-0">
                <div className="absolute bg-border left-1/2 -translate-x-1/2 top-0 bottom-0 w-px" />
              </div>
              <div className="flex-1 flex flex-col items-center gap-[4px]">
                <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--font-weight-medium)", color: "var(--card-foreground)", letterSpacing: "-0.24px", lineHeight: "20px" }}>
                  {agentCallsAnswered}
                </span>
                <span className="text-center" style={{ fontSize: "var(--text-caption)", fontWeight: "var(--font-weight-normal)", color: "var(--muted-foreground)", letterSpacing: "-0.078px", lineHeight: "18px" }}>
                  Calls answered
                </span>
              </div>
            </div>
            <Divider />
          </div>
        ) : (
          <SkeletonAnalytics />
        )}

        {/* Sticky Pill bar / Tabs */}
        <div className="bg-background h-[44px] overflow-clip relative shrink-0 w-full sticky top-0 z-10">
          <div className="absolute left-[16px] top-1/2 -translate-y-1/2 flex gap-[8px] items-center">
            <button
              className="rounded-full shrink-0 cursor-pointer px-[16px] py-[6px] border border-solid transition-colors"
              style={{
                backgroundColor: activeTab === "people" ? "var(--tab-active-bg)" : "var(--background)",
                borderColor: activeTab === "people" ? "transparent" : "var(--border)",
              }}
              onClick={() => setActiveTab("people")}
            >
              <span className="text-center" style={{ fontSize: "var(--text-h4)", fontWeight: "var(--font-weight-medium)", color: activeTab === "people" ? "var(--primary)" : "var(--card-foreground)", letterSpacing: "-0.24px", lineHeight: "20px" }}>
                People
              </span>
            </button>
            <button
              className="rounded-full shrink-0 cursor-pointer px-[16px] py-[6px] border border-solid transition-colors"
              style={{
                backgroundColor: activeTab === "history" ? "var(--tab-active-bg)" : "var(--background)",
                borderColor: activeTab === "history" ? "transparent" : "var(--border)",
              }}
              onClick={() => setActiveTab("history")}
            >
              <span className="text-center" style={{ fontSize: "var(--text-h4)", fontWeight: "var(--font-weight-medium)", color: activeTab === "history" ? "var(--primary)" : "var(--card-foreground)", letterSpacing: "-0.24px", lineHeight: "20px" }}>
                Call history
              </span>
            </button>
          </div>
        </div>

        {activeTab === "people" && (
          <>
            {!queueDataLoaded ? (
              <SkeletonPeopleList />
            ) : (
              <div className="flex flex-col items-start w-full">
                {/* Leads (collapsed by default for agents) */}
                <SectionHeader
                  title={`Leads (${leads.length})`}
                  collapsed={!!collapsedSections["leads"]}
                  onToggle={() => toggleSection("leads")}
                />
                {!collapsedSections["leads"] &&
                  sortedLeads.map((person) => (
                    <PersonRow key={person.id} person={person} onTap={() => openSheet(person)} />
                  ))}

                {/* Opted in */}
                <SectionHeader
                  title={`Opted in (${optedInAgents.length})`}
                  collapsed={!!collapsedSections["optedIn"]}
                  onToggle={() => toggleSection("optedIn")}
                />
                {!collapsedSections["optedIn"] &&
                  optedInAgents.map((person) => (
                    <PersonRow
                      key={person.id}
                      person={person}
                      isYou={person.id === agentUser.id}
                      onTap={() => openSheet(person)}
                    />
                  ))}

                {/* Opted out */}
                <SectionHeader
                  title={`Opted out (${optedOutAgents.length})`}
                  collapsed={!!collapsedSections["optedOut"]}
                  onToggle={() => toggleSection("optedOut")}
                />
                {!collapsedSections["optedOut"] &&
                  optedOutAgents.map((person) => (
                    <PersonRow
                      key={person.id}
                      person={person}
                      isYou={person.id === agentUser.id}
                      onTap={() => openSheet(person)}
                    />
                  ))}
              </div>
            )}
          </>
        )}

        {activeTab === "history" && (
          <CallHistory
            queueId={queueId!}
            onCallTap={handleCallHistoryCallTap}
            onInfoTap={handleCallHistoryInfoTap}
          />
        )}
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-0 left-0 right-0" style={{ backgroundColor: "var(--background)" }}>
        <HomeIndicator />
      </div>

      {/* Person action sheet */}
      <PersonActionSheet
        person={sheetPerson}
        activeRole="agent"
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        onOptToggle={handleSheetOptToggle}
        onCall={handlePersonCall}
        onChat={handlePersonChat}
      />

      {/* Call history action sheet */}
      <CallHistoryActionSheet
        call={callSheetRecord}
        isOpen={callSheetOpen}
        onClose={() => setCallSheetOpen(false)}
        onCall={handleCallFromCallSheet}
        onChat={handleChatFromCallSheet}
      />

      {/* Calling screen overlay */}
      {callingTarget && (
        <CallingScreen
          name={callingTarget.name}
          avatar={callingTarget.avatar}
          onClose={() => setCallingTarget(null)}
        />
      )}

      {/* Chat screen overlay */}
      {chatTarget && (
        <ChatScreen
          name={chatTarget.name}
          avatar={chatTarget.avatar}
          status={chatTarget.status}
          onClose={() => setChatTarget(null)}
          onCall={() => {
            const target = chatTarget;
            setChatTarget(null);
            setTimeout(() => {
              setCallingTarget({ name: target.name, avatar: target.avatar });
            }, 350);
          }}
        />
      )}
    </div>
  );
}