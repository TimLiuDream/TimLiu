# TimLiu 个人主页 — 第一性原理 TODO

> 从第一性原理出发：这个页面的存在是为了让别人快速知道「你是谁、在做什么、值不值得联系」。
> 所有优化项按「对访客认知的影响力」分级，而非技术难度。

---

## S 级 — 直接影响核心信息传达

- [x] **加 Projects 章节（约 3-5 个代表性项目）**
  - 当前页面说"喜欢折腾项目"但零展示，访客无法验证。
  - 建议：在 About 和 Contact 之间加一个区块，每项目一行：名称 + 一句话说明 + 链接。
  - 候选：ContentPolish / chatgpt-plus / bilibili-live-helper 等。
  - 设计原则：保持极简风格，不破坏当前页面节奏。

- [x] **添加 JSON-LD 结构化数据**
  - 搜索引擎无法理解当前页面描述的是"一个人"。
  - 在 `layout.tsx` 的 `<head>` 中注入 `Person` Schema：
    ```json
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "TimLiu",
      "url": "https://timliu.vercel.app",
      "sameAs": [
        "https://github.com/TimLiuDream",
        "https://t.me/dreamtimliu",
        "https://x.com/timliu92"
      ]
    }
    ```

- [x] **添加 sitemap.xml + robots.txt**
  - 纯静态页面，搜索引擎需要明确指引。
  - 用 Next.js 的 `app/sitemap.ts` 自动生成。

---

## A 级 — 提升访客认知效率和行动率

- [ ] **明确页面信息分层（CTA 优先级）**
  - 当前三个社交图标平铺，没有"最推荐的联络方式"。
  - 建议：按场景分层。例如 Telegram 作为主力联系方式突出显示，GitHub/Twitter 作为辅助。

- [ ] **优化 Hero 区 tagline 和描述**
  - "一个喜欢折腾、认真做事的人" → 太通用。建议加入区分度，例如结合你的实际方向：
    - "Web3 tester / Go developer / Side project builder"
    - "白天测 A9 A10，晚上写 Go 和 Side Project"
  - 让访客在 3 秒内知道"这人具体做什么"，而不是"这人态度不错"。

- [ ] **补 Projects 区块后，在 Hero 右侧卡片底部加一个 "See projects →" 锚点链接**
  - 给访客一个明确的下一步动作，而不是让信息流自然散掉。

---

## B 级 — 工程健康度 / 基础体验修复

- [ ] **修复暗黑模式 hydration 闪烁**
  - `theme-toggle.tsx` 初始 theme 固定为 `'light'`，SSR 与客户端不一致产生闪白。
  - 方案：在 `layout.tsx` 注入内联 script，页面加载前读取 localStorage 设置 `dark` class。

- [ ] **补全 Tailwind `accent` token**
  - `about-section.tsx` 使用了 `bg-accent` / `text-accent-foreground`，但 `tailwind.config.js` 未定义对应的 CSS 变量，hover 时无效果。

- [ ] **清理 `navbar.tsx` 未使用的 `SiteMark` 导入**
  - 第 2 行 `import { SiteMark } from './site-mark'`，组件内未使用。

- [ ] **统一 `ContactSection` 的 `rel` 属性**
  - 当前 `rel="noreferrer"`，应改为 `rel="noopener noreferrer"`，与 hero.tsx 保持一致。

- [ ] **修复 Hero stats 卡片 grid 断点**
  - `sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3` 在 lg 断点异常变成单列。

- [ ] **清理 `page.tsx` 冗余的 sm 断点 max-w**
  - `sm:max-w-[calc(100vw-25px)]` 与默认值完全重复。

- [ ] **删除 `pic/` 冗余目录**
  - `pic/XcQvSMdB_400x400.jpg` 与 `public/avatar.jpg` 内容重复。

---

## C 级 — 长远基石（可后续慢慢处理）

- [ ] **引入 `next/font` 优化字体加载**
  - 当前依赖系统字体栈，iOS / Windows 渲染效果不一致。
  - 用 `next/font/google` 引入 Inter + Noto Sans SC。

- [ ] **添加 `loading.tsx` / `error.tsx` / `not-found.tsx`**
  - Next.js App Router 最佳实践，为后续扩展做准备。

- [ ] **OG 图片优化**
  - 当前 `og-image.svg` 是 SVG，Twitter/Facebook 对 SVG OG 图支持不稳定。可用 `@vercel/og` 生成 PNG。

- [ ] **为 `site-config.ts` 导出类型**
  - 添加 `SiteConfig` / `Contact` 类型，供消费方复用。

- [ ] **添加 ESLint 配置**
  - `package.json` 有 lint script 但缺少 `.eslintrc.json`。

---

## D 级 — 长期方向（先记录，暂不执行）

- [ ] 添加 Now 页 / 动态，提供回访理由
- [ ] 支持多语言（中/英）切换
- [ ] 添加 RSS 博客输出
- [ ] 清理 `doc/` 中的 AI 策划中间产物（task_plan.md / findings.md / progress.md）