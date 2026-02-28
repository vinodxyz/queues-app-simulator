import clsx from "clsx";
import svgPaths from "./svg-fzxnj5e9rw";
type SegmentsPillProps = {
  additionalClassNames?: string;
};

function SegmentsPill({ children, additionalClassNames = "" }: React.PropsWithChildren<SegmentsPillProps>) {
  return (
    <div className={clsx("relative rounded-[9999px] shrink-0", additionalClassNames)}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[6px] relative">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Helper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[92px] items-center justify-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[52px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
          <circle cx="26" cy="26" fill="var(--fill-0, #E1E1E1)" id="Ellipse 1" r="26" />
        </svg>
      </div>
      <div className="bg-gradient-to-r from-[rgba(0,0,0,0.1)] h-[10px] rounded-[2px] shrink-0 to-[86%] to-[rgba(0,0,0,0.03)] via-1/2 via-[rgba(0,0,0,0.1)] w-[60px]" data-name="236px" />
    </div>
  );
}

function SkeletonChatLoaderTeams2IOs({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white h-[88px] relative w-[393px]"} data-name="Skeleton/Chat loader (Teams 2 iOS)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[15px] py-[18px] relative size-full">
          <div className="relative shrink-0 size-[48px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <circle cx="24" cy="24" fill="var(--fill-0, #E1E1E1)" id="Ellipse 1" r="24" />
            </svg>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <div className="bg-gradient-to-r from-[rgba(0,0,0,0.1)] h-[17px] rounded-[2px] shrink-0 to-[86%] to-[rgba(0,0,0,0.03)] via-1/2 via-[rgba(0,0,0,0.1)] w-[184px]" data-name="236px" />
              <div className="bg-gradient-to-r from-[rgba(0,0,0,0.1)] h-[12px] rounded-[2px] shrink-0 to-[86%] to-[rgba(0,0,0,0.03)] via-1/2 via-[rgba(0,0,0,0.1)] w-[54px]" data-name="236px" />
            </div>
            <div className="bg-gradient-to-r from-[rgba(0,0,0,0.1)] h-[17px] rounded-[2px] shrink-0 to-[86%] to-[rgba(0,0,0,0.03)] via-1/2 via-[rgba(0,0,0,0.1)] w-[87px]" data-name="236px" />
          </div>
          <div className="absolute bottom-0 h-px left-0 w-[393px]" data-name="Divider bottom">
            <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[80px] right-0" data-name="🎨 Color" />
          </div>
        </div>
      </div>
    </div>
  );
}
type SkeletonChannelTeams2IOsProps = {
  className?: string;
  layout?: "Apps" | "Channel" | "Folder and file" | "Pinned channel" | "Section header" | "Team dropdown";
};

function SkeletonChannelTeams2IOs({ className, layout = "Apps" }: SkeletonChannelTeams2IOsProps) {
  const isApps = layout === "Apps";
  const isPinnedChannel = layout === "Pinned channel";
  const isSectionHeader = layout === "Section header";
  return (
    <div className={className || `bg-white relative w-[393px] ${isSectionHeader ? "h-[48px]" : ["Pinned channel", "Team dropdown", "Channel"].includes(layout) ? "h-[56px]" : isApps ? "h-[51px]" : "h-[62px]"}`}>
      <div className={`absolute bg-gradient-to-r from-[rgba(0,0,0,0.1)] h-[17px] rounded-[2px] to-[86%] to-[rgba(0,0,0,0.03)] via-1/2 via-[rgba(0,0,0,0.1)] ${layout === "Channel" ? "left-[72px] top-[19px] w-[179px]" : layout === "Team dropdown" ? "left-[70px] top-[19px] w-[179px]" : isSectionHeader ? "left-[20px] top-[18px] w-[169px]" : isPinnedChannel ? "left-[65px] top-[10px] w-[169px]" : isApps ? "left-[68px] top-[17px] w-[138px]" : "left-[63px] top-[10px] w-[169px]"}`} data-name="236px" />
      {["Folder and file", "Pinned channel"].includes(layout) && <div className={`absolute bg-gradient-to-r from-[rgba(0,0,0,0.1)] h-[17px] rounded-[2px] to-[86%] to-[rgba(0,0,0,0.03)] top-[29px] via-1/2 via-[rgba(0,0,0,0.1)] w-[138px] ${isPinnedChannel ? "left-[65px]" : "left-[63px]"}`} data-name="236px" />}
      {["Folder and file", "Apps", "Pinned channel", "Team dropdown"].includes(layout) && <div className={`absolute bg-[#e1e1e1] rounded-[2px] ${["Pinned channel", "Team dropdown"].includes(layout) ? "left-[20px] size-[36px] top-[10px]" : isApps ? "border border-[#e1e1e1] border-solid left-[18px] size-[30px] top-[10px]" : "left-[20px] size-[28px] top-[15px]"}`} />}
      {["Folder and file", "Apps"].includes(layout) && (
        <div className="absolute h-0 left-[63px] top-[62px] w-[330px]">
          <div className="absolute inset-[-0.5px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 0.5">
              <line id="Line 4" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="0.5" x2="330" y1="0.25" y2="0.25" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SupervisorQueueDetails() {
  return (
    <div className="overflow-clip relative rounded-[56px] size-full" data-name="Supervisor/Queue details">
      <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start left-0 overflow-x-clip overflow-y-auto top-0 w-[393px]" data-name="Queue details">
        <div className="absolute bg-white bottom-0 h-[34px] left-0 w-[393px]" data-name="Home indicator (iPhone 11 Pro)">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home indicator" />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Status bar (Teams 2 iOS)">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center relative w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[393px]" data-name="Content">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-[54px] items-center justify-center min-h-px min-w-px relative" data-name="Dynamic Island">
                  <div className="bg-black h-[30px] rounded-[100px] shrink-0 w-[120px]" data-name="Dynamic island" />
                </div>
                <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip top-[17.5px] w-[131px]" data-name="Time Style">
                  <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black">9:30</p>
                </div>
                <div className="absolute h-[12px] right-0 top-[21px] w-[131px]" data-name="Right">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 12">
                    <g id="Right">
                      <path d={svgPaths.p36b9280} fill="var(--fill-0, black)" id="Combined Shape" />
                      <path d={svgPaths.p347ae440} fill="var(--fill-0, black)" id="Combined Shape_2" />
                      <g id="Battery Icon">
                        <g id="Combined Shape_3" opacity="0.4">
                          <mask fill="white" id="path-3-inside-1_4_5552">
                            <path d={svgPaths.p3c745200} />
                          </mask>
                          <path d={svgPaths.p3c745200} fill="var(--fill-0, black)" />
                          <path d={svgPaths.p28c2c640} fill="var(--stroke-0, black)" mask="url(#path-3-inside-1_4_5552)" />
                        </g>
                        <rect fill="var(--fill-0, black)" height="8" id="Capacity" rx="1.5" width="20" x="73.5267" y="2" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Navigation bar (Teams 2 iOS)">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col items-start justify-center relative w-full">
              <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Navigation header">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-center min-h-px min-w-px relative" data-name="Center">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title">
                    <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black text-center tracking-[-0.24px] whitespace-nowrap">
                      <p className="leading-[20px]">Dam test</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtext">
                    <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-nowrap">
                      <p className="leading-[11px]">Opted in: 38 agents • 8 leads</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex h-[48px] items-center left-0 pl-[16px] top-0" data-name="Left">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-name="Container">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon (24pt)">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.001px] left-[calc(50%-4.25px)] top-1/2 w-[10.5px]" data-name="Shape">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5003 20.0015">
                          <path d={svgPaths.p11c550f0} fill="var(--fill-0, black)" id="Shape" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SkeletonChannelTeams2IOs className="bg-white h-[48px] overflow-clip relative shrink-0 w-[393px]" layout="Section header" />
        <div className="bg-white h-[92px] overflow-clip relative shrink-0 w-[393px]" data-name="Skeleton/Carousel (Teams 2 iOS)">
          <div className="absolute content-stretch flex items-center left-0 top-0 w-[393px]">
            <Helper />
            <Helper />
            <Helper />
          </div>
        </div>
        <div className="bg-white h-[44px] overflow-clip relative shrink-0 w-[393px]" data-name="Pill bar Segmented control (Teams 2 iOS)">
          <div className="-translate-y-1/2 absolute content-stretch cursor-pointer flex gap-[8px] items-center left-[16px] overflow-clip py-px rounded-[20px] top-1/2" data-name="Segments">
            <SegmentsPill additionalClassNames="bg-[#e8ebfa]">
              <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
                <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5b5fc7] text-[15px] text-center tracking-[-0.24px]">People</p>
              </div>
            </SegmentsPill>
            <SegmentsPill additionalClassNames="bg-white">
              <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
                <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#212121] text-[15px] text-center tracking-[-0.24px]">Call history</p>
              </div>
            </SegmentsPill>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[393px]" data-name="People list">
          <SkeletonChannelTeams2IOs className="bg-white h-[48px] overflow-clip relative shrink-0 w-[393px]" layout="Section header" />
          <SkeletonChatLoaderTeams2IOs className="bg-white h-[84px] relative shrink-0 w-[393px]" />
          <SkeletonChatLoaderTeams2IOs className="bg-white h-[84px] relative shrink-0 w-[393px]" />
          <SkeletonChannelTeams2IOs className="bg-white h-[48px] overflow-clip relative shrink-0 w-[393px]" layout="Section header" />
          <SkeletonChatLoaderTeams2IOs className="bg-white h-[84px] relative shrink-0 w-[393px]" />
          <SkeletonChatLoaderTeams2IOs className="bg-white h-[84px] relative shrink-0 w-[393px]" />
          <SkeletonChannelTeams2IOs className="bg-white h-[48px] overflow-clip relative shrink-0 w-[393px]" layout="Section header" />
          <SkeletonChatLoaderTeams2IOs className="bg-white h-[84px] relative shrink-0 w-[393px]" />
        </div>
      </div>
    </div>
  );
}