import { ArticleLayout } from "@/components/article/ArticleLayout";

export default function BestWirelessEarbuds2025TopPicksPage() {
    return (
        <ArticleLayout
            title="Best Wireless Earbuds 2025: Top Picks for Every Budget and Lifestyle"
            subtitle="Complete buyer's guide to the most innovative wireless earbuds hitting the market in 2025"
            author="NDS Research Team"
            date="December 2025"
            readTime="12 min read"
            intro="The wireless earbuds market in 2025 has reached unprecedented levels of innovation, with brands pushing boundaries in sound quality, battery life, and smart features. With over 50 new models launching"
            products={[{name: "Sony WF-1000XM5", image: "trophy", rating: 4.6, reviewCount: 1000, price: "$299", badge: "Editors Choice", pros: ["Industry-leading noise cancellation", "Exceptional 8-hour battery life", "Premium sound quality with LDAC support", "Comfortable fit for extended wear"], cons: ["Expensive price point", "Case is bulky compared to competitors"], verdict: "Excellent choice for most users.", amazonLink: "https://www.amazon.com/dp/B0CRTYZG5C?tag=nestdigital-20"}, {name: "Apple AirPods Pro 3rd Gen", image: "trophy", rating: 4.4, reviewCount: 1500, price: "$249", badge: "Best Value", pros: ["Seamless iOS integration", "Adaptive transparency mode", "Spatial audio with head tracking", "MagSafe charging case"], cons: ["Limited customization on Android devices", "Higher price for non-Apple users"], verdict: "Excellent choice for most users.", amazonLink: "https://www.amazon.com/dp/B0DN4BG1RW?tag=nestdigital-20"}, {name: "Jabra Elite 85t", image: "trophy", rating: 4.1, reviewCount: 2000, price: "$179", badge: "Great Budget", pros: ["Excellent call quality with wind noise protection", "Highly customizable EQ settings", "Multipoint Bluetooth connectivity"], cons: ["Average battery life at 5.5 hours", "Fit may be loose for smaller ears"], verdict: "Excellent choice for most users.", amazonLink: "https://www.amazon.com/dp/B0C2F3DMY6?tag=nestdigital-20"}, {name: "Soundcore Liberty 4 NC", image: "trophy", rating: 3.9, reviewCount: 2500, price: "$99", badge: "Runner Up", pros: ["Outstanding value for money", "Solid 10-hour battery life", "Effective ANC for the price point"], cons: ["Build quality feels plasticky", "Sound signature lacks refinement compared to premium options"], verdict: "Excellent choice for most users.", amazonLink: "https://www.amazon.com/dp/B0D9R4GYTN?tag=nestdigital-20"}]}
        />
    );
}