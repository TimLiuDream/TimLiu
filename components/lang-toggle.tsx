'use client';

import { useLang } from './lang-provider';
import { t } from '@/lib/i18n';

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
      className="inline-flex items-center gap-1 rounded-xl border border-border bg-card px-2.5 py-2 text-xs text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground"
      aria-label={t(lang, 'langToggle.aria')}
      title={t(lang, 'langToggle.switchTo')}
    >
      <span className="font-mono">{lang === 'zh' ? 'EN' : '中'}</span>
    </button>
  );
}