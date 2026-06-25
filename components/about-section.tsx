import { siteConfig } from '@/lib/site-config';

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border py-14">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <h2 className="text-2xl font-semibold tracking-tight">关于我</h2>
        <div className="space-y-4 leading-8 text-foreground/75">
          <p>{siteConfig.about}</p>
          <p>我更关注事情能不能落地，能不能长期维护，能不能越做越顺。</p>
          <div className="rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm text-foreground/70">
            &gt; still tinkering...
            <span className="animate-cursor-blink">_</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-sm">
            <span className="text-foreground/50">project:</span>
            <a
              href="https://content-polish.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border bg-card px-2.5 py-0.5 text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              ContentPolish
              <span className="ml-1 text-foreground/40">↗</span>
            </a>
            <span className="text-foreground/50">// 内容打磨工具</span>
          </div>
        </div>
      </div>
    </section>
  );
}
