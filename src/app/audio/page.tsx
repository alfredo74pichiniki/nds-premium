import type { Metadata } from "next";
import { CategoryListingPage } from "@/components/article/CategoryListingPage";

const BASE_URL = "https://nestdigitalstudio.com";

export const metadata: Metadata = {
    title: "Best Headphones, Speakers & Audio Gear 2026 | Nest Digital Studio",
    description: "Expert headphone and audio equipment reviews. Noise-cancelling, wireless, studio monitors tested and compared.",
    alternates: { canonical: `${BASE_URL}/audio` },
    openGraph: {
        title: "Best Headphones, Speakers & Audio Gear 2026 | Nest Digital Studio",
        description: "Expert headphone and audio equipment reviews. Noise-cancelling, wireless, studio monitors tested and compared.",
        url: `${BASE_URL}/audio`,
        siteName: "Nest Digital Studio",
    },
};

export default function AudioPage() {
    return (
        <CategoryListingPage
            config={{
                name: "Audio",
                slug: "audio",
                emoji: "🎧",
                color: "pink",
                description: "Headphones, speakers, audio gear reviews and comparisons",
            }}
        />
    );
}
