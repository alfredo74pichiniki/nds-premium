import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Newspaper } from "lucide-react";
import Link from "next/link";

const posts = [
    {
        title: "State of Remote Work 2025: The New Normal Has Evolved",
        description: "Five years after the remote work explosion, here's what actually stuck—and what's coming next.",
        href: "/blog/state-of-remote-work-2025",
        date: "December 2025",
        badge: "Industry Report",
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 mb-6">
                            <Newspaper className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4">
                            NDS <span className="gradient-text">Blog</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Industry insights, trend analysis, and tech news.
                        </p>
                    </div>

                    {/* Posts */}
                    <div className="space-y-6">
                        {posts.map(post => (
                            <Link
                                key={post.href}
                                href={post.href}
                                className="group block p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-block px-2 py-1 rounded-full bg-violet-500/20 text-violet-400 text-xs font-semibold">
                                        {post.badge}
                                    </span>
                                    <span className="text-gray-500 text-sm">{post.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 text-sm">{post.description}</p>
                            </Link>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-center">
                        <h3 className="font-bold text-white mb-2">📫 Stay Updated</h3>
                        <p className="text-gray-400 text-sm">Newsletter coming soon</p>
                    </div>
                </div>
            </section>
            <Footer />
            <AIChat />
        </main>
    );
}
