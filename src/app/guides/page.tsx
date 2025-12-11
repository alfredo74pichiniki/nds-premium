import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { BookOpen } from "lucide-react";
import Link from "next/link";

const guides = [
    {
        title: "How to Choose a Laptop in 2025: No BS Buying Guide",
        description: "Stop overpaying for specs you don't need. Match a laptop to your actual use case.",
        href: "/guides/how-to-choose-laptop",
        badge: "Laptops",
    },
];

export default function GuidesPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
                            <BookOpen className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            Buying <span className="gradient-text">Guides</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            In-depth guides to help you make informed tech purchases.
                        </p>
                    </div>

                    {/* Guides */}
                    <div className="space-y-6">
                        {guides.map(guide => (
                            <Link
                                key={guide.href}
                                href={guide.href}
                                className="group block p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all"
                            >
                                <span className="inline-block px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold mb-2">
                                    {guide.badge}
                                </span>
                                <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                                    {guide.title}
                                </h2>
                                <p className="text-gray-400 text-sm">{guide.description}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Related */}
                    <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="font-bold text-white mb-4">More Resources</h3>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/tools/productivity-stack-calculator" className="px-4 py-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm">
                                🧮 Productivity Calculator
                            </Link>
                            <Link href="/software/hosting-comparison-2025" className="px-4 py-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm">
                                🌐 Hosting Comparison
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <AIChat />
        </main>
    );
}
