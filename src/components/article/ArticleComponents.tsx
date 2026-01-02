"use client";
/**
 * Premium Article Components - GOD LEVEL+++++
 * 
 * Custom React components for ReactMarkdown that transform
 * basic markdown into premium visual elements.
 */

import React from "react";
import { ArrowRight, CheckCircle, XCircle, Trophy, Star, ExternalLink } from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// PREMIUM TABLE - Styled comparison tables
// ═══════════════════════════════════════════════════════════════
export function PremiumTable({ children, ...props }: React.ComponentPropsWithoutRef<"table">) {
    return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
            <table
                className="w-full border-collapse"
                {...props}
            >
                {children}
            </table>
        </div>
    );
}

export function PremiumThead({ children, ...props }: React.ComponentPropsWithoutRef<"thead">) {
    return (
        <thead
            className="bg-gradient-to-r from-cyan-500/20 via-purple-500/10 to-cyan-500/20 border-b border-white/10"
            {...props}
        >
            {children}
        </thead>
    );
}

export function PremiumTh({ children, ...props }: React.ComponentPropsWithoutRef<"th">) {
    return (
        <th
            className="px-4 py-4 text-left text-sm font-bold text-white uppercase tracking-wider first:pl-6 last:pr-6"
            {...props}
        >
            {children}
        </th>
    );
}

export function PremiumTbody({ children, ...props }: React.ComponentPropsWithoutRef<"tbody">) {
    return (
        <tbody
            className="divide-y divide-white/5"
            {...props}
        >
            {children}
        </tbody>
    );
}

export function PremiumTr({ children, ...props }: React.ComponentPropsWithoutRef<"tr">) {
    return (
        <tr
            className="hover:bg-white/[0.02] transition-colors"
            {...props}
        >
            {children}
        </tr>
    );
}

export function PremiumTd({ children, ...props }: React.ComponentPropsWithoutRef<"td">) {
    return (
        <td
            className="px-4 py-4 text-sm text-gray-300 first:pl-6 last:pr-6 first:font-medium first:text-white"
            {...props}
        >
            {children}
        </td>
    );
}

// ═══════════════════════════════════════════════════════════════
// PREMIUM HEADINGS - Section headers with style
// ═══════════════════════════════════════════════════════════════
export function PremiumH2({ children, ...props }: React.ComponentPropsWithoutRef<"h2">) {
    const text = String(children);

    // Special styling for verdict/winner headings
    const isVerdict = text.toLowerCase().includes("verdict") ||
        text.toLowerCase().includes("winner") ||
        text.toLowerCase().includes("recommendation");

    if (isVerdict) {
        return (
            <div className="my-10 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
                <h2 className="flex items-center gap-3 text-2xl font-black text-white m-0" {...props}>
                    <Trophy className="w-7 h-7 text-yellow-400" />
                    {children}
                </h2>
            </div>
        );
    }

    return (
        <h2
            className="mt-12 mb-6 text-2xl md:text-3xl font-black text-white border-l-4 border-cyan-500 pl-4"
            {...props}
        >
            {children}
        </h2>
    );
}

export function PremiumH3({ children, ...props }: React.ComponentPropsWithoutRef<"h3">) {
    return (
        <h3
            className="mt-8 mb-4 text-xl font-bold text-white flex items-center gap-2"
            {...props}
        >
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            {children}
        </h3>
    );
}

// ═══════════════════════════════════════════════════════════════
// PREMIUM LISTS - Styled bullet points
// ═══════════════════════════════════════════════════════════════
export function PremiumUl({ children, ...props }: React.ComponentPropsWithoutRef<"ul">) {
    // Check if this is a pros/cons list
    const childrenArray = React.Children.toArray(children);
    const firstChild = childrenArray[0];
    const firstText = firstChild && typeof firstChild === "object" && "props" in firstChild
        ? String((firstChild.props as { children?: unknown }).children || "")
        : "";

    const isPros = firstText.includes("✅") || firstText.toLowerCase().includes("pros");
    const isCons = firstText.includes("❌") || firstText.toLowerCase().includes("cons");

    if (isPros) {
        return (
            <div className="my-6 p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold">
                    <CheckCircle className="w-5 h-5" />
                    Pros
                </div>
                <ul className="space-y-2 list-none pl-0" {...props}>
                    {children}
                </ul>
            </div>
        );
    }

    if (isCons) {
        return (
            <div className="my-6 p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                <div className="flex items-center gap-2 mb-3 text-red-400 font-bold">
                    <XCircle className="w-5 h-5" />
                    Cons
                </div>
                <ul className="space-y-2 list-none pl-0" {...props}>
                    {children}
                </ul>
            </div>
        );
    }

    return (
        <ul className="my-4 space-y-3 list-none pl-0" {...props}>
            {children}
        </ul>
    );
}

