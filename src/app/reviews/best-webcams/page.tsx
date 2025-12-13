import { ArticleLayout } from "@/components/article/ArticleLayout";

export default function WebcamsPage() {
    return (
        <ArticleLayout
            title="Best Webcams for Video Calls & Streaming 2025"
            subtitle="Look professional on Zoom calls with our top webcam picks."
            author="NDS Research Team"
            date="December 2025"
            readTime="9 min read"
            intro="Whether you're working from home, streaming, or creating content, a quality webcam makes all the difference. We tested the top webcams for image quality, low-light performance, and built-in features."
            products={[
                {
                    name: "Logitech C920x HD Pro",
                    image: "📷",
                    rating: 4.6,
                    reviewCount: 45000,
                    price: "$69",
                    badge: "Best Overall",
                    pros: [
                        "1080p at 30fps",
                        "Excellent auto-focus",
                        "Built-in dual stereo mics",
                        "Works with all video apps"
                    ],
                    cons: [
                        "No 4K option"
                    ],
                    verdict: "The industry standard webcam that just works. Perfect for most remote workers.",
                    amazonLink: "https://www.amazon.com/dp/B085TFF7M1?tag=nestdigital-20",
                },
                {
                    name: "Razer Kiyo Pro Ultra",
                    image: "🎮",
                    rating: 4.4,
                    reviewCount: 3500,
                    price: "$299",
                    badge: "Best Premium",
                    pros: [
                        "4K at 30fps, 1080p at 60fps",
                        "Large 1/1.2\" sensor",
                        "Exceptional low-light performance",
                        "HDR support"
                    ],
                    cons: [
                        "Expensive"
                    ],
                    verdict: "The best webcam money can buy - DSLR-like quality for streamers and content creators.",
                    amazonLink: "https://www.amazon.com/dp/B0BZJV7GXQ?tag=nestdigital-20",
                },
                {
                    name: "Anker PowerConf C200",
                    image: "💼",
                    rating: 4.3,
                    reviewCount: 2800,
                    price: "$59",
                    badge: "Best Value",
                    pros: [
                        "2K resolution",
                        "AI-enhanced low light",
                        "Noise-canceling mic",
                        "Privacy cover included"
                    ],
                    cons: [
                        "Plastic build"
                    ],
                    verdict: "2K quality at a budget price with smart AI features. Great for home offices.",
                    amazonLink: "https://www.amazon.com/dp/B09MFMTMPD?tag=nestdigital-20",
                },
                {
                    name: "Logitech StreamCam",
                    image: "📹",
                    rating: 4.5,
                    reviewCount: 8000,
                    price: "$149",
                    badge: "Best for Streaming",
                    pros: [
                        "1080p at 60fps",
                        "Smart auto-framing",
                        "Vertical video support",
                        "USB-C connection"
                    ],
                    cons: [
                        "Fixed mount angle"
                    ],
                    verdict: "Built specifically for streamers and content creators with smooth 60fps video.",
                    amazonLink: "https://www.amazon.com/dp/B07TZT4Q89?tag=nestdigital-20",
                }
            ]}
        />
    );
}
