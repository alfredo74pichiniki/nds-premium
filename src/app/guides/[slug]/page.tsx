"use client";

import { useParams } from "next/navigation";
import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import { BookOpen } from "lucide-react";

export default function DynamicGuidePage() {
    const params = useParams();
    const slug = params.slug as string;

    return (
        <PremiumArticlePage
            slug={slug}
            category="guides"
            config={{
                name: "Guides",
                color: "orange",
                icon: <BookOpen className="w-3 h-3" />,
                backLink: "/guides",
                backLabel: "Back to Guides",
                ctaTitle: "📖 Want more expert guides?",
                ctaDescription: "Explore our complete collection of in-depth tutorials and how-to guides.",
                ctaButtonText: "View All Guides"
            }}
        />
    );
}
