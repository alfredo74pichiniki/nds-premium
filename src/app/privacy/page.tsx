import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Nest Digital Studio",
    description: "Privacy Policy for Nest Digital Studio - how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm text-purple-400 mb-6">
                            🔒 Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-gray-400">
                            Last updated: December 2025
                        </p>
                    </header>

                    {/* Content */}
                    <div className="space-y-10 text-gray-300">
                        {/* Intro */}
                        <section>
                            <p className="leading-relaxed">
                                At <strong className="text-white">Nest Digital Studio</strong> ("we," "us," or "our"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
                                <a href="https://nestdigitalstudio.com" className="text-[var(--nds-primary)] hover:underline">nestdigitalstudio.com</a>.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Automatically Collected Information</h3>
                            <p className="leading-relaxed mb-4">
                                When you visit our website, we may automatically collect certain information, including:
                            </p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>IP address and approximate location</li>
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Pages visited and time spent on pages</li>
                                <li>Referring website or source</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Information You Provide</h3>
                            <p className="leading-relaxed">
                                If you subscribe to our newsletter or contact us, we may collect your email address and any information you voluntarily provide.
                            </p>
                        </section>

                        {/* How We Use */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                            <p className="leading-relaxed mb-4">We use the information we collect to:</p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Operate and maintain our website</li>
                                <li>Improve user experience and content</li>
                                <li>Analyze website traffic and usage patterns</li>
                                <li>Send newsletters (with your consent)</li>
                                <li>Respond to inquiries and support requests</li>
                            </ul>
                        </section>

                        {/* Cookies */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Cookies and Tracking</h2>
                            <p className="leading-relaxed mb-4">
                                We use cookies and similar tracking technologies to:
                            </p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li><strong className="text-white">Essential cookies:</strong> Required for website functionality</li>
                                <li><strong className="text-white">Analytics cookies:</strong> Help us understand how visitors use our site (e.g., Google Analytics)</li>
                                <li><strong className="text-white">Affiliate cookies:</strong> Track referrals to our affiliate partners</li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                You can control cookies through your browser settings. Note that disabling cookies may affect your experience on our website.
                            </p>
                        </section>

                        {/* Third Parties */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
                            <p className="leading-relaxed mb-4">
                                We may use third-party services that collect information, including:
                            </p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li><strong className="text-white">Google Analytics:</strong> Website traffic analysis</li>
                                <li><strong className="text-white">Amazon Associates:</strong> Affiliate tracking</li>
                                <li><strong className="text-white">Other affiliate networks:</strong> Rakuten, Impact, ShareASale, etc.</li>
                                <li><strong className="text-white">Vercel:</strong> Website hosting</li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                Each third-party service has its own privacy policy governing the use of your information.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                            <p className="leading-relaxed mb-4">
                                Depending on your location, you may have the right to:
                            </p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Access your personal data</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Lodge a complaint with a data protection authority</li>
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
                            <p className="leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your personal data. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* Children */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Children's Privacy</h2>
                            <p className="leading-relaxed">
                                Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13.
                            </p>
                        </section>

                        {/* Changes */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
                            <p className="leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page with an updated "Last updated" date.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">9. Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="mt-4">
                                <strong className="text-white">Email:</strong>{" "}
                                <a href="mailto:contact@nestdigitalstudio.com" className="text-[var(--nds-primary)] hover:underline">
                                    contact@nestdigitalstudio.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
