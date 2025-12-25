import { Navbar } from "@/components/ui/Navbar";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { Hero } from "@/components/home/Hero";
import { Categories } from "@/components/home/Categories";
import { Methodology } from "@/components/home/Methodology";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { Newsletter } from "@/components/home/Newsletter";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { FunZone } from "@/components/home/FunZone";

import { PageSEO } from "@/components/seo/PageSEO";

export default function Home() {
  return (
    <>
      <PageSEO
        title="Page Title"
        description="Page description"
        category=""
        slug=""
      />
      <main className="min-h-screen relative">
        <ParticleBackground />
        <Navbar />
        <Hero />
        <Categories />
        <Methodology />
        <Testimonials />
        {/* TODO: Descomentar cuando se creen las páginas de juegos /fun/* */}
        {/* <FunZone /> */}
        <CTASection />
        <Newsletter />
        <Footer />
        <AIChat />
      </main>
    </>
  );
}
