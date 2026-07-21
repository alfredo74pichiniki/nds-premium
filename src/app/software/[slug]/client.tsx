"use client";

import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import type { Article, ArticleListItem } from "@/components/article/PremiumArticlePage";
import { Code } from "lucide-react";

export default function SoftwareArticleClient({ slug, initialArticle, initialRelated }: { slug: string; initialArticle?: Article | null; initialRelated?: ArticleListItem[] }) {
    return (
        <PremiumArticlePage
            slug={slug}
            initialArticle={initialArticle}
            initialRelated={initialRelated}
            category="software"
            config={{
                name: "Software",
                color: "green",
                icon: <Code className="w-3 h-3" />,
                backLink: "/software",
                backLabel: "Back to Software",
                ctaTitle: "Looking for more software reviews?",
                ctaDescription: "Discover our comprehensive software guides and tool comparisons.",
                ctaButtonText: "View All Software Reviews"
            }}
        />
    );
}
