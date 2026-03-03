import type { Metadata } from "next";
import { CategoryListingPage } from "@/components/article/CategoryListingPage";

const BASE_URL = "https://nestdigitalstudio.com";

export const metadata: Metadata = {
    title: "Best Outdoor & Adventure Gear 2026 | Nest Digital Studio",
    description: "Expert reviews of outdoor tech, adventure gear, and nature equipment. GPS, action cameras, and more.",
    alternates: { canonical: `${BASE_URL}/outdoor` },
    openGraph: {
        title: "Best Outdoor & Adventure Gear 2026 | Nest Digital Studio",
        description: "Expert reviews of outdoor tech, adventure gear, and nature equipment. GPS, action cameras, and more.",
        url: `${BASE_URL}/outdoor`,
        siteName: "Nest Digital Studio",
    },
};

export default function OutdoorPage() {
    return (
        <CategoryListingPage
            config={{
                name: "Outdoor",
                slug: "outdoor",
                emoji: "🏕️",
                color: "emerald",
                description: "Outdoor gear, adventure equipment, and nature tech reviews",
            }}
        />
    );
}
