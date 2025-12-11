import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Gamepad2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const articles = [
    {
        title: "Best Gaming Monitors 2025: Every Resolution & Budget Tested",
        description: "We tested 15 monitors for input lag, color accuracy, and real gaming performance.",
        href: "/gaming/best-gaming-monitors-2025",
        badge: "Monitors",
        image: "/products/laptop.png",
    },
    {
        title: "Best Gaming Keyboards 2025: Hall Effect vs Mechanical",
        description: "Rapid Trigger, adjustable actuation, and the tech that actually matters.",
        href: "/gaming/best-gaming-keyboards",
        badge: "Keyboards",
        image: "/products/desk.png",
    },
];

export default function GamingPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 mb-6">
                            <Gamepad2 className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            Gaming & <span className="gradient-text">Entertainment</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Gaming hardware, peripherals, and setup guides tested by real gamers.
                        </p>
                    </div>

                    {/* Articles */}
                    <div className="space-y-6">
                        {articles.map(article => (
                            <Link
                                key={article.href}
                                href={article.href}
                                className="group block p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-fuchsia-500/30 transition-all"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-pink-500/10 flex-shrink-0 relative overflow-hidden">
                                        <Image src={article.image} alt={article.title} fill className="object-contain p-2" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="inline-block px-2 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold mb-2">
                                            {article.badge}
                                        </span>
                                        <h2 className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors mb-2">
                                            {article.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm">{article.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
            <AIChat />
        </main>
    );
}
