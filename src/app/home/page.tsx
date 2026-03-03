import type { Metadata } from "next";
import { CategoryListingPage } from "@/components/article/CategoryListingPage";

const BASE_URL = "https://nestdigitalstudio.com";

export const metadata: Metadata = {
    title: "Best Smart Home & Home Office Tech 2026 | Nest Digital Studio",
    description: "Expert reviews of smart home devices, security systems, robot vacuums, and home office monitors.",
    alternates: { canonical: `${BASE_URL}/home` },
    openGraph: {
        title: "Best Smart Home & Home Office Tech 2026 | Nest Digital Studio",
        description: "Expert reviews of smart home devices, security systems, robot vacuums, and home office monitors.",
        url: `${BASE_URL}/home`,
        siteName: "Nest Digital Studio",
        images: [{ url: "/opengraph-image" }],
    },
};

export default function HomePage() {
    return (
        <CategoryListingPage
            config={{
                name: "Home & Smart Home",
                slug: "home",
                emoji: "🏠",
                color: "amber",
                description: "Smart home devices, security systems, and home office gear reviews",
            }}
        />
    );
}
