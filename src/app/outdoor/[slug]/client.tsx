"use client";

import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import { Mountain } from "lucide-react";

export default function OutdoorArticleClient({ slug }: { slug: string }) {
    return (
        <PremiumArticlePage
            slug={slug}
            category="outdoor"
            config={{
                name: "Outdoor",
                color: "emerald",
                icon: <Mountain className="w-3 h-3" />,
                backLink: "/outdoor",
                backLabel: "Back to Outdoor",
                ctaTitle: "Want more outdoor gear reviews?",
                ctaDescription: "Explore our complete collection of outdoor and adventure equipment reviews.",
                ctaButtonText: "View All Outdoor Articles"
            }}
        />
    );
}
