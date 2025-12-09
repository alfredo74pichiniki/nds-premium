"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Github, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-2xl font-black gradient-text mb-4"
                        >
                            Nest Digital Studio
                        </motion.h3>
                        <p className="text-gray-400 max-w-md mb-6">
                            Expert technology reviews powered by AI. Making informed tech decisions easier for everyone.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--nds-primary)]/20 flex items-center justify-center transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--nds-primary)]/20 flex items-center justify-center transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--nds-primary)]/20 flex items-center justify-center transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-4">Categories</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-[var(--nds-primary)] transition-colors">Audio</Link></li>
                            <li><Link href="#" className="hover:text-[var(--nds-primary)] transition-colors">Software</Link></li>
                            <li><Link href="#" className="hover:text-[var(--nds-primary)] transition-colors">Smart Home</Link></li>
                            <li><Link href="#" className="hover:text-[var(--nds-primary)] transition-colors">Gaming</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-[var(--nds-primary)] transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-[var(--nds-primary)] transition-colors">Methodology</Link></li>
                            <li><Link href="#" className="hover:text-[var(--nds-primary)] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-[var(--nds-primary)] transition-colors">Affiliate Disclosure</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 Nest Digital Studio. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        AI-Powered Reviews • E-E-A-T Compliant • GEO Optimized
                    </p>
                </div>
            </div>
        </footer>
    );
}
