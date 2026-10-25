import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { siteMetadata } from '@/lib/site-metadata';

const title = 'AI 工具 / Tools';
const description = 'Tim 在用的 AI 工具：一句话用途、分类和官网。';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/tools' },
  openGraph: {
    ...siteMetadata.openGraph,
    title: title + ' | ' + siteConfig.name,
    description,
    url: '/tools',
    images: [{ url: '/og-image', width: 1200, height: 630, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: title + ' | ' + siteConfig.name,
    description,
    images: ['/og-image'],
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
