/**
 * ExpertQuote - Styled Expert Quote Block
 * FASE 5.3: Rich Content
 */

import React from "react";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface ExpertQuoteProps {
    quote: string;
    author: string;
    title: string;
    source?: string;
    sourceUrl?: string;
    image?: string;
    className?: string;
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const ExpertQuote: React.FC<ExpertQuoteProps> = ({
    quote,
    author,
    title,
    source,
    sourceUrl,
    image,
    className = "",
}) => {
    return (
        <figure className={`
      relative p-6 rounded-2xl 
      bg-gradient-to-br from-purple-50 to-indigo-50
      border border-purple-100
      ${className}
    `}>
            {/* Quote mark */}
            <div className="absolute top-4 left-4 text-6xl text-purple-200 font-serif leading-none select-none">
                &ldquo;
            </div>

            {/* Quote text */}
            <blockquote className="relative z-10 pt-6 pl-2">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                    {quote}
                </p>
            </blockquote>

            {/* Attribution */}
            <figcaption className="mt-6 flex items-center gap-4">
                {/* Avatar */}
                {image ? (
                    <img
                        src={image}
                        alt={author}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-white"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                        {author.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                )}

                {/* Info */}
                <div>
                    <p className="font-semibold text-gray-900">{author}</p>
                    <p className="text-sm text-gray-600">{title}</p>
                    {source && (
                        <p className="text-xs text-gray-500 mt-0.5">
                            {sourceUrl ? (
                                <a
                                    href={sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-purple-600 hover:underline"
                                >
                                    via {source} →
                                </a>
                            ) : (
                                <>via {source}</>
                            )}
                        </p>
                    )}
                </div>
            </figcaption>
        </figure>
    );
};

// ═══════════════════════════════════════════════════════════════
// CALLOUT BOX (for editor notes, tips, warnings)
// ═══════════════════════════════════════════════════════════════

interface CalloutBoxProps {
    type: "tip" | "warning" | "note" | "important";
    title?: string;
    children: React.ReactNode;
    className?: string;
}

const calloutStyles = {
    tip: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "💡",
        titleColor: "text-green-800",
        textColor: "text-green-700",
    },
    warning: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        icon: "⚠️",
        titleColor: "text-amber-800",
        textColor: "text-amber-700",
    },
    note: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "ℹ️",
        titleColor: "text-blue-800",
        textColor: "text-blue-700",
    },
    important: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "⭐",
        titleColor: "text-purple-800",
        textColor: "text-purple-700",
    },
};

export const CalloutBox: React.FC<CalloutBoxProps> = ({
    type,
    title,
    children,
    className = "",
}) => {
    const styles = calloutStyles[type];

    return (
        <div className={`
      ${styles.bg} ${styles.border} border rounded-xl p-5
      ${className}
    `}>
            <div className="flex gap-3">
                <span className="text-xl flex-shrink-0">{styles.icon}</span>
                <div>
                    {title && (
                        <p className={`font-semibold ${styles.titleColor} mb-1`}>
                            {title}
                        </p>
                    )}
                    <div className={`text-sm ${styles.textColor} leading-relaxed`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertQuote;
