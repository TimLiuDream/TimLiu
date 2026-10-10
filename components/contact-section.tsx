'use client';

import { GithubIcon, TelegramIcon, XIcon, WeChatIcon } from './icons';
import { siteConfig } from '@/lib/site-config';
import { useLang } from './lang-provider';
import { t } from '@/lib/i18n';

const iconMap = {
  Telegram: TelegramIcon,
  GitHub: GithubIcon,
  X: XIcon,
  WeChat: WeChatIcon,
} as const;

export function ContactSection() {
  const { lang } = useLang();

  return (
    <section id="contact" className="border-t border-border py-14">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <h2 className="text-2xl font-semibold tracking-tight">{t(lang, 'contact.title')}</h2>
        <div className="space-y-4 text-foreground/75">
          <p>{t(lang, 'contact.description')}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {siteConfig.contacts.map((contact) => {
              const Icon = iconMap[contact.label];
              const isPrimary = 'primary' in contact && contact.primary;
              const label = contact.label === 'WeChat' ? t(lang, 'contact.wechat') : contact.label;
              const className = [
                'flex min-w-0 items-center gap-3 rounded-xl border px-4 py-3',
                isPrimary
                  ? 'border-primary/30 bg-primary/10 text-primary'
                  : 'border-border bg-card text-foreground/75',
                'href' in contact
                  ? 'transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
                  : '',
              ].join(' ');
              const content = (
                <>
                  <Icon className="h-5 w-5 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-medium">{label}</div>
                    <div className="break-all text-sm">{contact.value}</div>
                    {isPrimary && <div className="mt-1 text-xs">{t(lang, 'contact.preferred')}</div>}
                  </div>
                </>
              );

              return 'href' in contact ? (
                <a
                  key={contact.label}
                  className={className}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={contact.label} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
