'use client';

import Link from 'next/link';
import { useLang } from '@/components/lang-provider';
import { t } from '@/lib/i18n';

export default function NowPage() {
  const { lang } = useLang();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-[calc(100vw-25px)] flex-col px-5 py-6 sm:px-6 lg:max-w-[calc(100vw-100px)] lg:px-10">
        <nav className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xs text-foreground/40 transition-colors hover:text-foreground/70"
          >
            ← {t(lang, 'now.back')}
          </Link>
        </nav>

        <div className="max-w-2xl">
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
                {t(lang, 'now.project')} <a href="https://content-polish.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline decoration-foreground/20 underline-offset-2 transition-colors hover:decoration-foreground/60">ContentPolish</a> —— 一个内容打磨工具，已部署到 Vercel。
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
      </section>
    </main>
  );
}