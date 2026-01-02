import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getArticlesByCategory } from "@/lib/articles";

function getEmoji(title: string): string {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("ergonomic") || titleLower.includes("setup")) return "🪑";
    if (titleLower.includes("remote") || titleLower.includes("work from home")) return "🏠";
    if (titleLower.includes("laptop") || titleLower.includes("computer")) return "💻";
    if (titleLower.includes("office")) return "🏢";
    if (titleLower.includes("productivity")) return "⚡";
    if (titleLower.includes("beginner") || titleLower.includes("start")) return "🚀";
    return "📖";
}

export default function GuidesPage() {
    // Leer artículos dinámicamente desde articles.json
    const articles = getArticlesByCategory("guides");

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 mb-6">
                            <BookOpen className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            How-To <span className="gradient-text">Guides</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            {articles.length} step-by-step guides to help you make better decisions and get things done.
                        </p>
                    </div>

                    {/* Articles */}
                    <div className="space-y-6">
                        {articles.map(article => (
                            <Link
                                key={article.href}
                                href={article.href}
                                className="group block p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 flex-shrink-0 flex items-center justify-center text-3xl">
                                        {getEmoji(article.title)}
                                    </div>
                                    <div className="flex-1">
                                        <span className="inline-block px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
                                            Guide
                                        </span>
                                        <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
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
                            <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-30" />
                            <p>No guides found yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
            <AIChat />
        </main>
    );
}
