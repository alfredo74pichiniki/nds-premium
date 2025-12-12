import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Microphones for Podcasting 2025: Shure vs Rode vs Blue | NDS",
    description: "We tested mics in treated and untreated rooms. Here's which microphones make you sound professional without a studio.",
    keywords: "best podcast microphone 2025, shure sm7b, rode podcaster, blue yeti, xlr vs usb mic",
};

export default function MicrophonesPage() {
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
                            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-semibold">Reviews</span>
                            <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs font-semibold">Audio</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Best Microphones for Podcasting & Streaming 2025
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            XLR vs USB, dynamic vs condenser—we cut through the jargon and tell you what to buy.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>9 min read</span>
                        </div>
                    </header>

                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-500/30">
                        <h2 className="text-lg font-bold text-white mb-4">⚡ Quick Picks</h2>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-yellow-400">Industry Standard</h3>
                                    <p className="text-white font-semibold">Shure SM7B</p>
                                    <p className="text-xs text-gray-400">What Joe Rogan uses, great in untreated rooms</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B0002E4Z8M?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-yellow-500 text-black text-sm font-semibold">$399</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-red-400">Best USB Mic</h3>
                                    <p className="text-white font-semibold">Shure MV7</p>
                                    <p className="text-xs text-gray-400">USB + XLR, SM7B sound for less</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B08L6C2Q5F?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-red-500 text-white text-sm font-semibold">$249</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-green-400">Budget Beast</h3>
                                    <p className="text-white font-semibold">Rode PodMic USB</p>
                                    <p className="text-xs text-gray-400">Dynamic USB, broadcast-ready, $99</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B0C84S7K5V?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold">$99</a>
                            </div>
                        </div>
                    </section>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">XLR vs USB: The Real Answer</h2>
                            <p className="text-gray-300 mb-4">
                                <strong className="text-white">USB</strong> if you just want to plug in and go. Modern USB mics like the Shure MV7 sound amazing.
                            </p>
                            <p className="text-gray-300 mb-4">
                                <strong className="text-white">XLR</strong> if you want upgrade flexibility—better preamps, mixing boards, future-proofing. Needs an audio interface (~$100-200 extra).
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Dynamic vs Condenser</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                                    <h3 className="font-bold text-yellow-400 mb-2">Dynamic</h3>
                                    <p className="text-gray-300 text-sm mb-2">Rejects room noise, forgiving, durable. Best for untreated rooms.</p>
                                    <p className="text-white font-semibold">→ SM7B, PodMic, MV7</p>
                                </div>
                                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                                    <h3 className="font-bold text-purple-400 mb-2">Condenser</h3>
                                    <p className="text-gray-300 text-sm mb-2">More detail/presence, picks up everything. Needs treated room.</p>
                                    <p className="text-white font-semibold">→ Rode NT1, Blue Yeti</p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Comparison</h2>
                            <table className="w-full text-sm mb-6">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400">Mic</th>
                                        <th className="text-center py-3 text-gray-400">Type</th>
                                        <th className="text-center py-3 text-gray-400">Connection</th>
                                        <th className="text-center py-3 text-gray-400">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-yellow-400">Shure SM7B</td>
                                        <td className="text-center py-3">Dynamic</td>
                                        <td className="text-center py-3">XLR</td>
                                        <td className="text-center py-3">$399</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-red-400">Shure MV7</td>
                                        <td className="text-center py-3">Dynamic</td>
                                        <td className="text-center py-3 text-green-400">USB + XLR</td>
                                        <td className="text-center py-3">$249</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-green-400">Rode PodMic USB</td>
                                        <td className="text-center py-3">Dynamic</td>
                                        <td className="text-center py-3">USB</td>
                                        <td className="text-center py-3 text-green-400">$99</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold text-blue-400">Blue Yeti X</td>
                                        <td className="text-center py-3">Condenser</td>
                                        <td className="text-center py-3">USB</td>
                                        <td className="text-center py-3">$149</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 Bottom Line</h2>
                            <p className="text-gray-300">
                                <strong className="text-red-400">Shure MV7</strong> for most podcasters—USB + XLR flexibility at $249. <strong className="text-green-400">Rode PodMic USB</strong> if budget is tight. <strong className="text-yellow-400">SM7B</strong> if you want the pro standard.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
