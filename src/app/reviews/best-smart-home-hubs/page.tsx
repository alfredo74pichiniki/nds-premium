import { ArticleLayout } from "@/components/article/ArticleLayout";

export default function SmartHomeHubsPage() {
    return (
        <ArticleLayout
            title="Best Smart Home Hubs: Alexa vs Google vs HomeKit 2025"
            subtitle="Which ecosystem is right for you? We compare all major platforms."
            author="NDS Research Team"
            date="December 2025"
            readTime="11 min read"
            intro="Choosing the right smart home hub is crucial - it determines which devices work together and how you control your home. We compare the three major ecosystems and their best hub options."
            products={[
                {
                    name: "Amazon Echo Show 8 (3rd Gen)",
                    image: "🏠",
                    rating: 4.6,
                    reviewCount: 25000,
                    price: "$149",
                    badge: "Best Alexa Hub",
                    pros: [
                        "8\" HD touchscreen",
                        "Built-in smart home hub",
                        "Video calling with Zoom",
                        "Spatial audio"
                    ],
                    cons: [
                        "Amazon ecosystem lock-in"
                    ],
                    verdict: "The best Alexa device for controlling your smart home with a visual interface.",
                    amazonLink: "https://www.amazon.com/dp/B0BLS3Y632?tag=nestdigital-20",
                },
                {
                    name: "Google Nest Hub (2nd Gen)",
                    image: "🔊",
                    rating: 4.5,
                    reviewCount: 18000,
                    price: "$99",
                    badge: "Best Google Hub",
                    pros: [
                        "7\" smart display",
                        "Sleep tracking built-in",
                        "Google Photos frame mode",
                        "Great sound quality"
                    ],
                    cons: [
                        "No camera for video calls"
                    ],
                    verdict: "The perfect nightstand companion that doubles as your smart home controller.",
                    amazonLink: "https://www.amazon.com/dp/B08XMQZ5FR?tag=nestdigital-20",
                },
                {
                    name: "Apple HomePod mini",
                    image: "🍎",
                    rating: 4.4,
                    reviewCount: 12000,
                    price: "$99",
                    badge: "Best for Apple Users",
                    pros: [
                        "Excellent sound for size",
                        "Deep Apple ecosystem integration",
                        "HomeKit secure home hub",
                        "Intercom feature"
                    ],
                    cons: [
                        "Limited to Apple ecosystem"
                    ],
                    verdict: "If you're all-in on Apple, the HomePod mini is the perfect smart home hub.",
                    amazonLink: "https://www.amazon.com/dp/B08J2LS3ZM?tag=nestdigital-20",
                },
                {
                    name: "Echo Dot (5th Gen) with Clock",
                    image: "⏰",
                    rating: 4.6,
                    reviewCount: 35000,
                    price: "$59",
                    badge: "Best Budget Hub",
                    pros: [
                        "LED clock display",
                        "Eero mesh WiFi built-in",
                        "Temperature sensor",
                        "Improved audio"
                    ],
                    cons: [
                        "No screen"
                    ],
                    verdict: "The most affordable way to add Alexa smart home control to any room.",
                    amazonLink: "https://www.amazon.com/dp/B09B8W5FW7?tag=nestdigital-20",
                }
            ]}
        />
    );
}
