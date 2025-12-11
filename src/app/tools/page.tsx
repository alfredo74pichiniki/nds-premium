import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Wrench } from "lucide-react";
import Link from "next/link";

const tools = [
    {
        title: "Productivity Stack Calculator",
        description: "See how much your SaaS subscriptions really cost. Build your stack and find alternatives.",
        href: "/tools/productivity-stack-calculator",
        badge: "Interactive",
        icon: "🧮",
    },
];

export default function ToolsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-6">
                            <Wrench className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            Free <span className="gradient-text">Tools</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Interactive calculators and utilities to help you make smarter decisions.
                        </p>
                    </div>

                    {/* Tools */}
                    <div className="grid gap-6">
                        {tools.map(tool => (
                            <Link
                                key={tool.href}
                                href={tool.href}
                                className="group block p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 hover:border-emerald-500/50 transition-all"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="text-5xl">{tool.icon}</div>
                                    <div>
                                        <span className="inline-block px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
                                            {tool.badge}
                                        </span>
                                        <h2 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                                            {tool.title}
                                        </h2>
                                        <p className="text-gray-400">{tool.description}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Coming Soon */}
                    <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                        <h3 className="font-bold text-white mb-2">More Tools Coming</h3>
                        <p className="text-gray-400 text-sm">We're building comparison calculators, ROI tools, and more.</p>
                    </div>
                </div>
            </section>
            <Footer />
            <AIChat />
        </main>
    );
}
