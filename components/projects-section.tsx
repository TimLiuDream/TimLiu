'use client';

import { siteConfig } from '@/lib/site-config';
import { useLang } from './lang-provider';
import { t } from '@/lib/i18n';

export function ProjectsSection() {
  const { lang } = useLang();

  return (
    <section id="projects" className="border-t border-border py-14">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <h2 className="text-2xl font-semibold tracking-tight">{t(lang, 'projects.title')}</h2>
        <div className="space-y-4 text-foreground/75">
          <p>{t(lang, 'projects.description')}</p>
          <div className="grid gap-3">
            {siteConfig.projects.map((project) => (
              <a
                key={project.name}
                id={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-border bg-card px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-medium text-foreground/90 group-hover:text-primary">
                    {project.name}
                  </span>
                  <span className="text-sm text-foreground/50">
                    {'// '}
                    {project.description[lang]}
                  </span>
                  <span className="ml-auto text-foreground/30 transition-colors group-hover:text-foreground/60">
                    ↗
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-foreground/60">{project.details[lang]}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
