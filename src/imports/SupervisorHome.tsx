import svgPaths from "./svg-an0cakibws";
import imgAvatarImage from "figma:asset/3b8975c3083a4f50cc49f33720b016754cc5164e.png";
import imgAvatarImage1 from "figma:asset/7be3d644fff0583902e166bc79c979aee6a7e4e7.png";
import imgAvatarImage2 from "figma:asset/a535b0ed58fbec26617652150482dad7030e0d38.png";
import imgAvatarImage3 from "figma:asset/3bfd0bfd48c5b9a6638867854fc4e3d578091d4c.png";
import imgAvatarImage4 from "figma:asset/ca7577fa51023e502d1c05765a91c0de6a5bc223.png";
import imgAvatarImage5 from "figma:asset/0e6522f491241717b7d6aa67c6d87165873bd7d6.png";
import imgAvatarImage6 from "figma:asset/e75fb384ba1c3a2f9ef1b9204d340924826ab494.png";
import imgAvatarImage7 from "figma:asset/e2f479325037b66bfc346be87a7cd6cb4a963113.png";
import imgAvatarImage8 from "figma:asset/a7e445faa582ca66a4b536f77b6c0da91f3a3547.png";
import imgAvatarImage9 from "figma:asset/a83805071c484318b671ee08ce1584c3db7f9dd4.png";
import imgAvatarImage10 from "figma:asset/6a251988526d1335404af19e106dfd6cc24f8645.png";
import imgAvatarImage11 from "figma:asset/32d9041c3dcc0769f891dfaaf850120a38b09d45.png";
import imgAvatarImage12 from "figma:asset/4de42098c4506e25d0a24864e3e4c6f848b2281e.png";
import imgAvatarImage13 from "figma:asset/b7fd82f506b2c05ee8426145025902eaf57a6887.png";

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24, Theme=Regular">
        {children}
      </div>
    </div>
  );
}

