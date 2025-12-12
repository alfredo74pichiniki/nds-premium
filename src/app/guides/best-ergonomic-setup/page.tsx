import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Ergonomic Setup 2025: Prevent Back Pain & RSI | NDS",
    description: "Ergonomic products that actually prevent back pain and RSI. Tested recommendations for chairs, keyboards, and mice.",
    keywords: "ergonomic setup, ergonomic keyboard, ergonomic mouse, prevent back pain, RSI prevention, split keyboard",
};

export default function ErgonomicSetupPage() {
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
                            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-xs font-semibold">Guides</span>
                            <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-semibold">Ergonomics</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Build an Ergonomic Setup That Saves Your Body
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            8 hours/day at a desk adds up. Here's how to prevent lasting damage.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>10 min read</span>
                        </div>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">The Core Ergonomic Principles</h2>
                            <ul className="space-y-2 text-gray-300">
                                <li><strong className="text-white">Monitor at eye level:</strong> Top of screen at or slightly below eye line</li>
                                <li><strong className="text-white">Arms at 90°:</strong> Elbows bent at 90° when typing</li>
                                <li><strong className="text-white">Feet flat:</strong> Feet flat on floor or footrest</li>
                                <li><strong className="text-white">Wrists neutral:</strong> Not bent up, down, or to sides</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Our Ergonomic Picks</h2>

                            <h3 className="text-xl font-bold text-purple-400 mt-8 mb-3">Ergonomic Keyboards</h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-white font-semibold">Logitech Ergo K860</p>
                                        <p className="text-xs text-gray-400">Split layout, wrist rest, wireless</p>
                                    </div>
                                    <a href="https://www.amazon.com/dp/B07ZWK2TQT?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold hover:bg-purple-600">$129</a>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-white font-semibold">Microsoft Sculpt Ergonomic</p>
                                        <p className="text-xs text-gray-400">Classic split design, budget-friendly</p>
                                    </div>
                                    <a href="https://www.amazon.com/dp/B00CYX54C0?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">$59</a>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-white font-semibold">Kinesis Freestyle Pro</p>
                                        <p className="text-xs text-gray-400">Fully split, Cherry MX, mechanical</p>
                                    </div>
                                    <a href="https://www.amazon.com/dp/B07CW3WKBL?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600">$199</a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-green-400 mt-8 mb-3">Ergonomic Mice</h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-white font-semibold">Logitech MX Vertical</p>
                                        <p className="text-xs text-gray-400">57° angle, reduces wrist strain</p>
                                    </div>
                                    <a href="https://www.amazon.com/dp/B07FNJB8TT?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600">$99</a>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-white font-semibold">Logitech Lift</p>
                                        <p className="text-xs text-gray-400">Smaller vertical mouse, great for smaller hands</p>
                                    </div>
                                    <a href="https://www.amazon.com/dp/B09J1TB35S?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-teal-500 text-white text-sm font-semibold hover:bg-teal-600">$69</a>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-white font-semibold">Kensington Expert Trackball</p>
                                        <p className="text-xs text-gray-400">Zero wrist movement, scroll ring</p>
                                    </div>
                                    <a href="https://www.amazon.com/dp/B01936N73I?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-yellow-500 text-black text-sm font-semibold hover:bg-yellow-400">$59</a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-blue-400 mt-8 mb-3">Monitor Arms & Laptop Stands</h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-white font-semibold">ErGear Single Monitor Arm</p>
                                        <p className="text-xs text-gray-400">Gas spring, fits 13-32"</p>
                                    </div>
                                    <a href="https://www.amazon.com/dp/B085Y4HW8S?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">$39</a>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-white font-semibold">Rain Design mStand</p>
                                        <p className="text-xs text-gray-400">Aluminum laptop stand, iconic design</p>
                                    </div>
                                    <a href="https://www.amazon.com/dp/B000OOYECC?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="px-4 py-2 rounded-full bg-gray-500 text-white text-sm font-semibold hover:bg-gray-600">$49</a>
                                </div>
                            </div>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 Start Here</h2>
                            <p className="text-gray-300">
                                Feeling pain? Start with <strong className="text-green-400">Logitech MX Vertical</strong> mouse and <strong className="text-blue-400">ErGear monitor arm</strong>. These two changes make the biggest immediate difference for most people.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
