import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Project Management Tools 2025: Linear vs Asana vs Monday vs Notion | NDS",
    description: "We used all four tools for real projects. Here's which project management software wins for different team sizes and workflows.",
    keywords: "best project management tool 2025, linear vs asana, notion vs monday, project management software comparison",
};

export default function ProjectManagementPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300">
                        <strong>ℹ️ Note:</strong> Links below go directly to official product websites. We may add affiliate partnerships in the future.
                    </div>

                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">Software</span>
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold">Productivity</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Best Project Management Tools 2025: The Honest Comparison
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            Linear, Asana, Monday, Notion—we used each for 3+ months. Here's what actually works.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>10 min read</span>
                        </div>
                    </header>

                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30">
                        <h2 className="text-lg font-bold text-white mb-4">⚡ Quick Verdict</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5">
                                <h3 className="font-bold text-purple-400">For Dev Teams</h3>
                                <p className="text-white font-semibold">Linear</p>
                                <p className="text-xs text-gray-400">Fastest, cleanest, keyboard-first</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <h3 className="font-bold text-orange-400">For Marketing/Ops</h3>
                                <p className="text-white font-semibold">Asana</p>
                                <p className="text-xs text-gray-400">Most flexible views, integrations</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <h3 className="font-bold text-pink-400">For Non-Technical Teams</h3>
                                <p className="text-white font-semibold">Monday</p>
                                <p className="text-xs text-gray-400">Easiest learning curve, visual</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <h3 className="font-bold text-green-400">For All-in-One</h3>
                                <p className="text-white font-semibold">Notion</p>
                                <p className="text-xs text-gray-400">Docs + tasks + wiki combined</p>
                            </div>
                        </div>
                    </section>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Pricing Reality Check</h2>
                            <table className="w-full text-sm mb-6">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400">Tool</th>
                                        <th className="text-center py-3 text-gray-400">Free Tier</th>
                                        <th className="text-center py-3 text-gray-400">Per User/Mo</th>
                                        <th className="text-center py-3 text-gray-400">10-User Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-purple-400">Linear</td>
                                        <td className="text-center py-3">250 issues</td>
                                        <td className="text-center py-3">$10</td>
                                        <td className="text-center py-3">$100/mo</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-orange-400">Asana</td>
                                        <td className="text-center py-3">15 users</td>
                                        <td className="text-center py-3">$13.49</td>
                                        <td className="text-center py-3">$135/mo</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3 font-semibold text-pink-400">Monday</td>
                                        <td className="text-center py-3">2 seats</td>
                                        <td className="text-center py-3">$12</td>
                                        <td className="text-center py-3">$120/mo</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold text-green-400">Notion</td>
                                        <td className="text-center py-3 text-green-400">Unlimited!</td>
                                        <td className="text-center py-3">$10</td>
                                        <td className="text-center py-3">$100/mo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Deep Dive: Each Tool</h2>

                            <h3 className="text-xl font-bold text-purple-400 mt-8 mb-3">Linear — The Dev Team Favorite</h3>
                            <p className="text-gray-300 mb-4">
                                Linear is obsessively fast. Every interaction is instant. Keyboard shortcuts for everything. The design is minimal and beautiful.
                            </p>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>✅ Fastest PM tool we've used</li>
                                <li>✅ GitHub/GitLab integration is flawless</li>
                                <li>✅ Cycles & roadmaps built-in</li>
                                <li>❌ Not great for non-dev workflows</li>
                            </ul>
                            <a href="https://linear.app/pricing" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold hover:bg-purple-600 transition-colors">
                                Try Linear Free →
                            </a>

                            <h3 className="text-xl font-bold text-orange-400 mt-8 mb-3">Asana — The Enterprise Standard</h3>
                            <p className="text-gray-300 mb-4">
                                Asana has every view: lists, boards, timelines, calendars, Gantt charts. It integrates with 200+ tools. It's what big companies use.
                            </p>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>✅ Most flexible views</li>
                                <li>✅ Automation builder is powerful</li>
                                <li>✅ Portfolio/goals for leadership</li>
                                <li>❌ Can feel bloated for small teams</li>
                            </ul>
                            <a href="https://asana.com/pricing" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors">
                                Try Asana Free →
                            </a>

                            <h3 className="text-xl font-bold text-pink-400 mt-8 mb-3">Monday — Easiest to Learn</h3>
                            <p className="text-gray-300 mb-4">
                                Monday is colorful, visual, and intuitive. Non-technical teams love it. The drag-and-drop is satisfying.
                            </p>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>✅ Lowest learning curve</li>
                                <li>✅ Great for client-facing teams</li>
                                <li>✅ Dashboards are beautiful</li>
                                <li>❌ Pricing adds up with automations</li>
                            </ul>
                            <a href="https://monday.com/pricing" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500 text-white text-sm font-semibold hover:bg-pink-600 transition-colors">
                                Try Monday Free →
                            </a>

                            <h3 className="text-xl font-bold text-green-400 mt-8 mb-3">Notion — The All-in-One</h3>
                            <p className="text-gray-300 mb-4">
                                Notion combines docs, wikis, databases, and project management. It's infinitely customizable.
                            </p>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>✅ Docs + tasks in one place</li>
                                <li>✅ Unlimited free tier</li>
                                <li>✅ AI features included</li>
                                <li>❌ PM features less mature</li>
                            </ul>
                            <a href="https://www.notion.so/product" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors">
                                Try Notion Free →
                            </a>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 Bottom Line</h2>
                            <p className="text-gray-300">
                                <strong className="text-purple-400">Dev teams:</strong> Linear. <strong className="text-orange-400">Marketing/Ops:</strong> Asana. <strong className="text-pink-400">Non-technical:</strong> Monday. <strong className="text-green-400">Want everything in one:</strong> Notion.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
