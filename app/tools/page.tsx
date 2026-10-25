'use client';

import { useState } from 'react';
import { PageShell } from '@/components/page-shell';
import { toolCategoryLabel, tools } from '@/data/tools';
import { t } from '@/lib/i18n';
import { useLang } from '@/components/lang-provider';

const categories = tools.reduce<string[]>((seen, tool) => {
  if (!seen.includes(tool.category)) seen.push(tool.category);
  return seen;
}, []);

export default function ToolsPage() {
  const { lang } = useLang();
  const [category, setCategory] = useState<string>('all');
  const visible = category === 'all' ? tools : tools.filter((tool) => tool.category === category);

  return (
    <PageShell>
      <div className="py-14">
        <h1 className="text-2xl font-semibold tracking-tight">{t(lang, 'tools.title')}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/60">{t(lang, 'tools.subtitle')}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory('all')}
            className={filterClass(category === 'all')}
            aria-pressed={category === 'all'}
          >
            {t(lang, 'tools.all')}
          </button>
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={filterClass(category === item)}
              aria-pressed={category === item}
            >
              {toolCategoryLabel(item, lang)}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-3">
          {visible.map((tool) => {
            const linked = tool.url.trim().length > 0;
            return (
              <article
                key={tool.name}
                className="rounded-xl border border-border bg-card px-4 py-4 transition-colors duration-200 hover:border-foreground/25 hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  {linked ? (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-medium text-foreground/90 transition-colors hover:text-primary"
                    >
                      {tool.name}
                    </a>
                  ) : (
                    <span className="font-mono text-sm font-medium text-foreground/90">{tool.name}</span>
                  )}
                  <span className="text-xs text-foreground/45">{toolCategoryLabel(tool.category, lang)}</span>
                  {linked ? (
                    <span className="ml-auto text-foreground/30">↗</span>
                  ) : (
                    <span className="ml-auto rounded-full border border-border px-2 py-0.5 font-mono text-[10px] tracking-wide text-foreground/45">
                      {t(lang, 'tools.todo')}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-6 text-foreground/70">{tool.desc[lang]}</p>
                {tool.tweet.trim().length > 0 ? (
                  <a
                    href={tool.tweet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-xs text-foreground/50 underline decoration-foreground/20 underline-offset-2 transition-colors hover:text-foreground/80"
                  >
                    {t(lang, 'tools.tweet')}
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}

function filterClass(active: boolean): string {
  return [
    'rounded-full border px-3 py-1 text-xs transition-colors duration-200',
    active
      ? 'border-foreground/30 bg-muted text-foreground'
      : 'border-border bg-background text-foreground/60 hover:bg-muted hover:text-foreground',
  ].join(' ');
}
