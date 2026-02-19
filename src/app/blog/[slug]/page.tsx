import type { Metadata } from "next";
import { getArticleBySlug } from "@/lib/articles";
import BlogArticleClient from "./client";

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

    return {
        title: article?.title || slug,
    };
}

export default async function DynamicBlogPage({ params }: PageProps) {
    const { slug } = await params;
    return <BlogArticleClient slug={slug} />;
}
