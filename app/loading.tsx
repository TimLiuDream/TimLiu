export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex items-center gap-2 font-mono text-sm text-foreground/30">
        <span className="animate-pulse">loading</span>
        <span className="animate-cursor-blink">_</span>
      </div>
    </div>
  );
}