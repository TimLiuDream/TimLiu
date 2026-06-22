"use client";

import { useState } from 'react';
import { siteConfig } from '@/lib/site-config';

const hiddenLines = [
  'Build. Ship. Refine.',
  'Sometimes the best feature is the one you did not add.',
  'Keep it small. Keep it sharp.',
  'Still tinkering...',
];

export function Hero() {
  const [secretIndex, setSecretIndex] = useState(0);

  const cycleSecret = () => {
    setSecretIndex((current) => (current + 1) % hiddenLines.length);
  };

  return (
    <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.28fr_1.08fr] lg:gap-18 lg:py-18">
      <div className="space-y-8 animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-[0.12em] text-foreground/65 shadow-soft sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-primary" />
          GITHUB STYLE • MINIMAL PERSONAL HOMEPAGE
        </div>

        <div className="space-y-5">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[64px]">
            你好，我是 {siteConfig.name}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-foreground/70 sm:text-lg">
            {siteConfig.tagline}
            <br />
            {siteConfig.description}
          </p>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-foreground/55">这个站点是我的个人主场，用来介绍我自己，也记录我在做的事。</p>
      </div>

      <aside className="relative min-w-0 rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform duration-200 hover:-translate-y-0.5 sm:p-7 lg:p-8">
        <div className="absolute right-4 top-4 text-xs text-foreground/35">&lt;&gt; geek mode</div>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={cycleSecret}
              className="group relative h-16 w-16 overflow-hidden rounded-2xl border border-border bg-background transition-transform duration-200 hover:rotate-3"
              aria-label="切换头像彩蛋"
              title="点击切换彩蛋"
            >
              <img
                src="/avatar.jpg"
                alt={siteConfig.name}
                className="h-full w-full object-cover transition-opacity duration-200 group-hover:opacity-90"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-background/0 text-[11px] font-mono text-foreground/0 transition-all duration-200 group-hover:bg-background/60 group-hover:text-foreground/80">
                {secretIndex === 0 ? 'TL' : '>'}
              </span>
            </button>
            <div>
              <div className="text-sm font-medium">{siteConfig.name}</div>
              <div className="text-sm text-foreground/60">Web3 / 独立开发 / 代码折腾</div>
            </div>
          </div>

          <div className="space-y-3 rounded-xl border border-border bg-background p-4 font-mono text-sm leading-7 text-foreground/80">
            <div>&gt; current_focus</div>
            <div className="text-foreground/60">{hiddenLines[secretIndex]}</div>
            <div>&gt; favorite_mode</div>
            <div className="text-foreground/60">Minimal, useful, maintainable.</div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
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
