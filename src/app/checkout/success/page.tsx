import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/home/Footer";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Purchase Complete | Nest Digital Studio",
    description: "Thank you for your purchase from Nest Digital Studio.",
};

type SearchParams = Promise<{ session_id?: string }>;

export default async function CheckoutSuccessPage({
    searchParams,
}: {
    searchParams: SearchParams;
}) {
    const { session_id } = await searchParams;
    const orderRef = session_id ? session_id.slice(-8).toUpperCase() : null;

    return (
        <main className="min-h-screen bg-[#0a0a0a]">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-4xl">
                        ✓
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-white">
                        Payment Received —{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Thank You
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-2">
                        Your order is confirmed.
                    </p>
                    {orderRef && (
                        <p className="text-sm text-gray-500 mb-8 font-mono tracking-wider">
                            Order reference: {orderRef}
                        </p>
                    )}

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8 text-left">
                        <h3 className="text-lg font-bold text-white mb-4">
                            Check your inbox in the next few minutes
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1 font-mono text-sm">01.</span>
                                <span>
                                    A confirmation email from <span className="text-white">Stripe</span> with your payment receipt.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1 font-mono text-sm">02.</span>
                                <span>
                                    A separate email from <span className="text-white">Nest Digital Studio</span> containing your download link for the file you purchased.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-400 mt-1 font-mono text-sm">03.</span>
                                <span>
                                    If you don&apos;t see the delivery email within 10 minutes, check your spam folder — then contact us and we&apos;ll send it manually.
                                </span>
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
                        <a
                            href="mailto:admin@nestdigitalstudio.com"
                            className="text-[var(--nds-primary)] hover:underline"
                        >
                            admin@nestdigitalstudio.com
                        </a>
                        {orderRef && (
                            <>
                                {" "}and mention order <span className="font-mono">{orderRef}</span>.
                            </>
                        )}
                    </p>
                </div>
            </article>

            <Footer />
        </main>
    );
}
