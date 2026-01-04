"use client";

import { CategoryListingPage } from "@/components/article/CategoryListingPage";
import { Mountain } from "lucide-react";

export default function OutdoorPage() {
    return (
        <CategoryListingPage
            config={{
                name: "Outdoor",
                slug: "outdoor",
                emoji: "🏕️",
                color: "emerald",
                description: "Outdoor gear, adventure equipment, and nature tech reviews",
                icon: <Mountain className="w-4 h-4" />,
            }}
        />
    );
}
