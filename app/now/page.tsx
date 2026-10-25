'use client';

import { PageShell } from '@/components/page-shell';
import { useLang } from '@/components/lang-provider';
import { t } from '@/lib/i18n';

export default function NowPage() {
  const { lang } = useLang();

  return (
    <PageShell>
      <div className="now-layout chapter-layout">
        <header className="page-hero rise">
          <p className="eyebrow">{t(lang, 'now.subtitle')}</p>
          <h1>{t(lang, 'now.title')}</h1>
        </header>
        <div>
          <ol className="timeline">
            <li className="reveal">
              <h2>&gt; web3_activity</h2>
              <p>{t(lang, 'now.web3')}</p>
            </li>
            <li className="reveal">
              <h2>&gt; language_focus</h2>
              <p>{t(lang, 'now.golang')}</p>
            </li>
            <li className="reveal">
              <h2>&gt; side_project</h2>
              <p>
                {t(lang, 'now.project')}{' '}
                <a
                  className="quiet-link"
                  href="https://content-polish.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ContentPolish
                </a>{' '}
                {t(lang, 'now.projectSuffix')}
              </p>
            </li>
            <li className="reveal">
              <h2>&gt; mindset</h2>
              <p>{t(lang, 'now.mindset')}</p>
            </li>
          </ol>
          <p className="stamp">{t(lang, 'now.updated')}</p>
        </div>
      </div>
    </PageShell>
  );
}
