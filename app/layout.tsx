import type { Metadata } from 'next';
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
    images: ['/og-image.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
