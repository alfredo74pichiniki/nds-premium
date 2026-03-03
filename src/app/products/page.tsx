import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
    title: "Digital Products & Templates",
    description: "Premium Google Sheets templates, Notion systems, and digital tools for productivity, finance, and business. Instant download.",
    alternates: { canonical: "https://nestdigitalstudio.com/products" },
    openGraph: {
        title: "Digital Products & Templates | Nest Digital Studio",
        description: "Premium Google Sheets templates, Notion systems, and digital tools for productivity, finance, and business.",
        url: "https://nestdigitalstudio.com/products",
        siteName: "Nest Digital Studio",
    },
};

const newProducts = [
    {
        slug: "personal-finance-dashboard",
        title: "Personal Finance Dashboard",
        tagline: "Google Sheets template to track income, expenses, investments & net worth",
        price: 29,
        originalPrice: 49,
        badge: "NEW",
        emoji: "💰",
        shopifyUrl: "https://nest-digital-studio.myshopify.com/products/personal-finance-dashboard",
    },
    {
        slug: "travel-planner-bundle",
        title: "Travel Planner Bundle",
        tagline: "Google Sheets + Notion templates for trip planning, budgets & itineraries",
        price: 34.99,
        originalPrice: 59,
        badge: "NEW",
        emoji: "✈️",
        shopifyUrl: "https://nest-digital-studio.myshopify.com/products/travel-planner-bundle",
    },
    {
        slug: "habit-tracker-2026",
        title: "Habit Tracker Pro 2026",
        tagline: "Visual habit tracking system with streaks, analytics & weekly reviews",
        price: 9.99,
        originalPrice: 19.99,
        badge: "BEST VALUE",
        emoji: "📊",
        shopifyUrl: "https://nest-digital-studio.myshopify.com/products/habit-tracker-2026",
    },
    {
        slug: "ai-beginners-guide",
        title: "AI for Beginners: 30-Day Guide",
        tagline: "Learn ChatGPT, Claude, Gemini & more — from zero to productive in 30 days",
        price: 9.99,
        originalPrice: 19.99,
        badge: "NEW",
        emoji: "🤖",
        shopifyUrl: "https://nest-digital-studio.myshopify.com/products/ai-beginners-guide",
    },
];

const legacyProducts = [
    {
        slug: "shopify-conversion-engine",
        title: "Shopify Conversion Engine",
        tagline: "15+ Liquid Snippets that replace $100+/month in apps",
        price: 97,
        originalPrice: 197,
        shopifyUrl: "https://nest-digital-studio.myshopify.com/products/shopify-conversion-engine",
        mockup: "/mockups/shopify_mockup_v2.png",
    },
    {
        slug: "freelancer-success-bundle",
        title: "Freelancer Success Bundle",
        tagline: "Contracts, proposals, and professional pricing system",
        price: 89,
        originalPrice: 178,
        shopifyUrl: "https://nest-digital-studio.myshopify.com/products/freelancer-success-bundle",
        mockup: "/mockups/freelancer_mockup_v2.png",
    },
    {
        slug: "notion-business-system",
        title: "Notion Business System",
        tagline: "CRM, projects, finances. Your entire business in Notion",
        price: 79,
        originalPrice: 158,
        shopifyUrl: "https://nest-digital-studio.myshopify.com/products/notion-business-system",
        mockup: "/mockups/notion_mockup_v2.png",
    },
    {
        slug: "content-creator-toolkit",
        title: "Content Creator Empire",
        tagline: "100+ templates, hooks, and content structures",
        price: 79,
        originalPrice: 149,
        shopifyUrl: "https://nest-digital-studio.myshopify.com/products/content-creator-toolkit",
        mockup: "/mockups/content_creator_mockup_v2.png",
    },
    {
        slug: "social-media-factory",
        title: "Social Media Factory",
        tagline: "Create 30 days of content in 4 hours",
        price: 69,
        originalPrice: 138,
        shopifyUrl: "https://nest-digital-studio.myshopify.com/products/social-media-factory",
        mockup: "/mockups/social_factory_mockup_v2.png",
    },
    {
        slug: "ai-prompt-mastery",
        title: "AI Prompt Mastery",
        tagline: "500+ prompts for ChatGPT, Claude, Gemini and more",
        price: 59,
        originalPrice: 118,
        shopifyUrl: "https://nest-digital-studio.myshopify.com/products/ai-prompt-mastery",
        mockup: "/mockups/ai_prompts_mockup_v2.png",
    },
    {
        slug: "startup-blueprint",
        title: "Startup Launch Blueprint",
        tagline: "From idea to first customers in 30 days",
        price: 49,
        originalPrice: 98,
        shopifyUrl: "https://nest-digital-studio.myshopify.com/products/startup-blueprint",
        mockup: "/mockups/startup_mockup_v2.png",
    },
];

function formatPrice(price: number) {
    return price % 1 === 0 ? `$${price}` : `$${price.toFixed(2)}`;
}

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00b4d8]/20 to-[#0077b6]/20 border border-[#00b4d8]/40 rounded-full text-[#00b4d8] text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        Premium Digital Products
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Tools That Pay For Themselves
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Templates, systems, and resources that save time and drive real results
                    </p>
                </div>

                {/* NEW Products — Featured Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-8">
                        <Zap className="w-5 h-5 text-emerald-400" />
                        <h2 className="text-2xl font-bold text-white">New Releases</h2>
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">2026</span>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {newProducts.map((product) => (
                            <a
                                key={product.slug}
                                href={product.shopifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-gradient-to-b from-[#141414] to-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00b4d8]/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,180,216,0.15)] hover:-translate-y-1"
                            >
                                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full text-xs font-bold text-white">
                                    {product.badge}
                                </div>

                                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#141414] flex items-center justify-center">
                                    <span className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-300">
                                        {product.emoji}
                                    </span>
                                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#141414] to-transparent" />
                                </div>

                                <div className="p-5">
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#00b4d8] transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                                        {product.tagline}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl font-bold text-[#00b4d8]">{formatPrice(product.price)}</span>
                                            <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-[#00b4d8] opacity-0 group-hover:opacity-100 transition-opacity">
                                            Buy <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* LEGACY Products — Professional Templates */}
                <div className="mt-16">
                    <div className="flex items-center gap-3 mb-8">
                        <TrendingUp className="w-5 h-5 text-[#00b4d8]" />
                        <h2 className="text-2xl font-bold text-white">Professional Templates</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {legacyProducts.map((product) => (
                            <a
                                key={product.slug}
                                href={product.shopifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-gradient-to-b from-[#141414] to-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00b4d8]/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,180,216,0.15)] hover:-translate-y-1"
                            >
                                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#141414] p-4">
                                    <Image
                                        src={product.mockup}
                                        alt={product.title}
                                        fill
                                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#141414] to-transparent" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#00b4d8] transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                                        {product.tagline}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-[#00b4d8]">{formatPrice(product.price)}</span>
                                            <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-[#00b4d8] opacity-0 group-hover:opacity-100 transition-opacity">
                                            Buy <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Trust Signals */}
                <div className="mt-20 text-center">
                    <div className="flex items-center justify-center gap-8 text-sm text-gray-400 flex-wrap">
                        <span>✓ Instant digital download</span>
                        <span>✓ 30-day money-back guarantee</span>
                        <span>✓ Lifetime updates included</span>
                        <span>✓ Secure checkout via Shopify</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
