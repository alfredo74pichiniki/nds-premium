import { NextRequest, NextResponse } from "next/server";

const CONTENT_BRIDGE_URL = process.env.CONTENT_BRIDGE_URL || "http://localhost:8100";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { category, keywords, maxProducts = 5 } = body;

        if (!category || !keywords) {
            return NextResponse.json(
                { error: "Missing category or keywords" },
                { status: 400 }
            );
        }

        // Try content bridge first
        try {
            const response = await fetch(`${CONTENT_BRIDGE_URL}/articles/generate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    category,
                    keywords,
                    max_products: maxProducts,
                }),
            });

            if (response.ok) {
                const article = await response.json();
                return NextResponse.json(article);
            }
        } catch {
            // Bridge not available, use demo
        }

        // Demo article response
        const slug = `best-${keywords.toLowerCase().replace(/\s+/g, "-")}-2025`;

        return NextResponse.json({
            source: "demo",
            title: `Best ${category} of 2025`,
            slug,
            excerpt: `We tested the top ${category} to find the absolute best options for every budget.`,
            author: "NDS Tech Team",
            date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
            readTime: "12 min read",
            intro: `After spending 200+ hours testing and analyzing user reviews, we've determined our top picks for ${category}. Whether you're looking for premium features or the best value, we have recommendations for every need.`,
            products: [
                {
                    name: `Top Pick for ${category}`,
                    brand: "Premium Brand",
                    price: "$299",
                    rating: 4.8,
                    reviews: 12500,
                    badge: "Editor's Choice",
                    pros: [
                        "Exceptional quality and performance",
                        "Great value for the price",
                        "Excellent customer reviews",
                        "Premium build materials",
                    ],
                    cons: [
                        "Higher price point",
                        "Limited color options",
                    ],
                    verdict: "Our top recommendation for most users looking for quality.",
                    amazonLink: "#",
                },
                {
                    name: `Best Value ${category}`,
                    brand: "Value Brand",
                    price: "$149",
                    rating: 4.6,
                    reviews: 8900,
                    badge: "Best Value",
                    pros: [
                        "Incredible value for money",
                        "Solid performance",
                        "Good customer support",
                    ],
                    cons: [
                        "Not as feature-rich as premium options",
                        "Slightly lower build quality",
                    ],
                    verdict: "Best option for budget-conscious buyers who still want quality.",
                    amazonLink: "#",
                },
                {
                    name: `Premium ${category}`,
                    brand: "Luxury Brand",
                    price: "$499",
                    rating: 4.9,
                    reviews: 5600,
                    badge: "Premium Pick",
                    pros: [
                        "Absolute best in class features",
                        "Premium materials throughout",
                        "Exceptional longevity",
                    ],
                    cons: [
                        "High price tag",
                        "May be overkill for casual users",
                    ],
                    verdict: "For those who want the absolute best, regardless of price.",
                    amazonLink: "#",
                },
            ],
            methodology: `Our testing process involves hands-on evaluation of each product for at least 2 weeks. We measure real-world performance, analyze 50,000+ verified customer reviews, and consult with industry experts. Our recommendations are updated monthly to reflect new releases and price changes.`,
            faq: [
                {
                    question: `What is the best ${category.toLowerCase()} for most people?`,
                    answer: `We recommend our Editor's Choice pick for most users. It offers the best balance of features, quality, and value.`,
                },
                {
                    question: `How much should I spend on ${category.toLowerCase()}?`,
                    answer: `For quality that lasts, we recommend budgeting $150-300. Our Best Value pick offers 80% of premium features at half the price.`,
                },
                {
                    question: `Are premium options worth the extra cost?`,
                    answer: `If you use ${category.toLowerCase()} daily, premium options often pay for themselves through better durability and features. For occasional use, our Value pick is sufficient.`,
                },
            ],
            generatedAt: new Date().toISOString(),
        });
    } catch (error) {
        console.error("Article generation error:", error);
        return NextResponse.json(
            { error: "Failed to generate article" },
            { status: 500 }
        );
    }
}
