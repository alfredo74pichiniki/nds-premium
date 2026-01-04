"use client";

import { CategoryListingPage } from "@/components/article/CategoryListingPage";
import { Star } from "lucide-react";

export default function ReviewsPage() {
    return (
        <CategoryListingPage
            config={{
                name: "Reviews",
                slug: "reviews",
                emoji: "⭐",
                color: "cyan",
                description: "Expert reviews and hands-on testing of the latest tech products",
                icon: <Star className="w-4 h-4" />,
            }}
        />
    );
}
