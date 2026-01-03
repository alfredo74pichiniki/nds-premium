"use client";

/**
 * ProsConsBox - Visual Pros and Cons Display
 * FASE 1.3: Componentes Base
 */

import React from "react";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface ProsConsBoxProps {
    pros: string[];
    cons: string[];
    layout?: "horizontal" | "vertical";
    title?: string;
    className?: string;
    compact?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════════════════════════

const CheckIcon = () => (
    <svg
        className="w-5 h-5 text-green-500 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
        />
    </svg>
);

const XIcon = () => (
    <svg
        className="w-5 h-5 text-red-500 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
        />
    </svg>
);

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const ProsConsBox: React.FC<ProsConsBoxProps> = ({
    pros,
    cons,
    layout = "horizontal",
    title,
    className = "",
    compact = false,
}) => {
    const isHorizontal = layout === "horizontal";

    return (
        <div className={`${className}`}>
            {title && (
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>
            )}

            <div className={`
        grid gap-4
        ${isHorizontal ? "md:grid-cols-2" : "grid-cols-1"}
      `}>
                {/* Pros */}
                <div className={`
          rounded-xl overflow-hidden
          ${compact ? "p-4" : "p-5"}
          bg-gradient-to-br from-green-50 to-emerald-50
          border border-green-100
        `}>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 bg-green-100 rounded-lg">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                        </div>
                        <h5 className="font-semibold text-green-800">What We Like</h5>
                    </div>

                    <ul className="space-y-2">
                        {pros.map((pro, index) => (
                            <li
                                key={index}
                                className={`
                  flex items-start gap-2 
                  ${compact ? "text-sm" : "text-base"}
                  text-green-900
                `}
                            >
                                <CheckIcon />
                                <span>{pro}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cons */}
                <div className={`
          rounded-xl overflow-hidden
          ${compact ? "p-4" : "p-5"}
          bg-gradient-to-br from-red-50 to-rose-50
          border border-red-100
        `}>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 bg-red-100 rounded-lg">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                            </svg>
                        </div>
                        <h5 className="font-semibold text-red-800">What Could Be Better</h5>
                    </div>

                    <ul className="space-y-2">
                        {cons.map((con, index) => (
                            <li
                                key={index}
                                className={`
                  flex items-start gap-2 
                  ${compact ? "text-sm" : "text-base"}
                  text-red-900
                `}
                            >
                                <XIcon />
                                <span>{con}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════
// COMPACT INLINE VERSION
// ═══════════════════════════════════════════════════════════════

interface ProsConsInlineProps {
    pros: string[];
    cons: string[];
    maxItems?: number;
}

export const ProsConsInline: React.FC<ProsConsInlineProps> = ({
    pros,
    cons,
    maxItems = 2,
}) => (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {pros.slice(0, maxItems).map((pro, i) => (
            <span key={`pro-${i}`} className="inline-flex items-center gap-1 text-green-700">
                <CheckIcon />
                <span className="truncate max-w-[150px]">{pro}</span>
            </span>
        ))}
        {cons.slice(0, maxItems).map((con, i) => (
            <span key={`con-${i}`} className="inline-flex items-center gap-1 text-red-600">
                <XIcon />
                <span className="truncate max-w-[150px]">{con}</span>
            </span>
        ))}
    </div>
);

export default ProsConsBox;
