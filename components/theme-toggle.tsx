"use client";

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
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

  return (
    <button
      type="button"
      aria-label="切换暗色模式"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground"
    >
      <span className="font-mono">{mounted ? (theme === 'dark' ? '☾' : '☀') : '◐'}</span>
      <span>{mounted ? (theme === 'dark' ? 'Dark' : 'Light') : 'Theme'}</span>
    </button>
  );
}
