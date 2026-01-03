"use client";

/**
 * AuthorBio - E-E-A-T Author Display Component
 * FASE 2.1: E-E-A-T Components
 */

import React from "react";
import { Author } from "@/types/product";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface AuthorBioProps {
    author: Author;
    reviewer?: Author;
    datePublished: string;
    dateModified: string;
    readTime?: number;
    variant?: "header" | "footer" | "compact" | "inline";
    className?: string;
}

// ═══════════════════════════════════════════════════════════════
// SOCIAL ICONS
// ═══════════════════════════════════════════════════════════════

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const WebsiteIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
);

// ═══════════════════════════════════════════════════════════════
// FORMAT DATE
// ═══════════════════════════════════════════════════════════════

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

// ═══════════════════════════════════════════════════════════════
// PLACEHOLDER AVATAR
// ═══════════════════════════════════════════════════════════════

const PlaceholderAvatar = ({ name, className }: { name: string; className?: string }) => {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    return (
        <div
            className={`${className} bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold`}
        >
            {initials}
        </div>
    );
};

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const AuthorBio: React.FC<AuthorBioProps> = ({
    author,
    reviewer,
    datePublished,
    dateModified,
    readTime,
    variant = "header",
    className = "",
}) => {
    const isUpdated = dateModified !== datePublished;

    // Inline variant (minimal)
    if (variant === "inline") {
        return (
            <div className={`inline-flex items-center gap-2 text-sm text-gray-600 ${className}`}>
                <span>By {author.name}</span>
                <span>•</span>
                <span>{formatDate(datePublished)}</span>
                {readTime && (
                    <>
                        <span>•</span>
                        <span>{readTime} min read</span>
                    </>
                )}
            </div>
        );
    }

    // Compact variant
    if (variant === "compact") {
        return (
            <div className={`flex items-center gap-3 ${className}`}>
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    {author.image ? (
                        <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
                    ) : (
                        <PlaceholderAvatar name={author.name} className="w-full h-full text-sm" />
                    )}
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900">{author.name}</p>
                    <p className="text-xs text-gray-500">{formatDate(datePublished)}</p>
                </div>
            </div>
        );
    }

    // Footer variant
    if (variant === "footer") {
        return (
            <div className={`border-t border-gray-200 pt-8 mt-12 ${className}`}>
                <div className="flex flex-col sm:flex-row gap-6">
                    {/* Author avatar */}
                    <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        {author.image ? (
                            <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
                        ) : (
                            <PlaceholderAvatar name={author.name} className="w-full h-full text-xl" />
                        )}
                    </div>

                    {/* Author info */}
                    <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900">
                            Written by {author.name}
                        </h4>
                        <p className="text-sm text-purple-600 font-medium">{author.role}</p>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                            {author.bio}
                        </p>

                        {/* Social links */}
                        <div className="mt-3 flex items-center gap-3">
                            {author.social.twitter && (
                                <a
                                    href={author.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <TwitterIcon className="w-5 h-5" />
                                </a>
                            )}
                            {author.social.linkedin && (
                                <a
                                    href={author.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <LinkedInIcon className="w-5 h-5" />
                                </a>
                            )}
                            {author.social.website && (
                                <a
                                    href={author.social.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <WebsiteIcon className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Header variant (default)
    return (
        <div className={`${className}`}>
            {/* Main author info */}
            <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-purple-100">
                    {author.image ? (
                        <img src={author.image} alt={author.name} className="w-full h-full object-cover" />
                    ) : (
                        <PlaceholderAvatar name={author.name} className="w-full h-full text-lg" />
                    )}
                </div>

                {/* Info */}
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="text-sm text-gray-500">By</span>
                        <a href="#author-footer" className="font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                            {author.name}
                        </a>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-purple-600">{author.role}</span>
                    </div>

                    {/* Meta row */}
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                        {/* Published date */}
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDate(datePublished)}
                        </span>

                        {/* Updated date */}
                        {isUpdated && (
                            <span className="flex items-center gap-1 text-green-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Updated {formatDate(dateModified)}
                            </span>
                        )}

                        {/* Read time */}
                        {readTime && (
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {readTime} min read
                            </span>
                        )}
                    </div>

                    {/* Reviewer badge */}
                    {reviewer && (
                        <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-green-700 font-medium">
                                Reviewed by {reviewer.name}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthorBio;
