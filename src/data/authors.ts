/**
 * NDS Premium - Editorial Team Authors Data
 * FASE 0: Arquitectura de Datos
 */

import { Author } from "@/types/product";

// ═══════════════════════════════════════════════════════════════
// EDITORIAL TEAM
// ═══════════════════════════════════════════════════════════════

export const authors: Record<string, Author> = {
    alex_chen: {
        id: "alex_chen",
        name: "Alex Chen",
        role: "Senior Tech Editor",
        bio: "Alex has spent 10+ years covering consumer electronics and technology. Former Best Buy technology consultant with hands-on experience testing over 500 products. Specializes in audio equipment, laptops, and smart home devices.",
        shortBio: "10+ years in tech journalism. 500+ products tested.",
        image: "/authors/alex-chen.jpg",
        social: {
            twitter: "https://twitter.com/alexchen_tech",
            linkedin: "https://linkedin.com/in/alexchen",
        },
        expertise: ["headphones", "audio", "laptops", "smart-home"],
        articlesCount: 127,
    },

    sarah_miller: {
        id: "sarah_miller",
        name: "Sarah Miller",
        role: "Audio Specialist",
        bio: "Professional audio engineer and certified audiophile with 8 years of experience. Sarah reviews headphones, speakers, and audio equipment with technical precision and real-world testing.",
        shortBio: "Audio engineer. 8 years reviewing sound equipment.",
        image: "/authors/sarah-miller.jpg",
        social: {
            twitter: "https://twitter.com/sarahmiller_audio",
            linkedin: "https://linkedin.com/in/sarahmilleraudio",
        },
        expertise: ["headphones", "earbuds", "speakers", "dacs"],
        articlesCount: 89,
    },

    michael_torres: {
        id: "michael_torres",
        name: "Michael Torres",
        role: "Gaming Editor",
        bio: "Competitive esports player turned tech journalist. Michael has tested gaming peripherals for 6 years, from mice and keyboards to monitors and headsets. Former semi-pro CS:GO player.",
        shortBio: "Ex-esports player. 6 years testing gaming gear.",
        image: "/authors/michael-torres.jpg",
        social: {
            twitter: "https://twitter.com/mtorres_gaming",
        },
        expertise: ["gaming-mice", "keyboards", "monitors", "gaming-headsets"],
        articlesCount: 73,
    },

    emily_watson: {
        id: "emily_watson",
        name: "Emily Watson",
        role: "Software & Productivity Editor",
        bio: "Former software developer with expertise in productivity tools and SaaS platforms. Emily brings a technical perspective to software reviews, focusing on real-world workflows and efficiency.",
        shortBio: "Software developer turned reviewer. Productivity expert.",
        image: "/authors/emily-watson.jpg",
        social: {
            twitter: "https://twitter.com/emilywatson_tech",
            linkedin: "https://linkedin.com/in/emilywatsontech",
            website: "https://emilywatson.dev",
        },
        expertise: ["software", "productivity", "vpn", "cloud-storage"],
        articlesCount: 54,
    },

    david_kim: {
        id: "david_kim",
        name: "David Kim",
        role: "Deals & Commerce Editor",
        bio: "Price tracking expert who has saved readers over $2M in deals. David monitors price histories, tracks sales patterns, and identifies genuine discounts from fake markdowns.",
        shortBio: "Deals hunter. $2M+ saved for readers.",
        image: "/authors/david-kim.jpg",
        social: {
            twitter: "https://twitter.com/dealswithdavid",
        },
        expertise: ["deals", "price-tracking", "amazon", "sales"],
        articlesCount: 156,
    },

    // Editorial reviewers (for fact-checking)
    editorial_team: {
        id: "editorial_team",
        name: "NDS Editorial Team",
        role: "Fact-Check Team",
        bio: "Our editorial team verifies all claims, prices, and specifications before publication. Every article undergoes rigorous fact-checking.",
        shortBio: "Independent fact-checking team.",
        image: "/authors/nds-team.jpg",
        social: {},
        expertise: ["fact-checking", "editorial"],
        articlesCount: 0,
    },
};

// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Get author by ID
 */
export function getAuthor(id: string): Author | undefined {
    return authors[id];
}

/**
 * Get author by expertise area
 */
export function getAuthorByExpertise(expertise: string): Author | undefined {
    return Object.values(authors).find(
        (author) => author.expertise?.includes(expertise)
    );
}

/**
 * Get default author for a category
 */
export function getDefaultAuthorForCategory(category: string): Author {
    const categoryMapping: Record<string, string> = {
        audio: "sarah_miller",
        headphones: "sarah_miller",
        earbuds: "sarah_miller",
        gaming: "michael_torres",
        software: "emily_watson",
        guides: "emily_watson",
        deals: "david_kim",
        reviews: "alex_chen",
        blog: "alex_chen",
        outdoor: "alex_chen",
    };

    const authorId = categoryMapping[category] || "alex_chen";
    return authors[authorId];
}

/**
 * Get editorial team for fact-checking
 */
export function getReviewer(): Author {
    return authors.editorial_team;
}
