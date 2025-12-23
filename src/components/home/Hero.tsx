"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ChevronDown, Star, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/aceternity/spotlight";

/**
 * HERO - NIVEL AWWWARDS
 * 
 * Features:
 * - Logo GIGANTE y prominente
 * - Imágenes flotantes GRANDES en los bordes
 * - Efecto Spotlight que sigue el cursor
 * - Gradientes animados nivel premium
 * - Presencia de marca notoria
 */

// Imágenes flotantes GRANDES posicionadas en los BORDES (no bloquean texto)
const floatingProducts = [
    { src: "/products/headphones.png", x: -420, y: -80, delay: 0, size: 200 },       // Izquierda arriba
    { src: "/products/laptop.png", x: 380, y: -120, delay: 0.2, size: 220 },         // Derecha arriba
    { src: "/products/gaming.png", x: -400, y: 200, delay: 0.4, size: 180 },         // Izquierda abajo
    { src: "/products/software.png", x: 420, y: 220, delay: 0.6, size: 190 },        // Derecha abajo
];

function FloatingProduct({ src, x, y, delay, size }: { src: string; x: number; y: number; delay: number; size: number }) {
    return (
        <motion.div
            className="absolute hidden xl:block pointer-events-none z-20"
            initial={{ opacity: 0, scale: 0.3, x: x * 0.3, y: y * 0.3 }}
            animate={{
                opacity: [0, 0.95, 0.95],
                scale: 1,
                x: x,
                y: y
            }}
            transition={{
                duration: 2,
                delay: delay + 0.8,
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
                    y: [0, -20, 0],
                    rotateZ: [0, 5, 0, -5, 0]
                }}
                transition={{
                    duration: 8 + delay * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative w-full h-full"
            >
                {/* Glow effect más intenso */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-40" />
                <Image
                    src={src}
                    alt="Product"
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(0,180,216,0.5)]"
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
            {/* Background base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030309] via-[#0a0a1a] to-[#030309]" />

            {/* Spotlight Effect - sigue al cursor */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="rgba(0, 180, 216, 0.15)"
            />

            {/* Aurora animada */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent blur-3xl" />
                    <div className="absolute top-1/2 right-1/4 w-1/3 h-1/3 bg-gradient-radial from-purple-600/30 via-transparent to-transparent blur-3xl" />
                    <div className="absolute bottom-1/4 left-1/3 w-1/2 h-1/3 bg-gradient-radial from-blue-500/20 via-transparent to-transparent blur-3xl" />
                </motion.div>
            </div>

            {/* Orbes con parallax */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[200px] opacity-15"
                style={{ y: y1 }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[180px] opacity-20"
                style={{ y: y2 }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            />

            {/* Imágenes flotantes GRANDES en los BORDES */}
            {floatingProducts.map((product, index) => (
                <FloatingProduct key={index} {...product} />
            ))}

            {/* Contenido principal */}
            <motion.div
                className="relative z-30 text-center max-w-4xl mx-auto px-6"
                style={{ opacity }}
            >
                {/* ====== LOGO GIGANTE Y PROMINENTE ====== */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.3, y: -50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                    className="mb-8"
                >
                    <motion.div
                        className="relative inline-block"
                        animate={{
                            filter: [
                                "drop-shadow(0 0 30px rgba(0,180,216,0.6))",
                                "drop-shadow(0 0 60px rgba(0,180,216,0.9))",
                                "drop-shadow(0 0 30px rgba(0,180,216,0.6))"
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Image
                            src="/logo.png"
                            alt="Nest Digital Studio"
                            width={280}
                            height={280}
                            className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto"
                            priority
                        />
                        {/* Ring animado alrededor del logo */}
                        <motion.div
                            className="absolute inset-0 border-2 border-cyan-500/50 rounded-full"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>

                {/* Badge premium */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 backdrop-blur-xl mb-8"
                >
                    <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                    <span className="text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        AI-Powered Tech Reviews
                    </span>
                    <div className="flex items-center gap-0.5 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                    </div>
                </motion.div>

                {/* Título principal - MARCA PROMINENTE */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6"
                >
                    <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                        Nest Digital
                    </span>
                    <motion.span
                        className="block mt-2 text-6xl md:text-8xl lg:text-9xl"
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{
                            backgroundSize: "200% auto",
                            backgroundImage: "linear-gradient(90deg, #00e5ff, #7c3aed, #ec4899, #00e5ff)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        Studio
                    </motion.span>
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Expert technology reviews powered by AI. We analyze{" "}
                    <span className="text-white font-bold">50,000+ verified reviews</span>{" "}
                    to bring you unbiased, data-driven recommendations.
                </motion.p>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-wrap justify-center gap-10 md:gap-16 mb-12"
                >
                    {[
                        { value: "50K+", label: "Reviews Analyzed" },
                        { value: "5", label: "Data Sources" },
                        { value: "AI", label: "Powered" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + i * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/reviews">
                        <motion.button
                            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full font-bold text-lg overflow-hidden animate-glow-pulse"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Best Products
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </Link>

                    <motion.button
                        className="px-10 py-5 rounded-full font-semibold text-lg border border-white/20 text-white hover:bg-white/5 transition-all flex items-center gap-2"
                        whileHover={{ scale: 1.05, borderColor: "rgba(0,229,255,0.5)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Sparkles className="w-5 h-5 text-cyan-400" />
                        Ask AI Assistant
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
