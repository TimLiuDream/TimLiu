'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { Lang } from '@/lib/i18n';

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
} | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('zh');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored === 'en' || stored === 'zh') {
      setLangState(stored);
      document.documentElement.lang = stored === 'en' ? 'en' : 'zh-CN';
    }
    setMounted(true);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem('lang', next);
    document.documentElement.lang = next === 'en' ? 'en' : 'zh-CN';
  }, []);

  if (!mounted) {
    return (
      <LangContext.Provider value={{ lang: 'zh', setLang }}>
        {children}
      </LangContext.Provider>
    );
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}