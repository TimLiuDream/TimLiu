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
      <header className="page-hero rise">
        <p className="eyebrow">/tools</p>
        <h1>{t(lang, 'tools.title')}</h1>
        <p>{t(lang, 'tools.subtitle')}</p>
      </header>

      <div className="filters" role="group" aria-label={t(lang, 'tools.title')}>
        <button type="button" onClick={() => setCategory('all')} className="filter" aria-pressed={category === 'all'}>
          {t(lang, 'tools.all')}
        </button>
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className="filter"
            aria-pressed={category === item}
          >
            {toolCategoryLabel(item, lang)}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="empty">
          <p>{t(lang, 'tools.subtitle')}</p>
          <button type="button" className="btn btn-primary" onClick={() => setCategory('all')}>
            {t(lang, 'tools.all')}
          </button>
        </div>
      ) : null}
      <div className="tool-grid reveal">
        {visible.map((tool) => {
          const linked = tool.url.trim().length > 0;
          const body = (
            <>
              <h2>
                {tool.name}
                {linked ? <span aria-hidden="true"> ↗</span> : null}
              </h2>
              <p>{tool.desc[lang]}</p>
            </>
          );
          return (
            <article key={tool.name} className="tool-card">
              <div className="tool-meta">
                <span className="tool-cat">{toolCategoryLabel(tool.category, lang)}</span>
                {linked ? null : <span className="todo">{t(lang, 'tools.todo')}</span>}
              </div>
              {linked ? (
                <a className="tool-hit" href={tool.url} target="_blank" rel="noopener noreferrer">
                  {body}
                </a>
              ) : (
                <div className="tool-hit">{body}</div>
              )}
              {tool.tweet.trim().length > 0 ? (
                <a className="quiet-link" href={tool.tweet} target="_blank" rel="noopener noreferrer">
                  {t(lang, 'tools.tweet')}
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </PageShell>
  );
}
