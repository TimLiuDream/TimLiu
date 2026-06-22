export function Footer() {
  return (
    <footer className="flex flex-col gap-2 border-t border-border py-6 text-xs text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
      <span>© 2026 TimLiu</span>
      <span className="font-mono transition-colors duration-200 hover:text-foreground/70">Built with curiosity.</span>
    </footer>
  );
}
