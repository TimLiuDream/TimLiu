import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { LangProvider } from '@/components/lang-provider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://timliu.vercel.app'),
  title: 'TimLiu',
  description: 'TimLiu 的极简个人主页',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'TimLiu',
    description: 'TimLiu 的极简个人主页',
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
    title: 'TimLiu',
    description: 'TimLiu 的极简个人主页',
    images: ['/og-image'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: '(function(){try{var t=localStorage.getItem("theme");var d=document.documentElement;if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){d.classList.add("dark");d.style.colorScheme="dark"}else{d.style.colorScheme="light"}}catch(e){}})()',
          }}
        />
        <LangProvider>{children}</LangProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'TimLiu',
              url: 'https://timliu.vercel.app',
              sameAs: [
                'https://github.com/TimLiuDream',
                'https://t.me/dreamtimliu',
                'https://x.com/timliu92',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
