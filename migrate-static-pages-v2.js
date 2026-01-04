/**
 * MIGRACIÓN MEJORADA - EXTRACCIÓN DE CONTENIDO REAL
 * Ejecutar: node migrate-static-pages-v2.js
 */

const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(__dirname, "src/app");
const ARTICLES_DIR = path.join(__dirname, "public/data/articles");
const INDEX_FILE = path.join(__dirname, "public/data/articles.json");

const CATEGORIES = ["reviews", "gaming", "software", "guides", "deals"];

function extractArticleLayoutData(content) {
    // Extraer title
    const titleMatch = content.match(/title=["']([^"']+)["']/);
    const title = titleMatch ? titleMatch[1] : null;

    // Extraer subtitle
    const subtitleMatch = content.match(/subtitle=["']([^"']+)["']/);
    const subtitle = subtitleMatch ? subtitleMatch[1] : "";

    // Extraer intro
    const introMatch = content.match(/intro=["']([^"']+)["']/);
    const intro = introMatch ? introMatch[1] : "";

    // Extraer author
    const authorMatch = content.match(/author=["']([^"']+)["']/);
    const author = authorMatch ? authorMatch[1] : "NDS Research Team";

    // Extraer date
    const dateMatch = content.match(/date=["']([^"']+)["']/);
    const date = dateMatch ? dateMatch[1] : "December 25, 2025";

    // Extraer readTime
    const readTimeMatch = content.match(/readTime=["']([^"']+)["']/);
    const readTime = readTimeMatch ? readTimeMatch[1] : "5 min read";

    // Extraer products array
    const productsMatch = content.match(/products=\{(\[[\s\S]*?\])\}/);
    let products = [];
    if (productsMatch) {
        try {
            // Limpiar y parsear el array de productos
            let productsStr = productsMatch[1]
                .replace(/(\w+):/g, '"$1":')  // Convert keys to quoted
                .replace(/'/g, '"')           // Single quotes to double
                .replace(/,\s*}/g, '}')       // Remove trailing commas
                .replace(/,\s*]/g, ']');      // Remove trailing commas in arrays
            products = JSON.parse(productsStr);
        } catch (e) {
            // Si falla el parse, extraer manualmente los nombres de productos
            const productNames = content.matchAll(/name:\s*["']([^"']+)["']/g);
            for (const match of productNames) {
                products.push({ name: match[1] });
            }
        }
    }

    return { title, subtitle, intro, author, date, readTime, products };
}

function extractMetadata(content) {
    const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
    const descMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/);
    return {
        metaTitle: titleMatch ? titleMatch[1].split("|")[0].trim() : null,
        metaDescription: descMatch ? descMatch[1] : null,
    };
}

function buildMarkdownContent(data) {
    let md = `# ${data.title}\n\n`;

    if (data.subtitle) {
        md += `*${data.subtitle}*\n\n`;
    }

    md += `---\n\n`;
    md += `📋 **Affiliate Disclosure:** This article contains affiliate links. We earn a commission on qualifying purchases.\n\n`;
    md += `**Author:** ${data.author} | **Updated:** ${data.date} | **Read Time:** ${data.readTime}\n\n`;
    md += `---\n\n`;

    if (data.intro) {
        md += `## Introduction\n\n${data.intro}\n\n`;
    }

    if (data.products && data.products.length > 0) {
        md += `## Our Top Picks\n\n`;

        data.products.forEach((product, index) => {
            md += `### ${index + 1}. ${product.name}\n\n`;

            if (product.badge) {
                md += `🏆 **${product.badge}**\n\n`;
            }

            if (product.rating) {
                md += `⭐ Rating: ${product.rating}/5`;
                if (product.reviewCount) {
                    md += ` (${product.reviewCount.toLocaleString()} reviews)`;
                }
                md += `\n\n`;
            }

            if (product.price) {
                md += `💰 Price: ${product.price}\n\n`;
            }

            if (product.pros && product.pros.length > 0) {
                md += `**Pros:**\n`;
                product.pros.forEach(pro => {
                    md += `- ✅ ${pro}\n`;
                });
                md += `\n`;
            }

            if (product.cons && product.cons.length > 0) {
                md += `**Cons:**\n`;
                product.cons.forEach(con => {
                    md += `- ❌ ${con}\n`;
                });
                md += `\n`;
            }

            if (product.verdict) {
                md += `**Verdict:** ${product.verdict}\n\n`;
            }

            if (product.amazonLink) {
                md += `[👉 Check Price on Amazon](${product.amazonLink})\n\n`;
            }

            md += `---\n\n`;
        });
    }

    md += `## Conclusion\n\n`;
    md += `We hope this guide helps you find the perfect product for your needs. All products were tested by our research team.\n\n`;
    md += `*Last Updated: ${data.date}*\n`;

    return md;
}

