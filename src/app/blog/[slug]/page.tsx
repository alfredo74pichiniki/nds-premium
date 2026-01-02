"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Star } from "lucide-react";
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

export default function DynamicArticlePage() {
    const params = useParams();
    const slug = params.slug as string;
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadArticle() {
            try {
                // Try to load from individual article JSON
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
                    className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full"
                />
            </main>
        );
    }

    if (error || !article) {
        return (
            <main className="min-h-screen bg-[#0a0a0a]">
                <Navbar />
                <div className="pt-32 pb-24 px-6 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
                    <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
                    <Link href="/blog" className="text-cyan-400 hover:underline">
                        ← Back to Blog
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    const readTime = Math.ceil(article.wordCount / 200);

    // Clean content: remove frontmatter and markdown code block wrappers
    const cleanContent = (content: string): string => {
        let cleaned = content;

        // Remove ```markdown wrapper at start
        cleaned = cleaned.replace(/^```markdown\s*/i, '');

        // Remove closing ``` at end
        cleaned = cleaned.replace(/```\s*$/i, '');

        // Remove YAML frontmatter (---\n...\n---)
        cleaned = cleaned.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/m, '');

        // Trim whitespace
        cleaned = cleaned.trim();

        return cleaned;
    };

    const articleContent = cleanContent(article.content);

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold capitalize">
                                {article.category}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold capitalize">
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
                                NDS AI Editor
                            </span>
                        </div>
                    </motion.header>

                    {/* Content - Premium Styled */}
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

                    {/* Article Footer */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                            <h3 className="text-lg font-bold text-white mb-2">📚 Enjoyed this article?</h3>
                            <p className="text-gray-400 mb-4">
                                Explore more expert reviews and comparisons on Nest Digital Studio.
                            </p>
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-colors"
                            >
                                View All Articles
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
