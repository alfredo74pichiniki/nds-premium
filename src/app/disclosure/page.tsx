import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Advertiser Disclosure | Nest Digital Studio",
    description: "Transparency about how Nest Digital Studio earns revenue through affiliate partnerships while maintaining editorial independence.",
};

export default function DisclosurePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-sm text-amber-400 mb-6">
                            📋 Transparency
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Advertiser Disclosure
                        </h1>
                        <p className="text-lg text-gray-400">
                            Last updated: December 2025
                        </p>
                    </header>

                    {/* Content */}
                    <div className="space-y-10 text-gray-300">
                        {/* Main Disclosure */}
                        <section className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20">
                            <h2 className="text-xl font-bold text-white mb-4">How We Make Money</h2>
                            <p className="leading-relaxed">
                                <strong className="text-white">Nest Digital Studio</strong> participates in affiliate marketing programs operated by <strong className="text-white">Amazon Associates, Rakuten Advertising, Awin, Impact Radius, ShareASale, CJ Affiliate</strong>, and other networks.
                            </p>
                            <p className="leading-relaxed mt-4">
                                This means when you click on certain links on our website and make a purchase, we may receive a small commission at <strong className="text-amber-400">no additional cost to you</strong>.
                            </p>
                        </section>

                        {/* Editorial Independence */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-2xl">✍️</span>
                                Editorial Independence
                            </h2>
                            <div className="space-y-4 text-gray-300">
                                <p className="leading-relaxed">
                                    Our reviews and recommendations are based on <strong className="text-white">independent technical analysis</strong>, aggregated user data from 50,000+ verified reviews, and real-world testing.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-white">Affiliate commissions do not influence our editorial verdicts.</strong> We recommend products because we believe they provide genuine value—not because we earn a higher commission.
                                </p>
                                <p className="leading-relaxed">
                                    The revenue we earn from affiliate partnerships helps us maintain our testing lab, pay our editorial team, and keep the site running—allowing us to continue providing free, high-quality content.
                                </p>
                            </div>
                        </section>

                        {/* How We Review */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-2xl">🔍</span>
                                How We Evaluate Products
                            </h2>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex gap-3">
                                    <span className="text-[var(--nds-primary)]">✓</span>
                                    <span>We analyze data from multiple sources: Amazon, Reddit, YouTube, specialized review sites</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[var(--nds-primary)]">✓</span>
                                    <span>We prioritize long-term reliability over first impressions</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[var(--nds-primary)]">✓</span>
                                    <span>We disclose both pros AND cons—no product is perfect</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[var(--nds-primary)]">✓</span>
                                    <span>We recommend alternatives when a cheaper option delivers the same value</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[var(--nds-primary)]">✓</span>
                                    <span>We update articles when products change or better options emerge</span>
                                </li>
                            </ul>
                        </section>

                        {/* Affiliate Link Identification */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-2xl">🔗</span>
                                Identifying Affiliate Links
                            </h2>
                            <p className="leading-relaxed mb-4">
                                Links that may earn us a commission are typically:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Links to Amazon.com or other retailers</li>
                                <li>• "Check Price" or "Buy Now" buttons</li>
                                <li>• Links to software/SaaS signup pages</li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                All affiliate links include the <code className="px-2 py-1 bg-white/10 rounded text-sm">rel="nofollow sponsored"</code> attribute as required by search engine guidelines.
                            </p>
                        </section>

                        {/* FTC Compliance */}
                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-2xl">⚖️</span>
                                FTC Compliance Statement
                            </h2>
                            <p className="leading-relaxed text-gray-300">
                                This disclosure is provided in accordance with the Federal Trade Commission's 16 CFR Part 255, "Guides Concerning the Use of Endorsements and Testimonials in Advertising."
                            </p>
                            <p className="leading-relaxed text-gray-300 mt-4">
                                We are committed to maintaining transparency with our readers. If you have any questions about our affiliate relationships, please contact us at{" "}
                                <a href="mailto:contact@nestdigitalstudio.com" className="text-[var(--nds-primary)] hover:underline">
                                    contact@nestdigitalstudio.com
                                </a>.
                            </p>
                        </section>

                        {/* Amazon Specific */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-2xl">📦</span>
                                Amazon Associates Disclosure
                            </h2>
                            <p className="leading-relaxed text-gray-300">
                                As an Amazon Associate, Nest Digital Studio earns from qualifying purchases. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
                            </p>
                        </section>

                        {/* Trust Badge */}
                        <section className="text-center pt-8">
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                                <span className="text-green-400 text-xl">✓</span>
                                <span className="text-green-400 font-semibold">Transparency Committed</span>
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
