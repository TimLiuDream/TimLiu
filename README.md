# TimLiu Personal Homepage

极简极客风个人主页，基于 Next.js + Tailwind CSS 构建。

## Preview

- GitHub-style minimal UI
- Light / Dark theme toggle
- Small easter eggs and subtle motion
- OG image and avatar assets included

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Structure

```bash
app/
  layout.tsx
  page.tsx
  globals.css
components/
  about-section.tsx
  contact-section.tsx
  footer.tsx
  hero.tsx
  navbar.tsx
  site-mark.tsx
  theme-toggle.tsx
lib/
  site-config.ts
public/
  avatar.svg
  og-image.svg

pic/
  XcQvSMdB_400x400.jpg

doc/
  personal-homepage-prd.md
  design-spec-github-geek.md
  personal-impression.md
  local-run.md
  deployment.md
  dev-notes.md
  task_plan.md
  findings.md
  progress.md
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

- Theme preference is stored in `localStorage`.
- Dark mode is applied by toggling the `dark` class on `<html>`.
- OpenGraph metadata uses `public/og-image.svg`.
- The site is intentionally small and easy to extend later.

## Projects

- **ContentPolish** — 内容打磨工具
  部署地址：https://content-polish.vercel.app/

## Next Ideas

- Add a short projects section later if needed
- Keep the homepage minimal; let the content grow slowly
- If you want a different host, add platform-specific deployment config later
