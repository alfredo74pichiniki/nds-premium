"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <div className="w-12 h-12 rounded-xl overflow-hidden">
                                <Image
                                    src="/logo-nds.png"
                                    alt="Nest Digital Studio"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-2xl font-black gradient-text">
                                Nest Digital Studio
                            </span>
                        </motion.div>
                        <p className="text-gray-400 max-w-md mb-6">
                            Expert technology reviews powered by AI. Making informed tech decisions easier for everyone.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com/nestdigital"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--nds-primary)]/20 flex items-center justify-center transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contact@nestdigitalstudio.com"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--nds-primary)]/20 flex items-center justify-center transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Site Links - only to pages that EXIST */}
                    <div>
                        <h4 className="font-bold mb-4">Explore</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/reviews" className="hover:text-[var(--nds-primary)] transition-colors">Reviews</Link></li>
                            <li><Link href="/compare" className="hover:text-[var(--nds-primary)] transition-colors">Comparisons</Link></li>
                            <li><Link href="/products" className="hover:text-[var(--nds-primary)] transition-colors">Products</Link></li>
                            <li><Link href="/search" className="hover:text-[var(--nds-primary)] transition-colors">Search</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Categories</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/reviews/best-noise-canceling-headphones" className="hover:text-[var(--nds-primary)] transition-colors">Audio</Link></li>
                            <li><Link href="/reviews/best-standing-desks" className="hover:text-[var(--nds-primary)] transition-colors">Home Office</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2025 Nest Digital Studio. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        AI-Powered Reviews • Affiliate Disclosure: We earn commissions from purchases
                    </p>
                </div>
            </div>
        </footer>
    );
}
