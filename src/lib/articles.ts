import fs from "fs";
import path from "path";

export interface Article {
    slug: string;
    title: string;
    description: string;
    category: string;
    articleType: string;
    date: string;
    featured: boolean;
    href: string;
    wordCount?: number;
    score?: number;
}

/**
 * Carga artículos directamente del filesystem
 * Simple y rápido - funciona perfectamente durante build de Vercel
 */
export function getArticles(): Article[] {
    try {
        const filePath = path.join(process.cwd(), "public", "data", "articles.json");
        const fileContents = fs.readFileSync(filePath, "utf8");
        const parsed = JSON.parse(fileContents);

        if (Array.isArray(parsed)) {
            console.log("[Articles] Loaded", parsed.length, "articles");
            return parsed;
        } else if (parsed.articles && Array.isArray(parsed.articles)) {
            console.log("[Articles] Loaded", parsed.articles.length, "articles");
            return parsed.articles;
        }
        return [];
    } catch (error) {
        console.error("[Articles] Error loading:", error);
        return [];
    }
}

/**
 * Versión async que también lee del filesystem (para compatibilidad)
 */
export async function getArticlesAsync(): Promise<Article[]> {
    return getArticles();
}

/**
 * Obtiene artículos por categoría
 */
export function getArticlesByCategory(category: string): Article[] {
    const articles = getArticles();
    const categoryLower = category.toLowerCase();
    return articles.filter(a => (a.category || "").toLowerCase() === categoryLower);
}

/**
 * Versión async de getArticlesByCategory
 */
export async function getArticlesByCategoryAsync(category: string): Promise<Article[]> {
    return getArticlesByCategory(category);
}

/**
 * Obtiene los últimos N artículos ordenados por fecha
 */
export function getLatestArticles(count: number = 10): Article[] {
    const articles = getArticles();
    return articles
        .sort((a, b) => {
            const dateA = new Date(a.date || "1970-01-01");
            const dateB = new Date(b.date || "1970-01-01");
            return dateB.getTime() - dateA.getTime();
        })
        .slice(0, count);
}

export async function getLatestArticlesAsync(count: number = 10): Promise<Article[]> {
    return getLatestArticles(count);
}

/**
 * Obtiene artículos destacados
 */
export function getFeaturedArticles(): Article[] {
    return getArticles().filter(a => a.featured === true);
}

export async function getFeaturedArticlesAsync(): Promise<Article[]> {
    return getFeaturedArticles();
}

/**
 * Obtiene estadísticas por categoría
 */
export function getCategoryStats(): Record<string, number> {
    const articles = getArticles();
    const stats: Record<string, number> = {};
    for (const article of articles) {
        const cat = (article.category || "uncategorized").toLowerCase();
        stats[cat] = (stats[cat] || 0) + 1;
    }
    return stats;
}

export async function getCategoryStatsAsync(): Promise<Record<string, number>> {
    return getCategoryStats();
}
