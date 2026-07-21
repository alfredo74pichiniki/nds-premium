"use client";

import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import type { Article, ArticleListItem } from "@/components/article/PremiumArticlePage";
import { BookOpen } from "lucide-react";

export default function GuidesArticleClient({ slug, initialArticle, initialRelated }: { slug: string; initialArticle?: Article | null; initialRelated?: ArticleListItem[] }) {
    return (
        <PremiumArticlePage
            slug={slug}
            initialArticle={initialArticle}
            initialRelated={initialRelated}
            category="guides"
            config={{
                name: "Guides",
                color: "orange",
                icon: <BookOpen className="w-3 h-3" />,
                backLink: "/guides",
                backLabel: "Back to Guides",
                ctaTitle: "Want more expert guides?",
                ctaDescription: "Explore our complete collection of in-depth tutorials and how-to guides.",
                ctaButtonText: "View All Guides"
            }}
        />
    );
}
