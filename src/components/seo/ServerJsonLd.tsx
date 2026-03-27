/**
 * Server-side JSON-LD injection for Google Search Console.
 * This component renders structured data (Article + FAQPage schema)
 * directly in the server HTML so Googlebot sees it without executing JS.
 */

interface FAQ {
    question: string;
    answer: string;
}

interface ArticleData {
    title?: string;
    slug?: string;
    date?: string;
    author?: string;
    authorBio?: string;
    description?: string;
    category?: string;
    wordCount?: number;
    faqSchema?: {
        mainEntity?: Array<{
            name: string;
            acceptedAnswer: { text: string };
        }>;
    };
    faq?: FAQ[];
    schema?: {
        isBasedOn?: Array<{ name: string }>;
    };
}

export default function ServerJsonLd({
    article,
    category,
    baseUrl = "https://nestdigitalstudio.com",
}: {
    article: ArticleData;
    category: string;
    baseUrl?: string;
}) {
    if (!article) return null;

    const canonical = `${baseUrl}/${category}/${article.slug}`;

    // Extract FAQs (same priority as client component)
    let faqs: FAQ[] = [];
    if (article.faqSchema?.mainEntity?.length) {
        faqs = article.faqSchema.mainEntity.map((item) => ({
            question: item.name,
            answer: item.acceptedAnswer.text,
        }));
    } else if (article.faq?.length) {
        faqs = article.faq;
    }

    // Build the @graph array
    const graph: Record<string, unknown>[] = [];

    // 1. Article schema
    graph.push({
        "@type": "Article",
        headline: article.title,
        datePublished: article.date,
        dateModified: article.date,
        author: {
            "@type": "Organization",
            name: "Nest Digital Studio",
            url: baseUrl,
        },
        publisher: {
            "@type": "Organization",
            name: "Nest Digital Studio",
            url: baseUrl,
            logo: {
                "@type": "ImageObject",
                url: `${baseUrl}/og-image.png`,
            },
        },
        description:
            article.description ||
            `Expert review and buying guide for ${(article.slug || "").replace(/-/g, " ")}`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonical,
        },
        wordCount: article.wordCount,
        ...(article.schema?.isBasedOn?.length
            ? {
                  isBasedOn: article.schema.isBasedOn.map((src) => ({
                      "@type": "WebPage",
                      name: src.name,
                  })),
              }
            : {}),
    });

    // 2. FAQPage schema (critical for Rich Snippets)
    if (faqs.length > 0) {
        graph.push({
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        });
    }

    // 3. BreadcrumbList schema
    graph.push({
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: baseUrl,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: category.charAt(0).toUpperCase() + category.slice(1),
                item: `${baseUrl}/${category}`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: canonical,
            },
        ],
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": graph,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
