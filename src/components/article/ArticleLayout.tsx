"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { AffiliateDisclosure } from "@/components/ui/AffiliateDisclosure";
import {
    Calendar,
    Clock,
    User,
    Star,
    ThumbsUp,
    ThumbsDown,
    ExternalLink,
    CheckCircle,
    XCircle,
    Award
} from "lucide-react";

interface Product {
    name: string;
    image: string;
    rating: number;
    reviewCount: number;
    price: string;
    badge?: string;
    pros: string[];
    cons: string[];
    verdict: string;
    amazonLink: string;
}

interface ArticleLayoutProps {
    title: string;
    subtitle: string;
    author: string;
    date: string;
    readTime: string;
    heroImage?: string;
    intro: string;
    products: Product[];
    methodology?: string;
    faq?: { question: string; answer: string }[];
}

export function ArticleLayout({
    title,
    subtitle,
    author,
    date,
    readTime,
    intro,
    products,
    methodology,
    faq,
}: ArticleLayoutProps) {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {/* Category badge */}
                        <span className="inline-block px-3 py-1 rounded-full bg-[var(--nds-primary)]/10 text-[var(--nds-primary)] text-sm font-medium mb-4">
                            Buying Guide
                        </span>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                            {title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl text-gray-400 mb-6">{subtitle}</p>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{readTime}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Affiliate Disclosure - ABOVE THE FOLD */}
            <section className="pb-6 px-6">
                <div className="max-w-4xl mx-auto">
                    <AffiliateDisclosure variant="banner" />
                </div>
            </section>

            {/* Table of Contents */}
            <section className="pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                        <h2 className="text-lg font-bold mb-4">Quick Navigation</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {products.map((product, i) => (
                                <a
                                    key={product.name}
                                    href={`#product-${i + 1}`}
                                    className="flex items-center gap-2 text-gray-400 hover:text-[var(--nds-primary)] transition-colors"
                                >
                                    <span className="w-6 h-6 rounded-full bg-[var(--nds-primary)]/10 text-[var(--nds-primary)] text-sm flex items-center justify-center">
                                        {i + 1}
                                    </span>
                                    {product.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-gray-300 leading-relaxed text-lg">{intro}</p>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="pb-16 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    {products.map((product, index) => (
                        <motion.article
                            key={product.name}
                            id={`product-${index + 1}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-3xl p-8 hover:border-[var(--nds-primary)]/30 transition-colors"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--nds-primary)] to-[var(--nds-accent)] flex items-center justify-center text-sm font-bold">
                                            {index + 1}
                                        </span>
                                        {product.badge && (
                                            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium flex items-center gap-1">
                                                <Award className="w-3 h-3" />
                                                {product.badge}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-bold">{product.name}</h3>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-600"}`}
                                            />
                                        ))}
                                        <span className="ml-2 text-sm text-gray-400">
                                            {product.rating} ({product.reviewCount.toLocaleString()})
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-[var(--nds-primary)]">
                                        {product.price}
                                    </div>
                                </div>
                            </div>

                            {/* Pros & Cons */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                                    <h4 className="font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                                        <ThumbsUp className="w-4 h-4" />
                                        Pros
                                    </h4>
                                    <ul className="space-y-2">
                                        {product.pros.map((pro, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                                    <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                                        <ThumbsDown className="w-4 h-4" />
                                        Cons
                                    </h4>
                                    <ul className="space-y-2">
                                        {product.cons.map((con, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                                <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                                {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Verdict */}
                            <div className="bg-white/[0.02] rounded-xl p-4 mb-6">
                                <h4 className="font-semibold mb-2">Our Verdict</h4>
                                <p className="text-gray-400 text-sm">{product.verdict}</p>
                            </div>

                            {/* CTA - God Level Optimized */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                {/* Main CTA Button with Pulse Animation */}
                                <a
                                    href={product.amazonLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => {
                                        // Track click for analytics
                                        if (typeof window !== 'undefined') {
                                            console.log(`[NDS Analytics] CTA Click: ${product.name}`);
                                            // Google Analytics event (if configured)
                                            if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
                                                (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'affiliate_click', {
                                                    'product_name': product.name,
                                                    'product_price': product.price,
                                                    'event_category': 'Affiliate',
                                                    'event_label': product.name
                                                });
                                            }
                                        }
                                    }}
                                    className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 font-bold text-lg hover:shadow-[0_0_40px_rgba(251,146,60,0.5)] transition-all duration-300 animate-pulse hover:animate-none hover:scale-105"
                                >
                                    {/* Urgency Badge */}
                                    <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-red-600 text-white text-xs font-bold rounded-full animate-bounce">
                                        🔥 Hot Deal
                                    </span>

                                    View Best Price
                                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>

                                {/* Stock Warning */}
                                <span className="text-sm text-amber-400/80 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                                    Limited stock available
                                </span>
                            </div>

                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Methodology */}
            <section className="pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[var(--nds-primary)]/5 border border-[var(--nds-primary)]/20 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-4">Our Testing Methodology</h2>
                        <p className="text-gray-400 leading-relaxed">{methodology}</p>
                    </div>
                </div>
            </section>


            {/* FAQ */}
            {faq && faq.length > 0 && (
                <section className="pb-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faq.map((item, i) => (
                                <div key={i} className="border border-white/5 rounded-xl p-6">
                                    <h3 className="font-semibold mb-2">{item.question}</h3>
                                    <p className="text-gray-400">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
            <AIChat />
        </main>
    );
}
