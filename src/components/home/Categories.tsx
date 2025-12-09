"use client";

import { motion } from "framer-motion";
import {
    Headphones,
    Laptop,
    Smartphone,
    Gamepad2,
    Monitor,
    BarChart3,
    ArrowRight
} from "lucide-react";

const categories = [
    {
        icon: Headphones,
        title: "Audio & Headphones",
        description: "Premium noise-canceling headphones, wireless earbuds, and audiophile equipment.",
        count: "15+ Guides",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: Laptop,
        title: "Software & SaaS",
        description: "Productivity tools, marketing automation, CRM, and business software.",
        count: "20+ Guides",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Smartphone,
        title: "Smart Home",
        description: "Smart speakers, home automation, security cameras, and IoT devices.",
        count: "12+ Guides",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: Monitor,
        title: "Work From Home",
        description: "Ergonomic chairs, standing desks, monitors, keyboards, and webcams.",
        count: "18+ Guides",
        gradient: "from-orange-500 to-amber-500",
    },
    {
        icon: Gamepad2,
        title: "Gaming & Entertainment",
        description: "Gaming peripherals, streaming equipment, VR headsets, and entertainment tech.",
        count: "10+ Guides",
        gradient: "from-red-500 to-rose-500",
    },
    {
        icon: BarChart3,
        title: "Business Tools",
        description: "Enterprise software, analytics platforms, and B2B solutions.",
        count: "8+ Guides",
        gradient: "from-indigo-500 to-violet-500",
    },
];

export function Categories() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Explore <span className="gradient-text">Expert Categories</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover thoroughly researched buying guides across trending tech categories
                    </p>
                </motion.div>

                {/* Categories grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative bg-[var(--nds-bg-card)] border border-white/5 rounded-2xl p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:border-[var(--nds-primary)]/50 hover:shadow-[0_20px_60px_rgba(0,180,216,0.1)]"
                        >
                            {/* Gradient line on top */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <category.icon className="w-full h-full text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--nds-primary)] transition-colors">
                                {category.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {category.description}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between">
                                <span className="text-[var(--nds-primary)] text-sm font-semibold">
                                    {category.count}
                                </span>
                                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[var(--nds-primary)] group-hover:translate-x-1 transition-all" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
