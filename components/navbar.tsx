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
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <span className="seal" aria-hidden="true">
            TL
          </span>
          <span className="brand-text">
            <span className="brand-name">TimLiu</span>
            <span className="brand-tag">{siteConfig.tagline[lang]}</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label={lang === 'zh' ? '页面' : 'Pages'}>
          {links.map((link) => {
            const active = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
              >
                {t(lang, link.key)}
              </Link>
            );
          })}
        </nav>
        <div className="nav-actions">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
