import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Code, Calendar, Clock, ArrowRight, Cloud, Shield, Cog } from "lucide-react";
import Link from "next/link";
import { getArticlesByCategoryAsync } from "@/lib/articles";

function getEmoji(title: string): string {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("seo")) return "🔍";
    if (titleLower.includes("hosting") || titleLower.includes("cloud")) return "☁️";
    if (titleLower.includes("vpn") || titleLower.includes("security") || titleLower.includes("password")) return "🔐";
    if (titleLower.includes("crm") || titleLower.includes("sales")) return "📊";
    if (titleLower.includes("project") || titleLower.includes("management")) return "📋";
    if (titleLower.includes("email") || titleLower.includes("marketing")) return "📧";
    if (titleLower.includes("video") || titleLower.includes("editing")) return "🎬";
    if (titleLower.includes("website") || titleLower.includes("builder")) return "🌐";
    if (titleLower.includes("ai") || titleLower.includes("automation")) return "🤖";
    return "💻";
}

function getCategoryBadge(articleType: string): string {
    switch (articleType) {
        case "listicle": return "Best Picks";
        case "comparison": return "Comparison";
        case "review": return "Deep Review";
        case "guide": return "Guide";
        case "comprehensive": return "Ultimate Guide";
        default: return "Software";
    }
}

// ISR: Revalidar cada 60 segundos para obtener nuevos artículos
export const revalidate = 60;

export default async function SoftwarePage() {
    // Leer artículos con ISR (revalidación automática cada 60s)
    const articles = await getArticlesByCategoryAsync("software");

    // Separar featured y regulares
    const featuredArticles = articles.filter(a => a.featured).slice(0, 2);
    const regularArticles = articles.filter(a => !a.featured || !featuredArticles.includes(a));

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
                            <Code className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            Software & <span className="gradient-text">SaaS Tools</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            {articles.length} expert reviews of the best software, cloud services, and SaaS platforms.
                        </p>
                    </div>

                    {/* Featured Grid */}
                    {featuredArticles.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {featuredArticles.map(article => (
                                <Link
                                    key={article.href}
                                    href={article.href}
                                    className="group block p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 hover:border-blue-500/50 transition-all"
                                >
                                    <div className="text-5xl mb-4">{getEmoji(article.title)}</div>
                                    <span className="inline-block px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold mb-2">
                                        {getCategoryBadge(article.articleType)}
                                    </span>
                                    <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                                        {article.title}
                                    </h2>
                                    <p className="text-gray-400 text-sm">{article.description}</p>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* All Articles */}
                    <h2 className="text-2xl font-bold mb-6">All Software Reviews ({regularArticles.length})</h2>
                    <div className="space-y-4">
                        {regularArticles.map(article => (
                            <Link
                                key={article.href}
                                href={article.href}
                                className="group block p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex-shrink-0 flex items-center justify-center text-2xl">
                                        {getEmoji(article.title)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="inline-block px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold mb-1">
                                            {getCategoryBadge(article.articleType)}
                                        </span>
                                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm truncate">{article.description}</p>
                                    </div>
                                    <div className="hidden md:flex items-center gap-3 text-sm text-gray-500">
                                        <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {articles.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            <Code className="w-16 h-16 mx-auto mb-4 opacity-30" />
                            <p>No software articles found yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
            <AIChat />
        </main>
    );
}
