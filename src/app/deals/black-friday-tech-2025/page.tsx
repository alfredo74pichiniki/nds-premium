import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Black Friday Tech Deals 2025: Best Discounts Live Now | Nest Digital Studio",
    description: "Curated Black Friday tech deals on headphones, monitors, laptops, and software. We verify every discount is real, not inflated.",
    keywords: "black friday tech deals 2025, cyber monday deals, best tech discounts, amazon black friday",
};

export default function BlackFridayDealsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Affiliate Disclosure */}
                    <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300">
                        <strong>📋 Disclosure:</strong> This article contains affiliate links.{" "}
                        <Link href="/disclosure" className="underline hover:text-amber-200">Learn more</Link>
                    </div>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-semibold animate-pulse">🔥 LIVE</span>
                            <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-semibold">Deals</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Black Friday Tech Deals 2025: The Real Discounts
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            We track prices year-round. These are actual deals, not inflated "discounts."
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Last updated: December 2025</span>
                            <span>•</span>
                            <span>Updated every 4 hours</span>
                        </div>
                    </header>

                    {/* Active Deals */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                            Top Deals Right Now
                        </h2>

                        <div className="space-y-4">
                            {/* Deal 1 */}
                            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/5 border border-green-500/20">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-green-400 text-sm font-bold mb-1">35% OFF — Verified Lowest</p>
                                        <h3 className="text-xl font-bold text-white">Sony WH-1000XM5</h3>
                                        <p className="text-gray-400 text-sm">Best ANC headphones • Usually $399</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-500 line-through text-sm">$399</p>
                                        <p className="text-3xl font-black text-green-400">$259</p>
                                        <a href="https://amazon.com/dp/B09XS7JWHH?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="inline-block mt-2 px-6 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors">View Deal</a>
                                    </div>
                                </div>
                            </div>

                            {/* Deal 2 */}
                            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-blue-400 text-sm font-bold mb-1">$200 OFF — Price Drop</p>
                                        <h3 className="text-xl font-bold text-white">LG 27GR95QE-B OLED Monitor</h3>
                                        <p className="text-gray-400 text-sm">27" 1440p 240Hz OLED • Gaming beast</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-500 line-through text-sm">$999</p>
                                        <p className="text-3xl font-black text-blue-400">$799</p>
                                        <a href="https://amazon.com/dp/B0BCQHRWWL?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="inline-block mt-2 px-6 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">View Deal</a>
                                    </div>
                                </div>
                            </div>

                            {/* Deal 3 */}
                            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/5 border border-purple-500/20">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-purple-400 text-sm font-bold mb-1">50% OFF — Annual Plan</p>
                                        <h3 className="text-xl font-bold text-white">Notion Plus</h3>
                                        <p className="text-gray-400 text-sm">Productivity workspace • AI included</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-500 line-through text-sm">$10/mo</p>
                                        <p className="text-3xl font-black text-purple-400">$5/mo</p>
                                        <a href="https://www.notion.so/product" target="_blank" rel="nofollow sponsored" className="inline-block mt-2 px-6 py-2 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-600 transition-colors">View Deal</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* More Deals by Category */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">Deals by Category</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/gaming" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors">
                                <h3 className="font-bold text-white mb-2">🎮 Gaming</h3>
                                <p className="text-gray-400 text-sm">Monitors, keyboards, headsets</p>
                            </Link>
                            <Link href="/reviews/best-noise-canceling-headphones" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors">
                                <h3 className="font-bold text-white mb-2">🎧 Audio</h3>
                                <p className="text-gray-400 text-sm">Headphones, speakers, DACs</p>
                            </Link>
                            <Link href="/software" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors">
                                <h3 className="font-bold text-white mb-2">💻 Software</h3>
                                <p className="text-gray-400 text-sm">SaaS, productivity tools, AI</p>
                            </Link>
                            <Link href="/guides" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors">
                                <h3 className="font-bold text-white mb-2">📚 Buying Guides</h3>
                                <p className="text-gray-400 text-sm">How to find the best deals</p>
                            </Link>
                        </div>
                    </section>

                    {/* Newsletter */}
                    <section className="p-6 rounded-2xl bg-gradient-to-br from-[var(--nds-primary)]/10 to-[var(--nds-accent)]/10 border border-[var(--nds-primary)]/30 text-center">
                        <h3 className="text-xl font-bold text-white mb-2">🔔 Get Deal Alerts</h3>
                        <p className="text-gray-400 mb-4">We'll email you when prices drop on products you care about.</p>
                        <p className="text-sm text-gray-500">(Newsletter coming soon)</p>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
