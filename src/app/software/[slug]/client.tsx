"use client";

import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import { Code } from "lucide-react";

export default function SoftwareArticleClient({ slug }: { slug: string }) {
    return (
        <PremiumArticlePage
            slug={slug}
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
