export type Lang = 'zh' | 'en';

export const translations = {
  zh: {
    hero: {
      badge: 'GITHUB STYLE · 极简个人主页',
      greeting: '你好，我是',
      description: '这个站点是我的个人主场，用来介绍我自己，也记录我在做的事。',
      subtitle: 'Web3 撸空投 / Golang / Side Project',
      geekMode: 'geek mode',
      focus: 'current_focus',
      mode: 'favorite_mode',
      focusValue: 'Ship useful things.',
      modeValue: 'Minimal, useful, maintainable.',
      seeProjects: 'See projects',
    },
    about: {
      title: '关于我',
      stillTinkering: 'still tinkering...',
    },
    projects: {
      title: '项目',
      description: '一些我写过、在维护、或者觉得有意思的东西。',
    },
    contact: {
      title: '联系方式',
      description: '如果你想聊合作、项目、想法，欢迎联系我。',
      telegram: 'Telegram',
    },
    footer: {
      builtWith: 'Built with curiosity.',
    },
    langToggle: {
      switchTo: 'English',
    },
    now: {
      title: '/now',
      subtitle: '最近在做什么 · 2026 年 7 月',
      web3: '在 Web3 撸空投，关注新公链和跨链交互的测试网机会。',
      golang: '主力语言是 Golang，用它写工具、练算法、做自动化和 Side Project。',
      project: '打磨',
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
      greeting: "Hi, I'm",
      description: "This is my personal space to introduce myself and share what I'm building.",
      subtitle: 'Web3 Airdrops / Golang / Side Projects',
      geekMode: 'geek mode',
      focus: 'current_focus',
      mode: 'favorite_mode',
      focusValue: 'Ship useful things.',
      modeValue: 'Minimal, useful, maintainable.',
      seeProjects: 'See projects',
    },
    about: {
      title: 'About',
      stillTinkering: 'still tinkering...',
    },
    projects: {
      title: 'Projects',
      description: 'Things I have built, maintain, or find interesting.',
    },
    contact: {
      title: 'Contact',
      description: 'Feel free to reach out for collaboration, ideas, or just to say hi.',
      telegram: 'Telegram',
    },
    footer: {
      builtWith: 'Built with curiosity.',
    },
    langToggle: {
      switchTo: '中文',
    },
    now: {
      title: '/now',
      subtitle: 'What I am up to · July 2026',
      web3: 'Exploring Web3 airdrops, focusing on testnet opportunities for new L1s and cross-chain protocols.',
      golang: 'Golang is my primary language. I use it for tools, algorithms, automation, and side projects.',
      project: 'Polishing',
      mindset: 'Ship useful things. Keep it small, keep it sharp.',
      updated: 'Last updated: 2026-07-16',
      back: '← Home',
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