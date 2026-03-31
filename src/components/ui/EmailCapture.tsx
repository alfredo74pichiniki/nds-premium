"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Download } from "lucide-react";

export function EmailCapture() {
    const [isVisible, setIsVisible] = useState(true);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        
        // Simulating API request since Mailerlite needs setup by Alfredo
        setTimeout(() => {
            setStatus("success");
            // Optional fallback mailto execution or alerting
            // window.location.href = `mailto:admin@nestdigitalstudio.com?subject=Cheat%20Sheet%20Request&body=${email}`;
            setTimeout(() => setIsVisible(false), 3000);
        }, 1200);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 150 }}
                    animate={{ y: 0 }}
                    exit={{ y: 150 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-0 left-0 w-full z-50 px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none flex justify-center"
                >
                    <div className="pointer-events-auto relative w-full max-w-4xl rounded-2xl border border-[#64FFDA]/20 bg-[#0A192F]/80 backdrop-blur-xl p-4 sm:p-5 shadow-[0_-10px_40px_rgba(10,25,47,0.5)] flex flex-col sm:flex-row items-center justify-between gap-4">
                        
                        {/* Close Button */}
                        <button 
                            onClick={() => setIsVisible(false)}
                            className="absolute -top-3 -right-3 p-1.5 rounded-full bg-[#112240] border border-[#64FFDA]/20 text-gray-400 hover:text-white hover:bg-[#233554] transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="flex items-center gap-4 text-left w-full sm:w-auto">
                            <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#64FFDA]/20 to-[#64FFDA]/5 border border-[#64FFDA]/30">
                                <Download className="w-6 h-6 text-[#64FFDA]" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm sm:text-base">Get our free VPN Comparison Guide</h4>
                                <p className="text-[#8892B0] text-xs sm:text-sm mt-0.5">Download the complete 2026 cheat sheet instantly.</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex items-center w-full sm:w-auto gap-2">
                            <div className="relative flex-1 sm:w-64">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    required
                                    disabled={status !== "idle"}
                                    className="w-full bg-[#112240] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#64FFDA]/50 focus:ring-1 focus:ring-[#64FFDA]/50 transition-all disabled:opacity-50"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status !== "idle"}
                                className="group relative flex h-[42px] items-center justify-center gap-2 rounded-xl bg-[#64FFDA] px-5 font-semibold text-[#0A192F] transition-all hover:bg-[#64FFDA]/90 active:scale-95 disabled:opacity-70 disabled:active:scale-100"
                            >
                                {status === "idle" && (
                                    <>
                                        <span className="text-sm whitespace-nowrap">Get Free Guide</span>
                                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                                {status === "loading" && (
                                    <div className="w-5 h-5 border-2 border-[#0A192F]/30 border-t-[#0A192F] rounded-full animate-spin" />
                                )}
                                {status === "success" && (
                                    <span className="text-sm px-2">Sent!</span>
                                )}
                            </button>
                        </form>
                        
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