export function PremiumLi({ children, ...props }: React.ComponentPropsWithoutRef<"li">) {
    const text = String(children);

    // Style based on emoji
    if (text.startsWith("✅")) {
        return (
            <li className="flex items-start gap-3 text-gray-300" {...props}>
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{text.replace("✅", "").trim()}</span>
            </li>
        );
    }

    if (text.startsWith("❌")) {
        return (
            <li className="flex items-start gap-3 text-gray-300" {...props}>
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span>{text.replace("❌", "").trim()}</span>
            </li>
        );
    }

    if (text.startsWith("⭐") || text.startsWith("🏆")) {
        return (
            <li className="flex items-start gap-3 text-gray-300" {...props}>
                <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0 fill-current" />
                <span>{text.replace(/^[⭐🏆]\s*/, "").trim()}</span>
            </li>
        );
    }

    return (
        <li className="flex items-start gap-3 text-gray-300" {...props}>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <span>{children}</span>
        </li>
    );
}

// ═══════════════════════════════════════════════════════════════
// PREMIUM LINKS - CTA Buttons and styled links
// ═══════════════════════════════════════════════════════════════
export function PremiumLink({ href, children, ...props }: React.ComponentPropsWithoutRef<"a">) {
    const text = String(children);

    // Convert CTA patterns to buttons
    const isCTA = text.includes("CTA:") ||
        text.includes("Try") ||
        text.includes("Get") ||
        text.includes("Start") ||
        text.toLowerCase().includes("free");

    if (isCTA && href) {
        // Clean CTA text
        const cleanText = text
            .replace(/👉\s*CTA:\s*/i, "")
            .replace(/→/g, "")
            .trim();

        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 my-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(0,180,216,0.4)] transition-all hover:scale-105"
                {...props}
            >
                {cleanText}
                <ArrowRight className="w-4 h-4" />
            </a>
        );
    }

    // Regular links with external icon
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
            {...props}
        >
            {children}
            <ExternalLink className="w-3 h-3" />
        </a>
    );
}

// ═══════════════════════════════════════════════════════════════
// PREMIUM PARAGRAPH - Clean text styling
// ═══════════════════════════════════════════════════════════════
export function PremiumP({ children, ...props }: React.ComponentPropsWithoutRef<"p">) {
    const text = String(children);

    // Quick Verdict detection
    if (text.toLowerCase().includes("quick verdict") || text.toLowerCase().includes("our pick")) {
        return (
            <div className="my-6 p-6 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                <p className="text-lg font-medium text-white m-0" {...props}>
                    {children}
                </p>
            </div>
        );
    }

    return (
        <p className="my-4 text-gray-300 leading-relaxed" {...props}>
            {children}
        </p>
    );
}

// ═══════════════════════════════════════════════════════════════
// PREMIUM BLOCKQUOTE - Highlighted quotes
// ═══════════════════════════════════════════════════════════════
export function PremiumBlockquote({ children, ...props }: React.ComponentPropsWithoutRef<"blockquote">) {
    return (
        <blockquote
            className="my-6 p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-l-4 border-cyan-500"
            {...props}
        >
            <div className="text-gray-200 italic">
                {children}
            </div>
        </blockquote>
    );
}

// ═══════════════════════════════════════════════════════════════
// PREMIUM HR - Section separators
// ═══════════════════════════════════════════════════════════════
export function PremiumHr(props: React.ComponentPropsWithoutRef<"hr">) {
    return (
        <div className="my-12 flex items-center gap-4" {...props}>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════
// PREMIUM STRONG - Bold text styling
// ═══════════════════════════════════════════════════════════════
export function PremiumStrong({ children, ...props }: React.ComponentPropsWithoutRef<"strong">) {
    return (
        <strong className="font-bold text-white" {...props}>
            {children}
        </strong>
    );
}

// ═══════════════════════════════════════════════════════════════
// EXPORT ALL COMPONENTS MAP
// ═══════════════════════════════════════════════════════════════
export const premiumComponents = {
    table: PremiumTable,
    thead: PremiumThead,
    th: PremiumTh,
    tbody: PremiumTbody,
    tr: PremiumTr,
    td: PremiumTd,
    h2: PremiumH2,
    h3: PremiumH3,
    ul: PremiumUl,
    li: PremiumLi,
    a: PremiumLink,
    p: PremiumP,
    blockquote: PremiumBlockquote,
    hr: PremiumHr,
    strong: PremiumStrong,
};
