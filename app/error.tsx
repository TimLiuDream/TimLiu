'use client';

import { useEffect } from 'react';
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

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="gate">
      <span className="seal" aria-hidden="true">
        TL
      </span>
      <div className="gate-code">!</div>
      <h1>{t(lang, 'error.title')}</h1>
      <p>{t(lang, 'error.description')}</p>
      <button type="button" className="btn btn-primary" onClick={reset}>
        {t(lang, 'error.retry')}
      </button>
    </main>
  );
}
