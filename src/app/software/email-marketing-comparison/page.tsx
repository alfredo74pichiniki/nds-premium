import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Email Marketing Platforms 2025: Mailchimp vs ConvertKit vs Beehiiv | Nest Digital Studio",
    description: "We migrated newsletters between platforms and tracked deliverability. Here's the real comparison of pricing, features, and which email platform fits your needs.",
    keywords: "best email marketing 2025, mailchimp review, convertkit vs mailchimp, beehiiv review, email marketing comparison",
};

export default function EmailMarketingPage() {
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
                            <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs font-semibold">Software</span>
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold">Email</span>
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">Newsletter</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Email Marketing Showdown: The Platforms That Actually Deliver
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            Mailchimp, ConvertKit, Beehiiv, and Klaviyo compared. Which is right for your list size and business model?
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Updated: December 2025</span>
                            <span>•</span>
                            <span>10 min read</span>
                        </div>
                    </header>

                    {/* Quick Verdict */}
                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30">
                        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">⚡ Quick Picks</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5">
                                <h3 className="font-bold text-yellow-400 mb-1">For Creators & Bloggers</h3>
                                <p className="text-white font-semibold">ConvertKit</p>
                                <p className="text-xs text-gray-400">Clean, creator-focused, great automations</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <h3 className="font-bold text-green-400 mb-1">For Newsletter-First</h3>
                                <p className="text-white font-semibold">Beehiiv</p>
                                <p className="text-xs text-gray-400">Built for newsletters, monetization tools</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <h3 className="font-bold text-blue-400 mb-1">For E-commerce</h3>
                                <p className="text-white font-semibold">Klaviyo</p>
                                <p className="text-xs text-gray-400">Shopify native, powerful segmentation</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <h3 className="font-bold text-orange-400 mb-1">For Beginners</h3>
                                <p className="text-white font-semibold">Mailchimp</p>
                                <p className="text-xs text-gray-400">Easy start, free tier, but gets expensive</p>
                            </div>
                        </div>
                    </section>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">The Real Cost Comparison</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Email platforms charge based on subscribers. Here's what you'll pay at different list sizes:
                            </p>
                            <table className="w-full text-sm mb-6">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400">Subscribers</th>
                                        <th className="text-center py-3 text-orange-400">Mailchimp</th>
                                        <th className="text-center py-3 text-yellow-400">ConvertKit</th>
                                        <th className="text-center py-3 text-green-400">Beehiiv</th>
                                        <th className="text-center py-3 text-blue-400">Klaviyo</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">1,000</td>
                                        <td className="text-center py-3">Free</td>
                                        <td className="text-center py-3">$29/mo</td>
                                        <td className="text-center py-3 text-green-400 font-semibold">Free</td>
                                        <td className="text-center py-3">$30/mo</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">10,000</td>
                                        <td className="text-center py-3">$100/mo</td>
                                        <td className="text-center py-3 text-yellow-400 font-semibold">$79/mo</td>
                                        <td className="text-center py-3">$49/mo</td>
                                        <td className="text-center py-3">$150/mo</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">50,000</td>
                                        <td className="text-center py-3">$350/mo</td>
                                        <td className="text-center py-3">$199/mo</td>
                                        <td className="text-center py-3 text-green-400 font-semibold">$99/mo</td>
                                        <td className="text-center py-3">$700/mo</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3">100,000</td>
                                        <td className="text-center py-3">$800/mo</td>
                                        <td className="text-center py-3">$379/mo</td>
                                        <td className="text-center py-3 text-green-400 font-semibold">$199/mo</td>
                                        <td className="text-center py-3">$1,380/mo</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-gray-300 leading-relaxed">
                                <strong className="text-green-400">Beehiiv wins on price</strong> at scale. Mailchimp's pricing becomes brutal past 10K subscribers.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Platform Deep Dives</h2>

                            <h3 className="text-xl font-bold text-orange-400 mt-8 mb-3">Mailchimp</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                The default choice for many. Easy to start, integrates with everything. But the free tier got gutted, and pricing escalates fast.
                            </p>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>✅ Huge template library</li>
                                <li>✅ 300+ integrations</li>
                                <li>❌ Gets expensive fast</li>
                                <li>❌ Automation feels dated</li>
                            </ul>

                            <h3 className="text-xl font-bold text-yellow-400 mt-8 mb-3">ConvertKit</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Built for creators: bloggers, YouTubers, podcasters. Visual automation builder is excellent. Subscriber-first tagging system.
                            </p>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>✅ Best automation builder</li>
                                <li>✅ Creator-focused features</li>
                                <li>✅ Great deliverability</li>
                                <li>❌ Templates are minimal</li>
                            </ul>

                            <h3 className="text-xl font-bold text-green-400 mt-8 mb-3">Beehiiv</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                The newsletter platform. Built-in monetization (ads, paid subscriptions), referral programs, and beautiful web versions.
                            </p>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>✅ Best for pure newsletters</li>
                                <li>✅ Built-in monetization</li>
                                <li>✅ Best pricing at scale</li>
                                <li>❌ Limited e-commerce features</li>
                            </ul>

                            <h3 className="text-xl font-bold text-blue-400 mt-8 mb-3">Klaviyo</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                E-commerce powerhouse. Deep Shopify/WooCommerce integration. Predictive analytics, advanced segmentation, but expensive.
                            </p>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>✅ Best for e-commerce</li>
                                <li>✅ Powerful segmentation</li>
                                <li>✅ Revenue attribution</li>
                                <li>❌ Most expensive option</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Our Recommendations</h2>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                                    <h4 className="font-bold text-yellow-400 mb-2">For Content Creators</h4>
                                    <p className="text-gray-300 text-sm mb-3">ConvertKit is purpose-built for you. The visual automations and tagging system are perfect for building relationships.</p>
                                    <a href="https://convertkit.com/pricing" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-500 text-black text-sm font-semibold hover:bg-yellow-400 transition-colors">
                                        Try ConvertKit Free →
                                    </a>
                                </div>
                                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                                    <h4 className="font-bold text-green-400 mb-2">For Newsletter Businesses</h4>
                                    <p className="text-gray-300 text-sm mb-3">Beehiiv is unbeatable. Best pricing, built-in monetization, and it's what serious newsletter operators use.</p>
                                    <a href="https://www.beehiiv.com/pricing" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors">
                                        Start Free with Beehiiv →
                                    </a>
                                </div>
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                                    <h4 className="font-bold text-blue-400 mb-2">For E-commerce Stores</h4>
                                    <p className="text-gray-300 text-sm mb-3">Klaviyo pays for itself with abandoned cart flows alone. The Shopify integration is seamless.</p>
                                    <a href="https://www.klaviyo.com/pricing" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors">
                                        Get Klaviyo Free Trial →
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 The Bottom Line</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Your email platform should match your business model. Newsletters → Beehiiv. Creators → ConvertKit. E-commerce → Klaviyo. Everyone else → Start with ConvertKit and migrate when needed.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
