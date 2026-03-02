"use client";

import { CategoryListingPage } from "@/components/article/CategoryListingPage";
import { Home } from "lucide-react";

export default function HomePage() {
    return (
        <CategoryListingPage
            config={{
                name: "Home & Smart Home",
                slug: "home",
                emoji: "🏠",
                color: "amber",
                description: "Smart home devices, security systems, and home office gear reviews",
                icon: <Home className="w-4 h-4" />,
            }}
        />
    );
}
