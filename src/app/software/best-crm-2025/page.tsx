import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "HubSpot vs Salesforce vs Pipedrive: Best CRM 2025 | Nest Digital Studio",
    description: "We used all three CRMs for real sales pipelines. Here's the honest breakdown of pricing, features, and which CRM fits your business size.",
    keywords: "best crm 2025, hubspot vs salesforce, pipedrive review, crm comparison, small business crm",
};

export default function CRMComparisonPage() {
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
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">Software</span>
                            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">CRM</span>
                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">B2B</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            HubSpot vs Salesforce vs Pipedrive: The CRM Comparison No One Asked For (But Everyone Needs)
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            We ran real sales pipelines on all three. The pricing pages lie. Here's what actually happens.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Updated: December 2025</span>
                            <span>•</span>
                            <span>12 min read</span>
                        </div>
                    </header>

                    {/* Quick Verdict */}
                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30">
                        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">⚡ TL;DR</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-white/5">
                                <h3 className="font-bold text-orange-400 mb-2">HubSpot</h3>
                                <p className="text-xs text-gray-400 mb-2">Best for: Marketing-led growth</p>
                                <p className="text-sm text-gray-300">Free tier is legit. Scales expensively. Best marketing automation.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <h3 className="font-bold text-blue-400 mb-2">Salesforce</h3>
                                <p className="text-xs text-gray-400 mb-2">Best for: Enterprise, complex sales</p>
                                <p className="text-sm text-gray-300">Most powerful. Most complex. Needs an admin. Not for small teams.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <h3 className="font-bold text-green-400 mb-2">Pipedrive</h3>
                                <p className="text-xs text-gray-400 mb-2">Best for: Sales-focused SMBs</p>
                                <p className="text-sm text-gray-300">Best UX. Affordable. Pure sales focus. Limited marketing features.</p>
                            </div>
                        </div>
                    </section>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">The Real Pricing Breakdown</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                CRM pricing pages are designed to confuse. Here's what you'll actually pay:
                            </p>
                            <table className="w-full text-sm mb-6">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400">For 10 Users</th>
                                        <th className="text-center py-3 text-orange-400">HubSpot</th>
                                        <th className="text-center py-3 text-blue-400">Salesforce</th>
                                        <th className="text-center py-3 text-green-400">Pipedrive</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">Starter</td>
                                        <td className="text-center py-3">$0 (really free)</td>
                                        <td className="text-center py-3">$250/mo</td>
                                        <td className="text-center py-3">$149/mo</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">Pro Features</td>
                                        <td className="text-center py-3">$890/mo</td>
                                        <td className="text-center py-3">$1,500/mo</td>
                                        <td className="text-center py-3">$499/mo</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3">Full Enterprise</td>
                                        <td className="text-center py-3">$3,600+/mo</td>
                                        <td className="text-center py-3">$3,300+/mo</td>
                                        <td className="text-center py-3">$999/mo</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-gray-300 leading-relaxed">
                                <strong className="text-white">Hidden costs:</strong> Salesforce requires implementation partners (~$10K-50K). HubSpot's marketing hub is separate. Pipedrive add-ons stack up.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Feature Comparison That Matters</h2>

                            <h3 className="text-xl font-bold text-white mt-8 mb-3">Pipeline Management</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong className="text-green-400">Winner: Pipedrive.</strong> The visual pipeline is the best in the business. Drag-and-drop deals, clear stages, minimal clicks.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-3">Marketing Integration</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong className="text-orange-400">Winner: HubSpot.</strong> Email sequences, landing pages, forms, analytics—all native. Salesforce needs Pardot ($$$).
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-3">Customization & Reporting</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong className="text-blue-400">Winner: Salesforce.</strong> If you can dream it, Salesforce can do it. Custom objects, complex workflows, enterprise reporting.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-3">Ease of Use</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong className="text-green-400">Winner: Pipedrive.</strong> Your sales team will actually use it without training. Salesforce needs a dedicated admin.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Who Should Use What</h2>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30">
                                    <h4 className="font-bold text-orange-400 mb-2">Choose HubSpot if:</h4>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>✓ Marketing drives your business</li>
                                        <li>✓ You want free to start, pay later</li>
                                        <li>✓ Content marketing is core strategy</li>
                                        <li>✓ You need marketing + sales unified</li>
                                    </ul>
                                    <a href="https://www.hubspot.com/pricing/crm" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors">
                                        Start Free with HubSpot →
                                    </a>
                                </div>
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                                    <h4 className="font-bold text-blue-400 mb-2">Choose Salesforce if:</h4>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>✓ You're enterprise (500+ employees)</li>
                                        <li>✓ Complex sales processes</li>
                                        <li>✓ You have budget for implementation</li>
                                        <li>✓ Custom integrations are critical</li>
                                    </ul>
                                    <a href="https://www.salesforce.com/editions-pricing/sales-cloud" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors">
                                        Try Salesforce Free Trial →
                                    </a>
                                </div>
                                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                                    <h4 className="font-bold text-green-400 mb-2">Choose Pipedrive if:</h4>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>✓ Sales is your primary motion</li>
                                        <li>✓ You want simple + effective</li>
                                        <li>✓ Budget is a concern</li>
                                        <li>✓ Your team hates complex software</li>
                                    </ul>
                                    <a href="https://www.pipedrive.com/pricing" target="_blank" rel="nofollow sponsored" className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors">
                                        Try Pipedrive 14 Days Free →
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 Our Verdict</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                For most growing businesses (10-100 employees), <strong className="text-green-400">Pipedrive</strong> offers the best balance of features, usability, and price.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                If marketing automation is critical, start with <strong className="text-orange-400">HubSpot's free tier</strong> and upgrade as you grow. Save Salesforce for when you've outgrown both.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
