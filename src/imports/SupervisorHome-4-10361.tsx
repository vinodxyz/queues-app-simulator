import svgPaths from "./svg-le4faumraw";
import imgAvatarImage from "figma:asset/3b8975c3083a4f50cc49f33720b016754cc5164e.png";
import imgAvatarImage1 from "figma:asset/7be3d644fff0583902e166bc79c979aee6a7e4e7.png";

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24, Theme=Regular">
        {children}
      </div>
    </div>
  );
}

function StatusBarTeams2IOsCombinedShape1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[10px] relative shrink-0 w-[14.053px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0532 10.0002">
        {children}
      </svg>
    </div>
  );
}

function StatusBarTeams2IOsCombinedShape({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[10px] relative shrink-0 w-[16.5px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 10">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[16px] items-center px-[15px] py-[18px] relative size-full">{children}</div>
    </div>
  );
}

function MenuItemsHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-center flex flex-wrap gap-[8px_12px] items-center justify-center px-[28px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function StatusBarTeams2IOsBatteryIcon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[12px] relative shrink-0 w-[26.5px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5 12">
        <g id="Battery Icon">{children}</g>
      </svg>
    </div>
  );
}

function SkeletonChatLoaderTeams2IOs() {
  return (
    <div className="bg-white h-[84px] relative shrink-0 w-[393px]">
      <Wrapper>
        <Helper />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative">
          <Helper1 />
          <div className="bg-gradient-to-r from-[rgba(0,0,0,0.1)] h-[17px] opacity-0 rounded-[2px] shrink-0 to-[86%] to-[rgba(0,0,0,0.03)] via-1/2 via-[rgba(0,0,0,0.1)] w-[87px]" data-name="236px" />
        </div>
        <DividerBottom />
      </Wrapper>
    </div>
  );
}

function StatusBarTeams2IOsDynamicIsland() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[54px] items-center justify-center min-h-px min-w-px relative">
      <div className="bg-black h-[30px] rounded-[100px] shrink-0 w-[120px]" data-name="Dynamic island" />
    </div>
  );
}

function DividerBottom() {
  return (
    <div className="absolute bottom-0 h-px left-0 w-[393px]">
      <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[80px] right-0" data-name="🎨 Color" />
    </div>
  );
}

function Helper1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-gradient-to-r from-[rgba(0,0,0,0.1)] h-[17px] rounded-[2px] shrink-0 to-[86%] to-[rgba(0,0,0,0.03)] via-1/2 via-[rgba(0,0,0,0.1)] w-[184px]" data-name="236px" />
      <div className="bg-gradient-to-r from-[rgba(0,0,0,0.1)] h-[12px] rounded-[2px] shrink-0 to-[86%] to-[rgba(0,0,0,0.03)] via-1/2 via-[rgba(0,0,0,0.1)] w-[54px]" data-name="236px" />
    </div>
  );
}

function Helper() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <circle cx="24" cy="24" fill="var(--fill-0, #E1E1E1)" id="Ellipse 1" r="24" />
      </svg>
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
type StatusBarTeams2IOsProps = {
  className?: string;
  device?: "iPhone" | "iPad";
  modal?: boolean;
  statusBar?: boolean;
};

