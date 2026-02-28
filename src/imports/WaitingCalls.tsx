import svgPaths from "./svg-9pcrcscppr";
type WaitingCallsProps = {
  className?: string;
  state?: "high" | "low";
};

function WaitingCalls({ className, state = "low" }: WaitingCallsProps) {
  const isHigh = state === "high";
  return (
    <div className={className || `relative ${isHigh ? "h-[62px] w-[44px]" : "size-[44px]"}`}>
      <div className={`absolute left-0 rounded-[100px] size-[40px] top-0 ${isHigh ? "bg-[rgba(249,217,217,0.2)] border-2 border-[#fdf3f4] border-solid" : "bg-[#f1f1f1]"}`} data-name="Background" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] left-[20px] not-italic overflow-hidden text-[#212121] text-[17px] text-center text-ellipsis top-[20px] tracking-[-0.41px] w-[30px] whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">3</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center left-[24px] rounded-[9999px] top-[24px]" data-name="Icon">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Shifts Activity">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.02px)] size-[15.973px] top-[calc(50%+0.02px)]" data-name="Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9726 15.9727">
              <path d={svgPaths.p34638700} fill={isHigh ? "var(--fill-0, #242424)" : "var(--fill-0, #919191)"} id="Shape" />
            </svg>
          </div>
        </div>
      </div>
      {isHigh && (
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[#6e6e6e] text-[13px] top-[53px] tracking-[-0.08px] whitespace-nowrap">
          <p className="leading-[18px]">Waiting</p>
        </div>
      )}
    </div>
  );
}

export default function WaitingCalls1() {
  return <WaitingCalls className="relative size-full" />;
}