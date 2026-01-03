"use client";

/**
 * ComparisonTable - Premium Product Comparison Table
 * FASE 1.5: Componentes Base
 */

import React from "react";
import { Product, formatPrice } from "@/types/product";
import { RatingDisplay } from "./RatingDisplay";
import { AmazonButtonCompact } from "./AmazonButton";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface ComparisonTableProps {
    products: Product[];
    features?: string[];
    className?: string;
    highlightWinner?: boolean;
    showAmazonLinks?: boolean;
}

interface FeatureValue {
    value: string | number | boolean;
    isHighlight?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════════════════════════

const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const XIcon = () => (
    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const TrophyIcon = () => (
    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-8.414V11a1 1 0 102 0V7.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 7.586z" clipRule="evenodd" />
    </svg>
);

// ═══════════════════════════════════════════════════════════════
// BADGE LABELS
// ═══════════════════════════════════════════════════════════════

const badgeLabels: Record<string, { text: string; color: string }> = {
    best_overall: { text: "🏆 Winner", color: "bg-amber-100 text-amber-800" },
    best_value: { text: "💰 Best Value", color: "bg-green-100 text-green-800" },
    editors_pick: { text: "⭐ Editor's Pick", color: "bg-purple-100 text-purple-800" },
    budget_pick: { text: "💵 Budget", color: "bg-blue-100 text-blue-800" },
    premium_pick: { text: "👑 Premium", color: "bg-gray-100 text-gray-800" },
    most_popular: { text: "🔥 Popular", color: "bg-red-100 text-red-800" },
};

// ═══════════════════════════════════════════════════════════════
// RENDER VALUE
// ═══════════════════════════════════════════════════════════════

const renderValue = (value: string | number | boolean | undefined) => {
    if (typeof value === "boolean") {
        return value ? <CheckIcon /> : <XIcon />;
    }
    if (value === undefined || value === null || value === "") {
        return <span className="text-gray-400">—</span>;
    }
    return <span>{value}</span>;
};

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
    products,
    features = [],
    className = "",
    highlightWinner = true,
    showAmazonLinks = true,
}) => {
    // Find winner (first product with best_overall badge or highest rating)
    const winnerIndex = products.findIndex(p => p.badge === "best_overall");
    const winnerIdx = winnerIndex >= 0 ? winnerIndex : 0;

    return (
        <div className={`overflow-x-auto -mx-4 sm:mx-0 ${className}`}>
            <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
                    {/* Header */}
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="sticky left-0 z-10 bg-gray-50 px-4 py-4 text-left text-sm font-semibold text-gray-900">
                                Product
                            </th>
                            {products.map((product, index) => (
                                <th
                                    key={product.id}
                                    className={`
                    px-4 py-4 text-center min-w-[160px]
                    ${highlightWinner && index === winnerIdx
                                            ? "bg-amber-50 border-x-2 border-t-2 border-amber-300"
                                            : ""
                                        }
                  `}
                                >
                                    {/* Winner indicator */}
                                    {highlightWinner && index === winnerIdx && (
                                        <div className="flex items-center justify-center gap-1 mb-2">
                                            <TrophyIcon />
                                            <span className="text-xs font-bold text-amber-600 uppercase">Our Pick</span>
                                        </div>
                                    )}

                                    {/* Product image */}
                                    <div className="w-16 h-16 mx-auto mb-2 rounded-lg overflow-hidden bg-white border border-gray-200">
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-contain p-1"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    {/* Product name */}
                                    <div className="text-sm font-semibold text-gray-900 line-clamp-2">
                                        {product.name}
                                    </div>

                                    {/* Badge */}
                                    {product.badge && badgeLabels[product.badge] && (
                                        <span className={`
                      inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium
                      ${badgeLabels[product.badge].color}
                    `}>
                                            {badgeLabels[product.badge].text}
                                        </span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Price Row */}
                        <tr className="hover:bg-gray-50">
                            <td className="sticky left-0 bg-white px-4 py-3 text-sm font-medium text-gray-700">
                                Price
                            </td>
                            {products.map((product, index) => (
                                <td
                                    key={product.id}
                                    className={`
                    px-4 py-3 text-center
                    ${highlightWinner && index === winnerIdx
                                            ? "bg-amber-50/50 border-x-2 border-amber-300"
                                            : ""
                                        }
                  `}
                                >
                                    <span className="text-lg font-bold text-gray-900">
                                        {formatPrice(product.price.current)}
                                    </span>
                                    {product.price.original && product.price.original > product.price.current && (
                                        <span className="block text-xs text-gray-500 line-through">
                                            {formatPrice(product.price.original)}
                                        </span>
                                    )}
                                </td>
                            ))}
                        </tr>

                        {/* Rating Row */}
                        <tr className="hover:bg-gray-50">
                            <td className="sticky left-0 bg-white px-4 py-3 text-sm font-medium text-gray-700">
                                Rating
                            </td>
                            {products.map((product, index) => (
                                <td
                                    key={product.id}
                                    className={`
                    px-4 py-3 text-center
                    ${highlightWinner && index === winnerIdx
                                            ? "bg-amber-50/50 border-x-2 border-amber-300"
                                            : ""
                                        }
                  `}
                                >
                                    <RatingDisplay
                                        score={product.rating.score}
                                        count={product.rating.count}
                                        size="sm"
                                        variant="both"
                                    />
                                </td>
                            ))}
                        </tr>

                        {/* Feature Rows */}
                        {features.map((feature, fIndex) => (
                            <tr key={feature} className={fIndex % 2 === 0 ? "bg-gray-50/50" : "hover:bg-gray-50"}>
                                <td className="sticky left-0 bg-inherit px-4 py-3 text-sm font-medium text-gray-700">
                                    {feature}
                                </td>
                                {products.map((product, index) => {
                                    const value = product.specs?.[feature];
                                    return (
                                        <td
                                            key={product.id}
                                            className={`
                        px-4 py-3 text-center text-sm
                        ${highlightWinner && index === winnerIdx
                                                    ? "bg-amber-50/50 border-x-2 border-amber-300"
                                                    : ""
                                                }
                      `}
                                        >
                                            {renderValue(value)}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}

                        {/* Amazon Links Row */}
                        {showAmazonLinks && (
                            <tr className="bg-gray-50">
                                <td className="sticky left-0 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-700">
                                    Buy Now
                                </td>
                                {products.map((product, index) => (
                                    <td
                                        key={product.id}
                                        className={`
                      px-4 py-4 text-center
                      ${highlightWinner && index === winnerIdx
                                                ? "bg-amber-50 border-x-2 border-b-2 border-amber-300"
                                                : ""
                                            }
                    `}
                                    >
                                        <AmazonButtonCompact
                                            url={product.amazonUrl}
                                            price={product.price.current}
                                        />
                                    </td>
                                ))}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Mobile scroll hint */}
            <p className="mt-2 text-xs text-gray-400 text-center sm:hidden">
                ← Scroll to see all products →
            </p>
        </div>
    );
};

export default ComparisonTable;