function Overlap({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]">
      <div className="relative rounded-[12500px] shrink-0 size-[40px]" data-name="Avatar">
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

function MenuItemsHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-center flex flex-wrap gap-[8px_12px] items-center justify-center px-[28px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function ListItemMultipleLines({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center py-[4px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Left({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] pr-[12px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function AvatarImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center pr-[16px] relative shrink-0">
      <div className="relative shrink-0" data-name="Avatar (Teams 2 iOS)">
        <div className="content-stretch flex gap-[10px] items-start relative">{children}</div>
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

function ContentBottomDivider() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0">
      <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
    </div>
  );
}
type Text1Props = {
  text: string;
  text1: string;
};

function Text1({ text, text1 }: Text1Props) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center relative shrink-0 text-[#212121] text-[17px] tracking-[-0.24px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{text}</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{text1}</p>
      </div>
    </div>
  );
}

function IOsChevronRight() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[10.5px] left-[calc(50%+5px)] top-1/2 w-[6px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.5">
          <path d={svgPaths.p2c0a4900} fill="var(--fill-0, #919191)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[12px] relative shrink-0">
      <IOsChevronRight />
    </div>
  );
}
type TextProps = {
  text: string;
  text1: string;
};

function Text({ text, text1 }: TextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col justify-center relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">{text}</p>
      </div>
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{text1}</p>
      </div>
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
      <div className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Content">
        <div className="relative shrink-0" data-name="Section Header (Teams 2 iOS)">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative">
              <div className="absolute bg-white inset-0" data-name="BG" />
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-[393px]" data-name="Content">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">
                        <div className="shrink-0 size-[12px]" data-name="Icon" />
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
                          <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[15px] tracking-[-0.24px] w-full">
                            <p className="leading-[20px] whitespace-pre-wrap">Queues you lead</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex gap-[8px] h-full items-center pb-[8px] pt-[16px] px-[12px] relative shrink-0" data-name="Right">
                    <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[15px] text-right tracking-[-0.08px] whitespace-nowrap">
                      <p className="leading-[20px]">Updated 5 mins ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ListItemMultipleLines>
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
            <Left>
              <AvatarImage>
                <Overlap>
                  <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage2} />
                  </div>
                </Overlap>
              </AvatarImage>
              <Text text="ICU North Wing - hotline" text1="1 opted in" />
            </Left>
            <div className="flex flex-row items-center self-stretch">
              <Right />
            </div>
          </div>
          <ContentBottomDivider />
        </ListItemMultipleLines>
        <ListItemMultipleLines>
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
            <Left>
              <AvatarImage>
                <Overlap>
                  <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage3} />
                  </div>
                </Overlap>
              </AvatarImage>
              <Text text="Primary care - nurse line" text1="3 opted in" />
            </Left>
            <div className="flex flex-row items-center self-stretch">
              <Right />
            </div>
          </div>
          <ContentBottomDivider />
        </ListItemMultipleLines>
        <ListItemMultipleLines>
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
            <Left>
              <AvatarImage>
                <Overlap>
                  <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage4} />
                  </div>
                </Overlap>
              </AvatarImage>
              <Text text="Trauma unit - senior nurse queue" text1="8 opted in" />
            </Left>
            <div className="flex flex-row items-center self-stretch">
              <Right />
            </div>
          </div>
          <ContentBottomDivider />
        </ListItemMultipleLines>
        <ListItemMultipleLines>
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
            <Left>
              <AvatarImage>
                <Overlap>
                  <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage5} />
                  </div>
                </Overlap>
              </AvatarImage>
              <Text text="Emergency department (nurse triaging desk)" text1="11 opted in" />
            </Left>
            <div className="flex flex-row items-center self-stretch">
              <Right />
            </div>
          </div>
          <ContentBottomDivider />
        </ListItemMultipleLines>
        <ListItemMultipleLines>
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
            <Left>
              <AvatarImage>
                <Overlap>
                  <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage6} />
                  </div>
                </Overlap>
              </AvatarImage>
              <Text text="Discharge planning" text1="0 opted in" />
            </Left>
            <div className="flex flex-row items-center self-stretch">
              <div className="content-stretch flex gap-[8px] h-full items-center px-[12px] relative shrink-0" data-name="Right">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="R.Icon 1">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20px] left-[calc(50%+0.5px)] top-[calc(50%+1px)] w-[21px]" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
                      <path d={svgPaths.p30829580} fill="var(--fill-0, #D92C2C)" id="Shape" />
                    </svg>
                  </div>
                </div>
                <IOsChevronRight />
              </div>
            </div>
          </div>
          <ContentBottomDivider />
        </ListItemMultipleLines>
        <ListItemMultipleLines>
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
            <Left>
              <AvatarImage>
                <Overlap>
                  <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage7} />
                  </div>
                </Overlap>
              </AvatarImage>
              <Text text="Surgical ICU post- op coordination" text1="4 opted in" />
            </Left>
            <div className="flex flex-row items-center self-stretch">
              <Right />
            </div>
          </div>
          <ContentBottomDivider />
        </ListItemMultipleLines>
        <ListItemMultipleLines>
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
            <Left>
              <AvatarImage>
                <Overlap>
                  <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage8} />
                  </div>
                </Overlap>
              </AvatarImage>
              <Text text="General medicine - floor 5 station" text1="3 opted in" />
            </Left>
            <div className="flex flex-row items-center self-stretch">
              <Right />
            </div>
          </div>
          <ContentBottomDivider />
        </ListItemMultipleLines>
        <ListItemMultipleLines>
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
            <Left>
              <AvatarImage>
                <Overlap>
                  <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage9} />
                  </div>
                </Overlap>
              </AvatarImage>
              <Text text="Palliative care support line" text1="6 opted in" />
            </Left>
            <div className="flex flex-row items-center self-stretch">
              <Right />
            </div>
          </div>
          <ContentBottomDivider />
        </ListItemMultipleLines>
        <ListItemMultipleLines>
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
            <Left>
              <AvatarImage>
                <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Overlap">
                  <div className="relative shrink-0 size-[40px]" data-name="Avatar">
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage10} />
                    </div>
                  </div>
                </div>
              </AvatarImage>
              <Text1 text="Med Surg - floor 5 line" text1="5 agents • 2 leads" />
            </Left>
            <div className="flex flex-row items-center self-stretch">
              <Right />
            </div>
          </div>
          <ContentBottomDivider />
        </ListItemMultipleLines>
        <ListItemMultipleLines>
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
            <Left>
              <AvatarImage>
                <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Overlap">
                  <div className="relative shrink-0 size-[40px]" data-name="Avatar">
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage11} />
                    </div>
                  </div>
                </div>
              </AvatarImage>
              <Text1 text="NICU - Neonatal nurse station" text1="11 agents • 3 leads" />
            </Left>
            <div className="flex flex-row items-center self-stretch">
              <Right />
            </div>
          </div>
          <ContentBottomDivider />
        </ListItemMultipleLines>
        <ListItemMultipleLines>
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
            <Left>
              <AvatarImage>
                <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Overlap">
                  <div className="relative shrink-0 size-[40px]" data-name="Avatar">
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage12} />
                    </div>
                  </div>
                </div>
              </AvatarImage>
              <Text1 text="ICU North Wing - charge line" text1="7 agents • 2 leads" />
            </Left>
            <div className="flex flex-row items-center self-stretch">
              <Right />
            </div>
          </div>
          <ContentBottomDivider />
        </ListItemMultipleLines>
        <ListItemMultipleLines>
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
            <Left>
              <AvatarImage>
                <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Overlap">
                  <div className="relative shrink-0 size-[40px]" data-name="Avatar">
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage13} />
                    </div>
                  </div>
                </div>
              </AvatarImage>
              <Text1 text="Infectious disease - Isolation ward" text1="6 agents • 2 leads" />
            </Left>
            <div className="flex flex-row items-center self-stretch">
              <Right />
            </div>
          </div>
        </ListItemMultipleLines>
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
    </div>
  );
}