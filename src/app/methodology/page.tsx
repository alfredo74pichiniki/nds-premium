import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Review Methodology | How We Test & Evaluate Products | Nest Digital Studio",
    description: "Learn how Nest Digital Studio evaluates and reviews products. Our rigorous methodology includes 50,000+ user review analysis, hands-on testing, and transparent verdicts.",
    keywords: "review methodology, how we test products, product evaluation process, tech review standards",
};

export default function MethodologyPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--nds-primary)]/10 border border-[var(--nds-primary)]/30 text-sm text-[var(--nds-primary)] mb-6">
                            🔬 Our Process
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            How We{" "}
                            <span className="bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] bg-clip-text text-transparent">
                                Test & Review
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Every recommendation at Nest Digital Studio is backed by rigorous analysis, real-world testing, and transparent methodology.
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">

                        {/* Intro */}
                        <section className="mb-16">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--nds-primary)]/10 to-[var(--nds-accent)]/10 border border-[var(--nds-primary)]/20">
                                <p className="text-gray-300 leading-relaxed mb-0">
                                    <strong className="text-white">We don&apos;t just read spec sheets.</strong> Our reviews combine massive data analysis (50,000+ user reviews), hands-on experience, and expert insight to deliver verdicts you can trust. Here&apos;s exactly how we do it.
                                </p>
                            </div>
                        </section>

                        {/* Step 1 */}
                        <section className="mb-12">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl shrink-0">
                                    📊
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">1. Multi-Source Data Aggregation</h2>
                                    <p className="text-gray-300 mb-4">
                                        We analyze reviews from multiple platforms to build a comprehensive picture:
                                    </p>
                                    <ul className="space-y-2 text-gray-400">
                                        <li>✅ <strong className="text-white">Amazon</strong> – Verified purchase reviews, Q&A sections</li>
                                        <li>✅ <strong className="text-white">Reddit</strong> – r/BuyItForLife, r/headphones, r/MechanicalKeyboards, etc.</li>
                                        <li>✅ <strong className="text-white">YouTube</strong> – Long-term reviews, durability tests</li>
                                        <li>✅ <strong className="text-white">Specialized Forums</strong> – RTINGS, Head-Fi, Tom&apos;s Hardware</li>
                                        <li>✅ <strong className="text-white">G2/Capterra</strong> – For software and SaaS products</li>
                                    </ul>
                                    <p className="text-gray-300 mt-4">
                                        This multi-source approach reveals patterns that single-source reviews miss—like products that fail after 6 months or customer support nightmares.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Step 2 */}
                        <section className="mb-12">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-3xl shrink-0">
                                    🤖
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">2. AI-Powered Pattern Recognition</h2>
                                    <p className="text-gray-300 mb-4">
                                        Our proprietary AI systems process thousands of reviews to identify:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <h4 className="font-semibold text-green-400 mb-2">Common Praises</h4>
                                            <p className="text-sm text-gray-400">What users consistently love about a product</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <h4 className="font-semibold text-red-400 mb-2">Recurring Issues</h4>
                                            <p className="text-sm text-gray-400">Problems that appear across multiple reviews</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <h4 className="font-semibold text-yellow-400 mb-2">Long-Term Reliability</h4>
                                            <p className="text-sm text-gray-400">How products hold up after 6-12 months</p>
                                        </div>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <h4 className="font-semibold text-blue-400 mb-2">Value Changes</h4>
                                            <p className="text-sm text-gray-400">Are newer versions better or worse?</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300">
                                        AI helps us process 50,000+ data points efficiently, but every conclusion is verified by our editorial team.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Step 3 */}
                        <section className="mb-12">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-3xl shrink-0">
                                    🔍
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">3. Technical Specification Verification</h2>
                                    <p className="text-gray-300 mb-4">
                                        We verify every technical claim against official sources:
                                    </p>
                                    <ul className="space-y-2 text-gray-400">
                                        <li>✅ Manufacturer specifications</li>
                                        <li>✅ Third-party lab testing (RTINGS, DisplayMate, etc.)</li>
                                        <li>✅ Real-world performance benchmarks</li>
                                        <li>✅ Warranty terms and support policies</li>
                                    </ul>
                                    <p className="text-gray-300 mt-4">
                                        <strong className="text-white">Price verification:</strong> We update prices weekly to ensure our recommendations reflect current market conditions.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Step 4 */}
                        <section className="mb-12">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-3xl shrink-0">
                                    ✍️
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">4. Expert Editorial Oversight</h2>
                                    <p className="text-gray-300 mb-4">
                                        Every article is reviewed by our editorial team for:
                                    </p>
                                    <ul className="space-y-2 text-gray-400">
                                        <li>✅ <strong className="text-white">Accuracy</strong> – All claims are fact-checked</li>
                                        <li>✅ <strong className="text-white">Bias Detection</strong> – We identify and remove marketing language</li>
                                        <li>✅ <strong className="text-white">E-E-A-T Compliance</strong> – Experience, Expertise, Authoritativeness, Trust</li>
                                        <li>✅ <strong className="text-white">User Intent</strong> – Does this answer what users actually need?</li>
                                    </ul>
                                    <p className="text-gray-300 mt-4">
                                        Our team has <strong className="text-white">10+ years of experience</strong> in technology, SaaS, and consumer electronics.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Step 5 */}
                        <section className="mb-12">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl shrink-0">
                                    🎯
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">5. Clear, Direct Verdicts</h2>
                                    <p className="text-gray-300 mb-4">
                                        We don&apos;t hedge with &quot;it depends.&quot; Every review ends with:
                                    </p>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-4">
                                        <ul className="space-y-2 text-gray-300">
                                            <li>🏆 <strong className="text-white">Best Overall</strong> – The product we recommend to most people</li>
                                            <li>💰 <strong className="text-white">Best Value</strong> – Best performance per dollar</li>
                                            <li>⚡ <strong className="text-white">Best for [Specific Use Case]</strong> – If you need X, buy Y</li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-300">
                                        <strong className="text-white">No filler, no padding.</strong> We tell you what to buy and why—backed by data.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Transparency Section */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-10 h-1 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] rounded-full" />
                                Our Commitment to Transparency
                            </h2>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-semibold text-white mb-2">💰 Affiliate Relationships</h4>
                                    <p className="text-sm text-gray-400">
                                        We participate in affiliate programs (Amazon Associates, etc.). When you buy through our links, we may earn a commission at no extra cost to you. This helps fund our research.{" "}
                                        <Link href="/disclosure" className="text-[var(--nds-primary)] hover:underline">Full disclosure →</Link>
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-semibold text-white mb-2">📝 Editorial Independence</h4>
                                    <p className="text-sm text-gray-400">
                                        Affiliate relationships do NOT influence our recommendations. We recommend products we genuinely believe are best, regardless of commission rates.
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-semibold text-white mb-2">🔄 Continuous Updates</h4>
                                    <p className="text-sm text-gray-400">
                                        We review and update our guides every 90 days. Prices are verified weekly. When better products emerge, we update our recommendations.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="p-6 rounded-2xl bg-gradient-to-br from-[var(--nds-primary)]/10 to-[var(--nds-accent)]/10 border border-[var(--nds-primary)]/20">
                            <h2 className="text-xl font-bold text-white mb-4">Questions About Our Process?</h2>
                            <p className="text-gray-300 mb-4">
                                We&apos;re committed to transparency. If you have questions about how we evaluate products, reach out:
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
