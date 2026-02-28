import clsx from "clsx";
import svgPaths from "./svg-e3bsf0a2kp";
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

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center size-full">
      <div className="content-stretch flex flex-col gap-[4px] items-center relative w-full">{children}</div>
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

function PeopleListListItemMultipleLines({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
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
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <Wrapper2>{children}</Wrapper2>
    </div>
  );
}

function DatapointIOs({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <Wrapper3>{children}</Wrapper3>
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
type ToggleTeams2IOsHandleProps = {
  additionalClassNames?: string;
};

function ToggleTeams2IOsHandle({ additionalClassNames = "" }: ToggleTeams2IOsHandleProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-12.5%_-23.61%_-34.72%_-23.61%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5 26.5">
          <g filter="url(#filter0_dd_11_5358)" id="Handle">
            <path clipRule="evenodd" d={svgPaths.p2f89a2f0} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2f89a2f0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26.5" id="filter0_dd_11_5358" width="26.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_11_5358" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
              <feBlend in2="effect1_dropShadow_11_5358" mode="normal" result="effect2_dropShadow_11_5358" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_11_5358" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
type NumberTextProps = {
  text: string;
};

function NumberText({ text }: NumberTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type DividerTeams2AndroidProps = {
  className?: string;
  inset?: "0" | "16" | "56" | "72" | "84";
  orientation?: "Top" | "Bottom" | "Right" | "Left" | "Center" | "Vertical center";
};

function DividerTeams2Android({ className, inset = "0", orientation = "Top" }: DividerTeams2AndroidProps) {
  if (orientation === "Center" && inset === "0") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Center, Inset=0">
        <div className="absolute bg-[#e1e1e1] h-px left-0 right-0 top-0" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Bottom" && inset === "0") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Bottom, Inset=0">
        <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-0 right-0" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Bottom" && inset === "16") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Bottom, Inset=16">
        <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[16px] right-0" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Top" && inset === "16") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Top, Inset=16">
        <div className="absolute bg-[#e1e1e1] h-[0.5px] left-[16px] right-0 top-0" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Bottom" && inset === "56") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Bottom, Inset=56">
        <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Top" && inset === "56") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Top, Inset=56">
        <div className="absolute bg-[#e1e1e1] h-[0.5px] left-[56px] right-0 top-0" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Bottom" && inset === "72") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Bottom, Inset=72">
        <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] right-0 w-[303px]" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Top" && inset === "72") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Top, Inset=72">
        <div className="absolute bg-[#e1e1e1] h-[0.5px] right-0 top-0 w-[303px]" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Bottom" && inset === "84") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Bottom, Inset=84">
        <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] right-0 w-[291px]" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Top" && inset === "84") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Top, Inset=84">
        <div className="absolute bg-[#e1e1e1] h-[0.5px] right-0 top-0 w-[291px]" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Right" && inset === "0") {
    return (
      <div className={className || "h-[103px] relative w-px"} data-name="Orientation=Right, Inset=0">
        <div className="absolute bg-[#e1e1e1] bottom-0 right-0 top-0 w-[0.5px]" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Vertical center" && inset === "0") {
    return (
      <div className={className || "h-[103px] relative w-px"} data-name="Orientation=Vertical center, Inset=0">
        <div className="-translate-x-1/2 absolute bg-[#e1e1e1] bottom-0 left-1/2 top-0 w-px" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Left" && inset === "0") {
    return (
      <div className={className || "h-[103px] relative w-px"} data-name="Orientation=Left, Inset=0">
        <div className="absolute bg-[#e1e1e1] bottom-0 right-[0.5px] top-0 w-[0.5px]" data-name="Color" />
      </div>
    );
  }
  return (
    <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Top, Inset=0">
      <div className="absolute bg-[#e1e1e1] h-[0.5px] left-0 right-0 top-0" data-name="Color" />
    </div>
  );
}
type DividerTeams2IOsProps = {
  className?: string;
  inset?: "0" | "16" | "56" | "72" | "84";
  orientation?: "Top" | "Bottom" | "Right" | "Left" | "Center" | "Vertical center";
};

