'use client';

import { useEffect } from 'react';

/**
 * AffiliateClickTracker — rastreo global de clics salientes.
 *
 * Escucha (por delegación) TODOS los clics en <a> externos del sitio, incluidos
 * los enlaces dentro del contenido markdown de los artículos (que NO pasan por
 * el bloque de producto con su propio onClick). Dispara dos eventos GA4 distintos
 * para poder medirlos por separado SIN registrar dimensiones personalizadas:
 *   - `affiliate_click`  → enlace monetizable (lleva tu aff_id / red de afiliados)
 *   - `outbound_click`   → otro enlace externo (competencia sin tag, fuentes, etc.)
 *
 * Los parámetros (link_domain, link_url, page_path) permiten desglose por destino
 * una vez se registren como dimensiones personalizadas en GA4 (paso opcional).
 */

// Patrones que identifican un enlace de afiliado (= genera comisión).
const AFFILIATE_PATTERNS = [
  /aff_c\b/i,
  /[?&]aff_id=/i,
  /[?&]tag=/i,               // Amazon Associates
  /amzn\.to/i,
  /go\.nordvpn\.net/i,
  /get\.surfshark\.net/i,
  /(go\.)?getproton\.me/i,
  /impact-affiliate|impactradius|\.impact\.com/i,
  /\.sjv\.io|\.pxf\.io|\.ojrq\.net/i,   // Impact / PartnerStack redes
  /awin1\.com|zenaps\.com/i,            // Awin
  /prf\.hn|partnerstack/i,
  /kit\.com\/.+\?.*aff|convertkit.*aff/i,
  // Anadidos 19 ago 2026 tras la auditoria. Estos IDs estan en AFFILIATE_IDS.md
  // y SI cobran comision, pero faltaban aqui: 124 enlaces se registraban como
  // outbound_click en vez de affiliate_click. Son justo los merchants de
  // comision mas alta del catalogo (Kinsta, Cloudways, Elementor).
  /[?&]kaid=/i,                          // Kinsta
  /cloudways\.com.*[?&]id=\d+/i,         // Cloudways (id=2134070)
  /be\.elementor\.com|[?&]bta=/i,        // Elementor
  /[?&]affid=/i,                         // RoboForm
  /aff\.trypipedrive\.com/i,             // Pipedrive (red FirstPromoter)
  /a2hosting\.com.*[?&]aid=/i,           // A2 Hosting
  /partner\.pcloud\.com/i,               // pCloud
  /affiliate\.ipvanish\.com/i,           // IPVanish
];

function isAffiliate(href: string): boolean {
  return AFFILIATE_PATTERNS.some((re) => re.test(href));
}

type Gtag = (...args: unknown[]) => void;

export function AffiliateClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.href;
      if (!/^https?:\/\//i.test(href)) return;

      let host = '';
      try {
        host = new URL(href).hostname.replace(/^www\./, '');
      } catch {
        return;
      }
      // Ignora enlaces internos (mismo sitio).
      if (host.endsWith('nestdigitalstudio.com')) return;

      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (typeof gtag !== 'function') return;

      const affiliate = isAffiliate(href);
      gtag('event', affiliate ? 'affiliate_click' : 'outbound_click', {
        link_domain: host,
        link_url: href.slice(0, 300),
        page_path: window.location.pathname,
        event_category: affiliate ? 'Affiliate' : 'Outbound',
        transport_type: 'beacon',
      });
    }

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
