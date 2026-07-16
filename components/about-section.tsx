'use client';

import { siteConfig } from '@/lib/site-config';
import { useLang } from './lang-provider';
import { t } from '@/lib/i18n';

export function AboutSection() {
  const { lang } = useLang();

  return (
    <section id="about" className="border-t border-border py-14">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <h2 className="text-2xl font-semibold tracking-tight">{t(lang, 'about.title')}</h2>
        <div className="space-y-4 leading-8 text-foreground/75">
          <p>{siteConfig.about}</p>
          <p>{siteConfig.description}</p>
          <div className="rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm text-foreground/70">
            &gt; {t(lang, 'about.stillTinkering')}
            <span className="animate-cursor-blink">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}