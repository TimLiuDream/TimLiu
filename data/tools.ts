import type { LocalizedText } from '@/lib/i18n';

export type Tool = {
  name: string;
  /** Official site. An empty string is a TODO: the card renders without a link. */
  url: string;
  category: string;
  desc: LocalizedText;
  /** Related post. An empty string hides the link. */
  tweet: string;
};

export const toolCategoryLabels: Record<string, LocalizedText> = {
  研究: { zh: '研究', en: 'Research' },
  对话: { zh: '对话', en: 'Chat' },
  编程: { zh: '编程', en: 'Coding' },
  设计: { zh: '设计', en: 'Design' },
  视频: { zh: '视频', en: 'Video' },
  Agent: { zh: 'Agent', en: 'Agent' },
};

export function toolCategoryLabel(category: string, lang: 'zh' | 'en'): string {
  return toolCategoryLabels[category]?.[lang] ?? category;
}

export const tools: Tool[] = [
  {
    name: 'NotebookLM',
    url: 'https://notebooklm.google.com',
    category: '研究',
    desc: {
      zh: '丢进白皮书或文档，自动出摘要、问答，还能生成播客',
      en: 'Drop in a whitepaper or a document. It drafts a summary, answers questions, and can generate a podcast.',
    },
    tweet: '',
  },
  {
    name: 'Gemini',
    url: 'https://gemini.google.com',
    category: '对话',
    desc: {
      zh: '免费的谷歌 AI 助手，长文本和多模态都能处理',
      en: "Google's free AI assistant. It handles long text and multimodal input.",
    },
    tweet: '',
  },
  {
    name: 'Codex',
    url: 'https://chatgpt.com/codex',
    category: '编程',
    desc: {
      zh: 'OpenAI 的编程 Agent，能自己读仓库、改代码、提 PR',
      en: "OpenAI's coding agent. It can read a repository, change the code, and open a PR on its own.",
    },
    tweet: '',
  },
  {
    name: 'GitHub Copilot',
    url: 'https://github.com/features/copilot',
    category: '编程',
    desc: {
      zh: '编辑器里的 AI 补全和对话，写代码提速',
      en: 'AI autocomplete and chat in the editor, so writing code is faster.',
    },
    tweet: '',
  },
  {
    name: 'Canva',
    url: 'https://www.canva.com',
    category: '设计',
    desc: {
      zh: '模板加 AI 一键出封面和海报',
      en: 'Templates plus AI. A cover or poster in one step.',
    },
    tweet: '',
  },
  {
    name: 'CapCut',
    url: 'https://www.capcut.com',
    category: '视频',
    desc: {
      zh: 'AI 字幕、剪辑、配音，录屏教程很快就能剪好',
      en: 'AI captions, cutting, and voiceover. A screen-recording tutorial comes together quickly.',
    },
    tweet: '',
  },
  {
    name: 'Grok Bot',
    // TODO: 填上 Grok Bot 的正式 URL。留空时卡片不渲染外链。
    url: '',
    category: 'Agent',
    desc: {
      zh: '托管的 AI Agent，能帮你跑定时任务、写稿、做研究',
      en: 'A hosted AI agent that can run scheduled tasks, draft writing, and do research for you.',
    },
    tweet: '',
  },
];
