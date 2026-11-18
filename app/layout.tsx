import type { Metadata } from 'next';
import { IBM_Plex_Mono, Instrument_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { LangProvider } from '@/components/lang-provider';
import { siteMetadata } from '@/lib/site-metadata';
import { serializeStructuredData, siteStructuredData } from '@/lib/structured-data';
import './globals.css';

const sans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: true,
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
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
            __html: '(function(){try{var d=document.documentElement;var t=localStorage.getItem("theme");if(t==="light"){d.classList.remove("dark");d.style.colorScheme="light"}else{d.classList.add("dark");d.style.colorScheme="dark"}var l=localStorage.getItem("lang");d.lang=l==="en"?"en":"zh-CN"}catch(e){}})()',
          }}
        />
        <div className="atmosphere" aria-hidden="true" />
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
