"use client";

import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import type { Article, ArticleListItem } from "@/components/article/PremiumArticlePage";
import { Tag } from "lucide-react";

export default function DealsArticleClient({ slug, initialArticle, initialRelated }: { slug: string; initialArticle?: Article | null; initialRelated?: ArticleListItem[] }) {
    return (
        <PremiumArticlePage
            slug={slug}
            initialArticle={initialArticle}
            initialRelated={initialRelated}
            category="deals"
            config={{
                name: "Deals",
                color: "red",
                icon: <Tag className="w-3 h-3" />,
                backLink: "/deals",
                backLabel: "Back to Deals",
                ctaTitle: "Want more deals?",
                ctaDescription: "Check out our curated collection of the best tech deals available right now.",
                ctaButtonText: "View All Deals"
            }}
        />
    );
}
