"use client";

/**
 * ProductCard - Premium Product Display Card
 * FASE 1.4: Componentes Base
 */

import React, { useState } from "react";
import { Product, getBadgeText, formatPrice, calculateDiscount } from "@/types/product";
import { AmazonButton } from "./AmazonButton";
import { RatingDisplay } from "./RatingDisplay";
import { ProsConsBox, ProsConsInline } from "./ProsConsBox";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface ProductCardProps {
    product: Product;
    rank?: number;
    showProscons?: boolean;
    compact?: boolean;
    className?: string;
    variant?: "full" | "compact" | "minimal";
}

// ═══════════════════════════════════════════════════════════════
// BADGE COLORS
// ═══════════════════════════════════════════════════════════════

const badgeColors = {
    best_overall: "bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900",
    best_value: "bg-gradient-to-r from-green-400 to-emerald-500 text-white",
    editors_pick: "bg-gradient-to-r from-purple-400 to-violet-500 text-white",
    budget_pick: "bg-gradient-to-r from-blue-400 to-cyan-500 text-white",
    premium_pick: "bg-gradient-to-r from-gray-700 to-gray-900 text-white",
    most_popular: "bg-gradient-to-r from-red-400 to-rose-500 text-white",
};

// ═══════════════════════════════════════════════════════════════
// PLACEHOLDER IMAGE
// ═══════════════════════════════════════════════════════════════

const PlaceholderImage = ({ className }: { className?: string }) => (
    <div className={`${className} bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center`}>
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    </div>
);

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const ProductCard: React.FC<ProductCardProps> = ({
    product,
    rank,
    showProscons = true,
    compact = false,
    className = "",
    variant = "full",
}) => {
    const [showAllProscons, setShowAllProscons] = useState(false);
    const discount = calculateDiscount(product.price.current, product.price.original || 0);

    // Minimal variant
    if (variant === "minimal") {
        return (
            <div className={`flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all ${className}`}>
                {/* Image */}
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    {product.image ? (
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                        <PlaceholderImage className="w-full h-full" />
                    )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 truncate">{product.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                        <RatingDisplay score={product.rating.score} size="sm" showCount={false} />
                        <span className="text-sm font-medium text-gray-900">{formatPrice(product.price.current)}</span>
                    </div>
                </div>

                {/* CTA */}
                <AmazonButton url={product.amazonUrl} size="sm" label="see_on_amazon" showLogo={false} />
            </div>
        );
    }

    return (
        <article className={`
      relative bg-white rounded-2xl overflow-hidden
      border border-gray-200 hover:border-gray-300
      shadow-sm hover:shadow-lg
      transition-all duration-300
      ${className}
    `}>
            {/* Rank Badge (if rank provided) */}
            {rank && (
                <div className="absolute top-4 left-4 z-10">
                    <div className={`
            w-10 h-10 rounded-full flex items-center justify-center
            font-bold text-lg
            ${rank === 1
                            ? "bg-gradient-to-br from-amber-400 to-yellow-500 text-gray-900"
                            : "bg-gray-100 text-gray-700"
                        }
          `}>
                        #{rank}
                    </div>
                </div>
            )}

            {/* Product Badge (Best Overall, etc.) */}
            {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                    <span className={`
            px-3 py-1.5 rounded-full text-sm font-semibold
            shadow-md
            ${badgeColors[product.badge]}
          `}>
                        {getBadgeText(product.badge)}
                    </span>
                </div>
            )}

            {/* Discount Badge */}
            {discount > 0 && (
                <div className="absolute top-16 right-4 z-10">
                    <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-md">
                        -{discount}% OFF
                    </span>
                </div>
            )}

            {/* Image Section */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
                    />
                ) : (
                    <PlaceholderImage className="w-full h-full" />
                )}
            </div>

            {/* Content Section */}
            <div className={`${compact ? "p-4" : "p-6"}`}>
                {/* Brand */}
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {product.brand}
                </span>

                {/* Title */}
                <h3 className="mt-1 text-xl font-bold text-gray-900 line-clamp-2">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="mt-3">
                    <RatingDisplay
                        score={product.rating.score}
                        count={product.rating.count}
                        source="Amazon reviews"
                        size="md"
                    />
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(product.price.current)}
                    </span>
                    {product.price.original && product.price.original > product.price.current && (
                        <span className="text-base text-gray-500 line-through">
                            {formatPrice(product.price.original)}
                        </span>
                    )}
                </div>

                {/* Verdict */}
                {product.verdict && (
                    <p className="mt-3 text-sm text-gray-600 italic">
                        &ldquo;{product.verdict}&rdquo;
                    </p>
                )}

                {/* Pros/Cons */}
                {showProscons && product.pros.length > 0 && (
                    <div className="mt-4">
                        {compact || !showAllProscons ? (
                            <>
                                <ProsConsInline pros={product.pros} cons={product.cons} maxItems={2} />
                                {(product.pros.length > 2 || product.cons.length > 2) && (
                                    <button
                                        onClick={() => setShowAllProscons(true)}
                                        className="mt-2 text-sm text-purple-600 hover:text-purple-700 font-medium"
                                    >
                                        See all pros & cons →
                                    </button>
                                )}
                            </>
                        ) : (
                            <>
                                <ProsConsBox pros={product.pros} cons={product.cons} compact />
                                <button
                                    onClick={() => setShowAllProscons(false)}
                                    className="mt-3 text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Show less
                                </button>
                            </>
                        )}
                    </div>
                )}

                {/* Last Price Check */}
                <p className="mt-4 text-xs text-gray-400">
                    Last price check: {new Date(product.price.lastChecked).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </p>

                {/* CTA Button */}
                <div className="mt-5">
                    <AmazonButton
                        url={product.amazonUrl}
                        price={product.price.current}
                        originalPrice={product.price.original}
                        label="check_price"
                        size={compact ? "md" : "lg"}
                        variant="primary"
                        trackingId={product.id}
                        className="w-full"
                    />
                </div>
            </div>
        </article>
    );
};

// ═══════════════════════════════════════════════════════════════
// PRODUCT GRID
// ═══════════════════════════════════════════════════════════════

interface ProductGridProps {
    products: Product[];
    columns?: 1 | 2 | 3;
    showRanks?: boolean;
    compact?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
    products,
    columns = 2,
    showRanks = true,
    compact = false,
}) => (
    <div className={`
    grid gap-6
    ${columns === 1 ? "grid-cols-1" : ""}
    ${columns === 2 ? "grid-cols-1 md:grid-cols-2" : ""}
    ${columns === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""}
  `}>
        {products.map((product, index) => (
            <ProductCard
                key={product.id}
                product={product}
                rank={showRanks ? index + 1 : undefined}
                compact={compact}
            />
        ))}
    </div>
);

export default ProductCard;
