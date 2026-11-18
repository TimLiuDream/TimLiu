'use client';

import { useState } from 'react';
import { HeroAvatarImage } from '@/components/animated-3d-character';
import { GithubIcon, TelegramIcon, XIcon } from '@/components/icons';
import { projects } from '@/data/projects';
import { siteConfig, xFollowerCount } from '@/lib/site-config';
import { useLang } from './lang-provider';
import { t } from '@/lib/i18n';

const hiddenLines = {
  zh: [
    '构建。发布。打磨。',
    '有时最好的功能，是你没做的那个。',
    '保持小，保持锋利。',
    '先把最小闭环跑通，再让系统自己转起来。',
  ],
  en: [
    'Build. Ship. Refine.',
    'Sometimes the best feature is the one you did not add.',
    'Keep it small. Keep it sharp.',
    'Ship the loop first, then let the system compound.',
  ],
} as const;

function formatCount(value: number): string {
  return value.toLocaleString('en-US');
}

export function Hero({ githubStars }: { githubStars: number | null }) {
  const { lang } = useLang();
  const [secretIndex, setSecretIndex] = useState(0);
  const projectCount = projects.length;

  const tgContact = siteConfig.contacts.find((contact) => contact.label === 'Telegram');
  const tgHref = tgContact && 'href' in tgContact ? tgContact.href : 'https://t.me/dreamtimliu';

  const ghContact = siteConfig.contacts.find((contact) => contact.label === 'GitHub');
  const ghHref = ghContact && 'href' in ghContact ? ghContact.href : 'https://github.com/TimLiuDream';

  const xContact = siteConfig.contacts.find((contact) => contact.label === 'X');
  const xHref = xContact && 'href' in xContact ? xContact.href : 'https://x.com/timliu92';

  const cycleSecret = () => {
    setSecretIndex((current) => (current + 1) % hiddenLines[lang].length);
  };

  const projectLabel = t(lang, projectCount === 1 ? 'hero.statProject' : 'hero.statProjects');

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="status-pill rise d1">
          <span className="status-dot" aria-hidden="true" />
          <span>{t(lang, 'hero.badge')}</span>
        </div>

        <p className="hero-greeting rise d1">{t(lang, 'hero.greeting')}</p>
        <h1 className="display-title rise d2">{t(lang, 'hero.positioning')}</h1>
        <p className="hero-bio rise d3">{t(lang, 'hero.bio')}</p>

        <ul className="tags rise d3" aria-label="Focus areas">
          {siteConfig.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="hero-actions rise d4">
          <a className="btn btn-primary" href="#projects">
            {t(lang, 'hero.seeProjects')}
            <span aria-hidden="true">↓</span>
          </a>
          <a className="btn btn-ghost" href={tgHref} target="_blank" rel="noopener noreferrer">
            <TelegramIcon />
            {t(lang, 'hero.contactTg')}
          </a>
          <div className="hero-socials">
            <a
              className="social-icon-btn"
              href={ghHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              className="social-icon-btn"
              href={xHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              title="X"
            >
              <XIcon />
            </a>
          </div>
        </div>

        <div className="metrics rise d4">
          <div className="metric-item">
            <strong>{formatCount(projectCount)}</strong>
            <span>{projectLabel}</span>
          </div>
          {githubStars != null ? (
            <div className="metric-item">
              <strong>{formatCount(githubStars)}</strong>
              <span>{t(lang, 'hero.statStars')}</span>
            </div>
          ) : null}
          {typeof xFollowerCount === 'number' ? (
            <div className="metric-item">
              <strong>{formatCount(xFollowerCount)}</strong>
              <span>{t(lang, 'hero.statFollowers')}</span>
            </div>
          ) : null}
          <div className="metric-item">
            <strong>Go + AI</strong>
            <span>Core Stack</span>
          </div>
        </div>
      </div>

      <aside className="stage rise d5">
        <div className="builder-card">
          <div className="builder-bar" aria-hidden="true">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="window-title">tim@studio: ~/workspace</span>
            <span className="window-badge">#{secretIndex + 1}/4</span>
          </div>

          <div className="portrait">
            <HeroAvatarImage
              onActivate={cycleSecret}
              hint={t(lang, 'hero.clickHint')}
              ariaLabel={lang === 'zh' ? '点击卡通头像切换极客签名' : 'Click avatar to cycle status'}
            />
          </div>

          <div className="console-log">
            <p className="console-cmd">
              <span className="prompt">$</span> {t(lang, 'hero.focus')}
            </p>
            <p className="console-out">
              {hiddenLines[lang][secretIndex]}
              <span className="caret" aria-hidden="true">
                _
              </span>
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
