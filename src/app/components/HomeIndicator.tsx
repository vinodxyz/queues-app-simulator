export function HomeIndicator({ light = false }: { light?: boolean }) {
  return (
    <div className={`${light ? '' : 'bg-background'} h-[21px] relative shrink-0 w-full`}>
      <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 flex h-[5px] items-center justify-center w-[139px]">
        <div className="h-[5px] rounded-[100px] w-[139px]" style={{ backgroundColor: light ? "rgba(255,255,255,0.5)" : "var(--foreground)" }} />
      </div>
    </div>
  );
}