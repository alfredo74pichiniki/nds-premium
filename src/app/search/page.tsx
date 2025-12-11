"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Search, X, Calendar, Clock, ArrowRight } from "lucide-react";

// This would come from a CMS or API in production
const allContent = [
    {
        type: "article",
        slug: "/reviews/best-noise-canceling-headphones",
        title: "Best Noise-Canceling Headphones of 2025",
        excerpt: "We tested 15 premium headphones for 200+ hours to find the absolute best.",
        category: "Audio",
        tags: ["headphones", "noise canceling", "sony", "bose", "apple", "wireless"],
        date: "Dec 2025",
        readTime: "12 min",
        image: "🎧",
    },
    {
        type: "article",
        slug: "/reviews/best-standing-desks",
        title: "Best Standing Desks for Home Office 2025",
        excerpt: "After testing 12 standing desks for 6 months, here are our top picks.",
        category: "Work From Home",
        tags: ["standing desk", "ergonomic", "home office", "desk", "uplift", "flexispot"],
        date: "Dec 2025",
        readTime: "10 min",
        image: "🪑",
    },
    {
        type: "article",
        slug: "/reviews/best-wireless-earbuds",
        title: "Best Wireless Earbuds Under $100",
        excerpt: "Premium sound quality doesn't have to break the bank.",
        category: "Audio",
        tags: ["earbuds", "wireless", "budget", "tws", "bluetooth"],
        date: "Dec 2025",
        readTime: "8 min",
        image: "🎵",
    },
    {
        type: "article",
        slug: "/reviews/best-mechanical-keyboards",
        title: "Best Mechanical Keyboards for Typing & Gaming",
        excerpt: "From tactile switches to linear, we tested 20 keyboards.",
        category: "Peripherals",
        tags: ["keyboard", "mechanical", "gaming", "typing", "switches", "cherry mx"],
        date: "Nov 2025",
        readTime: "15 min",
        image: "⌨️",
    },
    {
        type: "product",
        slug: "/compare",
        title: "Sony WH-1000XM5",
        excerpt: "Industry-leading noise cancellation with 30-hour battery.",
        category: "Headphones",
        tags: ["sony", "headphones", "noise canceling", "wireless", "premium"],
        date: "",
        readTime: "",
        image: "🎧",
    },
    {
        type: "product",
        slug: "/compare",
        title: "Apple AirPods Max",
        excerpt: "Premium build quality with spatial audio for Apple users.",
        category: "Headphones",
        tags: ["apple", "airpods", "headphones", "premium", "spatial audio"],
        date: "",
        readTime: "",
        image: "🎧",
    },
    {
        type: "category",
        slug: "/reviews",
        title: "Audio Equipment Reviews",
        excerpt: "Browse all headphones, earbuds, and speaker reviews.",
        category: "Audio",
        tags: ["audio", "headphones", "speakers", "earbuds", "soundbars"],
        date: "",
        readTime: "",
        image: "🔊",
    },
];

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState<string>("all");

    const filters = ["all", "articles", "products"];

    const results = useMemo(() => {
        if (!query.trim()) return [];

        const searchTerms = query.toLowerCase().split(" ");

        return allContent.filter((item) => {
            // Filter by type
            if (activeFilter !== "all") {
                if (activeFilter === "articles" && item.type !== "article") return false;
                if (activeFilter === "products" && item.type !== "product") return false;
            }

            // Search in title, excerpt, category, and tags
            const searchableText = [
                item.title,
                item.excerpt,
                item.category,
                ...item.tags,
            ]
                .join(" ")
                .toLowerCase();

            return searchTerms.every((term) => searchableText.includes(term));
        });
    }, [query, activeFilter]);

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            {/* Search Hero */}
            <section className="pt-32 pb-8 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black mb-8"
                    >
                        <span className="gradient-text">Search</span> NDS
                    </motion.h1>

                    {/* Search Input */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                    >
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for reviews, products, categories..."
                            className="w-full pl-14 pr-12 py-5 bg-white/5 border border-white/10 rounded-2xl text-lg focus:outline-none focus:border-[var(--nds-primary)] transition-colors"
                            autoFocus
                        />
                        {query && (
                            <button
                                onClick={() => setQuery("")}
                                className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </motion.div>

                    {/* Filters */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                                        ? "bg-[var(--nds-primary)] text-white"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                                    }`}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    {query && (
                        <p className="text-sm text-gray-500 mb-6">
                            {results.length} result{results.length !== 1 ? "s" : ""} for
                            &quot;{query}&quot;
                        </p>
                    )}

                    {!query && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">
                                Start typing to search across all reviews and products
                            </p>
                            <div className="mt-6 flex flex-wrap justify-center gap-2">
                                {["headphones", "standing desk", "wireless", "gaming"].map(
                                    (suggestion) => (
                                        <button
                                            key={suggestion}
                                            onClick={() => setQuery(suggestion)}
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 hover:border-[var(--nds-primary)] hover:text-[var(--nds-primary)] transition-colors"
                                        >
                                            {suggestion}
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    )}

                    {query && results.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-400 text-lg mb-2">
                                No results found for &quot;{query}&quot;
                            </p>
                            <p className="text-gray-600 text-sm">
                                Try different keywords or browse our categories
                            </p>
                        </div>
                    )}

                    <div className="space-y-4">
                        {results.map((item, index) => (
                            <motion.div
                                key={`${item.slug}-${index}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={item.slug}
                                    className="group flex items-center gap-5 p-5 bg-white/[0.02] border border-white/5 rounded-xl hover:border-[var(--nds-primary)]/30 transition-all"
                                >
                                    <div className="text-4xl">{item.image}</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--nds-primary)]/10 text-[var(--nds-primary)] capitalize">
                                                {item.type}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {item.category}
                                            </span>
                                        </div>
                                        <h3 className="font-semibold group-hover:text-[var(--nds-primary)] transition-colors truncate">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 truncate">
                                            {item.excerpt}
                                        </p>
                                        {item.date && (
                                            <div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {item.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {item.readTime}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[var(--nds-primary)] group-hover:translate-x-1 transition-all flex-shrink-0" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <AIChat />
        </main>
    );
}
