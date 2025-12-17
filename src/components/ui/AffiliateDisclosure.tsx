"use client";

import { Info } from "lucide-react";
import Link from "next/link";

interface AffiliateDisclosureProps {
    variant?: "banner" | "inline" | "prominent";
}

/**
 * Affiliate Disclosure Component
 * 
 * COMPLIANCE: Must be displayed "above the fold" (visible without scrolling)
 * on any page containing affiliate links per FTC and platform requirements.
 * 
 * - Awin/Impact: Requires visible, clear disclosure
 * - Amazon Associates: Requires affiliate disclosure
 * - FTC: Requires material connection disclosure
 */
export function AffiliateDisclosure({ variant = "banner" }: AffiliateDisclosureProps) {
    if (variant === "inline") {
        return (
            <p className="text-sm text-gray-400 italic">
                <Info className="inline w-4 h-4 mr-1 text-blue-400" />
                This article contains affiliate links. We may earn a commission at no extra cost to you.{" "}
                <Link href="/disclosure" className="text-blue-400 hover:underline">
                    Learn more
                </Link>
            </p>
        );
    }

    if (variant === "prominent") {
        return (
            <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-2xl p-5 mb-8">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-2xl shrink-0">
                        📋
                    </div>
                    <div>
                        <h4 className="font-bold text-amber-300 mb-2">Affiliate Disclosure</h4>
                        <p className="text-sm text-gray-200 leading-relaxed">
                            Our reviews are <strong className="text-white">independent and unbiased</strong>.
                            If you make a purchase through our links, we may earn a commission at no extra cost to you.
                            This helps fund our research and allows us to keep our content free.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-3 text-xs">
                            <Link
                                href="/disclosure"
                                className="px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition-colors"
                            >
                                Full Disclosure →
                            </Link>
                            <Link
                                href="/methodology"
                                className="px-3 py-1.5 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-colors"
                            >
                                Our Methodology →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Banner variant (default) - above the fold, visible
    return (
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                    <p className="text-sm text-gray-200">
                        <strong className="text-white">Affiliate Disclosure:</strong>{" "}
                        Some links in this article are affiliate links. If you make a purchase through these links,
                        we may earn a small commission at no additional cost to you. This helps support our research
                        and allows us to continue providing in-depth, unbiased reviews.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <Link
                            href="/disclosure"
                            className="text-xs text-blue-400 hover:text-blue-300 hover:underline"
                        >
                            Full Disclosure →
                        </Link>
                        <Link
                            href="/methodology"
                            className="text-xs text-gray-400 hover:text-gray-300 hover:underline"
                        >
                            Our Methodology →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

