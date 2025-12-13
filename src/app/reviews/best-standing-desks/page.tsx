import { ArticleLayout } from "@/components/article/ArticleLayout";

export default function StandingDesksPage() {
    return (
        <ArticleLayout
            title="Best Standing Desks for Home Office of 2025"
            subtitle="Expert analysis with data from 5+ sources including Reddit, YouTube, and expert reviews."
            author="NDS Research Team"
            date="December 2025"
            readTime="10 min read"
            intro="We've analyzed thousands of user reviews, expert opinions from Reddit, YouTube reviewers, and professional testing data to bring you the definitive guide to the best standing desks for home office in 2025."
            products={[
                {
                    name: "FEZIBO Electric Standing Desk",
                    image: "🏆",
                    rating: 4.6,
                    reviewCount: 15000,
                    price: "$289",
                    badge: "Editor's Choice",
                    pros: [
                        "Smooth dual motor system",
                        "4 memory presets",
                        "Built-in splice board",
                        "Cable management tray included"
                    ],
                    cons: [
                        "Assembly takes 30-45 minutes"
                    ],
                    verdict: "Best overall standing desk with excellent stability and smooth height adjustment. Great value for the features.",
                    amazonLink: "https://www.amazon.com/dp/B08PL2JF3F?tag=nestdigital-20",
                },
                {
                    name: "ErGear Height Adjustable Electric Desk",
                    image: "⭐",
                    rating: 4.5,
                    reviewCount: 8500,
                    price: "$199",
                    badge: "Best Value",
                    pros: [
                        "Budget-friendly",
                        "220 lbs weight capacity",
                        "Whisper-quiet motor",
                        "3 memory buttons"
                    ],
                    cons: [
                        "Smaller desktop size"
                    ],
                    verdict: "Excellent entry-level standing desk that doesn't compromise on quality. Perfect for smaller spaces.",
                    amazonLink: "https://www.amazon.com/dp/B09FTLZ5HF?tag=nestdigital-20",
                },
                {
                    name: "SHW 55-Inch Electric Standing Desk",
                    image: "💼",
                    rating: 4.4,
                    reviewCount: 12000,
                    price: "$209",
                    badge: "Best Budget",
                    pros: [
                        "Very affordable",
                        "Large 55-inch desktop",
                        "Simple setup",
                        "Sturdy steel frame"
                    ],
                    cons: [
                        "Basic preset options"
                    ],
                    verdict: "Best value for those on a budget who need a reliable standing desk with a large work surface.",
                    amazonLink: "https://www.amazon.com/dp/B08GXYJC2W?tag=nestdigital-20",
                },
                {
                    name: "VIVO Electric Standing Desk 60x24",
                    image: "🔥",
                    rating: 4.5,
                    reviewCount: 9200,
                    price: "$339",
                    badge: "Premium Pick",
                    pros: [
                        "Extra large 60-inch surface",
                        "Touch screen controller",
                        "Memory presets with timer",
                        "Cable management system"
                    ],
                    cons: [
                        "Higher price point"
                    ],
                    verdict: "Premium standing desk for power users who need maximum workspace and advanced features.",
                    amazonLink: "https://www.amazon.com/dp/B0B8HVTLQX?tag=nestdigital-20",
                }
            ]}
        />
    );
}
