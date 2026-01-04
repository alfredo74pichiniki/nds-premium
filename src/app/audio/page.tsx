"use client";

import { CategoryListingPage } from "@/components/article/CategoryListingPage";
import { Headphones } from "lucide-react";

export default function AudioPage() {
    return (
        <CategoryListingPage
            config={{
                name: "Audio",
                slug: "audio",
                emoji: "🎧",
                color: "pink",
                description: "Headphones, speakers, audio gear reviews and comparisons",
                icon: <Headphones className="w-4 h-4" />,
            }}
        />
    );
}
