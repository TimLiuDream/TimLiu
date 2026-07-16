'use client';

import { useLang } from '@/components/lang-provider';
import { t } from '@/lib/i18n';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { lang } = useLang();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-5 text-center">
      <div className="font-mono text-5xl text-foreground/20">!</div>
      <h1 className="text-xl font-semibold tracking-tight text-foreground">{t(lang, 'error.title')}</h1>
      <p className="max-w-sm text-sm leading-6 text-foreground/55">{error.message || ''}</p>
      <button
        type="button"
        onClick={reset}
        className="mt-2 rounded-xl border border-border bg-card px-4 py-2 text-sm text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground"
      >
        {t(lang, 'error.retry')}
      </button>
    </main>
  );
}