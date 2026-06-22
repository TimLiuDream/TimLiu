import { siteConfig } from '@/lib/site-config';
import { SiteMark } from './site-mark';

export function Navbar() {
  return (
    <header className="flex items-center gap-4 border-b border-border pb-4 text-sm sm:gap-6 sm:pb-5">
      <div className="flex items-center gap-3 text-foreground/90">
        <div>
          <div className="font-mono text-[13px] tracking-[0.24em] transition-colors duration-200 hover:text-primary sm:text-sm">
            TimLiu
          </div>
          <div className="mt-1 text-[11px] leading-none text-foreground/45 sm:text-xs">{siteConfig.tagline}</div>
        </div>
      </div>
    </header>
  );
}
