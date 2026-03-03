import type { Metadata } from "next";
import { CategoryListingPage } from "@/components/article/CategoryListingPage";

const BASE_URL = "https://nestdigitalstudio.com";

export const metadata: Metadata = {
    title: "Best Gaming Gear & Hardware 2026 | Nest Digital Studio",
    description: "In-depth gaming laptop, mouse, keyboard, and monitor reviews. Tested by experts with real benchmarks.",
    alternates: { canonical: `${BASE_URL}/gaming` },
    openGraph: {
        title: "Best Gaming Gear & Hardware 2026 | Nest Digital Studio",
        description: "In-depth gaming laptop, mouse, keyboard, and monitor reviews. Tested by experts with real benchmarks.",
        url: `${BASE_URL}/gaming`,
        siteName: "Nest Digital Studio",
    },
};

export default function GamingPage() {
    return (
        <CategoryListingPage
            config={{
                name: "Gaming",
                slug: "gaming",
                emoji: "🎮",
                color: "purple",
                description: "Gaming gear reviews, setups, and hardware recommendations",
            }}
        />
    );
}
