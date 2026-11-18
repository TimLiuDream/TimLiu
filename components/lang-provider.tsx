'use client';

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from 'react';
import type { Lang } from '@/lib/i18n';

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
} | null>(null);

const listeners = new Set<() => void>();

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem('lang');
    return stored === 'en' || stored === 'zh' ? stored : 'zh';
  } catch {
    return 'zh';
  }
}

function applyLang(lang: Lang) {
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === 'lang' || event.key === null) {
      applyLang(readStoredLang());
      listener();
    }
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', onStorage);
  };
}

function emit() {
  listeners.forEach((listener) => listener());
}

function getServerLang(): Lang {
  return 'zh';
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readStoredLang, getServerLang);

  useEffect(() => {
    applyLang(readStoredLang());
  }, []);

  const setLang = useCallback((next: Lang) => {
    localStorage.setItem('lang', next);
    applyLang(next);
    emit();
  }, []);

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
