import clsx from "clsx";
import svgPaths from "./svg-rdilnldwwk";
import imgTheme3D from "figma:asset/59520d231a783bb20cd3d4f98dfaec2de858b210.png";
import imgAvatarImage from "figma:asset/6f3bf9feff458baafa146a84ec23d782c10493ef.png";
import imgAvatarImage1 from "figma:asset/94ac40d33b37e84f7d82345cfbaa00fd870624df.png";
import imgAvatarImage2 from "figma:asset/657abb494afa86d093a9f2823206fa8839445dcd.png";
import imgAvatarImage3 from "figma:asset/35e2c5cbda7969de67bc64fec9de23d1ba59be4b.png";
import imgAvatarImage4 from "figma:asset/54f65efd1fc46245b60111abbd48dde93e3b1fc1.png";
import imgAvatarImage5 from "figma:asset/52cd1fd0c0bbef9baa50a7365c4ba83e32030536.png";
import imgAvatarImage6 from "figma:asset/7f2d322d22c14c6304df3877c2eb9637c639963a.png";
import imgAvatarImage7 from "figma:asset/25b92f21b592db6382c1df0ee8910929d0c78860.png";
import imgAvatarImage8 from "figma:asset/2f1742e054f04d6d7054a57faea74e4d52520adb.png";
import imgAvatarImage9 from "figma:asset/dfc230cc4d6ef0487f9d1e1cd137e1f700400ac7.png";
import imgAvatarImage10 from "figma:asset/a2152920079dd05cb137640fd9f6a844bbac0202.png";
import imgAvatarImage11 from "figma:asset/330702aaf01e9db99f26d57f3576f37d0e60a4f1.png";
import imgAvatarImage12 from "figma:asset/1201553e00c18ed5af182975698acb7bc69d50b1.png";
import imgAvatarImage13 from "figma:asset/7473949fc86557aacf09d01409146500d87da999.png";
import imgAvatarImage14 from "figma:asset/7be3d644fff0583902e166bc79c979aee6a7e4e7.png";
import imgAvatarImage15 from "figma:asset/531d4b8b2c55aa32dc60a102cb10560380db6ed4.png";
import imgAvatarImage16 from "figma:asset/3b8975c3083a4f50cc49f33720b016754cc5164e.png";
import imgAvatarImage17 from "figma:asset/bb9e8833326a229fa17bac8769a51861c4346871.png";
import imgCrossedFingers from "figma:asset/ff01a87522f32069da8fe9e5e6312d31c8f051e0.png";
type Container1Props = {
  text: string;
  additionalClassNames?: string;
};

function Container1({ children, text, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className="content-stretch flex gap-[12px] items-center min-h-[48px] relative shrink-0 w-full">
      <Wrapper1>
        <SharedPresence16AwayLight />
      </Wrapper1>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className={clsx("content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative", additionalClassNames)}>
          <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[15px] tracking-[-0.08px] w-full">
            <p className="leading-[20px] whitespace-pre-wrap">{text}</p>
          </div>
        </div>
      </div>
      <Right1 />
    </div>
  );
}

function Title({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[15px] tracking-[-0.08px] w-full">{children}</div>
    </div>
  );
}

function Shape({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20px] left-1/2 top-1/2 w-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
        {children}
      </svg>
    </div>
  );
}

function Overlap({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[44px]">
      <div className="overflow-clip relative shrink-0 size-[44px]" data-name="Avatar">
        {children}
      </div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon (24pt)">
        {children}
      </div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[258px] relative shrink-0">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] max-w-[258px] not-italic relative shrink-0 text-[17px] text-white tracking-[-0.41px]">{children}</p>
    </div>
  );
}

