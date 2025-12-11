import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "How to Choose a Laptop in 2025: Complete Buying Guide | Nest Digital Studio",
    description: "Stop overpaying for specs you don't need. Our laptop buying guide helps you find the right machine for your actual use case.",
    keywords: "laptop buying guide 2025, how to choose laptop, best laptop for work, laptop specs explained",
};

export default function LaptopGuidePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">Guide</span>
                            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">Laptops</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            How to Choose a Laptop in 2025: No BS Buying Guide
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            Most people overspend on specs they'll never use. Here's how to match a laptop to your actual needs.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Updated: December 2025</span>
                            <span>•</span>
                            <span>8 min read</span>
                        </div>
                    </header>

                    {/* Quick Decision Tree */}
                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30">
                        <h2 className="text-lg font-bold text-white mb-4">🎯 Quick Decision</h2>
                        <div className="space-y-3">
                            <div className="p-4 rounded-xl bg-white/5">
                                <p className="text-gray-400 text-sm mb-1">Email, browsing, light office work</p>
                                <p className="text-white font-semibold">→ Any laptop $400-600, prioritize build quality</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <p className="text-gray-400 text-sm mb-1">Developer, multiple apps, Docker</p>
                                <p className="text-white font-semibold">→ 16GB+ RAM, fast SSD, good keyboard ($900-1500)</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <p className="text-gray-400 text-sm mb-1">Video editing, 3D work</p>
                                <p className="text-white font-semibold">→ Dedicated GPU, 32GB RAM, color-accurate display</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <p className="text-gray-400 text-sm mb-1">Gaming</p>
                                <p className="text-white font-semibold">→ RTX 4060+, 144Hz display, good cooling</p>
                            </div>
                        </div>
                    </section>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">The Specs That Actually Matter</h2>

                            <h3 className="text-xl font-bold text-white mt-8 mb-3">1. RAM: The Real Minimum is 16GB</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                8GB was fine in 2020. In 2025, browsers alone eat 4-6GB. Add Slack, Spotify, and a few tabs—you're swapping to disk.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong className="text-white">Rule:</strong> 16GB minimum. 32GB if you run VMs or edit video.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-3">2. Storage: SSD Speed Matters</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                All laptops ship with SSDs now, but speed varies 10x. NVMe PCIe 4.0 loads apps in milliseconds; cheap SATA SSDs feel sluggish.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong className="text-white">Rule:</strong> 512GB minimum NVMe. 1TB if you work with large files.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-3">3. CPU: Don't Overthink It</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Modern CPUs are all fast enough for 95% of tasks. The difference between i5 and i7 is rarely noticeable in daily use.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong className="text-white">Rule:</strong> Latest gen i5/Ryzen 5 or better. Apple M3 for macOS users.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-3">4. Display: The Hidden Cost-Cutter</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Budget laptops save money on terrible displays. You'll stare at this screen for thousands of hours—don't cheap out.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong className="text-white">Rule:</strong> 1080p minimum, 300+ nits brightness, IPS panel. OLED if you can afford it.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Our Top Picks by Category</h2>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white">Best Overall: MacBook Air M3</h4>
                                    <p className="text-gray-400 text-sm">Silent, all-day battery, excellent display. $1,099</p>
                                    <a href="https://amazon.com/dp/B0CX23GFMJ?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-[var(--nds-primary)] text-sm hover:underline">Check Price →</a>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white">Best Windows: Lenovo ThinkPad X1 Carbon</h4>
                                    <p className="text-gray-400 text-sm">Business-class build, legendary keyboard. $1,399</p>
                                    <a href="https://amazon.com/dp/B0CS3M4YP8?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-[var(--nds-primary)] text-sm hover:underline">Check Price →</a>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white">Best Budget: ASUS Zenbook 14</h4>
                                    <p className="text-gray-400 text-sm">Premium feel, OLED option, great value. $699</p>
                                    <a href="https://amazon.com/dp/B0C2Q4QJ3S?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-[var(--nds-primary)] text-sm hover:underline">Check Price →</a>
                                </div>
                            </div>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 The Bottom Line</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Stop obsessing over benchmarks. Buy for your actual use case, prioritize display and build quality, and don't skimp on RAM. A good laptop lasts 5+ years—invest accordingly.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
