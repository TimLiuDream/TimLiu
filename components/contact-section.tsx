'use client';

import { GithubIcon, TelegramIcon, TwitterIcon } from './icons';
import { siteConfig } from '@/lib/site-config';
import { useLang } from './lang-provider';
import { t } from '@/lib/i18n';

const iconMap = {
  Telegram: TelegramIcon,
  GitHub: GithubIcon,
  Twitter: TwitterIcon,
} as const;

export function ContactSection() {
  const { lang } = useLang();

  return (
    <section id="contact" className="border-t border-border py-14">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <h2 className="text-2xl font-semibold tracking-tight">{t(lang, 'contact.title')}</h2>
        <div className="space-y-4 text-foreground/75">
          <p>{t(lang, 'contact.description')}</p>
          <div className="flex flex-wrap items-center gap-3">
            {siteConfig.contacts.map((contact) => {
              const Icon = iconMap[contact.label as keyof typeof iconMap];
              const isPrimary = 'primary' in contact;
              return (
                <a
                  key={contact.label}
                  className={`inline-flex items-center justify-center rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                    isPrimary
                      ? 'h-11 gap-2 border-primary/30 bg-primary/10 px-4 text-primary hover:border-primary/50 hover:bg-primary/15'
                      : 'h-11 w-11 border-border bg-card text-foreground/70 hover:border-foreground/25 hover:bg-muted hover:text-foreground'
                  }`}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={contact.label}
                  title={contact.label}
                >
                  <Icon className="h-5 w-5" />
                  {isPrimary && <span className="text-xs font-medium">{t(lang, 'contact.telegram')}</span>}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}