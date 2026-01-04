"use client";

import { CategoryListingPage } from "@/components/article/CategoryListingPage";
import { BookOpen } from "lucide-react";

export default function GuidesPage() {
    return (
        <CategoryListingPage
            config={{
                name: "Guides",
                slug: "guides",
                emoji: "📖",
                color: "orange",
                description: "In-depth tutorials, how-to guides, and expert tips",
                icon: <BookOpen className="w-4 h-4" />,
            }}
        />
    );
}
