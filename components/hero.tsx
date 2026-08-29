"use client";

import { useState } from 'react';
import { AnimatedCharacter } from '@/components/animated-character';
import { siteConfig } from '@/lib/site-config';
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

export function Hero() {
  const { lang } = useLang();
  const [secretIndex, setSecretIndex] = useState(0);

  const cycleSecret = () => {
    setSecretIndex((current) => (current + 1) % hiddenLines[lang].length);
  };

  return (
    <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.28fr_1.08fr] lg:gap-18 lg:py-18">
      <div className="space-y-8 animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-[0.12em] text-foreground/65 shadow-soft sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-primary" />
          {t(lang, 'hero.badge')}
        </div>

        <div className="space-y-5">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[64px]">
            {t(lang, 'hero.greeting')} {siteConfig.name}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-foreground/70 sm:text-lg">
            {siteConfig.tagline[lang]}
            <br />
            {siteConfig.description[lang]}
          </p>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-foreground/55">{t(lang, 'hero.description')}</p>
      </div>

      <aside className="relative min-w-0 overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform duration-200 hover:-translate-y-0.5">
        <div className="absolute right-4 top-4 z-20 text-xs text-foreground/35">&lt;&gt; {t(lang, 'hero.geekMode')}</div>

        <div className="relative min-h-[330px] overflow-hidden border-b border-border bg-gradient-to-br from-background via-card to-muted px-6 pt-8 sm:min-h-[380px]">
          <div className="absolute left-6 top-7 z-20 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[11px] text-foreground/45 shadow-soft backdrop-blur">
            {lang === 'zh' ? '还在构建中' : 'still building'}
          </div>
          <button
            type="button"
            onClick={cycleSecret}
            className="animate-avatar-bubble absolute right-7 top-20 z-20 rounded-full border border-border bg-foreground px-3 py-1.5 font-mono text-[11px] text-background shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
            aria-label={lang === 'zh' ? '切换头像彩蛋' : 'Cycle avatar easter egg'}
            title={lang === 'zh' ? '点击切换彩蛋' : 'Click to cycle'}
          >
            {lang === 'zh' ? '点我' : 'click me'}
          </button>
          <div className="animate-avatar-scan absolute inset-x-8 top-1/2 h-px bg-primary/20" />
          <div className="relative mx-auto mt-7 h-[310px] max-w-[410px] sm:h-[370px] sm:max-w-[460px]">
            <AnimatedCharacter />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card via-card/80 to-transparent" />
            <div className="absolute bottom-2 left-1/2 h-8 w-44 -translate-x-1/2 rounded-full bg-foreground/10 blur-xl" />
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

          <a
            href="#projects"
            className="group flex items-center gap-1.5 text-xs text-foreground/40 transition-colors duration-200 hover:text-foreground/70"
          >
            <span className="font-mono">{t(lang, 'hero.seeProjects')}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
