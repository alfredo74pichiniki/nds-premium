import type { Metadata } from "next";
import { ArrowRight, Sparkles, Zap, TrendingUp, Mail } from "lucide-react";

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
        features: ["11 automated sheets", "Income & expense tracking", "Investment portfolio view", "Net worth calculator"],
    },
    {
        slug: "travel-planner-bundle",
        title: "Travel Planner Bundle",
        tagline: "Google Sheets + Notion templates for trip planning, budgets & itineraries",
        price: 34.99,
        originalPrice: 59,
        badge: "NEW",
        emoji: "✈️",
        features: ["10-sheet planner", "Budget tracker", "Packing lists", "Itinerary builder"],
    },
    {
        slug: "habit-tracker-2026",
        title: "Habit Tracker Pro 2026",
        tagline: "Visual habit tracking system with streaks, analytics & weekly reviews",
        price: 9.99,
        originalPrice: 19.99,
        badge: "BEST VALUE",
        emoji: "📊",
        features: ["Streak tracking", "Gamification system", "Visual progress", "19 sheets"],
    },
    {
        slug: "ai-beginners-guide",
        title: "AI for Beginners: 30-Day Guide",
        tagline: "Learn ChatGPT, Claude, Gemini & more — from zero to productive in 30 days",
        price: 9.99,
        originalPrice: 19.99,
        badge: "NEW",
        emoji: "🤖",
        features: ["200+ pages", "25 ready-to-use prompts", "30-day challenge", "Beginner friendly"],
    },
    {
        slug: "side-hustle-income-tracker",
        title: "Side Hustle Income Tracker Pro",
        tagline: "Track multiple income streams, expenses, and profit margins in one dashboard",
        price: 24.99,
        originalPrice: 49,
        badge: "NEW",
        emoji: "💸",
        features: ["15 sheets", "Multi-stream tracking", "Tax estimation", "Profit analysis"],
    },
    {
        slug: "meal-planner-2026",
        title: "Ultimate Meal Planner 2026",
        tagline: "Weekly meal planning, grocery lists, nutrition tracking & recipe organizer",
        price: 14.99,
        originalPrice: 29.99,
        badge: "NEW",
        emoji: "🥗",
        features: ["12 sheets", "Grocery list generator", "Nutrition tracker", "Recipe database"],
    },
    {
        slug: "student-productivity",
        title: "Student Productivity System",
        tagline: "GPA tracker, assignment planner, study scheduler & exam prep all-in-one",
        price: 12.99,
        originalPrice: 24.99,
        badge: "NEW",
        emoji: "📚",
        features: ["15 sheets", "GPA calculator", "Assignment tracker", "Study planner"],
    },
    {
        slug: "content-creator-toolkit",
        title: "Content Creator Toolkit",
        tagline: "Content calendar, analytics dashboard, brand kit & collaboration tracker",
        price: 24.99,
        originalPrice: 49,
        badge: "NEW",
        emoji: "🎬",
        features: ["14 sheets", "Content calendar", "Analytics dashboard", "Brand kit"],
    },
    {
        slug: "wedding-planner",
        title: "Ultimate Wedding Planner",
        tagline: "Budget tracker, guest list manager, vendor contacts & timeline planner",
        price: 29.99,
        originalPrice: 59,
        badge: "NEW",
        emoji: "💍",
        features: ["16 sheets", "Budget tracker", "Guest management", "Vendor tracking"],
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
                        Templates, systems, and resources that save time and drive real results.
                        Instant digital download.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-8">
                        <Zap className="w-5 h-5 text-emerald-400" />
                        <h2 className="text-2xl font-bold text-white">Our Products</h2>
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">2026</span>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newProducts.map((product) => (
                            <div
                                key={product.slug}
                                className="group relative bg-gradient-to-b from-[#141414] to-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00b4d8]/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,180,216,0.15)]"
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

                                    {/* Features */}
                                    <ul className="space-y-1 mb-4">
                                        {product.features.map((feature) => (
                                            <li key={feature} className="text-xs text-gray-500 flex items-center gap-2">
                                                <span className="text-emerald-400">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl font-bold text-[#00b4d8]">{formatPrice(product.price)}</span>
                                            <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                                        </div>
                                        <div className="px-3 py-1.5 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full">
                                            Coming Soon
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Get Notified CTA */}
                <div className="mt-16 text-center">
                    <div className="max-w-xl mx-auto bg-gradient-to-b from-[#141414] to-[#0f0f0f] border border-white/10 rounded-2xl p-8">
                        <Mail className="w-8 h-8 text-[#00b4d8] mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Get Notified When Available</h3>
                        <p className="text-gray-400 text-sm mb-6">
                            We&apos;re setting up our store. Join the waitlist to get exclusive launch discounts.
                        </p>
                        <a
                            href="mailto:admin@nestdigitalstudio.com?subject=Waitlist%20-%20NDS%20Products"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] transition-all duration-300"
                        >
                            Join Waitlist <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 text-center">
                    <div className="flex items-center justify-center gap-8 text-sm text-gray-400 flex-wrap">
                        <span>✓ Instant digital download</span>
                        <span>✓ 30-day money-back guarantee</span>
                        <span>✓ Lifetime updates included</span>
                        <span>✓ Secure checkout</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
