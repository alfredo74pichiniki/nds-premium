import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Complete Home Office Setup Guide 2025: Build Your Ideal Workspace | NDS",
    description: "Everything you need to build a productive home office. From desks to monitors to lighting—our tested recommendations.",
    keywords: "home office setup guide, work from home desk setup, home office essentials, remote work setup 2025",
};

export default function HomeOfficeGuidePage() {
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
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">Home Office</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Complete Home Office Setup Guide 2025
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            Build a workspace you'll actually enjoy. Budget breakdowns from $500 to $5,000.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>12 min read</span>
                        </div>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">The Essentials Checklist</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5">
                                    <h3 className="font-bold text-teal-400 mb-2">Must-Have</h3>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>☑️ Good chair (save your back)</li>
                                        <li>☑️ External monitor</li>
                                        <li>☑️ Proper lighting</li>
                                        <li>☑️ Decent webcam</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5">
                                    <h3 className="font-bold text-purple-400 mb-2">Nice-to-Have</h3>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>☐ Standing desk</li>
                                        <li>☐ Mechanical keyboard</li>
                                        <li>☐ USB-C dock</li>
                                        <li>☐ Quality microphone</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Budget Builds</h2>

                            <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/30 mb-6">
                                <h3 className="text-xl font-bold text-green-400 mb-3">💰 The $500 Starter Setup</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Monitor - Dell S2722QC 27" 4K</span>
                                        <a href="https://www.amazon.com/dp/B09DTDRJWP?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-green-400 hover:underline">$299</a>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Webcam - Logitech C920s</span>
                                        <a href="https://www.amazon.com/dp/B08DRQ66WP?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-green-400 hover:underline">$69</a>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Light Bar - Quntis Monitor Light</span>
                                        <a href="https://www.amazon.com/dp/B08DKQ3JG1?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-green-400 hover:underline">$35</a>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Keyboard - Logitech K380</span>
                                        <a href="https://www.amazon.com/dp/B0148NPH9I?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-green-400 hover:underline">$39</a>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Mouse - Logitech MX Anywhere 3</span>
                                        <a href="https://www.amazon.com/dp/B08D6LXGS2?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-green-400 hover:underline">$79</a>
                                    </div>
                                    <div className="pt-2 border-t border-green-500/30 flex justify-between font-bold">
                                        <span className="text-white">Total</span>
                                        <span className="text-green-400">~$521</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30 mb-6">
                                <h3 className="text-xl font-bold text-blue-400 mb-3">🎯 The $1,500 Pro Setup</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Monitor - LG 27GP850-B 27" 165Hz</span>
                                        <a href="https://www.amazon.com/dp/B093MTSTKD?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-blue-400 hover:underline">$349</a>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Webcam - Elgato Facecam</span>
                                        <a href="https://www.amazon.com/dp/B0973DV11N?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-blue-400 hover:underline">$149</a>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Light - BenQ ScreenBar</span>
                                        <a href="https://www.amazon.com/dp/B08WT889V3?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-blue-400 hover:underline">$179</a>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Keyboard - Keychron K8 Pro</span>
                                        <a href="https://www.amazon.com/dp/B0B16JCKMV?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-blue-400 hover:underline">$99</a>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Mouse - Logitech MX Master 3S</span>
                                        <a href="https://www.amazon.com/dp/B09HMKFDXC?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-blue-400 hover:underline">$99</a>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Microphone - Shure MV7</span>
                                        <a href="https://www.amazon.com/dp/B08G7RG9ML?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-blue-400 hover:underline">$249</a>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">USB-C Hub - Anker 555</span>
                                        <a href="https://www.amazon.com/dp/B087QZVQJX?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-blue-400 hover:underline">$59</a>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-300">Monitor Arm - ErGear Single Arm</span>
                                        <a href="https://www.amazon.com/dp/B085Y4HW8S?tag=nestdigital-20" target="_blank" rel="nofollow sponsored" className="text-blue-400 hover:underline">$39</a>
                                    </div>
                                    <div className="pt-2 border-t border-blue-500/30 flex justify-between font-bold">
                                        <span className="text-white">Total</span>
                                        <span className="text-blue-400">~$1,222</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 Where to Prioritize</h2>
                            <ol className="text-gray-300 space-y-2">
                                <li><strong className="text-white">1. Chair</strong> — Your back will thank you. Don't cheap out.</li>
                                <li><strong className="text-white">2. Monitor</strong> — You stare at it 8+ hours. Get something good.</li>
                                <li><strong className="text-white">3. Lighting</strong> — Bad lighting = eye strain + fatigue.</li>
                                <li><strong className="text-white">4. Webcam/Mic</strong> — Only if you have lots of video calls.</li>
                            </ol>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
