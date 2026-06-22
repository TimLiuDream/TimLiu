import { GithubIcon, TelegramIcon, TwitterIcon } from './icons';
import { siteConfig } from '@/lib/site-config';

const iconMap = {
  Telegram: TelegramIcon,
  GitHub: GithubIcon,
  Twitter: TwitterIcon,
} as const;

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border py-14">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <h2 className="text-2xl font-semibold tracking-tight">联系方式</h2>
        <div className="space-y-4 text-foreground/75">
          <p>如果你想聊合作、项目、想法，欢迎联系我。</p>
          <div className="flex flex-wrap gap-3">
            {siteConfig.contacts.map((contact) => {
              const Icon = iconMap[contact.label as keyof typeof iconMap];
              return (
                <a
                  key={contact.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted hover:text-foreground"
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={contact.label}
                  title={contact.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