function ChatBubbleTeams2IOs1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[20px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function ChatBubbleTeams2IOs({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Group46HelperProps = {
  additionalClassNames?: string;
};

function Group46Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Group46HelperProps>) {
  return (
    <div className={clsx("absolute h-0 top-[205px] w-[128px]", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 0.5">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Frame2018777314SectionHeaderTeams2IOs({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="cursor-pointer relative shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative">{children}</div>
      </div>
    </div>
  );
}

function Frame2018777314ContentCardTeams2IOs({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center px-[16px] py-[4px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Left1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[8px] pl-[4px] pt-[16px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type PillProps = {
  additionalClassNames?: string;
  text: string;
};

function Pill({ children, additionalClassNames = "", text }: React.PropsWithChildren<PillProps>) {
  return (
    <div className={clsx("relative rounded-[9999px] shrink-0", additionalClassNames)}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[6px] relative">
          <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0">
            <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#212121] text-[15px] text-center tracking-[-0.24px]">{text}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}
type NavigationBarTeams2IOsProps = {
  additionalClassNames?: string;
};

function NavigationBarTeams2IOs({ children, additionalClassNames = "" }: React.PropsWithChildren<NavigationBarTeams2IOsProps>) {
  return (
    <div className={clsx("absolute bg-white left-0 w-[393px]", additionalClassNames)}>
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center relative w-full">{children}</div>
      </div>
    </div>
  );
}

function ListItemOneLineTeams2IOs({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Content({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Left({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[12px] py-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function AvatarImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center pr-[12px] relative shrink-0">
      <div className="relative shrink-0" data-name="Avatar (Teams 2 iOS)">
        <div className="content-stretch flex gap-[10px] items-start relative">{children}</div>
      </div>
    </div>
  );
}
type RadioTeams2IOsIconProps = {
  additionalClassNames?: string;
};

function RadioTeams2IOsIcon({ children, additionalClassNames = "" }: React.PropsWithChildren<RadioTeams2IOsIconProps>) {
  return (
    <div className={clsx("overflow-clip size-[12px]", additionalClassNames)}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[7px] left-[calc(50%+0.25px)] top-1/2 w-[8.5px]" data-name="🎨 Color">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.50001 7.00002">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute bottom-[1.6px] right-[1.6px] size-[12.8px]">
      <div className="absolute inset-[-11.36%_-13.66%_-13.64%_-11.34%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.5px] left-1/2 top-1/2 w-[15.5px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 3.5">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="content-stretch flex gap-[10px] items-start relative">
        <div className="content-stretch flex items-start relative shrink-0 size-[44px]">
          <div className="relative shrink-0 size-[44px]" data-name="Avatar">
            <div className="absolute inset-0 rounded-[12500px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage16} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
          {children}
        </div>
      </div>
    </div>
  );
}

function TabBar({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
      <div className="relative shrink-0" data-name="Tab bar icon">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center relative">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[24px] rounded-[9999px] top-[24px]">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Shifts Activity">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.02px)] size-[15.973px] top-[calc(50%+0.02px)]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9726 15.9727">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}
type Group33HelperProps = {
  additionalClassNames?: string;
};

function Group33Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Group33HelperProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties} className={clsx("absolute flex h-[44px] items-center justify-center top-[134px] w-0", additionalClassNames)}>
      <div className="flex-none rotate-90">
        <div className="h-0 relative w-[44px]">
          <div className="absolute inset-[-0.5px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 0.5">
              {children}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type CallChevronProps = {
  additionalClassNames?: string;
};

function CallChevron({ additionalClassNames = "" }: CallChevronProps) {
  return (
    <div className={clsx("absolute left-[361px] overflow-clip size-[16px]", additionalClassNames)}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[10px] left-[calc(50%+0.25px)] top-1/2 w-[5.5px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 10">
          <path d={svgPaths.p3a120580} fill="var(--fill-0, #919191)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}
type CallHelperProps = {
  additionalClassNames?: string;
};

function CallHelper({ additionalClassNames = "" }: CallHelperProps) {
  return (
    <div className={clsx("absolute h-0 left-[64px] w-[313px]", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 313 0.5">
          <line id="Line 23" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="0.5" x2="313" y1="0.25" y2="0.25" />
        </svg>
      </div>
    </div>
  );
}
type TextOtherText1Props = {
  text: string;
};

function TextOtherText1({ text }: TextOtherText1Props) {
  return <Wrapper4>{text}</Wrapper4>;
}
type TextOtherTextProps = {
  text: string;
};

function TextOtherText({ text }: TextOtherTextProps) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[258px] relative shrink-0">
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] max-w-[258px] not-italic relative shrink-0 text-[17px] text-black tracking-[-0.41px]">{text}</p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic py-[12px] rounded-[8px] top-[122px] w-[131px] whitespace-nowrap", additionalClassNames)}>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center relative shrink-0 text-[#6e6e6e] text-[13px] tracking-[-0.08px]">
        <p className="leading-[18px]">{text}</p>
      </div>
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center relative shrink-0 text-[#212121] text-[17px] tracking-[-0.24px]">
        <p className="leading-[20px]">{text1}</p>
      </div>
    </div>
  );
}
type CenterTextProps = {
  text: string;
};

function CenterText({ text }: CenterTextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[15px] tracking-[-0.08px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{text}</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.995px] left-1/2 top-1/2 w-[11.996px]" data-name="Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9964 11.9948">
              <path d={svgPaths.p26113800} fill="var(--fill-0, #919191)" id="Shape" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6e6e6e] text-[12px]">
          <p className="leading-[16px] whitespace-pre-wrap">{"In a call"}</p>
        </div>
      </div>
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Wrapper2>
        <path d={svgPaths.p1b4cd780} fill="var(--fill-0, #919191)" id="Shape" />
      </Wrapper2>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <div className="absolute left-0 overflow-clip size-[12px] top-0" data-name="Chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.5">
            <path d={svgPaths.pf297500} fill="var(--fill-0, #212121)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type SlaText1Props = {
  text: string;
  additionalClassNames?: string;
};

function SlaText1({ text, additionalClassNames = "" }: SlaText1Props) {
  return (
    <div className={clsx("absolute left-[16px] size-[44px]", additionalClassNames)}>
      <div className="absolute bg-[rgba(249,217,217,0.2)] border-2 border-[#f2dede] border-solid left-0 rounded-[100px] size-[40px] top-0" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] left-[20px] not-italic overflow-hidden text-[#212121] text-[17px] text-center text-ellipsis top-[20px] tracking-[-0.41px] w-[30px] whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">{text}</p>
      </div>
      <Wrapper>
        <path d={svgPaths.p34638700} fill="var(--fill-0, #CC4A31)" id="Shape" />
      </Wrapper>
    </div>
  );
}
type SlaTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SlaText({ text, additionalClassNames = "" }: SlaTextProps) {
  return (
    <div className={clsx("absolute size-[44px]", additionalClassNames)}>
      <div className="absolute bg-[#f1f1f1] left-0 rounded-[100px] size-[40px] top-0" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] left-[20px] not-italic overflow-hidden text-[#212121] text-[17px] text-center text-ellipsis top-[20px] tracking-[-0.41px] w-[30px] whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">{text}</p>
      </div>
      <Wrapper>
        <path d={svgPaths.p34638700} fill="var(--fill-0, #919191)" id="Shape" />
      </Wrapper>
    </div>
  );
}
type ContentTextProps = {
  text: string;
};

function ContentText({ text }: ContentTextProps) {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center overflow-clip px-[10px] relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#5b5fc7] text-[15px] text-center text-ellipsis tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{text}</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[10px] left-[calc(50%+0.12px)] top-1/2 w-[12.25px]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.25 10">
            <path d={svgPaths.pacc5080} fill="var(--fill-0, #5B5FC7)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("absolute content-stretch flex items-center left-[76px]", additionalClassNames)}>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6e6e6e] text-[15px] tracking-[-0.08px]">{text}</p>
    </div>
  );
}

function NavTitleIcons() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon 1">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15.5px] top-1/2" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
            <path d={svgPaths.p7a03a80} fill="var(--fill-0, black)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AgentListBottomDivider() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0">
      <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
    </div>
  );
}

function Presence() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-[-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2 17.2">
          <g id="Presence">
            <path d={svgPaths.p20528380} fill="var(--fill-0, #6BB700)" id="Status" stroke="var(--stroke-0, white)" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[1.6px] size-[12.8px] top-[1.6px]">
      <div className="absolute inset-[-15.63%_-15.63%_-15.62%_-15.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8 16.8">
          <g id="Icon">
            <path d={svgPaths.p201a0200} fill="var(--fill-0, #8A8886)" id="Shape" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SharedPresence16AwayLight() {
  return (
    <Wrapper3>
      <g id="Shared / Presence / 16 / âªï¸ Away - Light">
        <path d={svgPaths.p64afe00} fill="var(--fill-0, #FFAA44)" id="Subtract" stroke="var(--stroke-0, white)" strokeWidth="1.6" />
      </g>
    </Wrapper3>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0">
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

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative", additionalClassNames)}>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[15px] tracking-[-0.08px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}

function SharedPresence16BusyLight() {
  return (
    <Wrapper3>
      <g id="Shared / Presence / 16 / âªï¸ Busy - Light">
        <circle cx="8" cy="8" fill="var(--fill-0, #C50F1F)" id="Ellipse 1" r="7.2" stroke="var(--stroke-0, white)" strokeWidth="1.6" />
      </g>
    </Wrapper3>
  );
}

function Radio() {
  return (
    <div className="content-stretch flex items-center pr-[20px] relative shrink-0">
      <RadioTeams2IOs checked={false} className="block cursor-pointer relative rounded-[100px] shrink-0 size-[24px]" />
    </div>
  );
}

function Container() {
  return (
    <Wrapper5>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.001px] left-[calc(50%-4.25px)] top-1/2 w-[10.5px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5003 20.0015">
          <path d={svgPaths.p11c550f0} fill="var(--fill-0, black)" id="Shape" />
        </svg>
      </div>
    </Wrapper5>
  );
}
type ToggleTeams2IOsHandleProps = {
  additionalClassNames?: string;
};

function ToggleTeams2IOsHandle({ additionalClassNames = "" }: ToggleTeams2IOsHandleProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-12.5%_-23.61%_-34.72%_-23.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5 26.5">
          <g filter="url(#filter0_dd_9_17064)" id="Handle">
            <path clipRule="evenodd" d={svgPaths.p2f89a2f0} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2f89a2f0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26.5" id="filter0_dd_9_17064" width="26.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_9_17064" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
              <feBlend in2="effect1_dropShadow_9_17064" mode="normal" result="effect2_dropShadow_9_17064" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_9_17064" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
type RadioTeams2IOsProps = {
  className?: string;
  checked?: boolean;
  state?: "Rest" | "Disable";
};

function RadioTeams2IOs({ className, checked = true, state = "Rest" }: RadioTeams2IOsProps) {
  if (state === "Rest" && !checked) {
    return (
      <button className={className || "block cursor-pointer relative rounded-[100px] size-[24px]"} data-name="State=Rest, Checked=False">
        <div aria-hidden="true" className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="absolute inset-0 rounded-[100px]" data-name="L1">
          <div aria-hidden="true" className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[100px]" />
        </div>
      </button>
    );
  }
  if (state === "Disable" && checked) {
    return (
      <div className={className || "relative size-[24px]"} data-name="State=Disable, Checked=True">
        <div className="absolute bg-[#dce0fa] content-stretch flex inset-0 items-center justify-center p-[6px] rounded-[100px]" data-name="L1">
          <RadioTeams2IOsIcon additionalClassNames="relative shrink-0">
            <path d={svgPaths.p2ccd9380} fill="var(--fill-0, #212121)" id="ð¨ Color" />
          </RadioTeams2IOsIcon>
        </div>
      </div>
    );
  }
  if (state === "Disable" && !checked) {
    return (
      <div className={className || "relative size-[24px]"} data-name="State=Disable, Checked=False">
        <div className="absolute inset-0 rounded-[100px]" data-name="L1">
          <div aria-hidden="true" className="absolute border border-[#f1f1f1] border-solid inset-0 pointer-events-none rounded-[100px]" />
        </div>
      </div>
    );
  }
  return (
    <button className={className || "bg-[#5b5fc7] block cursor-pointer relative rounded-[100px] size-[24px]"} data-name="State=Rest, Checked=True">
      <RadioTeams2IOsIcon additionalClassNames="absolute left-[6px] top-[6px]">
        <path d={svgPaths.p2ccd9380} fill="var(--fill-0, white)" id="ð¨ Color" />
      </RadioTeams2IOsIcon>
    </button>
  );
}
type ToggleTeams2IOsProps = {
  className?: string;
  size?: "Default" | "Small";
  state?: "Rest" | "Disable";
  toggled?: boolean;
};

function ToggleTeams2IOs({ className, size = "Default", state = "Rest", toggled = true }: ToggleTeams2IOsProps) {
  if (size === "Small" && state === "Rest" && toggled) {
    return (
      <button className={className || "bg-[#5b5fc7] block cursor-pointer h-[21px] overflow-clip relative rounded-[20px] w-[35px]"} data-name="Size=Small, State=Rest, Toggled=True">
        <ToggleTeams2IOsHandle additionalClassNames="inset-[6.45%_2.86%_7.83%_45.71%]" />
      </button>
    );
  }
  if (size === "Small" && state === "Rest" && !toggled) {
    return (
      <button className={className || "bg-[#85858c] block cursor-pointer h-[21px] overflow-clip relative rounded-[20px] w-[35px]"} data-name="Size=Small, State=Rest, Toggled=False">
        <ToggleTeams2IOsHandle additionalClassNames="inset-[6.45%_45.71%_7.83%_2.86%]" />
      </button>
    );
  }
  if (size === "Small" && state === "Disable" && !toggled) {
    return (
      <div className={className || "bg-[#f1f1f1] h-[21px] opacity-70 overflow-clip relative rounded-[20px] w-[35px]"} data-name="Size=Small, State=Disable, Toggled=False">
        <div className="absolute inset-[6.45%_45.71%_7.83%_2.86%]" data-name="Handle">
          <div className="absolute inset-[-1.39%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 18.5">
              <path clipRule="evenodd" d={svgPaths.p3b552d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Handle" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && state === "Disable" && toggled) {
    return (
      <div className={className || "bg-[#5b5fc7] h-[21px] opacity-70 overflow-clip relative rounded-[20px] w-[35px]"} data-name="Size=Small, State=Disable, Toggled=True">
        <ToggleTeams2IOsHandle additionalClassNames="inset-[6.45%_2.86%_7.83%_45.71%]" />
      </div>
    );
  }
  if (size === "Default" && state === "Rest" && !toggled) {
    return (
      <button className={className || "bg-[#85858c] block cursor-pointer h-[31px] overflow-clip relative rounded-[20px] w-[51px]"} data-name="Size=Default, State=Rest, Toggled=False">
        <div className="-translate-y-1/2 absolute left-[1.5px] size-[28px] top-1/2" data-name="Handle">
          <div className="absolute inset-[-16.07%_-30.36%_-44.64%_-30.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
              <g filter="url(#filter0_dd_9_17054)" id="Handle">
                <circle cx="22.5" cy="18.5" fill="var(--fill-0, white)" r="14" />
                <circle cx="22.5" cy="18.5" r="14.25" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="45" id="filter0_dd_9_17054" width="45" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_9_17054" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                  <feBlend in2="effect1_dropShadow_9_17054" mode="normal" result="effect2_dropShadow_9_17054" />
                  <feBlend in="SourceGraphic" in2="effect2_dropShadow_9_17054" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </button>
    );
  }
  if (size === "Default" && state === "Disable" && toggled) {
    return (
      <div className={className || "h-[31px] opacity-70 relative w-[51px]"} data-name="Size=Default, State=Disable, Toggled=True">
        <div className="absolute bg-[#5b5fc7] content-stretch flex inset-0 items-start pl-[21.5px] pr-[1.5px] py-[1.5px] rounded-[20px]" data-name="L1">
          <div className="relative shrink-0 size-[28px]" data-name="Handle">
            <div className="absolute inset-[-1.79%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
                <circle cx="14.5" cy="14.5" fill="var(--fill-0, white)" id="Handle" r="14.25" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "Default" && state === "Disable" && !toggled) {
    return (
      <div className={className || "h-[31px] opacity-70 relative w-[51px]"} data-name="Size=Default, State=Disable, Toggled=False">
        <div className="absolute bg-[#f1f1f1] content-stretch flex inset-0 items-start pl-[1.5px] pr-[21.5px] py-[1.5px] rounded-[20px]" data-name="L1">
          <div className="relative shrink-0 size-[28px]" data-name="Handle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <circle cx="14" cy="14" fill="var(--fill-0, white)" id="Handle" r="14" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button className={className || "bg-[#5b5fc7] block cursor-pointer h-[31px] overflow-clip relative rounded-[20px] w-[51px]"} data-name="Size=Default, State=Rest, Toggled=True">
      <div className="absolute inset-[6.45%_3.92%_6.45%_43.14%]" data-name="Handle">
        <div className="absolute inset-[-15.74%_-30.56%_-45.37%_-30.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.5 43.5">
            <g filter="url(#filter0_dd_9_17060)" id="Handle">
              <path clipRule="evenodd" d={svgPaths.p1eb35f80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1eb35f80} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="43.5" id="filter0_dd_9_17060" width="43.5" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_9_17060" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                <feBlend in2="effect1_dropShadow_9_17060" mode="normal" result="effect2_dropShadow_9_17060" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_9_17060" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </button>
  );
}
type TextCursorTeams2IOsProps = {
  className?: string;
  state?: "Default" | "Invisible";
};

function TextCursorTeams2IOs({ className, state = "Default" }: TextCursorTeams2IOsProps) {
  const isInvisible = state === "Invisible";
  return (
    <div className={className || `h-[21px] relative w-[2px] ${isInvisible ? "opacity-0" : ""}`}>
      <div className={`absolute inset-0 rounded-[1px] ${isInvisible ? "bg-[#0a84ff]" : "bg-[#5b5fc7]"}`} data-name="Text cursor" />
    </div>
  );
}
type CirclularButtonTeams2IOsProps = {
  className?: string;
  notificationDot?: boolean;
  size?: "Large" | "Small";
  state?: "Rest" | "Pressed" | "Disable";
};

function CirclularButtonTeams2IOs({ className, notificationDot = false, size = "Large", state = "Rest" }: CirclularButtonTeams2IOsProps) {
  const isLargeAndDisable = size === "Large" && state === "Disable";
  const isLargeAndPressed = size === "Large" && state === "Pressed";
  const isSmallAndDisable = size === "Small" && state === "Disable";
  const isSmallAndIsRestOrPressedOrDisable = size === "Small" && ["Rest", "Pressed", "Disable"].includes(state);
  const isSmallAndPressed = size === "Small" && state === "Pressed";
  const isSmallAndRest = size === "Small" && state === "Rest";
  return (
    <div className={className || `relative rounded-[9999px] ${isSmallAndDisable ? "bg-[#f1f1f1] size-[24px]" : isSmallAndPressed ? "bg-[#383966] size-[24px]" : isSmallAndRest ? "bg-[#5b5fc7] cursor-pointer size-[24px]" : isLargeAndDisable ? "bg-[#f1f1f1] size-[52px]" : isLargeAndPressed ? "bg-[#383966] size-[52px]" : "bg-[#5b5fc7] cursor-pointer size-[52px]"}`}>
      {((size === "Large" && state === "Rest") || isLargeAndPressed || isSmallAndRest || isSmallAndPressed || isSmallAndDisable) && (
        <div className={`absolute overflow-clip ${isSmallAndIsRestOrPressedOrDisable ? "-translate-x-1/2 -translate-y-1/2 left-1/2 size-[12px] top-1/2" : "left-[14px] size-[24px] top-[14px]"}`} data-name="Icon">
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isSmallAndIsRestOrPressedOrDisable ? "left-[calc(50%-0.25px)] size-[9.5px] top-[calc(50%-0.25px)]" : "h-[17.959px] left-[calc(50%+1.43px)] top-1/2 w-[16.862px]"}`} data-name="Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isSmallAndIsRestOrPressedOrDisable ? "0 0 9.5 9.5" : "0 0 16.8616 17.9586"}>
              <path d={isSmallAndIsRestOrPressedOrDisable ? svgPaths.p3ed61900 : svgPaths.p188b25c0} fill={isSmallAndRest ? "var(--fill-0, white)" : "var(--fill-0, #242424)"} id="Shape" />
            </svg>
          </div>
        </div>
      )}
      {isSmallAndIsRestOrPressedOrDisable && notificationDot && (
        <div className="absolute bg-[#cc4a31] left-[16px] min-w-[8px] rounded-[9999px] size-[8px] top-px" data-name="Notification Dot (Teams 2 iOS)">
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[10001px]" />
          <div className="flex flex-col items-center min-w-[inherit] size-full">
            <div className="min-w-[inherit] size-full" />
          </div>
        </div>
      )}
      {isLargeAndDisable && (
        <>
          <div className="-translate-y-1/2 absolute left-0 size-[52px] top-1/2" data-name="Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
              <path clipRule="evenodd" d={svgPaths.pd18ca00} fill="var(--fill-0, #F1F1F1)" fillRule="evenodd" id="Shape" />
            </svg>
          </div>
          <div className="absolute left-[14px] overflow-clip size-[24px] top-[14px]" data-name="Icon">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.959px] left-[calc(50%+1.43px)] top-1/2 w-[16.862px]" data-name="Shape">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8616 17.9586">
                <path d={svgPaths.p188b25c0} fill="var(--fill-0, #242424)" id="Shape" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
type RedHeartProps = {
  className?: string;
  theme?: "3D" | "Color" | "Flat" | "High Contrast";
};

function RedHeart({ className, theme = "3D" }: RedHeartProps) {
  const isFlat = theme === "Flat";
  const isHighContrast = theme === "High Contrast";
  return (
    <div className={className || "relative"}>
      {["Flat", "High Contrast"].includes(theme) && (
        <div className="absolute inset-[17.93%_6.38%_5.66%_6.38%]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9148 24.4511">
            <path d={isHighContrast ? svgPaths.p37c8380 : svgPaths.p1f8bae80} fill={isHighContrast ? "var(--fill-0, #212121)" : "var(--fill-0, #F8312F)"} id="Shape" />
          </svg>
        </div>
      )}
      {theme === "3D" && <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTheme3D} />}
      {theme === "Color" && (
        <div className="absolute inset-[17.93%_6.86%_6.58%_6.86%]" data-name="Heart">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.61 24.1551">
            <g id="Heart">
              <path d={svgPaths.pab444b0} fill="var(--fill-0, #FF2C3B)" />
              <path d={svgPaths.pab444b0} fill="url(#paint0_radial_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint1_radial_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint2_radial_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint3_radial_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint4_linear_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint5_radial_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint6_radial_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint7_radial_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint8_radial_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint9_radial_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint10_radial_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint11_linear_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint12_linear_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint13_linear_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint14_radial_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint15_radial_9_56785)" />
              <path d={svgPaths.pab444b0} fill="url(#paint16_radial_9_56785)" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(33.692 13.6874) rotate(166.261) scale(34.7795)" gradientUnits="userSpaceOnUse" id="paint0_radial_9_56785" r="1">
                <stop offset="0.46875" stopColor="#B91D43" stopOpacity="0" />
                <stop offset="0.625" stopColor="#B91D43" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(29.4805 4.73793) rotate(43.4926) scale(28.3006 29.1428)" gradientUnits="userSpaceOnUse" id="paint1_radial_9_56785" r="1">
                <stop offset="0.436191" stopColor="#FF2C64" stopOpacity="0" />
                <stop offset="0.579111" stopColor="#FF2839" />
                <stop offset="0.820977" stopColor="#FF2839" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(25.7954 2.63219) rotate(130.697) scale(15.614 4.83363)" gradientUnits="userSpaceOnUse" id="paint2_radial_9_56785" r="1">
                <stop offset="0.241492" stopColor="#FF6975" />
                <stop offset="1" stopColor="#FF6975" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.94943 2.10575) rotate(74.876) scale(20.177 7.63994)" gradientUnits="userSpaceOnUse" id="paint3_radial_9_56785" r="1">
                <stop stopColor="#FF8E9D" />
                <stop offset="0.829857" stopColor="#FF8191" stopOpacity="0" />
              </radialGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_9_56785" x1="23.1632" x2="11.0552" y1="7.37012" y2="8.42299">
                <stop offset="0.592259" stopColor="#FF2F48" stopOpacity="0" />
                <stop offset="0.728317" stopColor="#FF2F48" />
                <stop offset="0.889416" stopColor="#FF2F48" stopOpacity="0" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(9.47587 20.0046) rotate(114.057) scale(96.8544 76.1535)" gradientUnits="userSpaceOnUse" id="paint5_radial_9_56785" r="1">
                <stop offset="0.213872" stopColor="#FF4750" stopOpacity="0" />
                <stop offset="0.280316" stopColor="#FF4750" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(8.42299 -0.526437) rotate(75.0686) scale(8.1725)" gradientUnits="userSpaceOnUse" id="paint6_radial_9_56785" r="1">
                <stop offset="0.226211" stopColor="#FF4851" />
                <stop offset="1" stopColor="#FF4851" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(6.11426 9.47028) rotate(36.0274) scale(6.80073)" gradientUnits="userSpaceOnUse" id="paint7_radial_9_56785" r="1">
                <stop offset="0.226211" stopColor="#FF4851" />
                <stop offset="1" stopColor="#FF4851" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(11.0552 -0.526438) rotate(93.8141) scale(7.91408)" gradientUnits="userSpaceOnUse" id="paint8_radial_9_56785" r="1">
                <stop offset="0.226211" stopColor="#FF4851" />
                <stop offset="0.631601" stopColor="#FF4851" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(29.4805 4.73793) rotate(45.6161) scale(34.621 35.6513)" gradientUnits="userSpaceOnUse" id="paint9_radial_9_56785" r="1">
                <stop offset="0.605375" stopColor="#D32750" stopOpacity="0" />
                <stop offset="0.760922" stopColor="#D32750" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(24.7425 14.7402) rotate(26.9802) scale(32.4902 20.2563)" gradientUnits="userSpaceOnUse" id="paint10_radial_9_56785" r="1">
                <stop offset="0.734432" stopColor="#C03D60" stopOpacity="0" />
                <stop offset="0.785127" stopColor="#C03D60" />
              </radialGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_9_56785" x1="14.6143" x2="15.1143" y1="24.9703" y2="3.47028">
                <stop stopColor="#FB31AD" />
                <stop offset="0.792966" stopColor="#FB31AD" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_9_56785" x1="6.31725" x2="14.7402" y1="26.3219" y2="15.7931">
                <stop offset="0.389423" stopColor="#CF55BC" />
                <stop offset="0.508449" stopColor="#CF55BC" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_9_56785" x1="21.6143" x2="14.7402" y1="24.9703" y2="15.7931">
                <stop offset="0.389423" stopColor="#CF55BC" />
                <stop offset="0.508449" stopColor="#CF55BC" stopOpacity="0" />
              </linearGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(14.2138 25.269) rotate(-86.8202) scale(9.49048 10.8479)" gradientUnits="userSpaceOnUse" id="paint14_radial_9_56785" r="1">
                <stop offset="0.0975182" stopColor="#CF55BC" />
                <stop offset="0.250164" stopColor="#CF55BC" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(7.61426 22.9703) rotate(127.569) scale(8.20061 24.1714)" gradientUnits="userSpaceOnUse" id="paint15_radial_9_56785" r="1">
                <stop stopColor="#B51D85" />
                <stop offset="0.547667" stopColor="#B51D85" stopOpacity="0" />
              </radialGradient>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.61426 20.4703) rotate(154.654) scale(10.5119 30.9839)" gradientUnits="userSpaceOnUse" id="paint16_radial_9_56785" r="1">
                <stop stopColor="#B51D85" />
                <stop offset="0.547667" stopColor="#B51D85" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      )}
      {isFlat && (
        <>
          <div className="absolute inset-[17.93%_19.82%_5.66%_6.38%]" data-name="Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6153 24.4511">
              <g id="Shape">
                <path d={svgPaths.p3be55680} fill="var(--fill-0, #CA0B4A)" />
                <path d={svgPaths.p292b9e00} fill="var(--fill-0, #CA0B4A)" />
              </g>
            </svg>
          </div>
          <div className="absolute flex inset-[21.99%_11.49%_43.27%_58.22%] items-center justify-center">
            <div className="flex-none h-[9.562px] rotate-30 w-[5.671px]">
              <div className="relative size-full" data-name="Shape">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.67108 9.5625">
                  <ellipse cx="2.83554" cy="4.78125" fill="var(--fill-0, #F37366)" id="Shape" rx="2.83554" ry="4.78125" />
                </svg>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Call() {
  return (
    <div className="bg-white overflow-clip relative rounded-[56px] size-full" data-name="Call">
      <NavigationBarTeams2IOs additionalClassNames="top-[52px]">
        <div className="bg-white content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Navigation Header">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[16px] items-center pl-[16px] relative size-full">
                <Container />
              </div>
            </div>
          </div>
        </div>
      </NavigationBarTeams2IOs>
      <div className="absolute backdrop-blur-[13.59px] bg-white bottom-0 content-stretch flex flex-col items-center left-0 w-[393px]" data-name="Tab bar">
        <div className="h-px relative shrink-0 w-full" data-name="〰️ Divider top">
          <div className="absolute bg-[#e1e1e1] h-[0.5px] left-0 right-0 top-0" data-name="🎨 Color" />
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Tabs">
          <TabBar>
            <div className="content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[4px] relative shrink-0" data-name="Container">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-[29px]" data-name="Icon">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="🔎 Icon">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.505px] left-1/2 top-[calc(50%-0.25px)] w-[17.96px]" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9602 19.5053">
                      <path d={svgPaths.p1c6ac800} fill="var(--fill-0, #212121)" id="Shape" />
                    </svg>
                  </div>
                </div>
                <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#212121] text-[11px] text-center tracking-[0.06px]">Activity</p>
              </div>
            </div>
          </TabBar>
          <TabBar>
            <div className="content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[4px] relative shrink-0" data-name="Container">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-[29px]" data-name="Icon">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="🔎 Icon">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.002px] left-1/2 top-1/2 w-[20px]" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.0017">
                      <path d={svgPaths.p3c8e8a00} fill="var(--fill-0, #212121)" id="Shape" />
                    </svg>
                  </div>
                </div>
                <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#212121] text-[11px] text-center tracking-[0.06px]">Chat</p>
              </div>
            </div>
          </TabBar>
          <TabBar>
            <div className="content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[4px] relative shrink-0" data-name="Container">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-[29px]" data-name="Icon">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="🔎 Icon">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p18a70500} fill="var(--fill-0, #212121)" id="Shape" />
                    </svg>
                  </div>
                </div>
                <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#212121] text-[11px] text-center tracking-[0.06px]">Calendar</p>
              </div>
            </div>
          </TabBar>
          <TabBar>
            <div className="content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[4px] relative shrink-0" data-name="Container">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-[29px]" data-name="Icon">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="🔎 Icon">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.096px] left-[calc(50%-0.1px)] top-1/2 w-[15.302px]" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3017 20.0959">
                      <path d={svgPaths.p39b37080} fill="var(--fill-0, #212121)" id="Shape" />
                    </svg>
                  </div>
                </div>
                <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#212121] text-[11px] text-center tracking-[0.06px]">Calls</p>
              </div>
            </div>
          </TabBar>
          <TabBar>
            <div className="content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[4px] relative shrink-0" data-name="Container">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-[29px]" data-name="Icon">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="🔎 Icon">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[21.001px] left-1/2 top-[calc(50%-0.5px)] w-[16px]" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9995 21.0011">
                      <path d={svgPaths.p2e5ab840} fill="var(--fill-0, #5B5FC7)" id="Shape" />
                    </svg>
                  </div>
                </div>
                <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5b5fc7] text-[11px] text-center tracking-[0.06px]">Queues</p>
              </div>
            </div>
          </TabBar>
          <TabBar>
            <div className="content-stretch flex gap-[10px] items-center justify-center px-[22px] py-[4px] relative shrink-0" data-name="Container">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-[29px]" data-name="Icon">
                <Wrapper2>
                  <path d={svgPaths.p1b4cd780} fill="var(--fill-0, #212121)" id="Shape" />
                </Wrapper2>
                <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#212121] text-[11px] text-center tracking-[0.06px]">More</p>
              </div>
            </div>
          </TabBar>
        </div>
        <div className="h-[33px] relative shrink-0 w-[134px]" data-name="Home indicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home indicator" />
        </div>
      </div>
      <div className="absolute bottom-0 h-[162px] left-0 w-[393px]" data-name="Actions">
        <div className="-translate-x-1/2 absolute bg-white bottom-0 h-[34px] left-1/2 w-[393px]" data-name="Home indicator (iPhone 11 Pro)">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home indicator" />
        </div>
        <div className="absolute bg-white bottom-[34px] content-stretch flex flex-col items-start left-0 pb-[8px] pt-[16px] px-[16px] w-[393px]" data-name="primary action">
          <div className="bg-[#5b5fc7] cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="Button Full-width (Teams 2 iOS)">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center px-[20px] py-[14px] relative w-full">
                <div className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0" data-name="Content">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-name="Shape">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9997 12">
                        <path d={svgPaths.p15eb880} fill="var(--fill-0, white)" id="Shape" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[15px] text-center text-ellipsis text-white tracking-[-0.24px] whitespace-nowrap">
                    <p className="leading-[20px] overflow-hidden">Opt agents in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#f1f1f1] h-[52px] left-0 top-0 w-[393px]" data-name="toggle opt status">
          <div className="absolute bg-[#f1f1f1] bottom-0 h-[52px] left-0 w-[393px]" />
          <ToggleTeams2IOs className="absolute bg-[#85858c] block bottom-[11px] cursor-pointer h-[31px] left-[326px] overflow-clip rounded-[20px] w-[51px]" toggled={false} />
          <div className="absolute bottom-[26px] flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[44px] not-italic text-[#212121] text-[15px] tracking-[-0.08px] translate-y-1/2 whitespace-nowrap">
            <p className="leading-[20px]">You’ve opted out of this queue</p>
          </div>
          <div className="absolute bottom-[16px] left-[16px] overflow-clip size-[20px]" data-name="Call Dismiss">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.021px] left-[calc(50%+0.02px)] top-[calc(50%-0.01px)] w-[15.962px]" data-name="Shape">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9619 16.0207">
                <path d={svgPaths.p581ad00} fill="var(--fill-0, #919191)" id="Shape" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white bottom-[-985px] h-[945px] left-0 overflow-clip rounded-tl-[16px] rounded-tr-[16px] w-[393px]" data-name="Bulk opt in">
        <div className="absolute bg-white h-[20px] left-0 top-0 w-[393px]" data-name="Handle">
          <div className="-translate-x-1/2 absolute bg-[#d1d1d1] h-[4px] left-[calc(50%+0.5px)] rounded-[2px] top-[8px] w-[36px]" data-name="Handle" />
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-0 top-[69px] w-[393px]" data-name="Content">
          <div className="bg-white content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Controls">
            <div className="h-0 relative shrink-0 w-[393px]">
              <div className="absolute inset-[-0.5px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 0.500034">
                  <line id="Line 24" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="0.5" x1="2.18557e-08" x2="393" y1="0.250034" y2="0.25" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between px-[16px] relative shrink-0 w-[393px]">
              <div className="flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black tracking-[-0.41px] whitespace-nowrap">
                <p className="leading-[22px]">0 Selected</p>
              </div>
              <div className="cursor-pointer relative rounded-[8px] shrink-0" data-name="Button (Teams 2 iOS)">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col items-center relative">
                    <div className="content-stretch flex gap-[8px] h-[40px] items-center overflow-clip px-[10px] relative shrink-0" data-name="Content">
                      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%-0.01px)] top-1/2 w-[13.99px]" data-name="Shape">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9897 13.9998">
                            <path d={svgPaths.p10a13680} fill="var(--fill-0, #5B5FC7)" id="Shape" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#5b5fc7] text-[15px] text-center text-ellipsis tracking-[-0.24px] whitespace-nowrap">
                        <p className="leading-[20px] overflow-hidden">Select all</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch cursor-pointer flex flex-col items-end overflow-clip relative rounded-[12px] shrink-0 w-[393px]" data-name="Agent list">
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <Overlap>
                      <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage} />
                      </div>
                    </Overlap>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <SharedPresence16BusyLight />
                    </div>
                  </AvatarImage>
                  <Text text="Bruno Zhao" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
              <AgentListBottomDivider />
            </ListItemOneLineTeams2IOs>
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <div className="content-stretch flex items-start relative shrink-0 size-[44px]" data-name="Overlap">
                      <div className="relative shrink-0 size-[44px]" data-name="Avatar">
                        <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage1} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <SharedPresence16AwayLight />
                    </div>
                  </AvatarImage>
                  <Text text="Carlos Slattery" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
              <AgentListBottomDivider />
            </ListItemOneLineTeams2IOs>
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <Overlap>
                      <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage2} />
                      </div>
                    </Overlap>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <Icon />
                    </div>
                  </AvatarImage>
                  <Text text="Cassandra Dunn" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
              <AgentListBottomDivider />
            </ListItemOneLineTeams2IOs>
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <Overlap>
                      <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage3} />
                      </div>
                    </Overlap>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <Icon />
                    </div>
                  </AvatarImage>
                  <Text text="Chris Naidoo" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
              <AgentListBottomDivider />
            </ListItemOneLineTeams2IOs>
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <Overlap>
                      <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage4} />
                      </div>
                    </Overlap>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <SharedPresence16BusyLight />
                    </div>
                  </AvatarImage>
                  <Text text="Danielle Booker" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
              <AgentListBottomDivider />
            </ListItemOneLineTeams2IOs>
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <div className="content-stretch flex items-start relative shrink-0 size-[44px]" data-name="Overlap">
                      <div className="relative shrink-0 size-[44px]" data-name="Avatar">
                        <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage5} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0" data-name="Presence (Teams 2 iOS)">
                      <div className="content-stretch flex items-start relative">
                        <Presence />
                      </div>
                    </div>
                  </AvatarImage>
                  <Text text="Henry Brill" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
              <AgentListBottomDivider />
            </ListItemOneLineTeams2IOs>
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <div className="content-stretch flex items-start relative shrink-0 size-[44px]" data-name="Overlap">
                      <div className="relative shrink-0 size-[44px]" data-name="Avatar">
                        <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage6} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <SharedPresence16AwayLight />
                    </div>
                  </AvatarImage>
                  <Text text="Isaac Fielder" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
              <AgentListBottomDivider />
            </ListItemOneLineTeams2IOs>
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <div className="content-stretch flex items-start relative shrink-0 size-[44px]" data-name="Overlap">
                      <div className="relative shrink-0 size-[44px]" data-name="Avatar">
                        <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage7} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <SharedPresence16AwayLight />
                    </div>
                  </AvatarImage>
                  <Text text="Kadji Bell" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
              <AgentListBottomDivider />
            </ListItemOneLineTeams2IOs>
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <Overlap>
                      <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage8} />
                      </div>
                    </Overlap>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <SharedPresence16BusyLight />
                    </div>
                  </AvatarImage>
                  <Text text="Kayo Miwa" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
              <AgentListBottomDivider />
            </ListItemOneLineTeams2IOs>
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <div className="content-stretch flex items-start relative shrink-0 size-[44px]" data-name="Overlap">
                      <div className="relative shrink-0 size-[44px]" data-name="Avatar">
                        <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage9} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <SharedPresence16BusyLight />
                    </div>
                  </AvatarImage>
                  <Text text="Kian Lambher" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
              <AgentListBottomDivider />
            </ListItemOneLineTeams2IOs>
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <div className="content-stretch flex items-start relative shrink-0 size-[44px]" data-name="Overlap">
                      <div className="relative shrink-0 size-[44px]" data-name="Avatar">
                        <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage10} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <SharedPresence16AwayLight />
                    </div>
                  </AvatarImage>
                  <Text text="Mauricio August" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
              <AgentListBottomDivider />
            </ListItemOneLineTeams2IOs>
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <Overlap>
                      <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage11} />
                      </div>
                    </Overlap>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <SharedPresence16BusyLight />
                    </div>
                  </AvatarImage>
                  <Text text="Reta Taylor" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
              <AgentListBottomDivider />
            </ListItemOneLineTeams2IOs>
            <ListItemOneLineTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <Content>
                <Left>
                  <Radio />
                  <AvatarImage>
                    <Overlap>
                      <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage12} />
                      </div>
                    </Overlap>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <Icon />
                    </div>
                  </AvatarImage>
                  <Text text="Serena Davis" />
                </Left>
                <div className="flex flex-row items-center self-stretch">
                  <Right />
                </div>
              </Content>
            </ListItemOneLineTeams2IOs>
          </div>
        </div>
        <NavigationBarTeams2IOs additionalClassNames="top-[20px]">
          <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Navigation header">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-[48px] items-center justify-center min-h-px min-w-px relative" data-name="Center">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title">
                <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black text-center tracking-[-0.24px] whitespace-nowrap">
                  <p className="leading-[20px]">Select agents to opt in</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtext">
                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-nowrap">
                  <p className="leading-[11px]">Primary care - nurse line 2</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 content-stretch flex gap-[16px] items-center justify-end pr-[18px] right-0 top-0" data-name="Right">
              <NavTitleIcons />
            </div>
            <div className="absolute content-stretch flex h-[48px] items-center left-0 pl-[16px] top-0" data-name="Left">
              <Wrapper5>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%-0.63px)] top-1/2 w-[8.75px]" data-name="Shape">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 16">
                    <path d={svgPaths.p4dacf00} fill="var(--fill-0, black)" id="Shape" />
                  </svg>
                </div>
              </Wrapper5>
            </div>
          </div>
        </NavigationBarTeams2IOs>
      </div>
      <div className="absolute h-[67px] left-0 opacity-0 top-0 w-[393px]" data-name="09. Modal overlay / A. iPhone 11 Pro">
        <div className="absolute h-[66.819px] left-0 right-0 top-0" data-name="Background">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 66.8194">
            <path clipRule="evenodd" d={svgPaths.p4ed3d20} fill="var(--fill-0, black)" fillRule="evenodd" id="Background" />
          </svg>
        </div>
        <div className="absolute bg-[#acacac] h-[10px] left-[16px] opacity-85 right-[16px] rounded-tl-[10px] rounded-tr-[10px] top-[44px]" data-name="Peeking" />
        <div className="absolute h-[44px] left-0 right-0 top-0" data-name="Status bar">
          <div className="-translate-y-1/2 absolute contents right-[14.34px] top-[calc(50%+0.5px)]">
            <div className="-translate-y-1/2 absolute contents right-[14.34px] top-[calc(50%+0.67px)]" data-name="Battery">
              <div className="-translate-y-1/2 absolute h-[10.333px] right-[17.17px] top-[calc(50%+0.67px)] w-[21px]" data-name="Border">
                <div className="absolute inset-[-4.84%_-2.38%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 11.3333">
                    <path clipRule="evenodd" d={svgPaths.p1e6a4b00} fillRule="evenodd" id="Border" opacity="0.35" stroke="var(--stroke-0, white)" />
                  </svg>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[4px] right-[14.34px] top-[calc(50%+0.67px)] w-[1.328px]" data-name="Cap">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32804 4">
                  <path d={svgPaths.pcde2600} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
                </svg>
              </div>
              <div className="-translate-y-1/2 absolute h-[7.333px] right-[18.67px] top-[calc(50%+0.67px)] w-[18px]" data-name="Capacity">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 7.33333">
                  <path d={svgPaths.p3bb29400} fill="var(--fill-0, white)" id="Capacity" />
                </svg>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute h-[11px] right-[43.67px] top-[calc(50%+0.5px)] w-[15.333px]" data-name="Wifi">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3333 11">
                <path d={svgPaths.p2adcd600} fill="var(--fill-0, white)" id="Wifi" />
              </svg>
            </div>
            <div className="-translate-y-1/2 absolute h-[10.667px] right-[64px] top-[calc(50%+0.67px)] w-[17px]" data-name="Cellular connection">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.6667">
                <path d={svgPaths.p34e082f0} fill="var(--fill-0, white)" id="Cellular connection" />
              </svg>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute contents left-[16px] top-[calc(50%+1px)]" data-name="Time style">
            <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[43px] not-italic text-[15px] text-center text-white top-[calc(50%-8px)] w-[54px] whitespace-pre-wrap">9:41</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#171417] h-[852px] left-0 overflow-clip top-0 w-[393px]" data-name="Ringer">
        <div className="-translate-x-1/2 absolute bottom-[782px] flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] left-[196.5px] not-italic text-[17px] text-center text-white tracking-[-0.408px] translate-y-1/2 whitespace-nowrap">
          <p className="leading-[22px]">Bruno Zhao</p>
        </div>
        <div className="absolute backdrop-blur-[2.5px] bottom-0 h-[110px] left-0 w-[393.001px]" data-name="Call control/vertical">
          <div className="-translate-x-1/2 absolute bottom-0 h-[34px] left-[calc(50%+0.5px)] w-[134px]" data-name="Home indicator">
            <div className="-translate-x-1/2 absolute bg-white bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home indicator" />
          </div>
        </div>
        <div className="absolute content-stretch flex items-center left-[106px] top-[742px]">
          <div className="bg-[#363437] content-stretch flex flex-col items-center px-[20px] py-[14px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 size-[60px]" data-name="01. Primary / 01. Filled / ⚪️ A. Default - Light">
            <div className="content-stretch flex h-[32px] items-center overflow-clip relative shrink-0" data-name="Content">
              <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Call End">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="Mic">
                  <Shape>
                    <path d={svgPaths.p1cdc8800} fill="var(--fill-0, white)" id="Shape" />
                  </Shape>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#363437] content-stretch flex flex-col items-center px-[20px] py-[14px] relative shrink-0 size-[60px]" data-name="01. Primary / 01. Filled / ⚪️ A. Default - Light">
            <div className="content-stretch flex h-[32px] items-center overflow-clip relative shrink-0" data-name="Content">
              <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Call End">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-name="Speaker">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18px] left-1/2 top-1/2 w-[20px]" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.0005">
                      <path d={svgPaths.p8497cc0} fill="var(--fill-0, white)" id="Shape" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#932f2f] content-stretch flex flex-col items-center px-[20px] py-[14px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 size-[60px]" data-name="01. Primary / 01. Filled / ⚪️ A. Default - Light">
            <div className="content-stretch flex h-[32px] items-center overflow-clip relative shrink-0" data-name="Content">
              <div className="relative shrink-0 size-[32px]" data-name="Call End">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0001 32.0001">
                  <g id="Call End">
                    <path d={svgPaths.p2901d600} fill="var(--fill-0, white)" id="Shape" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[325px] flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[196.5px] not-italic text-[#acacac] text-[17px] text-center tracking-[-0.408px] translate-y-1/2 whitespace-nowrap">
          <p className="leading-[22px]">Calling...</p>
        </div>
        <div className="absolute left-[111px] size-[170px] top-[341px]" data-name="ringer bkg">
          <div className="absolute left-[42px] size-[86px] top-[42px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 86">
              <circle cx="43" cy="43" fill="var(--fill-0, #D9D9D9)" id="Ellipse 3" r="43" />
            </svg>
          </div>
          <div className="absolute left-[49px] size-[71px] top-[49px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71 71">
              <circle cx="35.5" cy="35.5" fill="var(--fill-0, white)" id="Ellipse 4" r="35.5" />
            </svg>
          </div>
          <div className="absolute left-[30px] overflow-clip rounded-[10046.165px] size-[110px] top-[30px]" data-name="Avatar">
            <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10000px] size-full" src={imgAvatarImage} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[53px] left-0 top-0 w-[393px]" data-name="StatusBar">
        <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0)] h-[37px] left-1/2 rounded-[100px] top-[12px] w-[125px]" data-name="Dynamic island" />
        <div className="absolute content-stretch flex flex-col h-[53px] items-center justify-center left-0 top-0 w-[134px]" data-name="Left Side">
          <div className="h-[21px] relative rounded-[24px] shrink-0 w-[54px]" data-name="StatusBar-time">
            <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Medium',sans-serif] h-[20px] leading-[20px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.24px] w-[54px] whitespace-pre-wrap">9:41</p>
          </div>
        </div>
        <div className="absolute content-stretch flex h-[53px] items-center justify-center right-0 top-0 w-[134px]" data-name="Right Side">
          <div className="h-[13px] relative shrink-0 w-[78.401px]" data-name="Signal, Wifi, Battery">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.4012 13">
              <g id="Signal, Wifi, Battery">
                <g id="Icon / Mobile Signal">
                  <path d={svgPaths.p1ec31400} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p19f8d480} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p13f4aa00} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p1bfb7500} fill="var(--fill-0, white)" />
                </g>
                <path d={svgPaths.p74e6d40} fill="var(--fill-0, white)" id="Wifi" />
                <g id="StatusBar-battery">
                  <path d={svgPaths.pb6b7100} id="Outline" opacity="0.35" stroke="var(--stroke-0, white)" />
                  <path d={svgPaths.p9c6aca0} fill="var(--fill-0, white)" id="Battery End" opacity="0.4" />
                  <path d={svgPaths.p2cb42c00} fill="var(--fill-0, white)" id="Fill" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[76px] not-italic overflow-hidden text-[17px] text-black text-ellipsis top-[166px] tracking-[-0.24px] w-[280px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">ICU North Wing - hotline</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[76px] not-italic overflow-hidden text-[17px] text-black text-ellipsis top-[242px] tracking-[-0.24px] w-[280px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Primary care - nurse line</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[76px] not-italic overflow-hidden text-[17px] text-black text-ellipsis top-[318px] tracking-[-0.24px] w-[280px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Trauma unit - senior nurse queue</p>
      </div>
      <Text1 text="8 opted in" additionalClassNames="top-[332px]" />
      <p className="absolute font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] left-[76px] not-italic text-[17px] text-black top-[384px] tracking-[-0.24px] w-[280px] whitespace-pre-wrap">Emergency department (nurse triaging desk)</p>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[76px] not-italic overflow-hidden text-[17px] text-black text-ellipsis top-[490px] tracking-[-0.24px] w-[280px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Discharge planning</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[76px] not-italic overflow-hidden text-[17px] text-black text-ellipsis top-[566px] tracking-[-0.24px] w-[280px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Surgical ICU post- op coordination</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[76px] not-italic overflow-hidden text-[17px] text-black text-ellipsis top-[642px] tracking-[-0.24px] w-[280px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">General medicine - floor 5 station</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[76px] not-italic overflow-hidden text-[17px] text-black text-ellipsis top-[718px] tracking-[-0.24px] w-[280px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Palliative care support line</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[76px] not-italic overflow-hidden text-[17px] text-black text-ellipsis top-[794px] tracking-[-0.24px] w-[280px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Med Surg - floor 5 line</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[76px] not-italic overflow-hidden text-[17px] text-black text-ellipsis top-[870px] tracking-[-0.24px] w-[280px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">NICU - Neonatal nurse station</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[76px] not-italic overflow-hidden text-[17px] text-black text-ellipsis top-[946px] tracking-[-0.24px] w-[280px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">ICU North Wing - charge line</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] left-[76px] not-italic overflow-hidden text-[17px] text-black text-ellipsis top-[1022px] tracking-[-0.24px] w-[280px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">Infectious disease - Isolation ward</p>
      </div>
      <Text1 text="1 opted in" additionalClassNames="top-[180px]" />
      <Text1 text="2 opted in" additionalClassNames="top-[256px]" />
      <Text1 text="11 opted in" additionalClassNames="top-[428px]" />
      <div className="absolute content-stretch flex items-center left-[76px] top-[504px]">
        <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#d92c2c] text-[15px] text-right tracking-[-0.08px]">0 opted in</p>
      </div>
      <Text1 text="4 opted in" additionalClassNames="top-[580px]" />
      <div className="absolute content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[4px] items-center left-[76px] not-italic text-[#6e6e6e] top-[808px]">
        <p className="leading-[20px] relative shrink-0 text-[15px] tracking-[-0.08px]">1 agents</p>
        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[11px] tracking-[0.06px] whitespace-nowrap">
          <p className="leading-[11px]">•</p>
        </div>
        <p className="leading-[20px] relative shrink-0 text-[15px] tracking-[-0.08px]">1 lead</p>
      </div>
      <Text1 text="6 opted in" additionalClassNames="top-[732px]" />
      <Text1 text="6 agents" additionalClassNames="top-[884px]" />
      <Text1 text="3 agents" additionalClassNames="top-[960px]" />
      <Text1 text="2 agents" additionalClassNames="top-[1036px]" />
      <Text1 text="3 opted in" additionalClassNames="top-[656px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[17px] text-black top-[128px] tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px]">You’re supervising</p>
      </div>
      <div className="absolute cursor-pointer left-[275px] rounded-[8px] top-[108px] w-[102px]" data-name="Button (Teams 2 iOS)">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center relative w-full">
            <ContentText text="Analytics" />
          </div>
        </div>
      </div>
      <SlaText text="3" additionalClassNames="left-[16px] top-[156px]" />
      <SlaText1 text="18" additionalClassNames="top-[232px]" />
      <SlaText text="8" additionalClassNames="left-[16px] top-[308px]" />
      <SlaText1 text="24" additionalClassNames="top-[384px]" />
      <SlaText text="3" additionalClassNames="left-[16px] top-[480px]" />
      <SlaText text="5" additionalClassNames="left-[16px] top-[556px]" />
      <SlaText1 text="11" additionalClassNames="top-[632px]" />
      <SlaText text="9" additionalClassNames="left-[16px] top-[860px]" />
      <SlaText1 text="10" additionalClassNames="top-[708px]" />
      <SlaText text="3" additionalClassNames="left-[16px] top-[936px]" />
      <SlaText text="3" additionalClassNames="left-[16px] top-[784px]" />
      <SlaText text="1" additionalClassNames="left-[16px] top-[1012px]" />
      <CallHelper additionalClassNames="top-[216px]" />
      <CallHelper additionalClassNames="top-[768px]" />
      <CallHelper additionalClassNames="top-[292px]" />
      <CallHelper additionalClassNames="top-[368px]" />
      <CallHelper additionalClassNames="top-[464px]" />
      <CallHelper additionalClassNames="top-[844px]" />
      <CallHelper additionalClassNames="top-[920px]" />
      <CallHelper additionalClassNames="top-[996px]" />
      <CallHelper additionalClassNames="top-[540px]" />
      <CallHelper additionalClassNames="top-[616px]" />
      <CallHelper additionalClassNames="top-[692px]" />
      <CallChevron additionalClassNames="top-[786px]" />
      <CallChevron additionalClassNames="top-[158px]" />
      <CallChevron additionalClassNames="top-[234px]" />
      <CallChevron additionalClassNames="top-[310px]" />
      <CallChevron additionalClassNames="top-[710px]" />
      <CallChevron additionalClassNames="top-[862px]" />
      <CallChevron additionalClassNames="top-[938px]" />
      <CallChevron additionalClassNames="top-[1014px]" />
      <CallChevron additionalClassNames="top-[386px]" />
      <CallChevron additionalClassNames="top-[482px]" />
      <CallChevron additionalClassNames="top-[558px]" />
      <CallChevron additionalClassNames="top-[634px]" />
      <div className="absolute bg-[#d9d9d9] h-[49px] left-[51px] opacity-0 top-[1216px] w-[223px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] h-[1580px] left-0 top-[53px] w-[393px]" data-name="Bottom sheet">
        <div className="absolute bg-white bottom-0 h-[1580px] left-0 rounded-tl-[16px] rounded-tr-[16px] w-[393px]" data-name="Contents">
          <div className="absolute h-[44px] left-0 top-[234px] w-[393px]" data-name="Segmented control (Teams 2 iOS)">
            <div className="absolute bg-white inset-0 overflow-clip" data-name="Pill bar Segmented control (Teams 2 iOS)">
              <div className="-translate-y-1/2 absolute content-stretch cursor-pointer flex gap-[8px] items-center left-[16px] overflow-clip py-px rounded-[20px] top-1/2" data-name="Segments">
                <Pill additionalClassNames="bg-[#e8ebfa]" text="People" />
                <Pill additionalClassNames="bg-white" text="Call history" />
              </div>
            </div>
          </div>
          <p className="absolute font-['SF_Pro_Display:Semibold',sans-serif] leading-[26px] left-[16px] not-italic text-[22px] text-black top-[48px] tracking-[0.35px] w-[297px] whitespace-pre-wrap">Discharge planning</p>
          <div className="absolute content-stretch flex font-['SF_Pro_Text:Regular',sans-serif] gap-[4px] items-center left-[16px] not-italic top-[82px] tracking-[-0.08px]">
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6e6e6e] text-[13px] whitespace-nowrap">
              <p className="leading-[18px]">Opted in:</p>
            </div>
            <p className="leading-[20px] relative shrink-0 text-[#d92c2c] text-[15px] text-right">0 of 6 agents</p>
          </div>
          <div className="absolute bg-white content-stretch flex flex-col h-[1302px] items-end left-0 overflow-clip top-[278px] w-[393px]">
            <div className="cursor-pointer h-[40px] relative shrink-0" data-name="Section Header (Teams 2 iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col h-full items-center justify-center relative">
                  <div className="absolute bg-white inset-0" data-name="BG" />
                  <div className="content-stretch flex items-center justify-center px-[12px] relative shrink-0 w-[393px]" data-name="Content">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <Left1>
                        <Icon1 />
                        <Title>
                          <p className="whitespace-pre-wrap">
                            <span className="leading-[20px]">Leads (</span>
                            <span className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic">1</span>
                            <span className="leading-[20px]">)</span>
                          </p>
                        </Title>
                      </Left1>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex gap-[8px] h-full items-center pb-[8px] pt-[16px] px-[12px] relative shrink-0" data-name="Right">
                        <div className="content-stretch flex gap-[8px] items-start shrink-0" data-name="Icons (24px)" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Frame2018777314ContentCardTeams2IOs>
              <div className="content-stretch flex gap-[12px] items-center min-h-[48px] relative shrink-0 w-full" data-name="Container">
                <div className="relative shrink-0" data-name="Avatar (Teams 2 iOS)">
                  <div className="content-stretch flex gap-[10px] items-start relative">
                    <div className="content-stretch flex items-start relative shrink-0 size-[44px]" data-name="Overlap">
                      <div className="relative shrink-0 size-[44px]" data-name="Avatar">
                        <div className="absolute inset-0 rounded-[10000px]" data-name="Avatar-image">
                          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10000px]">
                            <img alt="" className="absolute max-w-none object-cover rounded-[10000px] size-full" src={imgAvatarImage13} />
                            <div className="absolute inset-0 overflow-hidden rounded-[10000px]">
                              <img alt="" className="absolute h-[102.71%] left-[-2.98%] max-w-none top-[-2.71%] w-[105.96%]" src={imgAvatarImage14} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0" data-name="Presence (Teams 2 iOS)">
                      <div className="content-stretch flex items-start relative">
                        <Presence />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Center">
                    <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[15px] tracking-[-0.08px] w-full">
                      <p className="leading-[20px] whitespace-pre-wrap">Lydia Bauer (You)</p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Caption">
                      <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6e6e6e] text-[12px]">
                        <p className="leading-[16px] whitespace-pre-wrap">Opted out</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Right1 />
              </div>
            </Frame2018777314ContentCardTeams2IOs>
            <Frame2018777314SectionHeaderTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <div className="content-stretch flex items-center justify-center px-[12px] relative shrink-0 w-[393px]" data-name="Content">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <Left1>
                    <Icon1 />
                    <Title>
                      <p className="leading-[20px] whitespace-pre-wrap">Opted in (0)</p>
                    </Title>
                  </Left1>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex gap-[8px] h-full items-center pb-[8px] pt-[16px] px-[12px] relative shrink-0" data-name="Right">
                    <div className="content-stretch flex gap-[8px] items-start shrink-0" data-name="Icons (24px)" />
                  </div>
                </div>
              </div>
            </Frame2018777314SectionHeaderTeams2IOs>
            <Frame2018777314SectionHeaderTeams2IOs>
              <div className="absolute bg-white inset-0" data-name="BG" />
              <div className="content-stretch flex items-center justify-center px-[12px] relative shrink-0 w-[393px]" data-name="Content">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <Left1>
                    <Icon1 />
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Title">
                      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[0px] tracking-[-0.08px] w-full">
                        <p className="text-[15px] whitespace-pre-wrap">
                          <span className="leading-[20px] tracking-[-0.08px]">Opted out (</span>
                          <span className="leading-[20px]">6</span>
                          <span className="leading-[20px] tracking-[-0.08px]">)</span>
                        </p>
                      </div>
                    </div>
                  </Left1>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex gap-[8px] h-full items-center pb-[8px] pt-[16px] px-[12px] relative shrink-0" data-name="Right">
                    <div className="content-stretch flex gap-[8px] items-start shrink-0" data-name="Icons (24px)" />
                  </div>
                </div>
              </div>
            </Frame2018777314SectionHeaderTeams2IOs>
            <Frame2018777314ContentCardTeams2IOs>
              <div className="content-stretch flex gap-[12px] items-center min-h-[48px] relative shrink-0 w-full" data-name="Container">
                <div className="relative shrink-0" data-name="Avatar (Teams 2 iOS)">
                  <div className="content-stretch flex gap-[10px] items-start relative">
                    <div className="content-stretch flex items-start relative shrink-0 size-[44px]" data-name="Overlap">
                      <div className="relative shrink-0 size-[44px]" data-name="Avatar">
                        <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage15} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 size-[16px]" data-name="Presence (Teams 2 iOS)">
                      <SharedPresence16BusyLight />
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <CenterText text="Cecil Folk" />
                </div>
                <Right1 />
              </div>
            </Frame2018777314ContentCardTeams2IOs>
            <Frame2018777314ContentCardTeams2IOs>
              <Container1 text="Kevin Sturgis" additionalClassNames="gap-[4px] h-full" />
            </Frame2018777314ContentCardTeams2IOs>
            <Frame2018777314ContentCardTeams2IOs>
              <div className="content-stretch flex gap-[12px] items-center min-h-[48px] relative shrink-0 w-full" data-name="Container">
                <Wrapper1>
                  <SharedPresence16BusyLight />
                </Wrapper1>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <CenterText text="Kristin Patterson" />
                </div>
                <Right1 />
              </div>
            </Frame2018777314ContentCardTeams2IOs>
            <Frame2018777314ContentCardTeams2IOs>
              <Container1 text="Mauricio August" additionalClassNames="gap-[4px] h-full" />
            </Frame2018777314ContentCardTeams2IOs>
            <Frame2018777314ContentCardTeams2IOs>
              <div className="content-stretch flex gap-[12px] items-center min-h-[48px] relative shrink-0 w-full" data-name="Container">
                <div className="relative shrink-0" data-name="Avatar (Teams 2 iOS)">
                  <div className="content-stretch flex gap-[10px] items-start relative">
                    <div className="content-stretch flex items-start relative shrink-0 size-[44px]" data-name="Overlap">
                      <div className="relative shrink-0 size-[44px]" data-name="Avatar">
                        <div className="absolute inset-0 rounded-[12500px]" data-name="Avatar-image">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12500px] size-full" src={imgAvatarImage17} />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0" data-name="Presence (Teams 2 iOS)">
                      <div className="content-stretch flex items-start relative">
                        <Presence />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <Text text="Tim Deboer" additionalClassNames="gap-[4px] h-full" />
                </div>
                <Right1 />
              </div>
            </Frame2018777314ContentCardTeams2IOs>
            <Frame2018777314ContentCardTeams2IOs>
              <div className="content-stretch flex gap-[12px] items-center min-h-[48px] relative shrink-0 w-full" data-name="Container">
                <Wrapper1>
                  <Icon />
                </Wrapper1>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <Text text="Will Little" additionalClassNames="gap-[4px] h-full" />
                </div>
                <Right1 />
              </div>
            </Frame2018777314ContentCardTeams2IOs>
          </div>
          <NavigationBarTeams2IOs additionalClassNames="opacity-0 top-[20px]">
            <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Navigation header">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-center min-h-px min-w-px relative" data-name="Center">
                <div className="content-stretch flex gap-[4px] items-center shrink-0" data-name="Title" />
              </div>
              <div className="absolute bottom-0 content-stretch flex gap-[16px] items-center justify-end pr-[18px] right-0 top-0" data-name="Right">
                <NavTitleIcons />
              </div>
              <div className="absolute content-stretch flex h-[48px] items-center left-0 pl-[16px] top-0" data-name="Left">
                <Container />
              </div>
            </div>
          </NavigationBarTeams2IOs>
          <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[331px] not-italic text-[#6e6e6e] text-[13px] top-[101px] tracking-[-0.08px] whitespace-nowrap">
            <p className="leading-[18px]">Waiting</p>
          </div>
          <SlaText text="3" additionalClassNames="left-[332px] top-[48px]" />
          <div className="absolute contents left-0 top-[122px]">
            <Helper text="Service level" text1="24%" additionalClassNames="left-0 pl-[24px] pr-[16px]" />
            <Helper text="Longest wait" text1="3:13" additionalClassNames="left-[131px] px-[16px]" />
            <Helper text="Abandon rate" text1="8%" additionalClassNames="left-[262px] pl-[16px] pr-[24px]" />
            <Group33Helper additionalClassNames="left-[131px]">
              <line id="Line 21" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="0.5" x2="44" y1="0.25" y2="0.25" />
            </Group33Helper>
            <Group33Helper additionalClassNames="left-[262px]">
              <line id="Line 22" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="0.5" x2="44" y1="0.25" y2="0.25" />
            </Group33Helper>
            <div className="absolute h-0 left-[16px] top-[122px] w-[361px]">
              <div className="absolute inset-[-0.5px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 361 0.5">
                  <line id="Line 23" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="0.5" x2="361" y1="0.25" y2="0.25" />
                </svg>
              </div>
            </div>
            <div className="absolute contents left-[16px] top-[192px]">
              <div className="-translate-x-1/2 absolute cursor-pointer h-[26px] left-1/2 rounded-[8px] top-[192px]" data-name="Button (Teams 2 iOS)">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col h-full items-center justify-center relative">
                    <ContentText text="See all" />
                  </div>
                </div>
              </div>
              <Group46Helper additionalClassNames="left-[16px]">
                <line id="Line 24" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="0.5" x2="128" y1="0.25" y2="0.25" />
              </Group46Helper>
              <Group46Helper additionalClassNames="right-[16px]">
                <line id="Line 26" stroke="var(--stroke-0, #E1E1E1)" strokeWidth="0.5" x2="128" y1="0.25" y2="0.25" />
              </Group46Helper>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[751px] left-[410px] top-[99px] w-[393px]" data-name="[TFW] Chat L2 1:1 (iOS)">
        <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-px items-start justify-end pt-[16px] relative size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Conversation">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Self">
                <ChatBubbleTeams2IOs>
                  <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-end justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[258px] relative shrink-0" data-name="Text & Other">
                          <div className="overflow-clip relative shrink-0 size-[60px]" data-name="Crossed fingers">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrossedFingers} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center justify-end pl-[2px] pr-[6px] self-stretch shrink-0" data-name="Seen icon" />
                  </div>
                </ChatBubbleTeams2IOs>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Others">
                <ChatBubbleTeams2IOs1>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#f1f1f1] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[258px] relative shrink-0" data-name="Text & Other">
                          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[0] max-w-[258px] not-italic relative shrink-0 text-[0px] text-black tracking-[-0.41px]">
                            <span className="leading-[22px] text-[17px]">{`Hey `}</span>
                            <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[18px] text-[#cc4a31] text-[13px] tracking-[-0.078px]">Daniela</span>
                            <span className="leading-[22px] text-[17px]">, Krystal is looking for us to share an update with the client on Friday...</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ChatBubbleTeams2IOs1>
                <ChatBubbleTeams2IOs1>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#f1f1f1] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <TextOtherText text="I wasn’t sure if you were feeling ready yet? I know there was a lot of feedback coming out of last week’s review" />
                      </div>
                    </div>
                  </div>
                </ChatBubbleTeams2IOs1>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Self">
                <ChatBubbleTeams2IOs>
                  <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-end justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#5b5fc7] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <TextOtherText1 text="Appreciate the coverage yesterday. ENT queue cleared faster than expected" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center justify-end pl-[2px] pr-[6px] self-stretch shrink-0" data-name="Seen icon" />
                  </div>
                </ChatBubbleTeams2IOs>
                <ChatBubbleTeams2IOs>
                  <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-end justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#5b5fc7] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <TextOtherText1 text="Heads-up: Care queue might need coverage today. Dr. Lin’s clinic is short-staffed" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center justify-end pl-[2px] pr-[6px] self-stretch shrink-0" data-name="Seen icon" />
                  </div>
                </ChatBubbleTeams2IOs>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Others">
                <ChatBubbleTeams2IOs1>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#f1f1f1] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <TextOtherText text="Got it" />
                      </div>
                    </div>
                  </div>
                </ChatBubbleTeams2IOs1>
                <ChatBubbleTeams2IOs1>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#f1f1f1] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <TextOtherText text="I’ll opt in after rounds" />
                      </div>
                    </div>
                  </div>
                </ChatBubbleTeams2IOs1>
                <ChatBubbleTeams2IOs1>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#f1f1f1] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <TextOtherText text="Will ping if I need backup" />
                      </div>
                    </div>
                  </div>
                </ChatBubbleTeams2IOs1>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Self">
                <ChatBubbleTeams2IOs>
                  <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-end justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#5b5fc7] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <Wrapper4>{`Morning. Can you check if the call queue for Nurse line is active? `}</Wrapper4>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center justify-end pl-[2px] pr-[6px] self-stretch shrink-0" data-name="Seen icon" />
                  </div>
                </ChatBubbleTeams2IOs>
                <ChatBubbleTeams2IOs>
                  <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-end justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#5b5fc7] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <TextOtherText1 text="Got a ping from front desk" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center justify-end pl-[2px] pr-[6px] self-stretch shrink-0" data-name="Seen icon" />
                  </div>
                </ChatBubbleTeams2IOs>
                <ChatBubbleTeams2IOs>
                  <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-end justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#5b5fc7] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <TextOtherText1 text="thanks" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center justify-end pl-[2px] pr-[6px] self-stretch shrink-0" data-name="Seen icon" />
                  </div>
                </ChatBubbleTeams2IOs>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Others">
                <ChatBubbleTeams2IOs1>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#f1f1f1] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <TextOtherText text="Hey Lydia, just checked" />
                      </div>
                    </div>
                  </div>
                </ChatBubbleTeams2IOs1>
                <ChatBubbleTeams2IOs1>
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-start justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#f1f1f1] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <TextOtherText text="Opted myself in, should be good now.." />
                      </div>
                      <div className="h-[20px] relative shrink-0" data-name="Reactions (Teams 2 iOS)">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[4px] h-full items-center relative">
                            <div className="bg-white h-[28px] relative rounded-[30px] shrink-0" data-name="Reaction 1">
                              <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[30px]" />
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex h-full items-center justify-center px-[8px] relative">
                                  <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0 w-[24px]" data-name="Reaction">
                                    <RedHeart className="overflow-clip relative shrink-0 size-[16px]" />
                                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Count">
                                      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black">1</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white h-[28px] relative rounded-[30px] shrink-0 w-[40px]" data-name="Add reaction">
                              <div aria-hidden="true" className="absolute border-[#e1e1e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[30px]" />
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center px-[8px] relative size-full">
                                  <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Reaction">
                                    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Emoji Add">
                                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                          <path d={svgPaths.p2df2d280} fill="var(--fill-0, #919191)" id="Shape" />
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
                    </div>
                  </div>
                </ChatBubbleTeams2IOs1>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Self">
                <ChatBubbleTeams2IOs>
                  <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-end justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#5b5fc7] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <TextOtherText1 text="Thanks. Can you keep an eye on it till noon?" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center justify-end pl-[2px] pr-[6px] self-stretch shrink-0" data-name="Seen icon" />
                  </div>
                </ChatBubbleTeams2IOs>
                <ChatBubbleTeams2IOs>
                  <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Container">
                    <div className="content-stretch flex flex-col items-end justify-center max-w-[275px] relative shrink-0" data-name="Bubble">
                      <div className="bg-[#5b5fc7] content-stretch flex items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Content">
                        <TextOtherText1 text="We’ve got consults stacking up" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-center justify-end pl-[2px] pr-[6px] self-stretch shrink-0" data-name="Seen icon" />
                  </div>
                </ChatBubbleTeams2IOs>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-full" data-name="Compose Box (Teams 2 iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center pb-[24px] relative w-full">
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[9px] relative w-full">
                        <div className="content-stretch flex gap-[13px] items-end relative shrink-0 w-full" data-name="Content">
                          <div className="content-stretch flex flex-col items-start pb-[8px] pt-[4px] relative shrink-0" data-name="Left">
                            <CirclularButtonTeams2IOs className="bg-[#5b5fc7] cursor-pointer relative rounded-[9999px] shrink-0 size-[24px]" size="Small" />
                          </div>
                          <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-[12px]" data-name="Compose">
                            <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            <div className="relative shrink-0 w-full" data-name="Message">
                              <div className="flex flex-row items-end justify-end size-full">
                                <div className="content-stretch flex items-end justify-end p-[8px] relative w-full">
                                  <TextCursorTeams2IOs className="h-[24px] relative shrink-0 w-[2px]" />
                                  <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Text:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6e6e6e] text-[15px] tracking-[-0.078px]">
                                    <p className="leading-[20px] whitespace-pre-wrap">Type a message</p>
                                  </div>
                                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Emoji">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20.003px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0031 20.0031">
                                        <path d={svgPaths.p14265380} fill="var(--fill-0, #212121)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="Camera">
                            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Camera / 24 / Regular">
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.497px] left-1/2 top-[calc(50%-0.25px)] w-[20px]" data-name="🎨Color">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.497">
                                  <path d={svgPaths.p376c6780} fill="var(--fill-0, #212121)" id="ð¨Color" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="Mic">
                            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Mic">
                              <Shape>
                                <path d={svgPaths.p21d93000} fill="var(--fill-0, #212121)" id="Shape" />
                              </Shape>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}