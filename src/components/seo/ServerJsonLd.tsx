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
        // Hermes escribe este campo de tres formas distintas: lista (218 articulos),
        // objeto suelto (3) y cadena con una URL (2). Las cadenas rompian la pagina con
        // error 500 y los objetos sueltos se perdian en silencio. Se acepta cualquiera
        // de las tres y se normaliza en normalizarFuentes().
        isBasedOn?: unknown;
    };
}

/** Devuelve SIEMPRE una lista de fuentes, venga como lista, objeto o cadena. */
function normalizarFuentes(valor: unknown): Array<{ name: string; url?: string }> {
    const uno = (v: unknown): { name: string; url?: string } | null => {
        if (typeof v === "string" && v.trim()) {
            const s = v.trim();
            try {
                return { name: new URL(s).hostname.replace(/^www\./, ""), url: s };
            } catch {
                return { name: s };
            }
        }
        if (v && typeof v === "object") {
            const o = v as { name?: unknown; url?: unknown };
            const name = typeof o.name === "string" ? o.name : typeof o.url === "string" ? o.url : null;
            if (!name) return null;
            return { name, url: typeof o.url === "string" ? o.url : undefined };
        }
        return null;
    };
    if (Array.isArray(valor)) return valor.map(uno).filter((x): x is { name: string; url?: string } => !!x);
    const solo = uno(valor);
    return solo ? [solo] : [];
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
        ...(() => {
            const fuentes = normalizarFuentes(article.schema?.isBasedOn);
            return fuentes.length
                ? {
                      isBasedOn: fuentes.map((src) => ({
                          "@type": "WebPage",
                          name: src.name,
                          ...(src.url ? { url: src.url } : {}),
                      })),
                  }
                : {};
        })(),
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
