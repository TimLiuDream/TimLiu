'use client';

import { projects, type Project, type ProjectLink } from '@/data/projects';
import type { Lang } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { useLang } from './lang-provider';

function liveLinks(project: Project): ProjectLink[] {
  return project.links.filter((link) => link.href.trim().length > 0);
}

function linkLabel(link: ProjectLink, lang: Lang): string {
  return link.label?.[lang] ?? t(lang, 'projects.open');
}

function extractHost(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./, '');
  } catch {
    return href;
  }
}

function ProjectCardInner({
  project,
  lang,
  index,
  links,
}: {
  project: Project;
  lang: Lang;
  index: number;
  links: ProjectLink[];
}) {
  const primaryHref = links[0]?.href;
  const host = primaryHref ? extractHost(primaryHref) : null;

  return (
    <>
      {project.screenshot ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.screenshot}
          alt={lang === 'zh' ? `${project.name} 截图` : `${project.name} screenshot`}
          className="project-shot"
        />
      ) : null}

      <div className="project-card-top">
        <div className="project-badges">
          <span className="project-index">{String(index).padStart(2, '0')}</span>
          {project.tag ? <span className="project-tag">{project.tag[lang]}</span> : null}
        </div>
        {links.length === 0 ? (
          <span className="todo">{t(lang, 'tools.todo')}</span>
        ) : (
          <span className="project-live">
            <span className="project-live-dot" aria-hidden="true" />
            {t(lang, 'projects.live')}
          </span>
        )}
      </div>

      <div className="project-card-body">
        <h3>{project.name}</h3>
        <p>{project.problem[lang]}</p>
        {project.metric ? <p className="project-metric">{project.metric[lang]}</p> : null}
      </div>

      <div className="project-card-foot">
        {links.length === 1 && host ? (
          <>
            <span className="project-host">{host}</span>
            <span className="project-arrow" aria-hidden="true">
              ↗
            </span>
          </>
        ) : links.length > 1 ? (
          <div className="project-links">
            {links.map((link) => (
              <a key={link.href} className="quiet-link" href={link.href} target="_blank" rel="noopener noreferrer">
                {linkLabel(link, lang)} ↗
              </a>
            ))}
          </div>
        ) : (
          <span className="project-host">{t(lang, 'tools.todo')}</span>
        )}
      </div>
    </>
  );
}

export function ProjectsSection() {
  const { lang } = useLang();

  return (
    <section id="projects" className="chapter reveal">
      <div className="section-header">
        <div>
          <p className="eyebrow">01 // {t(lang, 'projects.eyebrow')}</p>
          <h2>{t(lang, 'projects.title')}</h2>
        </div>
        <p className="section-sub">{t(lang, 'projects.description')}</p>
      </div>

      <ol className="project-bento">
        {projects.map((project, index) => {
          const links = liveLinks(project);
          const inner = (
            <ProjectCardInner project={project} lang={lang} index={index + 1} links={links} />
          );

          if (links.length === 1) {
            return (
              <li key={project.id} id={project.id}>
                <a
                  className="project-card"
                  href={links[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              </li>
            );
          }

          return (
            <li key={project.id} id={project.id}>
              <article className="project-card is-static">{inner}</article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
