export const siteConfig = {
  name: 'TimLiu',
  tagline: 'Web3 测试 / Go 开发 / 折腾 Side Project',
  description:
    '我更关注事情能不能落地、能不能长期维护、能不能越做越顺。',
  about:
    '我是 Tim，平时在 Web3 项目做测试，业余写 Go、折腾工具和 Side Project。这个网站会慢慢记录我的一些想法、项目和日常输出。',
  contacts: [
    { label: 'Telegram', value: '@dreamtimliu', href: 'https://t.me/dreamtimliu', primary: true },
    { label: 'GitHub', value: 'TimLiuDream', href: 'https://github.com/TimLiuDream' },
    { label: 'Twitter', value: '@timliu92', href: 'https://x.com/timliu92' },
  ],
  tags: ['Go', 'Web3', 'DevTools', 'Side Projects'],
  stats: [
    { label: 'Focus', value: 'Ship useful things' },
    { label: 'Mode', value: 'Minimal & maintainable' },
    { label: 'Easter egg', value: 'Small, hidden, fun' },
  ],
  projects: [
    {
      name: 'ContentPolish',
      description: '内容打磨工具',
      href: 'https://content-polish.vercel.app/',
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type Contact = (typeof siteConfig.contacts)[number];
