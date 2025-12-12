import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Mechanical Keyboards 2025: Keychron vs GMMK vs Ducky | NDS",
    description: "We tested 15 mechanical keyboards for typing feel, build quality, and value. Here are our picks for every budget.",
    keywords: "best mechanical keyboard 2025, keychron q1, gmmk pro, ducky one 3, mechanical keyboard comparison",
};

export default function MechanicalKeyboardsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300">
                        <strong>📋 Disclosure:</strong> This article contains affiliate links. We earn a commission on qualifying purchases.{" "}
                        <Link href="/disclosure" className="underline hover:text-amber-200">Learn more</Link>
                    </div>

                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-semibold">Reviews</span>
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold">Keyboards</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Best Mechanical Keyboards 2025: The Typing Experience Matters
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            15 keyboards tested. Hot-swappable, gasket-mounted, and worth every click.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>9 min read</span>
                        </div>
                    </header>

                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30">
                        <h2 className="text-lg font-bold text-white mb-4">⚡ Our Top Picks</h2>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-purple-400">Best Overall</h3>
                                    <p className="text-white font-semibold">Keychron Q1 Pro</p>
                                    <p className="text-xs text-gray-400">Gasket mount, QMK/VIA, wireless</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B0BXRPWHG2?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold hover:bg-purple-600">Check Price</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-green-400">Best Value</h3>
                                    <p className="text-white font-semibold">Keychron K8 Pro</p>
                                    <p className="text-xs text-gray-400">TKL, hot-swap, Bluetooth</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B0B16JCKMV?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600">Check Price</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-blue-400">Best Budget</h3>
                                    <p className="text-white font-semibold">RK Royal Kludge RK84</p>
                                    <p className="text-xs text-gray-400">75%, hot-swap, RGB, under $70</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B0BG8T7RP6?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">Check Price</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-orange-400">Best Premium</h3>
                                    <p className="text-white font-semibold">GMMK Pro</p>
                                    <p className="text-xs text-gray-400">Aluminum, rotary encoder, modular</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B09FYC2PQL?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600">Check Price</a>
                            </div>
                        </div>
                    </section>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">What to Look For</h2>
                            <ul className="space-y-2 text-gray-300">
                                <li><strong className="text-white">Hot-swappable:</strong> Change switches without soldering. Essential in 2025.</li>
                                <li><strong className="text-white">Mount style:</strong> Gasket mount = softer, flexier typing. Tray mount = stiffer.</li>
                                <li><strong className="text-white">Wireless:</strong> Bluetooth + 2.4GHz is ideal. Check latency for gaming.</li>
                                <li><strong className="text-white">Software:</strong> QMK/VIA = full customization. Proprietary = limited.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Comparison Table</h2>
                            <table className="w-full text-sm mb-6">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400">Keyboard</th>
                                        <th className="text-center py-3 text-gray-400">Layout</th>
                                        <th className="text-center py-3 text-gray-400">Mount</th>
                                        <th className="text-center py-3 text-gray-400">Wireless</th>
                                        <th className="text-center py-3 text-gray-400">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-purple-400">Keychron Q1 Pro</td>
                                        <td className="text-center py-3">75%</td>
                                        <td className="text-center py-3 text-green-400">Gasket</td>
                                        <td className="text-center py-3">✅</td>
                                        <td className="text-center py-3">$199</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-green-400">Keychron K8 Pro</td>
                                        <td className="text-center py-3">TKL</td>
                                        <td className="text-center py-3">Tray</td>
                                        <td className="text-center py-3">✅</td>
                                        <td className="text-center py-3 text-green-400">$99</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-blue-400">RK84</td>
                                        <td className="text-center py-3">75%</td>
                                        <td className="text-center py-3">Tray</td>
                                        <td className="text-center py-3">✅</td>
                                        <td className="text-center py-3 text-green-400">$65</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold text-orange-400">GMMK Pro</td>
                                        <td className="text-center py-3">75%</td>
                                        <td className="text-center py-3 text-green-400">Gasket</td>
                                        <td className="text-center py-3">❌</td>
                                        <td className="text-center py-3">$170</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 Bottom Line</h2>
                            <p className="text-gray-300">
                                <strong className="text-purple-400">Keychron Q1 Pro</strong> for the best all-around experience. <strong className="text-blue-400">RK84</strong> if you're on a budget. <strong className="text-orange-400">GMMK Pro</strong> for enthusiasts who want to mod.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
