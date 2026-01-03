"use client";

/**
 * RelatedArticles - Related Articles Grid
 * FASE 4.4: Layout Components
 */

import React from "react";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface RelatedArticle {
    slug: string;
    title: string;
    description?: string;
    category: string;
    image?: string;
    href: string;
}

interface RelatedArticlesProps {
    articles: RelatedArticle[];
    maxItems?: number;
    title?: string;
    className?: string;
}

// ═══════════════════════════════════════════════════════════════
// CATEGORY COLORS
// ═══════════════════════════════════════════════════════════════

const categoryColors: Record<string, string> = {
    audio: "bg-pink-100 text-pink-700",
    gaming: "bg-purple-100 text-purple-700",
    software: "bg-blue-100 text-blue-700",
    guides: "bg-orange-100 text-orange-700",
    deals: "bg-red-100 text-red-700",
    reviews: "bg-green-100 text-green-700",
    blog: "bg-gray-100 text-gray-700",
    outdoor: "bg-teal-100 text-teal-700",
};

// ═══════════════════════════════════════════════════════════════
// PLACEHOLDER IMAGE
// ═══════════════════════════════════════════════════════════════

const PlaceholderImage = ({ category }: { category: string }) => (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-4xl opacity-30">
            {category === "audio" && "🎧"}
            {category === "gaming" && "🎮"}
            {category === "software" && "💻"}
            {category === "guides" && "📖"}
            {category === "deals" && "🏷️"}
            {category === "reviews" && "⭐"}
            {category === "outdoor" && "🏕️"}
            {!["audio", "gaming", "software", "guides", "deals", "reviews", "outdoor"].includes(category) && "📄"}
        </span>
    </div>
);

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
    articles,
    maxItems = 3,
    title = "You might also like",
    className = "",
}) => {
    const displayArticles = articles.slice(0, maxItems);

    if (displayArticles.length === 0) return null;

    return (
        <section className={`mt-16 pt-12 border-t border-gray-200 ${className}`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {displayArticles.map((article) => (
                    <a
                        key={article.slug}
                        href={article.href}
                        className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                            {article.image ? (
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            ) : (
                                <PlaceholderImage category={article.category} />
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            {/* Category badge */}
                            <span className={`
                inline-block px-2 py-1 text-xs font-medium rounded-full mb-2
                ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}
              `}>
                                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                            </span>

                            {/* Title */}
                            <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                                {article.title}
                            </h3>

                            {/* Description */}
                            {article.description && (
                                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                                    {article.description}
                                </p>
                            )}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default RelatedArticles;
