import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Editorial Policy | Nest Digital Studio",
    description: "Learn about Nest Digital Studio's editorial standards, research methodology, and commitment to honest, independent product reviews.",
};

export default function EditorialPolicyPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--nds-primary)]/10 border border-[var(--nds-primary)]/30 text-sm text-[var(--nds-primary)] mb-6">
                            📜 Our Standards
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Editorial{" "}
                            <span className="bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] bg-clip-text text-transparent">
                                Policy
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Transparency, independence, and accuracy are the pillars of everything we publish.
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">

                        {/* 1. Our Mission */}
                        <section className="mb-12">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl shrink-0">
                                    🎯
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Nest Digital Studio provides honest, research-driven reviews and comparisons of technology products and services. Our goal is to help consumers make informed purchasing decisions based on real data, verified user experiences, and expert analysis — not marketing hype or paid placements.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 2. Editorial Independence */}
                        <section className="mb-12">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-3xl shrink-0">
                                    🛡️
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">Editorial Independence</h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Our editorial content is never influenced by affiliate partnerships or advertising relationships. Product ratings and recommendations are based solely on our research methodology, testing results, and expert analysis. No company can pay for a favorable review, and no affiliate commission rate influences which products we recommend.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 3. How We Research */}
                        <section className="mb-12">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-3xl shrink-0">
                                    🔬
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">How We Research</h2>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        Every article undergoes a rigorous research process including:
                                    </p>
                                    <ul className="space-y-2 text-gray-400">
                                        <li className="flex gap-3">
                                            <span className="text-[var(--nds-primary)]">✓</span>
                                            <span>Analysis of manufacturer specifications and official documentation</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-[var(--nds-primary)]">✓</span>
                                            <span>Aggregation of verified user reviews from Amazon, Reddit, YouTube, and specialized forums</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-[var(--nds-primary)]">✓</span>
                                            <span>Comparison of pricing across multiple retailers</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-[var(--nds-primary)]">✓</span>
                                            <span>Evaluation of expert opinions from trusted industry sources</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-[var(--nds-primary)]">✓</span>
                                            <span>Hands-on testing when possible</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 4. Affiliate Disclosure */}
                        <section className="mb-12">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-3xl shrink-0">
                                    💰
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">Affiliate Disclosure</h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Some links in our articles are affiliate links, meaning we may earn a commission if you make a purchase. This never affects our ratings or recommendations. The revenue from affiliate partnerships helps us fund our research, maintain our editorial team, and keep the site running. See our full{" "}
                                        <Link href="/disclosure" className="text-[var(--nds-primary)] hover:underline font-semibold">
                                            Affiliate Disclosure
                                        </Link>{" "}
                                        for details.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 5. Corrections Policy */}
                        <section className="mb-12">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center text-3xl shrink-0">
                                    ✏️
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">Corrections Policy</h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        We strive for accuracy in everything we publish. If you find an error in any of our content — whether it&apos;s a factual inaccuracy, outdated pricing, or a broken link — please contact us at{" "}
                                        <a href="mailto:admin@nestdigitalstudio.com" className="text-[var(--nds-primary)] hover:underline font-semibold">
                                            admin@nestdigitalstudio.com
                                        </a>{" "}
                                        and we will investigate and correct it promptly. Corrections are noted transparently within the article.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 6. Content Updates */}
                        <section className="mb-12">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl shrink-0">
                                    🔄
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">Content Updates</h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        We regularly update our articles to reflect the latest pricing, features, and market changes. Each article displays a &quot;Last Updated&quot; date so you always know how current the information is. Major changes such as new product releases, significant price drops, or discontinued products trigger an immediate review and update of the relevant articles.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Trust Badge */}
                        <section className="p-6 rounded-2xl bg-gradient-to-br from-[var(--nds-primary)]/10 to-[var(--nds-accent)]/10 border border-[var(--nds-primary)]/20">
                            <h2 className="text-xl font-bold text-white mb-4">Questions About Our Standards?</h2>
                            <p className="text-gray-300 mb-4">
                                We&apos;re committed to transparency. If you have questions about our editorial process, reach out:
                            </p>
                            <a href="mailto:admin@nestdigitalstudio.com" className="text-[var(--nds-primary)] hover:underline font-semibold">
                                admin@nestdigitalstudio.com
                            </a>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
