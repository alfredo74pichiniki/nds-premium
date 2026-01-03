/**
 * SchemaMarkup - SEO JSON-LD Schema Component
 * FASE 3: Schema Markup
 */

import React from "react";
import { ArticleMeta, Product, FAQ } from "@/types/product";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface SchemaMarkupProps {
    article: ArticleMeta;
    url: string;
}

// ═══════════════════════════════════════════════════════════════
// PUBLISHER INFO (constant)
// ═══════════════════════════════════════════════════════════════

const PUBLISHER = {
    "@type": "Organization",
    name: "Nest Digital Studio",
    url: "https://nestdigitalstudio.com",
    logo: {
        "@type": "ImageObject",
        url: "https://nestdigitalstudio.com/logo.png",
        width: 600,
        height: 60,
    },
};

// ═══════════════════════════════════════════════════════════════
// SCHEMA GENERATORS
// ═══════════════════════════════════════════════════════════════

function generateArticleSchema(article: ArticleMeta, url: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        url: url,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        author: {
            "@type": "Person",
            name: article.author.name,
            url: article.author.social.linkedin || article.author.social.twitter,
            jobTitle: article.author.role,
        },
        publisher: PUBLISHER,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
        wordCount: article.wordCount,
        articleSection: article.category,
        inLanguage: "en-US",
    };
}

function generateProductSchema(product: Product) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        brand: {
            "@type": "Brand",
            name: product.brand,
        },
        image: product.image,
        description: product.verdict || `${product.brand} ${product.name}`,
        sku: product.amazonAsin,
        mpn: product.amazonAsin,
        offers: {
            "@type": "Offer",
            url: product.amazonUrl,
            priceCurrency: product.price.currency || "USD",
            price: product.price.current.toFixed(2),
            priceValidUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "Amazon",
            },
        },
        aggregateRating: product.rating.count > 0 ? {
            "@type": "AggregateRating",
            ratingValue: product.rating.score.toFixed(1),
            bestRating: "5",
            worstRating: "1",
            ratingCount: product.rating.count.toString(),
            reviewCount: product.rating.count.toString(),
        } : undefined,
    };
}

function generateReviewSchema(article: ArticleMeta, product: Product) {
    return {
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
            "@type": "Product",
            name: product.name,
            brand: {
                "@type": "Brand",
                name: product.brand,
            },
            image: product.image,
        },
        author: {
            "@type": "Person",
            name: article.author.name,
        },
        reviewRating: {
            "@type": "Rating",
            ratingValue: product.rating.score.toFixed(1),
            bestRating: "5",
            worstRating: "1",
        },
        reviewBody: product.verdict,
        datePublished: article.datePublished,
        publisher: PUBLISHER,
    };
}

function generateFAQSchema(faqs: FAQ[]) {
    if (faqs.length === 0) return null;

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

function generateBreadcrumbSchema(article: ArticleMeta, url: string) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://nestdigitalstudio.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: article.category.charAt(0).toUpperCase() + article.category.slice(1),
                item: `https://nestdigitalstudio.com/${article.category}`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: url,
            },
        ],
    };
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ article, url }) => {
    // Combine all schemas into a graph
    const schemas: object[] = [];

    // Article schema
    schemas.push(generateArticleSchema(article, url));

    // Breadcrumb schema
    schemas.push(generateBreadcrumbSchema(article, url));

    // Product schemas (for each product)
    article.products.forEach((product) => {
        schemas.push(generateProductSchema(product));

        // Review schema for each product
        schemas.push(generateReviewSchema(article, product));
    });

    // FAQ schema
    if (article.faqs.length > 0) {
        const faqSchema = generateFAQSchema(article.faqs);
        if (faqSchema) {
            schemas.push(faqSchema);
        }
    }

    // Combine into graph
    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": schemas,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(combinedSchema, null, 0),
            }}
        />
    );
};

// ═══════════════════════════════════════════════════════════════
// INDIVIDUAL SCHEMA COMPONENTS (for granular use)
// ═══════════════════════════════════════════════════════════════

export const ProductSchemaOnly: React.FC<{ product: Product }> = ({ product }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateProductSchema(product), null, 0),
        }}
    />
);

export const FAQSchemaOnly: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
    const schema = generateFAQSchema(faqs);
    if (!schema) return null;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema, null, 0),
            }}
        />
    );
};

export default SchemaMarkup;
