import clsx from "clsx";
import svgPaths from "./svg-ub3hkc8mkg";

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center size-full">
      <div className="content-stretch flex flex-col gap-[4px] items-center relative w-full">{children}</div>
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

function DatapointIOs({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <Wrapper3>{children}</Wrapper3>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative">
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                {children}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative w-full">{children}</div>
      </div>
    </div>
  );
}

function ListItemCallHistoryIOs() {
  return (
    <Wrapper additionalClassNames="bg-white w-[393px]">
      <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Left />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <RightAccessoriesText text="Yesterday" />
        </div>
      </div>
      <CallListBottomDivider />
    </Wrapper>
  );
}

function CallListBottomDivider() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0">
      <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
    </div>
  );
}

function Left() {
  return (
    <Wrapper1>
      <CallStatusIOs1 />
      <TextText2 text="+1 (263) 952-6921" />
    </Wrapper1>
  );
}
type TextText2Props = {
  text: string;
};

function TextText2({ text }: TextText2Props) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">{text}</p>
      </div>
      <SubtitleText1 text="3 min 29 sec" />
    </div>
  );
}
type RightAccessoriesText1Props = {
  text: string;
};

function RightAccessoriesText1({ text }: RightAccessoriesText1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">{text}</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Video Clip">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[16px]" data-name="Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
              <path d={svgPaths.p34fd7b80} fill="var(--fill-0, #212121)" id="Shape" />
            </svg>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Slide Text">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-1/2 w-[16px]" data-name="Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
              <path d={svgPaths.p146e8c80} fill="var(--fill-0, #212121)" id="Shape" />
            </svg>
          </div>
        </div>
        <Info />
      </div>
    </div>
  );
}

function CallStatusIOs2() {
  return (
    <Wrapper2>
      <path d={svgPaths.p2b729500} fill="var(--fill-0, #919191)" id="Shape" />
    </Wrapper2>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">{text}</p>
      </div>
      <SubtitleText1 text="3 min 12 sec" />
    </div>
  );
}

function CallStatusIOs1() {
  return (
    <Wrapper2>
      <path d={svgPaths.p28f55f80} fill="var(--fill-0, #919191)" id="Shape" />
    </Wrapper2>
  );
}
type SubtitleText1Props = {
  text: string;
};

function SubtitleText1({ text }: SubtitleText1Props) {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{text}</p>
      </div>
    </div>
  );
}
type RightAccessoriesTextProps = {
  text: string;
};

function RightAccessoriesText({ text }: RightAccessoriesTextProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">{text}</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
        <Info />
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
        </svg>
      </div>
    </div>
  );
}
type CallStatusIOsProps = {
  additionalClassNames?: string;
};

