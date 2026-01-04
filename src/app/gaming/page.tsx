"use client";

import { CategoryListingPage } from "@/components/article/CategoryListingPage";
import { Gamepad2 } from "lucide-react";

export default function GamingPage() {
    return (
        <CategoryListingPage
            config={{
                name: "Gaming",
                slug: "gaming",
                emoji: "🎮",
                color: "purple",
                description: "Gaming gear reviews, setups, and hardware recommendations",
                icon: <Gamepad2 className="w-4 h-4" />,
            }}
        />
    );
}
