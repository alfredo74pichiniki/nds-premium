"use client";

import { PremiumArticlePage } from "@/components/article/PremiumArticlePage";
import { Home } from "lucide-react";

export default function HomeArticleClient({ slug }: { slug: string }) {
    return (
        <PremiumArticlePage
            slug={slug}
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
