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
    <section id="contact" className="chapter reveal">
      <div className="chapter-layout">
        <div className="chapter-kicker">
          <span className="chapter-index">03</span>
          <h2>{t(lang, 'contact.title')}</h2>
        </div>
        <div>
          <p className="chapter-intro measure">{t(lang, 'contact.description')}</p>
          <div className="contact-grid">
            {siteConfig.contacts.map((contact) => {
              const Icon = iconMap[contact.label];
              const isPrimary = 'primary' in contact && contact.primary;
              const label = contact.label === 'WeChat' ? t(lang, 'contact.wechat') : contact.label;
              const className = isPrimary ? 'contact-card is-primary' : 'contact-card';
              const content = (
                <>
                  <Icon />
                  <div>
                    <div className="contact-label">{label}</div>
                    <div className="contact-value">{contact.value}</div>
                    {isPrimary ? <div className="contact-note">{t(lang, 'contact.preferred')}</div> : null}
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
