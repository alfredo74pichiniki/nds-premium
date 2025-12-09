"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d1117] to-[#0a0a0a]" />

            {/* Glowing orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--nds-primary)] rounded-full blur-[150px] opacity-20"
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
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--nds-accent)] rounded-full blur-[120px] opacity-15"
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

            {/* Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                {/* Logo badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-[var(--nds-primary)]" />
                    <span className="text-sm font-medium text-[var(--nds-primary)] tracking-wider uppercase">
                        AI-Powered Tech Reviews
                    </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
                >
                    <span className="gradient-text">Nest Digital</span>
                    <br />
                    <span className="text-white">Studio</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Expert technology reviews powered by AI. We analyze{" "}
                    <span className="text-[var(--nds-primary)] font-semibold">50,000+ verified reviews</span>{" "}
                    to bring you unbiased, data-driven recommendations.
                </motion.p>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-12"
                >
                    {[
                        { value: "50K+", label: "Reviews Analyzed" },
                        { value: "5", label: "Data Sources" },
                        { value: "E-E-A-T", label: "Compliant" },
                        { value: "AI", label: "Powered" },
                    ].map((badge, i) => (
                        <motion.div
                            key={badge.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] bg-clip-text text-transparent">
                                {badge.value}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">
                                {badge.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-12"
                >
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-primary-dark)] rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] hover:scale-105">
                        <span className="relative z-10">Ask AI for Recommendations</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--nds-accent)] to-[var(--nds-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-3 bg-[var(--nds-primary)] rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
