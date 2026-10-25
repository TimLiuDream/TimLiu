'use client';

import { useLang } from './lang-provider';
import { t } from '@/lib/i18n';

export function Footer() {
  const { lang } = useLang();

  return (
    <footer className="flex flex-col gap-2 border-t border-border py-6 text-xs text-foreground/45 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <span>© 2026 TimLiu</span>
        <a
          href="/tools"
          className="font-mono transition-colors duration-200 hover:text-foreground/70"
        >
          /tools
        </a>
        <a
          href="/web3"
          className="font-mono transition-colors duration-200 hover:text-foreground/70"
        >
          /web3
        </a>
        <a
          href="/now"
          className="font-mono transition-colors duration-200 hover:text-foreground/70"
        >
          /now
        </a>
        <a
          href="/feed.xml"
          className="font-mono transition-colors duration-200 hover:text-foreground/70"
        >
          RSS
        </a>
      </div>
      <span className="font-mono transition-colors duration-200 hover:text-foreground/70">{t(lang, 'footer.builtWith')}</span>
    </footer>
  );
}