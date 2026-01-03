"use client";

/**
 * FactCheckBadge & SourcesCited - E-E-A-T Trust Components
 * FASE 2.2-2.3: E-E-A-T Components
 */

import React, { useState } from "react";
import { Source } from "@/types/product";

// ═══════════════════════════════════════════════════════════════
// FACT CHECK BADGE
// ═══════════════════════════════════════════════════════════════

interface FactCheckBadgeProps {
    reviewerName: string;
    date?: string;
    className?: string;
}

export const FactCheckBadge: React.FC<FactCheckBadgeProps> = ({
    reviewerName,
    date,
    className = "",
}) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className={`relative inline-block ${className}`}>
            <button
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full hover:bg-green-100 transition-colors"
            >
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-green-700">
                    Fact-checked by {reviewerName}
                </span>
            </button>

            {/* Tooltip */}
            {showTooltip && (
                <div className="absolute top-full left-0 mt-2 z-50">
                    <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg max-w-xs">
                        <p className="font-medium mb-1">Our Editorial Process</p>
                        <p className="text-gray-300">
                            Every article is fact-checked by our editorial team for accuracy,
                            completeness, and adherence to our quality guidelines.
                        </p>
                        {date && (
                            <p className="mt-2 text-gray-400">Last verified: {date}</p>
                        )}
                        <a
                            href="/about#editorial"
                            className="mt-2 inline-block text-purple-400 hover:text-purple-300"
                        >
                            Learn more →
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════
// SOURCES CITED
// ═══════════════════════════════════════════════════════════════

interface SourcesCitedProps {
    sources: Source[];
    className?: string;
}

export const SourcesCited: React.FC<SourcesCitedProps> = ({
    sources,
    className = "",
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (sources.length === 0) return null;

    return (
        <div className={`border-t border-gray-200 pt-6 mt-8 ${className}`}>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
                <svg
                    className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Sources ({sources.length})</span>
            </button>

            {isExpanded && (
                <div className="mt-4 space-y-3">
                    {sources.map((source, index) => (
                        <div key={index} className="flex items-start gap-3 text-sm">
                            <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-500 font-medium">
                                {index + 1}
                            </span>
                            <div>
                                <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-600 hover:text-purple-700 hover:underline font-medium"
                                >
                                    {source.name}
                                </a>
                                <p className="text-gray-500 text-xs mt-0.5">
                                    Accessed: {new Date(source.accessDate).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                    {source.type && (
                                        <span className="ml-2 px-1.5 py-0.5 bg-gray-100 rounded text-gray-600 capitalize">
                                            {source.type}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════
// PRODUCTS TESTED BADGE
// ═══════════════════════════════════════════════════════════════

interface ProductsTestedBadgeProps {
    count: number;
    category?: string;
    className?: string;
}

export const ProductsTestedBadge: React.FC<ProductsTestedBadgeProps> = ({
    count,
    category,
    className = "",
}) => (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full ${className}`}>
        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
        <span className="text-sm font-medium text-blue-700">
            {count} {category ? `${category} ` : ""}products analyzed
        </span>
    </div>
);

// ═══════════════════════════════════════════════════════════════
// LAST UPDATED BADGE
// ═══════════════════════════════════════════════════════════════

interface LastUpdatedBadgeProps {
    date: string;
    className?: string;
}

export const LastUpdatedBadge: React.FC<LastUpdatedBadgeProps> = ({
    date,
    className = "",
}) => (
    <div className={`inline-flex items-center gap-2 text-sm text-gray-500 ${className}`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>
            Last updated:{" "}
            <time dateTime={date}>
                {new Date(date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })}
            </time>
        </span>
    </div>
);

export default FactCheckBadge;
