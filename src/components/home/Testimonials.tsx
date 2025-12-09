"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        text: "NDS saved me hours of research. Found my perfect headphones in minutes!",
        author: "Sarah M.",
        role: "Tech Enthusiast",
        avatar: "👩‍💻",
    },
    {
        text: "The AI assistant knew exactly what I needed. Better than any store clerk.",
        author: "James K.",
        role: "Software Developer",
        avatar: "👨‍💼",
    },
    {
        text: "Finally, honest reviews backed by real data. No sponsored garbage.",
        author: "Maria L.",
        role: "Content Creator",
        avatar: "🎬",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Trusted by <span className="gradient-text">Smart Shoppers</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        See what our community says about their experience
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-[var(--nds-primary)]/30 transition-all duration-300"
                        >
                            <Quote className="w-8 h-8 text-[var(--nds-primary)]/30 mb-4" />
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="text-3xl">{testimonial.avatar}</span>
                                <div>
                                    <div className="font-semibold">{testimonial.author}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
