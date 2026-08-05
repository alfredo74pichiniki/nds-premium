"use client";

import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import type { Article, ArticleListItem } from "@/components/article/PremiumArticlePage";
import { Headphones } from "lucide-react";

export default function AudioArticleClient({ slug, initialArticle, initialRelated }: { slug: string; initialArticle?: Article | null; initialRelated?: ArticleListItem[] }) {
    return (
        <PremiumArticlePage
            slug={slug}
            initialArticle={initialArticle}
            initialRelated={initialRelated}
            category="audio"
            config={{
                name: "Audio",
                color: "pink",
                icon: <Headphones className="w-3 h-3" />,
                backLink: "/audio",
                backLabel: "Back to Audio",
                ctaTitle: "Want more audio gear reviews?",
                ctaDescription: "Explore our complete collection of headphone, speaker and microphone guides.",
                ctaButtonText: "View All Audio Articles"
            }}
        />
    );
}
