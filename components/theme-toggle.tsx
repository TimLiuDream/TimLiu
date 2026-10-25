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

  const toggleTheme = () => {
    const nextTheme = readTheme() === 'dark' ? 'light' : 'dark';
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

  const label = mounted
    ? theme === 'dark'
      ? t(lang, 'themeToggle.dark')
      : t(lang, 'themeToggle.light')
    : t(lang, 'themeToggle.theme');

  return (
    <button
      type="button"
      aria-label={t(lang, 'themeToggle.aria')}
      onClick={toggleTheme}
      className="icon-btn"
    >
      <span className="font-mono">{mounted ? (theme === 'dark' ? '☾' : '☀') : '◐'}</span>
      <span>{label}</span>
    </button>
  );
}
