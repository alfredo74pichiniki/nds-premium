import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";

// Comparison articles - these link to existing or future article pages
const comparisonArticles = [
    {
        slug: "/reviews/best-noise-canceling-headphones",
        title: "Best Noise-Canceling Headphones 2025",
        description: "Sony XM5 vs Apple AirPods Max vs Bose QC Ultra - complete comparison",
        products: ["Sony WH-1000XM5", "Apple AirPods Max", "Bose QC Ultra", "Soundcore Space One"],
        category: "Audio",
        image: "🎧",
        exists: true,
    },
    {
        slug: "/reviews/best-standing-desks",
        title: "Best Standing Desks 2025",
        description: "Uplift V2 vs FlexiSpot E7 vs Secretlab Magnus Pro comparison",
        products: ["Uplift V2", "FlexiSpot E7", "Secretlab Magnus Pro"],
        category: "Home Office",
        image: "🪑",
        exists: true,
    },
];

// Coming soon articles - not yet created
const comingSoonArticles = [
    {
        title: "MacBook Pro vs Dell XPS vs ThinkPad",
        description: "Premium laptops for professionals compared",
        category: "Laptops",
        image: "💻",
    },
    {
        title: "iPhone 16 vs Samsung Galaxy S24 vs Pixel 9",
        description: "Flagship smartphones head-to-head",
        category: "Smartphones",
        image: "📱",
    },
    {
        title: "ChatGPT Plus vs Claude Pro vs Gemini Advanced",
        description: "AI assistants compared for productivity",
        category: "AI Tools",
        image: "🤖",
    },
    {
        title: "Logitech MX Master 3S vs Razer DeathAdder V3",
        description: "Productivity vs gaming mouse showdown",
        category: "Peripherals",
        image: "🖱️",
    },
];

export default function ComparePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--nds-primary)] to-[var(--nds-accent)] mb-6">
                        <Scale className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        Product <span className="gradient-text">Comparisons</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        In-depth head-to-head comparisons to help you choose
                    </p>
                </div>
            </section>

            {/* Available Comparisons */}
            <section className="pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Available Comparisons</h2>
                    <div className="space-y-4">
                        {comparisonArticles.map((article) => (
                            <Link
                                key={article.slug}
                                href={article.slug}
                                className="group flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[var(--nds-primary)]/30 transition-all"
                            >
                                <div className="text-5xl">{article.image}</div>
                                <div className="flex-1">
                                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--nds-primary)]/10 text-[var(--nds-primary)]">
                                        {article.category}
                                    </span>
                                    <h3 className="text-xl font-bold mt-2 group-hover:text-[var(--nds-primary)] transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        {article.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {article.products.map((product) => (
                                            <span
                                                key={product}
                                                className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400"
                                            >
                                                {product}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-[var(--nds-primary)] group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-gray-500">Coming Soon</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {comingSoonArticles.map((article) => (
                            <div
                                key={article.title}
                                className="p-5 bg-white/[0.01] border border-white/5 rounded-xl opacity-60"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl">{article.image}</span>
                                    <div>
                                        <span className="text-xs text-gray-600">
                                            {article.category}
                                        </span>
                                        <h3 className="font-semibold text-gray-400">
                                            {article.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <AIChat />
        </main>
    );
}
