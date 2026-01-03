/**
 * NDS Premium - Product & Article Type Definitions
 * FASE 0: Arquitectura de Datos
 */

// ═══════════════════════════════════════════════════════════════
// PRODUCT TYPES
// ═══════════════════════════════════════════════════════════════

export type ProductBadge =
    | "best_overall"
    | "best_value"
    | "editors_pick"
    | "budget_pick"
    | "premium_pick"
    | "most_popular";

export interface ProductRating {
    score: number;           // 4.6
    count: number;           // 25000
    source: string;          // "Amazon"
    breakdown?: {
        quality: number;
        value: number;
        features: number;
        ease_of_use?: number;
    };
}

export interface ProductPrice {
    current: number;
    original?: number;
    currency: string;        // "USD"
    lastChecked: string;     // ISO date
}

export interface Product {
    id: string;
    name: string;
    brand: string;
    category: string;

    // Amazon integration
    amazonAsin: string;
    amazonUrl: string;
    affiliateTag: string;

    // Pricing
    price: ProductPrice;

    // Ratings
    rating: ProductRating;

    // Editorial content
    pros: string[];
    cons: string[];
    verdict?: string;
    badge?: ProductBadge;

    // Media
    image?: string;
    images?: string[];

    // Specs (flexible key-value)
    specs?: Record<string, string | number | boolean>;
}

// ═══════════════════════════════════════════════════════════════
// AUTHOR TYPES
// ═══════════════════════════════════════════════════════════════

export interface AuthorSocial {
    twitter?: string;
    linkedin?: string;
    website?: string;
}

export interface Author {
    id: string;
    name: string;
    role: string;
    bio: string;
    shortBio?: string;       // For compact displays
    image: string;
    social: AuthorSocial;
    expertise?: string[];    // ["headphones", "audio", "gaming"]
    articlesCount?: number;
}

// ═══════════════════════════════════════════════════════════════
// FAQ TYPES
// ═══════════════════════════════════════════════════════════════

export interface FAQ {
    question: string;
    answer: string;
}

// ═══════════════════════════════════════════════════════════════
// SOURCE CITATION TYPES
// ═══════════════════════════════════════════════════════════════

export interface Source {
    name: string;
    url: string;
    accessDate: string;      // ISO date
    type?: "official" | "review" | "study" | "news";
}

// ═══════════════════════════════════════════════════════════════
// ARTICLE METADATA TYPES
// ═══════════════════════════════════════════════════════════════

export type ArticleType =
    | "comparison"
    | "review"
    | "best_list"
    | "how_to_guide"
    | "news"
    | "deals_roundup"
    | "trend_analysis"
    | "opinion";

export interface ArticleMeta {
    // Basic info
    title: string;
    slug: string;
    description: string;
    category: string;
    articleType: ArticleType;

    // Authors
    author: Author;
    reviewer?: Author;

    // Dates
    datePublished: string;   // ISO date
    dateModified: string;    // ISO date

    // Content metrics
    wordCount: number;
    readTime: number;        // minutes

    // Products featured
    products: Product[];

    // Related content
    relatedArticles: string[];  // slugs

    // SEO/Schema
    faqs: FAQ[];
    sources?: Source[];

    // Flags
    featured?: boolean;
    sponsored?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// SCHEMA.ORG TYPES (for JSON-LD generation)
// ═══════════════════════════════════════════════════════════════

export interface SchemaProduct {
    "@type": "Product";
    name: string;
    image?: string;
    brand: {
        "@type": "Brand";
        name: string;
    };
    offers: {
        "@type": "AggregateOffer";
        priceCurrency: string;
        lowPrice: string;
        highPrice?: string;
        offerCount?: number;
    };
    aggregateRating?: {
        "@type": "AggregateRating";
        ratingValue: string;
        reviewCount: string;
        bestRating?: string;
        worstRating?: string;
    };
}

export interface SchemaReview {
    "@type": "Review";
    author: {
        "@type": "Person";
        name: string;
    };
    reviewRating: {
        "@type": "Rating";
        ratingValue: string;
        bestRating: string;
    };
    itemReviewed: SchemaProduct;
    datePublished: string;
}

export interface SchemaFAQ {
    "@type": "FAQPage";
    mainEntity: {
        "@type": "Question";
        name: string;
        acceptedAnswer: {
            "@type": "Answer";
            text: string;
        };
    }[];
}

export interface SchemaArticle {
    "@type": "Article";
    headline: string;
    description: string;
    image?: string;
    author: {
        "@type": "Person";
        name: string;
        url?: string;
    };
    publisher: {
        "@type": "Organization";
        name: string;
        logo?: {
            "@type": "ImageObject";
            url: string;
        };
    };
    datePublished: string;
    dateModified: string;
}

// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Calculate read time from word count
 */
export function calculateReadTime(wordCount: number): number {
    const wordsPerMinute = 200;
    return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Generate Amazon affiliate URL
 */
export function generateAmazonUrl(asin: string, affiliateTag: string): string {
    return `https://www.amazon.com/dp/${asin}?tag=${affiliateTag}`;
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(current: number, original: number): number {
    if (!original || original <= current) return 0;
    return Math.round(((original - current) / original) * 100);
}

/**
 * Format price for display
 */
export function formatPrice(price: number, currency: string = "USD"): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
    }).format(price);
}

/**
 * Get badge display text
 */
export function getBadgeText(badge: ProductBadge): string {
    const badgeTexts: Record<ProductBadge, string> = {
        best_overall: "🏆 Best Overall",
        best_value: "💰 Best Value",
        editors_pick: "⭐ Editor's Pick",
        budget_pick: "💵 Budget Pick",
        premium_pick: "👑 Premium Pick",
        most_popular: "🔥 Most Popular",
    };
    return badgeTexts[badge] || badge;
}
