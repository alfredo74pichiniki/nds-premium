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
                    name: "Amazon Echo Show 5 (3rd Gen)",
                    image: "📱",
                    rating: 4.5,
                    reviewCount: 22000,
                    price: "$89",
                    badge: "Best Compact",
                    pros: [
                        "5.5\" smart display",
                        "Built-in camera for video calls",
                        "Rotating screen option",
                        "Great for bedside"
                    ],
                    cons: [
                        "Smaller display"
                    ],
                    verdict: "The perfect compact smart display for smaller spaces and nightstands.",
                    amazonLink: "https://www.amazon.com/dp/B09B2SBHQK?tag=nestdigital-20",
                },
                {
                    name: "Amazon Echo Pop",
                    image: "🟣",
                    rating: 4.5,
                    reviewCount: 28000,
                    price: "$39",
                    badge: "Best Ultra Budget",
                    pros: [
                        "Compact semi-sphere design",
                        "Full Alexa capabilities",
                        "Great audio for size",
                        "Multiple colors"
                    ],
                    cons: [
                        "No display or clock"
                    ],
                    verdict: "The most affordable way to start your smart home journey.",
                    amazonLink: "https://www.amazon.com/dp/B09WNK39JN?tag=nestdigital-20",
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
