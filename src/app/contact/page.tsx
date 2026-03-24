import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | Nest Digital Studio",
    description: "Get in touch with the Nest Digital Studio editorial team. Questions about reviews, partnerships, or product suggestions welcome.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--nds-primary)]/10 border border-[var(--nds-primary)]/30 text-sm text-[var(--nds-primary)] mb-6">
                            📬 Get in Touch
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Contact{" "}
                            <span className="bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] bg-clip-text text-transparent">
                                Us
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            We&apos;d love to hear from you. Whether you have questions about our reviews, want to suggest a product for testing, or have partnership inquiries — reach out below.
                        </p>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none">
                        {/* Contact Info Cards */}
                        <section className="mb-16">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--nds-primary)]/20 flex items-center justify-center text-2xl">
                                        ✉️
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                                    <a href="mailto:admin@nestdigitalstudio.com" className="text-[var(--nds-primary)] hover:underline text-sm">
                                        admin@nestdigitalstudio.com
                                    </a>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center text-2xl">
                                        📍
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Address</h3>
                                    <p className="text-gray-400 text-sm">
                                        30 N Gould Street, #22815<br />
                                        Sheridan, WY 82801<br />
                                        United States
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl">
                                        ⏱️
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">Response Time</h3>
                                    <p className="text-gray-400 text-sm">
                                        We typically respond within 24-48 hours
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Contact Form */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-10 h-1 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] rounded-full" />
                                Send Us a Message
                            </h2>
                            <ContactForm />
                        </section>

                        {/* Reasons to Reach Out */}
                        <section className="mb-16">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-10 h-1 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] rounded-full" />
                                Reasons to Reach Out
                            </h2>
                            <div className="space-y-3">
                                {[
                                    "Questions about our reviews or methodology",
                                    "Product suggestions for testing",
                                    "Partnership and advertising inquiries",
                                    "Report an error in our content",
                                    "General feedback",
                                ].map((reason) => (
                                    <div key={reason} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                        <span className="text-[var(--nds-primary)]">✓</span>
                                        <span className="text-gray-300">{reason}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Privacy Note */}
                        <section className="p-6 rounded-2xl bg-gradient-to-br from-[var(--nds-primary)]/10 to-[var(--nds-accent)]/10 border border-[var(--nds-primary)]/20 text-center">
                            <p className="text-gray-300 text-sm">
                                Your information is handled in accordance with our{" "}
                                <Link href="/privacy" className="text-[var(--nds-primary)] hover:underline font-semibold">
                                    Privacy Policy
                                </Link>
                                . We never share your data with third parties.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
