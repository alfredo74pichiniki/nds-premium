"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ArrowRight, TrendingUp } from "lucide-react";

interface FeaturedItem {
    id: string;
    title: string;
    category: string;
    description: string;
    rating: number;
    reviews: number;
    badge?: string;
    image: string;
    link: string;  // Links to article pages, not external
    products: string[];
}

// Featured content links to EXISTING article pages only
const featuredContent: FeaturedItem[] = [
    {
        id: "headphones-2025",
        title: "Best Noise-Canceling Headphones 2025",
        category: "Audio",
        description: "Sony XM5, AirPods Max, Bose QC Ultra compared",
        rating: 4.8,
        reviews: 15420,
        badge: "Top Pick",
        image: "🎧",
        link: "/reviews/best-noise-canceling-headphones",
        products: ["Sony WH-1000XM5", "Bose QC Ultra", "AirPods Max"],
    },
    {
        id: "standing-desks-2025",
        title: "Best Standing Desks 2025",
        category: "Home Office",
        description: "Uplift V2, FlexiSpot, Secretlab compared",
        rating: 4.9,
        reviews: 12300,
        badge: "Editor's Choice",
        image: "🪑",
        link: "/reviews/best-standing-desks",
        products: ["Uplift V2", "FlexiSpot E7", "Secretlab Magnus"],
    },
];

// Coming soon items - show as cards but not clickable
const comingSoon = [
    { title: "Best Laptops 2025", category: "Laptops", image: "💻" },
    { title: "Best AI Tools 2025", category: "AI Tools", image: "🤖" },
    { title: "Best Gaming Keyboards", category: "Gaming", image: "⌨️" },
    { title: "Best Wireless Mice", category: "Peripherals", image: "🖱️" },
];

export function FeaturedProducts() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-[var(--nds-primary)]/5 to-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mb-12"
                >
                    <div>
                        <h2 className="text-4xl font-black mb-2">
                            <span className="gradient-text">Featured</span> Reviews
                        </h2>
                        <p className="text-gray-400">
                            In-depth buying guides across all categories
                        </p>
                    </div>
                    <Link
                        href="/reviews"
                        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[var(--nds-primary)] transition-colors"
                    >
                        <TrendingUp className="w-4 h-4" />
                        All Reviews
                    </Link>
                </motion.div>

                {/* Featured Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {featuredContent.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={item.link}
                                className="group flex items-center gap-6 p-6 glass-premium card-hover-lift rounded-2xl h-full"
                            >
                                <div className="text-6xl flex-shrink-0">
                                    {item.image}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs px-2 py-1 rounded-full bg-[var(--nds-primary)]/10 text-[var(--nds-primary)]">
                                            {item.category}
                                        </span>
                                        {item.badge && (
                                            <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-400">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--nds-primary)] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-3">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                            <span className="text-sm">{item.rating}</span>
                                        </div>
                                        <span className="text-xs text-gray-500">
                                            {item.reviews.toLocaleString()} reviews analyzed
                                        </span>
                                    </div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-[var(--nds-primary)] group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Coming Soon Grid */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-500 mb-4">Coming Soon</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {comingSoon.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="p-4 bg-white/[0.01] border border-white/5 rounded-xl opacity-60"
                            >
                                <div className="text-3xl mb-2">{item.image}</div>
                                <span className="text-xs text-gray-600">{item.category}</span>
                                <h4 className="text-sm font-medium text-gray-400 mt-1">
                                    {item.title}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
