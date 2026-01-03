"use client";

/**
 * RatingDisplay - Visual Star Rating Component
 * FASE 1.2: Componentes Base
 */

import React from "react";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface RatingDisplayProps {
    score: number;           // 4.6
    count?: number;          // 25000
    source?: string;         // "Amazon"
    maxScore?: number;       // 5
    size?: "sm" | "md" | "lg";
    showCount?: boolean;
    showScore?: boolean;
    variant?: "stars" | "numeric" | "both";
    className?: string;
}

interface RatingBreakdownProps {
    breakdown: {
        label: string;
        score: number;
        maxScore?: number;
    }[];
    size?: "sm" | "md";
}

// ═══════════════════════════════════════════════════════════════
// STAR SVG
// ═══════════════════════════════════════════════════════════════

const StarIcon = ({
    filled,
    half,
    size
}: {
    filled: boolean;
    half?: boolean;
    size: string;
}) => (
    <svg
        className={`${size} ${filled ? "text-amber-400" : "text-gray-300"}`}
        fill={filled || half ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        {half ? (
            // Half star using clip path
            <>
                <defs>
                    <clipPath id="half-star">
                        <rect x="0" y="0" width="12" height="24" />
                    </clipPath>
                </defs>
                <path
                    clipPath="url(#half-star)"
                    fill="currentColor"
                    className="text-amber-400"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gray-300"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
            </>
        ) : (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={filled ? 0 : 1.5}
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
        )}
    </svg>
);

// ═══════════════════════════════════════════════════════════════
// SIZE CONFIG
// ═══════════════════════════════════════════════════════════════

const sizeConfig = {
    sm: {
        star: "w-4 h-4",
        text: "text-sm",
        score: "text-base font-semibold",
        gap: "gap-0.5",
    },
    md: {
        star: "w-5 h-5",
        text: "text-sm",
        score: "text-lg font-bold",
        gap: "gap-1",
    },
    lg: {
        star: "w-6 h-6",
        text: "text-base",
        score: "text-2xl font-bold",
        gap: "gap-1.5",
    },
};

// ═══════════════════════════════════════════════════════════════
// RATING COLOR
// ═══════════════════════════════════════════════════════════════

function getRatingColor(score: number, maxScore: number = 5): string {
    const percentage = score / maxScore;
    if (percentage >= 0.8) return "text-green-600";
    if (percentage >= 0.6) return "text-amber-600";
    return "text-red-500";
}

// ═══════════════════════════════════════════════════════════════
// FORMAT COUNT
// ═══════════════════════════════════════════════════════════════

function formatCount(count: number): string {
    if (count >= 1000000) {
        return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
        return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const RatingDisplay: React.FC<RatingDisplayProps> = ({
    score,
    count,
    source = "reviews",
    maxScore = 5,
    size = "md",
    showCount = true,
    showScore = true,
    variant = "both",
    className = "",
}) => {
    const config = sizeConfig[size];
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 >= 0.25 && score % 1 < 0.75;
    const emptyStars = maxScore - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className={`inline-flex items-center ${config.gap} ${className}`}>
            {/* Numeric score */}
            {showScore && (variant === "numeric" || variant === "both") && (
                <span className={`${config.score} ${getRatingColor(score, maxScore)}`}>
                    {score.toFixed(1)}
                </span>
            )}

            {/* Stars */}
            {(variant === "stars" || variant === "both") && (
                <div className={`flex items-center ${config.gap}`}>
                    {/* Full stars */}
                    {Array.from({ length: fullStars }, (_, i) => (
                        <StarIcon key={`full-${i}`} filled size={config.star} />
                    ))}

                    {/* Half star */}
                    {hasHalfStar && <StarIcon filled half size={config.star} />}

                    {/* Empty stars */}
                    {Array.from({ length: emptyStars }, (_, i) => (
                        <StarIcon key={`empty-${i}`} filled={false} size={config.star} />
                    ))}
                </div>
            )}

            {/* Review count */}
            {showCount && count !== undefined && (
                <span className={`${config.text} text-gray-500`}>
                    ({formatCount(count)} {source})
                </span>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════
// LARGE SCORE DISPLAY (for single product reviews)
// ═══════════════════════════════════════════════════════════════

interface LargeScoreProps {
    score: number;
    maxScore?: number;
    label?: string;
}

export const LargeScore: React.FC<LargeScoreProps> = ({
    score,
    maxScore = 10,
    label = "Overall Score",
}) => {
    const percentage = (score / maxScore) * 100;

    return (
        <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
            <span className="text-sm text-gray-500 font-medium mb-2">{label}</span>
            <div className="relative">
                <span className={`text-5xl font-bold ${getRatingColor(score, maxScore)}`}>
                    {score.toFixed(1)}
                </span>
                <span className="text-2xl text-gray-400 font-light">/{maxScore}</span>
            </div>
            {/* Progress ring */}
            <div className="mt-4 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all duration-500 ${percentage >= 80 ? "bg-green-500" :
                            percentage >= 60 ? "bg-amber-500" : "bg-red-500"
                        }`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════
// RATING BREAKDOWN (for detailed product scores)
// ═══════════════════════════════════════════════════════════════

export const RatingBreakdown: React.FC<RatingBreakdownProps> = ({
    breakdown,
    size = "md",
}) => {
    return (
        <div className="space-y-3">
            {breakdown.map((item, index) => {
                const percentage = (item.score / (item.maxScore || 10)) * 100;

                return (
                    <div key={index} className="flex items-center gap-3">
                        <span className={`${size === "sm" ? "text-xs" : "text-sm"} text-gray-600 min-w-[80px]`}>
                            {item.label}
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-300 ${percentage >= 80 ? "bg-green-500" :
                                        percentage >= 60 ? "bg-amber-500" : "bg-red-500"
                                    }`}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                        <span className={`${size === "sm" ? "text-xs" : "text-sm"} font-medium text-gray-700 min-w-[40px] text-right`}>
                            {item.score.toFixed(1)}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default RatingDisplay;
