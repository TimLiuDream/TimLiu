import { resolveSiteUrl } from '@/lib/site-url';

export const siteConfig = {
  name: 'TimLiu',
  // Canonical origin for metadata, JSON-LD, sitemap, RSS, and agent text.
  // Set NEXT_PUBLIC_SITE_URL to override. Defaults to https://www.timliu.xyz.
  url: resolveSiteUrl(),
  title: 'TimLiu · 独立开发者 · AI Agent / Web3',
  summary: {
    zh: '独立开发者 Tim 的个人主页：用 AI Agent 做小工具，研究 Web3。项目包括 DesignDesk、SquareOps、ContentPolish、AlphaStrategy 与 Dreamer Labs。交流与合作首选 Telegram。',
    en: 'Personal site of Tim, an independent developer who builds small tools with AI agents and researches Web3. Projects include DesignDesk, SquareOps, ContentPolish, AlphaStrategy, and Dreamer Labs. Telegram is the preferred contact for ideas and collaboration.',
  },
  tagline: {
    zh: 'AI Agent 小工具 · Web3',
    en: 'AI agent tools · Web3',
  },
  about: {
    zh: '这个网站用来放我做过的小工具、Web3 研究，以及平时的输出。我更关注事情能不能落地、能不能长期维护、能不能越做越顺。',
    en: 'This site holds the small tools I have shipped, notes from Web3 research, and what I publish along the way. I care most about whether something can ship, stay maintainable, and get smoother over time.',
  },
  contacts: [
    { label: 'Telegram', value: '@dreamtimliu', href: 'https://t.me/dreamtimliu', primary: true },
    { label: 'GitHub', value: 'TimLiuDream', href: 'https://github.com/TimLiuDream' },
    { label: 'X', value: '@timliu92', href: 'https://x.com/timliu92' },
    { label: 'WeChat', value: 'liufotian1992' },
  ],
  tags: ['AI Agent', 'Web3', 'DevTools', 'Go'],
  stats: [
    { label: 'Focus', value: 'Ship useful things' },
    { label: 'Mode', value: 'Minimal & maintainable' },
    { label: 'Easter egg', value: 'Small, hidden, fun' },
  ],
} as const;

/**
 * Public X follower count shown in the hero.
 * Leave null to hide it. There is no unpaid, keyless API for this number — set it only when you have a real count.
 */
export const xFollowerCount: number | null = null;

export type SiteConfig = typeof siteConfig;
export type Contact = (typeof siteConfig.contacts)[number];