function processStaticFolder(category, folderName) {
    const folderPath = path.join(APP_DIR, category, folderName);
    const pagePath = path.join(folderPath, "page.tsx");

    if (folderName === "[slug]" || !fs.existsSync(pagePath)) {
        return null;
    }

    console.log(`📄 Procesando: ${category}/${folderName}`);

    try {
        const content = fs.readFileSync(pagePath, "utf-8");

        // Verificar si usa ArticleLayout
        const usesArticleLayout = content.includes("ArticleLayout");

        let articleData;
        let markdownContent;

        if (usesArticleLayout) {
            articleData = extractArticleLayoutData(content);
            markdownContent = buildMarkdownContent(articleData);
        } else {
            // Fallback para páginas con formato diferente
            const metadata = extractMetadata(content);
            articleData = {
                title: metadata.metaTitle || folderName.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
                subtitle: metadata.metaDescription || "",
                intro: "",
                author: "NDS Research Team",
                date: "December 25, 2025",
                readTime: "5 min read",
                products: []
            };

            // Extraer h1, h2, p del contenido JSX original
            const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
            const h2Matches = [...content.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)];
            const pMatches = [...content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];

            markdownContent = `# ${articleData.title}\n\n`;
            markdownContent += `---\n\n📋 **Affiliate Disclosure:** This article contains affiliate links.\n\n`;

            h2Matches.forEach(match => {
                const text = match[1].replace(/<[^>]+>/g, "").trim();
                if (text && !text.includes("className")) {
                    markdownContent += `## ${text}\n\n`;
                }
            });

            pMatches.slice(0, 5).forEach(match => {
                const text = match[1].replace(/<[^>]+>/g, "").trim();
                if (text && text.length > 20 && !text.includes("className")) {
                    markdownContent += `${text}\n\n`;
                }
            });

            markdownContent += `*Last Updated: December 2025*\n`;
        }

        const wordCount = markdownContent.split(/\s+/).length;

        const article = {
            slug: folderName,
            title: articleData.title,
            description: articleData.subtitle || articleData.intro?.slice(0, 150) || `Expert guide about ${folderName.replace(/-/g, " ")}`,
            content: markdownContent,
            category: category,
            articleType: folderName.includes("best-") ? "listicle" : "review",
            date: articleData.date,
            wordCount: wordCount,
            score: 85,
            author: articleData.author,
            authorBio: "Our research team tests and reviews products hands-on.",
            authorCredentials: "Verified Expert Reviewers",
            featured: false,
            products: articleData.products || []
        };

        // Guardar JSON
        const jsonPath = path.join(ARTICLES_DIR, `${folderName}.json`);
        fs.writeFileSync(jsonPath, JSON.stringify(article, null, 2));

        // Entrada para índice (sin content completo)
        const indexEntry = { ...article };
        delete indexEntry.content;
        delete indexEntry.authorBio;
        delete indexEntry.authorCredentials;
        delete indexEntry.products;
        indexEntry.href = `/${category}/${folderName}`;

        return indexEntry;
    } catch (error) {
        console.error(`❌ Error: ${category}/${folderName}:`, error.message);
        return null;
    }
}

// MAIN
console.log("═══════════════════════════════════════════════════════════");
console.log("  MIGRACIÓN V2 - EXTRACCIÓN DE CONTENIDO REAL");
console.log("═══════════════════════════════════════════════════════════\n");

// Cargar índice existente
let articlesIndex = [];
const existingSlugs = new Set();
if (fs.existsSync(INDEX_FILE)) {
    articlesIndex = JSON.parse(fs.readFileSync(INDEX_FILE, "utf-8"));
    // Mantener solo los que tienen contenido real (wordCount > 1000 o son de /data/articles originales)
    articlesIndex = articlesIndex.filter(a => a.wordCount > 1000 || a.slug.includes("2026"));
    articlesIndex.forEach(a => existingSlugs.add(a.slug));
    console.log(`📚 Manteniendo ${existingSlugs.size} artículos con contenido real\n`);
}

let migratedCount = 0;
const newEntries = [];

for (const category of CATEGORIES) {
    const categoryPath = path.join(APP_DIR, category);
    if (!fs.existsSync(categoryPath)) continue;

    console.log(`\n📁 Categoría: ${category}`);
    console.log("─".repeat(50));

    const folders = fs.readdirSync(categoryPath);
    for (const folder of folders) {
        const folderFullPath = path.join(categoryPath, folder);
        if (!fs.statSync(folderFullPath).isDirectory()) continue;
        if (existingSlugs.has(folder)) {
            console.log(`⏭️  Saltando ${folder} (contenido bueno)`);
            continue;
        }

        const entry = processStaticFolder(category, folder);
        if (entry) {
            newEntries.push(entry);
            migratedCount++;
        }
    }
}

// Actualizar índice
if (newEntries.length > 0) {
    const updatedIndex = [...articlesIndex, ...newEntries];
    updatedIndex.sort((a, b) => new Date(b.date) - new Date(a.date));
    fs.writeFileSync(INDEX_FILE, JSON.stringify(updatedIndex, null, 2));
}

console.log("\n═══════════════════════════════════════════════════════════");
console.log(`✅ MIGRACIÓN V2 COMPLETADA`);
console.log(`   - Artículos procesados: ${migratedCount}`);
console.log(`   - Total en índice: ${articlesIndex.length + newEntries.length}`);
console.log("═══════════════════════════════════════════════════════════\n");
