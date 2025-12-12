import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Gaming Keyboards 2025: Mechanical, Optical, Hall Effect | Nest Digital Studio",
    description: "We tested 20+ gaming keyboards from Wooting, Razer, and others. Here's what actually matters for gaming performance.",
    keywords: "best gaming keyboard 2025, mechanical keyboard, wooting 60he, razer huntsman, hall effect keyboard",
};

export default function GamingKeyboardsPage() {
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
                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">Gaming</span>
                            <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs font-semibold">Keyboards</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Best Gaming Keyboards 2025: The Tech That Actually Matters
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            Hall Effect vs Optical vs Mechanical. We break down the hype and find what wins for competitive gaming.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Updated: December 2025</span>
                            <span>•</span>
                            <span>9 min read</span>
                        </div>
                    </header>

                    {/* Quick Picks */}
                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30">
                        <h2 className="text-lg font-bold text-white mb-4">⚡ Quick Picks</h2>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-white">Best Overall: Wooting 60HE</h3>
                                        <p className="text-xs text-gray-400">Hall Effect, Rapid Trigger, analog input</p>
                                    </div>
                                    <a href="https://wooting.io/wooting-60he" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-pink-500 text-white text-sm font-semibold">$175</a>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-white">Best Budget: Keychron Q1</h3>
                                        <p className="text-xs text-gray-400">Gasket mount, hot-swap, premium build</p>
                                    </div>
                                    <a href="https://amazon.com/dp/B09BF7KNVR?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold">$169</a>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-white">Best Mainstream: Razer Huntsman V3 Pro</h3>
                                        <p className="text-xs text-gray-400">Optical, adjustable actuation, Snap Tap</p>
                                    </div>
                                    <a href="https://amazon.com/dp/B0CGXQ5GQK?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold">$249</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Why Keyboard Tech Finally Matters in 2025</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                For years, "gaming keyboards" were marketing fluff. RGB lights and "gamer" aesthetics, but no real performance advantage over a $50 office keyboard.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                That changed with Hall Effect switches and Rapid Trigger. These technologies deliver measurable advantages:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li><strong className="text-white">Rapid Trigger:</strong> Key resets instantly when you lift slightly—no dead zone</li>
                                <li><strong className="text-white">Adjustable Actuation:</strong> Set 0.1mm actuation for hair-trigger response</li>
                                <li><strong className="text-white">Analog Input:</strong> Variable pressure detection for movement control</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Switch Types Explained</h2>
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400">Type</th>
                                        <th className="text-center py-3 text-gray-400">Pros</th>
                                        <th className="text-center py-3 text-gray-400">Cons</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-white">Hall Effect</td>
                                        <td className="text-center py-3 text-sm">Infinite lifespan, Rapid Trigger</td>
                                        <td className="text-center py-3 text-sm">Expensive, limited options</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-white">Optical</td>
                                        <td className="text-center py-3 text-sm">Fast, durable, adjustable</td>
                                        <td className="text-center py-3 text-sm">Light feel not for everyone</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold text-white">Mechanical</td>
                                        <td className="text-center py-3 text-sm">Tactile feel, huge variety</td>
                                        <td className="text-center py-3 text-sm">No Rapid Trigger, slower reset</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-4">🎯 Our Verdict</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                For competitive gamers, the <strong className="text-pink-400">Wooting 60HE</strong> is the undisputed king. Rapid Trigger alone gives you an edge in strafing and counter-strafing.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                For everyone else, the <strong className="text-blue-400">Keychron Q1</strong> offers premium build quality and incredible typing feel without breaking the bank.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
