import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: '%s | TimLiu' },
  description: siteConfig.summary.zh,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    locale: 'zh_CN',
    alternateLocale: ['en_US'],
    title: siteConfig.title,
    description: siteConfig.summary.zh,
    images: [
      {
        url: '/og-image',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.summary.zh,
    images: ['/og-image'],
  },
};
