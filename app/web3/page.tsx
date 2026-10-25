'use client';

import { PageShell } from '@/components/page-shell';
import { web3Entries, type Web3Cost, type Web3Type } from '@/data/web3';
import { t, type Lang } from '@/lib/i18n';
import { useLang } from '@/components/lang-provider';

function costLabel(cost: Web3Cost, lang: Lang): string {
  if (cost === 'free') return t(lang, 'web3.costFree');
  if (cost === 'gas') return t(lang, 'web3.costGas');
  return t(lang, 'web3.costPaid');
}

function typeLabel(type: Web3Type, lang: Lang): string {
  return t(lang, type === 'trading' ? 'web3.typeTrading' : 'web3.typeNonTrading');
}

export default function Web3Page() {
  const { lang } = useLang();

  return (
    <PageShell>
      <div className="py-14">
        <h1 className="text-2xl font-semibold tracking-tight">{t(lang, 'web3.title')}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/60">{t(lang, 'web3.subtitle')}</p>
        <p className="mt-6 max-w-3xl rounded-xl border border-border bg-card px-4 py-3 text-sm leading-7 text-foreground/75">
          <span className="font-mono text-foreground/45">&gt; </span>
          {t(lang, 'web3.disclaimer')}
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead className="bg-card text-[11px] uppercase tracking-[0.14em] text-foreground/45">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">{t(lang, 'web3.project')}</th>
                <th scope="col" className="px-4 py-3 font-medium">{t(lang, 'web3.cost')}</th>
                <th scope="col" className="px-4 py-3 font-medium">{t(lang, 'web3.type')}</th>
                <th scope="col" className="px-4 py-3 font-medium">{t(lang, 'web3.status')}</th>
                <th scope="col" className="px-4 py-3 font-medium">{t(lang, 'web3.note')}</th>
                <th scope="col" className="px-4 py-3 font-medium">{t(lang, 'web3.updated')}</th>
              </tr>
            </thead>
            <tbody>
              {web3Entries.map((entry) => {
                const linked = entry.url.trim().length > 0;
                return (
                  <tr key={entry.name} className="border-t border-border align-top">
                    <th scope="row" className="px-4 py-3 font-medium text-foreground/90">
                      {linked ? (
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="nofollow noopener"
                          className="transition-colors hover:text-primary"
                        >
                          {entry.name}
                          <span className="ml-1 text-foreground/30">↗</span>
                        </a>
                      ) : (
                        <span>
                          {entry.name}
                          <span className="ml-2 font-mono text-[10px] tracking-wide text-foreground/45">
                            {t(lang, 'web3.todo')}
                          </span>
                        </span>
                      )}
                    </th>
                    <td className="px-4 py-3 text-foreground/70">{costLabel(entry.cost, lang)}</td>
                    <td className="px-4 py-3 text-foreground/70">{typeLabel(entry.type, lang)}</td>
                    <td className="px-4 py-3 text-foreground/70">{entry.status[lang]}</td>
                    <td className="px-4 py-3 text-foreground/60">{entry.note[lang]}</td>
                    <td className="px-4 py-3 font-mono text-xs text-foreground/50">{entry.updated}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}
