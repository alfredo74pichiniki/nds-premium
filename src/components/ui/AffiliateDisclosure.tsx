"use client";

import { Info } from "lucide-react";
import Link from "next/link";

interface AffiliateDisclosureProps {
    variant?: "banner" | "inline";
}

/**
 * Affiliate Disclosure Component
 * 
 * COMPLIANCE: Must be displayed "above the fold" (visible without scrolling)
 * on any page containing affiliate links per FTC and platform requirements.
 * 
 * - Rakuten: Requires visible, clear disclosure
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

    // Banner variant - above the fold, highly visible
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
                    <Link
                        href="/disclosure"
                        className="text-xs text-blue-400 hover:text-blue-300 hover:underline mt-2 inline-block"
                    >
                        Read our full Advertiser Disclosure →
                    </Link>
                </div>
            </div>
        </div>
    );
}
