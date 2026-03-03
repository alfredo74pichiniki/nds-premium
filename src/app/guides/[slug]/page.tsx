import type { Metadata } from "next";
import { getArticleBySlug } from "@/lib/articles";
import GuidesArticleClient from "./client";

const BASE_URL = "https://nestdigitalstudio.com";
const CATEGORY = "guides";

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
    const canonical = `${BASE_URL}/${CATEGORY}/${slug}`;

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
    return <GuidesArticleClient slug={slug} />;
}
