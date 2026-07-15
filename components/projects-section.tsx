import { siteConfig } from '@/lib/site-config';

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border py-14">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <h2 className="text-2xl font-semibold tracking-tight">项目</h2>
        <div className="space-y-4 text-foreground/75">
          <p>一些我写过、在维护、或者觉得有意思的东西。</p>
          <div className="grid gap-3">
            {siteConfig.projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted"
              >
                <span className="font-mono text-sm font-medium text-foreground/90 group-hover:text-primary">
                  {project.name}
                </span>
                <span className="hidden text-sm text-foreground/50 sm:inline">
                  // {project.description}
                </span>
                <span className="text-sm text-foreground/50 sm:hidden">
                  // {project.description}
                </span>
                <span className="ml-auto text-foreground/30 transition-colors group-hover:text-foreground/60">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}