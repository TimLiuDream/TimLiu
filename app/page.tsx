import type { Metadata } from 'next';
import { siteMetadata } from '@/lib/site-metadata';
import { homeStructuredData, serializeStructuredData } from '@/lib/structured-data';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { LangToggle } from '@/components/lang-toggle';
import { Navbar } from '@/components/navbar';
import { ProjectsSection } from '@/components/projects-section';
import { ThemeToggle } from '@/components/theme-toggle';

export const metadata: Metadata = {
  alternates: { canonical: '/', types: { 'text/markdown': '/llms-full.txt' } },
  openGraph: { ...siteMetadata.openGraph, url: '/' },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(homeStructuredData) }}
      />
      <section className="mx-auto flex min-h-screen w-full max-w-[calc(100vw-25px)] flex-col px-5 py-6 sm:px-6 lg:max-w-[calc(100vw-100px)] lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Navbar />
          <div className="flex items-center gap-2">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </section>
    </main>
  );
}
