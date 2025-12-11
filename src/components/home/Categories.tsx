"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Trophy,
    FileText,
    Newspaper,
    Tag,
    BookOpen,
    Wrench,
    Briefcase,
    Gamepad2,
    ArrowRight,
    Sparkles,
    Zap
} from "lucide-react";

// All 8 categories - ALL AVAILABLE - matches Navbar exactly
const categories = [
    {
        icon: Trophy,
        title: "Best Of",
        subtitle: "Comparisons",
        description: "Top products in every category compared side by side.",
        badge: "2025",
        gradient: "from-amber-500 via-orange-500 to-red-500",
        glowColor: "rgba(251, 146, 60, 0.4)",
        link: "/compare",
    },
    {
        icon: FileText,
        title: "Reviews",
        subtitle: "Deep Dives",
        description: "In-depth analysis of bestselling products with multi-platform links.",
        badge: "Pro",
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        glowColor: "rgba(6, 182, 212, 0.4)",
        link: "/reviews",
    },
    {
        icon: Newspaper,
        title: "Blog",
        subtitle: "Tech News",
        description: "Latest releases, trends, and insights from the tech world.",
        badge: "New",
        gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
        glowColor: "rgba(217, 70, 239, 0.4)",
        link: "/blog",
    },
    {
        icon: Tag,
        title: "Deals",
        subtitle: "Save",
        description: "Best offers, exclusive discounts, and promo codes updated daily.",
        badge: "🔥 Hot",
        gradient: "from-red-500 via-rose-500 to-pink-500",
        glowColor: "rgba(244, 63, 94, 0.4)",
        link: "/deals",
    },
    {
        icon: BookOpen,
        title: "Guides",
        subtitle: "Learn",
        description: "How to choose, buying guides, and technical explanations.",
        badge: "How To",
        gradient: "from-green-500 via-emerald-500 to-teal-500",
        glowColor: "rgba(16, 185, 129, 0.4)",
        link: "/guides",
    },
    {
        icon: Wrench,
        title: "Tools",
        subtitle: "Interactive",
        description: "Product quiz, custom comparator, value calculators.",
        badge: "Beta",
        gradient: "from-indigo-500 via-violet-500 to-purple-500",
        glowColor: "rgba(139, 92, 246, 0.4)",
        link: "/tools",
    },
    {
        icon: Briefcase,
        title: "Software",
        subtitle: "SaaS",
        description: "App reviews, plan comparisons, and exclusive software deals.",
        badge: "B2B",
        gradient: "from-teal-500 via-cyan-500 to-blue-500",
        glowColor: "rgba(20, 184, 166, 0.4)",
        link: "/software",
    },
    {
        icon: Gamepad2,
        title: "Gaming",
        subtitle: "Play",
        description: "Gaming hardware, streaming gear, consoles, VR and accessories.",
        badge: "🎮",
        gradient: "from-fuchsia-500 via-pink-500 to-rose-500",
        glowColor: "rgba(236, 72, 153, 0.4)",
        link: "/gaming",
    },
];

export function Categories() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--nds-primary)]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--nds-primary)]/20 to-[var(--nds-accent)]/20 border border-[var(--nds-primary)]/30 text-[var(--nds-primary)] text-sm font-medium mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles className="w-4 h-4" />
                        8 Premium Categories
                        <Zap className="w-4 h-4" />
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">
                        Explore <span className="gradient-text">Premium Content</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Information, value, and experience. Not just shopping—learning.
                    </p>
                </motion.div>

                {/* ALL categories clickable */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40, rotateX: -15 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }}
                        >
                            <Link href={category.link} className="block h-full">
                                <motion.div
                                    className="group relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-6 overflow-hidden transition-all duration-500"
                                    whileHover={{
                                        y: -12,
                                        scale: 1.02,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
                                    <div className="absolute inset-[1px] rounded-3xl bg-[#0a0a0a] -z-10" />

                                    <div
                                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{ boxShadow: `0 20px 60px ${category.glowColor}` }}
                                    />

                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl`} />

                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${category.gradient} text-xs font-bold text-white shadow-lg`}>
                                            {category.badge}
                                        </span>
                                    </div>

                                    <motion.div
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} p-4 mb-5 shadow-lg`}
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ boxShadow: `0 10px 40px ${category.glowColor}` }}
                                    >
                                        <category.icon className="w-full h-full text-white" />
                                    </motion.div>

                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">
                                            {category.title}
                                        </h3>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider">{category.subtitle}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                        {category.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                        <span className="text-sm font-semibold text-[var(--nds-primary)]">
                                            Explore
                                        </span>
                                        <motion.div
                                            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--nds-primary)] transition-colors"
                                            whileHover={{ x: 5 }}
                                        >
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
