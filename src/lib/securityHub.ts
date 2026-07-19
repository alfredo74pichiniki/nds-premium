import { getArticles, canonicalPathFor, type Article } from "./articles";

/**
 * Security Hub — cluster/pillar del nicho de seguridad.
 * Agrupa los articulos de seguridad (VPN, gestores de contrasenas, antivirus/home
 * security, privacidad) para construir autoridad tematica via malla de enlaces internos.
 * Usa canonicalPathFor() para enlazar SIEMPRE a la URL canonica correcta (no reintroduce
 * duplicados cross-categoria).
 */

const SECURITY_RE = /antivirus|\bvpn\b|password|malware|firewall|privacy|security|proton|nordpass|surfshark|bitdefender|norton|mcafee|kaspersky|\beset\b|encrypt|identity|2fa|dashlane|1password|roboform|cyber|simplisafe|doorbell/i;

export interface HubItem { title: string; href: string; slug: string; wordCount: number; }
export interface HubCluster { key: string; label: string; emoji: string; blurb: string; items: HubItem[]; }

function isSecurity(a: Article): boolean {
    return SECURITY_RE.test(`${a.slug || ""} ${a.title || ""}`);
}

function bucketOf(a: Article): string {
    const s = `${a.slug || ""} ${a.title || ""}`.toLowerCase();
    if (/password|nordpass|1password|dashlane|roboform|proton pass/.test(s)) return "passwords";
    if (/antivirus|malware|bitdefender|norton|mcafee|kaspersky|eset|home security|indoor|doorbell|simplisafe|alarm|smart lock/.test(s)) return "antivirus";
    if (/\bvpn\b|surfshark|nordvpn|expressvpn|proton\s*vpn|protonvpn|ipvanish|cyberghost/.test(s)) return "vpn";
    return "privacy";
}

const META: Record<string, { label: string; emoji: string; blurb: string; order: number }> = {
    vpn: { label: "VPN & Privacy", emoji: "🛡️", blurb: "The best VPNs tested for speed, streaming, and everyday privacy.", order: 1 },
    passwords: { label: "Password Managers", emoji: "🔑", blurb: "Lock down your logins with the best password managers of 2026.", order: 2 },
    antivirus: { label: "Antivirus & Home Security", emoji: "🦠", blurb: "Malware protection, antivirus suites, and smart home security.", order: 3 },
    privacy: { label: "Privacy & Identity", emoji: "🔐", blurb: "Encrypted email, identity protection, and digital privacy guides.", order: 4 },
};

export function getSecurityClusters(): HubCluster[] {
    const arts = getArticles().filter(isSecurity);
    const buckets: Record<string, HubItem[]> = { vpn: [], passwords: [], antivirus: [], privacy: [] };
    const seen = new Set<string>();
    for (const a of arts) {
        if (!a.slug || seen.has(a.slug)) continue; // dedup (p.ej. simplisafe duplicado)
        seen.add(a.slug);
        buckets[bucketOf(a)].push({ title: a.title, href: canonicalPathFor(a), slug: a.slug, wordCount: a.wordCount || 0 });
    }
    return Object.entries(META)
        .sort((x, y) => x[1].order - y[1].order)
        .filter(([k]) => buckets[k].length > 0)
        .map(([k, m]) => ({
            key: k, label: m.label, emoji: m.emoji, blurb: m.blurb,
            items: buckets[k].sort((a, b) => a.title.localeCompare(b.title)),
        }));
}

export function getSecurityCount(): number {
    const seen = new Set<string>();
    for (const a of getArticles().filter(isSecurity)) {
        if (a.slug) seen.add(a.slug);
    }
    return seen.size;
}
