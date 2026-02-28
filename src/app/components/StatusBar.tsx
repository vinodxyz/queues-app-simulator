import svgPaths from "../../imports/svg-an0cakibws";

export function StatusBar({ light = false }: { light?: boolean }) {
  const color = light ? "white" : "black";
  const bgClass = light ? "" : "bg-background";
  return (
    <div className={`${bgClass} relative shrink-0 w-full`}>
      <div className="flex items-center justify-between relative w-full">
        <div className="flex flex-1 flex-col h-[54px] items-center justify-center relative">
          <div className="h-[30px] rounded-[100px] shrink-0 w-[120px]" style={{ backgroundColor: light ? "rgba(255,255,255,0.2)" : "black" }} />
        </div>
        <div className="absolute flex items-center justify-center left-0 overflow-clip top-[17.5px] w-[131px]">
          <span
            className="relative shrink-0"
            style={{ fontSize: "16px", fontWeight: "var(--font-weight-semibold)", color }}
          >
            9:30
          </span>
        </div>
        <div className="absolute h-[12px] right-0 top-[21px] w-[131px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 12">
            <path d={svgPaths.p36b9280} fill={color} />
            <path d={svgPaths.p347ae440} fill={color} />
            <g>
              <g opacity="0.4">
                <mask fill="white" id="sb-mask">
                  <path d={svgPaths.p3c745200} />
                </mask>
                <path d={svgPaths.p3c745200} fill={color} />
                <path d={svgPaths.p28c2c640} fill={color} mask="url(#sb-mask)" />
              </g>
              <rect fill={color} height="8" rx="1.5" width="20" x="73.5267" y="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}