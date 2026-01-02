"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap, Users } from "lucide-react";

const features = [
    {
        icon: TrendingUp,
        title: "Data-Driven Analysis",
        description: "We aggregate 50,000+ verified user reviews from Amazon, Reddit, and YouTube.",
    },
    {
        icon: Shield,
        title: "E-E-A-T Compliant",
        description: "All content follows Google's Experience, Expertise, Authority, and Trust guidelines.",
    },
    {
        icon: Zap,
        title: "AI-Powered Insights",
        description: "Advanced AI synthesizes patterns across sources for comprehensive recommendations.",
    },
    {
        icon: Users,
        title: "Community Verified",
        description: "Cross-reference with RTINGS, Tom's Guide, and thousands of real user experiences.",
    },
];

export function Methodology() {
    return (
        <section className="relative z-10 py-24 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Our <span className="gradient-text">Research Methodology</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        How we ensure every recommendation is backed by real data
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[var(--nds-primary)]/30 transition-colors"
                        >
                            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--nds-primary)] to-[var(--nds-primary-dark)] flex items-center justify-center">
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
