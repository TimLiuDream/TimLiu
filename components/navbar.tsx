'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LangToggle } from '@/components/lang-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/lib/site-config';
import { t } from '@/lib/i18n';
import { useLang } from './lang-provider';

const links = [
  { href: '/#projects', key: 'nav.projects' },
  { href: '/tools', key: 'nav.tools' },
  { href: '/web3', key: 'nav.web3' },
  { href: '/now', key: 'nav.now' },
] as const;

export function Navbar() {
  const { lang } = useLang();
  const pathname = usePathname();

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 text-sm sm:pb-5">
      <Link href="/" className="text-foreground/90">
        <div className="font-mono text-[13px] tracking-[0.24em] transition-colors duration-200 hover:text-primary sm:text-sm">
          TimLiu
        </div>
        <div className="mt-1 text-[11px] leading-none text-foreground/45 sm:text-xs">{siteConfig.tagline[lang]}</div>
      </Link>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground/55">
          {links.map((link) => {
            const active = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? 'text-foreground'
                    : 'transition-colors duration-200 hover:text-foreground/80'
                }
                aria-current={active ? 'page' : undefined}
              >
                {t(lang, link.key)}
              </Link>
            );
          })}
        </nav>
        <LangToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
