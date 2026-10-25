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
  const stats = [`${formatCount(projectCount)} ${projectLabel}`];
  if (githubStars != null) {
    stats.push(`${formatCount(githubStars)} ${t(lang, 'hero.statStars')}`);
  }
  if (typeof xFollowerCount === 'number') {
    stats.push(`${formatCount(xFollowerCount)} ${t(lang, 'hero.statFollowers')}`);
  }

  return (
    <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.28fr_1.08fr] lg:gap-18 lg:py-18">
      <div className="space-y-8 animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-[0.12em] text-foreground/65 shadow-soft sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-primary" />
          {t(lang, 'hero.badge')}
        </div>

        <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {t(lang, 'hero.positioning')}
        </h1>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {t(lang, 'hero.seeProjects')}
          </a>
          <a
            href={followHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/80 transition-colors duration-200 hover:border-foreground/25 hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <XIcon className="h-3.5 w-3.5" />
            {t(lang, 'hero.followX')}
          </a>
        </div>

        <p className="font-mono text-sm text-foreground/55">{stats.join(' · ')}</p>
      </div>

      <aside className="relative min-w-0 overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform duration-200 hover:-translate-y-0.5">
        <div className="relative min-h-[330px] overflow-hidden border-b border-border px-6 sm:min-h-[380px]">
          <div className="relative mx-auto h-[330px] max-w-[430px] sm:h-[380px] sm:max-w-[500px]">
            <HeroAvatarImage
              onActivate={cycleSecret}
              ariaLabel={lang === 'zh' ? '点击卡通头像切换彩蛋' : 'Click the cartoon avatar to cycle the easter egg'}
            />
          </div>
        </div>

        <div className="space-y-6 p-6 sm:p-7 lg:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background font-mono text-sm text-foreground/70">
              {secretIndex === 0 ? 'TL' : '>'}
            </div>
            <div>
              <div className="text-sm font-medium">{siteConfig.name}</div>
              <div className="text-sm text-foreground/60">{t(lang, 'hero.subtitle')}</div>
            </div>
          </div>

          <div className="space-y-3 rounded-xl border border-border bg-background p-4 font-mono text-sm leading-7 text-foreground/80">
            <div>&gt; {t(lang, 'hero.focus')}</div>
            <div className="text-foreground/60">{hiddenLines[lang][secretIndex]}</div>
            <div>&gt; {t(lang, 'hero.mode')}</div>
            <div className="text-foreground/60">{t(lang, 'hero.modeValue')}</div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-background px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">{stat.label}</div>
                <div className="mt-1 text-sm text-foreground/75">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-foreground/70">
            {siteConfig.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-background px-3 py-1 transition-colors duration-200 hover:bg-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
