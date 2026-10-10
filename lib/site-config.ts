export const siteConfig = {
  name: 'TimLiu',
  url: 'https://tim-liu.vercel.app',
  title: 'TimLiu · Golang / Web3 / Side Projects',
  summary: {
    zh: 'TimLiu 的个人主页：使用 Golang 开发工具与 Side Project，参与 Web3 空投和测试网交互，维护 SquareOps、ContentPolish 与 AlphaStrategy。交流与合作首选 Telegram。',
    en: 'TimLiu builds tools and side projects with Golang, explores Web3 airdrops and testnets, and maintains SquareOps, ContentPolish, and AlphaStrategy. Telegram is the preferred contact for ideas and collaboration.',
  },
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
    { label: 'X', value: '@timliu92', href: 'https://x.com/timliu92' },
    { label: 'WeChat', value: 'liufotian1992' },
  ],
  tags: ['Go', 'Web3', 'DevTools', 'Side Projects'],
  stats: [
    { label: 'Focus', value: 'Ship useful things' },
    { label: 'Mode', value: 'Minimal & maintainable' },
    { label: 'Easter egg', value: 'Small, hidden, fun' },
  ],
  projects: [
    {
      id: 'alpha-strategy',
      name: 'AlphaStrategy',
      description: { zh: '币安 Alpha 空投策略回测器', en: 'Binance Alpha airdrop backtester' },
      details: {
        zh: '通过历史数据比较领取即卖、目标倍数卖出、一直持有和半卖半留四种策略，支持倍数、滑点、年份与公链筛选，附回测报告和数据口径说明。结果为历史模拟与持仓估值。',
        en: 'Compare four Binance Alpha airdrop strategies using historical data: sell on receipt, sell at a target multiple, hold, or sell half and hold half. Adjust the target multiple and slippage, filter by year and chain, and review the backtest report and methodology. Results are historical simulations and holding valuations.',
      },
      href: 'https://alpha-strategy.vercel.app/',
      applicationCategory: 'FinanceApplication',
    },
    {
      id: 'squareops',
      name: 'SquareOps',
      description: { zh: '币安广场内容工厂', en: 'Binance Square content factory' },
      details: {
        zh: '面向币安广场内容创作者，将活动雷达、材料评分、选题、写作与发布串成内容工作流。',
        en: 'A content workflow for Binance Square creators, covering activity discovery, source scoring, topic selection, writing, and publishing.',
      },
      href: 'https://square.timliu.xyz',
    },
    {
      id: 'content-polish',
      name: 'ContentPolish',
      description: { zh: '内容打磨工具', en: 'Content polish tool' },
      details: {
        zh: '面向需要打磨文字内容的用户，用于改进内容表达；可以通过项目网站访问。',
        en: 'A tool for people who want to refine written content and improve its expression, available through the project website.',
      },
      href: 'https://content-polish.vercel.app/',
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type Contact = (typeof siteConfig.contacts)[number];
