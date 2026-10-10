# TimLiu Personal Homepage

极简极客风个人主页，基于 Next.js + Tailwind CSS 构建。

## Preview

- GitHub-style minimal UI
- Light / Dark theme toggle（localStorage 持久化，含防闪烁内联脚本）
- 中英双语切换（zh / en，基于 Context 的轻量 i18n）
- `/now` 页面记录最近在做什么
- RSS feed（`/feed.xml`）、sitemap、robots、动态 OG 图
- Small easter eggs and subtle motion
- JSON-LD `Person` 结构化数据

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript (strict)
- Tailwind CSS
- @vercel/og（动态生成 OG 图）
- @vercel/analytics

## Structure

```bash
app/
  layout.tsx          # 根布局：主题防闪烁脚本、LangProvider、JSON-LD
  page.tsx            # 首页（Hero / About / Projects / Contact / Footer）
  globals.css         # CSS 变量主题系统（light / dark）
  now/page.tsx        # /now 页面
  feed.xml/route.ts   # RSS feed
  og-image/route.tsx  # 动态生成 OG 图（edge runtime）
  robots.ts
  sitemap.ts
  error.tsx
  loading.tsx
  not-found.tsx
  icon.svg
components/
  hero.tsx
  about-section.tsx
  projects-section.tsx
  contact-section.tsx
  navbar.tsx
  footer.tsx
  lang-provider.tsx
  lang-toggle.tsx
  theme-toggle.tsx
  icons.tsx
  site-mark.tsx
lib/
  site-config.ts      # 个人信息、联系方式、标签、项目（单一数据源）
  i18n.ts             # zh/en 文案 + t() 取词函数
public/
  avatar.jpg          # 头像（首页引用）
  favicon.svg
  avatar.svg          # 未引用（遗留）
  og-image.svg        # 未引用（OG 图已改用动态路由）
doc/
  personal-homepage-prd.md
  design-spec-github-geek.md
  personal-impression.md
  local-run.md
  deployment.md
  dev-notes.md
  todo.md
  todo-first-principles.md
```

## Getting Started

```bash
npm install
npm run dev
```

更多说明请看：
- `doc/local-run.md`
- `doc/deployment.md`

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - run lint checks

## Notes

- Theme preference is stored in `localStorage`；dark mode 通过切换 `<html>` 的 `dark` 类实现。
- Language preference 同样存 `localStorage`，默认 `zh`。
- OpenGraph metadata uses dynamically generated `/og-image`（PNG, 1200×630, edge runtime）。
- 头像使用 `public/avatar.jpg`。
- The site is intentionally small and easy to extend later.

## Projects

- **SquareOps** — 币安广场内容工厂（活动雷达 → 材料评分 → 选题 → 写作 → 一键发布）
  部署地址：https://square.timliu.xyz
- **ContentPolish** — 内容打磨工具
  部署地址：https://content-polish.vercel.app/

## Next Ideas

- Add a short projects section later if needed
- Keep the homepage minimal; let the content grow slowly
- If you want a different host, add platform-specific deployment config later

## GEO / AI-readable content

- `/llms.txt`：站点简介与精选内容入口。
- `/llms-full.txt`：中英文完整介绍，包含个人背景、项目用途、近况及公开联系方式，无需执行 JavaScript。
- 两个文本路由在构建时生成，共享 `lib/site-config.ts` 和现有近况文案，不需要手工同步多份介绍。
- 首页 head 提供文本 alternate，全站 head 提供 llms.txt discovery 链接；首页包含 ProfilePage 和项目结构化数据。
- 主域名统一维护在 `siteConfig.url`，用于 canonical、metadata、JSON-LD、robots、sitemap、RSS 和 AI 文本链接。
- robots 使用 `User-agent: * / Allow: /`，允许所有遵守 robots 的搜索、训练和用户触发 Agent；当前没有额外厂商白名单。

部署和验证说明见 [doc/geo.md](doc/geo.md)。
