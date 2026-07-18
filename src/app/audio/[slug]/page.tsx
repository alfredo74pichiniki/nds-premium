import type { Metadata } from "next";
import { getArticleBySlug, canonicalPathFor } from "@/lib/articles";
import { notFound, permanentRedirect } from "next/navigation";
import AudioArticleClient from "./client";
import ServerJsonLd from "@/components/seo/ServerJsonLd";

const BASE_URL = "https://nestdigitalstudio.com";
const CATEGORY = "audio";

interface PageProps {
    params: Promise<{ slug: string }>;
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

export default async function DynamicAudioPage({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) notFound();
    const correctPath = canonicalPathFor(article);
    if (correctPath !== `/${CATEGORY}/${slug}`) permanentRedirect(correctPath);
    return (
        <>
            {article && <ServerJsonLd article={article} category={CATEGORY} />}
            <AudioArticleClient slug={slug} />
        </>
    );
}
