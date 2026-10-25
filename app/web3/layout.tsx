import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { siteMetadata } from '@/lib/site-metadata';

const title = 'Web3 早期项目 / Web3';
const description = '尚未发币的 Web3 早期项目追踪。积分不保证可兑换代币，不构成投资建议。';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/web3' },
  openGraph: {
    ...siteMetadata.openGraph,
    title: title + ' | ' + siteConfig.name,
    description,
    url: '/web3',
    images: [{ url: '/og-image', width: 1200, height: 630, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: title + ' | ' + siteConfig.name,
    description,
    images: ['/og-image'],
  },
};

export default function Web3Layout({ children }: { children: React.ReactNode }) {
  return children;
}
