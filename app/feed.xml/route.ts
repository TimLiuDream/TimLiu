import { siteConfig } from '@/lib/site-config';

export async function GET() {
  const siteUrl = siteConfig.url;

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TimLiu</title>
    <description>TimLiu 的极简个人主页 — Web3 撸空投 / Golang / Side Project</description>
    <link>${siteUrl}</link>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <item>
      <title>ContentPolish — 内容打磨工具</title>
      <link>${siteUrl}</link>
      <description>ContentPolish 是一个内容打磨工具，已部署到 Vercel。</description>
      <pubDate>${new Date('2026-07-15').toUTCString()}</pubDate>
      <guid>${siteUrl}/#content-polish</guid>
    </item>
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}