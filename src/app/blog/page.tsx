"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Newspaper, Star, Clock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Article {
    slug: string;
    title: string;
    description?: string;
    category: string;
    articleType: string;
    date: string;
    wordCount: number;
    href?: string;
    featured?: boolean;
}

// Category icons/emojis
const categoryEmojis: Record<string, string> = {
    audio: "🎧",
    gaming: "🎮",
    software: "💻",
    guides: "📖",
    deals: "🏷️",
    reviews: "⭐",
    blog: "📝",
    outdoor: "🏕️",
};

export default function BlogPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadArticles() {
            try {
                const res = await fetch("/data/articles.json");
                const data = await res.json();
                const filtered = data
                    .filter((a: Article) => a.wordCount > 100)
                    .sort((a: Article, b: Article) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                    )
                    .slice(0, 20);
                setArticles(filtered);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
        loadArticles();
    }, []);

    if (loading) {
        return (
            <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full"
                />
            </main>
        );
    }

    const featuredArticle = articles.find(a => a.featured || a.wordCount > 2000);
    const regularArticles = articles.filter(a => a !== featuredArticle);

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header Premium */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm font-semibold mb-6">
                            <Newspaper className="w-4 h-4" />
                            NDS Blog
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black mb-4">
                            Tech{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Insights
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Expert analysis, in-depth reviews, and the latest tech trends
                        </p>
                        <p className="text-sm text-gray-500 mt-4">
                            {articles.length} articles available
                        </p>
                    </motion.div>

                    {/* Featured Article */}
                    {featuredArticle && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-12"
                        >
                            <Link href={featuredArticle.href || `/${featuredArticle.category}/${featuredArticle.slug}`}>
                                <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 hover:border-purple-500/50 transition-all">
                                    <div className="grid md:grid-cols-2 gap-8 p-8">
                                        {/* Thumbnail */}
                                        <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-purple-600/30 to-cyan-600/30 flex items-center justify-center">
                                            <span className="text-8xl opacity-40">
                                                {categoryEmojis[featuredArticle.category] || "📝"}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col justify-center">
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold flex items-center gap-1">
                                                    <Star className="w-3 h-3 fill-current" /> Featured
                                                </span>
                                                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm capitalize">
                                                    {featuredArticle.category}
                                                </span>
                                            </div>
                                            <h2 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors mb-4">
                                                {featuredArticle.title}
                                            </h2>
                                            <p className="text-gray-400 mb-6 line-clamp-3">
                                                {featuredArticle.description?.slice(0, 200) || `Expert ${featuredArticle.articleType || 'review'} about ${featuredArticle.title}`}
                                            </p>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {Math.ceil(featuredArticle.wordCount / 200)} min read
                                                </span>
                                                <span>{featuredArticle.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularArticles.map((article, index) => (
                            <motion.div
                                key={article.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                            >
                                <Link href={article.href || `/${article.category}/${article.slug}`}>
                                    <div className="group h-full rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 overflow-hidden transition-all hover:transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                                        {/* Thumbnail */}
                                        <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                                            <span className="text-5xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                                                {categoryEmojis[article.category] || "📝"}
                                            </span>
                                            {article.wordCount > 1500 && (
                                                <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-yellow-500/90 text-black text-xs font-bold">
                                                    ⭐ Long Read
                                                </span>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                                <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold capitalize">
                                                    {article.category}
                                                </span>
                                                <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs capitalize">
                                                    {(article.articleType || "review").replace(/_/g, " ")}
                                                </span>
                                            </div>

                                            <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2 mb-2">
                                                {article.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                                {article.description?.slice(0, 100) || `Expert ${article.articleType || 'article'} about ${article.title.toLowerCase()}`}
                                            </p>

                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {Math.ceil(article.wordCount / 200)} min
                                                </span>
                                                <span>{article.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Category Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-16"
                    >
                        <h2 className="text-xl font-bold text-white mb-6 text-center">
                            Browse by Category
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                            {[
                                { name: "Reviews", href: "/reviews", emoji: "⭐" },
                                { name: "Audio", href: "/audio", emoji: "🎧" },
                                { name: "Gaming", href: "/gaming", emoji: "🎮" },
                                { name: "Software", href: "/software", emoji: "💻" },
                                { name: "Guides", href: "/guides", emoji: "📖" },
                                { name: "Deals", href: "/deals", emoji: "🏷️" },
                                { name: "Outdoor", href: "/outdoor", emoji: "🏕️" },
                                { name: "Blog", href: "/blog", emoji: "📝" },
                            ].map((cat) => (
                                <Link
                                    key={cat.href}
                                    href={cat.href}
                                    className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center hover:border-purple-500/30 hover:bg-purple-500/10 transition-all"
                                >
                                    <span className="text-2xl block mb-2">{cat.emoji}</span>
                                    <span className="text-sm text-gray-400 group-hover:text-white font-medium">
                                        {cat.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <AIChat />
        </main>
    );
}
