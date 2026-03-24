import { Navbar } from "@/components/ui/Navbar";
import DeepSpaceBackground from "@/components/effects/DeepSpaceBackground";
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
        title="Nest Digital Studio — Expert Tech Reviews & Digital Products"
        description="In-depth, data-driven reviews of technology products and services. We analyze 50,000+ verified reviews to deliver honest, unbiased recommendations."
        category="tech-reviews"
        slug=""
      />
      <main className="min-h-screen relative bg-transparent">
        {/* Global Deep Space Background - Fixed for all sections */}
        <div className="fixed inset-0 z-0">
          <DeepSpaceBackground />
        </div>
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
