"use client";

/**
 * PremiumArticlePage - Reusable Premium Article Layout
 * FASE 6: Integration Component
 * 
 * This component provides a standardized premium layout for all article pages
 * with Schema markup, AuthorBio, Breadcrumbs, and related articles.
 */

import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
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

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

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

interface CategoryConfig {
    name: string;
    color: string;
    icon: React.ReactNode;
    backLink: string;
    backLabel: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButtonText: string;
}

interface PremiumArticlePageProps {
    slug: string;
    category: string;
    config: CategoryConfig;
}

// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

function cleanContent(content: string): string {
    let cleaned = content;
    cleaned = cleaned.replace(/^```markdown\s*/i, '');
    cleaned = cleaned.replace(/```\s*$/i, '');
    cleaned = cleaned.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/m, '');
    cleaned = cleaned.trim();
    return cleaned;
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export function PremiumArticlePage({ slug, category, config }: PremiumArticlePageProps) {
    const [article, setArticle] = useState<Article | null>(null);
    const [relatedArticles, setRelatedArticles] = useState<ArticleListItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadArticle() {
            try {
                // Load article content
                const res = await fetch(`/data/articles/${slug}.json`);
                if (res.ok) {
                    const data = await res.json();
                    setArticle(data);
                } else {
                    setError("Article not found");
                }

                // Load related articles
                const listRes = await fetch("/data/articles.json");
                if (listRes.ok) {
                    const allArticles = await listRes.json();
                    const related = allArticles
                        .filter((a: ArticleListItem) => a.slug !== slug && a.category === category)
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
    }, [slug, category]);

    // Loading state
    if (loading) {
        return (
            <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className={`w-8 h-8 border-2 border-${config.color}-500 border-t-transparent rounded-full`}
                />
            </main>
        );
    }

    // Error state
    if (error || !article) {
        return (
            <main className="min-h-screen bg-[#0a0a0a]">
                <Navbar />
                <div className="pt-32 pb-24 px-6 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">{config.name} Article Not Found</h1>
                    <p className="text-gray-400 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href={config.backLink} className={`text-${config.color}-400 hover:underline`}>
                        ← {config.backLabel}
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    const readTime = Math.ceil(article.wordCount / 200);
    const author = getDefaultAuthorForCategory(category);
    const articleContent = cleanContent(article.content);

    return (
        <>
            {/* Schema Markup for SEO */}
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
                url={`https://nestdigitalstudio.com/${category}/${slug}`}
            />

            {/* Reading Progress Bar */}
            <ReadingProgress />

            <main className="min-h-screen bg-[#0a0a0a]">
                <Navbar />

                <article className="pt-32 pb-24 px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Breadcrumbs */}
                        <Breadcrumbs
                            items={generateBreadcrumbs(category, article.title, slug)}
                            className="mb-8"
                        />

                        <motion.header
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12"
                        >
                            {/* Category Badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className={`px-3 py-1 rounded-full bg-${config.color}-500/20 text-${config.color}-400 text-xs font-semibold flex items-center gap-1`}>
                                    {config.icon} {config.name}
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

                            {/* Title */}
                            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                                {article.title}
                            </h1>

                            {/* Author Bio Header */}
                            <AuthorBio
                                author={author}
                                datePublished={article.date}
                                dateModified={article.date}
                                readTime={readTime}
                                variant="header"
                            />

                            {/* Trust Badges */}
                            <div className="flex flex-wrap items-center gap-3 mt-6">
                                <FactCheckBadge reviewerName="NDS Editorial Team" />
                                <ProductsTestedBadge count={5} />
                                <LastUpdatedBadge date={article.date} />
                            </div>
                        </motion.header>

                        {/* Article Content */}
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

                        {/* Author Bio Footer */}
                        <div className="mt-16 pt-8 border-t border-white/10">
                            <AuthorBio
                                author={author}
                                datePublished={article.date}
                                dateModified={article.date}
                                variant="footer"
                            />
                        </div>

                        {/* CTA Box */}
                        <div className={`mt-12 p-6 rounded-2xl bg-gradient-to-br from-${config.color}-500/10 to-purple-500/10 border border-${config.color}-500/20`}>
                            <h3 className="text-lg font-bold text-white mb-2">{config.ctaTitle}</h3>
                            <p className="text-gray-400 mb-4">{config.ctaDescription}</p>
                            <Link
                                href={config.backLink}
                                className={`inline-flex items-center gap-2 px-6 py-3 bg-${config.color}-500 hover:bg-${config.color}-600 text-white font-semibold rounded-full transition-colors`}
                            >
                                {config.ctaButtonText}
                            </Link>
                        </div>

                        {/* Related Articles */}
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

export default PremiumArticlePage;
