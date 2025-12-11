import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Tag } from "lucide-react";
import Link from "next/link";

const deals = [
    {
        title: "Sony WH-1000XM5",
        originalPrice: "$399",
        salePrice: "$259",
        discount: "35% OFF",
        href: "https://amazon.com/dp/B09XS7JWHH?tag=nestdigital-20",
        category: "Audio",
    },
    {
        title: "LG 27GR95QE-B OLED Monitor",
        originalPrice: "$999",
        salePrice: "$799",
        discount: "$200 OFF",
        href: "https://amazon.com/dp/B0BCQHRWWL?tag=nestdigital-20",
        category: "Monitors",
    },
    {
        title: "Notion Plus Annual",
        originalPrice: "$10/mo",
        salePrice: "$5/mo",
        discount: "50% OFF",
        href: "https://notion.so/?ref=nds",
        category: "Software",
    },
];

export default function DealsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 mb-6">
                            <Tag className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            Tech <span className="gradient-text">Deals</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            Verified discounts on tech we actually recommend. Updated daily.
                        </p>
                        <Link
                            href="/deals/black-friday-tech-2025"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:shadow-lg transition-all"
                        >
                            🔥 Black Friday 2025 Deals →
                        </Link>
                    </div>

                    {/* Featured Deals */}
                    <div className="space-y-4">
                        {deals.map((deal, i) => (
                            <a
                                key={i}
                                href={deal.href}
                                target="_blank"
                                rel="nofollow sponsored noopener"
                                className="group block p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/5 border border-green-500/20 hover:border-green-500/40 transition-all"
                            >
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <span className="inline-block px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold mb-2">
                                            {deal.discount}
                                        </span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{deal.title}</h3>
                                        <p className="text-gray-500 text-sm">{deal.category}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-500 line-through text-sm">{deal.originalPrice}</p>
                                        <p className="text-3xl font-black text-green-400">{deal.salePrice}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <p className="text-gray-400 mb-4">Want deal alerts? We're building a newsletter.</p>
                        <p className="text-sm text-gray-500">Coming soon</p>
                    </div>
                </div>
            </section>
            <Footer />
            <AIChat />
        </main>
    );
}
