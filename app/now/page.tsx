import Link from 'next/link';

export default function NowPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-[calc(100vw-25px)] flex-col px-5 py-6 sm:px-6 lg:max-w-[calc(100vw-100px)] lg:px-10">
        <nav className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xs text-foreground/40 transition-colors hover:text-foreground/70"
          >
            ← 回首页
          </Link>
        </nav>

        <div className="max-w-2xl">
          <h1 className="text-2xl font-semibold tracking-tight">/now</h1>
          <p className="mt-2 text-sm text-foreground/50">
            最近在做什么 · 2026 年 7 月
          </p>

          <div className="mt-10 space-y-8 leading-8 text-foreground/75">
            <div>
              <div className="font-mono text-sm text-primary">&gt; web3_activity</div>
              <p className="mt-1 text-base">
                在 Web3 撸空投，关注新公链和跨链交互的测试网机会。
              </p>
            </div>

            <div>
              <div className="font-mono text-sm text-primary">&gt; language_focus</div>
              <p className="mt-1 text-base">
                主力语言是 Golang，用它写工具、练算法、做自动化和 Side Project。
              </p>
            </div>

            <div>
              <div className="font-mono text-sm text-primary">&gt; side_project</div>
              <p className="mt-1 text-base">
                打磨 <a href="https://content-polish.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline decoration-foreground/20 underline-offset-2 transition-colors hover:decoration-foreground/60">ContentPolish</a> —— 一个内容打磨工具，已部署到 Vercel。
              </p>
            </div>

            <div>
              <div className="font-mono text-sm text-primary">&gt; mindset</div>
              <p className="mt-1 text-base">
                Ship useful things. Keep it small, keep it sharp.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card px-4 py-3 font-mono text-sm text-foreground/50">
            <span>上次更新：2026-07-16</span>
          </div>
        </div>
      </section>
    </main>
  );
}