function DividerTeams2IOs({ className, inset = "0", orientation = "Top" }: DividerTeams2IOsProps) {
  if (orientation === "Center" && inset === "0") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Center, Inset=0">
        <div className="absolute bg-[#e1e1e1] h-px left-0 right-0 top-0" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Bottom" && inset === "0") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Bottom, Inset=0">
        <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-0 right-0" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Bottom" && inset === "16") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Bottom, Inset=16">
        <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[16px] right-0" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Top" && inset === "16") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Top, Inset=16">
        <div className="absolute bg-[#e1e1e1] h-[0.5px] left-[16px] right-0 top-0" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Bottom" && inset === "56") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Bottom, Inset=56">
        <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Top" && inset === "56") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Top, Inset=56">
        <div className="absolute bg-[#e1e1e1] h-[0.5px] left-[56px] right-0 top-0" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Bottom" && inset === "72") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Bottom, Inset=72">
        <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] right-0 w-[303px]" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Top" && inset === "72") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Top, Inset=72">
        <div className="absolute bg-[#e1e1e1] h-[0.5px] right-0 top-0 w-[303px]" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Bottom" && inset === "84") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Bottom, Inset=84">
        <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] right-0 w-[291px]" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Top" && inset === "84") {
    return (
      <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Top, Inset=84">
        <div className="absolute bg-[#e1e1e1] h-[0.5px] right-0 top-0 w-[291px]" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Right" && inset === "0") {
    return (
      <div className={className || "h-[103px] relative w-px"} data-name="Orientation=Right, Inset=0">
        <div className="absolute bg-[#e1e1e1] bottom-0 right-0 top-0 w-[0.5px]" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Vertical center" && inset === "0") {
    return (
      <div className={className || "h-[103px] relative w-px"} data-name="Orientation=Vertical center, Inset=0">
        <div className="-translate-x-1/2 absolute bg-[#e1e1e1] bottom-0 left-1/2 top-0 w-px" data-name="Color" />
      </div>
    );
  }
  if (orientation === "Left" && inset === "0") {
    return (
      <div className={className || "h-[103px] relative w-px"} data-name="Orientation=Left, Inset=0">
        <div className="absolute bg-[#e1e1e1] bottom-0 right-[0.5px] top-0 w-[0.5px]" data-name="Color" />
      </div>
    );
  }
  return (
    <div className={className || "h-px relative w-[375px]"} data-name="Orientation=Top, Inset=0">
      <div className="absolute bg-[#e1e1e1] h-[0.5px] left-0 right-0 top-0" data-name="Color" />
    </div>
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
              <g filter="url(#filter0_dd_11_5354)" id="Handle">
                <circle cx="22.5" cy="18.5" fill="var(--fill-0, white)" r="14" />
                <circle cx="22.5" cy="18.5" r="14.25" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="45" id="filter0_dd_11_5354" width="45" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_11_5354" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                  <feBlend in2="effect1_dropShadow_11_5354" mode="normal" result="effect2_dropShadow_11_5354" />
                  <feBlend in="SourceGraphic" in2="effect2_dropShadow_11_5354" mode="normal" result="shape" />
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
            <g filter="url(#filter0_dd_11_5352)" id="Handle">
              <path clipRule="evenodd" d={svgPaths.p1eb35f80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1eb35f80} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="43.5" id="filter0_dd_11_5352" width="43.5" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_11_5352" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                <feBlend in2="effect1_dropShadow_11_5352" mode="normal" result="effect2_dropShadow_11_5352" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_11_5352" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </button>
  );
}

export default function SupervisorQueueDetails() {
  return (
    <div className="overflow-clip relative rounded-[56px] size-full" data-name="Supervisor/Queue details">
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
        <Wrapper1 additionalClassNames="cursor-pointer">
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                      <TextText text="You’re opted out" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Right">
                    <ToggleTeams2IOs className="bg-[#85858c] block cursor-pointer h-[31px] overflow-clip relative rounded-[20px] shrink-0 w-[51px]" toggled={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper1>
        <div className="bg-white relative shrink-0 w-[393px]" data-name="Analytics (iOS)">
          <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
            <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
              <DividerTeams2Android className="h-px relative shrink-0 w-full" orientation="Bottom" />
            </div>
            <div className="content-stretch flex gap-[12px] items-start justify-center py-[16px] relative shrink-0 w-full" data-name="Content">
              <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Datapoint (iOS)">
                <Wrapper3>
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Value">
                    {true && (
                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.01px)] size-[11.978px] top-[calc(50%+0.01px)]" data-name="Shape">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9776 11.9776">
                            <path d={svgPaths.p35ef8ec0} fill="var(--fill-0, #212121)" id="Shape" />
                          </svg>
                        </div>
                      </div>
                    )}
                    <NumberText text="5" />
                  </div>
                  <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#6e6e6e] text-[13px] text-center tracking-[-0.078px] w-[min-content] whitespace-pre-wrap">Calls waiting</p>
                </Wrapper3>
              </div>
              <DividerTeams2IOs className="relative self-stretch shrink-0 w-px" orientation="Vertical center" />
              <DatapointIOs>
                <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Value">
                  <NumberText text="3:16" />
                </div>
                <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#6e6e6e] text-[13px] text-center tracking-[-0.078px] w-[min-content] whitespace-pre-wrap">Longest wait</p>
              </DatapointIOs>
              <DividerTeams2IOs className="relative self-stretch shrink-0 w-px" orientation="Vertical center" />
              <DatapointIOs>
                <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Value">
                  <NumberText text="2:02" />
                </div>
                <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#6e6e6e] text-[13px] text-center tracking-[-0.078px] w-[min-content] whitespace-pre-wrap">Avg answer time</p>
              </DatapointIOs>
            </div>
            <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
              <DividerTeams2Android className="h-px relative shrink-0 w-full" orientation="Bottom" />
            </div>
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
        <div className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-[393px]" data-name="People list">
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
                <Text text="Hillary Reyes" text1="Opted in" />
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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
          <PeopleListListItemMultipleLines>
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