import type { Metadata } from "next";
import { CategoryListingPage } from "@/components/article/CategoryListingPage";

const BASE_URL = "https://nestdigitalstudio.com";

export const metadata: Metadata = {
    title: "Best Software & Productivity Tools 2026 | Nest Digital Studio",
    description: "Expert reviews of the best software tools, productivity apps, and SaaS platforms. AI-powered analysis with real user data.",
    alternates: { canonical: `${BASE_URL}/software` },
    openGraph: {
        title: "Best Software & Productivity Tools 2026 | Nest Digital Studio",
        description: "Expert reviews of the best software tools, productivity apps, and SaaS platforms. AI-powered analysis with real user data.",
        url: `${BASE_URL}/software`,
        siteName: "Nest Digital Studio",
    },
};

export default function SoftwarePage() {
    return (
        <CategoryListingPage
            config={{
                name: "Software",
                slug: "software",
                emoji: "💻",
                color: "green",
                description: "Software reviews, tool comparisons, and productivity apps",
            }}
        />
    );
}
