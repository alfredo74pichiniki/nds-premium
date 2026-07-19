import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { getSecurityClusters, getSecurityCount } from "@/lib/securityHub";

const BASE_URL = "https://nestdigitalstudio.com";
const TITLE = "Security Software Hub 2026: Best VPNs, Antivirus & Password Managers";
const DESC = "Expert-tested reviews and buying guides for the best VPNs, antivirus software, password managers, and privacy tools of 2026.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESC,
    alternates: { canonical: `${BASE_URL}/security` },
    openGraph: {
        title: TITLE,
        description: DESC,
        url: `${BASE_URL}/security`,
        siteName: "Nest Digital Studio",
        type: "website",
    },
    twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function SecurityHubPage() {
    const clusters = getSecurityClusters();
    const total = getSecurityCount();

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Pillar header */}
                    <header className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                            🛡️ Security Hub
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black mb-4">
                            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                Security Software 2026
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">{DESC}</p>
                        <p className="text-sm text-gray-500 mt-4">
                            {total} expert-tested guides across VPNs, antivirus, password managers, and privacy tools.
                        </p>
                    </header>

                    {/* Sub-clusters */}
                    {clusters.map((cluster) => (
                        <section key={cluster.key} className="mb-14">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                                <span aria-hidden>{cluster.emoji}</span>
                                {cluster.label}
                            </h2>
                            <p className="text-gray-400 mb-6">{cluster.blurb}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {cluster.items.map((item) => (
                                    <Link
                                        key={item.slug}
                                        href={item.href}
                                        className="group rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 p-5 transition-all hover:scale-[1.02]"
                                    >
                                        <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>
                                        {item.wordCount > 0 && (
                                            <span className="text-xs text-gray-500 mt-2 inline-block">
                                                {Math.ceil(item.wordCount / 200)} min read
                                            </span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
