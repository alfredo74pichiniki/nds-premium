"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

// 10 categories - includes Audio and Outdoor
const navCategories = [
    { name: "Products", href: "/products", badge: "✨", highlight: true },
    { name: "Reviews", href: "/reviews" },
    { name: "Gaming", href: "/gaming" },
    { name: "Software", href: "/software" },
    { name: "Audio", href: "/audio", badge: "🎧" },
    { name: "Outdoor", href: "/outdoor", badge: "🏕️" },
    { name: "Deals", href: "/deals", badge: "🔥" },
    { name: "Guides", href: "/guides" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo - Official NDS Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                className="relative w-12 h-12 rounded-xl overflow-hidden"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                                <Image
                                    src="/logo-nds-official.png"
                                    alt="Nest Digital Studio"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain relative z-10"
                                />
                            </motion.div>
                            <div className="hidden sm:flex flex-col">
                                <span className="text-white font-bold text-sm tracking-tight">
                                    Nest Digital
                                </span>
                                <span className="text-[var(--nds-primary)] text-xs font-medium">
                                    Studio
                                </span>
                            </div>
                        </Link>

                        {/* Desktop nav - all 8 categories */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navCategories.map((category) => (
                                <Link
                                    key={category.name}
                                    href={category.href}
                                    className="flex items-center gap-1 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                                >
                                    {category.name}
                                    {category.badge && (
                                        <span className="text-xs">{category.badge}</span>
                                    )}
                                </Link>
                            ))}

                            {/* Search */}
                            <Link
                                href="/search"
                                className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                            >
                                Search
                            </Link>

                            {/* AI Button - Opens chat */}
                            <button
                                onClick={() => window.dispatchEvent(new Event('openAIChat'))}
                                className="ml-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-primary-dark)] font-medium text-sm hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] transition-all duration-300 hover:scale-105"
                            >
                                Ask AI
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2"
                        >
                            {mobileOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl pt-20 lg:hidden"
                    >
                        <div className="flex flex-col items-center gap-4 p-6">
                            {navCategories.map((category) => (
                                <Link
                                    key={category.name}
                                    href={category.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2 text-xl font-medium text-gray-300 hover:text-white"
                                >
                                    {category.name}
                                    {category.badge && <span>{category.badge}</span>}
                                </Link>
                            ))}
                            <Link
                                href="/search"
                                onClick={() => setMobileOpen(false)}
                                className="text-xl font-medium text-gray-300 hover:text-white"
                            >
                                Search
                            </Link>
                            <button
                                onClick={() => {
                                    setMobileOpen(false);
                                    window.dispatchEvent(new Event('openAIChat'));
                                }}
                                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-primary-dark)] font-medium"
                            >
                                Ask AI
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
