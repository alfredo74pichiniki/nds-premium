import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-12 px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-black mb-4">
                    <span className="gradient-text">Trending</span> Products
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Curated picks across tech, software, and digital tools - updated daily by our AI
                </p>
            </section>

            <FeaturedProducts />

            <Footer />
            <AIChat />
        </main>
    );
}
