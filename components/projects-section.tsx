'use client';

import { projects, type Project, type ProjectLink } from '@/data/projects';
import type { Lang } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { useLang } from './lang-provider';

const cardClassName =
  'group block rounded-xl border border-border bg-card px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted';

function liveLinks(project: Project): ProjectLink[] {
  return project.links.filter((link) => link.href.trim().length > 0);
}

function ProjectBody({
  project,
  lang,
  showTodo,
  showArrow,
}: {
  project: Project;
  lang: Lang;
  showTodo: boolean;
  showArrow: boolean;
}) {
  return (
    <>
      {project.screenshot ? (
        // Screenshots are optional paths from the data file, including future remote URLs.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.screenshot}
          alt={lang === 'zh' ? `${project.name} 截图` : `${project.name} screenshot`}
          className="mb-3 aspect-video w-full rounded-lg border border-border object-cover"
        />
      ) : null}
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-medium text-foreground/90 group-hover:text-primary">
          {project.name}
        </span>
        {showTodo ? (
          <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] tracking-wide text-foreground/45">
            {t(lang, 'tools.todo')}
          </span>
        ) : null}
        {showArrow ? (
          <span className="ml-auto text-foreground/30 transition-colors group-hover:text-foreground/60">↗</span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-6 text-foreground/70">{project.problem[lang]}</p>
      {project.metric ? (
        <p className="mt-2 font-mono text-xs text-foreground/55">{project.metric[lang]}</p>
      ) : null}
    </>
  );
}

function linkLabel(link: ProjectLink, lang: Lang): string {
  return link.label?.[lang] ?? t(lang, 'projects.open');
}

export function ProjectsSection() {
  const { lang } = useLang();

  return (
    <section id="projects" className="border-t border-border py-14">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <h2 className="text-2xl font-semibold tracking-tight">{t(lang, 'projects.title')}</h2>
        <div className="space-y-4 text-foreground/75">
          <p>{t(lang, 'projects.description')}</p>
          <div className="grid gap-3">
            {projects.map((project) => {
              const links = liveLinks(project);

              if (links.length === 1) {
                return (
                  <a
                    key={project.id}
                    id={project.id}
                    href={links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClassName}
                  >
                    <ProjectBody project={project} lang={lang} showTodo={false} showArrow />
                  </a>
                );
              }

              return (
                <article key={project.id} id={project.id} className={cardClassName}>
                  <ProjectBody project={project} lang={lang} showTodo={links.length === 0} showArrow={false} />
                  {links.length > 1 ? (
                    <div className="mt-3 flex flex-wrap gap-3 text-xs">
                      {links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/60 underline decoration-foreground/20 underline-offset-2 transition-colors hover:text-foreground"
                        >
                          {linkLabel(link, lang)}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
