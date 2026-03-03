import type { Metadata } from "next";
import { CategoryListingPage } from "@/components/article/CategoryListingPage";

const BASE_URL = "https://nestdigitalstudio.com";

export const metadata: Metadata = {
    title: "Tech Guides & Tutorials 2026 | Nest Digital Studio",
    description: "In-depth how-to guides, tutorials, and expert tips for getting the most out of your tech.",
    alternates: { canonical: `${BASE_URL}/guides` },
    openGraph: {
        title: "Tech Guides & Tutorials 2026 | Nest Digital Studio",
        description: "In-depth how-to guides, tutorials, and expert tips for getting the most out of your tech.",
        url: `${BASE_URL}/guides`,
        siteName: "Nest Digital Studio",
        images: [{ url: "/opengraph-image" }],
    },
};

export default function GuidesPage() {
    return (
        <CategoryListingPage
            config={{
                name: "Guides",
                slug: "guides",
                emoji: "📖",
                color: "orange",
                description: "In-depth tutorials, how-to guides, and expert tips",
            }}
        />
    );
}
