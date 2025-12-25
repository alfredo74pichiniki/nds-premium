"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--nds-primary)]/20 via-transparent to-[var(--nds-accent)]/20" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto relative"
            >
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-3xl animated-gradient p-[2px]">
                        <div className="w-full h-full bg-[var(--nds-bg-dark)] rounded-3xl" />
                    </div>

                    <div className="relative p-12 md:p-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--nds-primary)]/10 mb-6">
                                <Zap className="w-4 h-4 text-[var(--nds-primary)]" />
                                <span className="text-sm font-medium text-[var(--nds-primary)]">
                                    AI-Powered Recommendations
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black mb-6">
                                Ready to find your{" "}
                                <span className="gradient-text">perfect product?</span>
                            </h2>

                            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                                Join thousands of smart shoppers who trust our AI-powered reviews
                                to make confident purchasing decisions.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/reviews" className="group px-8 py-4 rounded-full bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-primary-dark)] font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] transition-all duration-300 hover:scale-105">
                                    Start Exploring
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="/tools" className="px-8 py-4 rounded-full border border-white/20 font-semibold text-lg hover:bg-white/5 transition-colors text-center">
                                    View AI Tools
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
