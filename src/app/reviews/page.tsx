import type { Metadata } from "next";
import { CategoryListingPage } from "@/components/article/CategoryListingPage";

const BASE_URL = "https://nestdigitalstudio.com";

export const metadata: Metadata = {
    title: "Expert Tech Reviews & Product Testing 2026 | Nest Digital Studio",
    description: "Hands-on product reviews powered by AI analysis and 50,000+ verified user reviews. Unbiased expert testing.",
    alternates: { canonical: `${BASE_URL}/reviews` },
    openGraph: {
        title: "Expert Tech Reviews & Product Testing 2026 | Nest Digital Studio",
        description: "Hands-on product reviews powered by AI analysis and 50,000+ verified user reviews. Unbiased expert testing.",
        url: `${BASE_URL}/reviews`,
        siteName: "Nest Digital Studio",
        images: [{ url: "/opengraph-image" }],
    },
};

export default function ReviewsPage() {
    return (
        <CategoryListingPage
            config={{
                name: "Reviews",
                slug: "reviews",
                emoji: "⭐",
                color: "cyan",
                description: "Expert reviews and hands-on testing of the latest tech products",
            }}
        />
    );
}
