"use client";

import { motion } from "framer-motion";
import { Gamepad2, Puzzle, Brain, Trophy, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

/**
 * FunZone - Sección de entretenimiento para retener usuarios
 * 
 * Incluye juegos embebidos simples que mantienen a los usuarios
 * en la web más tiempo, aumentando probabilidad de conversión.
 */

const games = [
    {
        id: "memory",
        title: "Tech Memory",
        description: "Match tech gadgets",
        icon: Brain,
        color: "from-purple-500 to-pink-500",
        href: "/fun/memory",
        badge: "Popular"
    },
    {
        id: "quiz",
        title: "Tech Quiz",
        description: "Test your knowledge",
        icon: Puzzle,
        color: "from-cyan-500 to-blue-500",
        href: "/fun/quiz",
        badge: "New"
    },
    {
        id: "deals",
        title: "Deal Hunter",
        description: "Find the best price",
        icon: Trophy,
        color: "from-orange-500 to-red-500",
        href: "/fun/deals",
        badge: "🔥"
    },
    {
        id: "spinner",
        title: "Lucky Spin",
        description: "Win discount codes",
        icon: Sparkles,
        color: "from-yellow-500 to-orange-500",
        href: "/fun/spinner",
        badge: "Free"
    }
];

export function FunZone() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Gamepad2 className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-bold text-purple-300">FUN ZONE</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Take a Break
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Play fun games while you discover the best tech deals.
                        Win discount codes and have fun!
                    </p>
                </motion.div>

                {/* Games Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {games.map((game, index) => (
                        <motion.div
                            key={game.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={game.href}>
                                <motion.div
                                    className="relative group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm overflow-hidden cursor-pointer"
                                    whileHover={{
                                        scale: 1.05,
                                        borderColor: "rgba(255,255,255,0.3)",
                                        y: -5
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Hover glow effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                    {/* Badge */}
                                    <div className={`absolute top-4 right-4 px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${game.color} text-white`}>
                                        {game.badge}
                                    </div>

                                    {/* Icon */}
                                    <motion.div
                                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center mb-4`}
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                    >
                                        <game.icon className="w-8 h-8 text-white" />
                                    </motion.div>

                                    {/* Title & Description */}
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                        {game.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-4">
                                        {game.description}
                                    </p>

                                    {/* Play button */}
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-cyan-400 transition-colors">
                                        Play Now
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 mb-4">
                        🎮 All games are free. Win real discount codes!
                    </p>
                    <Link href="/fun">
                        <motion.button
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View All Games
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