function CallStatusIOs({ additionalClassNames = "" }: CallStatusIOsProps) {
  return (
    <div className={clsx("relative rounded-[9999px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[10px] relative">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow Bounce">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.75px] left-1/2 top-[calc(50%-0.13px)] w-[20px]" data-name="Shape">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 11.75">
                <path d={svgPaths.p1efe9e00} fill="var(--fill-0, #D92C2C)" id="Shape" />
              </svg>
            </div>
          </div>
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
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
        <p className="leading-[22px] overflow-hidden">{text}</p>
      </div>
      <SubtitleText text="Missed call" />
    </div>
  );
}
type SubtitleTextProps = {
  text: string;
};

function SubtitleText({ text }: SubtitleTextProps) {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#d92c2c] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{text}</p>
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
          <g filter="url(#filter0_dd_4_8307)" id="Handle">
            <path clipRule="evenodd" d={svgPaths.p2f89a2f0} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2f89a2f0} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26.5" id="filter0_dd_4_8307" width="26.5" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_8307" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
              <feBlend in2="effect1_dropShadow_4_8307" mode="normal" result="effect2_dropShadow_4_8307" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_4_8307" mode="normal" result="shape" />
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
              <g filter="url(#filter0_dd_4_5518)" id="Handle">
                <circle cx="22.5" cy="18.5" fill="var(--fill-0, white)" r="14" />
                <circle cx="22.5" cy="18.5" r="14.25" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="45" id="filter0_dd_4_5518" width="45" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_5518" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                  <feBlend in2="effect1_dropShadow_4_5518" mode="normal" result="effect2_dropShadow_4_5518" />
                  <feBlend in="SourceGraphic" in2="effect2_dropShadow_4_5518" mode="normal" result="shape" />
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
            <g filter="url(#filter0_dd_4_5592)" id="Handle">
              <path clipRule="evenodd" d={svgPaths.p1eb35f80} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1eb35f80} fillRule="evenodd" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="43.5" id="filter0_dd_4_5592" width="43.5" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_5592" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                <feBlend in2="effect1_dropShadow_4_5592" mode="normal" result="effect2_dropShadow_4_5592" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_4_5592" mode="normal" result="shape" />
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
        <div className="absolute bottom-0 h-[34px] left-0 w-[393px]" data-name="Home indicator (iPhone 11 Pro)">
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
        <Wrapper additionalClassNames="cursor-pointer w-full">
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
                          <p className="leading-[22px] whitespace-pre-wrap">Opted in: 2 agents</p>
                        </div>
                      </div>
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
        </Wrapper>
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
        <div className="relative shrink-0 w-full" data-name="Tabs">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pr-[16px] relative w-full">
              <div className="bg-white flex-[1_0_0] h-[44px] min-h-px min-w-px overflow-clip relative" data-name="Pill bar Segmented control (Teams 2 iOS)">
                <div className="-translate-y-1/2 absolute content-stretch cursor-pointer flex gap-[8px] items-center left-[16px] overflow-clip py-px rounded-[20px] top-1/2" data-name="Segments">
                  <SegmentsPill additionalClassNames="bg-white">
                    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
                      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#212121] text-[15px] text-center tracking-[-0.24px]">People</p>
                    </div>
                  </SegmentsPill>
                  <SegmentsPill additionalClassNames="bg-[#e8ebfa]">
                    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
                      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5b5fc7] text-[15px] text-center tracking-[-0.24px]">Call history</p>
                    </div>
                  </SegmentsPill>
                </div>
              </div>
              <div className="cursor-pointer opacity-0 relative rounded-[8px] shrink-0" data-name="Button (Teams 2 iOS)">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col items-center relative">
                    <div className="content-stretch flex gap-[8px] h-[40px] items-center overflow-clip px-[10px] relative shrink-0" data-name="Content">
                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[9.5px] left-1/2 top-[calc(50%-0.25px)] w-[12.5px]" data-name="Shape">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 9.5">
                            <path d={svgPaths.p2aa8e00} fill="var(--fill-0, #5B5FC7)" id="Shape" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#5b5fc7] text-[15px] text-center text-ellipsis tracking-[-0.24px] whitespace-nowrap">
                        <p className="leading-[20px] overflow-hidden">Filters</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-[393px]" data-name="Call list">
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs additionalClassNames="bg-[rgba(249,217,217,0.2)]" />
                  <TextText text="+1 (263) 952-6921" />
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="9:29 AM" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs1 />
                  <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                    <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                      <p className="leading-[22px] overflow-hidden">+1 (617) 934-2085</p>
                    </div>
                    <SubtitleText1 text="1 min 2 sec" />
                  </div>
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="9:26 AM" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs additionalClassNames="bg-[rgba(249,217,217,0.2)]" />
                  <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                    <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                      <p className="leading-[22px] overflow-hidden">+1 (263) 952-6921</p>
                    </div>
                    <SubtitleText text="Forwarded by Bryan" />
                  </div>
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="9:12 AM" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs1 />
                  <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                    <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                      <p className="leading-[22px] overflow-hidden">+1 (617) 934-2085</p>
                    </div>
                    <SubtitleText1 text="4 min 51 sec" />
                  </div>
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="9:01 AM" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs1 />
                  <TextText1 text="Will, Kayo, Eric, +2" />
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="8:47 AM" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs2 />
                  <TextText1 text="Lydia Bauer" />
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText1 text="8:32 AM" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs additionalClassNames="bg-[rgba(249,217,217,0.2)]" />
                  <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                    <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                      <p className="leading-[22px] overflow-hidden">+1 (263) 952-6921</p>
                    </div>
                    <SubtitleText text="Transferred by Andre" />
                  </div>
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="8:04 AM" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs1 />
                  <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                    <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                      <p className="leading-[22px] overflow-hidden">+1 (617) 934-2085</p>
                    </div>
                    <SubtitleText1 text="1 min 14 sec" />
                  </div>
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="7:55 AM" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs additionalClassNames="bg-[#fdf3f4]" />
                  <TextText text="+1 (212) 684-2391" />
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText1 text="7:24 AM" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs additionalClassNames="bg-[#fdf3f4]" />
                  <TextText text="+1 (310) 927-4830" />
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="Yesterday" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs2 />
                  <TextText2 text="+1 (480) 392-1057" />
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="Yesterday" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs1 />
                  <TextText2 text="+1 (480) 392-1057" />
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="Yesterday" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs2 />
                  <TextText2 text="+1 (555) 952-1234" />
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="Yesterday" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs1 />
                  <TextText2 text="+1 (112) 952-8808" />
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="Yesterday" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Wrapper1>
                  <CallStatusIOs2 />
                  <TextText2 text="+1 (263) 952-9928" />
                </Wrapper1>
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText1 text="Yesterday" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Left />
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText1 text="Yesterday" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
          <ListItemCallHistoryIOs />
          <ListItemCallHistoryIOs />
          <Wrapper additionalClassNames="bg-white w-[393px]">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Left />
              </div>
              <div className="flex flex-row items-center self-stretch">
                <RightAccessoriesText text="8:00 AM" />
              </div>
            </div>
            <CallListBottomDivider />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}