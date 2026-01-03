"use client";

/**
 * TableOfContents - Sticky TOC with Scroll Spy
 * FASE 4.1: Layout Components
 */

import React, { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    headings: TOCItem[];
    className?: string;
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const TableOfContents: React.FC<TableOfContentsProps> = ({
    headings,
    className = "",
}) => {
    const [activeId, setActiveId] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    // Scroll spy effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0% -35% 0%",
                threshold: 0,
            }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [headings]);

    // Scroll to heading
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsOpen(false);
        }
    };

    if (headings.length === 0) return null;

    return (
        <>
            {/* Desktop sidebar */}
            <nav
                className={`hidden lg:block ${className}`}
                aria-label="Table of contents"
            >
                <div className="sticky top-24">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">
                        On this page
                    </h4>
                    <ul className="space-y-2 border-l-2 border-gray-100">
                        {headings.map((heading) => (
                            <li key={heading.id}>
                                <button
                                    onClick={() => scrollTo(heading.id)}
                                    className={`
                    block w-full text-left text-sm transition-all duration-200
                    ${heading.level === 2 ? "pl-4" : "pl-6"}
                    ${activeId === heading.id
                                            ? "text-purple-600 font-medium border-l-2 border-purple-600 -ml-[2px]"
                                            : "text-gray-500 hover:text-gray-900"
                                        }
                  `}
                                >
                                    {heading.text}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile drawer toggle */}
            <div className="lg:hidden fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span className="text-sm font-medium">Contents</span>
                </button>
            </div>

            {/* Mobile drawer */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="lg:hidden fixed inset-0 bg-black/50 z-50"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 max-h-[70vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-100">
                            <div className="flex items-center justify-between">
                                <h4 className="text-lg font-semibold text-gray-900">
                                    On this page
                                </h4>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <ul className="px-6 py-4 space-y-3">
                            {headings.map((heading) => (
                                <li key={heading.id}>
                                    <button
                                        onClick={() => scrollTo(heading.id)}
                                        className={`
                      block w-full text-left py-2 transition-colors
                      ${heading.level === 2 ? "text-base font-medium" : "text-sm pl-4"}
                      ${activeId === heading.id
                                                ? "text-purple-600"
                                                : "text-gray-600"
                                            }
                    `}
                                    >
                                        {heading.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

export default TableOfContents;
