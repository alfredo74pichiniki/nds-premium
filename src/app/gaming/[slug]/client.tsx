"use client";

import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import { Gamepad2 } from "lucide-react";

export default function GamingArticleClient({ slug }: { slug: string }) {
    return (
        <PremiumArticlePage
            slug={slug}
            category="gaming"
            config={{
                name: "Gaming",
                color: "purple",
                icon: <Gamepad2 className="w-3 h-3" />,
                backLink: "/gaming",
                backLabel: "Back to Gaming",
                ctaTitle: "Want more gaming gear reviews?",
                ctaDescription: "Explore our complete collection of gaming hardware guides and comparisons.",
                ctaButtonText: "View All Gaming Articles"
            }}
        />
    );
}
