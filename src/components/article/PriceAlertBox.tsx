"use client";

/**
 * PriceAlertBox - Price Drop Alert Component
 * FASE 5.2: Rich Content
 */

import React from "react";
import { formatPrice } from "@/types/product";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface PriceAlertBoxProps {
    currentPrice: number;
    averagePrice: number;
    lowestPrice?: number;
    lowestDate?: string;
    productName?: string;
    className?: string;
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const PriceAlertBox: React.FC<PriceAlertBoxProps> = ({
    currentPrice,
    averagePrice,
    lowestPrice,
    lowestDate,
    productName,
    className = "",
}) => {
    const priceDiff = averagePrice - currentPrice;
    const isGoodDeal = currentPrice < averagePrice;
    const percentOff = isGoodDeal ? Math.round((priceDiff / averagePrice) * 100) : 0;
    const isAtLowest = lowestPrice && currentPrice <= lowestPrice;

    if (!isGoodDeal) return null;

    return (
        <div className={`
      relative overflow-hidden rounded-xl border-2
      ${isAtLowest
                ? "border-green-400 bg-gradient-to-r from-green-50 to-emerald-50"
                : "border-amber-400 bg-gradient-to-r from-amber-50 to-yellow-50"
            }
      ${className}
    `}>
            {/* Badge */}
            <div className={`
        absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white
        ${isAtLowest ? "bg-green-500" : "bg-amber-500"}
      `}>
                {isAtLowest ? "🎉 LOWEST EVER" : "💰 PRICE DROP"}
            </div>

            <div className="p-5 pt-8">
                {/* Main message */}
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{isAtLowest ? "🎉" : "💰"}</span>
                    <div>
                        <p className={`text-lg font-bold ${isAtLowest ? "text-green-700" : "text-amber-700"}`}>
                            {isAtLowest
                                ? "This is the lowest price we've ever seen!"
                                : `${percentOff}% below average price!`
                            }
                        </p>
                        {productName && (
                            <p className="text-sm text-gray-600">for {productName}</p>
                        )}
                    </div>
                </div>

                {/* Price comparison */}
                <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Current</p>
                        <p className={`text-xl font-bold ${isAtLowest ? "text-green-600" : "text-amber-600"}`}>
                            {formatPrice(currentPrice)}
                        </p>
                    </div>
                    <div className="text-center border-x border-gray-200">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Average</p>
                        <p className="text-xl font-medium text-gray-600 line-through decoration-2">
                            {formatPrice(averagePrice)}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">You Save</p>
                        <p className="text-xl font-bold text-green-600">
                            {formatPrice(priceDiff)}
                        </p>
                    </div>
                </div>

                {/* Historical lowest */}
                {lowestPrice && lowestDate && !isAtLowest && (
                    <p className="mt-3 text-xs text-gray-500 text-center">
                        Lowest ever: {formatPrice(lowestPrice)} on {lowestDate}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PriceAlertBox;
