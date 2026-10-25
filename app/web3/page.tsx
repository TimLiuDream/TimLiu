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
      <header className="page-hero rise">
        <p className="eyebrow">/web3</p>
        <h1>{t(lang, 'web3.title')}</h1>
        <p>{t(lang, 'web3.subtitle')}</p>
      </header>
      <p className="callout">
        <span className="prompt">&gt; </span>
        {t(lang, 'web3.disclaimer')}
      </p>

      <div className="ledger-wrap reveal">
        <table className="ledger">
          <caption className="sr-only">{t(lang, 'web3.title')}</caption>
          <thead>
            <tr>
              <th scope="col">{t(lang, 'web3.project')}</th>
              <th scope="col">{t(lang, 'web3.cost')}</th>
              <th scope="col">{t(lang, 'web3.type')}</th>
              <th scope="col">{t(lang, 'web3.status')}</th>
              <th scope="col">{t(lang, 'web3.note')}</th>
              <th scope="col">{t(lang, 'web3.updated')}</th>
            </tr>
          </thead>
          <tbody>
            {web3Entries.map((entry) => {
              const linked = entry.url.trim().length > 0;
              const cost = costLabel(entry.cost, lang);
              return (
                <tr key={entry.name}>
                  <th scope="row" data-label={t(lang, 'web3.project')}>
                    {linked ? (
                      <a href={entry.url} target="_blank" rel="nofollow noopener">
                        {entry.name}
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    ) : (
                      <span>
                        {entry.name} <span className="todo">{t(lang, 'web3.todo')}</span>
                      </span>
                    )}
                  </th>
                  <td data-label={t(lang, 'web3.cost')}>
                    <span className={entry.cost === 'paid' ? 'pill pill-paid' : 'pill'}>{cost}</span>
                  </td>
                  <td data-label={t(lang, 'web3.type')}>{typeLabel(entry.type, lang)}</td>
                  <td data-label={t(lang, 'web3.status')}>{entry.status[lang]}</td>
                  <td data-label={t(lang, 'web3.note')}>{entry.note[lang]}</td>
                  <td data-label={t(lang, 'web3.updated')}>{entry.updated}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
