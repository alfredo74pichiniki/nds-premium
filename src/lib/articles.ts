import fs from "fs";
import path from "path";

export interface Article {
    slug: string;
    title: string;
    description: string;
    category: string;  // UNA sola categoría por artículo
    articleType: string;
    date: string;
    featured: boolean;
    href: string;
    wordCount?: number;
    score?: number;
}

// URL pública del JSON de artículos - usar para ISR
const ARTICLES_URL = "https://nestdigitalstudio.com/data/articles.json";

/**
 * Carga artículos usando fetch con ISR (Incremental Static Regeneration)
 * Revalida cada 60 segundos para obtener datos actualizados
 */
export async function getArticlesAsync(): Promise<Article[]> {
    try {
        const response = await fetch(ARTICLES_URL, {
            next: { revalidate: 60 } // Revalidar cada 60 segundos
        });

        if (!response.ok) {
            console.error("[Articles] Fetch failed:", response.status);
            return getArticlesFallback();
        }

        const parsed = await response.json();
        console.log("[Articles] Fetched", Array.isArray(parsed) ? parsed.length : (parsed.articles?.length || 0), "articles via ISR");

        if (Array.isArray(parsed)) {
            return parsed;
        } else if (parsed.articles && Array.isArray(parsed.articles)) {
            return parsed.articles;
        }
        return [];
    } catch (error) {
        console.error("[Articles] Fetch error, using fallback:", error);
        return getArticlesFallback();
    }
}

/**
 * Fallback: Lee del filesystem local (solo funciona durante build o desarrollo)
 */
function getArticlesFallback(): Article[] {
    try {
        const filePath = path.join(process.cwd(), "public", "data", "articles.json");
        const fileContents = fs.readFileSync(filePath, "utf8");
        const parsed = JSON.parse(fileContents);
        console.log("[Articles] Fallback loaded", Array.isArray(parsed) ? parsed.length : 0, "articles from filesystem");
        if (Array.isArray(parsed)) {
            return parsed;
        } else if (parsed.articles && Array.isArray(parsed.articles)) {
            return parsed.articles;
        }
        return [];
    } catch (error) {
        console.error("[Articles] Fallback error:", error);
        return [];
    }
}

/**
 * Carga todos los artículos desde articles.json (versión síncrona legacy)
 * @deprecated Usar getArticlesAsync para soporte ISR
 */
export function getArticles(): Article[] {
    try {
        const filePath = path.join(process.cwd(), "public", "data", "articles.json");
        const fileContents = fs.readFileSync(filePath, "utf8");
        const parsed = JSON.parse(fileContents);
        if (Array.isArray(parsed)) {
            return parsed;
        } else if (parsed.articles && Array.isArray(parsed.articles)) {
            return parsed.articles;
        }
        return [];
    } catch (error) {
        console.error("Error loading articles:", error);
        return [];
    }
}

/**
 * Obtiene artículos por categoría EXACTA (versión async con ISR)
 */
export async function getArticlesByCategoryAsync(category: string): Promise<Article[]> {
    const articles = await getArticlesAsync();
    const categoryLower = category.toLowerCase();
    return articles.filter(a => {
        const articleCategory = (a.category || "").toLowerCase();
        return articleCategory === categoryLower;
    });
}

/**
 * Obtiene artículos por categoría EXACTA (versión legacy síncrona)
 */
export function getArticlesByCategory(category: string): Article[] {
    const articles = getArticles();
    const categoryLower = category.toLowerCase();
    return articles.filter(a => {
        const articleCategory = (a.category || "").toLowerCase();
        return articleCategory === categoryLower;
    });
}

/**
 * Obtiene los últimos N artículos (ordenados por fecha) - async con ISR
 */
export async function getLatestArticlesAsync(count: number = 10): Promise<Article[]> {
    const articles = await getArticlesAsync();
    return articles
        .sort((a, b) => {
            const dateA = new Date(a.date || "1970-01-01");
            const dateB = new Date(b.date || "1970-01-01");
            return dateB.getTime() - dateA.getTime();
        })
        .slice(0, count);
}

/**
 * Obtiene los últimos N artículos (ordenados por fecha) - legacy
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

/**
 * Obtiene artículos destacados - async con ISR
 */
export async function getFeaturedArticlesAsync(): Promise<Article[]> {
    const articles = await getArticlesAsync();
    return articles.filter(a => a.featured === true);
}

/**
 * Obtiene artículos destacados - legacy
 */
export function getFeaturedArticles(): Article[] {
    return getArticles().filter(a => a.featured === true);
}

/**
 * Obtiene estadísticas de artículos por categoría - async con ISR
 */
export async function getCategoryStatsAsync(): Promise<Record<string, number>> {
    const articles = await getArticlesAsync();
    const stats: Record<string, number> = {};
    for (const article of articles) {
        const cat = (article.category || "uncategorized").toLowerCase();
        stats[cat] = (stats[cat] || 0) + 1;
    }
    return stats;
}

/**
 * Obtiene estadísticas de artículos por categoría - legacy
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
