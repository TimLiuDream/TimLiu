'use client';

import { useState } from 'react';
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
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
      window.setTimeout(() => {
        setCopiedLabel((current) => (current === label ? null : current));
      }, 2000);
    } catch {
      // Ignore clipboard permission failure silently.
    }
  };

  return (
    <section id="contact" className="chapter reveal">
      <div className="section-header">
        <div>
          <p className="eyebrow">03 // {t(lang, 'contact.eyebrow')}</p>
          <h2>{t(lang, 'contact.title')}</h2>
        </div>
        <p className="section-sub">{t(lang, 'contact.description')}</p>
      </div>

      <div className="contact-grid">
        {siteConfig.contacts.map((contact) => {
          const Icon = iconMap[contact.label];
          const isPrimary = 'primary' in contact && contact.primary;
          const isCopied = copiedLabel === contact.label;
          const label = contact.label === 'WeChat' ? t(lang, 'contact.wechat') : contact.label;
          const className = isPrimary ? 'contact-card is-primary' : 'contact-card';

          let note = '';
          if (isPrimary) note = t(lang, 'contact.preferred');
          else if (contact.label === 'GitHub') note = t(lang, 'contact.githubNote');
          else if (contact.label === 'X') note = t(lang, 'contact.xNote');
          else if (contact.label === 'WeChat') {
            note = isCopied ? `✓ ${t(lang, 'contact.copied')}` : t(lang, 'contact.copyHint');
          }

          if ('href' in contact) {
            return (
              <a
                key={contact.label}
                className={className}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon-wrap">
                  <Icon />
                </div>
                <div className="contact-meta">
                  <div className="contact-label">{label}</div>
                  <div className="contact-value">{contact.value}</div>
                  {note ? <div className="contact-note">{note}</div> : null}
                </div>
                <span className="contact-action-mark" aria-hidden="true">
                  ↗
                </span>
              </a>
            );
          }

          return (
            <button
              key={contact.label}
              type="button"
              className={`${className} is-copyable${isCopied ? ' is-copied' : ''}`}
              onClick={() => handleCopy(contact.label, contact.value)}
            >
              <div className="contact-icon-wrap">
                <Icon />
              </div>
              <div className="contact-meta">
                <div className="contact-label">{label}</div>
                <div className="contact-value">{contact.value}</div>
                {note ? <div className="contact-note">{note}</div> : null}
              </div>
              <span className="contact-action-mark" aria-hidden="true">
                {isCopied ? '✓' : '⧉'}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
