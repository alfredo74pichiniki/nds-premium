import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Password Managers 2025: 1Password vs Bitwarden vs Dashlane | NDS",
    description: "We tested security features, cross-platform sync, and ease of use. Here's which password manager you should trust with your digital life.",
    keywords: "best password manager 2025, 1password review, bitwarden vs 1password, dashlane review, lastpass alternative",
};

export default function PasswordManagersPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300">
                        <strong>📋 Disclosure:</strong> This article contains affiliate links.{" "}
                        <Link href="/disclosure" className="underline hover:text-amber-200">Learn more</Link>
                    </div>

                    <header className="mb-12">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">Software</span>
                            <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-semibold">Security</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Best Password Managers 2025: Security You Can Actually Use
                        </h1>
                        <p className="text-xl text-gray-400 mb-6">
                            After the LastPass breaches, password manager choice matters more than ever. Here's our tested picks.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>December 2025</span>
                            <span>•</span>
                            <span>9 min read</span>
                        </div>
                    </header>

                    <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30">
                        <h2 className="text-lg font-bold text-white mb-4">⚡ Quick Picks</h2>
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-blue-400">Best Overall</h3>
                                    <p className="text-white font-semibold">1Password</p>
                                    <p className="text-xs text-gray-400">Best UX, travel mode, family sharing</p>
                                </div>
                                <a href="https://1password.com/sign-up/" target="_blank" rel="noopener" className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold">$2.99/mo</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-green-400">Best Free</h3>
                                    <p className="text-white font-semibold">Bitwarden</p>
                                    <p className="text-xs text-gray-400">Open source, unlimited free tier</p>
                                </div>
                                <a href="https://bitwarden.com/pricing/" target="_blank" rel="noopener" className="px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold">Free / $10/yr</a>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 flex items-center justify-between flex-wrap gap-4">
                                <div>
                                    <h3 className="font-bold text-purple-400">Best for Business</h3>
                                    <p className="text-white font-semibold">Dashlane</p>
                                    <p className="text-xs text-gray-400">Built-in VPN, dark web monitoring</p>
                                </div>
                                <a href="https://www.dashlane.com/pricing" target="_blank" rel="noopener" className="px-4 py-2 rounded-full bg-purple-500 text-white text-sm font-semibold">$4.99/mo</a>
                            </div>
                        </div>
                    </section>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Why LastPass is No Longer Recommended</h2>
                            <p className="text-gray-300 mb-4">
                                In 2022-2023, LastPass suffered catastrophic breaches. Encrypted vaults were stolen. While technically encrypted, they can be brute-forced if your master password is weak.
                            </p>
                            <p className="text-gray-300 mb-4">
                                <strong className="text-white">If you're still on LastPass, migrate now.</strong> We recommend Bitwarden for free or 1Password for premium.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Feature Comparison</h2>
                            <table className="w-full text-sm mb-6">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400">Feature</th>
                                        <th className="text-center py-3 text-blue-400">1Password</th>
                                        <th className="text-center py-3 text-green-400">Bitwarden</th>
                                        <th className="text-center py-3 text-purple-400">Dashlane</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">Free Tier</td>
                                        <td className="text-center py-3">14-day trial</td>
                                        <td className="text-center py-3 text-green-400">✅ Unlimited</td>
                                        <td className="text-center py-3">1 device</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">Open Source</td>
                                        <td className="text-center py-3">❌</td>
                                        <td className="text-center py-3 text-green-400">✅</td>
                                        <td className="text-center py-3">❌</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">Travel Mode</td>
                                        <td className="text-center py-3 text-blue-400">✅</td>
                                        <td className="text-center py-3">❌</td>
                                        <td className="text-center py-3">❌</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">Built-in VPN</td>
                                        <td className="text-center py-3">❌</td>
                                        <td className="text-center py-3">❌</td>
                                        <td className="text-center py-3 text-purple-400">✅</td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="py-3">Passkeys</td>
                                        <td className="text-center py-3">✅</td>
                                        <td className="text-center py-3">✅</td>
                                        <td className="text-center py-3">✅</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3">Family Plan</td>
                                        <td className="text-center py-3">$4.99/mo (5)</td>
                                        <td className="text-center py-3">$3.33/mo (6)</td>
                                        <td className="text-center py-3">$7.49/mo (6)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Our Recommendations</h2>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                                    <h3 className="font-bold text-blue-400 mb-2">Choose 1Password if:</h3>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>✓ You want the best user experience</li>
                                        <li>✓ You travel internationally (Travel Mode)</li>
                                        <li>✓ You want family/team features</li>
                                        <li>✓ You don't mind paying $3/month</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                                    <h3 className="font-bold text-green-400 mb-2">Choose Bitwarden if:</h3>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>✓ You want free and unlimited</li>
                                        <li>✓ Open source matters to you</li>
                                        <li>✓ You're technical and like control</li>
                                        <li>✓ You're migrating from LastPass</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                                    <h3 className="font-bold text-purple-400 mb-2">Choose Dashlane if:</h3>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>✓ You want built-in VPN</li>
                                        <li>✓ Dark web monitoring is important</li>
                                        <li>✓ You're a business needing compliance</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">🎯 Bottom Line</h2>
                            <p className="text-gray-300">
                                For most people: <strong className="text-blue-400">1Password</strong>. On a budget: <strong className="text-green-400">Bitwarden</strong>. Need extras: <strong className="text-purple-400">Dashlane</strong>. Avoid LastPass.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
