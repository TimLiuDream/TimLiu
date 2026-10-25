'use client';

import { useLang } from './lang-provider';
import { t } from '@/lib/i18n';

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
      className="icon-btn"
      aria-label={t(lang, 'langToggle.aria')}
      title={t(lang, 'langToggle.switchTo')}
    >
      <span className="font-mono">{lang === 'zh' ? 'EN' : '中'}</span>
    </button>
  );
}