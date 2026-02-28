import clsx from "clsx";
import svgPaths from "./svg-zwejv99wxl";
import imgAvatarImage from "figma:asset/2544de96fb958465649672a298a474c2f17e6cc3.png";
import imgAvatarImage1 from "figma:asset/3a68b138e7eb3c82de9ea23bc675b2813de35a9a.png";

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
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center relative w-full">{children}</div>
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

function StatusBarTeams2IOsBatteryIcon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[12px] relative shrink-0 w-[26.5px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5 12">
        <g id="Battery Icon">{children}</g>
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute bg-white content-stretch flex items-center rounded-[9999px]", additionalClassNames)}>
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

function ContentBottomDivider() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0">
      <div className="absolute bg-[#e1e1e1] bottom-0 h-[0.5px] left-[56px] right-0" data-name="Color" />
    </div>
  );
}
type AvatarImageAndTextProps = {
  text: string;
};

function AvatarImageAndText({ text }: AvatarImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center pr-[16px] relative shrink-0">
      <div className="relative shrink-0 size-[40px]" data-name="Waiting calls">
        <div className="absolute bg-[#f1f1f1] left-0 rounded-[100px] size-[40px] top-0" data-name="Background" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] left-[20px] not-italic overflow-hidden text-[#212121] text-[17px] text-center text-ellipsis top-[20px] tracking-[-0.41px] w-[30px] whitespace-nowrap">
          <p className="leading-[22px] overflow-hidden">{text}</p>
        </div>
        <Wrapper additionalClassNames="left-[24px] top-[24px]">
          <path d={svgPaths.p34638700} fill="var(--fill-0, #919191)" id="Shape" />
        </Wrapper>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[12px] relative shrink-0">
      <ToggleTeams2IOs className="bg-[#85858c] block cursor-pointer h-[31px] overflow-clip relative rounded-[20px] shrink-0 w-[51px]" toggled={false} />
    </div>
  );
}
type TextProps = {
  text: string;
  text1: string;
};

function Text({ text, text1 }: TextProps) {
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

function StatusBarTeams2IOsDynamicIsland() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[54px] items-center justify-center min-h-px min-w-px relative">
      <div className="bg-black h-[30px] rounded-[100px] shrink-0 w-[120px]" data-name="Dynamic island" />
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
      <Wrapper additionalClassNames="left-[24px] top-[24px]">
        <path d={svgPaths.p34638700} fill={isHigh ? "var(--fill-0, #242424)" : "var(--fill-0, #919191)"} id="Shape" />
      </Wrapper>
      {isHigh && (
        <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[#6e6e6e] text-[13px] top-[53px] tracking-[-0.08px] whitespace-nowrap">
          <p className="leading-[18px]">Waiting</p>
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

export default function AgentHome() {
  return (
    <div className="overflow-clip relative rounded-[54px] size-full" data-name="Agent/Home">
      <div className="absolute bg-white content-stretch flex flex-col h-[850px] items-start left-0 overflow-clip top-0 w-[393px]" data-name="Home">
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
                                      <img alt="" className="absolute h-[176.67%] left-[-8.89%] max-w-none top-[-0.15%] w-[117.78%]" src={imgAvatarImage1} />
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
                              <p className="leading-[20px] whitespace-pre-wrap">You’re handling calls</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch">
                    <div className="content-stretch flex gap-[8px] h-full items-center pb-[8px] pt-[16px] px-[12px] relative shrink-0" data-name="Right">
                      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#6e6e6e] text-[15px] text-right tracking-[-0.08px] whitespace-nowrap">
                        <p className="leading-[20px]">Updated 12 mins ago</p>
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
                <div className="content-stretch flex items-center pr-[16px] relative shrink-0" data-name="Avatar/Image">
                  <WaitingCalls className="relative shrink-0 size-[40px]" />
                </div>
                <Text text="Discharge planning" text1="3 opted in" />
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
                <AvatarImageAndText text="8" />
                <Text text="Trauma unit - senior nurse queue" text1="7 opted in" />
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
                <div className="content-stretch flex items-center pr-[16px] relative shrink-0" data-name="Avatar/Image">
                  <Wrapper1 additionalClassNames="w-[40px]">
                    <div className="relative shrink-0 size-[44px]" data-name="Counter">
                      <div className="absolute bg-[rgba(249,217,217,0.2)] content-stretch flex items-center justify-center left-0 max-h-[40px] max-w-[40px] min-h-[40px] min-w-[40px] px-[2px] py-[4px] rounded-[9999px] top-0 w-[40px]" data-name="Value">
                        <div aria-hidden="true" className="absolute border-2 border-[#fdf3f4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                        <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#212121] text-[17px] text-center text-ellipsis tracking-[-0.41px] whitespace-nowrap">
                          <p className="leading-[22px] overflow-hidden">24</p>
                        </div>
                      </div>
                      <Wrapper additionalClassNames="bottom-0 right-0">
                        <path d={svgPaths.p34638700} fill="var(--fill-0, #CC4A31)" id="Shape" />
                      </Wrapper>
                    </div>
                  </Wrapper1>
                </div>
                <Text text="Emergency department (nurse triaging desk)" text1="12 opted in" />
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
                <AvatarImageAndText text="5" />
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
                <AvatarImageAndText text="9" />
                <Text text="Outpatient services - 6B" text1="3 opted in" />
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
                <AvatarImageAndText text="3" />
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative" data-name="Text">
                  <div className="flex flex-col font-['SF_Pro_Text:Medium',sans-serif] justify-center relative shrink-0 text-[#212121] text-[17px] tracking-[-0.24px] w-full">
                    <p className="leading-[20px] whitespace-pre-wrap">NICU - Neonatal nurse station</p>
                  </div>
                  <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#6e6e6e] text-[15px] text-ellipsis tracking-[-0.08px] w-full whitespace-nowrap">
                    <p className="overflow-hidden">
                      <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] not-italic">8</span>
                      <span className="leading-[20px]">{` opted in`}</span>
                    </p>
                  </div>
                </div>
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
                <AvatarImageAndText text="1" />
                <Text text="Med Surg - floor 5 line" text1="1 opted in" />
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
                <AvatarImageAndText text="9" />
                <Text text="Infectious disease - Isolation ward" text1="3 opted in" />
              </Left>
              <div className="flex flex-row items-center self-stretch">
                <Right />
              </div>
            </div>
          </ListItemMultipleLines>
        </div>
        <Wrapper1 additionalClassNames="bg-white w-full">
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
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Size=24, Theme=Regular">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.5px] left-1/2 top-1/2 w-[15.5px]" data-name="Shape">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 3.5">
                      <path d={svgPaths.p1b4cd780} fill="var(--fill-0, #212121)" id="Shape" />
                    </svg>
                  </div>
                </div>
                <div className="absolute left-[11px] rounded-[125px] size-[20px] top-[-5px]" data-name="Notification badge">
                  <div className="absolute left-[6.25px] size-[10px] top-[3.75px]" data-name="Badge">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #CC4A31)" id="Badge" r="5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#212121] text-[10px] text-center tracking-[0.12px]">More</p>
            </MenuItemsHelper>
          </div>
        </Wrapper1>
        <div className="bg-white h-[21px] relative shrink-0 w-[393px]" data-name="Home indicator (Teams 2 iOS)">
          <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[139px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="bg-[#212121] h-[5px] rounded-[100px] w-[139px]" data-name="Home Indicator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}