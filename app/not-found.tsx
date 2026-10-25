'use client';

import Link from 'next/link';
import { useLang } from '@/components/lang-provider';
import { t } from '@/lib/i18n';

export function NotFound() {
  const { lang } = useLang();

  return (
    <main className="gate">
      <span className="seal" aria-hidden="true">
        TL
      </span>
      <div className="gate-code">404</div>
      <h1>{t(lang, 'notFound.title')}</h1>
      <p>{t(lang, 'notFound.description')}</p>
      <Link className="btn btn-primary" href="/">
        {t(lang, 'notFound.back')}
      </Link>
    </main>
  );
}

export default NotFound;
