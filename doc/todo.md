# TimLiu 个人主页 TODO

> 基于代码审查的优化项，按优先级排列。

---

## P0 — 影响正确性 / 核心体验

- [ ] **修复暗黑模式 hydration 闪烁**
  - `components/theme-toggle.tsx` 初始 theme 设为 `'light'`，实际主题在 `useEffect` 中才读取 localStorage/系统偏好，导致 SSR 与客户端不一致，产生闪白。
  - 方案：在 `app/layout.tsx` 的 `<head>` 中注入内联 script，在页面加载前读取主题并设置 `document.documentElement.classList`。
- [ ] **清理 `navbar.tsx` 中未使用的 `SiteMark` 导入**
  - `components/navbar.tsx` 第 2 行 `import { SiteMark } from './site-mark'` 但组件内未使用，应删除该 import 或补上 `<SiteMark />` 到导航栏左侧。
- [ ] **统一 `ContactSection` 的 `rel` 属性**
  - `components/contact-section.tsx` 中 `rel="noreferrer"` 应改为 `rel="noopener noreferrer"`，与 `hero.tsx` 保持一致。

---

## P1 — 体验 / 设计问题

- [ ] **修复中文文件编码问题**
  - `lib/site-config.ts`、`app/layout.tsx`、`components/hero.tsx` 等多处中文在源码中显示为乱码，需统一为 UTF-8 without BOM 编码。
- [ ] **修复 Hero stats 卡片的 grid 断点逻辑**
  - `components/hero.tsx` 中 `sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3` 在 lg 断点异常变为单列，应调整为合理的响应式列数。
- [ ] **补全 Tailwind 缺失的 `accent` token**
  - `components/about-section.tsx` 使用了 `bg-accent` 和 `text-accent-foreground`，但 `tailwind.config.js` 中未定义 `accent` 相关颜色映射，也没有对应的 CSS 变量。
- [ ] **清理 `page.tsx` 中冗余的 sm 断点 max-w**
  - `sm:max-w-[calc(100vw-25px)]` 与默认值完全重复，应删除。
- [ ] **Navbar 组件命名 / 功能对齐**
  - 当前 `Navbar` 只有 logo + tagline，没有导航链接。要么添加锚点导航（About / Contact），要么重命名为 `SiteHeader`。

---

## P2 — 工程 / 可维护性

- [ ] **添加 ESLint 配置**
  - `package.json` 有 `"lint": "next lint"` 但缺少 `.eslintrc.json` 配置文件。
- [ ] **删除 `pic/` 冗余目录**
  - `pic/XcQvSMdB_400x400.jpg` 与 `public/avatar.jpg` 完全重复（37509 bytes）。
- [ ] **清理 `doc/` 中的 AI 策划中间产物**
  - `task_plan.md`、`findings.md`、`progress.md` 等是 agent 工作中间文件，不应出现在 master 分支。
- [ ] **添加 `robots.txt` 和 `sitemap.xml`**
  - 部署在 Vercel 的个人主页需要基础 SEO 文件。
- [ ] **添加 `loading.tsx`、`error.tsx`、`not-found.tsx`**
  - Next.js App Router 最佳实践，为后续扩展做准备。
- [ ] **OG image 改为 PNG 格式**
  - `public/og-image.svg` 是 SVG，Twitter/Facebook 等平台对 SVG OG 图支持不佳，建议用 `@vercel/og` 生成 PNG。
- [ ] **引入 `next/font` 优化字体加载**
  - 当前 `globals.css` 依赖系统字体栈，可用 `next/font/google` 引入 Inter / Noto Sans SC 避免 FOIT/FOUT。
- [ ] **为 `site-config.ts` 导出类型**
  - 添加 `export type SiteConfig = typeof siteConfig` 和 `export type Contact = (typeof siteConfig.contacts)[number]` 供消费方复用。

---

## 未来想法（非紧急）

- [ ] 添加 `app/projects/` 路由用于展示项目
- [ ] 添加页面访问统计
- [ ] 支持多语言（中/英）切换
- [ ] 添加 RSS 博客输出