import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { LangProvider } from '@/components/lang-provider';
import { siteMetadata } from '@/lib/site-metadata';
import { serializeStructuredData, siteStructuredData } from '@/lib/structured-data';
import './globals.css';

const sans = Geist({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: true,
});

const mono = Geist_Mono({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-mono',
  display: 'swap',
  adjustFontFallback: true,
  preload: false,
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="describedby" href="/llms.txt" type="text/plain" />
      </head>
      <body className={`${sans.variable} ${mono.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: '(function(){try{var t=localStorage.getItem("theme");var d=document.documentElement;if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){d.classList.add("dark");d.style.colorScheme="dark"}else{d.style.colorScheme="light"}}catch(e){}})()',
          }}
        />
        <div className="grain" aria-hidden="true" />
        <LangProvider>{children}</LangProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeStructuredData(siteStructuredData),
          }}
        />
      </body>
    </html>
  );
}
