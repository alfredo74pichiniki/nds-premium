"use client";

import { CategoryListingPage } from "@/components/article/CategoryListingPage";
import { Tag } from "lucide-react";

export default function DealsPage() {
    return (
        <CategoryListingPage
            config={{
                name: "Deals",
                slug: "deals",
                emoji: "🏷️",
                color: "red",
                description: "The best tech deals, discounts, and limited-time offers",
                icon: <Tag className="w-4 h-4" />,
            }}
        />
    );
}
