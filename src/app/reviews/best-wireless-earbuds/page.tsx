import { ArticleLayout } from "@/components/article/ArticleLayout";

export default function WirelessEarbudsPage() {
    return (
        <ArticleLayout
            title="Best Wireless Earbuds Under $100 in 2025"
            subtitle="Premium sound quality doesn't have to break the bank."
            author="NDS Research Team"
            date="December 2025"
            readTime="8 min read"
            intro="We've tested 20+ wireless earbuds under $100 to find the best balance of sound quality, comfort, battery life, and features. These budget-friendly options punch well above their weight."
            products={[
                {
                    name: "Samsung Galaxy Buds FE",
                    image: "🎵",
                    rating: 4.5,
                    reviewCount: 8500,
                    price: "$99",
                    badge: "Editor's Choice",
                    pros: [
                        "Excellent Active Noise Cancellation",
                        "Rich, balanced sound",
                        "Comfortable fit for all-day wear",
                        "Great call quality"
                    ],
                    cons: [
                        "No wireless charging on case"
                    ],
                    verdict: "The best overall wireless earbuds under $100 with premium features typically found in $200+ earbuds.",
                    amazonLink: "https://www.amazon.com/dp/B0CF7GYNW2?tag=nestdigital-20",
                },
                {
                    name: "Soundcore Liberty 4 NC",
                    image: "🔊",
                    rating: 4.4,
                    reviewCount: 12000,
                    price: "$79",
                    badge: "Best Value",
                    pros: [
                        "98.5% noise reduction",
                        "30-hour total battery life",
                        "Hi-Res Audio certified",
                        "Customizable EQ app"
                    ],
                    cons: [
                        "Bulkier case"
                    ],
                    verdict: "Incredible noise cancellation at an unbeatable price. Best value in the budget earbuds market.",
                    amazonLink: "https://www.amazon.com/dp/B0BZV4QFP8?tag=nestdigital-20",
                },
                {
                    name: "JBL Tune Buds",
                    image: "🎧",
                    rating: 4.3,
                    reviewCount: 6000,
                    price: "$69",
                    badge: "Best Budget",
                    pros: [
                        "JBL Pure Bass Sound",
                        "IP54 water resistance",
                        "4 microphones for clear calls",
                        "Compact charging case"
                    ],
                    cons: [
                        "ANC not as strong as competitors"
                    ],
                    verdict: "Great entry-level option from a trusted audio brand with solid bass response.",
                    amazonLink: "https://www.amazon.com/dp/B0C1QWWZR4?tag=nestdigital-20",
                },
                {
                    name: "Anker Soundcore Space A40",
                    image: "⭐",
                    rating: 4.5,
                    reviewCount: 15000,
                    price: "$79",
                    badge: "Best Battery",
                    pros: [
                        "50-hour total battery life",
                        "Adaptive ANC",
                        "Multipoint connection",
                        "Wireless charging"
                    ],
                    cons: [
                        "Basic design"
                    ],
                    verdict: "The marathon runner of budget earbuds - 50 hours of battery makes these perfect for travelers.",
                    amazonLink: "https://www.amazon.com/dp/B0B1LVC5VZ?tag=nestdigital-20",
                }
            ]}
        />
    );
}
