'use client';

import Link from 'next/link';
import { LangToggle } from '@/components/lang-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/lib/site-config';
import { useLang } from './lang-provider';

export function Navbar() {
  const { lang } = useLang();

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">
          <span className="seal" aria-hidden="true">
            <span>TL</span>
            <span className="seal-dot" />
          </span>
          <span className="brand-text">
            <span className="brand-name">{siteConfig.name}</span>
            <span className="brand-tag">{siteConfig.tagline[lang]}</span>
          </span>
        </Link>
        <div className="nav-actions">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
