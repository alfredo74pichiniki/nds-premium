import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tech Blog | Expert Reviews & Buying Guides | Nest Digital Studio",
    description: "Expert analysis, in-depth reviews, and the latest tech trends. AI-powered product recommendations across software, gaming, audio, and more.",
    alternates: { canonical: "https://nestdigitalstudio.com/blog" },
    openGraph: {
        title: "Tech Blog | Expert Reviews & Buying Guides | Nest Digital Studio",
        description: "Expert analysis, in-depth reviews, and the latest tech trends. AI-powered product recommendations across software, gaming, audio, and more.",
        url: "https://nestdigitalstudio.com/blog",
        siteName: "Nest Digital Studio",
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
