import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Purchase Complete | Nest Digital Studio",
    description: "Thank you for your purchase from Nest Digital Studio.",
};

export default function CheckoutSuccessPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-4xl">
                        ✅
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-white">
                        Thank You for Your{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Purchase!
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8">
                        Your order has been confirmed. Check your email for the download link and receipt.
                    </p>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8 text-left">
                        <h3 className="text-lg font-bold text-white mb-4">What happens next?</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">1.</span>
                                <span>You&apos;ll receive a confirmation email from Stripe with your receipt</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">2.</span>
                                <span>Your download link will be sent to the email you provided at checkout</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1">3.</span>
                                <span>If you don&apos;t receive it within 10 minutes, check your spam folder or contact us</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/products"
                            className="px-6 py-3 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] rounded-xl text-white font-semibold hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] transition-all duration-300"
                        >
                            Browse More Products
                        </Link>
                        <Link
                            href="/"
                            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>

                    <p className="mt-8 text-sm text-gray-500">
                        Need help? Contact us at{" "}
                        <a href="mailto:admin@nestdigitalstudio.com" className="text-[var(--nds-primary)] hover:underline">
                            admin@nestdigitalstudio.com
                        </a>
                    </p>
                </div>
            </article>

            <Footer />
        </main>
    );
}
