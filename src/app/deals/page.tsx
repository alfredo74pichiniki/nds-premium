import type { Metadata } from "next";
import { CategoryListingPage } from "@/components/article/CategoryListingPage";

const BASE_URL = "https://nestdigitalstudio.com";

export const metadata: Metadata = {
    title: "Best Tech Deals & Discounts 2026 | Nest Digital Studio",
    description: "Curated tech deals, limited-time discounts, and the best prices on top-rated products.",
    alternates: { canonical: `${BASE_URL}/deals` },
    openGraph: {
        title: "Best Tech Deals & Discounts 2026 | Nest Digital Studio",
        description: "Curated tech deals, limited-time discounts, and the best prices on top-rated products.",
        url: `${BASE_URL}/deals`,
        siteName: "Nest Digital Studio",
    },
};

export default function DealsPage() {
    return (
        <CategoryListingPage
            config={{
                name: "Deals",
                slug: "deals",
                emoji: "🏷️",
                color: "red",
                description: "The best tech deals, discounts, and limited-time offers",
            }}
        />
    );
}
