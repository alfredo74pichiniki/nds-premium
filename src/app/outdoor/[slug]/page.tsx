"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Star, Sun } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { premiumComponents } from "@/components/article/ArticleComponents";

interface Article {
    slug: string;
    title: string;
    content: string;
    category: string;
    articleType: string;
    date: string;
    wordCount: number;
    score: number;
}

export default function DynamicOutdoorPage() {
    const params = useParams();
    const slug = params.slug as string;
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadArticle() {
            try {
                const res = await fetch(`/data/articles/${slug}.json`);
                if (res.ok) {
                    const data = await res.json();
                    setArticle(data);
                } else {
                    setError("Article not found");
                }
            } catch {
                setError("Failed to load article");
            } finally {
                setLoading(false);
            }
        }
        loadArticle();
    }, [slug]);

    if (loading) {
        return (
            <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full"
                />
            </main>
        );
    }

    if (error || !article) {
        return (
            <main className="min-h-screen bg-[#0a0a0a]">
                <Navbar />
                <div className="pt-32 pb-24 px-6 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Outdoor Article Not Found</h1>
                    <p className="text-gray-400 mb-8">The outdoor gear review you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/guides" className="text-teal-400 hover:underline">
                        ← Back to Guides
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    const readTime = Math.ceil(article.wordCount / 200);

    const cleanContent = (content: string): string => {
        let cleaned = content;
        cleaned = cleaned.replace(/^```markdown\s*/i, '');
        cleaned = cleaned.replace(/```\s*$/i, '');
        cleaned = cleaned.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/m, '');
        cleaned = cleaned.trim();
        return cleaned;
    };

    const articleContent = cleanContent(article.content);

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/guides"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Guides
                    </Link>

                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-xs font-semibold flex items-center gap-1">
                                <Sun className="w-3 h-3" /> Outdoor
                            </span>
                            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold capitalize">
                                {article.articleType}
                            </span>
                            {article.score >= 90 && (
                                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-semibold flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-current" /> Top Rated
                                </span>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {article.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {readTime} min read
                            </span>
                            <span className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                NDS Outdoor Team
                            </span>
                        </div>
                    </motion.header>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="article-content"
                    >
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={premiumComponents}
                        >
                            {articleContent}
                        </ReactMarkdown>
                    </motion.div>

                    <div className="mt-16 pt-8 border-t border-white/10">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-green-500/10 border border-teal-500/20">
                            <h3 className="text-lg font-bold text-white mb-2">🏕️ Looking for more outdoor gear?</h3>
                            <p className="text-gray-400 mb-4">
                                Explore our complete collection of outdoor equipment reviews and guides.
                            </p>
                            <Link
                                href="/guides"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full transition-colors"
                            >
                                View All Guides
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
