"use client";

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { useState } from "react";
import Link from "next/link";

const tools = [
    { name: "Notion", category: "Notes/Docs", priceMonthly: 10, essential: true },
    { name: "Slack", category: "Communication", priceMonthly: 8.75, essential: true },
    { name: "Zoom", category: "Video", priceMonthly: 15.99, essential: false },
    { name: "GitHub", category: "Dev", priceMonthly: 4, essential: false },
    { name: "Figma", category: "Design", priceMonthly: 15, essential: false },
    { name: "Linear", category: "Project Mgmt", priceMonthly: 10, essential: false },
    { name: "Loom", category: "Video", priceMonthly: 15, essential: false },
    { name: "Grammarly", category: "Writing", priceMonthly: 12, essential: false },
    { name: "1Password", category: "Security", priceMonthly: 3, essential: true },
    { name: "Superhuman", category: "Email", priceMonthly: 30, essential: false },
];

export default function ProductivityCalculatorPage() {
    const [selected, setSelected] = useState<string[]>(["Notion", "Slack", "1Password"]);

    const toggle = (name: string) => {
        setSelected(prev =>
            prev.includes(name)
                ? prev.filter(n => n !== name)
                : [...prev, name]
        );
    };

    const total = tools
        .filter(t => selected.includes(t.name))
        .reduce((sum, t) => sum + t.priceMonthly, 0);

    const annual = total * 12;

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <div className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--nds-primary)]/10 border border-[var(--nds-primary)]/30 text-sm text-[var(--nds-primary)] mb-6">
                            🔧 Interactive Tool
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Productivity Stack Calculator
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            See how much your SaaS subscriptions really cost. Build your stack and find alternatives.
                        </p>
                    </header>

                    {/* Calculator */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {/* Tool Selection */}
                        <div className="md:col-span-2 space-y-3">
                            <h2 className="text-lg font-bold text-white mb-4">Select Your Tools</h2>
                            {tools.map(tool => (
                                <button
                                    key={tool.name}
                                    onClick={() => toggle(tool.name)}
                                    className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all ${selected.includes(tool.name)
                                            ? 'bg-[var(--nds-primary)]/10 border-[var(--nds-primary)]/50'
                                            : 'bg-white/5 border-white/10 hover:border-white/20'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${selected.includes(tool.name)
                                                ? 'bg-[var(--nds-primary)] border-[var(--nds-primary)]'
                                                : 'border-gray-500'
                                            }`}>
                                            {selected.includes(tool.name) && (
                                                <span className="text-white text-xs">✓</span>
                                            )}
                                        </div>
                                        <div className="text-left">
                                            <p className="font-semibold text-white">{tool.name}</p>
                                            <p className="text-xs text-gray-400">{tool.category}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-white">${tool.priceMonthly}</p>
                                        <p className="text-xs text-gray-500">/month</p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--nds-primary)]/10 to-[var(--nds-accent)]/10 border border-[var(--nds-primary)]/30 sticky top-24">
                                <h3 className="text-lg font-bold text-white mb-4">Your Stack</h3>

                                <div className="space-y-2 mb-6">
                                    {selected.map(name => {
                                        const tool = tools.find(t => t.name === name);
                                        return tool ? (
                                            <div key={name} className="flex justify-between text-sm">
                                                <span className="text-gray-400">{name}</span>
                                                <span className="text-white">${tool.priceMonthly}</span>
                                            </div>
                                        ) : null;
                                    })}
                                </div>

                                <div className="border-t border-white/10 pt-4 space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Monthly</span>
                                        <span className="text-2xl font-black text-white">${total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Annual</span>
                                        <span className="text-lg font-bold text-[var(--nds-primary)]">${annual.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="mt-6 p-3 rounded-xl bg-white/5 text-center">
                                    <p className="text-xs text-gray-400">
                                        {selected.length} tools selected
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-sm text-gray-400 mb-2">💡 Tip</p>
                                <p className="text-xs text-gray-500">
                                    Many tools offer free tiers or annual discounts up to 20%. Check our <Link href="/deals" className="text-[var(--nds-primary)] hover:underline">deals</Link> page.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Related */}
                    <section className="border-t border-white/10 pt-8">
                        <h3 className="text-lg font-bold text-white mb-4">Related Guides</h3>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/software/ai-automation-tools-2025" className="px-4 py-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm">
                                Best AI Tools 2025
                            </Link>
                            <Link href="/software/hosting-comparison-2025" className="px-4 py-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm">
                                Best Hosting 2025
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
