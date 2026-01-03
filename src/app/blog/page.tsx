import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Newspaper } from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";

// Article type
interface Article {
    slug: string;
    title: string;
    description?: string;
    category: string;
    articleType: string;
    date: string;
    wordCount: number;
    href?: string;
}

// Load articles from JSON at build time
async function getArticles(): Promise<Article[]> {
    const articlesPath = path.join(process.cwd(), "public", "data", "articles.json");

    try {
        const data = fs.readFileSync(articlesPath, "utf-8");
        const articles: Article[] = JSON.parse(data);

        // Filter only articles with real content (>100 words)
        // and sort by date (newest first)
        return articles
            .filter(a => a.wordCount > 100)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 20); // Show max 20 articles
    } catch (error) {
        console.error("Error loading articles:", error);
        return [];
    }
}

export default async function BlogPage() {
    const articles = await getArticles();

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 mb-6">
                            <Newspaper className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            NDS <span className="gradient-text">Blog</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Industry insights, product reviews, and tech guides.
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            {articles.length} articles available
                        </p>
                    </div>

                    {/* Articles Grid */}
                    <div className="space-y-6">
                        {articles.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-400">No articles available yet.</p>
                            </div>
                        ) : (
                            articles.map(article => {
                                // Determine the correct href based on category
                                const href = article.href || `/${article.category}/${article.slug}`;

                                return (
                                    <Link
                                        key={article.slug}
                                        href={href}
                                        className="group block p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-all"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="inline-block px-2 py-1 rounded-full bg-violet-500/20 text-violet-400 text-xs font-semibold capitalize">
                                                {article.category}
                                            </span>
                                            <span className="inline-block px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold capitalize">
                                                {article.articleType}
                                            </span>
                                            <span className="text-gray-500 text-sm">{article.date}</span>
                                            {article.wordCount > 1500 && (
                                                <span className="inline-block px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-semibold">
                                                    ⭐ Featured
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors mb-2">
                                            {article.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm">
                                            {article.description || `Expert ${article.articleType} about ${article.title.toLowerCase()}`}
                                        </p>
                                        <div className="mt-3 text-xs text-gray-500">
                                            {Math.ceil(article.wordCount / 200)} min read • {article.wordCount.toLocaleString()} words
                                        </div>
                                    </Link>
                                );
                            })
                        )}
                    </div>

                    {/* Category Links */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { name: "Reviews", href: "/reviews", color: "cyan" },
                            { name: "Gaming", href: "/gaming", color: "purple" },
                            { name: "Software", href: "/software", color: "green" },
                            { name: "Guides", href: "/guides", color: "orange" },
                            { name: "Deals", href: "/deals", color: "red" },
                        ].map(cat => (
                            <Link
                                key={cat.href}
                                href={cat.href}
                                className={`p-4 rounded-xl bg-${cat.color}-500/10 border border-${cat.color}-500/20 text-center hover:bg-${cat.color}-500/20 transition-colors`}
                            >
                                <span className={`text-${cat.color}-400 font-semibold`}>{cat.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-center">
                        <h3 className="font-bold text-white mb-2">📫 Stay Updated</h3>
                        <p className="text-gray-400 text-sm">Newsletter coming soon</p>
                    </div>
                </div>
            </section>
            <Footer />
            <AIChat />
        </main>
    );
}
