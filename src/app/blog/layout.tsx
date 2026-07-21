import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tech Blog | Expert Reviews & Buying Guides | Nest Digital Studio",
    description: "In-depth reviews, buying guides and analysis across security software, hardware and tech.",
    alternates: { canonical: "https://nestdigitalstudio.com/blog" },
    openGraph: {
        title: "Tech Blog | Expert Reviews & Buying Guides | Nest Digital Studio",
        description: "In-depth reviews, buying guides and analysis across security software, hardware and tech.",
        url: "https://nestdigitalstudio.com/blog",
        siteName: "Nest Digital Studio",
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
