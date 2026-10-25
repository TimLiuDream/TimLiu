import { siteConfig } from '@/lib/site-config';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET() {
  const siteUrl = siteConfig.url;
  const published = new Date('2026-10-25').toUTCString();

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TimLiu</title>
    <description>${escapeXml('独立开发者 Tim：用 AI Agent 做小工具，研究 Web3。')}</description>
    <link>${escapeXml(siteUrl)}</link>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(siteUrl + '/feed.xml')}" rel="self" type="application/rss+xml"/>
    <item>
      <title>AI 工具 / Tools</title>
      <link>${escapeXml(siteUrl + '/tools')}</link>
      <description>${escapeXml('NotebookLM、Gemini、Codex、GitHub Copilot、Canva、CapCut、Grok Bot。')}</description>
      <pubDate>${published}</pubDate>
      <guid>${escapeXml(siteUrl + '/tools')}</guid>
    </item>
    <item>
      <title>Web3 早期项目 / Web3</title>
      <link>${escapeXml(siteUrl + '/web3')}</link>
      <description>${escapeXml('尚未发币项目追踪。积分不保证可兑换代币，不构成投资建议。')}</description>
      <pubDate>${published}</pubDate>
      <guid>${escapeXml(siteUrl + '/web3')}</guid>
    </item>
    <item>
      <title>ContentPolish — 内容打磨工具</title>
      <link>${escapeXml(siteUrl)}</link>
      <description>${escapeXml('ContentPolish 是一个内容打磨工具，已部署到 Vercel。')}</description>
      <pubDate>${new Date('2026-07-15').toUTCString()}</pubDate>
      <guid>${escapeXml(siteUrl + '/#content-polish')}</guid>
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
