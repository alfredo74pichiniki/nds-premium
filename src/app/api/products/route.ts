import { NextRequest, NextResponse } from "next/server";

const CONTENT_BRIDGE_URL = process.env.CONTENT_BRIDGE_URL || "http://localhost:8100";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const keywords = searchParams.get("keywords");
    const category = searchParams.get("category") || "All";
    const maxResults = searchParams.get("max") || "5";

    if (!keywords) {
        return NextResponse.json(
            { error: "Missing keywords parameter" },
            { status: 400 }
        );
    }

    try {
        // Try to fetch from the content bridge
        const response = await fetch(
            `${CONTENT_BRIDGE_URL}/products/search?keywords=${encodeURIComponent(
                keywords
            )}&category=${category}&max_results=${maxResults}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );

        if (!response.ok) {
            throw new Error("Bridge unavailable");
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch {
        // Fallback to demo data when bridge is not running
        return NextResponse.json({
            source: "demo",
            message: "Content bridge not available - returning demo data",
            products: [
                {
                    asin: "B0BSHF7WHW",
                    title: `Sony WH-1000XM5 - Demo for "${keywords}"`,
                    brand: "Sony",
                    price: "$349.99",
                    rating: 4.8,
                    review_count: 15420,
                    description: "Industry-leading noise cancellation",
                    features: [
                        "30-hour battery life",
                        "Multipoint connection",
                        "Hi-Res Audio",
                    ],
                    images: [],
                    affiliate_link: "https://amazon.com/dp/B0BSHF7WHW?tag=nds-20",
                },
                {
                    asin: "B0D1XD1ZV5",
                    title: `Apple AirPods Max - Demo for "${keywords}"`,
                    brand: "Apple",
                    price: "$549.00",
                    rating: 4.7,
                    review_count: 8920,
                    description: "Premium build with spatial audio",
                    features: ["Aluminum design", "Spatial Audio", "Apple ecosystem"],
                    images: [],
                    affiliate_link: "https://amazon.com/dp/B0D1XD1ZV5?tag=nds-20",
                },
                {
                    asin: "B0CCZ1L489",
                    title: `Bose QuietComfort Ultra - Demo for "${keywords}"`,
                    brand: "Bose",
                    price: "$429.00",
                    rating: 4.6,
                    review_count: 7650,
                    description: "Legendary Bose comfort",
                    features: ["Immersive Audio", "24-hour battery", "CustomTune"],
                    images: [],
                    affiliate_link: "https://amazon.com/dp/B0CCZ1L489?tag=nds-20",
                },
            ],
        });
    }
}
