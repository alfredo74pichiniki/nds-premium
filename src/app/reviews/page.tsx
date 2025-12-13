"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// ONLY articles that have actual pages
const articles = [
    {
        slug: "best-noise-canceling-headphones",
        title: "Best Noise-Canceling Headphones of 2025",
        excerpt: "We tested 15 premium headphones for 200+ hours to find the absolute best for work, travel, and everyday use.",
        category: "Audio",
        date: "Dec 2025",
        readTime: "12 min",
        image: "🎧",
        featured: true,
    },
    {
        slug: "best-standing-desks",
        title: "Best Standing Desks for Home Office 2025",
        excerpt: "After testing 12 standing desks for 6 months, here are our top picks for every budget and workspace.",
        category: "Work From Home",
        date: "Dec 2025",
        readTime: "10 min",
        image: "🪑",
        featured: true,
    },
    {
        slug: "best-mechanical-keyboards-2025",
        title: "Best Mechanical Keyboards for Typing & Gaming",
        excerpt: "From tactile switches to linear, we tested 20 keyboards to find the best for every use case.",
        category: "Peripherals",
        date: "Nov 2025",
        readTime: "15 min",
        image: "⌨️",
        featured: false,
    },
    {
        slug: "best-webcams-2025",
        title: "Best Webcams for Video Calls & Streaming",
        excerpt: "Look professional on Zoom calls with our picks for the best 1080p and 4K webcams.",
        category: "Work From Home",
        date: "Nov 2025",
        readTime: "9 min",
        image: "📷",
        featured: false,
    },
    {
        slug: "best-desk-lamps-2025",
        title: "Best Desk Lamps for Home Office 2025",
        excerpt: "Proper lighting reduces eye strain and boosts productivity. Here are our top picks.",
        category: "Work From Home",
        date: "Nov 2025",
        readTime: "7 min",
        image: "💡",
        featured: false,
    },
    {
        slug: "best-usb-c-hubs-2025",
        title: "Best USB-C Hubs & Docking Stations 2025",
        excerpt: "Expand your laptop's connectivity with these top-rated USB-C hubs.",
        category: "Accessories",
        date: "Nov 2025",
        readTime: "8 min",
        image: "🔌",
        featured: false,
    },
    {
        slug: "best-microphones-podcasting",
        title: "Best Microphones for Podcasting & Streaming",
        excerpt: "Crystal clear audio for your podcast or stream with these professional mics.",
        category: "Audio",
        date: "Nov 2025",
        readTime: "10 min",
        image: "🎙️",
        featured: false,
    },
];

export default function ReviewsPage() {
    const featuredArticles = articles.filter((a) => a.featured);
    const regularArticles = articles.filter((a) => !a.featured);

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black mb-6"
                    >
                        Expert <span className="gradient-text">Tech Reviews</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        In-depth buying guides backed by real testing and 50,000+ verified user reviews
                    </motion.p>
                </div>
            </section>

            {/* Featured */}
            <section className="pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8">Featured Guides</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {featuredArticles.map((article, index) => (
                            <motion.div
                                key={article.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/reviews/${article.slug}`}
                                    className="group block bg-gradient-to-br from-[var(--nds-primary)]/10 to-transparent border border-[var(--nds-primary)]/20 rounded-2xl p-8 hover:border-[var(--nds-primary)]/50 transition-all duration-300"
                                >
                                    <div className="text-6xl mb-6">{article.image}</div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--nds-primary)]/10 text-[var(--nds-primary)] text-xs font-medium mb-3">
                                        {article.category}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--nds-primary)] transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">{article.excerpt}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {article.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {article.readTime}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Reviews */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8">All Buying Guides</h2>
                    <div className="space-y-4">
                        {regularArticles.map((article, index) => (
                            <motion.div
                                key={article.slug}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={`/reviews/${article.slug}`}
                                    className="group flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-[var(--nds-primary)]/30 transition-all"
                                >
                                    <div className="text-4xl">{article.image}</div>
                                    <div className="flex-1">
                                        <span className="text-xs text-[var(--nds-primary)] font-medium">
                                            {article.category}
                                        </span>
                                        <h3 className="text-lg font-semibold group-hover:text-[var(--nds-primary)] transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">{article.excerpt}</p>
                                    </div>
                                    <div className="hidden md:flex items-center gap-4 text-sm text-gray-500">
                                        <span>{article.date}</span>
                                        <span>{article.readTime}</span>
                                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[var(--nds-primary)] group-hover:translate-x-1 transition-all" />
                                    </div>
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
