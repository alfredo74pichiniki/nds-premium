"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Zap, Star } from "lucide-react";
import { useRef } from "react";

// Categories with REAL product images - ULTRA PREMIUM GOD LEVEL+++++
const categories = [
    {
        title: "Best Of",
        subtitle: "Top Picks 2025",
        description: "Elite products handpicked by AI analysis of 50,000+ reviews",
        badge: "🏆 #1",
        gradient: "from-amber-400 via-orange-500 to-red-500",
        glowColor: "rgba(251, 146, 60, 0.5)",
        image: "/products/laptop.png",
        link: "/compare",
        stats: { items: "200+", rating: "4.8" }
    },
    {
        title: "Reviews",
        subtitle: "Deep Analysis",
        description: "2500+ word expert reviews with multi-source verification",
        badge: "⭐ Pro",
        gradient: "from-cyan-400 via-blue-500 to-indigo-600",
        glowColor: "rgba(6, 182, 212, 0.5)",
        image: "/products/headphones.png",
        link: "/reviews",
        stats: { items: "150+", rating: "4.9" }
    },
    {
        title: "Blog",
        subtitle: "Tech Insights",
        description: "Breaking news, trends, and insider tech analysis",
        badge: "🔥 Hot",
        gradient: "from-purple-400 via-fuchsia-500 to-pink-500",
        glowColor: "rgba(217, 70, 239, 0.5)",
        image: "/products/blog.png",
        link: "/blog",
        stats: { items: "50+", rating: "4.7" }
    },
    {
        title: "Deals",
        subtitle: "Save Big",
        description: "Exclusive discounts, promo codes, and flash sales",
        badge: "💰 -70%",
        gradient: "from-red-400 via-rose-500 to-pink-600",
        glowColor: "rgba(244, 63, 94, 0.5)",
        image: "/products/deals.png",
        link: "/deals",
        stats: { items: "100+", rating: "4.8" }
    },
    {
        title: "Guides",
        subtitle: "Learn & Master",
        description: "Step-by-step buying guides and how-to tutorials",
        badge: "📚 Expert",
        gradient: "from-emerald-400 via-green-500 to-teal-600",
        glowColor: "rgba(16, 185, 129, 0.5)",
        image: "/products/guides.png",
        link: "/guides",
        stats: { items: "80+", rating: "4.9" }
    },
    {
        title: "Tools",
        subtitle: "Interactive",
        description: "AI-powered product finder and comparison calculators",
        badge: "🛠️ Beta",
        gradient: "from-violet-400 via-indigo-500 to-purple-600",
        glowColor: "rgba(139, 92, 246, 0.5)",
        image: "/products/tools.png",
        link: "/tools",
        stats: { items: "12", rating: "4.6" }
    },
    {
        title: "Software",
        subtitle: "SaaS & Apps",
        description: "B2B software reviews with exclusive affiliate deals",
        badge: "💼 B2B",
        gradient: "from-teal-400 via-cyan-500 to-blue-600",
        glowColor: "rgba(20, 184, 166, 0.5)",
        image: "/products/software.png",
        link: "/software",
        stats: { items: "60+", rating: "4.8" }
    },
    {
        title: "Gaming",
        subtitle: "Level Up",
        description: "Gaming gear, streaming setups, and esports equipment",
        badge: "🎮 RGB",
        gradient: "from-pink-400 via-rose-500 to-red-500",
        glowColor: "rgba(236, 72, 153, 0.5)",
        image: "/products/gaming.png",
        link: "/gaming",
        stats: { items: "120+", rating: "4.9" }
    },
];