function StatusBarTeams2IOs({ className, device = "iPad", modal = false, statusBar = true }: StatusBarTeams2IOsProps) {
  const isIPadAndNotModal = device === "iPad" && !modal;
  const isIPhoneAndModal = device === "iPhone" && modal;
  const isIPhoneAndNotModal = device === "iPhone" && !modal;
  return (
    <div className={className || `-translate-y-1/2 relative ${isIPhoneAndModal ? "-translate-x-1/2 bg-[#141414]" : isIPhoneAndNotModal ? "bg-white" : "bg-white h-[24px]"}`}>
      <div className={`flex ${isIPhoneAndModal ? "content-stretch flex-col gap-[16px] items-start relative" : "flex-row items-center size-full"}`}>
        {!modal && ["iPad", "iPhone"].includes(device) && (
          <div className={`content-stretch flex items-center justify-between relative ${isIPhoneAndNotModal ? "w-full" : "pl-[16px] pr-[14.5px] size-full"}`}>
            {isIPadAndNotModal && (
              <>
                <div className="content-stretch flex items-center relative shrink-0" data-name="Left">
                  <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black">9:30</p>
                  <div className="h-[20px] shrink-0 w-[8px]" data-name="Spacer" />
                  <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black">Mon May 27</p>
                </div>
                <div className="h-[5px] relative shrink-0 w-[21px]" data-name="Multitask">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 5">
                    <g id="Multitask">
                      <circle cx="2.5" cy="2.5" fill="var(--fill-0, black)" id="Ellipse 5" opacity="0.4" r="2.5" />
                      <circle cx="10.5" cy="2.5" fill="var(--fill-0, black)" id="Ellipse 6" opacity="0.4" r="2.5" />
                      <circle cx="18.5" cy="2.5" fill="var(--fill-0, black)" id="Ellipse 7" opacity="0.4" r="2.5" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
                  <StatusBarTeams2IOsCombinedShape>
                    <path d={svgPaths.p33569b00} fill="var(--fill-0, black)" id="Combined Shape" />
                  </StatusBarTeams2IOsCombinedShape>
                  <StatusBarTeams2IOsCombinedShape1>
                    <path d={svgPaths.p32e23900} fill="var(--fill-0, black)" id="Combined Shape" />
                  </StatusBarTeams2IOsCombinedShape1>
                  <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-black text-right">100%</p>
                  <StatusBarTeams2IOsBatteryIcon>
                    <g id="Combined Shape" opacity="0.4">
                      <mask fill="white" id="path-1-inside-1_4_5620">
                        <path d={svgPaths.p303e8640} />
                      </mask>
                      <path d={svgPaths.p303e8640} fill="var(--fill-0, black)" />
                      <path d={svgPaths.p29c93100} fill="var(--stroke-0, black)" mask="url(#path-1-inside-1_4_5620)" />
                    </g>
                    <rect fill="var(--fill-0, black)" height="8" id="Capacity" rx="1.5" width="20" x="2" y="2" />
                  </StatusBarTeams2IOsBatteryIcon>
                </div>
              </>
            )}
            {isIPhoneAndNotModal && (
              <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Content">
                <StatusBarTeams2IOsDynamicIsland />
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
            )}
          </div>
        )}
        {isIPhoneAndModal && statusBar && (
          <div className="bg-[#141414] content-stretch flex items-center justify-between relative shrink-0 w-[393px]" data-name="Status bar (Teams 2 iOS)">
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="Content">
              <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-[131px]" data-name="Time Style">
                <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white">9:30</p>
              </div>
              <StatusBarTeams2IOsDynamicIsland />
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-h-px min-w-px relative" data-name="Right">
                <StatusBarTeams2IOsCombinedShape>
                  <path d={svgPaths.p33569b00} fill="var(--fill-0, white)" id="Combined Shape" />
                </StatusBarTeams2IOsCombinedShape>
                <StatusBarTeams2IOsCombinedShape1>
                  <path d={svgPaths.p32e23900} fill="var(--fill-0, white)" id="Combined Shape" />
                </StatusBarTeams2IOsCombinedShape1>
                <StatusBarTeams2IOsBatteryIcon>
                  <g id="Combined Shape" opacity="0.4">
                    <mask fill="white" id="path-1-inside-1_4_5637">
                      <path d={svgPaths.p303e8640} />
                    </mask>
                    <path d={svgPaths.p303e8640} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p29c93100} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_4_5637)" />
                  </g>
                  <rect fill="var(--fill-0, white)" height="8" id="Capacity" rx="1.5" width="20" x="2" y="2" />
                </StatusBarTeams2IOsBatteryIcon>
              </div>
            </div>
          </div>
        )}
        {isIPhoneAndModal && (
          <div className="content-stretch flex flex-col items-start px-[16px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-[393px]" data-name="App in Background">
            <div className="bg-[#f1f1f1] h-[10px] rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full" data-name="backgroud" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function SupervisorHome() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[56px] size-full" data-name="Supervisor/Home">
      <StatusBarTeams2IOs className="bg-white relative shrink-0 w-[393px]" device="iPhone" />
      <div className="bg-white relative shrink-0 w-full" data-name="Navigation bar (Teams 2 iOS)">
        <div className="content-stretch flex flex-col items-start relative w-full">
          <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Navigation Header">
            <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[16px] relative size-full">
                  <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0" data-name="Large title">
                    <div className="relative shrink-0" data-name="Avatar (Teams 2 iOS)">
                      <div className="flex flex-row justify-center size-full">
                        <div className="content-stretch flex gap-[10px] items-start justify-center relative">
                          <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="Overlap">
                            <div className="relative shrink-0 size-[32px]" data-name="Avatar">
                              <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10000px]">
                                  <img alt="" className="absolute max-w-none object-cover rounded-[10000px] size-full" src={imgAvatarImage} />
                                  <div className="absolute inset-0 overflow-hidden rounded-[10000px]">
                                    <img alt="" className="absolute h-[102.71%] left-[-2.98%] max-w-none top-[-2.71%] w-[105.96%]" src={imgAvatarImage1} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
                      <div className="flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[26px] text-black text-center tracking-[0.33px] whitespace-nowrap">
                        <p className="leading-[31px]">Queues</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Right">
              <div className="flex flex-row items-center justify-end size-full">
                <div className="content-stretch flex gap-[16px] items-center justify-end pr-[18px] relative size-full">
                  <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="Nav title icons">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon 2">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.5px] left-1/2 top-[calc(50%-0.5px)] w-[12.492px]" data-name="Shape">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4919 17.5">
                          <path d={svgPaths.p15863980} fill="var(--fill-0, black)" id="Shape" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Content">
        <SkeletonChannelTeams2IOs className="bg-white h-[48px] overflow-clip relative shrink-0 w-[393px]" layout="Section header" />
        <SkeletonChatLoaderTeams2IOs />
        <SkeletonChatLoaderTeams2IOs />
        <SkeletonChatLoaderTeams2IOs />
        <SkeletonChatLoaderTeams2IOs />
        <SkeletonChatLoaderTeams2IOs />
        <SkeletonChatLoaderTeams2IOs />
        <SkeletonChatLoaderTeams2IOs />
        <div className="bg-white h-[84px] relative shrink-0 w-[393px]" data-name="Skeleton/Chat loader (Teams 2 iOS)">
          <Wrapper>
            <Helper />
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative">
              <Helper1 />
              <div className="bg-gradient-to-r from-[rgba(0,0,0,0.1)] h-[17px] rounded-[2px] shrink-0 to-[86%] to-[rgba(0,0,0,0.03)] via-1/2 via-[rgba(0,0,0,0.1)] w-[87px]" data-name="236px" />
            </div>
            <DividerBottom />
          </Wrapper>
        </div>
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Tab bar">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center relative w-full">
            <div className="h-px relative shrink-0 w-full" data-name="Dividers / Components">
              <div className="absolute bg-[#e1e1e1] h-[0.5px] left-0 right-0 top-0" data-name="🎨 Color" />
            </div>
            <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Menu items">
              <MenuItemsHelper>
                <Icon>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.505px] left-1/2 top-[calc(50%-0.25px)] w-[17.96px]" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9602 19.5053">
                      <path d={svgPaths.p1c6ac800} fill="var(--fill-0, #212121)" id="Shape" />
                    </svg>
                  </div>
                </Icon>
                <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#212121] text-[10px] text-center tracking-[0.12px]">Activity</p>
              </MenuItemsHelper>
              <MenuItemsHelper>
                <Icon>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.002px] left-1/2 top-1/2 w-[20px]" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.0017">
                      <path d={svgPaths.p3c8e8a00} fill="var(--fill-0, #212121)" id="Shape" />
                    </svg>
                  </div>
                </Icon>
                <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#212121] text-[10px] text-center tracking-[0.12px]">Chat</p>
              </MenuItemsHelper>
              <MenuItemsHelper>
                <Icon>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.096px] left-[calc(50%-0.1px)] top-1/2 w-[15.302px]" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3017 20.0959">
                      <path d={svgPaths.p39b37080} fill="var(--fill-0, #212121)" id="Shape" />
                    </svg>
                  </div>
                </Icon>
                <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#212121] text-[10px] text-center tracking-[0.12px]">Calls</p>
              </MenuItemsHelper>
              <MenuItemsHelper>
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24, Theme=Filled">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[21.001px] left-1/2 top-[calc(50%-0.5px)] w-[16px]" data-name="Shape">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9995 21.0011">
                        <path d={svgPaths.p2e5ab840} fill="var(--fill-0, #5B5FC7)" id="Shape" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#5b5fc7] text-[10px] text-center tracking-[0.12px]">Queues</p>
              </MenuItemsHelper>
              <MenuItemsHelper>
                <Icon>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.5px] left-1/2 top-1/2 w-[15.5px]" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 3.5">
                      <path d={svgPaths.p1b4cd780} fill="var(--fill-0, #212121)" id="Shape" />
                    </svg>
                  </div>
                </Icon>
                <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#212121] text-[10px] text-center tracking-[0.12px]">More</p>
              </MenuItemsHelper>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[21px] relative shrink-0 w-[393px]" data-name="Home indicator (Teams 2 iOS)">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[139px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-[#212121] h-[5px] rounded-[100px] w-[139px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[83px] not-italic overflow-hidden text-[#6e6e6e] text-[15px] text-ellipsis top-[200px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">1 opted in</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[83px] not-italic overflow-hidden text-[#6e6e6e] text-[15px] text-ellipsis top-[284px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">2 opted in</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[83px] not-italic overflow-hidden text-[#6e6e6e] text-[15px] text-ellipsis top-[368px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">8 opted in</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[83px] not-italic overflow-hidden text-[#6e6e6e] text-[15px] text-ellipsis top-[452px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">11 opted in</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[83px] not-italic overflow-hidden text-[#6e6e6e] text-[15px] text-ellipsis top-[536px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">0 opted in</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[83px] not-italic overflow-hidden text-[#6e6e6e] text-[15px] text-ellipsis top-[620px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">4 opted in</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[83px] not-italic overflow-hidden text-[#6e6e6e] text-[15px] text-ellipsis top-[704px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">3 opted in</p>
      </div>
    </div>
  );
}