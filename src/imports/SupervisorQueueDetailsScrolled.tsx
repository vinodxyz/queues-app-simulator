import clsx from "clsx";
import svgPaths from "./svg-qyisuqy7j9";
import imgAvatarImage from "figma:asset/7473949fc86557aacf09d01409146500d87da999.png";
import imgAvatarImage1 from "figma:asset/7be3d644fff0583902e166bc79c979aee6a7e4e7.png";
import imgAvatarImage2 from "figma:asset/dff0aea1e8b056bd75c24e4ddcd36548d0e89b53.png";
import imgAvatarImage3 from "figma:asset/1297bab7b2a32a9fdcfb1e0ee4ae79a18bc67ad0.png";
import imgAvatarImage4 from "figma:asset/72875d60a2776107a098f9b94e5aa917a3721d76.png";
import imgAvatarImage5 from "figma:asset/6f3bf9feff458baafa146a84ec23d782c10493ef.png";
import imgAvatarImage6 from "figma:asset/94ac40d33b37e84f7d82345cfbaa00fd870624df.png";
import imgAvatarImage7 from "figma:asset/657abb494afa86d093a9f2823206fa8839445dcd.png";
import imgAvatarImage8 from "figma:asset/35e2c5cbda7969de67bc64fec9de23d1ba59be4b.png";
import imgAvatarImage9 from "figma:asset/54f65efd1fc46245b60111abbd48dde93e3b1fc1.png";
import imgAvatarImage10 from "figma:asset/52cd1fd0c0bbef9baa50a7365c4ba83e32030536.png";
import imgAvatarImage11 from "figma:asset/7f2d322d22c14c6304df3877c2eb9637c639963a.png";
import imgAvatarImage12 from "figma:asset/25b92f21b592db6382c1df0ee8910929d0c78860.png";
import imgAvatarImage13 from "figma:asset/2f1742e054f04d6d7054a57faea74e4d52520adb.png";
import imgAvatarImage14 from "figma:asset/dfc230cc4d6ef0487f9d1e1cd137e1f700400ac7.png";
import imgAvatarImage15 from "figma:asset/a2152920079dd05cb137640fd9f6a844bbac0202.png";
import imgAvatarImage16 from "figma:asset/330702aaf01e9db99f26d57f3576f37d0e60a4f1.png";
import imgAvatarImage17 from "figma:asset/1201553e00c18ed5af182975698acb7bc69d50b1.png";

function Overlap({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Avatar">
        {children}
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center size-full">
      <div className="content-stretch flex flex-col items-center justify-center relative w-full">{children}</div>
    </div>
  );
}
type PeopleListListItemMultipleLinesProps = {
  additionalClassNames?: string;
};

