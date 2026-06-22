import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-[calc(100vw-25px)] flex-col px-5 py-6 sm:max-w-[calc(100vw-25px)] sm:px-6 lg:max-w-[calc(100vw-100px)] lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Navbar />
          <ThemeToggle />
        </div>
        <Hero />
        <AboutSection />
        <ContactSection />
        <Footer />
      </section>
    </main>
  );
}
