/**
 * Breadcrumbs - Navigation Breadcrumbs with Schema
 * FASE 4.3: Layout Components
 */

import React from "react";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

// ═══════════════════════════════════════════════════════════════
// HOME ICON
// ═══════════════════════════════════════════════════════════════

const HomeIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
);

// ═══════════════════════════════════════════════════════════════
// CHEVRON ICON
// ═══════════════════════════════════════════════════════════════

const ChevronIcon = () => (
    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
);

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    items,
    className = "",
}) => {
    // Generate schema data
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: item.href.startsWith("http") ? item.href : `https://nestdigitalstudio.com${item.href}`,
        })),
    };

    return (
        <>
            {/* Schema markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData),
                }}
            />

            {/* Breadcrumb navigation */}
            <nav
                className={`flex items-center ${className}`}
                aria-label="Breadcrumb"
            >
                <ol className="flex items-center flex-wrap gap-1">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;
                        const isFirst = index === 0;

                        return (
                            <li key={item.href} className="flex items-center">
                                {/* Separator (except for first item) */}
                                {!isFirst && (
                                    <ChevronIcon />
                                )}

                                {/* Breadcrumb link or text */}
                                {isLast ? (
                                    <span
                                        className="text-sm text-gray-500 font-medium truncate max-w-[200px]"
                                        aria-current="page"
                                    >
                                        {item.label}
                                    </span>
                                ) : (
                                    <a
                                        href={item.href}
                                        className={`
                      text-sm text-gray-600 hover:text-purple-600 transition-colors
                      flex items-center gap-1
                    `}
                                    >
                                        {isFirst && <HomeIcon />}
                                        <span className={isFirst ? "sr-only sm:not-sr-only" : ""}>
                                            {item.label}
                                        </span>
                                    </a>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
};

// ═══════════════════════════════════════════════════════════════
// HELPER: Generate breadcrumbs from article data
// ═══════════════════════════════════════════════════════════════

export function generateBreadcrumbs(
    category: string,
    title: string,
    slug: string
): BreadcrumbItem[] {
    return [
        { label: "Home", href: "/" },
        {
            label: category.charAt(0).toUpperCase() + category.slice(1),
            href: `/${category}`
        },
        { label: title, href: `/${category}/${slug}` },
    ];
}

export default Breadcrumbs;
