import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Desk Lamps for Work 2025: BenQ vs Dyson vs Budget Picks | NDS",
    description: "We tested desk lamps for eye strain, color accuracy, and build quality. Here's what works for long work sessions.",
    keywords: "best desk lamp 2025, benq screenbar, dyson lightcycle, led desk lamp, monitor light bar",
};

export default function DeskLampsPage() {
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
                            <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-semibold">Desk Setup</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Best Desk Lamps 2025: Light Your Workspace Right
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            Bad lighting = eye strain + fatigue. We tested lamps for 8+ hour work sessions.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>7 min read</span>
                        </div>
                    </header>

                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30">
                        <h2 className="text-lg font-bold text-white mb-4">⚡ Our Top Picks</h2>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-yellow-400">Best Monitor Light Bar</h3>
                                    <p className="text-white font-semibold">BenQ ScreenBar Halo</p>
                                    <p className="text-xs text-gray-400">Back-light, wireless controller, no glare</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B0DK59YKRS?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-yellow-500 text-black text-sm font-semibold hover:bg-yellow-400">$179</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-green-400">Best Budget Light Bar</h3>
                                    <p className="text-white font-semibold">Quntis Monitor Light Bar</p>
                                    <p className="text-xs text-gray-400">Auto-dimming, USB powered, great value</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B089LWQRT7?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600">$35</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-blue-400">Best Traditional Lamp</h3>
                                    <p className="text-white font-semibold">TaoTronics LED Desk Lamp</p>
                                    <p className="text-xs text-gray-400">5 color temps, USB charging, foldable</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B0DS41FKHX?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">$129</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-purple-400">Best Architect Lamp</h3>
                                    <p className="text-white font-semibold">BenQ e-Reading Desk Lamp</p>
                                    <p className="text-xs text-gray-400">Wide beam, auto-dimming, curved head</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B089LWQRT7?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold hover:bg-purple-600">$229</a>
                            </div>
                        </div>
                    </section>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Monitor Light Bar vs Desk Lamp</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                                    <h3 className="font-bold text-yellow-400 mb-2">Monitor Light Bar</h3>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>✅ No screen glare</li>
                                        <li>✅ Saves desk space</li>
                                        <li>✅ USB powered</li>
                                        <li>❌ Only lights keyboard area</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                                    <h3 className="font-bold text-blue-400 mb-2">Traditional Desk Lamp</h3>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>✅ Lights entire desk</li>
                                        <li>✅ More adjustable</li>
                                        <li>✅ Works without monitor</li>
                                        <li>❌ Takes desk space</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Comparison</h2>
                            <table className="w-full text-sm mb-6">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400">Product</th>
                                        <th className="text-center py-3 text-gray-400">Type</th>
                                        <th className="text-center py-3 text-gray-400">Brightness</th>
                                        <th className="text-center py-3 text-gray-400">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-yellow-400">BenQ ScreenBar Halo</td>
                                        <td className="text-center py-3">Light Bar</td>
                                        <td className="text-center py-3">500 lux</td>
                                        <td className="text-center py-3">$179</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-green-400">Quntis Light Bar</td>
                                        <td className="text-center py-3">Light Bar</td>
                                        <td className="text-center py-3">400 lux</td>
                                        <td className="text-center py-3 text-green-400">$35</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-blue-400">TaoTronics LED</td>
                                        <td className="text-center py-3">Desk Lamp</td>
                                        <td className="text-center py-3">450 lux</td>
                                        <td className="text-center py-3">$45</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold text-purple-400">BenQ e-Reading</td>
                                        <td className="text-center py-3">Architect</td>
                                        <td className="text-center py-3 text-green-400">900 lux</td>
                                        <td className="text-center py-3">$229</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 Bottom Line</h2>
                            <p className="text-gray-300">
                                <strong className="text-green-400">Quntis Light Bar</strong> at $35 is incredible value. Upgrade to <strong className="text-yellow-400">BenQ Halo</strong> for the back-light and wireless remote. <strong className="text-blue-400">TaoTronics</strong> if you prefer traditional lamps.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
