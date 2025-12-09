import { Navbar } from "@/components/ui/Navbar";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Categories } from "@/components/home/Categories";
import { Methodology } from "@/components/home/Methodology";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Methodology />
      <Testimonials />
      <CTASection />
      <Footer />
      <AIChat />
    </main>
  );
}
