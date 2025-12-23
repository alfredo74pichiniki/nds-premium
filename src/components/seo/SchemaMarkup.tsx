/**
 * SchemaMarkup.tsx - God Level+++++ SEO Schema.org Component
 * 
 * Generates JSON-LD Schema.org markup for:
 * - FAQPage (for featured snippets)
 * - Product with AggregateRating
 * - Article with author
 * - BreadcrumbList
 * - Organization (publisher)
 * 
 * Based on SEO/GEO knowledge from NotebookLM research
 */

import Script from 'next/script';

// Types
interface FAQ {
    question: string;
    answer: string;
}

interface Product {
    name: string;
    description: string;
    image: string;
    brand: string;
    rating: number;
    reviewCount: number;
    price: string;
    currency?: string;
    url?: string;
}

interface ArticleData {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author: {
        name: string;
        url?: string;
    };
}

interface Breadcrumb {
    name: string;
    url: string;
}

interface SchemaProps {
    type: 'faq' | 'product' | 'article' | 'breadcrumb' | 'organization' | 'all';
    faqs?: FAQ[];
    product?: Product;
    article?: ArticleData;
    breadcrumbs?: Breadcrumb[];
    products?: Product[];
}

// Organization Schema (site-wide)
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nest Digital Studio",
    "url": "https://nestdigitalstudio.com",
    "logo": "https://nestdigitalstudio.com/logo.png",
    "sameAs": [
        "https://twitter.com/Nest_Digital_St"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "email": "contact@nestdigitalstudio.com",
        "contactType": "customer service"
    }
};

// Generate FAQPage Schema
function generateFAQSchema(faqs: FAQ[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

// Generate Product Schema with AggregateRating
function generateProductSchema(product: Product) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "brand": {
            "@type": "Brand",
            "name": product.brand
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.rating.toString(),
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": product.reviewCount.toString()
        },
        "offers": {
            "@type": "Offer",
            "price": product.price.replace(/[^0-9.]/g, ''),
            "priceCurrency": product.currency || "USD",
            "availability": "https://schema.org/InStock",
            "url": product.url || ""
        }
    };
}

// Generate Article Schema
function generateArticleSchema(article: ArticleData) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.headline,
        "description": article.description,
        "image": article.image,
        "datePublished": article.datePublished,
        "dateModified": article.dateModified || article.datePublished,
        "author": {
            "@type": "Person",
            "name": article.author.name,
            "url": article.author.url || "https://nestdigitalstudio.com/about"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Nest Digital Studio",
            "logo": {
                "@type": "ImageObject",
                "url": "https://nestdigitalstudio.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage"
        }
    };
}

// Generate BreadcrumbList Schema
function generateBreadcrumbSchema(breadcrumbs: Breadcrumb[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url.startsWith('http')
                ? crumb.url
                : `https://nestdigitalstudio.com${crumb.url}`
        }))
    };
}

// Generate Review Schema for affiliate content
function generateReviewSchema(product: Product, author: string = "NDS Expert Team") {
    return {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
            "@type": "Product",
            "name": product.name,
            "image": product.image,
            "brand": {
                "@type": "Brand",
                "name": product.brand
            }
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": product.rating.toString(),
            "bestRating": "5",
            "worstRating": "1"
        },
        "author": {
            "@type": "Person",
            "name": author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Nest Digital Studio"
        }
    };
}

/**
 * SchemaMarkup Component
 * 
 * Usage:
 * <SchemaMarkup 
 *   type="all"
 *   faqs={[{question: "?", answer: "..."}]}
 *   product={{name: "...", ...}}
 *   article={{headline: "...", ...}}
 *   breadcrumbs={[{name: "Home", url: "/"}]}
 * />
 */
export function SchemaMarkup({ type, faqs, product, article, breadcrumbs, products }: SchemaProps) {
    const schemas: object[] = [];

    // Always include Organization
    if (type === 'organization' || type === 'all') {
        schemas.push(organizationSchema);
    }

    // FAQ Schema
    if ((type === 'faq' || type === 'all') && faqs && faqs.length > 0) {
        schemas.push(generateFAQSchema(faqs));
    }

    // Product Schema
    if ((type === 'product' || type === 'all') && product) {
        schemas.push(generateProductSchema(product));
        schemas.push(generateReviewSchema(product));
    }

    // Multiple Products
    if (products && products.length > 0) {
        products.forEach(p => {
            schemas.push(generateProductSchema(p));
        });
    }

    // Article Schema
    if ((type === 'article' || type === 'all') && article) {
        schemas.push(generateArticleSchema(article));
    }

    // Breadcrumb Schema
    if ((type === 'breadcrumb' || type === 'all') && breadcrumbs && breadcrumbs.length > 0) {
        schemas.push(generateBreadcrumbSchema(breadcrumbs));
    }

    if (schemas.length === 0) return null;

    return (
        <>
            {schemas.map((schema, index) => (
                <Script
                    key={index}
                    id={`schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    strategy="afterInteractive"
                />
            ))}
        </>
    );
}

/**
 * Helper: Generate default FAQ for product reviews
 */
export function generateDefaultProductFAQs(productName: string, category: string): FAQ[] {
    return [
        {
            question: `Is ${productName} worth buying in 2025?`,
            answer: `Based on our extensive testing, ${productName} offers excellent value for ${category} users. We evaluated build quality, features, and real-world performance against competitors.`
        },
        {
            question: `What are the main pros and cons of ${productName}?`,
            answer: `Key strengths include quality construction and competitive pricing. Potential drawbacks vary by use case - see our detailed pros/cons section above.`
        },
        {
            question: `How does ${productName} compare to alternatives?`,
            answer: `We've compared ${productName} against top competitors in our detailed comparison section. Key differentiators include price, features, and build quality.`
        },
        {
            question: `Where can I buy ${productName} at the best price?`,
            answer: `We track prices across major retailers. Currently, the best deals are available through our affiliate links above, which support our testing at no extra cost to you.`
        },
        {
            question: `Does ${productName} come with a warranty?`,
            answer: `Warranty coverage varies by seller and region. We recommend purchasing through authorized retailers to ensure full warranty protection.`
        }
    ];
}

export default SchemaMarkup;
