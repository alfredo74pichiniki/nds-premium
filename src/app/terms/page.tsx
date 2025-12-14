import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | Nest Digital Studio",
    description: "Terms of Service for Nest Digital Studio - the rules and guidelines for using our website.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm text-blue-400 mb-6">
                            📜 Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-gray-400">
                            Last updated: December 2025
                        </p>
                    </header>

                    {/* Content */}
                    <div className="space-y-10 text-gray-300">
                        {/* Agreement */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                            <p className="leading-relaxed">
                                By accessing and using <strong className="text-white">Nest Digital Studio</strong> (<Link href="https://nestdigitalstudio.com" className="text-[var(--nds-primary)] hover:underline">nestdigitalstudio.com</Link>), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </section>

                        {/* Use License */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                            <p className="leading-relaxed mb-4">
                                Permission is granted to temporarily view the materials on Nest Digital Studio for personal, non-commercial use only. This license does not include:
                            </p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Modifying or copying the materials</li>
                                <li>Using the materials for commercial purposes</li>
                                <li>Attempting to reverse engineer any software on this website</li>
                                <li>Removing any copyright or proprietary notations</li>
                                <li>Transferring the materials to another person</li>
                            </ul>
                        </section>

                        {/* Product Reviews */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Product Reviews & Recommendations</h2>
                            <p className="leading-relaxed mb-4">
                                Our reviews and recommendations are based on research, testing, and analysis conducted by our team. However:
                            </p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>Product specifications and prices may change without notice</li>
                                <li>Individual experiences may vary from our assessments</li>
                                <li>We recommend verifying product details before purchasing</li>
                                <li>Our opinions are our own and do not represent manufacturer endorsements</li>
                            </ul>
                        </section>

                        {/* Affiliate Links */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Affiliate Links & Compensation</h2>
                            <p className="leading-relaxed mb-4">
                                Nest Digital Studio participates in affiliate marketing programs, including:
                            </p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li><strong className="text-white">Amazon Associates Program:</strong> As an Amazon Associate, we earn from qualifying purchases</li>
                                <li><strong className="text-white">Other affiliate networks:</strong> We may receive commissions from other retailers</li>
                            </ul>
                            <p className="leading-relaxed mt-4">
                                This compensation does not affect our editorial independence. We only recommend products we believe provide value to our readers. For more information, see our <Link href="/disclosure" className="text-[var(--nds-primary)] hover:underline">Affiliate Disclosure</Link>.
                            </p>
                        </section>

                        {/* Disclaimer */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer</h2>
                            <p className="leading-relaxed">
                                The materials on Nest Digital Studio are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                            </p>
                        </section>

                        {/* Limitations */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Limitations</h2>
                            <p className="leading-relaxed">
                                In no event shall Nest Digital Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we have been notified of the possibility of such damage.
                            </p>
                        </section>

                        {/* Accuracy */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Accuracy of Materials</h2>
                            <p className="leading-relaxed">
                                The materials appearing on Nest Digital Studio could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current. We may make changes to the materials at any time without notice.
                            </p>
                        </section>

                        {/* Links */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. External Links</h2>
                            <p className="leading-relaxed">
                                We have not reviewed all sites linked to our website and are not responsible for the contents of any linked site. The inclusion of any link does not imply endorsement by Nest Digital Studio. Use of any linked website is at the user&apos;s own risk.
                            </p>
                        </section>

                        {/* Modifications */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Modifications</h2>
                            <p className="leading-relaxed">
                                Nest Digital Studio may revise these Terms of Service at any time without notice. By using this website, you agree to be bound by the current version of these Terms of Service.
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
                            <p className="leading-relaxed">
                                These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have questions about these Terms of Service, please contact us at:
                            </p>
                            <p className="mt-4">
                                <strong className="text-white">Email:</strong>{" "}
                                <a href="mailto:admin@nestdigitalstudio.com" className="text-[var(--nds-primary)] hover:underline">
                                    admin@nestdigitalstudio.com
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
