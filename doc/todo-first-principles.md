# TimLiu 个人主页 — 第一性原理 TODO

> 从第一性原理出发：这个页面的存在是为了让别人快速知道「你是谁、在做什么、值不值得联系」。
> 所有优化项按「对访客认知的影响力」分级，而非技术难度。

---

## S 级 — 直接影响核心信息传达

- [x] **加 Projects 章节（约 3-5 个代表性项目）**
- [x] **添加 JSON-LD 结构化数据**
- [x] **添加 sitemap.xml + robots.txt**

---

## A 级 — 提升访客认知效率和行动率

- [x] **明确页面信息分层（CTA 优先级）**
  - Telegram 作为主力联系方式突出显示（带背景色 + 文字标签），GitHub/Twitter 保持图标按钮。

- [x] **补 Projects 区块后，在 Hero 右侧卡片底部加一个 "See projects →" 锚点链接**
  - 点击跳转到 `#projects`。

- [x] **优化 Hero 区 tagline 和描述**
  - 当前 `"一个喜欢折腾、认真做事的人"` 偏通用，需你补充具体方向。
  - 可在 `lib/site-config.ts` 的 `tagline` 字段直接修改。

---

## B 级 — 工程健康度 / 基础体验修复

- [x] **修复暗黑模式 hydration 闪烁**
  - 在 `layout.tsx` `<body>` 顶部注入内联 script，页面解析阶段即读取 localStorage 设置 `dark` class，消除闪白。

- [x] **补全 Tailwind `accent` token**
  - 在 `globals.css` 添加 `--accent` / `--accent-foreground` CSS 变量，`tailwind.config.js` 已映射。

- [x] **清理 `navbar.tsx` 未使用的 `SiteMark` 导入**
- [x] **统一 `ContactSection` 的 `rel` 属性**（`noreferrer` → `noopener noreferrer`）
- [x] **修复 Hero stats 卡片 grid 断点**（移除 `lg:grid-cols-1 xl:grid-cols-3`，统一 `sm:grid-cols-3`）
- [x] **清理 `page.tsx` 冗余的 sm 断点 max-w**
- [x] **删除 `pic/` 冗余目录**

---

## C 级 — 长远基石（可后续慢慢处理）

- [x] **引入 `next/font` 优化字体加载**
  - 使用 `next/font/google` 加载 Inter，`globals.css` 的系统字体栈作为后备。

- [x] **添加 `loading.tsx` / `error.tsx` / `not-found.tsx`**
  - 匹配页面风格的极简加载、错误和 404 页面。

- [x] **为 `site-config.ts` 导出类型**
  - 导出 `SiteConfig` / `Contact` 类型供消费方复用。

- [x] **添加 ESLint 配置**
  - 创建 `.eslintrc.json`（`extends: next/core-web-vitals`）。
  - ⚠️ 需要手动安装：`npm install --save-dev eslint eslint-config-next`

- [x] **OG 图片优化**
  - 用 `@vercel/og` 的 `ImageResponse` 动态生成 PNG，替换原来的 `og-image.svg`。
  - 添加了 `twitter:card` metadata 以优化社交平台分享预览。

---

## D 级 — 长期方向（先记录，暂不执行）

- [ ] 添加 Now 页 / 动态，提供回访理由
- [ ] 支持多语言（中/英）切换
- [ ] 添加 RSS 博客输出
- [ ] 清理 `doc/` 中的 AI 策划中间产物（task_plan.md / findings.md / progress.md）