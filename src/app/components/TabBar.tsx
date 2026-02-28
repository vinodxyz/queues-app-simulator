import svgPaths from "../../imports/svg-an0cakibws";

const tabs = [
  { label: "Activity", icon: svgPaths.p1c6ac800, viewBox: "0 0 17.96 19.505", w: 17.96, h: 19.505 },
  { label: "Chat", icon: svgPaths.p3c8e8a00, viewBox: "0 0 20 20.002", w: 20, h: 20.002 },
  { label: "Calls", icon: svgPaths.p39b37080, viewBox: "0 0 15.302 20.096", w: 15.302, h: 20.096 },
  { label: "Queues", icon: svgPaths.p2e5ab840, viewBox: "0 0 16 21.001", w: 16, h: 21.001, active: true },
  { label: "More", icon: svgPaths.p1b4cd780, viewBox: "0 0 15.5 3.5", w: 15.5, h: 3.5 },
];

export function TabBar() {
  return (
    <div className="bg-background relative shrink-0 w-full">
      <div className="flex flex-col items-center w-full">
        {/* Top divider */}
        <div className="h-px relative shrink-0 w-full">
          <div className="absolute bg-border h-[0.5px] left-0 right-0 top-0" />
        </div>
        {/* Tab items */}
        <div className="flex items-start justify-center w-full">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className="flex-1 min-w-0 flex flex-col items-center justify-center gap-[8px] px-[28px] py-[8px] cursor-pointer"
            >
              <div className="flex items-center justify-center shrink-0">
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block"
                    style={{ width: tab.w, height: tab.h }}
                    fill="none"
                    viewBox={tab.viewBox}
                  >
                    <path d={tab.icon} fill={tab.active ? "var(--primary)" : "var(--card-foreground)"} />
                  </svg>
                </div>
              </div>
              <span
                className="shrink-0 text-center"
                style={{
                  fontSize: "10px",
                  fontWeight: "var(--font-weight-medium)",
                  lineHeight: "12px",
                  letterSpacing: "0.12px",
                  color: tab.active ? "var(--primary)" : "var(--card-foreground)",
                }}
              >
                {tab.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
