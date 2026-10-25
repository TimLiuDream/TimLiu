import type { LocalizedText } from '@/lib/i18n';

export type ProjectLink = {
  href: string;
  label?: LocalizedText;
};

export type Project = {
  id: string;
  name: string;
  problem: LocalizedText;
  /** Longer copy for llms.txt and structured data. The card does not render it. */
  details?: LocalizedText;
  metric?: LocalizedText;
  /** Public path or absolute URL. Omitted until a real screenshot exists. */
  screenshot?: string;
  links: ProjectLink[];
  applicationCategory?: string;
};

export function projectHref(project: Project): string | undefined {
  const link = project.links.find((item) => item.href.trim().length > 0);
  return link?.href;
}

export const projects: Project[] = [
  {
    id: 'design-desk',
    name: 'DesignDesk',
    problem: {
      zh: '不会设计也能 1 分钟出封面和商品图，生成、抠图、换背景、扩图都在一个工作台里',
      en: 'Covers and product images in about a minute, even if you do not design. Generate, cut out, replace the background, and outpaint in one workspace.',
    },
    details: {
      zh: '面向内容创作者与电商，从提示词或参考图生成封面和商品场景图，支持抠图、换背景、擦除与扩图，提供免费基础图片工具及素材管理，结果可预览、下载。AI 生成与编辑按次计费。',
      en: 'Create covers and product scenes from prompts or reference images, with background removal and replacement, object erasing, and outpainting. Built for content creators and e-commerce, with free basic image tools, asset management, and result previews and downloads. AI generation and editing are charged per use.',
    },
    links: [{ href: 'https://designdesk.timliu.xyz/' }],
    applicationCategory: 'DesignApplication',
  },
  {
    id: 'alpha-strategy',
    name: 'AlphaStrategy',
    problem: {
      zh: '币安 Alpha 空投领完是卖还是拿？用历史数据回测 4 种策略告诉你答案',
      en: 'Sell or hold a Binance Alpha airdrop? Backtest four strategies on historical data and get an answer.',
    },
    details: {
      zh: '通过历史数据比较领取即卖、目标倍数卖出、一直持有和半卖半留四种策略，支持倍数、滑点、年份与公链筛选，附回测报告和数据口径说明。结果为历史模拟与持仓估值。',
      en: 'Compare four Binance Alpha airdrop strategies using historical data: sell on receipt, sell at a target multiple, hold, or sell half and hold half. Adjust the target multiple and slippage, filter by year and chain, and review the backtest report and methodology. Results are historical simulations and holding valuations.',
    },
    links: [{ href: 'https://alpha-strategy.vercel.app/' }],
    applicationCategory: 'FinanceApplication',
  },
  {
    id: 'squareops',
    name: 'SquareOps',
    problem: {
      zh: '币安广场创作者的内容流水线，活动雷达、选题、写作、发布一条龙',
      en: 'A content pipeline for Binance Square creators: activity radar, topics, writing, and publishing in one flow.',
    },
    details: {
      zh: '面向币安广场内容创作者，将活动雷达、材料评分、选题、写作与发布串成内容工作流。',
      en: 'A content workflow for Binance Square creators, covering activity discovery, source scoring, topic selection, writing, and publishing.',
    },
    links: [{ href: 'https://square.timliu.xyz' }],
  },
  {
    id: 'content-polish',
    name: 'ContentPolish',
    problem: {
      zh: '多平台排版 + AI 润色，一键把文案排成公众号/小红书/知乎/推特格式',
      en: 'Multi-platform layout plus AI polish. Turn copy into WeChat, Xiaohongshu, Zhihu, or Twitter format in one step.',
    },
    details: {
      zh: '面向需要打磨文字内容的用户，用于改进内容表达；可以通过项目网站访问。',
      en: 'A tool for people who want to refine written content and improve its expression, available through the project website.',
    },
    links: [{ href: 'https://content-polish.vercel.app/' }],
  },
  {
    id: 'dreamer-labs',
    name: 'Dreamer Labs',
    problem: {
      zh: 'Codex / AI 订阅充值小站，不用折腾海外卡就能用上',
      en: 'A top-up shop for Codex and other AI subscriptions, so you can use them without an overseas card.',
    },
    // TODO: 填上 Dreamer Labs（充值小站）的正式 URL。留空时卡片不渲染外链。
    links: [],
  },
];
