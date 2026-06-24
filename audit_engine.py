#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
audit_engine.py — Auditoría técnica, SEO/GEO, CRO y de afiliados (READ-ONLY)
Nest Digital Studio — nds-premium

Reemplaza al superficial audit_articles.py. NO modifica ningún artículo:
solo lee los 196 JSON + articles.json y produce dos salidas:
    - audit_report.json  (datos estructurados, fuente para el fixer)
    - audit_report.md     (reporte ejecutivo priorizado por € e impacto)

Diseñado por el "Arquitecto" como respuesta crítica al mega-prompt de Gemini:
en vez de cazar el tag fantasma `nestdigital0e-20` (0 ocurrencias reales),
detecta las fugas REALES de comisión:
    1) CTAs con placeholder `AFFILIATE_ID` sin reemplazar  -> NO pagan comisión
    2) CTAs con esquema viejo {name,url} sin `cta`/`type`  -> botón mudo + sin afiliar
    3) Enlaces planos a marcas con programa (proton.me, nordvpn.com, ...)  -> sin tracking
    4) Amazon con tag != nestdigital-20
Más: E-E-A-T, GEO (Quick Answer/FAQ), JSON-LD (Article/FAQPage/BreadcrumbList).
"""

import sys, os, re, json, glob
from datetime import datetime, timezone

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

# --------------------------------------------------------------------------- #
# Rutas (robustas respecto al cwd: relativas a la ubicación de este script)
# --------------------------------------------------------------------------- #
ROOT = os.path.dirname(os.path.abspath(__file__))
ARTICLES_DIR = os.path.join(ROOT, "public", "data", "articles")
INDEX_FILE = os.path.join(ROOT, "public", "data", "articles.json")
REPORT_JSON = os.path.join(ROOT, "audit_report.json")
REPORT_MD = os.path.join(ROOT, "audit_report.md")

# --------------------------------------------------------------------------- #
# FUENTE DE VERDAD DE AFILIADOS
# (consolidada de los enlaces que SÍ funcionan en el content + scripts previos)
# --------------------------------------------------------------------------- #
AMAZON_TAG = "nestdigital-20"

# aff_id correctos por red (para detectar placeholders y para el fixer)
AFFILIATE_TRUTH = {
    "nord":      {"aff_id": "142918"},   # NordVPN + NordPass
    "surfshark": {"aff_id": "45353"},
    "ipvanish":  {"aff_id": "4825"},
    "proton":    {"aff_id": "17015"},    # offer_id VARÍA por producto: NO normalizar
    "elementor": {"bta": "231223"},
}

# Subdominios/paths de TRACKING legítimos (un enlace aquí está monetizado)
AFFILIATE_HOSTS = [
    "go.nordvpn.net", "go.nordpass.io", "get.surfshark.net",
    "go.getproton.me", "affiliate.ipvanish.com", "be.elementor.com",
]

# Dominios "destino de marca" que TIENEN programa de afiliados.
# Si aparecen SIN parámetro de tracking conocido => enlace plano (comisión perdida).
BRAND_DOMAINS = {
    "nordvpn.com": "nord", "nordpass.com": "nord",
    "surfshark.com": "surfshark", "ipvanish.com": "ipvanish",
    "proton.me": "proton", "protonvpn.com": "proton", "getproton.me": "proton",
    "elementor.com": "elementor",
    "roboform.com": "roboform",
    "a2hosting.com": "a2hosting", "siteground.com": "siteground",
    "hostinger.com": "hostinger", "bluehost.com": "bluehost",
    "kinsta.com": "kinsta", "cloudways.com": "cloudways",
    "pipedrive.com": "pipedrive",
}

# Marcadores de parámetro de tracking "presente" en un brand domain
TRACKING_PARAMS = ["aff_id=", "a_aid=", "affid=", "bta=", "kaid=",
                   "?id=", "&id=", "ref=", "url_id=", "/aff_c", "/visit", "/affiliates"]

PLACEHOLDER_RE = re.compile(r"AFFILIATE_ID|YOUR_AFF|XXXX|PLACEHOLDER", re.IGNORECASE)
URL_RE = re.compile(r"https?://[^\s\)\]\"'\\<>]+")
AMAZON_TAG_RE = re.compile(r"amazon\.[a-z.]+/[^\s\"')]*tag=([A-Za-z0-9_-]+)")
AMAZON_NOTAG_RE = re.compile(r"amazon\.[a-z.]+/(?:dp|s|gp)[^\s\"')]*")

# --------------------------------------------------------------------------- #
# MÓDULO ECONÓMICO — supuestos EDITABLES (ajusta con tu tráfico real de GA/GSC)
# Estimación de orden de magnitud, NO contabilidad. Documentado en el reporte.
# --------------------------------------------------------------------------- #
ASSUMPTIONS = {
    "monthly_visits_per_article": 120,   # visita media por artículo/mes (ajustar)
    "ctr_primary_cta": 0.06,             # % de visitas que clican el botón "Top Pick"
    "ctr_inline_link": 0.015,            # % que clican un enlace dentro del texto
}
# Valor por clic (EPC) estimado por red — comisión media × conversión típica.
EPC = {
    "nord": 1.20, "surfshark": 0.90, "ipvanish": 1.00, "proton": 0.60,
    "elementor": 1.00, "roboform": 0.40, "kinsta": 1.50, "cloudways": 1.20,
    "a2hosting": 0.70, "siteground": 0.80, "hostinger": 0.50, "bluehost": 0.60,
    "pipedrive": 0.80, "amazon": 0.10, "_default": 0.40,
}

DISCLOSURE_MARKERS = ["affiliate disclosure", "affiliate links", "earn a commission"]

# --------------------------------------------------------------------------- #
# Utilidades
# --------------------------------------------------------------------------- #
def load_json(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)

def brand_of_url(url):
    """Devuelve (brand_domain, network) si la URL apunta a un dominio de marca."""
    low = url.lower()
    for dom, net in BRAND_DOMAINS.items():
        if dom in low:
            return dom, net
    return None, None

def host_is_affiliate(url):
    low = url.lower()
    return any(h in low for h in AFFILIATE_HOSTS)

def has_tracking(url):
    low = url.lower()
    return any(p in low for p in TRACKING_PARAMS)

def network_from_host(url):
    low = url.lower()
    if "nordvpn" in low or "nordpass" in low: return "nord"
    if "surfshark" in low: return "surfshark"
    if "ipvanish" in low: return "ipvanish"
    if "proton" in low: return "proton"
    if "elementor" in low: return "elementor"
    if "roboform" in low: return "roboform"
    if "kinsta" in low: return "kinsta"
    if "cloudways" in low: return "cloudways"
    if "pipedrive" in low: return "pipedrive"
    if "amazon." in low: return "amazon"
    return None

def classify_link(url):
    """
    Clasifica un enlace de afiliado.
    return dict: {url, network, status, severity, reason}
      status: ok | placeholder | amazon_bad_tag | flat (sin afiliar) | unknown
    """
    low = url.lower()
    # 1) Placeholder sin reemplazar (el peor: parece afiliado pero NO paga)
    if PLACEHOLDER_RE.search(url):
        net = network_from_host(url) or "_default"
        return {"url": url, "network": net, "status": "placeholder",
                "severity": "critical",
                "reason": "Contiene AFFILIATE_ID/placeholder sin reemplazar — no genera comisión"}
    # 2) Amazon
    if "amazon." in low:
        m = AMAZON_TAG_RE.search(url)
        if m:
            tag = m.group(1)
            if tag != AMAZON_TAG:
                return {"url": url, "network": "amazon", "status": "amazon_bad_tag",
                        "severity": "critical",
                        "reason": f"tag={tag} != {AMAZON_TAG}"}
            return {"url": url, "network": "amazon", "status": "ok", "severity": "ok", "reason": ""}
        if AMAZON_NOTAG_RE.search(url):
            return {"url": url, "network": "amazon", "status": "flat",
                    "severity": "high", "reason": "Enlace de Amazon sin tag de afiliado"}
        return {"url": url, "network": "amazon", "status": "unknown", "severity": "low", "reason": ""}
    # 3) Host de tracking legítimo
    if host_is_affiliate(url):
        return {"url": url, "network": network_from_host(url), "status": "ok",
                "severity": "ok", "reason": ""}
    # 4) Dominio de marca -> ¿tiene tracking?
    dom, net = brand_of_url(url)
    if dom:
        if has_tracking(url):
            return {"url": url, "network": net, "status": "ok", "severity": "ok", "reason": ""}
        return {"url": url, "network": net, "status": "flat", "severity": "high",
                "reason": f"Enlace plano a {dom} sin parámetro de afiliado — comisión perdida"}
    return None  # no es un enlace monetizable conocido

def epc_for(network):
    return EPC.get(network, EPC["_default"])

# --------------------------------------------------------------------------- #
# Auditoría por artículo
# --------------------------------------------------------------------------- #
def audit_article(path):
    fname = os.path.basename(path)
    res = {"file": fname, "slug": None, "errors": [], "warnings": [], "info": [],
           "links": {"ok": 0, "placeholder": 0, "flat": 0, "amazon_bad_tag": 0},
           "money_at_risk_month": 0.0}
    try:
        a = load_json(path)
    except Exception as e:
        res["errors"].append({"dim": "JSON", "sev": "critical",
                              "msg": f"JSON ilegible/malformado: {e}"})
        return res

    res["slug"] = a.get("slug", fname.replace(".json", ""))
    content = a.get("content", "") or ""
    low_content = content.lower()

    # ----- DIMENSIÓN E: AFILIADOS (el dinero) -------------------------------- #
    seen = set()
    def consider(url, where, ctr):
        url = url.rstrip(".,);")
        if url in seen:
            return
        seen.add(url)
        c = classify_link(url)
        if not c:
            return
        st = c["status"]
        if st == "ok":
            res["links"]["ok"] += 1
            return
        res["links"][st] = res["links"].get(st, 0) + 1
        loss = ASSUMPTIONS["monthly_visits_per_article"] * ctr * epc_for(c["network"])
        res["money_at_risk_month"] += loss
        res["errors"].append({"dim": "AFFILIATE", "sev": c["severity"],
                              "where": where, "network": c["network"],
                              "status": st, "msg": c["reason"],
                              "url": url[:120], "loss_month": round(loss, 2)})

    # Enlaces en el cuerpo (markdown)
    for url in URL_RE.findall(content):
        consider(url, "content", ASSUMPTIONS["ctr_inline_link"])

    # Enlaces en el array affiliateLinks (los CTAs visibles = mayor peso)
    alinks = a.get("affiliateLinks") or []
    for i, link in enumerate(alinks):
        url = (link or {}).get("url", "")
        if url:
            consider(url, f"affiliateLinks[{i}]", ASSUMPTIONS["ctr_primary_cta"])
        # CTA mudo: esquema viejo sin 'cta' (el render imprime botón sin texto)
        if "cta" not in (link or {}) and not (link or {}).get("internal"):
            res["warnings"].append({"dim": "CRO", "sev": "high",
                "msg": f"affiliateLinks[{i}] sin campo 'cta' (esquema viejo {{name,url}}) "
                       f"=> botón sin texto en la página"})
    if not alinks:
        res["warnings"].append({"dim": "CRO", "sev": "medium",
            "msg": "Sin affiliateLinks => se muestra el CTA genérico de respaldo (no monetiza)"})

    # ----- DIMENSIÓN A: E-E-A-T --------------------------------------------- #
    head = low_content[:700]
    if not any(m in head for m in DISCLOSURE_MARKERS):
        res["errors"].append({"dim": "EEAT", "sev": "high",
            "msg": "Falta el aviso de afiliados (disclosure) al inicio del artículo"})
    if "/disclosure" not in low_content:
        res["warnings"].append({"dim": "EEAT", "sev": "medium",
            "msg": "No hay enlace a /disclosure en el contenido"})
    author = a.get("author", "")
    if not author:
        res["errors"].append({"dim": "EEAT", "sev": "high", "msg": "Sin campo 'author'"})

    # wordCount real vs declarado
    real_words = len(re.findall(r"\b\w+\b", content))
    declared = a.get("wordCount", 0) or 0
    res["info"].append({"real_words": real_words, "declared_words": declared})
    if real_words < 1500:
        res["errors"].append({"dim": "EEAT", "sev": "high",
            "msg": f"Contenido muy corto: {real_words} palabras (objetivo 3000+)"})
    elif real_words < 3000:
        res["warnings"].append({"dim": "EEAT", "sev": "medium",
            "msg": f"Contenido corto: {real_words} palabras (objetivo 3000+)"})
    if declared and abs(declared - real_words) > max(400, 0.2 * real_words):
        res["warnings"].append({"dim": "EEAT", "sev": "low",
            "msg": f"wordCount declarado ({declared}) difiere del real ({real_words})"})

    # ----- DIMENSIÓN B: GEO (optimización para IA) -------------------------- #
    qa_pos = low_content.find("## quick answer")
    if qa_pos == -1:
        res["warnings"].append({"dim": "GEO", "sev": "high",
            "msg": "Sin bloque '## Quick Answer' (clave para ser citado por IA)"})
    elif qa_pos > 1200:
        res["warnings"].append({"dim": "GEO", "sev": "low",
            "msg": "El 'Quick Answer' no está en las primeras ~150 palabras"})
    if "|" not in content:
        res["warnings"].append({"dim": "GEO", "sev": "low",
            "msg": "Sin tablas markdown (fact blocks legibles por scrapers)"})

    # ----- DIMENSIÓN C: SEO / JSON-LD --------------------------------------- #
    schema = a.get("schema")
    if not isinstance(schema, dict):
        res["errors"].append({"dim": "SEO", "sev": "high", "msg": "schema ausente o no es objeto JSON"})
    else:
        if "@context" not in schema:
            res["warnings"].append({"dim": "SEO", "sev": "medium",
                "msg": "schema sin '@context' (JSON-LD inválido como standalone)"})
        if schema.get("@type") != "Article":
            res["warnings"].append({"dim": "SEO", "sev": "low",
                "msg": f"schema @type='{schema.get('@type')}' (se esperaba Article)"})
        for fld in ("headline", "datePublished"):
            if fld not in schema:
                res["warnings"].append({"dim": "SEO", "sev": "low",
                    "msg": f"schema sin campo '{fld}'"})
    faq = a.get("faqSchema")
    if not isinstance(faq, dict) or not faq.get("mainEntity"):
        res["warnings"].append({"dim": "GEO", "sev": "medium",
            "msg": "Sin faqSchema (FAQPage) estructurado"})
    # BreadcrumbList: el schema es un único objeto Article -> nunca presente
    res["info"].append({"has_breadcrumb": False})

    return res

# --------------------------------------------------------------------------- #
# Main
# --------------------------------------------------------------------------- #
def main():
    files = sorted(glob.glob(os.path.join(ARTICLES_DIR, "*.json")))
    print(f"Auditando {len(files)} artículos en {ARTICLES_DIR} ...")
    results = [audit_article(p) for p in files]

    # Agregados
    agg = {
        "total_articles": len(files),
        "links_ok": sum(r["links"]["ok"] for r in results),
        "links_placeholder": sum(r["links"].get("placeholder", 0) for r in results),
        "links_flat": sum(r["links"].get("flat", 0) for r in results),
        "links_amazon_bad_tag": sum(r["links"].get("amazon_bad_tag", 0) for r in results),
        "articles_with_critical": sum(1 for r in results if any(e.get("sev") == "critical" for e in r["errors"])),
        "articles_short": sum(1 for r in results
                              if any("muy corto" in e.get("msg", "") or "corto" in e.get("msg", "")
                                     for e in r["errors"] + r["warnings"])),
        "articles_no_quick_answer": sum(1 for r in results
                                        if any("Quick Answer" in w.get("msg", "") for w in r["warnings"])),
        "articles_mute_cta": sum(1 for r in results
                                 if any("sin texto" in w.get("msg", "") for w in r["warnings"])),
        "money_at_risk_month": round(sum(r["money_at_risk_month"] for r in results), 2),
    }
    agg["money_at_risk_year"] = round(agg["money_at_risk_month"] * 12, 2)

    report = {
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "assumptions": ASSUMPTIONS,
        "summary": agg,
        "articles": results,
    }
    with open(REPORT_JSON, "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)

    write_markdown(report)
    print("\n=== RESUMEN ===")
    for k, v in agg.items():
        print(f"  {k}: {v}")
    print(f"\nReportes escritos:\n  {REPORT_JSON}\n  {REPORT_MD}")

def write_markdown(report):
    agg = report["summary"]
    A = report["assumptions"]
    results = report["articles"]

    # Ranking de artículos por € en riesgo
    ranked = sorted(results, key=lambda r: r["money_at_risk_month"], reverse=True)

    L = []
    L.append("# 🔍 Auditoría de Afiliados — Nest Digital Studio")
    L.append(f"\n*Generado: {report['timestamp']} · {agg['total_articles']} artículos · "
             f"Motor: audit_engine.py (Arquitecto)*\n")
    L.append("> Auditoría crítica que sustituye al mega-prompt de Gemini. "
             "Prioriza por **dinero en riesgo**, no por número de warnings.\n")

    L.append("## 💰 Resumen ejecutivo\n")
    L.append("| KPI | Valor |")
    L.append("|---|---|")
    L.append(f"| Artículos auditados | {agg['total_articles']} |")
    L.append(f"| ✅ Enlaces de afiliado correctos | {agg['links_ok']} |")
    L.append(f"| 🔴 CTAs/enlaces con `AFFILIATE_ID` placeholder (no pagan) | **{agg['links_placeholder']}** |")
    L.append(f"| 🟠 Enlaces planos a marcas (sin tracking) | **{agg['links_flat']}** |")
    L.append(f"| 🔴 Amazon con tag incorrecto | {agg['links_amazon_bad_tag']} |")
    L.append(f"| 🔇 Artículos con CTA mudo (botón sin texto) | {agg['articles_mute_cta']} |")
    L.append(f"| 📝 Artículos cortos (<3000 palabras) | {agg['articles_short']} |")
    L.append(f"| 🤖 Artículos sin Quick Answer (GEO) | {agg['articles_no_quick_answer']} |")
    L.append(f"| **💸 Comisión en riesgo / mes (est.)** | **~${agg['money_at_risk_month']:,.0f}** |")
    L.append(f"| **💸 Comisión en riesgo / año (est.)** | **~${agg['money_at_risk_year']:,.0f}** |")

    L.append(f"\n*Supuestos económicos (editables en `audit_engine.py`): "
             f"{A['monthly_visits_per_article']} visitas/art./mes · "
             f"CTR botón {A['ctr_primary_cta']*100:.0f}% · CTR enlace texto {A['ctr_inline_link']*100:.1f}%. "
             f"EPC por red estimado. Ajusta con tu tráfico real de Analytics para cifras exactas.*\n")

    L.append("## 🥇 Top 20 artículos por comisión en riesgo\n")
    L.append("| # | Artículo | $/mes en riesgo | Placeholder | Planos | CTA mudo |")
    L.append("|---|---|---|---|---|---|")
    for i, r in enumerate(ranked[:20], 1):
        if r["money_at_risk_month"] <= 0:
            break
        mute = "sí" if any("sin texto" in w.get("msg", "") for w in r["warnings"]) else ""
        L.append(f"| {i} | {r['slug']} | ${r['money_at_risk_month']:.2f} | "
                 f"{r['links'].get('placeholder',0)} | {r['links'].get('flat',0)} | {mute} |")

    # Alertas críticas (placeholder + amazon bad tag)
    L.append("\n## 🔴 Alertas críticas (corrección automática segura)\n")
    crit = [(r, e) for r in results for e in r["errors"] if e.get("sev") == "critical"]
    if not crit:
        L.append("_Sin alertas críticas._")
    else:
        L.append(f"**{len(crit)} enlaces críticos** que parecen de afiliado pero NO pagan comisión:\n")
        L.append("| Artículo | Dónde | Red | Problema |")
        L.append("|---|---|---|---|")
        for r, e in crit[:60]:
            L.append(f"| {r['slug']} | {e.get('where','')} | {e.get('network','')} | {e.get('msg','')} |")
        if len(crit) > 60:
            L.append(f"\n_… y {len(crit)-60} más (ver audit_report.json)._")

    L.append("\n## 🟠 Enlaces planos a marcas (decisión de negocio)\n")
    flat = [(r, e) for r in results for e in r["errors"] if e.get("status") == "flat"]
    if not flat:
        L.append("_Ninguno._")
    else:
        L.append(f"**{len(flat)} enlaces** apuntan a marcas con programa de afiliados pero sin tracking. "
                 "Monetizables, pero requieren criterio (no sobre-optimizar):\n")
        by_net = {}
        for r, e in flat:
            by_net.setdefault(e.get("network", "?"), 0)
            by_net[e.get("network", "?")] += 1
        L.append("| Red | Nº enlaces planos |")
        L.append("|---|---|")
        for net, n in sorted(by_net.items(), key=lambda x: -x[1]):
            L.append(f"| {net} | {n} |")

    L.append("\n## 🩺 Diagnóstico por artículo (resumen)\n")
    L.append("| Artículo | Palabras | Errores | Warnings | $/mes |")
    L.append("|---|---|---|---|---|")
    for r in sorted(results, key=lambda r: (len(r["errors"]), r["money_at_risk_month"]), reverse=True):
        rw = next((x.get("real_words") for x in r["info"] if "real_words" in x), "?")
        L.append(f"| {r['slug']} | {rw} | {len(r['errors'])} | {len(r['warnings'])} | "
                 f"${r['money_at_risk_month']:.2f} |")

    with open(REPORT_MD, "w", encoding="utf-8") as f:
        f.write("\n".join(L) + "\n")

if __name__ == "__main__":
    main()
