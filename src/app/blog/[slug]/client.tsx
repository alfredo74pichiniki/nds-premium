"use client";

import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import { Newspaper } from "lucide-react";

export default function BlogArticleClient({ slug }: { slug: string }) {
    return (
        <PremiumArticlePage
            slug={slug}
            category="blog"
            config={{
                name: "Blog",
                color: "cyan",
                icon: <Newspaper className="w-3 h-3" />,
                backLink: "/blog",
                backLabel: "Back to Blog",
                ctaTitle: "Enjoyed this article?",
                ctaDescription: "Explore more expert reviews and comparisons on Nest Digital Studio.",
                ctaButtonText: "View All Articles"
            }}
        />
    );
}
