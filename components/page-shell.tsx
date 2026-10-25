'use client';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-[calc(100vw-25px)] flex-col px-5 py-6 sm:px-6 lg:max-w-[calc(100vw-100px)] lg:px-10">
        <Navbar />
        {children}
        <Footer />
      </section>
    </main>
  );
}
