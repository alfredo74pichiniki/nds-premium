"use client";

import { CategoryListingPage } from "@/components/article/CategoryListingPage";
import { Code } from "lucide-react";

export default function SoftwarePage() {
    return (
        <CategoryListingPage
            config={{
                name: "Software",
                slug: "software",
                emoji: "💻",
                color: "green",
                description: "Software reviews, tool comparisons, and productivity apps",
                icon: <Code className="w-4 h-4" />,
            }}
        />
    );
}
