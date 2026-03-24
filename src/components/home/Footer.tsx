"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Mail, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/5 py-16 px-6 overflow-hidden bg-transparent">

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <div className="w-12 h-12 rounded-xl overflow-hidden">
                                <Image
                                    src="/logo-nds-official.png"
                                    alt="Nest Digital Studio"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-white">Nest Digital</span>
                                <span className="text-sm text-[var(--nds-primary)]">Studio</span>
                            </div>
                        </motion.div>
                        <p className="text-gray-400 text-sm max-w-md mb-6">
                            Expert tech reviews powered by AI. We analyze 50,000+ verified reviews to deliver unbiased, data-driven recommendations.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://twitter.com/nestdigital"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-cyan-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,180,216,0.4)]"
                            >
                                <Twitter className="w-5 h-5 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://linkedin.com/company/nestdigitalstudio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                            >
                                <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="mailto:admin@nestdigitalstudio.com"
                                className="group w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                            >
                                <Mail className="w-5 h-5 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="font-bold mb-4">Explore</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/products" className="hover:text-[var(--nds-primary)] transition-colors">Digital Products</Link></li>
                            <li><Link href="/blog" className="hover:text-[var(--nds-primary)] transition-colors">Blog & Reviews</Link></li>
                            <li><Link href="/about" className="hover:text-[var(--nds-primary)] transition-colors">About Us</Link></li>
                            <li><Link href="/methodology" className="hover:text-[var(--nds-primary)] transition-colors">Our Methodology</Link></li>
                            <li><Link href="/contact" className="hover:text-[var(--nds-primary)] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Popular Topics */}
                    <div>
                        <h4 className="font-bold mb-4">Popular Topics</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/blog" className="hover:text-[var(--nds-primary)] transition-colors">VPN Reviews</Link></li>
                            <li><Link href="/blog" className="hover:text-[var(--nds-primary)] transition-colors">Best Software 2026</Link></li>
                            <li><Link href="/blog" className="hover:text-[var(--nds-primary)] transition-colors">Tech Deals</Link></li>
                            <li><Link href="/blog" className="hover:text-[var(--nds-primary)] transition-colors">Headphone Reviews</Link></li>
                            <li><Link href="/products" className="hover:text-[var(--nds-primary)] transition-colors">Productivity Templates</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-[var(--nds-primary)] transition-colors">About Us</Link></li>
                            <li><Link href="/editorial-policy" className="hover:text-[var(--nds-primary)] transition-colors">Editorial Policy</Link></li>
                            <li><Link href="/methodology" className="hover:text-[var(--nds-primary)] transition-colors">Methodology</Link></li>
                            <li><Link href="/disclosure" className="hover:text-[var(--nds-primary)] transition-colors">Advertiser Disclosure</Link></li>
                            <li><Link href="/privacy" className="hover:text-[var(--nds-primary)] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/contact" className="hover:text-[var(--nds-primary)] transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 Nest Digital Studio. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm flex-wrap">
                        <Link href="/editorial-policy" className="hover:text-gray-400 transition-colors">Editorial Policy</Link>
                        <span>•</span>
                        <Link href="/disclosure" className="hover:text-gray-400 transition-colors">Affiliate Disclosure</Link>
                        <span>•</span>
                        <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</Link>
                        <span>•</span>
                        <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