function PeopleListListItemMultipleLines({ children, additionalClassNames = "" }: React.PropsWithChildren<PeopleListListItemMultipleLinesProps>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Left1({ children }: React.PropsWithChildren<{}>) {
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

function Left({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
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

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="cursor-pointer relative shrink-0 w-full">
      <Wrapper2>{children}</Wrapper2>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute bottom-[1.4px] right-[1.4px] size-[11.2px]">
      <div className="absolute inset-[-11.36%_-13.65%_-13.64%_-11.35%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[1.4px] size-[11.2px] top-[1.4px]">
      <div className="absolute inset-[-17.86%_-17.85%_-17.86%_-17.86%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2 15.2">
          <g id="Icon">
            <path d={svgPaths.p36a1c080} fill="var(--fill-0, #8A8886)" id="Shape" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}

function SharedPresence16BusyLight() {
  return (
    <Wrapper>
      <g id="Shared / Presence / 16 / âªï¸ Busy - Light">
        <circle cx="7" cy="7" fill="var(--fill-0, #C50F1F)" id="Ellipse 1" r="6.3" stroke="var(--stroke-0, white)" strokeWidth="1.4" />
      </g>
    </Wrapper>
  );
}

function SharedPresence16AwayLight() {
  return (
    <Wrapper>
      <g id="Shared / Presence / 16 / âªï¸ Away - Light">
        <path d={svgPaths.p1b798180} fill="var(--fill-0, #FFAA44)" id="Subtract" stroke="var(--stroke-0, white)" strokeWidth="1.4" />
      </g>
    </Wrapper>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[12px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="More Horizontal">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.5px] left-1/2 top-1/2 w-[13.5px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 3.5">
            <path d={svgPaths.pd80200} fill="var(--fill-0, #919191)" id="Shape" />
          </svg>
        </div>
      </div>
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
      <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[#6e6e6e] text-[13px] text-ellipsis tracking-[-0.08px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden">{text1}</p>
      </div>
    </div>
  );
}

function PresenceTeams2IOs() {
  return (
    <div className="absolute bottom-0 right-0">
      <div className="content-stretch flex items-start relative">
        <div className="relative shrink-0 size-[14px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0018 14.0005">
            <g id="Presence">
              <path d={svgPaths.p329da780} fill="var(--fill-0, #6BB700)" id="Status" stroke="var(--stroke-0, white)" strokeWidth="1.4" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
type TitleTextProps = {
  text: string;
};

function TitleText({ text }: TitleTextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['SF_Pro_Text:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[15px] tracking-[-0.24px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <div className="absolute left-0 overflow-clip size-[12px] top-0" data-name="Chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4.5px] left-1/2 top-[calc(50%+0.75px)] w-[8px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.5">
            <path d={svgPaths.p2e2fea80} fill="var(--fill-0, #919191)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function SupervisorQueueDetailsScrolled() {
  return (
    <div className="overflow-clip relative rounded-[56px] size-full" data-name="Supervisor/Queue details/Scrolled">
      <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start left-0 overflow-x-clip overflow-y-auto top-0 w-[393px]" data-name="Queue details">
        <div className="absolute bg-white bottom-[34px] content-stretch cursor-pointer flex gap-[12px] items-start left-0 pt-[12px] px-[16px] w-[393px]" data-name="Actions">
          <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button (Teams 2 iOS)">
            <div aria-hidden="true" className="absolute border border-[#aab1fa] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center relative w-full">
                <div className="content-stretch flex gap-[8px] h-[52px] items-center overflow-clip px-[16px] relative shrink-0" data-name="Content">
                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%+0.5px)] top-1/2 w-[15px]" data-name="Shape">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
                        <path d={svgPaths.p11d3bb70} fill="var(--fill-0, #5B5FC7)" id="Shape" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#5b5fc7] text-[15px] text-center text-ellipsis tracking-[-0.24px] whitespace-nowrap">
                    <p className="leading-[20px] overflow-hidden">Opt agents out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#5b5fc7] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button (Teams 2 iOS)">
            <Wrapper2>
              <div className="content-stretch flex gap-[8px] h-[52px] items-center overflow-clip px-[16px] relative shrink-0" data-name="Content">
                <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d={svgPaths.p142fa6f0} fill="var(--fill-0, white)" id="Shape" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[15px] text-center text-ellipsis text-white tracking-[-0.24px] whitespace-nowrap">
                  <p className="leading-[20px] overflow-hidden">Opt agents in</p>
                </div>
              </div>
            </Wrapper2>
          </div>
        </div>
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
                      <p className="leading-[20px]">Primary care - nurse line</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtext">
                    <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-nowrap">
                      <p className="leading-[11px]">Opted in: 2 agents • 1 lead</p>
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
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[393px]" data-name="People list">
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
          <Wrapper1>
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-[393px]" data-name="Content">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Left>
                  <Icon />
                  <TitleText text="Leads (2)" />
                </Left>
              </div>
            </div>
          </Wrapper1>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Overlap">
                    <div className="relative shrink-0 size-[40px]" data-name="Avatar">
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
                  <PresenceTeams2IOs />
                </AvatarImage>
                <Text text="Lydia Bauer (You)" text1="Opted out" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <Overlap>
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage2} />
                    </div>
                  </Overlap>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <SharedPresence16AwayLight />
                  </div>
                </AvatarImage>
                <Text text="Hillary Reyes" text1="Opted out" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <Wrapper1>
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-[393px]" data-name="Content">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Left>
                  <Icon />
                  <TitleText text="Opted in (2)" />
                </Left>
              </div>
            </div>
          </Wrapper1>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <Overlap>
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage3} />
                    </div>
                  </Overlap>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <SharedPresence16BusyLight />
                  </div>
                </AvatarImage>
                <Text text="Keiko Tanaka" text1="In a call" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Overlap">
                    <div className="relative shrink-0 size-[40px]" data-name="Avatar">
                      <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage4} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <SharedPresence16BusyLight />
                  </div>
                </AvatarImage>
                <Text text="Kristin Patterson" text1="In a call" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <Wrapper1>
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-[393px]" data-name="Content">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Left>
                  <Icon />
                  <TitleText text="Opted out (13)" />
                </Left>
              </div>
            </div>
          </Wrapper1>
          <PeopleListListItemMultipleLines>
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <Overlap>
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage5} />
                    </div>
                  </Overlap>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <SharedPresence16BusyLight />
                  </div>
                </AvatarImage>
                <TextText text="Bruno Zhao" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Overlap">
                    <div className="relative shrink-0 size-[40px]" data-name="Avatar">
                      <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage6} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <SharedPresence16AwayLight />
                  </div>
                </AvatarImage>
                <TextText text="Carlos Slattery" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <Overlap>
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage7} />
                    </div>
                  </Overlap>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <Icon1 />
                  </div>
                </AvatarImage>
                <TextText text="Cassandra Dunn" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <Overlap>
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage8} />
                    </div>
                  </Overlap>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <Icon1 />
                  </div>
                </AvatarImage>
                <TextText text="Chris Naidoo" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <Overlap>
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage9} />
                    </div>
                  </Overlap>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <SharedPresence16BusyLight />
                  </div>
                </AvatarImage>
                <Text text="Danielle Booker" text1="In a call" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Overlap">
                    <div className="relative shrink-0 size-[40px]" data-name="Avatar">
                      <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage10} />
                      </div>
                    </div>
                  </div>
                  <PresenceTeams2IOs />
                </AvatarImage>
                <TextText text="Henry Brill" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Overlap">
                    <div className="relative shrink-0 size-[40px]" data-name="Avatar">
                      <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage11} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <SharedPresence16AwayLight />
                  </div>
                </AvatarImage>
                <TextText text="Isaac Fielder" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Overlap">
                    <div className="relative shrink-0 size-[40px]" data-name="Avatar">
                      <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage12} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <SharedPresence16AwayLight />
                  </div>
                </AvatarImage>
                <TextText text="Kadji Bell" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <Overlap>
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage13} />
                    </div>
                  </Overlap>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <SharedPresence16BusyLight />
                  </div>
                </AvatarImage>
                <Text text="Kayo Miwa" text1="In a call" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Overlap">
                    <div className="relative shrink-0 size-[40px]" data-name="Avatar">
                      <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage14} />
                      </div>
                    </div>
                  </div>
                  <PresenceTeams2IOs />
                </AvatarImage>
                <TextText text="Kian Lamber" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="Overlap">
                    <div className="relative shrink-0 size-[40px]" data-name="Avatar">
                      <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage15} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <SharedPresence16AwayLight />
                  </div>
                </AvatarImage>
                <TextText text="Mauricio August" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <Overlap>
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage16} />
                    </div>
                  </Overlap>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <SharedPresence16BusyLight />
                  </div>
                </AvatarImage>
                <TextText text="Reta Taylor" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
          <PeopleListListItemMultipleLines additionalClassNames="cursor-pointer">
            <div className="absolute bg-white inset-0" data-name="BG" />
            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Content">
              <Left1>
                <AvatarImage>
                  <Overlap>
                    <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage17} />
                    </div>
                  </Overlap>
                  <div className="absolute bottom-0 right-0 size-[14px]" data-name="Presence (Teams 2 iOS)">
                    <Icon1 />
                  </div>
                </AvatarImage>
                <TextText text="Serena Davis" />
              </Left1>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </PeopleListListItemMultipleLines>
        </div>
      </div>
    </div>
  );
}