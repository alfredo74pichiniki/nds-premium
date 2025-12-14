import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "AI Tools Revolution 2025: ChatGPT vs Claude vs Gemini for Productivity | Nest Digital Studio",
    description: "We used ChatGPT, Claude, and Gemini for 6 months of real work. Which AI assistant actually makes you more productive? Honest comparison with real use cases.",
    keywords: "chatgpt vs claude, best ai tools 2025, gemini review, ai productivity, claude vs gpt comparison",
};

export default function AIToolsComparisonPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold">AI Tools</span>
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">Productivity</span>
                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">Deep Dive</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            The AI Productivity Showdown: Which Assistant Actually Delivers?
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            After 6 months using ChatGPT, Claude, and Gemini for real work (not toy examples), here&apos;s the honest truth about each.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>15 min read</span>
                        </div>
                    </header>

                    {/* Quick Verdict */}
                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30">
                        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            ⚡ Quick Verdict
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-white/5">
                                <div className="text-2xl mb-2">🏆</div>
                                <h3 className="font-bold text-green-400 mb-1">Best for Writing</h3>
                                <p className="text-white font-semibold">Claude 3.5</p>
                                <p className="text-sm text-gray-400">Nuanced, natural prose</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <div className="text-2xl mb-2">💻</div>
                                <h3 className="font-bold text-blue-400 mb-1">Best for Code</h3>
                                <p className="text-white font-semibold">ChatGPT-4</p>
                                <p className="text-sm text-gray-400">Robust debugging</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <div className="text-2xl mb-2">🔍</div>
                                <h3 className="font-bold text-purple-400 mb-1">Best for Research</h3>
                                <p className="text-white font-semibold">Gemini Advanced</p>
                                <p className="text-sm text-gray-400">Real-time info access</p>
                            </div>
                        </div>
                    </section>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">

                        {/* Real World Testing */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">How We Actually Tested</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We didn&apos;t ask trick questions or run benchmarks. We used each AI for:
                            </p>
                            <ul className="space-y-2 text-gray-300 mb-6">
                                <li><strong className="text-white">Content Writing:</strong> 50+ blog posts, product descriptions, email sequences</li>
                                <li><strong className="text-white">Code Development:</strong> Full-stack apps, debugging, refactoring</li>
                                <li><strong className="text-white">Research:</strong> Market analysis, competitor research, data synthesis</li>
                                <li><strong className="text-white">Daily Tasks:</strong> Email drafts, meeting notes, brainstorming</li>
                            </ul>
                        </section>

                        {/* ChatGPT */}
                        <section className="mb-12 p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
                            <h2 className="text-2xl font-bold text-green-400 mb-4">OpenAI ChatGPT (GPT-4o)</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                The original. The one everyone knows. Still the most polished experience with the best ecosystem.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Strengths</h3>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>✅ Best plugin/GPT Store ecosystem</li>
                                <li>✅ Excellent at following complex instructions</li>
                                <li>✅ Most reliable code output</li>
                                <li>✅ DALL-E image generation built-in</li>
                                <li>✅ Voice mode is genuinely useful</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Weaknesses</h3>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>❌ Writing can feel corporate/bland</li>
                                <li>❌ Overly cautious (refuses reasonable requests)</li>
                                <li>❌ No real-time internet by default</li>
                                <li>❌ Sometimes verbose when brevity needed</li>
                            </ul>

                            <div className="flex items-center gap-4 mt-6">
                                <span className="text-2xl font-black text-green-400">$20/mo</span>
                                <a href="https://chat.openai.com" target="_blank" rel="noopener"
                                    className="px-5 py-2 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600">
                                    Try ChatGPT Plus →
                                </a>
                            </div>
                        </section>

                        {/* Claude */}
                        <section className="mb-12 p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                            <h2 className="text-2xl font-bold text-orange-400 mb-4">Anthropic Claude 3.5 Sonnet</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                The writer&apos;s AI. Claude produces the most natural, nuanced text we&apos;ve seen from any LLM. Also exceptional at analysis.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Strengths</h3>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>✅ Best writing quality (natural, engaging)</li>
                                <li>✅ 200K context window (read entire books)</li>
                                <li>✅ Excellent at analysis and reasoning</li>
                                <li>✅ Artifacts feature for code/documents</li>
                                <li>✅ More willing to help with edge cases</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Weaknesses</h3>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>❌ No image generation</li>
                                <li>❌ No real-time internet access</li>
                                <li>❌ Smaller ecosystem than ChatGPT</li>
                                <li>❌ Can be too verbose for simple tasks</li>
                            </ul>

                            <div className="flex items-center gap-4 mt-6">
                                <span className="text-2xl font-black text-orange-400">$20/mo</span>
                                <a href="https://claude.ai" target="_blank" rel="noopener"
                                    className="px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600">
                                    Try Claude Pro →
                                </a>
                            </div>
                        </section>

                        {/* Gemini */}
                        <section className="mb-12 p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                            <h2 className="text-2xl font-bold text-blue-400 mb-4">Google Gemini Advanced</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                The researcher&apos;s AI. Real-time Google Search integration makes it unbeatable for current information.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Strengths</h3>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>✅ Real-time Google Search built-in</li>
                                <li>✅ 1M token context window (Gemini 1.5 Pro)</li>
                                <li>✅ Deep Google Workspace integration</li>
                                <li>✅ Excellent for research tasks</li>
                                <li>✅ Can analyze YouTube videos</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Weaknesses</h3>
                            <ul className="space-y-1 text-gray-300 mb-4">
                                <li>❌ Writing feels more mechanical than Claude</li>
                                <li>❌ Interface less polished than ChatGPT</li>
                                <li>❌ Sometimes cites unreliable sources</li>
                                <li>❌ Inconsistent at creative tasks</li>
                            </ul>

                            <div className="flex items-center gap-4 mt-6">
                                <span className="text-2xl font-black text-blue-400">$19.99/mo</span>
                                <a href="https://gemini.google.com" target="_blank" rel="noopener"
                                    className="px-5 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600">
                                    Try Gemini Advanced →
                                </a>
                            </div>
                        </section>

                        {/* Comparison Table */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">Head-to-Head Comparison</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left py-3 text-gray-400">Feature</th>
                                            <th className="text-center py-3 text-green-400">ChatGPT</th>
                                            <th className="text-center py-3 text-orange-400">Claude</th>
                                            <th className="text-center py-3 text-blue-400">Gemini</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-300">
                                        <tr className="border-b border-white/5">
                                            <td className="py-3">Writing Quality</td>
                                            <td className="text-center py-3">★★★★☆</td>
                                            <td className="text-center py-3 text-green-400 font-bold">★★★★★</td>
                                            <td className="text-center py-3">★★★☆☆</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3">Coding</td>
                                            <td className="text-center py-3 text-green-400 font-bold">★★★★★</td>
                                            <td className="text-center py-3">★★★★☆</td>
                                            <td className="text-center py-3">★★★★☆</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3">Research</td>
                                            <td className="text-center py-3">★★★☆☆</td>
                                            <td className="text-center py-3">★★★★☆</td>
                                            <td className="text-center py-3 text-green-400 font-bold">★★★★★</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3">Context Length</td>
                                            <td className="text-center py-3">128K</td>
                                            <td className="text-center py-3">200K</td>
                                            <td className="text-center py-3 text-green-400 font-bold">1M</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3">Real-time Internet</td>
                                            <td className="text-center py-3">Plugins</td>
                                            <td className="text-center py-3">❌</td>
                                            <td className="text-center py-3 text-green-400 font-bold">✅ Native</td>
                                        </tr>
                                        <tr className="border-b border-white/5">
                                            <td className="py-3">Image Generation</td>
                                            <td className="text-center py-3 text-green-400 font-bold">✅ DALL-E</td>
                                            <td className="text-center py-3">❌</td>
                                            <td className="text-center py-3">✅ Imagen</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3">Price</td>
                                            <td className="text-center py-3">$20/mo</td>
                                            <td className="text-center py-3">$20/mo</td>
                                            <td className="text-center py-3">$19.99/mo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Final Recommendation */}
                        <section className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-green-500/10 border border-purple-500/30">
                            <h2 className="text-2xl font-bold text-white mb-4">🎯 Our Recommendation</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    <strong className="text-orange-400">If you write for a living:</strong> Claude 3.5. The writing quality difference is noticeable. Your content will sound more human.
                                </p>
                                <p>
                                    <strong className="text-green-400">If you code every day:</strong> ChatGPT Plus. The ecosystem of plugins and GPTs makes development faster.
                                </p>
                                <p>
                                    <strong className="text-blue-400">If research is core to your work:</strong> Gemini Advanced. Real-time search and massive context window are game-changers.
                                </p>
                                <p>
                                    <strong className="text-purple-400">If you can only pick one:</strong> Start with ChatGPT Plus—it&apos;s the most versatile. Add Claude when you need better writing.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
