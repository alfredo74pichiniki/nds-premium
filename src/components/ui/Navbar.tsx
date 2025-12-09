"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Reviews", href: "/reviews" },
        { name: "Categories", href: "#categories" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

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
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--nds-primary)] to-[var(--nds-accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <span className="font-bold text-lg tracking-tight">NDS</span>
                                <span className="hidden sm:inline text-gray-400 text-sm ml-2">
                                    Nest Digital Studio
                                </span>
                            </div>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--nds-primary)] group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-primary-dark)] font-medium text-sm hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] transition-all duration-300 hover:scale-105">
                                Ask AI
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2"
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
                        className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl pt-20 md:hidden"
                    >
                        <div className="flex flex-col items-center gap-6 p-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-xl font-medium text-gray-300 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-primary-dark)] font-medium">
                                Ask AI
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
