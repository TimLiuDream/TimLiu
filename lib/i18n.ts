export type Lang = 'zh' | 'en';

export type LocalizedText = { zh: string; en: string };

export const translations = {
  zh: {
    hero: {
      badge: 'GITHUB STYLE · 极简个人主页',
      positioning: '独立开发者 Tim｜用 AI Agent 做小工具，研究 Web3',
      subtitle: 'AI Agent 小工具 / Web3',
      geekMode: 'geek mode',
      focus: 'current_focus',
      mode: 'favorite_mode',
      focusValue: 'Ship useful things.',
      modeValue: 'Minimal, useful, maintainable.',
      seeProjects: '看项目',
      followX: '关注 X',
      statProject: '个项目',
      statProjects: '个项目',
      statStars: 'GitHub Stars',
      statFollowers: 'X 关注',
    },
    nav: {
      projects: '项目',
      tools: '工具',
      web3: 'Web3',
      now: '近况',
    },
    tools: {
      title: 'AI 工具',
      subtitle: '按分类筛选。有官网的条目会链到官网。',
      all: '全部',
      tweet: '相关帖子',
      todo: 'TODO',
    },
    web3: {
      title: 'Web3',
      subtitle: '早期项目追踪。费用、类型、状态和备注都在表里。',
      disclaimer: '只收录尚未发币的项目，积分不保证可兑换代币，不构成投资建议',
      project: '项目',
      cost: '费用',
      type: '类型',
      status: '状态',
      note: '备注',
      updated: '更新',
      costFree: '免费',
      costGas: 'Gas',
      costPaid: '付费',
      typeTrading: '交易类',
      typeNonTrading: '非交易类',
      todo: 'TODO',
    },
    about: {
      title: '关于我',
      stillTinkering: 'still tinkering...',
    },
    projects: {
      title: '项目',
      description: '一些我写过、在维护、或者觉得有意思的东西。',
      open: '访问',
    },
    contact: {
      title: '联系方式',
      description: '如果你想聊合作、项目、想法，欢迎联系我。',
      preferred: '交流与合作首选',
      wechat: '微信',
    },
    footer: {
      builtWith: 'Built with curiosity.',
    },
    langToggle: {
      switchTo: 'English',
      aria: '切换语言',
    },
    themeToggle: {
      aria: '切换暗色模式',
      light: '浅色',
      dark: '深色',
      theme: '主题',
    },
    now: {
      title: '/now',
      subtitle: '最近在做什么 · 2026 年 7 月',
      web3: '在 Web3 撸空投，关注新公链和跨链交互的测试网机会。',
      golang: '主力语言是 Golang，用它写工具、练算法、做自动化和 Side Project。',
      project: '打磨',
      projectSuffix: '—— 一个内容打磨工具，已部署到 Vercel。',
      mindset: 'Ship useful things. Keep it small, keep it sharp.',
      updated: '上次更新：2026-07-16',
      back: '回首页',
    },
    notFound: {
      title: '页面不存在',
      description: '这里还没有内容，或者链接已经变了。',
      back: '← 回首页',
    },
    error: {
      title: '出了点问题',
      retry: '重试',
    },
    loading: {
      text: 'loading',
    },
  },
  en: {
    hero: {
      badge: 'GITHUB STYLE · MINIMAL PERSONAL HOMEPAGE',
      positioning: 'Independent developer Tim | Building small tools with AI agents, researching Web3',
      subtitle: 'AI agent tools / Web3',
      geekMode: 'geek mode',
      focus: 'current_focus',
      mode: 'favorite_mode',
      focusValue: 'Ship useful things.',
      modeValue: 'Minimal, useful, maintainable.',
      seeProjects: 'See projects',
      followX: 'Follow on X',
      statProject: 'project',
      statProjects: 'projects',
      statStars: 'GitHub stars',
      statFollowers: 'on X',
    },
    nav: {
      projects: 'Projects',
      tools: 'Tools',
      web3: 'Web3',
      now: 'Now',
    },
    tools: {
      title: 'AI tools',
      subtitle: 'Filter by category. Entries with an official site link out.',
      all: 'All',
      tweet: 'Related post',
      todo: 'TODO',
    },
    web3: {
      title: 'Web3',
      subtitle: 'Early-project tracker. Cost, type, status, and notes are in the table.',
      disclaimer: 'Only projects that have not issued a token are listed. Points do not guarantee a redeemable token. This is not investment advice.',
      project: 'Project',
      cost: 'Cost',
      type: 'Type',
      status: 'Status',
      note: 'Note',
      updated: 'Updated',
      costFree: 'Free',
      costGas: 'Gas',
      costPaid: 'Paid',
      typeTrading: 'Trading',
      typeNonTrading: 'Non-trading',
      todo: 'TODO',
    },
    about: {
      title: 'About',
      stillTinkering: 'still tinkering...',
    },
    projects: {
      title: 'Projects',
      description: 'Things I have built, maintain, or find interesting.',
      open: 'Open',
    },
    contact: {
      title: 'Contact',
      description: 'Feel free to reach out for collaboration, ideas, or just to say hi.',
      preferred: 'Preferred for ideas and collaboration',
      wechat: 'WeChat',
    },
    footer: {
      builtWith: 'Built with curiosity.',
    },
    langToggle: {
      switchTo: '中文',
      aria: 'Switch language',
    },
    themeToggle: {
      aria: 'Toggle dark mode',
      light: 'Light',
      dark: 'Dark',
      theme: 'Theme',
    },
    now: {
      title: '/now',
      subtitle: 'What I am up to · July 2026',
      web3: 'Exploring Web3 airdrops, focusing on testnet opportunities for new L1s and cross-chain protocols.',
      golang: 'Golang is my primary language. I use it for tools, algorithms, automation, and side projects.',
      project: 'Polishing',
      projectSuffix: ' — a content polishing tool, deployed on Vercel.',
      mindset: 'Ship useful things. Keep it small, keep it sharp.',
      updated: 'Last updated: 2026-07-16',
      back: 'Home',
    },
    notFound: {
      title: 'Page not found',
      description: 'Nothing here yet, or the link has changed.',
      back: '← Go home',
    },
    error: {
      title: 'Something went wrong',
      retry: 'Retry',
    },
    loading: {
      text: 'loading',
    },
  },
};

export function t(lang: Lang, path: string): string {
  const keys = path.split('.');
  let result: unknown = translations[lang];
  for (const key of keys) {
    result = (result as Record<string, unknown>)[key];
  }
  return (result as string) ?? path;
}
