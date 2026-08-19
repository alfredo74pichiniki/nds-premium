import fs from "fs";
import path from "path";

export interface Article {
    slug: string;
    title: string;
    description: string;
    category: string;
    articleType: string;
    date: string;
    // ISO 8601. Las escribe security/fechas_reales.py: `datePublishedISO` es `date`
    // convertida, y `updatedAt` es la fecha del ultimo commit que toco el articulo.
    datePublishedISO?: string;
    updatedAt?: string;
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
 * Categorias sin ruta propia -> ruta real. DEBE coincidir con el CAT_MAP de sitemap.ts.
 */
const CAT_MAP: Record<string, string> = { productivity: "software" };

/**
 * Ruta canonica unica de un articulo (category + slug), identica a la logica del sitemap.
 * Evita que el mismo slug se sirva/indexe bajo varias categorias (duplicados: la causa
 * del aviso "Duplicada: el usuario no ha indicado ninguna version canonica" de Search Console).
 */
export function canonicalPathFor(article: Pick<Article, "slug" | "category" | "href">): string {
    if (article.href) return article.href;
    const category = CAT_MAP[article.category] || article.category || "";
    return `/${category}/${article.slug}`;
}

/**
 * Slugs que una categoria debe PRE-RENDERIZAR en el build (generateStaticParams).
 *
 * Por que importa: sin esto cada articulo se renderizaba en el servidor en CADA
 * peticion. Un solo dato mal formado en articles.json (p.ej. schema.isBasedOn como
 * cadena) se convertia en un error 500 servido a Googlebot en vez de en un fallo de
 * build. Asi es como Search Console acabo avisando de "Error de servidor (5xx)".
 * Pre-renderizando, ese fallo revienta el build (visible, antes de publicar) y las
 * paginas se sirven como HTML estatico.
 *
 * Incluye los articulos noindex: siguen siendo accesibles por URL directa.
 */
export function getSlugsForCategory(category: string): string[] {
    try {
        const filePath = path.join(process.cwd(), "public", "data", "articles.json");
        const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
        const all: Article[] = Array.isArray(parsed) ? parsed : (parsed.articles || []);
        const slugs = new Set<string>();
        for (const a of all) {
            if (!a?.slug) continue;
            // Solo su ruta canonica: evita pre-renderizar el mismo articulo bajo
            // varias categorias (que es lo que Google marca como duplicado).
            if (canonicalPathFor(a) === `/${category}/${a.slug}`) slugs.add(a.slug);
        }
        return [...slugs];
    } catch {
        return [];
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
