import type { Metadata } from "next";
import { getArticleBySlug, canonicalPathFor, getArticlesByCategory, getSlugsForCategory } from "@/lib/articles";
import type { Article as PremiumArticle, ArticleListItem } from "@/components/article/PremiumArticlePage";
import { notFound, permanentRedirect } from "next/navigation";
import GuidesArticleClient from "./client";
import ServerJsonLd from "@/components/seo/ServerJsonLd";

const BASE_URL = "https://nestdigitalstudio.com";
const CATEGORY = "guides";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Pre-renderiza en el build todos los articulos de esta categoria (HTML estatico).
// dynamicParams sigue activo: un slug nuevo se sirve igual sin esperar al build.
export async function generateStaticParams() {
    return getSlugsForCategory(CATEGORY).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (article?.noindex) {
        return {
            title: article.title || slug,
            robots: { index: false, follow: false },
        };
    }

    const title = article?.title || slug;
    const description = article?.description || `Expert review and buying guide for ${slug.replace(/-/g, " ")}`;
    const canonical = article ? `${BASE_URL}${canonicalPathFor(article)}` : `${BASE_URL}/${CATEGORY}/${slug}`;

    return {
        title,
        description,
        alternates: { canonical },
        openGraph: {
            title,
            description,
            url: canonical,
            type: "article",
            siteName: "Nest Digital Studio",
            publishedTime: article?.date,
            modifiedTime: article?.date,
            authors: ["Nest Digital Studio"],
            images: [{ url: `/api/og?title=${encodeURIComponent(title)}&category=${encodeURIComponent(CATEGORY)}` }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export default async function DynamicGuidePage({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) notFound();
    const correctPath = canonicalPathFor(article);
    if (correctPath !== `/${CATEGORY}/${slug}`) permanentRedirect(correctPath);
    // Relacionados en el SERVIDOR: enlaces internos visibles en el HTML.
    const related = getArticlesByCategory(CATEGORY).filter((a) => a.slug !== slug).slice(0, 3);
    return (
        <>
            {article && <ServerJsonLd article={article} category={CATEGORY} />}
            <GuidesArticleClient
                slug={slug}
                initialArticle={article as unknown as PremiumArticle}
                initialRelated={related as unknown as ArticleListItem[]}
            />
        </>
    );
}
