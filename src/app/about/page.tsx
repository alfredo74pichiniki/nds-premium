import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Nest Digital Studio",
    description: "Learn about Nest Digital Studio - a premium tech editorial hub specializing in B2B SaaS and consumer electronics reviews. Our mission is honest, data-driven analysis.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--nds-primary)]/10 border border-[var(--nds-primary)]/30 text-sm text-[var(--nds-primary)] mb-6">
                            About Us
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            We Are{" "}
                            <span className="bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] bg-clip-text text-transparent">
                                Nest Digital Studio
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A premium editorial hub for technology professionals who demand more than surface-level reviews.
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        {/* Mission */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-10 h-1 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] rounded-full" />
                                Our Mission
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong className="text-white">Nest Digital Studio</strong> is a specialized editorial platform focused on two critical domains: <strong className="text-[var(--nds-primary)]">High-Ticket B2B SaaS</strong> and <strong className="text-[var(--nds-primary)]">Premium Consumer Electronics</strong>.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We exist because most tech reviews fail professionals. They're either paid promotions disguised as opinions, or surface-level summaries that don't address real-world performance under pressure.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                <strong className="text-white">Our promise is simple:</strong> We help professionals and enterprises make critical infrastructure and hardware decisions through real testing, verified data from 50,000+ user reviews, and honest verdicts—not generic opinions.
                            </p>
                        </section>

                        {/* What We Cover */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-10 h-1 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] rounded-full" />
                                What We Cover
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-lg font-bold text-white mb-3">🖥️ B2B SaaS & Cloud</h3>
                                    <p className="text-gray-400 text-sm">
                                        Managed WordPress hosting, SEO platforms, CRM systems, project management tools. We test performance under real traffic loads, not synthetic benchmarks.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-lg font-bold text-white mb-3">🎧 Premium Electronics</h3>
                                    <p className="text-gray-400 text-sm">
                                        Noise-canceling headphones, productivity hardware, home office setups, gaming peripherals. We focus on professional use cases—8-hour sessions, video calls, deep work.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-lg font-bold text-white mb-3">🤖 AI & Automation</h3>
                                    <p className="text-gray-400 text-sm">
                                        AI writing assistants, workflow automation tools, productivity software. We measure actual ROI—time saved, not marketing promises.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-lg font-bold text-white mb-3">📊 Data-Driven Comparisons</h3>
                                    <p className="text-gray-400 text-sm">
                                        Head-to-head comparisons with clear verdicts. We aggregate data from Amazon, Reddit, YouTube, and specialized review platforms to deliver unbiased conclusions.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Our Methodology */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-10 h-1 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] rounded-full" />
                                Our Methodology
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[var(--nds-primary)]/20 flex items-center justify-center text-[var(--nds-primary)] font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="text-white font-semibold">Multi-Source Data Aggregation</h4>
                                        <p className="text-gray-400 text-sm">We analyze reviews from Amazon, Reddit, YouTube, RTINGS, BestBuy, and specialized forums—not just one source.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[var(--nds-primary)]/20 flex items-center justify-center text-[var(--nds-primary)] font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="text-white font-semibold">AI-Powered Pattern Recognition</h4>
                                        <p className="text-gray-400 text-sm">Our AI identifies common pain points, praises, and long-term reliability issues across thousands of reviews.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[var(--nds-primary)]/20 flex items-center justify-center text-[var(--nds-primary)] font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="text-white font-semibold">Expert Editorial Oversight</h4>
                                        <p className="text-gray-400 text-sm">Every article is reviewed by our editorial team for accuracy, bias detection, and E-E-A-T compliance.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[var(--nds-primary)]/20 flex items-center justify-center text-[var(--nds-primary)] font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="text-white font-semibold">Transparent Verdicts</h4>
                                        <p className="text-gray-400 text-sm">We state clear winners and losers. No "it depends" cop-outs. We tell you exactly who should buy what.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* E-E-A-T Compliance */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-10 h-1 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] rounded-full" />
                                E-E-A-T Commitment
                            </h2>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--nds-primary)]/10 to-[var(--nds-accent)]/10 border border-[var(--nds-primary)]/20">
                                <p className="text-gray-300 mb-4">
                                    We adhere to Google's <strong className="text-white">E-E-A-T</strong> (Experience, Expertise, Authoritativeness, Trustworthiness) guidelines:
                                </p>
                                <ul className="space-y-2 text-gray-400">
                                    <li>✅ <strong className="text-white">Experience:</strong> Real-world testing, not spec sheet summaries</li>
                                    <li>✅ <strong className="text-white">Expertise:</strong> Deep domain knowledge in SaaS and consumer tech</li>
                                    <li>✅ <strong className="text-white">Authoritativeness:</strong> Multi-source verification, cited data</li>
                                    <li>✅ <strong className="text-white">Trustworthiness:</strong> Clear disclosure of affiliate relationships</li>
                                </ul>
                            </div>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-10 h-1 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] rounded-full" />
                                Get In Touch
                            </h2>
                            <p className="text-gray-300 mb-4">
                                For press inquiries, partnership opportunities, or feedback:
                            </p>
                            <a href="mailto:contact@nestdigitalstudio.com" className="text-[var(--nds-primary)] hover:underline font-semibold">
                                contact@nestdigitalstudio.com
                            </a>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
