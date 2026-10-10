import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { LangProvider } from '@/components/lang-provider';
import { siteMetadata } from '@/lib/site-metadata';
import { serializeStructuredData, siteStructuredData } from '@/lib/structured-data';
import './globals.css';

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
            __html: serializeStructuredData(siteStructuredData),
          }}
        />
      </body>
    </html>
  );
}
