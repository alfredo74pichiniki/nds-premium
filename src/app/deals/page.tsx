import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Tag, Calendar, Percent, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { getArticlesByCategory } from "@/lib/articles";

function getEmoji(title: string): string {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("black friday")) return "🖤";
    if (titleLower.includes("cyber monday")) return "💻";
    if (titleLower.includes("prime day")) return "📦";
    if (titleLower.includes("christmas") || titleLower.includes("holiday")) return "🎄";
    if (titleLower.includes("flash") || titleLower.includes("limited")) return "⚡";
    return "🏷️";
}

export default function DealsPage() {
    // Leer artículos dinámicamente desde articles.json
    const articles = getArticlesByCategory("deals");

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 mb-6">
                            <Tag className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            Tech <span className="gradient-text">Deals</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            {articles.length} curated deals and discounts on the best tech products.
                        </p>
                    </div>

                    {/* Deals Alert Banner */}
                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-6 mb-12 text-center">
                        <Sparkles className="w-8 h-8 mx-auto mb-3 text-orange-400" />
                        <h3 className="text-xl font-bold mb-2">Deal Alert Enabled!</h3>
                        <p className="text-gray-400">We track prices daily and only feature genuine savings of 20% or more.</p>
                    </div>

                    {/* Articles */}
                    <div className="space-y-6">
                        {articles.map(article => (
                            <Link
                                key={article.href}
                                href={article.href}
                                className="group block p-6 rounded-2xl bg-gradient-to-r from-orange-500/5 to-red-500/5 border border-orange-500/20 hover:border-orange-500/50 transition-all"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/30 to-red-500/20 flex-shrink-0 flex items-center justify-center text-3xl">
                                        {getEmoji(article.title)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="inline-block px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-semibold">
                                                🔥 HOT DEAL
                                            </span>
                                            <span className="inline-block px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">
                                                <Percent className="w-3 h-3 inline mr-1" />
                                                Save Big
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                                            {article.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm mb-3">{article.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(article.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                                            </div>
                                            <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform text-orange-400" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {articles.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            <Tag className="w-16 h-16 mx-auto mb-4 opacity-30" />
                            <p>No deals available right now. Check back for upcoming sales!</p>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
            <AIChat />
        </main>
    );
}
