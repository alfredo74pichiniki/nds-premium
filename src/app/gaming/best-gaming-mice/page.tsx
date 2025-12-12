import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Gaming Mice 2025: Logitech vs Razer vs Pulsar vs Lamzu | NDS",
    description: "We tested mice for sensor accuracy, weight, and build quality. Here's what pro players actually use.",
    keywords: "best gaming mouse 2025, logitech g pro x superlight, razer viper, pulsar x2, lightweight gaming mouse",
};

export default function GamingMicePage() {
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
                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">Peripherals</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Best Gaming Mice 2025: Lightweight Is King
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            Sub-60g is the new standard. We tested all the top mice for flick shots and tracking.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>8 min read</span>
                        </div>
                    </header>

                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30">
                        <h2 className="text-lg font-bold text-white mb-4">⚡ Quick Picks</h2>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-blue-400">Best Overall</h3>
                                    <p className="text-white font-semibold">Logitech G Pro X Superlight 2</p>
                                    <p className="text-xs text-gray-400">60g, HERO 2 sensor, pro favorite</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B09NBWL8J5?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold">$159</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-green-400">Best Value</h3>
                                    <p className="text-white font-semibold">Pulsar X2</p>
                                    <p className="text-xs text-gray-400">52g, great shape, $99</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B0CH9Z62J3?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold">$99</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-purple-400">Best Ergonomic</h3>
                                    <p className="text-white font-semibold">Razer DeathAdder Essential</p>
                                    <p className="text-xs text-gray-400">6400 DPI, classic shape</p>
                                </div>
                                <a href="https://www.amazon.com/dp/B07D136KSY?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold">$29</a>
                            </div>
                        </div>
                    </section>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Why Weight Matters</h2>
                            <p className="text-gray-300 mb-4">
                                Lighter mice = less effort to move = faster flick shots = less fatigue. Every pro player has switched to sub-70g mice.
                            </p>
                            <p className="text-gray-300 mb-4">
                                The tradeoff used to be build quality. Not anymore. Modern lightweight mice are built like tanks.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Specs Comparison</h2>
                            <table className="w-full text-sm mb-6">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400">Mouse</th>
                                        <th className="text-center py-3 text-gray-400">Weight</th>
                                        <th className="text-center py-3 text-gray-400">Sensor</th>
                                        <th className="text-center py-3 text-gray-400">Battery</th>
                                        <th className="text-center py-3 text-gray-400">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-blue-400">G Pro X Superlight 2</td>
                                        <td className="text-center py-3">60g</td>
                                        <td className="text-center py-3">HERO 2</td>
                                        <td className="text-center py-3">95hr</td>
                                        <td className="text-center py-3">$159</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-green-400">Pulsar X2</td>
                                        <td className="text-center py-3 text-green-400">52g</td>
                                        <td className="text-center py-3">PAW3395</td>
                                        <td className="text-center py-3">70hr</td>
                                        <td className="text-center py-3 text-green-400">$99</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-purple-400">DeathAdder V3 Pro</td>
                                        <td className="text-center py-3">63g</td>
                                        <td className="text-center py-3">Focus Pro</td>
                                        <td className="text-center py-3">90hr</td>
                                        <td className="text-center py-3">$149</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold text-orange-400">Lamzu Atlantis</td>
                                        <td className="text-center py-3 text-green-400">55g</td>
                                        <td className="text-center py-3">PAW3395</td>
                                        <td className="text-center py-3">65hr</td>
                                        <td className="text-center py-3">$89</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Grip Style Guide</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-white/5">
                                    <h3 className="font-bold text-white mb-2">Palm Grip</h3>
                                    <p className="text-gray-400 text-sm mb-2">Full hand contact</p>
                                    <p className="text-purple-400 font-semibold">→ DeathAdder V3</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5">
                                    <h3 className="font-bold text-white mb-2">Claw Grip</h3>
                                    <p className="text-gray-400 text-sm mb-2">Fingertips + palm base</p>
                                    <p className="text-blue-400 font-semibold">→ G Pro X Superlight</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5">
                                    <h3 className="font-bold text-white mb-2">Fingertip Grip</h3>
                                    <p className="text-gray-400 text-sm mb-2">Only fingertips</p>
                                    <p className="text-green-400 font-semibold">→ Pulsar X2 Mini</p>
                                </div>
                            </div>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 Bottom Line</h2>
                            <p className="text-gray-300">
                                <strong className="text-blue-400">G Pro X Superlight 2</strong> for safe choice. <strong className="text-green-400">Pulsar X2</strong> for best value. Match to your grip style.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
