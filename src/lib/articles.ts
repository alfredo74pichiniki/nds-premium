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

/**
 * Carga todos los artículos desde articles.json
 */
export function getArticles(): Article[] {
    try {
        const filePath = path.join(process.cwd(), "public", "data", "articles.json");
        console.log("[Articles] Loading from:", filePath);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const parsed = JSON.parse(fileContents);
        console.log("[Articles] Loaded", Array.isArray(parsed) ? parsed.length : (parsed.articles?.length || 0), "articles");
        // Handle both array format and object with "articles" property
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
 * Obtiene artículos por categoría EXACTA (sin matching por keywords)
 * Cada artículo pertenece a UNA sola categoría
 */
export function getArticlesByCategory(category: string): Article[] {
    const articles = getArticles();
    const categoryLower = category.toLowerCase();

    // Filtro estricto: la categoría del artículo debe coincidir exactamente
    return articles.filter(a => {
        const articleCategory = (a.category || "").toLowerCase();
        return articleCategory === categoryLower;
    });
}

/**
 * Obtiene los últimos N artículos (ordenados por fecha)
 */
export function getLatestArticles(count: number = 10): Article[] {
    const articles = getArticles();
    // Ordenar por fecha descendente si tienen fecha
    return articles
        .sort((a, b) => {
            const dateA = new Date(a.date || "1970-01-01");
            const dateB = new Date(b.date || "1970-01-01");
            return dateB.getTime() - dateA.getTime();
        })
        .slice(0, count);
}

/**
 * Obtiene artículos destacados
 */
export function getFeaturedArticles(): Article[] {
    return getArticles().filter(a => a.featured === true);
}

/**
 * Obtiene estadísticas de artículos por categoría
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
