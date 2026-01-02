"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Target } from "lucide-react";

const values = [
    {
        icon: Shield,
        title: "Honest Reviews",
        description: "No paid placements. We only recommend products we'd buy ourselves.",
    },
    {
        icon: Zap,
        title: "AI-Powered Research",
        description: "Our AI analyzes thousands of reviews to find what actually matters.",
    },
    {
        icon: Target,
        title: "Your Best Match",
        description: "Personalized recommendations based on your needs, not ad budgets.",
    },
];

export function Testimonials() {
    return (
        <section className="relative z-10 py-24 px-6 overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Our <span className="gradient-text">Mission</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Helping you make smarter tech decisions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-[var(--nds-primary)]/30 transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--nds-primary)] to-[var(--nds-accent)] mb-6">
                                <value.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                            <p className="text-gray-400">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

