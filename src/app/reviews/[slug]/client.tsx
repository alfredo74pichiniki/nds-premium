"use client";

import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import type { Article, ArticleListItem } from "@/components/article/PremiumArticlePage";
import { Star } from "lucide-react";

export default function ReviewsArticleClient({ slug, initialArticle, initialRelated }: { slug: string; initialArticle?: Article | null; initialRelated?: ArticleListItem[] }) {
    return (
        <PremiumArticlePage
            slug={slug}
            initialArticle={initialArticle}
            initialRelated={initialRelated}
            category="reviews"
            config={{
                name: "Reviews",
                color: "cyan",
                icon: <Star className="w-3 h-3" />,
                backLink: "/reviews",
                backLabel: "Back to Reviews",
                ctaTitle: "Enjoyed this review?",
                ctaDescription: "Explore more expert reviews and comparisons on Nest Digital Studio.",
                ctaButtonText: "View All Reviews"
            }}
        />
    );
}