// 3D Card Component with Mouse Tracking
function Category3DCard({ category, index }: { category: typeof categories[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [8, -8]);
    const rotateY = useTransform(x, [-100, 100], [-8, 8]);

    const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
    const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            style={{ perspective: 1000 }}
        >
            <Link href={category.link} className="block h-full">
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX: springRotateX,
                        rotateY: springRotateY,
                        transformStyle: "preserve-3d"
                    }}
                    whileHover={{ z: 50 }}
                    className="group relative h-full min-h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                >
                    {/* Animated gradient border */}
                    <div className={`absolute -inset-[2px] rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                    {/* Card background with glassmorphism */}
                    <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-[#141420] via-[#0d0d15] to-[#0a0a12] backdrop-blur-xl" />

                    {/* Dynamic glow effect */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                            boxShadow: `0 30px 100px ${category.glowColor}, inset 0 1px 0 rgba(255,255,255,0.1)`,
                            background: `radial-gradient(circle at 50% 0%, ${category.glowColor.replace('0.5', '0.15')}, transparent 60%)`
                        }}
                    />

                    {/* Content container */}
                    <div className="relative z-10 h-full p-6 flex flex-col">
                        {/* Badge */}
                        <div className="flex justify-between items-start mb-4">
                            <motion.span
                                className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${category.gradient} text-white text-sm font-bold shadow-lg`}
                                style={{ transform: "translateZ(40px)" }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {category.badge}
                            </motion.span>
                            <div className="flex items-center gap-1 text-yellow-400">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-sm font-semibold">{category.stats.rating}</span>
                            </div>
                        </div>

                        {/* Product Image with 3D Float */}
                        <motion.div
                            className="flex-1 relative flex items-center justify-center my-4"
                            style={{ transform: "translateZ(60px)" }}
                        >
                            <motion.div
                                className="relative w-48 h-48"
                                animate={{
                                    y: [0, -8, 0],
                                    rotateZ: [0, 2, 0, -2, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {/* Glow under image */}
                                <div
                                    className={`absolute inset-0 rounded-full blur-3xl opacity-40 bg-gradient-to-r ${category.gradient}`}
                                    style={{ transform: "translateY(20px) scale(0.8)" }}
                                />
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 192px, 192px"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Title & Description */}
                        <div style={{ transform: "translateZ(30px)" }}>
                            <h3 className={`text-2xl font-black mb-1 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                                {category.title}
                            </h3>
                            <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                                {category.subtitle}
                            </span>
                            <p className="text-gray-400 text-sm mt-2 leading-relaxed line-clamp-2">
                                {category.description}
                            </p>
                        </div>

                        {/* Footer with stats and CTA */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5" style={{ transform: "translateZ(20px)" }}>
                            <div className="flex items-center gap-4">
                                <span className="text-xs text-gray-500">
                                    <span className="text-white font-semibold">{category.stats.items}</span> items
                                </span>
                            </div>
                            <motion.div
                                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} text-white text-sm font-semibold`}
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore
                                <ArrowRight className="w-4 h-4" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Shine effect on hover */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)",
                            transform: "translateX(-100%)"
                        }}
                        whileHover={{ x: "200%" }}
                        transition={{ duration: 0.8 }}
                    />
                </motion.div>
            </Link>
        </motion.div>
    );
}

export function Categories() {
    return (
        <section className="relative z-10 py-32 px-6 overflow-hidden bg-transparent">

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <motion.div
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--nds-primary)]/20 to-[var(--nds-accent)]/20 border border-[var(--nds-primary)]/30 mb-8"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles className="w-5 h-5 text-[var(--nds-primary)]" />
                        <span className="text-sm font-bold text-[var(--nds-primary)] tracking-wider uppercase">
                            8 Premium Categories
                        </span>
                        <Zap className="w-5 h-5 text-[var(--nds-accent)]" />
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Discover{" "}
                        <span className="bg-gradient-to-r from-[var(--nds-primary)] via-purple-500 to-[var(--nds-accent)] bg-clip-text text-transparent">
                            Premium Tech
                        </span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        AI-curated product recommendations backed by{" "}
                        <span className="text-white font-semibold">50,000+ verified reviews</span>{" "}
                        and real-world testing data
                    </p>
                </motion.div>

                {/* 3D Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <Category3DCard key={category.title} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
