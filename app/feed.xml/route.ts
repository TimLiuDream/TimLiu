import { projectHref, projects } from '@/data/projects';
import { tools } from '@/data/tools';
import { web3Entries } from '@/data/web3';
import { t } from '@/lib/i18n';
import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-static';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function toRfc822Date(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toUTCString();
}

export async function GET() {
  const siteUrl = siteConfig.url;

  const latestWeb3Date = web3Entries.reduce(
    (max, entry) => (entry.updated > max ? entry.updated : max),
    '2026-10-26',
  );
  const nowDateMatch = /\d{4}-\d{2}-\d{2}/.exec(t('zh', 'now.updated'));
  const nowDate = nowDateMatch?.[0] ?? '2026-07-16';
  const latestSiteDate = latestWeb3Date > nowDate ? latestWeb3Date : nowDate;

  const sectionItems = [
    {
      title: 'Web3 早期项目 / Web3',
      link: `${siteUrl}/web3`,
      guid: `${siteUrl}/web3`,
      pubDate: toRfc822Date(latestWeb3Date),
      description: `已追踪 ${web3Entries.length} 个尚未发币早期项目（更新于 ${latestWeb3Date}）。${t('zh', 'web3.disclaimer')}。`,
    },
    {
      title: 'AI 工具 / Tools',
      link: `${siteUrl}/tools`,
      guid: `${siteUrl}/tools`,
      pubDate: toRfc822Date(latestSiteDate),
      description: `在用的 AI 工具：${tools.map((tool) => tool.name).join('、')}。`,
    },
    {
      title: '近况 / Now',
      link: `${siteUrl}/now`,
      guid: `${siteUrl}/now`,
      pubDate: toRfc822Date(nowDate),
      description: `${t('zh', 'now.web3')} ${t('zh', 'now.golang')}`,
    },
  ];

  const projectItems = projects.map((project) => {
    const href = projectHref(project) ?? `${siteUrl}/#${project.id}`;
    const summary = project.details
      ? `${project.problem.zh}。${project.details.zh}`
      : project.problem.zh;
    return {
      title: `${project.name} — ${project.problem.zh}`,
      link: href,
      guid: `${siteUrl}/#${project.id}`,
      pubDate: toRfc822Date(latestSiteDate),
      description: summary,
    };
  });

  const allItems = [...sectionItems, ...projectItems];

  const itemsXml = allItems
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="false">${escapeXml(item.guid)}</guid>
    </item>`,
    )
    .join('\n');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <description>${escapeXml(siteConfig.summary.zh)}</description>
    <link>${escapeXml(siteUrl)}</link>
    <language>zh-CN</language>
    <lastBuildDate>${toRfc822Date(latestSiteDate)}</lastBuildDate>
    <atom:link href="${escapeXml(siteUrl + '/feed.xml')}" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
