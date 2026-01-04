"use client";

import { useParams } from "next/navigation";
import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import { Star } from "lucide-react";

export default function DynamicReviewPage() {
    const params = useParams();
    const slug = params.slug as string;

    return (
        <PremiumArticlePage
            slug={slug}
            category="reviews"
            config={{
                name: "Reviews",
                color: "cyan",
                icon: <Star className="w-3 h-3" />,
                backLink: "/reviews",
                backLabel: "Back to Reviews",
                ctaTitle: "📚 Enjoyed this review?",
                ctaDescription: "Explore more expert reviews and comparisons on Nest Digital Studio.",
                ctaButtonText: "View All Reviews"
            }}
        />
    );
}
