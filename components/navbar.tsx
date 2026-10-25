'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const [open, setOpen] = useState(false);
  const [openOn, setOpenOn] = useState(pathname);

  if (pathname !== openOn) {
    setOpenOn(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 880px)');
    const onDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onDesktop);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onDesktop);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const label = lang === 'zh' ? '页面' : 'Pages';
  const menuLabel = lang === 'zh' ? (open ? '关闭菜单' : '打开菜单') : open ? 'Close menu' : 'Open menu';

  return (
    <header className="nav">
      <div className="nav-island">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="seal" aria-hidden="true">
            TL
          </span>
          <span className="brand-text">
            <span className="brand-name">TimLiu</span>
            <span className="brand-tag">{siteConfig.tagline[lang]}</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label={label}>
          {links.map((link) => {
            const active = link.href === pathname;
            return (
              <Link key={link.href} href={link.href} aria-current={active ? 'page' : undefined}>
                {t(lang, link.key)}
              </Link>
            );
          })}
        </nav>
        <div className="nav-actions">
          <LangToggle />
          <ThemeToggle />
        </div>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="sr-only">{menuLabel}</span>
        </button>
      </div>
      <div
        id="site-menu"
        className={open ? 'nav-overlay is-open' : 'nav-overlay'}
        inert={!open}
        aria-hidden={open ? undefined : true}
      >
        <nav aria-label={label}>
          {links.map((link) => {
            const active = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {t(lang, link.key)}
              </Link>
            );
          })}
          <div className="nav-overlay-actions">
            <LangToggle />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
