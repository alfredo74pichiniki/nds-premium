/**
 * Article Components - Barrel Export
 * All premium article components for NDS
 */

// Base Components
export { AmazonButton, AmazonButtonCompact } from "./AmazonButton";
export { RatingDisplay, LargeScore, RatingBreakdown } from "./RatingDisplay";
export { ProsConsBox, ProsConsInline } from "./ProsConsBox";
export { ProductCard, ProductGrid } from "./ProductCard";
export { ComparisonTable } from "./ComparisonTable";

// E-E-A-T Components
export { AuthorBio } from "./AuthorBio";
export {
    FactCheckBadge,
    SourcesCited,
    ProductsTestedBadge,
    LastUpdatedBadge
} from "./FactCheckBadge";

// Layout Components
export { TableOfContents } from "./TableOfContents";
export { ReadingProgress } from "./ReadingProgress";
export { RelatedArticles } from "./RelatedArticles";
export { PremiumArticlePage } from "./PremiumArticlePage";

// Rich Content Components
export { YouTubeEmbed } from "./YouTubeEmbed";
export { PriceAlertBox } from "./PriceAlertBox";
export { ExpertQuote, CalloutBox } from "./ExpertQuote";

// SEO Components (re-export from /seo)
export { SchemaMarkup, ProductSchemaOnly, FAQSchemaOnly } from "../seo/SchemaMarkup";

// UI Components (re-export from /ui)
export { Breadcrumbs, generateBreadcrumbs } from "../ui/Breadcrumbs";

