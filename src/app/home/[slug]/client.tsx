"use client";

import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import type { Article, ArticleListItem } from "@/components/article/PremiumArticlePage";
import { Home } from "lucide-react";

export default function HomeArticleClient({ slug, initialArticle, initialRelated }: { slug: string; initialArticle?: Article | null; initialRelated?: ArticleListItem[] }) {
    return (
        <PremiumArticlePage
            slug={slug}
            initialArticle={initialArticle}
            initialRelated={initialRelated}
            category="home"
            config={{
                name: "Home & Smart Home",
                color: "amber",
                icon: <Home className="w-3 h-3" />,
                backLink: "/home",
                backLabel: "Back to Home & Smart Home",
                ctaTitle: "Looking for more home tech reviews?",
                ctaDescription: "Explore our guides on smart home devices, security systems, and home office gear.",
                ctaButtonText: "View All Home Articles"
            }}
        />
    );
}
