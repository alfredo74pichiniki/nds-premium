import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { AIChat } from "@/components/chat/AIChat";
import { Newspaper, Bell } from "lucide-react";

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />
            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                        <Newspaper className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        Tech <span className="gradient-text">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8">
                        News, trends, releases, and insights from the tech world.
                    </p>
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 max-w-md mx-auto">
                        <Bell className="w-12 h-12 mx-auto mb-4 text-[var(--nds-primary)]" />
                        <h2 className="text-xl font-bold mb-2">Coming Soon</h2>
                        <p className="text-gray-400 text-sm">
                            Our editorial team is preparing quality content. Check back soon!
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
            <AIChat />
        </main>
    );
}
