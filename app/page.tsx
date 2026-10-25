import type { Metadata } from 'next';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Hero } from '@/components/hero';
import { PageShell } from '@/components/page-shell';
import { ProjectsSection } from '@/components/projects-section';
import { getGithubStars } from '@/lib/github-stars';
import { siteConfig } from '@/lib/site-config';
import { siteMetadata } from '@/lib/site-metadata';
import { homeStructuredData, serializeStructuredData } from '@/lib/structured-data';

export const revalidate = 3600;

export const metadata: Metadata = {
  alternates: { canonical: '/', types: { 'text/markdown': '/llms-full.txt' } },
  openGraph: { ...siteMetadata.openGraph, url: '/' },
};

export default async function Home() {
  const github = siteConfig.contacts.find((contact) => contact.label === 'GitHub');
  const githubStars = await getGithubStars(github?.value ?? 'TimLiuDream');

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeStructuredData(homeStructuredData) }}
      />
      <Hero githubStars={githubStars} />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </PageShell>
  );
}
