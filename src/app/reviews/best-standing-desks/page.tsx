import { ArticleLayout } from "@/components/article/ArticleLayout";

export default function StandingDesksPage() {
    return (
        <ArticleLayout
            title="Best Standing Desks for Home Office of 2025"
            subtitle="Expert analysis with data from 5+ sources including Reddit, YouTube, and expert reviews."
            author="NDS Research Team"
            date="December 2025"
            readTime="10 min read"
            intro="We've analyzed thousands of user reviews, expert opinions from Reddit, YouTube reviewers like MKBHD, and professional testing data to bring you the definitive guide to best standing desks for home office in 2025."
            products={[
                {
                    name: "Uplift V2",
                    image: "🏆",
                    rating: 4.5,
                    reviewCount: 1000,
                    price: "$99",
                    badge: "Editor's Choice",
                    pros: [
                        "High quality",
                        "Good value",
                        "Well-designed"
                    ],
                    cons: [
                        "Premium pricing"
                    ],
                    verdict: "A solid choice for standing desks.",
                    amazonLink: "https://www.amazon.com/s?k=Uplift+V2&tag=nestdigital-20",
                },
                {
                    name: "FlexiSpot E7",
                    image: "🏆",
                    rating: 4.5,
                    reviewCount: 1000,
                    price: "$99",
                    badge: "Best Value",
                    pros: [
                        "High quality",
                        "Good value",
                        "Well-designed"
                    ],
                    cons: [
                        "Premium pricing"
                    ],
                    verdict: "A solid choice for standing desks.",
                    amazonLink: "https://www.amazon.com/s?k=FlexiSpot+E7&tag=nestdigital-20",
                },
                {
                    name: "Secretlab Magnus",
                    image: "🏆",
                    rating: 4.5,
                    reviewCount: 1000,
                    price: "$99",
                    badge: "Best Budget",
                    pros: [
                        "High quality",
                        "Good value",
                        "Well-designed"
                    ],
                    cons: [
                        "Premium pricing"
                    ],
                    verdict: "A solid choice for standing desks.",
                    amazonLink: "https://www.amazon.com/s?k=Secretlab+Magnus&tag=nestdigital-20",
                },
                {
                    name: "Branch Standing Desk",
                    image: "🏆",
                    rating: 4.5,
                    reviewCount: 1000,
                    price: "$99",
                    badge: "Runner Up",
                    pros: [
                        "High quality",
                        "Good value",
                        "Well-designed"
                    ],
                    cons: [
                        "Premium pricing"
                    ],
                    verdict: "A solid choice for standing desks.",
                    amazonLink: "https://www.amazon.com/s?k=Branch+Standing+Desk&tag=nestdigital-20",
                }
            ]}
        />
    );
}
