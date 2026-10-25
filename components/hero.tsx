'use client';

import { useState } from 'react';
import { HeroAvatarImage } from '@/components/animated-3d-character';
import { XIcon } from '@/components/icons';
import { projects } from '@/data/projects';
import { siteConfig, xFollowerCount } from '@/lib/site-config';
import { useLang } from './lang-provider';
import { t } from '@/lib/i18n';

const hiddenLines = {
  zh: [
    '构建。发布。打磨。',
    '有时最好的功能，是你没做的那个。',
    '保持小，保持锋利。',
    '还在折腾……',
  ],
  en: [
    'Build. Ship. Refine.',
    'Sometimes the best feature is the one you did not add.',
    'Keep it small. Keep it sharp.',
    'Still tinkering...',
  ],
} as const;

function formatCount(value: number): string {
  return value.toLocaleString('en-US');
}

export function Hero({ githubStars }: { githubStars: number | null }) {
  const { lang } = useLang();
  const [secretIndex, setSecretIndex] = useState(0);
  const projectCount = projects.length;
  const xHref = siteConfig.contacts.find((contact) => contact.label === 'X');
  const followHref = xHref && 'href' in xHref ? xHref.href : 'https://x.com/timliu92';

  const cycleSecret = () => {
    setSecretIndex((current) => (current + 1) % hiddenLines[lang].length);
  };

  const projectLabel = t(lang, projectCount === 1 ? 'hero.statProject' : 'hero.statProjects');

  return (
    <div className="hero">
      <div className="hero-col">
        <div className="hero-lead">
        <p className="kicker rise d1">
          <span className="mark-sq" aria-hidden="true" />
          {t(lang, 'hero.badge')}
        </p>
          <h1 className="display-title rise d2">{t(lang, 'hero.positioning')}</h1>
        </div>
        <div className="hero-copy">
        <div className="hero-actions rise d3">
          <a className="btn btn-primary" href="#projects">
            {t(lang, 'hero.seeProjects')}
          </a>
          <a className="btn btn-text" href={followHref} target="_blank" rel="noopener noreferrer">
            <XIcon />
            {t(lang, 'hero.followX')}
          </a>
        </div>
        <div className="metrics rise d4">
          <div>
            <strong>{formatCount(projectCount)}</strong>
            <span>{projectLabel}</span>
          </div>
          {githubStars != null ? (
            <div>
              <strong>{formatCount(githubStars)}</strong>
              <span>{t(lang, 'hero.statStars')}</span>
            </div>
          ) : null}
          {typeof xFollowerCount === 'number' ? (
            <div>
              <strong>{formatCount(xFollowerCount)}</strong>
              <span>{t(lang, 'hero.statFollowers')}</span>
            </div>
          ) : null}
        </div>
        </div>
      </div>

      <aside className="stage rise d5">
        <div className="portrait">
          <HeroAvatarImage
            onActivate={cycleSecret}
            ariaLabel={lang === 'zh' ? '点击卡通头像切换彩蛋' : 'Click the cartoon avatar to cycle the easter egg'}
          />
        </div>

        <div className="console">
          <div className="console-head">
            <div className="prompt-mark" aria-hidden="true">
              {secretIndex === 0 ? 'TL' : '>'}
            </div>
            <div>
              <div className="console-name">{siteConfig.name}</div>
              <div className="console-sub">{t(lang, 'hero.subtitle')}</div>
            </div>
          </div>
          <div className="console-log">
            <p>
              <span className="prompt">&gt; </span>
              {t(lang, 'hero.focus')}
            </p>
            <p className="console-out">
              {hiddenLines[lang][secretIndex]}
              <span className="caret" aria-hidden="true">
                _
              </span>
            </p>
            <p>
              <span className="prompt">&gt; </span>
              {t(lang, 'hero.mode')}
            </p>
            <p className="console-out">{t(lang, 'hero.modeValue')}</p>
          </div>
          <dl className="meta-row">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="tags">
          {siteConfig.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
