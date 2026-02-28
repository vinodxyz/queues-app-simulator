import clsx from "clsx";
import svgPaths from "./svg-nb3kfsoj7e";

function QueueDetailsListItemHelper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center self-stretch">
      <button className="content-stretch cursor-pointer flex gap-[8px] h-full items-center relative shrink-0" data-name="Right">
        {children}
      </button>
    </div>
  );
}

function QueueDetailsListItemHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Right">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[12px] py-[12px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
type ListItemOneLineTeams2IOsProps = {
  additionalClassNames?: string;
};

function ListItemOneLineTeams2IOs({ children, additionalClassNames = "" }: React.PropsWithChildren<ListItemOneLineTeams2IOsProps>) {
  return (
    <div className={clsx("absolute left-0 top-0 w-[393px]", additionalClassNames)}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative w-full">
          <div className="absolute bg-white inset-0" data-name="BG" />
          <div className="relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center pl-[20px] pr-[12px] relative w-full">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type QueueDetailsListItemLeftTextProps = {
  text: string;
};

function QueueDetailsListItemLeftText({ text }: QueueDetailsListItemLeftTextProps) {
  return (
    <Wrapper>
      <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] tracking-[-0.41px] w-full">
        <p className="leading-[22px] whitespace-pre-wrap">{text}</p>
      </div>
    </Wrapper>
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
type QueueDetailsListItemProps = {
  className?: string;
  state?: "Opted out" | "Opting in" | "Opted in";
};

function QueueDetailsListItem({ className, state = "Opted out" }: QueueDetailsListItemProps) {
  if (state === "Opting in") {
    return (
      <div className={className || "h-[46px] relative w-[393px]"} data-name="State=Opting in">
        <ListItemOneLineTeams2IOs additionalClassNames="cursor-pointer">
          <QueueDetailsListItemLeftText text="Opting in..." />
          <QueueDetailsListItemHelper>
            <ToggleTeams2IOs className="h-[31px] opacity-70 overflow-clip relative shrink-0 w-[51px]" state="Disable" />
          </QueueDetailsListItemHelper>
        </ListItemOneLineTeams2IOs>
      </div>
    );
  }
  if (state === "Opted in") {
    return (
      <div className={className || "h-[46px] relative w-[393px]"} data-name="State=Opted in">
        <ListItemOneLineTeams2IOs additionalClassNames="cursor-pointer">
          <QueueDetailsListItemLeftText text="You’re opted in" />
          <QueueDetailsListItemHelper1>
            <ToggleTeams2IOs className="bg-[#5b5fc7] h-[31px] overflow-clip relative rounded-[20px] shrink-0 w-[51px]" />
          </QueueDetailsListItemHelper1>
        </ListItemOneLineTeams2IOs>
      </div>
    );
  }
  if (state === "Opting in") {
    return (
      <button className={className || "block cursor-pointer h-[46px] relative w-[393px]"} data-name="State=Opting in">
        <ListItemOneLineTeams2IOs>
          <Wrapper>
            <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212121] text-[17px] text-left tracking-[-0.41px] w-full">
              <p className="leading-[22px] whitespace-pre-wrap">Opting out...</p>
            </div>
          </Wrapper>
          <QueueDetailsListItemHelper>
            <ToggleTeams2IOs className="h-[31px] opacity-70 overflow-clip relative shrink-0 w-[51px]" state="Disable" toggled={false} />
          </QueueDetailsListItemHelper>
        </ListItemOneLineTeams2IOs>
      </button>
    );
  }
  return (
    <div className={className || "h-[46px] relative w-[393px]"} data-name="State=Opted out">
      <ListItemOneLineTeams2IOs additionalClassNames="cursor-pointer">
        <QueueDetailsListItemLeftText text="You’re opted out" />
        <QueueDetailsListItemHelper1>
          <ToggleTeams2IOs className="bg-[#85858c] h-[31px] overflow-clip relative rounded-[20px] shrink-0 w-[51px]" toggled={false} />
        </QueueDetailsListItemHelper1>
      </ListItemOneLineTeams2IOs>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-black relative size-full">
      <QueueDetailsListItem className="absolute block cursor-pointer h-[46px] left-[68px] top-[277px] w-[393px]" state="Opting in" />
      <QueueDetailsListItem className="absolute h-[46px] left-[68px] top-[199px] w-[393px]" state="Opted in" />
      <QueueDetailsListItem className="absolute h-[46px] left-[68px] top-[121px] w-[393px]" state="Opting in" />
      <QueueDetailsListItem className="absolute h-[46px] left-[68px] top-[43px] w-[393px]" />
    </div>
  );
}