import type { Metadata } from 'next';
import { siteMetadata } from '@/lib/site-metadata';
import { siteConfig } from '@/lib/site-config';
import { t } from '@/lib/i18n';

const title = '近况 / Now';
const description = t('zh', 'now.web3') + ' ' + t('zh', 'now.golang');

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/now' },
  openGraph: {
    ...siteMetadata.openGraph,
    title: title + ' | ' + siteConfig.name,
    description,
    url: '/now',
    images: [{ url: '/og-image', width: 1200, height: 630, type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: title + ' | ' + siteConfig.name,
    description,
    images: ['/og-image'],
  },
};

export default function NowLayout({ children }: { children: React.ReactNode }) {
  return children;
}
