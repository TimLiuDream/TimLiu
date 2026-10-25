'use client';

import { PageShell } from '@/components/page-shell';
import { useLang } from '@/components/lang-provider';
import { t } from '@/lib/i18n';

export default function NowPage() {
  const { lang } = useLang();

  return (
    <PageShell>
      <div className="max-w-2xl py-14">
        <h1 className="text-2xl font-semibold tracking-tight">{t(lang, 'now.title')}</h1>
        <p className="mt-2 text-sm text-foreground/50">
          {t(lang, 'now.subtitle')}
        </p>

        <div className="mt-10 space-y-8 leading-8 text-foreground/75">
          <div>
            <div className="font-mono text-sm text-primary">&gt; web3_activity</div>
            <p className="mt-1 text-base">{t(lang, 'now.web3')}</p>
          </div>

          <div>
            <div className="font-mono text-sm text-primary">&gt; language_focus</div>
            <p className="mt-1 text-base">{t(lang, 'now.golang')}</p>
          </div>

          <div>
            <div className="font-mono text-sm text-primary">&gt; side_project</div>
            <p className="mt-1 text-base">
              {t(lang, 'now.project')} <a href="https://content-polish.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline decoration-foreground/20 underline-offset-2 transition-colors hover:decoration-foreground/60">ContentPolish</a> {t(lang, 'now.projectSuffix')}
            </p>
          </div>

          <div>
            <div className="font-mono text-sm text-primary">&gt; mindset</div>
            <p className="mt-1 text-base">{t(lang, 'now.mindset')}</p>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm text-foreground/50">
          <span>{t(lang, 'now.updated')}</span>
        </div>
      </div>
    </PageShell>
  );
}
