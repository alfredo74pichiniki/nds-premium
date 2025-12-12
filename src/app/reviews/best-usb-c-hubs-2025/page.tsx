import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best USB-C Hubs 2025: Anker vs CalDigit vs Satechi | NDS",
    description: "We tested USB-C hubs for port selection, power delivery, and reliability. Here's what actually works with MacBooks and laptops.",
    keywords: "best usb-c hub 2025, anker usb-c hub, caldigit ts4, macbook dock, thunderbolt dock",
};

export default function USBCHubsPage() {
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
                            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold">Accessories</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Best USB-C Hubs & Docks 2025: Expand Your Laptop
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            From $30 travel hubs to $400 Thunderbolt docks. We tested them all.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>8 min read</span>
                        </div>
                    </header>

                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                        <h2 className="text-lg font-bold text-white mb-4">⚡ Our Top Picks</h2>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-blue-400">Best Overall Hub</h3>
                                    <p className="text-white font-semibold">Anker 555 USB-C Hub (8-in-1)</p>
                                    <p className="text-xs text-gray-400">HDMI 4K, 100W PD, SD card, 2x USB-A</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B087QZVQJX?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">$59</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-green-400">Best Budget</h3>
                                    <p className="text-white font-semibold">Anker 341 USB-C Hub (7-in-1)</p>
                                    <p className="text-xs text-gray-400">HDMI, 100W PD, compact, travel-ready</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B07ZVKTP53?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600">$34</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-purple-400">Best Premium Dock</h3>
                                    <p className="text-white font-semibold">CalDigit TS4 Thunderbolt 4</p>
                                    <p className="text-xs text-gray-400">18 ports, 98W PD, 2.5Gb Ethernet, best-in-class</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B09GK8LBWS?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold hover:bg-purple-600">$399</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-orange-400">Best for Dual Monitors</h3>
                                    <p className="text-white font-semibold">Satechi Dual Dock Stand</p>
                                    <p className="text-xs text-gray-400">M1/M2 Mac compatible, dual display, NVMe slot</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B0BKPZ42RJ?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600">$199</a>
                            </div>
                        </div>
                    </section>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">USB-C Hub vs Thunderbolt Dock</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                                    <h3 className="font-bold text-blue-400 mb-2">USB-C Hub ($30-100)</h3>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>• Usually 5-10 ports</li>
                                        <li>• 4K@30Hz or 4K@60Hz HDMI</li>
                                        <li>• 100W power delivery</li>
                                        <li>• Portable, cable-attached</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                                    <h3 className="font-bold text-purple-400 mb-2">Thunderbolt Dock ($200-400)</h3>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>• 15-18+ ports</li>
                                        <li>• Dual 4K@60Hz or 8K</li>
                                        <li>• 96W+ power delivery</li>
                                        <li>• Desktop-class, single cable</li>
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
                                        <th className="text-center py-3 text-gray-400">Ports</th>
                                        <th className="text-center py-3 text-gray-400">PD</th>
                                        <th className="text-center py-3 text-gray-400">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-blue-400">Anker 555 (8-in-1)</td>
                                        <td className="text-center py-3">8</td>
                                        <td className="text-center py-3">100W</td>
                                        <td className="text-center py-3">$59</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-green-400">Anker 341 (7-in-1)</td>
                                        <td className="text-center py-3">7</td>
                                        <td className="text-center py-3">100W</td>
                                        <td className="text-center py-3 text-green-400">$34</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-purple-400">CalDigit TS4</td>
                                        <td className="text-center py-3 text-green-400">18</td>
                                        <td className="text-center py-3">98W</td>
                                        <td className="text-center py-3">$399</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold text-orange-400">Satechi Dual Dock</td>
                                        <td className="text-center py-3">10</td>
                                        <td className="text-center py-3">75W</td>
                                        <td className="text-center py-3">$199</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 Bottom Line</h2>
                            <p className="text-gray-300">
                                <strong className="text-blue-400">Anker 555</strong> for most people—great ports at $59. <strong className="text-purple-400">CalDigit TS4</strong> if you need a true desktop dock. <strong className="text-green-400">Anker 341</strong> for travel.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
