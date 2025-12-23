/**
 * PageSEO.tsx - Universal SEO Component for any page
 * 
 * Adds Schema.org JSON-LD to pages that don't use ArticleLayout
 * Usage: <PageSEO title="..." category="reviews" slug="best-webcams" products={[...]} />
 */

interface Product {
    name: string;
    price: string;
    rating?: number;
    reviewCount?: number;
}

interface FAQ {
    question: string;
    answer: string;
}

interface PageSEOProps {
    title: string;
    description: string;
    category: string;
    slug: string;
    products?: Product[];
    faqs?: FAQ[];
    datePublished?: string;
    dateModified?: string;
}

// Default FAQs generator
function generateDefaultFAQs(title: string): FAQ[] {
    return [
        { question: `What is the best option for ${title.toLowerCase().replace(/best /g, '')}?`, answer: `Based on our extensive testing and analysis of user reviews, we've identified top recommendations for different use cases and budgets. See our detailed comparison above.` },
        { question: `How do we test and review products?`, answer: `We analyze thousands of verified user reviews, expert opinions from trusted sources, and conduct hands-on testing to provide unbiased recommendations.` },
        { question: `Are these affiliate links?`, answer: `Yes, we earn a commission if you purchase through our links at no extra cost to you. This supports our independent research and doesn't affect our editorial integrity.` },
        { question: `How often is this guide updated?`, answer: `We update our guides regularly to reflect new product releases, price changes, and incorporate the latest user feedback and market developments.` },
        { question: `Can I trust these recommendations?`, answer: `Yes. Our recommendations are based on data-driven analysis using multiple sources including Reddit discussions, YouTube reviews, and verified customer feedback.` }
    ];
}

export function PageSEO({
    title,
    description,
    category,
    slug,
    products = [],
    faqs,
    datePublished = "2025-12-01T00:00:00Z",
    dateModified = "2025-12-21T00:00:00Z"
}: PageSEOProps) {
    const effectiveFaqs = faqs && faqs.length > 0 ? faqs : generateDefaultFAQs(title);
    const canonicalUrl = `https://nestdigitalstudio.com/${category}/${slug}`;

    // Article Schema
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "author": { "@type": "Person", "name": "NDS Expert Team", "url": "https://nestdigitalstudio.com/about" },
        "publisher": { "@type": "Organization", "name": "Nest Digital Studio", "logo": { "@type": "ImageObject", "url": "https://nestdigitalstudio.com/logo.png" } },
        "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl }
    };

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": effectiveFaqs.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nestdigitalstudio.com" },
            { "@type": "ListItem", "position": 2, "name": category.charAt(0).toUpperCase() + category.slice(1), "item": `https://nestdigitalstudio.com/${category}` },
            { "@type": "ListItem", "position": 3, "name": title.substring(0, 50), "item": canonicalUrl }
        ]
    };

    // Products Schema
    const productsSchema = products.map(p => ({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": p.name,
        "aggregateRating": p.rating ? {
            "@type": "AggregateRating",
            "ratingValue": p.rating.toString(),
            "reviewCount": (p.reviewCount || 100).toString(),
            "bestRating": "5"
        } : undefined,
        "offers": {
            "@type": "Offer",
            "price": p.price.replace(/[^0-9.]/g, ''),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        }
    }));

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {productsSchema.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}

// FAQ Section Component (visible on page)
export function FAQSection({ faqs, title }: { faqs?: FAQ[], title: string }) {
    const effectiveFaqs = faqs && faqs.length > 0 ? faqs : generateDefaultFAQs(title);

    return (
        <section className="mb-12 p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-4">
                {effectiveFaqs.map((faq, index) => (
                    <div key={index} className="p-4 rounded-xl bg-white/5">
                        <h3 className="font-bold text-indigo-300 mb-2">{faq.question}</h3>
                        <p className="text-gray-300 text-sm">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PageSEO;
