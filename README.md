# TimLiu Personal Homepage

极简极客风个人主页，基于 Next.js + Tailwind CSS 构建。

## Preview

- GitHub-style minimal UI
- Light / Dark theme toggle（localStorage 持久化，含防闪烁内联脚本）
- 中英双语切换（zh / en，基于 Context 的轻量 i18n）
- `/now` 页面记录最近在做什么
- `/tools` AI 工具推荐，`/web3` 早期项目追踪，内容都来自 `data/`
- RSS feed（`/feed.xml`）、sitemap、robots、动态 OG 图
- Small easter eggs and subtle motion
- JSON-LD `Person` 结构化数据

## Tech Stack

- Next.js 16 (App Router)
- React 19
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
  tools/page.tsx      # /tools
  web3/page.tsx       # /web3
  now/page.tsx        # /now 页面
  feed.xml/route.ts   # RSS feed
  og-image/route.tsx  # 动态生成 OG 图（edge runtime，next/og）
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
  page-shell.tsx
  lang-provider.tsx
  lang-toggle.tsx
  theme-toggle.tsx
  icons.tsx
  site-mark.tsx
data/
  projects.ts         # 项目：问题、可选指标、可选截图、链接
  tools.ts            # AI 工具
  web3.ts             # Web3 早期项目
lib/
  site-config.ts      # 个人信息、联系方式、标签、可选的 X 关注数
  github-stars.ts     # GitHub star 总数，失败则首页不显示
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
- `npm run lint` - run ESLint（Next.js 16 已移除 `next lint`）

## Notes

- Theme preference is stored in `localStorage`；dark mode 通过切换 `<html>` 的 `dark` 类实现。
- Language preference 同样存 `localStorage`，默认 `zh`。
- OpenGraph metadata uses dynamically generated `/og-image`（PNG, 1200×630, edge runtime）。
- 头像使用 `public/avatar.jpg`。
- The site is intentionally small and easy to extend later.

## Projects

- **DesignDesk** — AI 图片创作与封面设计工作台，支持文生图、参考图生成、商品场景图与图片编辑，提供免费基础图片工具和素材管理。
  部署地址：https://designdesk.timliu.xyz/

- **AlphaStrategy** — 币安 Alpha 空投策略回测器，对比四种处置策略，支持参数与样本筛选，附历史回测报告和数据口径说明。
  部署地址：https://alpha-strategy.vercel.app/

- **SquareOps** — 币安广场内容工厂（活动雷达 → 材料评分 → 选题 → 写作 → 一键发布）
  部署地址：https://square.timliu.xyz
- **ContentPolish** — 内容打磨工具
  部署地址：https://content-polish.vercel.app/
- **Dreamer Labs** — Codex / AI 订阅充值小站。正式 URL 还是 TODO，见 `data/projects.ts`。

## 更新数据

非开发同事只改 `data/` 里的文件，然后重新部署。页面组件不用动。中英文字段都要写。

### 项目 `data/projects.ts`

| 字段 | 说明 |
| --- | --- |
| `name` | 项目名 |
| `problem` | 一句话解决什么问题，`zh` / `en` |
| `metric` | 可选。有内容时卡片才显示 |
| `screenshot` | 可选。`public/` 下的路径，例如 `/projects/designdesk.png`。没有就不要填 |
| `links` | 外链数组。`href` 为空或整段删掉时，卡片不渲染链接，并标 TODO |
| `details` | 可选的较长介绍，只进 `llms.txt` 和结构化数据，卡片不显示 |

Dreamer Labs（充值小站）的 `links` 仍是空数组，等正式 URL。

### 工具 `data/tools.ts`

| 字段 | 说明 |
| --- | --- |
| `name` | 工具名 |
| `url` | 官网。空字符串表示还没有链接，卡片不渲染外链，并标 TODO |
| `category` | 现有分类：`研究`、`对话`、`编程`、`设计`、`视频`、`Agent`。新分类要在 `toolCategoryLabels` 里补中英文 |
| `desc` | 一句话用途，`zh` / `en` |
| `tweet` | 可选的帖子链接。空字符串不显示 |

Grok Bot 的 `url` 仍是空字符串。

### Web3 `data/web3.ts`

| 字段 | 说明 |
| --- | --- |
| `name` / `url` | 项目名和链接。链接使用 `rel="nofollow noopener"` |
| `cost` | `free`、`gas` 或 `paid` |
| `type` | `trading` 或 `non-trading` |
| `status` / `note` | 状态和备注，`zh` / `en` |
| `updated` | `YYYY-MM-DD` |

页面上的免责声明是固定文案：只收录尚未发币的项目，积分不保证可兑换代币，不构成投资建议。改数据文件不会把它删掉。

### 首页数字

- 项目个数来自 `data/projects.ts` 的条数，包含还没有 URL 的 Dreamer Labs。
- GitHub Stars 在构建和之后每小时向 `https://api.github.com/users/TimLiuDream/repos` 拉取，加总公开、非 fork 仓库的 star。失败就隐藏，不要手填。
- X 关注数没有免密钥的公开接口。要显示时，把 `lib/site-config.ts` 里的 `xFollowerCount` 设成真实数字；保持 `null` 则首页不显示。不要填估计值。

## Next Ideas

- Add a short projects section later if needed
- Keep the homepage minimal; let the content grow slowly
- If you want a different host, add platform-specific deployment config later

## GEO / AI-readable content

- `/llms.txt`：站点简介与精选内容入口。
- `/llms-full.txt`：中英文完整介绍，包含个人背景、项目用途、近况及公开联系方式，无需执行 JavaScript。
- 两个文本路由在构建时生成，共享 `lib/site-config.ts`、`data/` 和现有近况文案，不需要手工同步多份介绍。
- 首页 head 提供文本 alternate，全站 head 提供 llms.txt discovery 链接；首页包含 ProfilePage 和项目结构化数据。
- 主域名统一维护在 `siteConfig.url`，用于 canonical、metadata、JSON-LD、robots、sitemap、RSS 和 AI 文本链接。
- robots 使用 `User-agent: * / Allow: /`，允许所有遵守 robots 的搜索、训练和用户触发 Agent；当前没有额外厂商白名单。

部署和验证说明见 [doc/geo.md](doc/geo.md)。
