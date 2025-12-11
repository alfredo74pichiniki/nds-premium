"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, Loader2, Sparkles } from "lucide-react";

export function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        // Simulate API call (replace with real endpoint)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // In production, this would call your newsletter API
        // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });

        setStatus("success");
        setEmail("");
    };

    return (
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--nds-primary)]/20 via-purple-500/10 to-[var(--nds-accent)]/20 border border-white/10 p-12 text-center"
                >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--nds-primary)]/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                    </div>

                    <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--nds-primary)] to-[var(--nds-accent)] mb-6"
                        >
                            <Sparkles className="w-8 h-8" />
                        </motion.div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-black mb-4">
                            Get <span className="gradient-text">Exclusive Deals</span> First
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 max-w-xl mx-auto mb-8">
                            Join 10,000+ smart shoppers who get our weekly tech deals, buying guides,
                            and exclusive discounts delivered straight to their inbox.
                        </p>

                        {/* Form */}
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center justify-center gap-3 text-emerald-400"
                            >
                                <CheckCircle className="w-6 h-6" />
                                <span className="text-lg font-medium">You&apos;re in! Check your email.</span>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        className="w-full pl-12 pr-4 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-[var(--nds-primary)] transition-colors"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] font-semibold hover:shadow-[0_0_30px_rgba(0,180,216,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Subscribing...
                                        </>
                                    ) : (
                                        "Subscribe Free"
                                    )}
                                </button>
                            </form>
                        )}

                        {/* Trust badges */}
                        <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
                            <span>✓ No spam ever</span>
                            <span>✓ Unsubscribe anytime</span>
                            <span>✓ 100% free</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
