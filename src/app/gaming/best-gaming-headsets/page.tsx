import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Gaming Headsets 2025: SteelSeries vs HyperX vs Logitech | NDS",
    description: "We tested gaming headsets for sound accuracy, mic quality, and comfort. Here's what actually matters for competitive gaming.",
    keywords: "best gaming headset 2025, steelseries arctis review, hyperx cloud, logitech g pro x, gaming headset comparison",
};

export default function GamingHeadsetsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300">
                        <strong>📋 Disclosure:</strong> This article contains affiliate links.{" "}
                        <Link href="/disclosure" className="underline hover:text-amber-200">Learn more</Link>
                    </div>

                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold">Gaming</span>
                            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold">Audio</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Best Gaming Headsets 2025: Hearing Footsteps Actually Matters
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            Sound positioning wins gunfights. We tested 12 headsets in CS2, Valorant, and Apex.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>9 min read</span>
                        </div>
                    </header>

                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                        <h2 className="text-lg font-bold text-white mb-4">⚡ Quick Picks</h2>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-orange-400">Best Overall</h3>
                                    <p className="text-white font-semibold">SteelSeries Arctis Nova Pro</p>
                                    <p className="text-xs text-gray-400">Best sound, ANC, hot-swap battery</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B09ZWKD9TZ?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold">$349</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-red-400">Best Value</h3>
                                    <p className="text-white font-semibold">HyperX Cloud III</p>
                                    <p className="text-xs text-gray-400">Amazing comfort, great mic, $99</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B0C56VQ7J1?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-red-500 text-white text-sm font-semibold">$99</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-blue-400">Best Wireless</h3>
                                    <p className="text-white font-semibold">Logitech G Pro X 2</p>
                                    <p className="text-xs text-gray-400">50hr battery, pro-level audio</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B0C81D39MP?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold">$249</a>
                            </div>
                        </div>
                    </section>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">What Makes a Gaming Headset Good</h2>
                            <p className="text-gray-300 mb-4">
                                Forget "virtual surround" and "RGB audio." What matters:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li><strong className="text-white">Soundstage:</strong> How well can you position enemies?</li>
                                <li><strong className="text-white">Mic Quality:</strong> Will teammates actually hear you?</li>
                                <li><strong className="text-white">Comfort:</strong> Can you wear it for 5+ hours?</li>
                                <li><strong className="text-white">Latency (wireless):</strong> Below 20ms is imperceptible</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Comparison</h2>
                            <table className="w-full text-sm mb-6">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400">Headset</th>
                                        <th className="text-center py-3 text-gray-400">Type</th>
                                        <th className="text-center py-3 text-gray-400">Soundstage</th>
                                        <th className="text-center py-3 text-gray-400">Mic</th>
                                        <th className="text-center py-3 text-gray-400">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-orange-400">Arctis Nova Pro</td>
                                        <td className="text-center py-3">Wireless</td>
                                        <td className="text-center py-3 text-green-400">★★★★★</td>
                                        <td className="text-center py-3">★★★★☆</td>
                                        <td className="text-center py-3">$349</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-red-400">HyperX Cloud III</td>
                                        <td className="text-center py-3">Wired</td>
                                        <td className="text-center py-3">★★★★☆</td>
                                        <td className="text-center py-3 text-green-400">★★★★★</td>
                                        <td className="text-center py-3 text-green-400">$99</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-blue-400">Logitech G Pro X 2</td>
                                        <td className="text-center py-3">Wireless</td>
                                        <td className="text-center py-3 text-green-400">★★★★★</td>
                                        <td className="text-center py-3">★★★★☆</td>
                                        <td className="text-center py-3">$249</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold text-purple-400">Razer BlackShark V2</td>
                                        <td className="text-center py-3">Wired</td>
                                        <td className="text-center py-3">★★★★☆</td>
                                        <td className="text-center py-3">★★★☆☆</td>
                                        <td className="text-center py-3">$99</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 Bottom Line</h2>
                            <p className="text-gray-300">
                                <strong className="text-red-400">HyperX Cloud III</strong> for most gamers—$99 is unbeatable value. Go <strong className="text-orange-400">Arctis Nova Pro</strong> if you want the best and have budget.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
