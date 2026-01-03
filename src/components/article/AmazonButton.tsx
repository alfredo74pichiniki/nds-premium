"use client";

/**
 * AmazonButton - Premium CTA Button for Amazon Affiliate Links
 * FASE 1.1: Componentes Base
 */

import React from "react";
import { formatPrice, calculateDiscount } from "@/types/product";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface AmazonButtonProps {
    url: string;
    price?: number;
    originalPrice?: number;
    label?: "check_price" | "view_deal" | "buy_now" | "see_on_amazon";
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    showLogo?: boolean;
    trackingId?: string;
}

// ═══════════════════════════════════════════════════════════════
// AMAZON LOGO SVG
// ═══════════════════════════════════════════════════════════════

const AmazonLogo = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 100 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M63.5 22.5c-6.2 4.6-15.3 7-23.1 7-10.9 0-20.8-4-28.3-10.7-.6-.5-.1-1.3.6-.9 8.1 4.7 18 7.5 28.3 7.5 6.9 0 14.6-1.4 21.6-4.4 1.1-.5 2 .7.9 1.5z" />
        <path d="M66.3 19.3c-.8-1-5.2-.5-7.2-.2-.6.1-.7-.5-.2-.9 3.5-2.5 9.3-1.8 10-.9.7.8-.2 6.5-3.5 9.2-.5.4-1 .2-.8-.4.7-1.9 2.5-5.8 1.7-6.8z" />
    </svg>
);

// ═══════════════════════════════════════════════════════════════
// BUTTON LABELS
// ═══════════════════════════════════════════════════════════════

const buttonLabels: Record<string, string> = {
    check_price: "Check Price on Amazon",
    view_deal: "View Deal on Amazon",
    buy_now: "Buy Now on Amazon",
    see_on_amazon: "See on Amazon",
};

// ═══════════════════════════════════════════════════════════════
// SIZE CLASSES
// ═══════════════════════════════════════════════════════════════

const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

const logoSizes = {
    sm: "w-14 h-4",
    md: "w-16 h-5",
    lg: "w-20 h-6",
};

// ═══════════════════════════════════════════════════════════════
// VARIANT STYLES
// ═══════════════════════════════════════════════════════════════

const variantClasses = {
    primary: `
    bg-gradient-to-r from-amber-400 to-amber-500 
    hover:from-amber-500 hover:to-amber-600
    text-gray-900 font-semibold
    shadow-lg shadow-amber-500/25
    hover:shadow-xl hover:shadow-amber-500/30
    border-0
  `,
    secondary: `
    bg-gray-800 hover:bg-gray-700
    text-white font-medium
    border border-gray-600
    shadow-md
  `,
    outline: `
    bg-transparent hover:bg-amber-50
    text-amber-600 hover:text-amber-700
    font-medium
    border-2 border-amber-500
  `,
};

// ═══════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════

export const AmazonButton: React.FC<AmazonButtonProps> = ({
    url,
    price,
    originalPrice,
    label = "check_price",
    size = "md",
    variant = "primary",
    className = "",
    showLogo = true,
    trackingId,
}) => {
    const discount = originalPrice ? calculateDiscount(price || 0, originalPrice) : 0;

    const handleClick = () => {
        // Analytics tracking
        if (typeof window !== "undefined" && trackingId) {
            // Send to analytics
            console.log(`[Analytics] Amazon click: ${trackingId}`);
        }
    };

    return (
        <a
            href={url}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            onClick={handleClick}
            className={`
        inline-flex items-center justify-center gap-2
        rounded-lg
        transition-all duration-200
        transform hover:scale-[1.02] active:scale-[0.98]
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
        >
            {/* Amazon Logo */}
            {showLogo && (
                <AmazonLogo className={`${logoSizes[size]} opacity-80`} />
            )}

            {/* Button Text */}
            <span className="flex items-center gap-2">
                {buttonLabels[label]}

                {/* Price display */}
                {price && (
                    <span className="flex items-center gap-1.5 ml-1">
                        <span className="font-bold">{formatPrice(price)}</span>
                        {originalPrice && originalPrice > price && (
                            <>
                                <span className="text-sm line-through opacity-60">
                                    {formatPrice(originalPrice)}
                                </span>
                                {discount > 0 && (
                                    <span className={`
                    text-xs font-bold px-1.5 py-0.5 rounded
                    ${variant === "primary"
                                            ? "bg-red-500 text-white"
                                            : "bg-green-500 text-white"
                                        }
                  `}>
                                        -{discount}%
                                    </span>
                                )}
                            </>
                        )}
                    </span>
                )}
            </span>

            {/* Arrow icon */}
            <svg
                className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
            </svg>
        </a>
    );
};

// ═══════════════════════════════════════════════════════════════
// COMPACT VERSION (for inline use)
// ═══════════════════════════════════════════════════════════════

interface AmazonButtonCompactProps {
    url: string;
    price?: number;
    className?: string;
}

export const AmazonButtonCompact: React.FC<AmazonButtonCompactProps> = ({
    url,
    price,
    className = "",
}) => (
    <a
        href={url}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className={`
      inline-flex items-center gap-1.5
      text-amber-600 hover:text-amber-700
      font-medium text-sm
      hover:underline
      ${className}
    `}
    >
        {price && <span>{formatPrice(price)}</span>}
        <span>on Amazon</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
    </a>
);

export default AmazonButton;
