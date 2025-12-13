import { ArticleLayout } from "@/components/article/ArticleLayout";

export default function MechanicalKeyboardsPage() {
    return (
        <ArticleLayout
            title="Best Mechanical Keyboards for Typing & Gaming 2025"
            subtitle="From tactile switches to linear, we tested 20 keyboards."
            author="NDS Research Team"
            date="December 2025"
            readTime="15 min read"
            intro="Mechanical keyboards offer superior typing feel and durability compared to membrane keyboards. We tested the top mechanical keyboards for typing speed, gaming performance, and build quality."
            products={[
                {
                    name: "Keychron K8 Pro",
                    image: "⌨️",
                    rating: 4.7,
                    reviewCount: 5500,
                    price: "$109",
                    badge: "Editor's Choice",
                    pros: [
                        "Hot-swappable switches",
                        "Wireless & wired modes",
                        "Mac & Windows compatible",
                        "QMK/VIA programmable"
                    ],
                    cons: [
                        "No wrist rest included"
                    ],
                    verdict: "The most versatile mechanical keyboard - perfect for both work and gaming.",
                    amazonLink: "https://www.amazon.com/dp/B0B16SPHB5?tag=nestdigital-20",
                },
                {
                    name: "Logitech G Pro X",
                    image: "🎮",
                    rating: 4.5,
                    reviewCount: 12000,
                    price: "$149",
                    badge: "Best for Gaming",
                    pros: [
                        "Pro-grade GX switches",
                        "Ultra-portable design",
                        "RGB per-key lighting",
                        "Swappable switches"
                    ],
                    cons: [
                        "Wired only"
                    ],
                    verdict: "The keyboard of choice for esports pros - fast, reliable, and built to last.",
                    amazonLink: "https://www.amazon.com/dp/B07QQB9VCV?tag=nestdigital-20",
                },
                {
                    name: "Royal Kludge RK84",
                    image: "💰",
                    rating: 4.4,
                    reviewCount: 8000,
                    price: "$59",
                    badge: "Best Budget",
                    pros: [
                        "75% compact layout",
                        "Tri-mode connectivity",
                        "Hot-swappable",
                        "RGB backlighting"
                    ],
                    cons: [
                        "Software could be better"
                    ],
                    verdict: "Incredible value - premium features at a budget price point.",
                    amazonLink: "https://www.amazon.com/dp/B08JLWTQ4Q?tag=nestdigital-20",
                },
                {
                    name: "Das Keyboard 4 Professional",
                    image: "💼",
                    rating: 4.6,
                    reviewCount: 4500,
                    price: "$169",
                    badge: "Best for Typing",
                    pros: [
                        "Cherry MX switches",
                        "Premium aluminum top",
                        "Built-in USB hub",
                        "Extra-long cable"
                    ],
                    cons: [
                        "No wireless option"
                    ],
                    verdict: "Built for serious typists who demand the best feel and build quality.",
                    amazonLink: "https://www.amazon.com/dp/B00JG01QTY?tag=nestdigital-20",
                }
            ]}
        />
    );
}
