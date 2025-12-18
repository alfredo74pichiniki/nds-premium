import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Project Management Software 2025: Complete Guide | Nest Digital Studio",
    description: "Compare Monday.com, Asana, Trello, Notion, ClickUp, Jira & more. Real G2 ratings, pricing for December 2025, and honest recommendations based on verified data.",
    keywords: "best project management software 2025, monday.com vs asana, trello vs notion, project management tools comparison",
};

export default function ProjectManagementToolsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Affiliate Disclosure */}
                    <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300">
                        <strong>📋 Disclosure:</strong> This article contains affiliate links. We may earn a commission at no extra cost to you.{" "}
                        <Link href="/disclosure" className="underline hover:text-amber-200">Learn more</Link>
                    </div>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-xs font-semibold">Software</span>
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold">B2B SaaS</span>
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">Productivity</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Best Project Management Software 2025: Complete Guide & Honest Comparison
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            According to G2's December 2025 data, Monday.com leads with 4.7/5 stars from 9,000+ reviews. But the best choice depends on your team size and needs.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Updated: December 2025</span>
                            <span>•</span>
                            <span>15 min read</span>
                        </div>
                    </header>

                    {/* Quick Verdict Box */}
                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-[var(--nds-primary)]/10 to-[var(--nds-accent)]/10 border border-[var(--nds-primary)]/30">
                        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            ⚡ Quick Verdict (Based on G2 Ratings)
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-white/5">
                                <div className="text-2xl mb-2">🏆</div>
                                <h3 className="font-bold text-white">Best Overall</h3>
                                <p className="text-[var(--nds-primary)] font-semibold">Monday.com</p>
                                <p className="text-xs text-gray-400 mt-1">4.7/5 from 9,200+ reviews</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <div className="text-2xl mb-2">💰</div>
                                <h3 className="font-bold text-white">Best Free Plan</h3>
                                <p className="text-green-400 font-semibold">Asana</p>
                                <p className="text-xs text-gray-400 mt-1">Free for up to 15 users</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <div className="text-2xl mb-2">🚀</div>
                                <h3 className="font-bold text-white">Best All-in-One</h3>
                                <p className="text-purple-400 font-semibold">Notion</p>
                                <p className="text-xs text-gray-400 mt-1">PM + Docs + Wiki combined</p>
                            </div>
                        </div>
                    </section>

                    {/* Methodology */}
                    <section className="mb-12 p-4 rounded-xl bg-white/5 border border-white/10">
                        <h3 className="text-sm font-bold text-white mb-2">📊 Our Methodology</h3>
                        <p className="text-gray-400 text-sm">
                            This analysis is based on verified data from G2.com ratings (December 2025), Capterra reviews, and official pricing from vendor websites. We do not claim to have personally tested all products—we provide honest analysis based on publicly available, verifiable information.
                        </p>
                    </section>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        {/* Comparison Table */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">Head-to-Head Comparison (December 2025)</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left py-4 px-4 text-gray-400 font-medium">Tool</th>
                                            <th className="text-center py-4 px-4 text-gray-400 font-medium">G2 Rating</th>
                                            <th className="text-center py-4 px-4 text-gray-400 font-medium">Free Plan</th>
                                            <th className="text-center py-4 px-4 text-gray-400 font-medium">Starting Price</th>
                                            <th className="text-center py-4 px-4 text-gray-400 font-medium">Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-300">
                                        <tr className="border-b border-white/5">
                                            <td className="py-4 px-4 font-semibold text-[var(--nds-primary)]">Monday.com</td>
                                            <td className="text-center py-4 px-4">4.7/5</td>
                                            <td className="text-center py-4 px-4">❌</td>
                                            <td className="text-center py-4 px-4">$8/user/mo</td>
                                            <td className="text-center py-4 px-4">Visual teams</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-4 px-4 font-semibold text-green-400">Asana</td>
                                            <td className="text-center py-4 px-4">4.4/5</td>
                                            <td className="text-center py-4 px-4 text-green-400">✅ 15 users</td>
                                            <td className="text-center py-4 px-4">$10.99/user/mo</td>
                                            <td className="text-center py-4 px-4">Small teams</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-4 px-4 font-semibold text-blue-400">Trello</td>
                                            <td className="text-center py-4 px-4">4.4/5</td>
                                            <td className="text-center py-4 px-4 text-green-400">✅ 10 boards</td>
                                            <td className="text-center py-4 px-4">$5/user/mo</td>
                                            <td className="text-center py-4 px-4">Kanban lovers</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-4 px-4 font-semibold text-purple-400">Notion</td>
                                            <td className="text-center py-4 px-4">4.5/5</td>
                                            <td className="text-center py-4 px-4 text-green-400">✅</td>
                                            <td className="text-center py-4 px-4">$8/user/mo</td>
                                            <td className="text-center py-4 px-4">All-in-one</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-4 px-4 font-semibold text-orange-400">ClickUp</td>
                                            <td className="text-center py-4 px-4">4.7/5</td>
                                            <td className="text-center py-4 px-4 text-green-400">✅</td>
                                            <td className="text-center py-4 px-4">$7/user/mo</td>
                                            <td className="text-center py-4 px-4">Power users</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-4 px-4 font-semibold text-blue-500">Jira</td>
                                            <td className="text-center py-4 px-4">4.3/5</td>
                                            <td className="text-center py-4 px-4 text-green-400">✅ 10 users</td>
                                            <td className="text-center py-4 px-4">$7.75/user/mo</td>
                                            <td className="text-center py-4 px-4">Dev teams</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Monday.com */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">1. Monday.com - Best Overall Platform</h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">✓ Best UI</span>
                                <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">✓ Strong Automation</span>
                                <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 text-xs">✗ No Free Plan</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong className="text-white">G2 Rating: 4.7/5 from 9,200+ reviews</strong>. Monday.com dominates for visual project management with its color-coded, intuitive interface.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Starting at $8/user/month (minimum 3 users), it offers 200+ templates, advanced automation, and integrations with 40+ tools including Slack, Google Workspace, and Salesforce.
                            </p>
                            <a
                                href="https://monday.com/"
                                target="_blank"
                                rel="noopener"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] text-white font-semibold hover:shadow-lg transition-all"
                            >
                                Try Monday.com Free →
                            </a>
                        </section>

                        {/* Asana */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">2. Asana - Best for Small Teams</h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">✓ Free for 15 Users</span>
                                <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">✓ Easy to Learn</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong className="text-white">G2 Rating: 4.4/5 from 10,300+ reviews</strong>. Asana offers the most generous free plan, supporting up to 15 team members with essential features.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Premium starts at $10.99/user/month with advanced features like timeline view, goals, and custom fields. Excellent for teams transitioning from spreadsheets.
                            </p>
                            <a
                                href="https://asana.com/"
                                target="_blank"
                                rel="noopener"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:shadow-lg transition-all"
                            >
                                Start Free with Asana →
                            </a>
                        </section>

                        {/* Notion */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">3. Notion - Best All-in-One Workspace</h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">✓ PM + Docs + Wiki</span>
                                <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 text-xs">~ Steeper Learning Curve</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                <strong className="text-white">G2 Rating: 4.5/5 from 4,800+ reviews</strong>. Notion combines project management with documentation, databases, and wikis in one flexible platform.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Free for personal use, $8/user/month for teams. Ideal for startups and knowledge workers who want everything in one place.
                            </p>
                            <a
                                href="https://notion.so/"
                                target="_blank"
                                rel="noopener"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg transition-all"
                            >
                                Try Notion Free →
                            </a>
                        </section>

                        {/* FAQ Section */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="font-bold text-white mb-2">What's the best free project management software in 2025?</h3>
                                    <p className="text-gray-400">Asana offers the most generous free plan, supporting up to 15 team members. Trello's free tier is excellent for simple Kanban workflows, while Notion provides powerful features for small teams who need documentation alongside PM.</p>
                                </div>

                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="font-bold text-white mb-2">Monday.com vs Asana: which is better for small businesses?</h3>
                                    <p className="text-gray-400">Asana is better for small businesses due to its free plan (up to 15 users) and lower learning curve. Monday.com is more powerful but requires paid plans from the start ($8/user/month minimum).</p>
                                </div>

                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="font-bold text-white mb-2">Is Trello good enough for serious project management?</h3>
                                    <p className="text-gray-400">Trello excels for simple to moderate project complexity but lacks advanced features like Gantt charts and detailed reporting. It's perfect for Agile teams and content planning. For complex projects, consider Monday.com or Asana.</p>
                                </div>

                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="font-bold text-white mb-2">Do these tools offer free trials?</h3>
                                    <p className="text-gray-400">Yes: Monday.com (14 days), Jira (7 days), Microsoft Project (30 days). Asana, Trello, Notion, and ClickUp offer generous free plans that work indefinitely for small teams.</p>
                                </div>

                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="font-bold text-white mb-2">Which PM software is best for remote teams?</h3>
                                    <p className="text-gray-400">Monday.com and Asana lead for remote teams due to excellent mobile apps, real-time collaboration, and visual project tracking. Both offer strong comment systems, file sharing, and notification management.</p>
                                </div>
                            </div>
                        </section>

                        {/* Final Verdict */}
                        <section className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-6">🎯 The Bottom Line</h2>
                            <div className="space-y-4 text-gray-300">
                                <p className="leading-relaxed">
                                    <strong className="text-[var(--nds-primary)]">Choose Monday.com if:</strong> You need visual project management with powerful automation. Best for teams of 10-100.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-green-400">Choose Asana if:</strong> You're a small team (under 15) wanting a free, comprehensive solution with room to grow.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-purple-400">Choose Notion if:</strong> You want PM + documentation + wiki in one platform. Best for startups and knowledge workers.
                                </p>
                                <p className="leading-relaxed">
                                    <strong className="text-blue-400">Choose Trello if:</strong> You prefer simple Kanban-style workflows at the lowest price point.
                                </p>
                            </div>
                        </section>

                        {/* CTA */}
                        <section className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-[var(--nds-primary)]/20 to-[var(--nds-accent)]/20 border border-[var(--nds-primary)]/30 text-center">
                            <h3 className="text-xl font-bold text-white mb-4">Ready to Improve Your Team's Productivity?</h3>
                            <p className="text-gray-300 mb-6">Most teams see immediate improvements within the first week. Start with a free trial today.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="https://monday.com/" target="_blank" rel="noopener" className="px-6 py-3 rounded-full bg-[var(--nds-primary)] text-white font-semibold hover:opacity-90 transition-all">
                                    Try Monday.com
                                </a>
                                <a href="https://asana.com/" target="_blank" rel="noopener" className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:opacity-90 transition-all">
                                    Try Asana Free
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
