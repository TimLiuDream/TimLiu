'use client';

import { useSyncExternalStore } from 'react';
import { useLang } from '@/components/lang-provider';
import { t } from '@/lib/i18n';

type Theme = 'light' | 'dark';

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function emit() {
  listeners.forEach((listener) => listener());
}

function readTheme(): Theme {
  try {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    return 'light';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
}

function subscribeMounted() {
  return () => {};
}

function getMountedSnapshot() {
  return true;
}

function getMountedServerSnapshot() {
  return false;
}

function getServerTheme(): Theme {
  return 'light';
}

function useMounted() {
  return useSyncExternalStore(subscribeMounted, getMountedSnapshot, getMountedServerSnapshot);
}

export function ThemeToggle() {
  const { lang } = useLang();
  const mounted = useMounted();
  const theme = useSyncExternalStore(subscribe, readTheme, getServerTheme);

  const commit = (nextTheme: Theme) => {
    const apply = () => {
      window.localStorage.setItem('theme', nextTheme);
      applyTheme(nextTheme);
      emit();
    };
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const start = (document as Document & { startViewTransition?: (cb: () => void) => void }).startViewTransition;
    if (!reduce && typeof start === 'function') start.call(document, apply);
    else apply();
  };

  return (
    <label className="theme-select">
      <select
        aria-label={t(lang, 'themeToggle.aria')}
        value={mounted ? theme : 'light'}
        onChange={(event) => commit(event.target.value === 'dark' ? 'dark' : 'light')}
      >
        <option value="light">{t(lang, 'themeToggle.light')}</option>
        <option value="dark">{t(lang, 'themeToggle.dark')}</option>
      </select>
    </label>
  );
}
