'use client';

import { siteConfig } from '@/lib/site-config';
import { useLang } from './lang-provider';
import { t } from '@/lib/i18n';

export function AboutSection() {
  const { lang } = useLang();

  return (
    <section id="about" className="chapter reveal">
      <div className="chapter-layout">
        <div className="chapter-kicker">
          <span className="chapter-index">01</span>
          <h2>{t(lang, 'about.title')}</h2>
        </div>
        <div className="chapter-body measure">
          <p>{siteConfig.about[lang]}</p>
          <p className="terminal-line">
            <span className="prompt">&gt; </span>
            {t(lang, 'about.stillTinkering')}
            <span className="caret" aria-hidden="true">
              _
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
