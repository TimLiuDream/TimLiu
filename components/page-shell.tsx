'use client';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { RevealObserver } from '@/components/reveal-observer';
import { siteConfig } from '@/lib/site-config';
import { useLang } from './lang-provider';

export function PageShell({ children }: { children: React.ReactNode }) {
  const { lang } = useLang();

  return (
    <div className="site">
      <a className="skip" href="#content">
        {lang === 'zh' ? '跳到内容' : 'Skip to content'}
      </a>
      <Navbar />
      <RevealObserver />
      <main id="content" className="site-main">
        {children}
      </main>
      <Footer />
      <p className="spine" aria-hidden="true">
        {siteConfig.tagline[lang]}
      </p>
    </div>
  );
}
