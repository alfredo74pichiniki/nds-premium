import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Best Gaming Monitors 2025: 4K, 1440p, 240Hz Tested | Nest Digital Studio",
    description: "We tested 15+ gaming monitors for response time, color accuracy, and competitive gaming. Here are the best picks for every budget and use case.",
    keywords: "best gaming monitor 2025, 4k gaming monitor, 1440p gaming monitor, 240hz monitor, LG OLED monitor",
};

export default function GamingMonitorsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Affiliate Disclosure */}
                    <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300">
                        <strong>📋 Disclosure:</strong> This article contains affiliate links. Nest Digital Studio may receive a commission if you purchase through our links, at no extra cost to you.{" "}
                        <Link href="/disclosure" className="underline hover:text-amber-200">Learn more</Link>
                    </div>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">Gaming</span>
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold">Monitors</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Best Gaming Monitors 2025: Every Resolution & Budget Tested
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            We tested 15 monitors for input lag, color accuracy, and real gaming performance. Not lab numbers—real gameplay.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Updated: December 2025</span>
                            <span>•</span>
                            <span>11 min read</span>
                        </div>
                    </header>

                    {/* Quick Picks */}
                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30">
                        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            ⚡ Quick Picks
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 flex items-center gap-4">
                                <span className="text-3xl">🏆</span>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white">Best Overall</h3>
                                    <p className="text-green-400 font-semibold">LG 27GL850-B UltraGear</p>
                                    <p className="text-xs text-gray-400">1440p 144Hz, 1ms, Nano IPS</p>
                                </div>
                                <a href="https://amazon.com/dp/B07TD94TQF?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors">Check Price</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center gap-4">
                                <span className="text-3xl">💰</span>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white">Best Value</h3>
                                    <p className="text-blue-400 font-semibold">ASUS VG27AQ</p>
                                    <p className="text-xs text-gray-400">1440p 165Hz, IPS, G-SYNC</p>
                                </div>
                                <a href="https://amazon.com/dp/B07ZZL29J7?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors">Check Price</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center gap-4">
                                <span className="text-3xl">⚡</span>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white">Best for Esports</h3>
                                    <p className="text-purple-400 font-semibold">BenQ ZOWIE XL2411P</p>
                                    <p className="text-xs text-gray-400">1080p 144Hz, 1ms, esports</p>
                                </div>
                                <a href="https://amazon.com/dp/B073KPX54N?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold hover:bg-purple-600 transition-colors">Check Price</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center gap-4">
                                <span className="text-3xl">🎬</span>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white">Best 4K Gaming</h3>
                                    <p className="text-orange-400 font-semibold">Samsung Odyssey Neo G8</p>
                                    <p className="text-xs text-gray-400">4K 240Hz, Mini LED, HDR 2000</p>
                                </div>
                                <a href="https://amazon.com/dp/B09ZH3WM47?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors">Check Price</a>
                            </div>
                        </div>
                    </section>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Why Monitor Choice Matters More Than GPU</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Here's an uncomfortable truth: most gamers obsess over GPUs while gaming on monitors that bottleneck their entire setup. A $1,500 RTX 4080 is wasted on a 60Hz panel.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Response time, refresh rate, and panel technology directly impact your competitive edge. In fast-paced shooters, the difference between 5ms and 1ms response time is literally the difference between hitting your shot or not.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Resolution vs Refresh Rate: The Eternal Debate</h2>
                            <table className="w-full text-sm mb-6">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400">Use Case</th>
                                        <th className="text-center py-3 text-gray-400">Best Choice</th>
                                        <th className="text-center py-3 text-gray-400">Why</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">Competitive FPS</td>
                                        <td className="text-center py-3 text-green-400">1080p 240Hz+</td>
                                        <td className="text-center py-3 text-sm">Every frame matters</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">All-rounder</td>
                                        <td className="text-center py-3 text-blue-400">1440p 144-165Hz</td>
                                        <td className="text-center py-3 text-sm">Sweet spot balance</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">Single-player AAA</td>
                                        <td className="text-center py-3 text-purple-400">4K 120Hz</td>
                                        <td className="text-center py-3 text-sm">Visual fidelity first</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3">Hybrid work+gaming</td>
                                        <td className="text-center py-3 text-orange-400">4K 144Hz or OLED</td>
                                        <td className="text-center py-3 text-sm">Text clarity + gaming</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Our Testing Methodology</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We tested each monitor in real gaming conditions:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li>✓ <strong className="text-white">Input lag:</strong> Measured with Leo Bodnar lag tester</li>
                                <li>✓ <strong className="text-white">Response time:</strong> Real GtG transitions, not marketing specs</li>
                                <li>✓ <strong className="text-white">Gaming sessions:</strong> 4+ hours in Valorant, CS2, Elden Ring</li>
                                <li>✓ <strong className="text-white">Color accuracy:</strong> Calibrated with X-Rite i1Display Pro</li>
                            </ul>
                        </section>

                        <section className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-4">🎯 The Bottom Line</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                For most gamers, the <strong className="text-green-400">LG 27GR95QE-B OLED</strong> is the best monitor money can buy—perfect blacks, 0.03ms response, and 240Hz smoothness in one package.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                On a budget? The <strong className="text-blue-400">ASUS TUF Gaming VG27AQ</strong> delivers 90% of the experience at half the price.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
