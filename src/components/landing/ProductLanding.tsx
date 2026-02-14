'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, XCircle, Clock, DollarSign, Zap, Shield, ArrowRight } from 'lucide-react';

interface ProductLandingProps {
    product: {
        title: string;
        tagline: string;
        price: number;
        originalPrice: number;
        checkoutUrl: string;
        heroImage: string;
        painPoints: string[];
        features: { title: string; description: string }[];
        testimonials: { name: string; role: string; text: string; result: string }[];
        faqs: { question: string; answer: string }[];
        bonuses?: { title: string; value: string }[];
    };
}

export default function ProductLanding({ product }: ProductLandingProps) {
    const savings = product.originalPrice - product.price;
    const savingsPercent = Math.round((savings / product.originalPrice) * 100);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            {/* HERO SECTION */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0077b6]/20 via-transparent to-[#10b981]/10" />
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#00b4d8]/20 rounded-full blur-[120px]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full text-red-400 text-sm font-medium mb-6">
                                <Clock className="w-4 h-4" />
                                Limited time offer
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                {product.title}
                            </h1>

                            <p className="text-xl text-gray-300 mb-8">
                                {product.tagline}
                            </p>

                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-5xl font-bold text-[#00b4d8]">${product.price}</span>
                                <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">
                                    SAVE {savingsPercent}%
                                </span>
                            </div>

                            <Link
                                href={product.checkoutUrl}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] rounded-xl text-lg font-bold hover:shadow-[0_0_40px_rgba(0,180,216,0.5)] transition-all duration-300"
                            >
                                BUY NOW - ${product.price}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <div className="flex items-center gap-6 mt-6 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-green-400" />
                                    30-day guarantee
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-yellow-400" />
                                    Instant access
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#00b4d8]/20">
                                <img
                                    src={product.heroImage}
                                    alt={product.title}
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PAIN POINTS */}
            <section className="py-20 px-4 bg-[#0f0f0f]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Sound familiar?
                        </h2>
                        <p className="text-gray-400 text-lg">
                            These are the problems this product eliminates forever
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {product.painPoints.map((pain, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-xl"
                            >
                                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{pain}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What you get
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Everything included. No extra costs. Forever.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-[#141414] border border-white/10 rounded-xl hover:border-[#00b4d8]/40 transition-colors"
                            >
                                <CheckCircle className="w-8 h-8 text-[#00b4d8] mb-4" />
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPECTED RESULTS */}
            <section className="py-20 px-4 bg-[#0f0f0f]">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Expected Results
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Based on typical customer outcomes
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.testimonials.map((result, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-[#141414] border border-white/10 rounded-xl"
                            >
                                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold inline-block mb-4">
                                    {result.result}
                                </div>
                                <p className="text-gray-300">{result.text}</p>
                                <div className="mt-3 text-sm text-gray-500">{result.role}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BONUSES */}
            {product.bonuses && product.bonuses.length > 0 && (
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                🎁 Bonuses included
                            </h2>
                            <p className="text-gray-400 text-lg">
                                For a limited time only
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {product.bonuses.map((bonus, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center justify-between p-4 bg-gradient-to-r from-[#00b4d8]/10 to-transparent border border-[#00b4d8]/30 rounded-xl"
                                >
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-[#00b4d8]" />
                                        <span className="font-medium">{bonus.title}</span>
                                    </div>
                                    <span className="text-gray-500 line-through">{bonus.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ */}
            <section className="py-20 px-4 bg-[#0f0f0f]">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Frequently asked questions
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {product.faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-6 bg-[#141414] border border-white/10 rounded-xl"
                            >
                                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                                <p className="text-gray-400">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to transform your business?
                        </h2>

                        <div className="flex items-center justify-center gap-4 mb-8">
                            <span className="text-5xl font-bold text-[#00b4d8]">${product.price}</span>
                            <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                        </div>

                        <Link
                            href={product.checkoutUrl}
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] rounded-xl text-xl font-bold hover:shadow-[0_0_60px_rgba(0,180,216,0.5)] transition-all duration-300 animate-glow-pulse"
                        >
                            GET ACCESS NOW
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <div className="mt-8 p-6 bg-[#141414] border border-white/10 rounded-xl inline-block">
                            <div className="flex items-center gap-3 text-green-400">
                                <Shield className="w-8 h-8" />
                                <div className="text-left">
                                    <div className="font-bold">30-Day Money Back Guarantee</div>
                                    <div className="text-sm text-gray-400">Not satisfied? Full refund. No questions asked.</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
