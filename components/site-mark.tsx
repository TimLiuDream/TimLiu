export function SiteMark() {
  return (
    <div className="group relative flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background font-mono text-xs font-semibold text-foreground/75 transition-transform duration-200 hover:rotate-3">
      TL
      <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-[10px] text-foreground/55 opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100">
        still tinkering
      </span>
    </div>
  );
}
