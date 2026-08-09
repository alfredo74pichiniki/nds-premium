/**
 * NDS Premium — Identidad editorial
 *
 * DECISION 9 ago 2026 (opcion A de la auditoria): aqui vivian cinco personas
 * inventadas (Alex Chen, Sarah Miller, Michael Torres, Emily Watson, David Kim)
 * con credenciales fabricadas ("Former Best Buy technology consultant",
 * "Former semi-pro CS:GO player", "$2M+ saved for readers") y enlaces a perfiles
 * de LinkedIn y Twitter que pertenecen a terceros reales. Se renderizaban dos
 * veces en cada uno de los 231 articulos.
 *
 * Tres motivos para quitarlas:
 *  1. Enlazaban la identidad de desconocidos a contenido comercial nuestro.
 *  2. Credenciales inventadas en contenido de afiliados es justo lo que penaliza
 *     el sistema de contenido util de Google.
 *  3. El JSON-LD ya declaraba author: Organization, asi que la pagina y los datos
 *     estructurados se contradecian.
 *
 * REGLA: en este archivo solo puede haber identidades reales. Si algun dia se
 * anade una persona, tiene que ser alguien que exista, con su perfil real y una
 * bio que solo afirme cosas ciertas. Nada de rellenar credenciales para dar
 * confianza.
 */

import { Author } from "@/types/product";

// ═══════════════════════════════════════════════════════════════
// IDENTIDAD EDITORIAL (unica)
// ═══════════════════════════════════════════════════════════════

const EDITORIAL: Author = {
    id: "nds_editorial",
    name: "Nest Digital Studio Editorial Team",
    role: "Editorial Team",
    // Solo afirma cosas comprobables: como se documenta cada articulo, que las
    // fuentes van citadas (campo schema.isBasedOn) y que hay comision declarada.
    bio:
        "Our editorial team researches every product using manufacturer documentation, " +
        "independent testing laboratories and published user data. Sources are cited in " +
        "each article so you can check them yourself. We earn a commission when you buy " +
        "through our links, which never changes what we recommend or how we rank it.",
    shortBio: "Research-based reviews with cited sources and a disclosed affiliate model.",
    image: "", // sin foto: el componente pinta las iniciales
    social: {}, // sin perfiles sociales: no tenemos, y no se inventan
    expertise: ["security", "vpn", "antivirus", "password-managers", "software"],
    articlesCount: 231,
};

export const authors: Record<string, Author> = {
    nds_editorial: EDITORIAL,

    // Equipo de verificacion. Mismo criterio: nada que no sea cierto.
    editorial_team: {
        id: "editorial_team",
        name: "NDS Editorial Team",
        role: "Fact-Check Team",
        bio:
            "Claims, prices and specifications are checked against the manufacturer's own " +
            "documentation before publication, and corrected when they change.",
        shortBio: "Fact-checking against primary sources.",
        image: "",
        social: {},
        expertise: ["fact-checking", "editorial"],
        articlesCount: 0,
    },
};

// ═══════════════════════════════════════════════════════════════
// HELPERS (misma firma que antes: no rompe ninguna llamada existente)
// ═══════════════════════════════════════════════════════════════

/**
 * Get author by ID. Cualquier id antiguo (alex_chen, sarah_miller...) devuelve
 * la identidad editorial en vez de undefined, para que las paginas no revienten.
 */
export function getAuthor(id: string): Author | undefined {
    return authors[id] || EDITORIAL;
}

/**
 * Get author by expertise area
 */
export function getAuthorByExpertise(_expertise: string): Author | undefined {
    return EDITORIAL;
}

/**
 * Autor por defecto de una categoria. Ya no hay una persona distinta por
 * categoria: firma el equipo editorial, que es lo que dicen los propios
 * articulos (author: "Nest Digital Studio Team" en 230 de 231) y lo que declara
 * el JSON-LD (author: Organization).
 */
export function getDefaultAuthorForCategory(_category: string): Author {
    return EDITORIAL;
}

/**
 * Get editorial team for fact-checking
 */
export function getReviewer(): Author {
    return authors.editorial_team;
}
