"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { motion } from "framer-motion";
import { Headphones, Star } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { premiumComponents } from "@/components/article/ArticleComponents";
import {
    AuthorBio,
    FactCheckBadge,
    ProductsTestedBadge,
    LastUpdatedBadge,
    ReadingProgress,
    RelatedArticles,
    Breadcrumbs,
    generateBreadcrumbs,
    SchemaMarkup
} from "@/components/article";
import { getDefaultAuthorForCategory } from "@/data/authors";

interface Article {
    slug: string;
    title: string;
    description?: string;
    content: string;
    category: string;
    articleType: string;
    date: string;
    wordCount: number;
    score?: number;
}

interface ArticleListItem {
    slug: string;
    title: string;
    category: string;
    articleType: string;
    date: string;
    wordCount: number;
    href?: string;
}

export default function AudioArticleClient({ slug }: { slug: string }) {
    const [article, setArticle] = useState<Article | null>(null);
    const [relatedArticles, setRelatedArticles] = useState<ArticleListItem[]>([]);
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

                const listRes = await fetch("/data/articles.json");
                if (listRes.ok) {
                    const allArticles = await listRes.json();
                    const related = allArticles
                        .filter((a: ArticleListItem) => a.slug !== slug && (a.category === "audio" || a.category === "reviews"))
                        .slice(0, 3);
                    setRelatedArticles(related);
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
                    className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full"
                />
            </main>
        );
    }

    if (error || !article) {
        return (
            <main className="min-h-screen bg-[#0a0a0a]">
                <Navbar />
                <div className="pt-32 pb-24 px-6 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Audio Article Not Found</h1>
                    <p className="text-gray-400 mb-8">The audio review you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/reviews" className="text-pink-400 hover:underline">
                        Back to Reviews
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    const readTime = Math.ceil(article.wordCount / 200);
    const author = getDefaultAuthorForCategory("audio");

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
        <>
            <SchemaMarkup
                article={{
                    title: article.title,
                    slug: slug,
                    description: article.description || article.title,
                    category: article.category,
                    articleType: (article.articleType as "comparison" | "review" | "best_list" | "how_to_guide" | "news" | "deals_roundup" | "trend_analysis" | "opinion") || "review",
                    datePublished: article.date,
                    dateModified: article.date,
                    author: author,
                    wordCount: article.wordCount,
                    readTime: readTime,
                    products: [],
                    faqs: [],
                    relatedArticles: [],
                }}
                url={`https://nestdigitalstudio.com/audio/${slug}`}
            />

            <ReadingProgress />

            <main className="min-h-screen bg-[#0a0a0a]">
                <Navbar />

                <article className="pt-32 pb-24 px-6">
                    <div className="max-w-4xl mx-auto">
                        <Breadcrumbs
                            items={generateBreadcrumbs("audio", article.title, slug)}
                            className="mb-8"
                        />

                        <motion.header
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12"
                        >
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs font-semibold flex items-center gap-1">
                                    <Headphones className="w-3 h-3" /> Audio
                                </span>
                                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold capitalize">
                                    {article.articleType.replace(/_/g, " ")}
                                </span>
                                {article.score && article.score >= 90 && (
                                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-semibold flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-current" /> Top Rated
                                    </span>
                                )}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                                {article.title}
                            </h1>

                            <AuthorBio
                                author={author}
                                datePublished={article.date}
                                dateModified={article.date}
                                readTime={readTime}
                                variant="header"
                            />

                            <div className="flex flex-wrap items-center gap-3 mt-6">
                                <FactCheckBadge reviewerName="NDS Editorial Team" />
                                <ProductsTestedBadge count={5} />
                                <LastUpdatedBadge date={article.date} />
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
                            <AuthorBio
                                author={author}
                                datePublished={article.date}
                                dateModified={article.date}
                                variant="footer"
                            />
                        </div>

                        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20">
                            <h3 className="text-lg font-bold text-white mb-2">Want more audio reviews?</h3>
                            <p className="text-gray-400 mb-4">
                                Explore our complete collection of headphones, earbuds, and audio gear reviews.
                            </p>
                            <Link
                                href="/reviews"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition-colors"
                            >
                                View All Reviews
                            </Link>
                        </div>

                        {relatedArticles.length > 0 && (
                            <div className="mt-16">
                                <RelatedArticles
                                    articles={relatedArticles.map(a => ({
                                        slug: a.slug,
                                        title: a.title,
                                        category: a.category,
                                        href: a.href || `/${a.category}/${a.slug}`,
                                        readTime: Math.ceil(a.wordCount / 200),
                                    }))}
                                    maxItems={3}
                                />
                            </div>
                        )}
                    </div>
                </article>

                <Footer />
                <AIChat />
            </main>
        </>
    );
}
