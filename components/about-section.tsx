'use client';

import { siteConfig } from '@/lib/site-config';
import { useLang } from './lang-provider';
import { t } from '@/lib/i18n';

const pillars = [
  { num: '01', titleKey: 'about.p1Title', descKey: 'about.p1Desc' },
  { num: '02', titleKey: 'about.p2Title', descKey: 'about.p2Desc' },
  { num: '03', titleKey: 'about.p3Title', descKey: 'about.p3Desc' },
] as const;

export function AboutSection() {
  const { lang } = useLang();

  return (
    <section id="about" className="chapter reveal">
      <div className="section-header">
        <div>
          <p className="eyebrow">02 // {t(lang, 'about.eyebrow')}</p>
          <h2>{t(lang, 'about.title')}</h2>
        </div>
        <p className="section-sub">{siteConfig.about[lang]}</p>
      </div>

      <div className="ethos-grid">
        {pillars.map((pillar) => (
          <article key={pillar.num} className="ethos-card">
            <span className="ethos-num">{pillar.num}</span>
            <h3>{t(lang, pillar.titleKey)}</h3>
            <p>{t(lang, pillar.descKey)}</p>
          </article>
        ))}
      </div>

      <p className="terminal-line">
        <span className="prompt">$</span> {t(lang, 'about.stillTinkering')}
        <span className="caret" aria-hidden="true">
          _
        </span>
      </p>
    </section>
  );
}
