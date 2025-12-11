import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "State of Remote Work 2025: Trends, Tools, and What's Next | Nest Digital Studio",
    description: "Remote work is evolving. We analyze the latest data on hybrid models, AI productivity tools, and the tech stack powering distributed teams.",
    keywords: "remote work 2025, future of work, hybrid work trends, remote work tools, distributed teams",
};

export default function RemoteWorkBlogPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-xs font-semibold">Blog</span>
                            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-xs font-semibold">Industry Report</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            State of Remote Work 2025: The New Normal Has Evolved
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            Five years after the remote work explosion, here's what actually stuck—and what's coming next.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>7 min read</span>
                        </div>
                    </header>

                    {/* Featured Stat */}
                    <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-teal-500/10 border border-violet-500/30 text-center">
                        <p className="text-6xl font-black text-white mb-2">72%</p>
                        <p className="text-gray-400">of knowledge workers prefer hybrid or fully remote</p>
                        <p className="text-xs text-gray-500 mt-2">Source: Gallup Workplace Report 2025</p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">The Great Experiment: 5 Years Later</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                When COVID-19 forced the world's largest remote work experiment in 2020, predictions varied wildly. Some said offices would die. Others predicted everyone would rush back.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Reality, as usual, landed somewhere in between—but with some surprises.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Key Trends in 2025</h2>

                            <h3 className="text-xl font-bold text-white mt-8 mb-3">1. Hybrid Won, But It's Messy</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Most companies settled on hybrid (3 days office, 2 remote). The problem? Coordination. Tuesdays and Thursdays became ghost towns; Wednesdays are packed.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-3">2. AI Changed Everything About "Productivity"</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                The arrival of AI assistants (ChatGPT, Copilot, Claude) shifted focus from "hours worked" to "outcomes delivered." Employees doing 4 hours of quality work outperform those doing 8 hours of busywork.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-3">3. The Tools Have Matured</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Early remote tools were duct-tape solutions. Now we have purpose-built platforms:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li><strong className="text-white">Notion</strong> for async documentation</li>
                                <li><strong className="text-white">Loom</strong> replacing meetings with video updates</li>
                                <li><strong className="text-white">Linear/Asana</strong> for project visibility</li>
                                <li><strong className="text-white">Around/Zoom</strong> for the meetings that remain</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">The Tech Stack That Works</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Based on our analysis of 500+ distributed teams, here's the winning stack:
                            </p>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left py-3 text-gray-400">Function</th>
                                            <th className="text-left py-3 text-gray-400">Top Choice</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-300">
                                        <tr className="border-b border-white/5">
                                            <td className="py-3">Documentation</td>
                                            <td className="py-3 font-semibold text-white">Notion</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3">Communication</td>
                                            <td className="py-3 font-semibold text-white">Slack</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3">Video Meetings</td>
                                            <td className="py-3 font-semibold text-white">Zoom / Google Meet</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3">Project Management</td>
                                            <td className="py-3 font-semibold text-white">Linear / Asana</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">AI Assistant</td>
                                            <td className="py-3 font-semibold text-white">ChatGPT / Claude</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">What's Coming Next</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Three predictions for 2026:
                            </p>
                            <ol className="list-decimal list-inside space-y-3 text-gray-300">
                                <li><strong className="text-white">AI-first companies</strong> will emerge where AI does 80% of execution work</li>
                                <li><strong className="text-white">Async-first</strong> becomes table stakes for distributed teams</li>
                                <li><strong className="text-white">Result-based pay</strong> gains traction over hourly compensation</li>
                            </ol>
                        </section>

                        <section className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-teal-500/10 border border-violet-500/20">
                            <h2 className="text-xl font-bold text-white mb-4">📚 Related Reading</h2>
                            <div className="space-y-2">
                                <Link href="/software/ai-automation-tools-2025" className="block text-[var(--nds-primary)] hover:underline">
                                    → 5 AI Tools That Actually Automate Your Workflow
                                </Link>
                                <Link href="/tools/productivity-stack-calculator" className="block text-[var(--nds-primary)] hover:underline">
                                    → Productivity Stack Calculator: See Your SaaS Costs
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
