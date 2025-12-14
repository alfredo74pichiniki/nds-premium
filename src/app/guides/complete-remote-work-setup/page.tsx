import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Complete Remote Work Setup Guide 2025: Hardware, Software & Productivity | Nest Digital Studio",
    description: "Everything you need for a professional remote work setup in 2025. From monitors to software, we cover the essential tools for maximum productivity.",
    keywords: "remote work setup guide, home office essentials 2025, work from home equipment, remote work tools, home office guide",
};

export default function RemoteWorkGuidePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Affiliate Disclosure */}
                    <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300">
                        <strong>📋 Disclosure:</strong> This article may contain affiliate links.{" "}
                        <Link href="/disclosure" className="underline hover:text-amber-200">Learn more</Link>
                    </div>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold">Guide</span>
                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">Remote Work</span>
                            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold">Productivity</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            The Complete Remote Work Setup Guide for 2025
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            After 5 years of remote work, here&apos;s the definitive list of hardware, software, and habits that actually impact productivity.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Updated: December 2025</span>
                            <span>•</span>
                            <span>20 min read</span>
                        </div>
                    </header>

                    {/* Table of Contents */}
                    <nav className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h2 className="text-lg font-bold text-white mb-4">📋 Table of Contents</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#hardware" className="hover:text-[var(--nds-primary)]">1. Essential Hardware</a></li>
                            <li><a href="#software" className="hover:text-[var(--nds-primary)]">2. Productivity Software Stack</a></li>
                            <li><a href="#ergonomics" className="hover:text-[var(--nds-primary)]">3. Ergonomics & Health</a></li>
                            <li><a href="#communication" className="hover:text-[var(--nds-primary)]">4. Communication Tools</a></li>
                            <li><a href="#habits" className="hover:text-[var(--nds-primary)]">5. Habits & Routines</a></li>
                            <li><a href="#budgets" className="hover:text-[var(--nds-primary)]">6. Budget Recommendations</a></li>
                        </ul>
                    </nav>

                    {/* Content */}
                    <div className="prose prose-invert prose-lg max-w-none">

                        {/* Hardware Section */}
                        <section id="hardware" className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6">1. 🖥️ Essential Hardware</h2>

                            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Monitor</h3>
                            <p className="text-gray-300 mb-4">
                                A good monitor is the single biggest upgrade for productivity. More screen real estate = less window switching = more focus.
                            </p>
                            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 mb-6">
                                <h4 className="font-bold text-white mb-2">Our Pick: 27&quot; 4K USB-C Monitor</h4>
                                <ul className="text-sm text-gray-300 space-y-1">
                                    <li>✅ 4K resolution for crisp text</li>
                                    <li>✅ 27&quot; is the sweet spot for desk distance</li>
                                    <li>✅ USB-C charges laptop while displaying</li>
                                    <li>✅ Budget: $400-600</li>
                                </ul>
                                <p className="text-xs text-gray-400 mt-3">Top choices: LG 27UP850, Dell U2723QE, BenQ PD2725U</p>
                            </div>

                            <h3 className="text-xl font-semibold text-green-400 mt-8 mb-4">Keyboard & Mouse</h3>
                            <p className="text-gray-300 mb-4">
                                You touch these thousands of times per day. Quality here prevents RSI and increases typing speed.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                                    <h4 className="font-bold text-white mb-2">Mechanical Keyboard</h4>
                                    <p className="text-sm text-gray-300">Tactile feedback, durability, customization</p>
                                    <p className="text-xs text-gray-400 mt-2">Top: Keychron Q1, GMMK Pro</p>
                                </div>
                                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                                    <h4 className="font-bold text-white mb-2">Ergonomic Mouse</h4>
                                    <p className="text-sm text-gray-300">Vertical design prevents wrist strain</p>
                                    <p className="text-xs text-gray-400 mt-2">Top: Logitech MX Vertical, MX Master 3S</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-purple-400 mt-8 mb-4">Audio Setup</h3>
                            <p className="text-gray-300 mb-4">
                                Clear audio on calls = professional perception. Good headphones = deep work blocks.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                                    <h4 className="font-bold text-white mb-2">For Calls</h4>
                                    <p className="text-sm text-gray-300">Noise-canceling headphones with good mics</p>
                                    <p className="text-xs text-gray-400 mt-2">Top: Sony WH-1000XM5, Bose QC Ultra</p>
                                </div>
                                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                                    <h4 className="font-bold text-white mb-2">For Podcasts/Meetings</h4>
                                    <p className="text-sm text-gray-300">USB microphone for studio-quality audio</p>
                                    <p className="text-xs text-gray-400 mt-2">Top: Shure MV7, Blue Yeti X</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-orange-400 mt-8 mb-4">Webcam</h3>
                            <p className="text-gray-300 mb-4">
                                Laptop webcams are universally terrible. A dedicated webcam makes you look professional.
                            </p>
                            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 mb-6">
                                <h4 className="font-bold text-white mb-2">Our Pick: 4K Webcam with Autofocus</h4>
                                <p className="text-sm text-gray-300">Top choices: Elgato Facecam, Logitech Brio</p>
                                <p className="text-xs text-gray-400 mt-2">Budget option: Logitech C920 ($80)</p>
                            </div>
                        </section>

                        {/* Software Section */}
                        <section id="software" className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6">2. 💻 Productivity Software Stack</h2>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-blue-400 mb-2">📝 Note-Taking & Docs</h4>
                                    <p className="text-gray-300 text-sm">Notion (all-in-one), Obsidian (local-first), or Google Docs (collaboration)</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-green-400 mb-2">✅ Task Management</h4>
                                    <p className="text-gray-300 text-sm">Todoist (simple), Linear (dev teams), Asana (big teams)</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-purple-400 mb-2">📅 Calendar & Scheduling</h4>
                                    <p className="text-gray-300 text-sm">Cal.com (open source), Calendly (meetings), Google Calendar</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-orange-400 mb-2">⏱️ Time Tracking</h4>
                                    <p className="text-gray-300 text-sm">Toggl (freelancers), RescueTime (automatic), Clockify (free)</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-pink-400 mb-2">🔒 Password Management</h4>
                                    <p className="text-gray-300 text-sm">1Password (best UX), Bitwarden (free/open source)</p>
                                </div>
                            </div>
                        </section>

                        {/* Ergonomics Section */}
                        <section id="ergonomics" className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6">3. 🪑 Ergonomics & Health</h2>

                            <p className="text-gray-300 mb-6">
                                Your body is your most important tool. Don&apos;t sacrifice long-term health for short-term savings.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Ergonomic Chair</h4>
                                    <p className="text-sm text-gray-300 mb-2">Invest here. Your back will thank you.</p>
                                    <p className="text-xs text-gray-400">Top: Herman Miller Aeron, Secretlab Titan, Autonomous ErgoChair</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Standing Desk</h4>
                                    <p className="text-sm text-gray-300 mb-2">Alternate between sitting and standing.</p>
                                    <p className="text-xs text-gray-400">Top: Uplift V2, Fully Jarvis, FlexiSpot E7</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Desk Lamp</h4>
                                    <p className="text-sm text-gray-300 mb-2">Reduce eye strain with proper lighting.</p>
                                    <p className="text-xs text-gray-400">Top: BenQ ScreenBar, Dyson Lightcycle</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Monitor Arm</h4>
                                    <p className="text-sm text-gray-300 mb-2">Eye-level positioning, desk space saved.</p>
                                    <p className="text-xs text-gray-400">Top: Ergotron LX, Amazon Basics arm</p>
                                </div>
                            </div>
                        </section>

                        {/* Communication Section */}
                        <section id="communication" className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6">4. 💬 Communication Tools</h2>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                                    <h4 className="font-bold text-blue-400 mb-2">Synchronous (Real-Time)</h4>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• <strong>Slack/Discord:</strong> Team chat, quick questions</li>
                                        <li>• <strong>Zoom/Google Meet:</strong> Video calls</li>
                                        <li>• <strong>Loom:</strong> Async video messages</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                                    <h4 className="font-bold text-green-400 mb-2">Asynchronous (Not Real-Time)</h4>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• <strong>Notion:</strong> Documentation, wikis</li>
                                        <li>• <strong>Linear/Asana:</strong> Project updates</li>
                                        <li>• <strong>Email:</strong> External communication</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Habits Section */}
                        <section id="habits" className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6">5. 🧠 Habits & Routines</h2>

                            <p className="text-gray-300 mb-6">
                                Tools mean nothing without the right habits. These made the biggest difference for us:
                            </p>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">🌅 Morning Routine</h4>
                                    <p className="text-sm text-gray-300">Start at the same time daily. No email first thing—do deep work when willpower is highest.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">🍅 Time Blocking</h4>
                                    <p className="text-sm text-gray-300">Use Pomodoro (25/5) or 90-minute blocks. Schedule focus time on your calendar.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">📵 Distraction Blocking</h4>
                                    <p className="text-sm text-gray-300">Use Freedom, Cold Turkey, or Focus app to block distracting sites during work hours.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">🚶 Movement Breaks</h4>
                                    <p className="text-sm text-gray-300">5 min walk every hour. Stretch. Your body isn&apos;t meant to sit 8 hours straight.</p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">🔌 Hard Stop</h4>
                                    <p className="text-sm text-gray-300">Define when work ends. Close the laptop. Remote work easily bleeds into personal time.</p>
                                </div>
                            </div>
                        </section>

                        {/* Budget Section */}
                        <section id="budgets" className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">6. 💰 Budget Recommendations</h2>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                                    <h4 className="font-bold text-yellow-400 mb-2">Starter ($500)</h4>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• 24&quot; 1080p monitor: $150</li>
                                        <li>• Logitech C920 webcam: $80</li>
                                        <li>• Basic mechanical KB: $70</li>
                                        <li>• Good mouse: $50</li>
                                        <li>• Desk lamp: $50</li>
                                        <li>• Cable management: $30</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                                    <h4 className="font-bold text-blue-400 mb-2">Professional ($1,500)</h4>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• 27&quot; 4K monitor: $500</li>
                                        <li>• Sony XM5 headphones: $350</li>
                                        <li>• Premium keyboard: $150</li>
                                        <li>• MX Master 3S: $100</li>
                                        <li>• Good webcam: $150</li>
                                        <li>• Standing desk: $400</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                                    <h4 className="font-bold text-purple-400 mb-2">Premium ($3,000+)</h4>
                                    <ul className="text-sm text-gray-300 space-y-1">
                                        <li>• 32&quot; 4K or dual monitors</li>
                                        <li>• Herman Miller chair</li>
                                        <li>• Shure SM7B + interface</li>
                                        <li>• Elgato Facecam</li>
                                        <li>• Uplift V2 desk</li>
                                        <li>• Premium peripherals</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Final Thoughts */}
                        <section className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30">
                            <h2 className="text-2xl font-bold text-white mb-4">🎯 Final Thoughts</h2>
                            <p className="text-gray-300 leading-relaxed">
                                The best remote setup isn&apos;t about having the most expensive gear—it&apos;s about eliminating friction that slows you down. Start with what causes the most pain: bad chair → back pain. Tiny monitor → eye strain. Laptop keyboard → slow typing.
                            </p>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                Fix those first. Upgrade from there. Your productivity (and your body) will thank you.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
