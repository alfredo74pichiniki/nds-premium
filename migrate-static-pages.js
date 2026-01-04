/**
 * MIGRACIÓN DE PÁGINAS ESTÁTICAS A JSON
 * Ejecutar: node migrate-static-pages.js
 */

const fs = require("fs");
const path = require("path");

// Configuración
const APP_DIR = path.join(__dirname, "src/app");
const ARTICLES_DIR = path.join(__dirname, "public/data/articles");
const INDEX_FILE = path.join(__dirname, "public/data/articles.json");

// Categorías a migrar
const CATEGORIES = ["reviews", "gaming", "software", "guides", "deals"];

// Artículos ya existentes (no sobrescribir)
const existingArticles = new Set();

// Cargar índice existente
let articlesIndex = [];
if (fs.existsSync(INDEX_FILE)) {
    articlesIndex = JSON.parse(fs.readFileSync(INDEX_FILE, "utf-8"));
    articlesIndex.forEach((a) => existingArticles.add(a.slug));
    console.log(`📚 ${existingArticles.size} artículos existentes en el índice`);
}

// Función para extraer metadatos del TSX
function extractMetadata(content) {
    const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
    const descMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/);

    return {
        title: titleMatch ? titleMatch[1].split("|")[0].trim() : null,
        description: descMatch ? descMatch[1] : null,
    };
}

// Función para extraer contenido del JSX
function extractContent(content, slug, category) {
    // Extraer h1
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    const h1 = h1Match
        ? h1Match[1].replace(/<[^>]+>/g, "").trim()
        : slug.replace(/-/g, " ");

    // Extraer descripción del párrafo principal
    const pMatch = content.match(
        /<p className="text-xl text-gray-400[^"]*">([\s\S]*?)<\/p>/
    );
    const intro = pMatch ? pMatch[1].replace(/<[^>]+>/g, "").trim() : "";

    // Extraer secciones h2
    const h2Matches = content.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g);
    const sections = [];
    for (const match of h2Matches) {
        const sectionTitle = match[1].replace(/<[^>]+>/g, "").trim();
        if (sectionTitle && !sectionTitle.includes("className")) {
            sections.push(`## ${sectionTitle}`);
        }
    }

    // Construir contenido Markdown
    let markdown = `# ${h1}\n\n`;
    if (intro) markdown += `*${intro}*\n\n`;
    markdown += `---\n\n`;
    markdown += `📋 **Affiliate Disclosure:** This article contains affiliate links. We earn a commission on qualifying purchases.\n\n`;
    if (sections.length > 0) {
        markdown += sections.join("\n\n") + "\n\n";
    }
    markdown += `---\n\n*Last Updated: December 2025*`;

    return markdown;
}

// Función para estimar wordCount del TSX
function estimateWordCount(content) {
    // Remover tags HTML/JSX y contar palabras
    const textOnly = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
    const words = textOnly.split(" ").filter((w) => w.length > 2);
    return Math.max(words.length, 500); // Mínimo 500 palabras
}

// Función para determinar articleType
function determineArticleType(slug, content) {
    if (slug.includes("best-") || slug.includes("top-")) return "listicle";
    if (slug.includes("vs-") || slug.includes("comparison")) return "comparison";
    if (slug.includes("guide") || slug.includes("how-to")) return "guide";
    if (slug.includes("review")) return "review";
    return "review";
}

// Procesar una carpeta estática
function processStaticFolder(category, folderName) {
    const folderPath = path.join(APP_DIR, category, folderName);
    const pagePath = path.join(folderPath, "page.tsx");

    // Verificar que existe y no es [slug]
    if (folderName === "[slug]" || !fs.existsSync(pagePath)) {
        return null;
    }

    // Verificar que no existe ya en el índice
    if (existingArticles.has(folderName)) {
        console.log(`⏭️  Saltando ${folderName} (ya existe)`);
        return null;
    }

    console.log(`📄 Procesando: ${category}/${folderName}`);

    try {
        const content = fs.readFileSync(pagePath, "utf-8");
        const metadata = extractMetadata(content);
        const markdownContent = extractContent(content, folderName, category);
        const wordCount = estimateWordCount(content);
        const articleType = determineArticleType(folderName, content);

        const article = {
            slug: folderName,
            title:
                metadata.title ||
                folderName
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(" "),
            description:
                metadata.description ||
                `Expert ${articleType} about ${folderName.replace(/-/g, " ")}`,
            content: markdownContent,
            category: category,
            articleType: articleType,
            date: "December 25, 2025",
            wordCount: wordCount,
            score: 85,
            author: "NDS Research Team",
            authorBio: "Our research team tests and reviews products hands-on.",
            authorCredentials: "Verified Expert Reviewers",
            featured: false,
        };

        // Guardar JSON individual
        const jsonPath = path.join(ARTICLES_DIR, `${folderName}.json`);
        fs.writeFileSync(jsonPath, JSON.stringify(article, null, 2));

        // Retornar entrada para el índice (sin content para mantenerlo pequeño)
        const indexEntry = { ...article };
        delete indexEntry.content;
        delete indexEntry.authorBio;
        delete indexEntry.authorCredentials;
        indexEntry.href = `/${category}/${folderName}`;

        return indexEntry;
    } catch (error) {
        console.error(`❌ Error procesando ${category}/${folderName}:`, error.message);
        return null;
    }
}

// MAIN
console.log("═══════════════════════════════════════════════════════════");
console.log("  MIGRACIÓN DE PÁGINAS ESTÁTICAS A JSON");
console.log("═══════════════════════════════════════════════════════════\n");

let migratedCount = 0;
const newEntries = [];

for (const category of CATEGORIES) {
    const categoryPath = path.join(APP_DIR, category);
    if (!fs.existsSync(categoryPath)) {
        console.log(`⚠️  Categoría ${category} no encontrada`);
        continue;
    }

    console.log(`\n📁 Procesando categoría: ${category}`);
    console.log("─".repeat(50));

    const folders = fs.readdirSync(categoryPath);
    for (const folder of folders) {
        const folderFullPath = path.join(categoryPath, folder);
        if (!fs.statSync(folderFullPath).isDirectory()) continue;

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
    // Ordenar por fecha descendente
    updatedIndex.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });
    fs.writeFileSync(INDEX_FILE, JSON.stringify(updatedIndex, null, 2));
}

console.log("\n═══════════════════════════════════════════════════════════");
console.log(`✅ MIGRACIÓN COMPLETADA`);
console.log(`   - Artículos migrados: ${migratedCount}`);
console.log(`   - Total en índice: ${articlesIndex.length + newEntries.length}`);
console.log("═══════════════════════════════════════════════════════════\n");
