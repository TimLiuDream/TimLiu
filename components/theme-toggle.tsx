'use client';

import { useEffect, useState } from 'react';
import { useLang } from '@/components/lang-provider';
import { t } from '@/lib/i18n';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
  const { lang } = useLang();
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextTheme = stored ?? (prefersDark ? 'dark' : 'light');
    setTheme(nextTheme);
    applyTheme(nextTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
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
      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground"
    >
      <span className="font-mono">{mounted ? (theme === 'dark' ? '☾' : '☀') : '◐'}</span>
      <span>{label}</span>
    </button>
  );
}
