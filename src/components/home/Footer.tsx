"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Mail, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 px-6">
            <div className="max-w-7xl mx-auto">
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
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--nds-primary)]/20 flex items-center justify-center transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/company/nestdigitalstudio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--nds-primary)]/20 flex items-center justify-center transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:contact@nestdigitalstudio.com"
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--nds-primary)]/20 flex items-center justify-center transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="font-bold mb-4">Explore</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/reviews" className="hover:text-[var(--nds-primary)] transition-colors">Reviews</Link></li>
                            <li><Link href="/compare" className="hover:text-[var(--nds-primary)] transition-colors">Best Of</Link></li>
                            <li><Link href="/software" className="hover:text-[var(--nds-primary)] transition-colors">Software</Link></li>
                            <li><Link href="/gaming" className="hover:text-[var(--nds-primary)] transition-colors">Gaming</Link></li>
                            <li><Link href="/deals" className="hover:text-[var(--nds-primary)] transition-colors">Deals</Link></li>
                        </ul>
                    </div>

                    {/* Top Articles */}
                    <div>
                        <h4 className="font-bold mb-4">Top Articles</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/reviews/best-noise-canceling-headphones" className="hover:text-[var(--nds-primary)] transition-colors">Sony vs Bose Headphones</Link></li>
                            <li><Link href="/software/hosting-comparison-2025" className="hover:text-[var(--nds-primary)] transition-colors">Best Hosting 2025</Link></li>
                            <li><Link href="/software/ai-automation-tools-2025" className="hover:text-[var(--nds-primary)] transition-colors">AI Automation Tools</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-[var(--nds-primary)] transition-colors">About Us</Link></li>
                            <li><Link href="/disclosure" className="hover:text-[var(--nds-primary)] transition-colors">Advertiser Disclosure</Link></li>
                            <li><Link href="/privacy" className="hover:text-[var(--nds-primary)] transition-colors">Privacy Policy</Link></li>
                            <li><a href="mailto:contact@nestdigitalstudio.com" className="hover:text-[var(--nds-primary)] transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2025 Nest Digital Studio. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <Link href="/disclosure" className="hover:text-gray-400 transition-colors">
                            Affiliate Disclosure
                        </Link>
                        <span>•</span>
                        <Link href="/privacy" className="hover:text-gray-400 transition-colors">
                            Privacy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
