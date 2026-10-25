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

function ProjectBody({
  project,
  lang,
  index,
  showTodo,
  showArrow,
  links,
}: {
  project: Project;
  lang: Lang;
  index: number;
  showTodo: boolean;
  showArrow: boolean;
  links: ProjectLink[];
}) {
  return (
    <>
      <span className="project-index">{String(index).padStart(2, '0')}</span>
      <div className="project-copy">
        {project.screenshot ? (
          // Screenshots are optional paths from the data file, including future remote URLs.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.screenshot}
            alt={lang === 'zh' ? `${project.name} 截图` : `${project.name} screenshot`}
            className="project-shot"
          />
        ) : null}
        <div className="project-name">
          <h3>{project.name}</h3>
          {showTodo ? <span className="todo">{t(lang, 'tools.todo')}</span> : null}
        </div>
        <p>{project.problem[lang]}</p>
        {project.metric ? <p className="project-metric">{project.metric[lang]}</p> : null}
        {links.length > 1 ? (
          <div className="project-links">
            {links.map((link) => (
              <a key={link.href} className="quiet-link" href={link.href} target="_blank" rel="noopener noreferrer">
                {linkLabel(link, lang)}
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <span className="project-arrow" aria-hidden="true">
        {showArrow ? '↗' : ''}
      </span>
    </>
  );
}

export function ProjectsSection() {
  const { lang } = useLang();

  return (
    <section id="projects" className="chapter reveal">
      <div className="chapter-layout">
        <div className="chapter-kicker">
          <span className="chapter-index">02</span>
          <h2>{t(lang, 'projects.title')}</h2>
        </div>
        <p className="chapter-intro measure">{t(lang, 'projects.description')}</p>
      </div>
      <ol className="project-list">
        {projects.map((project, index) => {
          const links = liveLinks(project);
          const body = (
            <ProjectBody
              project={project}
              lang={lang}
              index={index + 1}
              showTodo={links.length === 0}
              showArrow={links.length === 1}
              links={links}
            />
          );

          if (links.length === 1) {
            return (
              <li key={project.id} id={project.id}>
                <a className="project" href={links[0].href} target="_blank" rel="noopener noreferrer">
                  {body}
                </a>
              </li>
            );
          }

          return (
            <li key={project.id} id={project.id}>
              <article className="project">{body}</article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
