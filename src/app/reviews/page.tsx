import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Calendar, Clock, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { getArticlesByCategory } from "@/lib/articles";

// Emoji mapping para categorías de artículos
const categoryEmojis: Record<string, string> = {
    "Audio": "🎧",
    "Peripherals": "⌨️",
    "Work From Home": "🏠",
    "Accessories": "🔌",
    "Smart Home": "🏠",
    "default": "📦"
};

function getEmoji(title: string): string {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("headphone") || titleLower.includes("earbuds") || titleLower.includes("audio")) return "🎧";
    if (titleLower.includes("keyboard")) return "⌨️";
    if (titleLower.includes("webcam")) return "📷";
    if (titleLower.includes("desk") || titleLower.includes("standing")) return "🪑";
    if (titleLower.includes("lamp") || titleLower.includes("light")) return "💡";
    if (titleLower.includes("usb") || titleLower.includes("hub") || titleLower.includes("charger")) return "🔌";
    if (titleLower.includes("microphone") || titleLower.includes("mic")) return "🎙️";
    if (titleLower.includes("smart") || titleLower.includes("home")) return "🏠";
    if (titleLower.includes("monitor") || titleLower.includes("riser")) return "🖥️";
    if (titleLower.includes("mouse") || titleLower.includes("mouse pad")) return "🖱️";
    if (titleLower.includes("cable")) return "🔗";
    if (titleLower.includes("chair")) return "🪑";
    if (titleLower.includes("scanner") || titleLower.includes("document")) return "📄";
    if (titleLower.includes("heater") || titleLower.includes("warm")) return "🔥";
    if (titleLower.includes("organizer")) return "📁";
    if (titleLower.includes("noise") || titleLower.includes("focus")) return "🔇";
    if (titleLower.includes("power") || titleLower.includes("portable")) return "🔋";
    if (titleLower.includes("glasses") || titleLower.includes("blue light")) return "👓";
    if (titleLower.includes("cooling")) return "❄️";
    return "📦";
}

function getCategoryBadge(articleType: string): string {
    switch (articleType) {
        case "listicle": return "Best Picks";
        case "comparison": return "Comparison";
        case "review": return "Deep Review";
        case "guide": return "Guide";
        case "comprehensive": return "Ultimate Guide";
        default: return "Review";
    }
}

export default function ReviewsPage() {
    // Leer artículos dinámicamente desde articles.json
    const allArticles = getArticlesByCategory("reviews");

    // Separar featured (artículos con más de 2000 palabras) y regulares
    const featuredArticles = allArticles.filter(a => a.featured).slice(0, 2);
    const regularArticles = allArticles.filter(a => !a.featured || !featuredArticles.includes(a));

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-black mb-6">
                        Expert <span className="gradient-text">Tech Reviews</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {allArticles.length} in-depth buying guides backed by real testing and verified user reviews
                    </p>
                </div>
            </section>

            {/* Featured */}
            {featuredArticles.length > 0 && (
                <section className="pb-16 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold mb-8">Featured Guides</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {featuredArticles.map((article) => (
                                <Link
                                    key={article.slug}
                                    href={article.href}
                                    className="group block bg-gradient-to-br from-[var(--nds-primary)]/10 to-transparent border border-[var(--nds-primary)]/20 rounded-2xl p-8 hover:border-[var(--nds-primary)]/50 transition-all duration-300"
                                >
                                    <div className="text-6xl mb-6">{getEmoji(article.title)}</div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--nds-primary)]/10 text-[var(--nds-primary)] text-xs font-medium mb-3">
                                        {getCategoryBadge(article.articleType)}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--nds-primary)] transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">{article.description}</p>
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
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Reviews */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8">All Buying Guides ({regularArticles.length})</h2>
                    <div className="space-y-4">
                        {regularArticles.map((article) => (
                            <Link
                                key={article.slug}
                                href={article.href}
                                className="group flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-[var(--nds-primary)]/30 transition-all"
                            >
                                <div className="text-4xl">{getEmoji(article.title)}</div>
                                <div className="flex-1">
                                    <span className="text-xs text-[var(--nds-primary)] font-medium">
                                        {getCategoryBadge(article.articleType)}
                                    </span>
                                    <h3 className="text-lg font-semibold group-hover:text-[var(--nds-primary)] transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">{article.description}</p>
                                </div>
                                <div className="hidden md:flex items-center gap-4 text-sm text-gray-500">
                                    <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
                                    {article.wordCount && article.wordCount > 0 && (
                                        <span>{Math.ceil(article.wordCount / 200)} min</span>
                                    )}
                                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[var(--nds-primary)] group-hover:translate-x-1 transition-all" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    {regularArticles.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            <p>No articles found in this category yet.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
            <AIChat />
        </main>
    );
}
