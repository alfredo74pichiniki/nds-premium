"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ChevronDown, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Floating product showcases
const floatingProducts = [
    { src: "/products/headphones.png", x: -300, y: -100, delay: 0, size: 120 },
    { src: "/products/laptop.png", x: 280, y: -50, delay: 0.2, size: 140 },
    { src: "/products/gaming.png", x: -250, y: 150, delay: 0.4, size: 100 },
    { src: "/products/software.png", x: 320, y: 180, delay: 0.6, size: 110 },
];

function FloatingProduct({ src, x, y, delay, size }: { src: string; x: number; y: number; delay: number; size: number }) {
    return (
        <motion.div
            className="absolute hidden lg:block pointer-events-none"
            initial={{ opacity: 0, scale: 0.5, x: x * 0.5, y: y * 0.5 }}
            animate={{
                opacity: [0, 0.8, 0.8],
                scale: 1,
                x: x,
                y: y
            }}
            transition={{
                duration: 1.5,
                delay: delay + 0.5,
                ease: "easeOut"
            }}
            style={{
                left: "50%",
                top: "50%",
                width: size,
                height: size
            }}
        >
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotateZ: [0, 3, 0, -3, 0]
                }}
                transition={{
                    duration: 6 + delay * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative w-full h-full"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] rounded-full blur-2xl opacity-30" />
                <Image
                    src={src}
                    alt="Product"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes={`${size}px`}
                />
            </motion.div>
        </motion.div>
    );
}

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Multi-layer animated background - EXPLOSIVE VERSION */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d1117] to-[#0a0a0a]" />

            {/* AURORA EFFECT - Animated color waves */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-cyan-500/30 via-transparent to-transparent blur-3xl" />
                    <div className="absolute top-1/2 right-1/4 w-1/3 h-1/3 bg-gradient-radial from-purple-600/40 via-transparent to-transparent blur-3xl" />
                    <div className="absolute bottom-1/4 left-1/3 w-1/2 h-1/3 bg-gradient-radial from-blue-500/30 via-transparent to-transparent blur-3xl" />
                </motion.div>
            </div>

            {/* Animated gradient mesh - MORE VIBRANT */}
            <div className="absolute inset-0 opacity-50">
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.2),transparent_50%)]"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.25),transparent_50%)]"
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,180,216,0.15),transparent_70%)]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
            </div>

            {/* Animated orbs with parallax */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--nds-primary)] rounded-full blur-[180px] opacity-20"
                style={{ y: y1 }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--nds-accent)] rounded-full blur-[150px] opacity-15"
                style={{ y: y2 }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            {/* Floating Products */}
            {floatingProducts.map((product, index) => (
                <FloatingProduct key={index} {...product} />
            ))}

            {/* Content */}
            <motion.div
                className="relative z-10 text-center max-w-5xl mx-auto px-6"
                style={{ opacity }}
            >
                {/* Premium badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-xl mb-10"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Sparkles className="w-5 h-5 text-[var(--nds-primary)]" />
                    </motion.div>
                    <span className="text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] bg-clip-text text-transparent">
                        AI-Powered Tech Reviews
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                    </div>
                </motion.div>

                {/* Main headline with animated gradient */}
                {/* LOGO - MUCHO MÁS GRANDE Y VISIBLE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.1, type: "spring" }}
                    className="mb-6"
                >
                    <motion.div
                        className="relative inline-block"
                        animate={{
                            filter: ["drop-shadow(0 0 20px rgba(0,180,216,0.5))", "drop-shadow(0 0 40px rgba(0,180,216,0.8))", "drop-shadow(0 0 20px rgba(0,180,216,0.5))"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Nest Digital Studio"
                            width={200}
                            height={200}
                            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto"
                            priority
                        />
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8"
                >
                    <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                        Nest Digital
                    </span>
                    <motion.span
                        className="block mt-2"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{
                            backgroundSize: "200% auto",
                            backgroundImage: "linear-gradient(90deg, var(--nds-primary), var(--nds-accent), var(--nds-primary))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        Studio
                    </motion.span>
                </motion.h1>

                {/* Subtitle with emphasized text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-14 leading-relaxed"
                >
                    Expert technology reviews powered by AI. We analyze{" "}
                    <span className="text-white font-bold relative">
                        50,000+ verified reviews
                        <motion.span
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)]"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        />
                    </span>{" "}
                    to bring you unbiased, data-driven recommendations.
                </motion.p>

                {/* Trust badges - Premium stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-16 mb-14"
                >
                    {[
                        { value: "50K+", label: "Reviews Analyzed", icon: "📊" },
                        { value: "5", label: "Data Sources", icon: "🔗" },
                        { value: "E-E-A-T", label: "Compliant", icon: "✓" },
                        { value: "AI", label: "Powered", icon: "🤖" },
                    ].map((badge, i) => (
                        <motion.div
                            key={badge.label}
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="text-center group cursor-default"
                        >
                            <motion.div
                                className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] bg-clip-text text-transparent"
                                whileHover={{ scale: 1.1 }}
                            >
                                {badge.value}
                            </motion.div>
                            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-2 font-medium group-hover:text-gray-400 transition-colors">
                                {badge.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/compare">
                        <motion.button
                            className="group relative px-10 py-5 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-primary-dark)] rounded-full font-bold text-lg overflow-hidden transition-all duration-300"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 50px rgba(0,180,216,0.4)"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Best Products
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[var(--nds-accent)] to-[var(--nds-primary)]"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </Link>

                    <motion.button
                        className="px-10 py-5 rounded-full font-semibold text-lg border border-white/20 text-white hover:bg-white/5 transition-all flex items-center gap-2"
                        whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Sparkles className="w-5 h-5 text-[var(--nds-primary)]" />
                        Ask AI Assistant
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
