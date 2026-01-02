import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Gamepad2, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getArticlesByCategory } from "@/lib/articles";

function getEmoji(title: string): string {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("monitor")) return "🖥️";
    if (titleLower.includes("keyboard")) return "⌨️";
    if (titleLower.includes("mouse") || titleLower.includes("mice")) return "🖱️";
    if (titleLower.includes("headset") || titleLower.includes("audio")) return "🎧";
    if (titleLower.includes("chair")) return "🪑";
    if (titleLower.includes("router") || titleLower.includes("network")) return "📡";
    if (titleLower.includes("rgb") || titleLower.includes("lighting")) return "💡";
    if (titleLower.includes("earbuds")) return "🎵";
    return "🎮";
}

function getCategoryBadge(articleType: string): string {
    switch (articleType) {
        case "listicle": return "Best Picks";
        case "comparison": return "Comparison";
        case "review": return "Deep Review";
        case "guide": return "Guide";
        case "comprehensive": return "Ultimate Guide";
        default: return "Gaming";
    }
}

export default function GamingPage() {
    // Leer artículos dinámicamente desde articles.json
    const articles = getArticlesByCategory("gaming");

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
                            {articles.length} gaming hardware guides, peripherals, and setup reviews tested by real gamers.
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
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-pink-500/10 flex-shrink-0 flex items-center justify-center text-3xl">
                                        {getEmoji(article.title)}
                                    </div>
                                    <div className="flex-1">
                                        <span className="inline-block px-2 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold mb-2">
                                            {getCategoryBadge(article.articleType)}
                                        </span>
                                        <h2 className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors mb-2">
                                            {article.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm mb-3">{article.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(article.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                                            </div>
                                            {article.wordCount && article.wordCount > 0 && (
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {Math.ceil(article.wordCount / 200)} min read
                                                </div>
                                            )}
                                            <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {articles.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            <Gamepad2 className="w-16 h-16 mx-auto mb-4 opacity-30" />
                            <p>No gaming articles found yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
            <AIChat />
        </main>
    );
}
