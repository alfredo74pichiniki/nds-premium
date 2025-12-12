import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Gaming Chairs 2025: Secretlab vs Herman Miller vs Autonomous | NDS",
    description: "We sat in gaming chairs for 8+ hours daily. Here's which ones support your back and which are overpriced gamer marketing.",
    keywords: "best gaming chair 2025, secretlab titan review, herman miller gaming, autonomous ergochair, gaming chair comparison",
};

export default function GamingChairsPage() {
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
                            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">Ergonomics</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Best Gaming Chairs 2025: Beyond the Racing Seat Hype
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            Your back doesn't care about RGB. We tested chairs for actual ergonomics, not gamer aesthetics.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>10 min read</span>
                        </div>
                    </header>

                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 border border-fuchsia-500/30">
                        <h2 className="text-lg font-bold text-white mb-4">⚡ Quick Picks</h2>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-purple-400">Best Gaming Chair</h3>
                                    <p className="text-white font-semibold">Secretlab Titan Evo 2025</p>
                                    <p className="text-xs text-gray-400">Best balance of gaming + ergonomics</p>
                                </div>
                                <a href="https://secretlab.co/collections/titan-series" target="_blank" rel="noopener" className="px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold">$519</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-green-400">Best Ergonomic</h3>
                                    <p className="text-white font-semibold">Herman Miller Aeron</p>
                                    <p className="text-xs text-gray-400">Gold standard, 12-year warranty</p>
                                </div>
                                <a href="https://www.hermanmiller.com/products/seating/office-chairs/aeron-chairs/" target="_blank" rel="noopener" className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold">$1,395</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-blue-400">Best Value</h3>
                                    <p className="text-white font-semibold">Autonomous ErgoChair Pro</p>
                                    <p className="text-xs text-gray-400">80% of Herman Miller at 30% price</p>
                                </div>
                                <a href="https://www.autonomous.ai/office-chairs/ergonomic-chair" target="_blank" rel="noopener" className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold">$449</a>
                            </div>
                        </div>
                    </section>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">The Truth About Gaming Chairs</h2>
                            <p className="text-gray-300 mb-4">
                                Most "gaming chairs" are racing seat aesthetics with terrible ergonomics. The bucket seat design looks cool but forces your spine into positions it hates.
                            </p>
                            <p className="text-gray-300 mb-4">
                                <strong className="text-white">The good news:</strong> The market has evolved. Secretlab and others now prioritize actual ergonomics. And office chairs like Herman Miller are embracing gamers.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Comparison Table</h2>
                            <table className="w-full text-sm mb-6">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400">Chair</th>
                                        <th className="text-center py-3 text-gray-400">Lumbar</th>
                                        <th className="text-center py-3 text-gray-400">Material</th>
                                        <th className="text-center py-3 text-gray-400">Warranty</th>
                                        <th className="text-center py-3 text-gray-400">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-purple-400">Secretlab Titan Evo</td>
                                        <td className="text-center py-3">4-way</td>
                                        <td className="text-center py-3">Leather/Fabric</td>
                                        <td className="text-center py-3">5 years</td>
                                        <td className="text-center py-3">$519</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-green-400">Herman Miller Aeron</td>
                                        <td className="text-center py-3">PostureFit</td>
                                        <td className="text-center py-3">Mesh</td>
                                        <td className="text-center py-3 text-green-400">12 years</td>
                                        <td className="text-center py-3">$1,395</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-blue-400">Autonomous ErgoChair</td>
                                        <td className="text-center py-3">Adjustable</td>
                                        <td className="text-center py-3">Mesh</td>
                                        <td className="text-center py-3">2 years</td>
                                        <td className="text-center py-3">$449</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold text-orange-400">Razer Iskur V2</td>
                                        <td className="text-center py-3">Built-in</td>
                                        <td className="text-center py-3">Leather</td>
                                        <td className="text-center py-3">3 years</td>
                                        <td className="text-center py-3">$499</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Who Should Buy What</h2>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                                    <h3 className="font-bold text-purple-400">Secretlab Titan Evo 2025</h3>
                                    <p className="text-gray-300 text-sm">
                                        Best for gamers who want the "gaming chair look" without sacrificing ergonomics. The 4-way lumbar and cold-cure foam are legitimately good.
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                                    <h3 className="font-bold text-green-400">Herman Miller Aeron/Embody</h3>
                                    <p className="text-gray-300 text-sm">
                                        If you work AND game 8+ hours daily, invest here. The 12-year warranty means it costs ~$10/month over its lifetime.
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                                    <h3 className="font-bold text-blue-400">Autonomous ErgoChair Pro</h3>
                                    <p className="text-gray-300 text-sm">
                                        Best value. Gets you 80% of Herman Miller ergonomics at 30% of the price. Great first ergonomic chair.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 Bottom Line</h2>
                            <p className="text-gray-300">
                                <strong className="text-purple-400">Secretlab Titan Evo</strong> for gamers. <strong className="text-green-400">Herman Miller</strong> for professionals. <strong className="text-blue-400">Autonomous</strong> for value.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
