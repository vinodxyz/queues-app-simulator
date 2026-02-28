import clsx from "clsx";
import svgPaths from "./svg-0zxphxyxlo";

function Helper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 11.75" className="absolute block size-full">
      <path d={svgPaths.p1efe9e00} fill="var(--fill-0, #D92C2C)" id="Shape" />
    </svg>
  );
}

function Left({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
          <div className="bg-[#fdf3f4] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[10px] relative">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow Bounce">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.75px] left-1/2 top-[calc(50%-0.13px)] w-[20px]" data-name="Shape">
                    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20 11.75" className="absolute block size-full">
                      <path d={svgPaths.p1efe9e00} fill="var(--fill-0, #D92C2C)" id="Shape" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TextText text="+1 (263) 952-6921" />
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

export default function Frame() {
  return (
    <div className="bg-black relative size-full">
      <div className="absolute bg-white left-[600px] top-[884px] w-[393px]" data-name="List item Call History (iOS)">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative w-full">
            <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Left />
              </div>
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                  <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                    <p className="leading-[16px]">9:29 AM</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
              <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f5c0ff] border-2 border-[#e143fe] border-dashed h-[68px] left-[600px] mix-blend-multiply top-[884px] w-[318px]" />
      <div className="absolute flex h-[68px] items-center justify-center left-[918px] mix-blend-multiply top-[884px] w-[75px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#d1a0ff] border-2 border-[#aa50ff] border-dashed h-[68px] w-[75px]" />
        </div>
      </div>
      <div className="absolute left-[646px] size-[48px] top-[914px]" data-name="Tap here">
        <div className="absolute inset-[-16.88%_-16.87%_-16.87%_-16.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.2 64.2">
            <g id="Tap here" opacity="0.7">
              <g filter="url(#filter0_f_9_33419)" id="Ellipse 6">
                <circle cx="32.1" cy="32.1" fill="var(--fill-0, #A12BFE)" fillOpacity="0.6" r="24" />
              </g>
              <g data-figma-bg-blur-radius="12" filter="url(#filter1_iiiii_9_33419)" id="Ellipse 7">
                <circle cx="32.1" cy="32.1" fill="var(--fill-0, #1A1A1A)" r="24" style={{ mixBlendMode: "plus-lighter" }} />
              </g>
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64.2" id="filter0_f_9_33419" width="64.2" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_9_33419" stdDeviation="4.05" />
              </filter>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72" id="filter1_iiiii_9_33419" width="72" x="-3.9" y="-3.9">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="11" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.94902 0 0 0 0 0.94902 0 0 0 0 0.94902 0 0 0 0.5 0" />
                <feBlend in2="shape" mode="plus-darker" result="effect1_innerShadow_9_33419" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect2_innerShadow_9_33419" />
                <feOffset />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 1 0" />
                <feBlend in2="effect1_innerShadow_9_33419" mode="overlay" result="effect2_innerShadow_9_33419" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect3_innerShadow_9_33419" />
                <feOffset dx="-2" dy="-2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.701961 0 0 0 0 0.701961 0 0 0 0 0.701961 0 0 0 1 0" />
                <feBlend in2="effect2_innerShadow_9_33419" mode="plus-lighter" result="effect3_innerShadow_9_33419" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect4_innerShadow_9_33419" />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.701961 0 0 0 0 0.701961 0 0 0 0 0.701961 0 0 0 1 0" />
                <feBlend in2="effect3_innerShadow_9_33419" mode="plus-lighter" result="effect4_innerShadow_9_33419" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="3.5" result="effect5_innerShadow_9_33419" />
                <feOffset dx="3" dy="3" />
                <feGaussianBlur stdDeviation="0.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend in2="effect4_innerShadow_9_33419" mode="normal" result="effect5_innerShadow_9_33419" />
              </filter>
              <clipPath id="bgblur_0_9_33419_clip_path" transform="translate(3.9 3.9)">
                <circle cx="32.1" cy="32.1" r="24" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[918px] size-[48px] top-[928px]" data-name="Tap here">
        <div className="absolute inset-[-16.88%_-16.87%_-16.87%_-16.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.2 64.2">
            <g id="Tap here" opacity="0.7">
              <g filter="url(#filter0_f_9_33409)" id="Ellipse 6">
                <circle cx="32.1" cy="32.1" fill="var(--fill-0, #402BFE)" fillOpacity="0.6" r="24" />
              </g>
              <g data-figma-bg-blur-radius="12" filter="url(#filter1_iiiii_9_33409)" id="Ellipse 7">
                <circle cx="32.1" cy="32.1" fill="var(--fill-0, #1A1A1A)" r="24" style={{ mixBlendMode: "plus-lighter" }} />
              </g>
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64.2" id="filter0_f_9_33409" width="64.2" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_9_33409" stdDeviation="4.05" />
              </filter>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72" id="filter1_iiiii_9_33409" width="72" x="-3.9" y="-3.9">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="11" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.94902 0 0 0 0 0.94902 0 0 0 0 0.94902 0 0 0 0.5 0" />
                <feBlend in2="shape" mode="plus-darker" result="effect1_innerShadow_9_33409" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="1" result="effect2_innerShadow_9_33409" />
                <feOffset />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 1 0" />
                <feBlend in2="effect1_innerShadow_9_33409" mode="overlay" result="effect2_innerShadow_9_33409" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect3_innerShadow_9_33409" />
                <feOffset dx="-2" dy="-2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.701961 0 0 0 0 0.701961 0 0 0 0 0.701961 0 0 0 1 0" />
                <feBlend in2="effect2_innerShadow_9_33409" mode="plus-lighter" result="effect3_innerShadow_9_33409" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect4_innerShadow_9_33409" />
                <feOffset dx="2" dy="2" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.701961 0 0 0 0 0.701961 0 0 0 0 0.701961 0 0 0 1 0" />
                <feBlend in2="effect3_innerShadow_9_33409" mode="plus-lighter" result="effect4_innerShadow_9_33409" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="3.5" result="effect5_innerShadow_9_33409" />
                <feOffset dx="3" dy="3" />
                <feGaussianBlur stdDeviation="0.25" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend in2="effect4_innerShadow_9_33409" mode="normal" result="effect5_innerShadow_9_33409" />
              </filter>
              <clipPath id="bgblur_0_9_33409_clip_path" transform="translate(3.9 3.9)">
                <circle cx="32.1" cy="32.1" r="24" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bg-white left-[600px] top-[527px] w-[393px]" data-name="Call actions (iOS)">
        <div className="content-stretch flex flex-col items-start pb-[20px] pt-[8px] relative w-full">
          <div className="bg-white relative shrink-0 w-full" data-name="Navigation bar (Teams 2 iOS)">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center relative w-full">
                <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Navigation header">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-center min-h-px min-w-px relative" data-name="Center">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title">
                      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black text-center tracking-[-0.24px] whitespace-nowrap">
                        <p className="leading-[20px]">Outgoing: Lydia Bauer</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtext">
                      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-nowrap">
                        <p className="leading-[11px]">Today, 8:32 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex h-[48px] items-center left-0 pl-[16px] top-0" data-name="Left" />
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer h-[46px] relative shrink-0 w-full" data-name="List Item One Line (Teams 2 iOS)">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <div className="absolute bg-white inset-0" data-name="BG" />
                <div className="relative shrink-0 w-full" data-name="Content">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                            <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
                              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.096px] left-[calc(50%-0.1px)] top-1/2 w-[15.302px]" data-name="Shape">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3017 20.0959">
                                    <path d={svgPaths.p39b37080} fill="var(--fill-0, black)" id="Shape" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
                                <p className="leading-[22px] whitespace-pre-wrap">Call back</p>
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
          <div className="cursor-pointer h-[46px] relative shrink-0 w-full" data-name="List Item One Line (Teams 2 iOS)">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <div className="absolute bg-white inset-0" data-name="BG" />
                <div className="relative shrink-0 w-full" data-name="Content">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                            <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
                              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.002px] left-1/2 top-1/2 w-[20px]" data-name="Shape">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.0017">
                                    <path d={svgPaths.p3c8e8a00} fill="var(--fill-0, black)" id="Shape" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
                                <p className="leading-[22px] whitespace-pre-wrap">Send message</p>
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
          <div className="cursor-pointer h-[46px] relative shrink-0 w-full" data-name="List Item One Line (Teams 2 iOS)">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <div className="absolute bg-white inset-0" data-name="BG" />
                <div className="relative shrink-0 w-full" data-name="Content">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                            <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
                              <div className="relative shrink-0 size-[24px]" data-name="Icon">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Shape">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                    <path d={svgPaths.p34b5f280} fill="var(--fill-0, black)" id="Shape" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
                                <p className="leading-[22px] whitespace-pre-wrap">View recap</p>
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
          <div className="cursor-pointer h-[46px] relative shrink-0 w-full" data-name="List Item One Line (Teams 2 iOS)">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <div className="absolute bg-white inset-0" data-name="BG" />
                <div className="relative shrink-0 w-full" data-name="Content">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                            <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
                              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.5px] left-1/2 top-[calc(50%-0.25px)] w-[20px]" data-name="Shape">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.5">
                                    <path d={svgPaths.p323b3e00} fill="var(--fill-0, black)" id="Shape" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
                                <p className="leading-[22px] whitespace-pre-wrap">Remove</p>
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
      <div className="absolute bg-white left-[600px] top-[148px] w-[393px]" data-name="Call actions (iOS)">
        <div className="content-stretch flex flex-col items-start pb-[20px] pt-[8px] relative w-full">
          <div className="bg-white relative shrink-0 w-full" data-name="Navigation bar (Teams 2 iOS)">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center relative w-full">
                <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Navigation header">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-center min-h-px min-w-px relative" data-name="Center">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title">
                      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black text-center tracking-[-0.24px] whitespace-nowrap">
                        <p className="leading-[20px]">Missed call: +1 (263) 952-6921</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtext">
                      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-nowrap">
                        <p className="leading-[11px]">Today, 8:32 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex h-[48px] items-center left-0 pl-[16px] top-0" data-name="Left" />
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer h-[46px] relative shrink-0 w-full" data-name="List Item One Line (Teams 2 iOS)">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <div className="absolute bg-white inset-0" data-name="BG" />
                <div className="relative shrink-0 w-full" data-name="Content">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                            <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
                              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.096px] left-[calc(50%-0.1px)] top-1/2 w-[15.302px]" data-name="Shape">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3017 20.0959">
                                    <path d={svgPaths.p39b37080} fill="var(--fill-0, black)" id="Shape" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
                                <p className="leading-[22px] whitespace-pre-wrap">Call back</p>
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
          <div className="cursor-pointer h-[46px] relative shrink-0 w-full" data-name="List Item One Line (Teams 2 iOS)">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <div className="absolute bg-white inset-0" data-name="BG" />
                <div className="relative shrink-0 w-full" data-name="Content">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                            <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
                              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Shape">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                    <path d={svgPaths.p5f1770} fill="var(--fill-0, black)" id="Shape" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
                                <p className="leading-[22px] whitespace-pre-wrap">Block number</p>
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
          <div className="cursor-pointer h-[46px] relative shrink-0 w-full" data-name="List Item One Line (Teams 2 iOS)">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <div className="absolute bg-white inset-0" data-name="BG" />
                <div className="relative shrink-0 w-full" data-name="Content">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                            <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
                              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.5px] left-1/2 top-[calc(50%-0.25px)] w-[20px]" data-name="Shape">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.5">
                                    <path d={svgPaths.p323b3e00} fill="var(--fill-0, black)" id="Shape" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
                                <p className="leading-[22px] whitespace-pre-wrap">Remove</p>
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
      <p className="absolute font-['Inter:Regular',sans-serif] leading-[32px] left-[600px] not-italic text-[20px] text-white top-[102px]">External caller</p>
      <p className="absolute font-['Inter:Regular',sans-serif] leading-[32px] left-[600px] not-italic text-[20px] text-white top-[485px]">Internal caller</p>
      <div className="absolute font-['Inter:Regular',sans-serif] leading-[24px] left-[600px] not-italic text-[0px] text-white top-[962px] whitespace-nowrap">
        <p className="font-['Inter:Bold',sans-serif] mb-0 text-[#eb8afd] text-[12px]">Left area</p>
        <p className="text-[20px]">Call this number</p>
      </div>
      <div className="-translate-x-full absolute font-['Inter:Regular',sans-serif] leading-[24px] left-[993px] not-italic text-[0px] text-right text-white top-[962px] whitespace-nowrap">
        <p className="font-['Inter:Bold',sans-serif] mb-0 text-[#b66afe] text-[12px]">Right area</p>
        <p className="text-[20px]">Open action sheet</p>
      </div>
      <div className="absolute h-[850px] left-[98px] overflow-clip rounded-[56px] top-[134px] w-[393px]" data-name="Agent/Queue details">
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
          <div className="cursor-pointer relative shrink-0 w-full" data-name="List Item One Line (Teams 2 iOS)">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                <div className="absolute bg-white inset-0" data-name="BG" />
                <div className="relative shrink-0 w-full" data-name="Content">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
                                <p className="leading-[22px] whitespace-pre-wrap">You’re opted out</p>
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
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-[393px]" data-name="Analytics (iOS)">
            <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative w-full">
              <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Divider">
                <DividerTeams2Android className="h-px relative shrink-0 w-full" orientation="Bottom" />
              </div>
              <div className="content-stretch flex gap-[12px] items-start justify-center py-[16px] relative shrink-0 w-full" data-name="Content">
                <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Datapoint (iOS)">
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-center relative w-full">
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Value">
                        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.01px)] size-[11.978px] top-[calc(50%+0.01px)]" data-name="Shape">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9776 11.9776">
                              <path d={svgPaths.p35ef8ec0} fill="var(--fill-0, #212121)" id="Shape" />
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Number">
                          <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.24px] whitespace-nowrap">
                            <p className="leading-[20px]">24</p>
                          </div>
                        </div>
                      </div>
                      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#6e6e6e] text-[13px] text-center tracking-[-0.078px] w-[min-content] whitespace-pre-wrap">Calls waiting</p>
                    </div>
                  </div>
                </div>
                <DividerTeams2IOs className="relative self-stretch shrink-0 w-px" orientation="Vertical center" />
                <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Datapoint (iOS)">
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-center relative w-full">
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Value">
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Number">
                          <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.24px] whitespace-nowrap">
                            <p className="leading-[20px]">12</p>
                          </div>
                        </div>
                      </div>
                      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#6e6e6e] text-[13px] text-center tracking-[-0.078px] w-[min-content] whitespace-pre-wrap">Calls presented</p>
                    </div>
                  </div>
                </div>
                <DividerTeams2IOs className="relative self-stretch shrink-0 w-px" orientation="Vertical center" />
                <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Datapoint (iOS)">
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-center relative w-full">
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Value">
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Number">
                          <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.24px] whitespace-nowrap">
                            <p className="leading-[20px]">5</p>
                          </div>
                        </div>
                      </div>
                      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#6e6e6e] text-[13px] text-center tracking-[-0.078px] w-[min-content] whitespace-pre-wrap">Calls answered</p>
                    </div>
                  </div>
                </div>
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
                    <div className="bg-white relative rounded-[9999px] shrink-0" data-name="Pill 1">
                      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-center px-[16px] py-[6px] relative">
                          <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
                            <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#212121] text-[15px] text-center tracking-[-0.24px]">People</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                    </div>
                    <div className="bg-[#e8ebfa] relative rounded-[9999px] shrink-0" data-name="Pill 2">
                      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-center px-[16px] py-[6px] relative">
                          <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Content">
                            <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#5b5fc7] text-[15px] text-center tracking-[-0.24px]">Call history</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                    </div>
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
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <Left />
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">9:29 AM</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Down Left">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p28f55f80} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (617) 934-2085</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">1 min 2 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">9:26 AM</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
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
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#fdf3f4] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[10px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow Bounce">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.75px] left-1/2 top-[calc(50%-0.13px)] w-[20px]" data-name="Shape">
                                      <Helper />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (263) 952-6921</p>
                              </div>
                              <SubtitleText text="Forwarded by Bryan" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">9:12 AM</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Down Left">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p28f55f80} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (617) 934-2085</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">4 min 51 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">9:01 AM</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Down Left">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p28f55f80} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">Will, Kayo, Eric, +2</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">3 min 12 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">8:47 AM</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Up Right">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p2b729500} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">Lydia Bauer</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">3 min 12 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">8:32 AM</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
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
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#fdf3f4] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[10px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow Bounce">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.75px] left-1/2 top-[calc(50%-0.13px)] w-[20px]" data-name="Shape">
                                      <Helper />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (263) 952-6921</p>
                              </div>
                              <SubtitleText text="Transferred by Andre" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">8:04 AM</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Down Left">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p28f55f80} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (617) 934-2085</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">1 min 14 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">7:55 AM</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#fdf3f4] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[10px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow Bounce">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.75px] left-1/2 top-[calc(50%-0.13px)] w-[20px]" data-name="Shape">
                                      <Helper />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TextText text="+1 (212) 684-2391" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">7:24 AM</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
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
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#fdf3f4] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[10px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Arrow Bounce">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.75px] left-1/2 top-[calc(50%-0.13px)] w-[20px]" data-name="Shape">
                                      <Helper />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <TextText text="+1 (310) 927-4830" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">Yesterday</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Up Right">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p2b729500} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (480) 392-1057</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">3 min 29 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">Yesterday</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Down Left">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p28f55f80} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (480) 392-1057</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">3 min 29 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">Yesterday</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Up Right">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p2b729500} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (555) 952-1234</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">3 min 29 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">Yesterday</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Down Left">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p28f55f80} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (112) 952-8808</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">3 min 29 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">Yesterday</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Up Right">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p2b729500} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (263) 952-9928</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">3 min 29 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">Yesterday</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
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
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Down Left">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p28f55f80} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (263) 952-6921</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">3 min 29 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">Yesterday</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
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
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Down Left">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p28f55f80} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (263) 952-6921</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">3 min 29 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">Yesterday</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Down Left">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p28f55f80} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (263) 952-6921</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">3 min 29 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">Yesterday</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-[393px]" data-name="List item Call History (iOS)">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="content-stretch flex items-center py-[12px] relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Left">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6px] items-center pl-[16px] relative size-full">
                            <div className="bg-[#f8f8f8] relative rounded-[9999px] shrink-0" data-name="Call status (iOS)">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center p-[12px] relative">
                                  <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow Down Left">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                        <path d={svgPaths.p28f55f80} fill="var(--fill-0, #919191)" id="Shape" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[2px] items-start justify-center pl-[6px] relative shrink-0" data-name="Text">
                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#212121] text-[17px] text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                                <p className="leading-[22px] overflow-hidden">+1 (263) 952-6921</p>
                              </div>
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Subtitle">
                                <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] whitespace-nowrap">
                                  <p className="leading-[20px] overflow-hidden">3 min 29 sec</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col gap-[8px] h-full items-end pr-[12px] relative shrink-0" data-name="Right Accessories">
                        <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[12px] text-right whitespace-nowrap">
                          <p className="leading-[16px]">8:00 AM</p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Alert">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info">
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p28b43400} fill="var(--fill-0, #212121)" id="Shape" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 h-px left-0 right-0" data-name="Bottom divider">
                    <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 h-[850px] left-0 w-[393px]" data-name="Drawer Secondary (Teams 2 iOS)">
          <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-end pb-[24px] relative size-full">
              <div className="bg-[rgba(0,0,0,0.35)] flex-[1_0_0] mb-[-24px] min-h-px min-w-[375px] relative w-full" data-name="Overlay">
                <div className="flex flex-row items-end min-w-[inherit] size-full">
                  <div className="min-w-[inherit] size-full" />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start mb-[-24px] overflow-clip relative rounded-tl-[14px] rounded-tr-[14px] shrink-0 w-full" data-name="Drawer">
                <div className="bg-white relative shrink-0 w-full" data-name="Content">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-start px-[8px] relative w-full">
                      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Type=External">
                        <div className="content-stretch flex flex-col items-start pb-[20px] pt-[8px] relative w-full">
                          <div className="bg-white relative shrink-0 w-full" data-name="Navigation bar (Teams 2 iOS)">
                            <div className="flex flex-col justify-center size-full">
                              <div className="content-stretch flex flex-col items-start justify-center relative w-full">
                                <div className="content-stretch flex h-[48px] items-center relative shrink-0 w-full" data-name="Navigation header">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[48px] items-center justify-center min-h-px min-w-px relative" data-name="Center">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title">
                                      <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black text-center tracking-[-0.24px] whitespace-nowrap">
                                        <p className="leading-[20px]">Missed call: +1 (263) 952-6921</p>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Subtext">
                                      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e6e] text-[11px] text-center tracking-[0.06px] whitespace-nowrap">
                                        <p className="leading-[11px]">Today, 9:29 AM</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute content-stretch flex h-[48px] items-center left-0 pl-[16px] top-0" data-name="Left" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cursor-pointer h-[46px] relative shrink-0 w-full" data-name="List Item One Line (Teams 2 iOS)">
                            <div className="flex flex-col items-center justify-center size-full">
                              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                                <div className="absolute bg-white inset-0" data-name="BG" />
                                <div className="relative shrink-0 w-full" data-name="Content">
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                                        <div className="flex flex-row items-center size-full">
                                          <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                                            <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
                                              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                                                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.096px] left-[calc(50%-0.1px)] top-1/2 w-[15.302px]" data-name="Shape">
                                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3017 20.0959">
                                                    <path d={svgPaths.p39b37080} fill="var(--fill-0, black)" id="Shape" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
                                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
                                                <p className="leading-[22px] whitespace-pre-wrap">Call back</p>
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
                          <div className="cursor-pointer h-[46px] relative shrink-0 w-full" data-name="List Item One Line (Teams 2 iOS)">
                            <div className="flex flex-col items-center justify-center size-full">
                              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                                <div className="absolute bg-white inset-0" data-name="BG" />
                                <div className="relative shrink-0 w-full" data-name="Content">
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                                        <div className="flex flex-row items-center size-full">
                                          <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                                            <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
                                              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                                                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Shape">
                                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                                    <path d={svgPaths.p5f1770} fill="var(--fill-0, black)" id="Shape" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
                                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
                                                <p className="leading-[22px] whitespace-pre-wrap">Block number</p>
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
                          <div className="cursor-pointer h-[46px] relative shrink-0 w-full" data-name="List Item One Line (Teams 2 iOS)">
                            <div className="flex flex-col items-center justify-center size-full">
                              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                                <div className="absolute bg-white inset-0" data-name="BG" />
                                <div className="relative shrink-0 w-full" data-name="Content">
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">
                                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Left">
                                        <div className="flex flex-row items-center size-full">
                                          <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
                                            <div className="content-stretch flex items-center pr-[20px] relative shrink-0" data-name="Icon 24px">
                                              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                                                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[20.5px] left-1/2 top-[calc(50%-0.25px)] w-[20px]" data-name="Shape">
                                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.5">
                                                    <path d={svgPaths.p323b3e00} fill="var(--fill-0, black)" id="Shape" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
                                              <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
                                                <p className="leading-[22px] whitespace-pre-wrap">Remove</p>
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
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 h-[21px] left-0 right-0" data-name="Home indicator (Teams 2 iOS)">
                  <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[139px]">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="bg-[#212121] h-[5px] rounded-[100px] w-[139px]" data-name="Home Indicator" />
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