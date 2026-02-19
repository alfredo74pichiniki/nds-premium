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
    noindex?: boolean;
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

        let articles: Article[] = [];
        if (Array.isArray(parsed)) {
            articles = parsed;
        } else if (parsed.articles && Array.isArray(parsed.articles)) {
            articles = parsed.articles;
        }
        // Filter out noindex articles from listings (they still exist for direct URL access)
        const visible = articles.filter(a => !a.noindex);
        console.log("[Articles] Loaded", visible.length, "articles (", articles.length - visible.length, "noindex filtered)");
        return visible;
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
 * Get a single article by slug (includes noindex articles for direct URL access)
 */
export function getArticleBySlug(slug: string): (Article & { content?: string }) | null {
    try {
        // Try individual JSON first
        const articlePath = path.join(process.cwd(), "public", "data", "articles", `${slug}.json`);
        if (fs.existsSync(articlePath)) {
            const data = JSON.parse(fs.readFileSync(articlePath, "utf8"));
            return data;
        }
        // Fallback to index
        const filePath = path.join(process.cwd(), "public", "data", "articles.json");
        const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
        const articles = Array.isArray(parsed) ? parsed : (parsed.articles || []);
        return articles.find((a: Article) => a.slug === slug) || null;
    } catch {
        return null;
    }
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
