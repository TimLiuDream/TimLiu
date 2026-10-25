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
    <main className="gate">
      <span className="seal" aria-hidden="true">
        TL
      </span>
      <h1>{t(lang, 'error.title')}</h1>
      <p>{error.message || ''}</p>
      <button type="button" className="btn btn-primary" onClick={reset}>
        {t(lang, 'error.retry')}
      </button>
    </main>
  );
}
