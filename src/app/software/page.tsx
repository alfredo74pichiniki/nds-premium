import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Briefcase, TrendingUp, Zap, Server, Bot, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featuredArticles = [
    {
        title: "Best Project Management Software 2025: Complete Guide & Honest Comparison",
        description: "Monday.com vs Asana vs Trello vs Notion vs ClickUp. G2 ratings, real pricing, and honest recommendations.",
        href: "/software/best-project-management-tools-2025",
        badge: "Project Management",
        icon: Briefcase,
        gradient: "from-teal-500 to-cyan-500",
    },
    {
        title: "Kinsta vs WP Engine vs SiteGround: The Definitive Hosting Comparison 2025",
        description: "We migrated 5 sites to each platform. Real TTFB data, support response times, and migration pain points.",
        href: "/software/hosting-comparison-2025",
        badge: "Hosting",
        icon: Server,
        gradient: "from-orange-500 to-red-500",
    },
    {
        title: "5 AI Tools That Actually Automate Your Workflow (No Hype)",
        description: "We tested 20+ tools. Most are gimmicks. These 5 delivered measurable ROI.",
        href: "/software/ai-automation-tools-2025",
        badge: "AI Tools",
        icon: Bot,
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "Best CRM Software 2025: HubSpot vs Salesforce vs Pipedrive",
        description: "Pricing that actually makes sense, features you'll use, and the hidden costs nobody mentions.",
        href: "/software/best-crm-2025",
        badge: "CRM",
        icon: TrendingUp,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Best Email Marketing Platforms: Honest Pricing & Feature Breakdown",
        description: "Mailchimp, ConvertKit, Beehiiv, and Klaviyo compared for different business sizes.",
        href: "/software/email-marketing-comparison",
        badge: "Email",
        icon: Zap,
        gradient: "from-green-500 to-emerald-500",
    },
];


const quickPicksData = [
    { category: "Project Management", pick: "Linear", reason: "Best for dev teams", price: "$10/user" },
    { category: "Design", pick: "Figma", reason: "Unmatched collaboration", price: "Free-$15/user" },
    { category: "Notes", pick: "Notion", reason: "Most versatile", price: "$10/user" },
    { category: "Email", pick: "Superhuman", reason: "Fastest inbox", price: "$30/user" },
    { category: "Analytics", pick: "Plausible", reason: "Privacy-first", price: "$9/mo" },
];

export default function SoftwarePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-6">
                            <Briefcase className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-4">
                            Software & <span className="gradient-text">SaaS</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            In-depth reviews, pricing breakdowns, and honest comparisons of the tools that run modern businesses.
                        </p>
                    </div>

                    {/* Featured Articles */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--nds-primary)]"></span>
                            Featured Comparisons
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {featuredArticles.map(article => (
                                <Link
                                    key={article.href}
                                    href={article.href}
                                    className="group block p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-teal-500/30 transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${article.gradient} flex items-center justify-center flex-shrink-0`}>
                                            <article.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <span className="inline-block px-2 py-1 rounded-full bg-teal-500/20 text-teal-400 text-xs font-semibold mb-2">
                                                {article.badge}
                                            </span>
                                            <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors mb-2 line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm line-clamp-2">{article.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Picks */}
                    <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/5 border border-teal-500/20">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <DollarSign className="w-6 h-6 text-teal-400" />
                            Quick Picks by Category
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 text-gray-400 font-medium">Category</th>
                                        <th className="text-left py-3 text-gray-400 font-medium">Our Pick</th>
                                        <th className="text-left py-3 text-gray-400 font-medium">Why</th>
                                        <th className="text-right py-3 text-gray-400 font-medium">Starting Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quickPicksData.map((row, i) => (
                                        <tr key={i} className="border-b border-white/5">
                                            <td className="py-4 text-white font-medium">{row.category}</td>
                                            <td className="py-4 text-teal-400 font-semibold">{row.pick}</td>
                                            <td className="py-4 text-gray-400">{row.reason}</td>
                                            <td className="py-4 text-right text-white">{row.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { name: "Hosting", href: "/software/hosting-comparison-2025" },
                                { name: "AI Tools", href: "/software/ai-automation-tools-2025" },
                                { name: "CRM", href: "/software/best-crm-2025" },
                                { name: "Email Marketing", href: "/software/email-marketing-comparison" },
                            ].map(cat => (
                                <Link
                                    key={cat.name}
                                    href={cat.href}
                                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-colors text-center"
                                >
                                    <span className="text-white font-semibold">{cat.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <AIChat />
        </main>
    );
}
