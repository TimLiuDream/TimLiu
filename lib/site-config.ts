export const siteConfig = {
  name: 'TimLiu',
  tagline: {
    zh: 'Web3 撸空投 / Golang / 折腾 Side Project',
    en: 'Web3 Airdrops / Golang / Side Projects',
  },
  description: {
    zh: '我更关注事情能不能落地、能不能长期维护、能不能越做越顺。',
    en: 'I care most about whether things ship, stay maintainable, and get smoother over time.',
  },
  about: {
    zh: '我是 Tim，平时在 Web3 撸空投，主力语言是 Golang，业余折腾工具和 Side Project。这个网站会慢慢记录我的一些想法、项目和日常输出。',
    en: "I'm Tim. I farm Web3 airdrops, write mostly in Golang, and tinker with tools and side projects in my spare time. This site slowly records my thoughts, projects, and day-to-day output.",
  },
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
      name: 'SquareOps',
      description: { zh: '币安广场内容工厂', en: 'Binance Square content factory' },
      href: 'https://square.timliu.xyz',
    },
    {
      name: 'ContentPolish',
      description: { zh: '内容打磨工具', en: 'Content polish tool' },
      href: 'https://content-polish.vercel.app/',
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type Contact = (typeof siteConfig.contacts)[number];
