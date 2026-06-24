# 🔍 Auditoría de Afiliados — Nest Digital Studio

*Generado: 2026-06-24T17:13:22.876757+00:00 · 196 artículos · Motor: audit_engine.py (Arquitecto)*

> Auditoría crítica que sustituye al mega-prompt de Gemini. Prioriza por **dinero en riesgo**, no por número de warnings.

## 💰 Resumen ejecutivo

| KPI | Valor |
|---|---|
| Artículos auditados | 196 |
| ✅ Enlaces de afiliado correctos | 1317 |
| 🔴 CTAs/enlaces con `AFFILIATE_ID` placeholder (no pagan) | **3** |
| 🟠 Enlaces planos a marcas (sin tracking) | **40** |
| 🔴 Amazon con tag incorrecto | 0 |
| 🔇 Artículos con CTA mudo (botón sin texto) | 0 |
| 📝 Artículos cortos (<3000 palabras) | 33 |
| 🤖 Artículos sin Quick Answer (GEO) | 10 |
| **💸 Comisión en riesgo / mes (est.)** | **~$91** |
| **💸 Comisión en riesgo / año (est.)** | **~$1,095** |

*Supuestos económicos (editables en `audit_engine.py`): 120 visitas/art./mes · CTR botón 6% · CTR enlace texto 1.5%. EPC por red estimado. Ajusta con tu tráfico real de Analytics para cifras exactas.*

## 🥇 Top 20 artículos por comisión en riesgo

| # | Artículo | $/mes en riesgo | Placeholder | Planos | CTA mudo |
|---|---|---|---|---|---|
| 1 | a2-hosting-review-2026 | $14.40 | 0 | 3 |  |
| 2 | hostinger-review-2026 | $11.70 | 0 | 3 |  |
| 3 | proton-mail-review-2026 | $9.72 | 2 | 1 |  |
| 4 | best-wordpress-hosting-2026 | $8.28 | 0 | 5 |  |
| 5 | best-crm-for-small-business-2026 | $7.20 | 1 | 1 |  |
| 6 | best-web-hosting-2026 | $6.84 | 0 | 5 |  |
| 7 | freshsales-review-2026 | $5.76 | 0 | 1 |  |
| 8 | best-crm-software-2026 | $2.88 | 0 | 2 |  |
| 9 | kinsta-vs-cloudways-2026 | $2.70 | 0 | 1 |  |
| 10 | best-web-hosting-for-wordpress-beginners-2026 | $2.16 | 0 | 2 |  |
| 11 | best-accounting-software-2026 | $1.44 | 0 | 1 |  |
| 12 | best-invoicing-software-2026 | $1.44 | 0 | 1 |  |
| 13 | best-managed-wordpress-hosting-2026 | $1.44 | 0 | 1 |  |
| 14 | best-project-management-tools-2026 | $1.44 | 0 | 1 |  |
| 15 | best-side-hustle-tools-apps-2026 | $1.44 | 0 | 1 |  |
| 16 | best-tools-for-freelancers-2026 | $1.44 | 0 | 1 |  |
| 17 | cloudways-review-2026 | $1.44 | 0 | 1 |  |
| 18 | pipedrive-review-2026 | $1.44 | 0 | 1 |  |
| 19 | best-password-managers-2026 | $1.08 | 0 | 1 |  |
| 20 | best-vpn-for-streaming-2026 | $1.08 | 0 | 1 |  |

## 🔴 Alertas críticas (corrección automática segura)

**3 enlaces críticos** que parecen de afiliado pero NO pagan comisión:

| Artículo | Dónde | Red | Problema |
|---|---|---|---|
| best-crm-for-small-business-2026 | affiliateLinks[0] | pipedrive | Contiene AFFILIATE_ID/placeholder sin reemplazar — no genera comisión |
| proton-mail-review-2026 | affiliateLinks[0] | proton | Contiene AFFILIATE_ID/placeholder sin reemplazar — no genera comisión |
| proton-mail-review-2026 | affiliateLinks[1] | proton | Contiene AFFILIATE_ID/placeholder sin reemplazar — no genera comisión |

## 🟠 Enlaces planos a marcas (decisión de negocio)

**40 enlaces** apuntan a marcas con programa de afiliados pero sin tracking. Monetizables, pero requieren criterio (no sobre-optimizar):

| Red | Nº enlaces planos |
|---|---|
| pipedrive | 10 |
| proton | 7 |
| siteground | 6 |
| hostinger | 6 |
| a2hosting | 4 |
| cloudways | 2 |
| bluehost | 2 |
| kinsta | 2 |
| roboform | 1 |

## 🩺 Diagnóstico por artículo (resumen)

| Artículo | Palabras | Errores | Warnings | $/mes |
|---|---|---|---|---|
| best-wordpress-hosting-2026 | 3763 | 5 | 4 | $8.28 |
| best-web-hosting-2026 | 4070 | 5 | 4 | $6.84 |
| a2-hosting-review-2026 | 2256 | 3 | 2 | $14.40 |
| hostinger-review-2026 | 4269 | 3 | 0 | $11.70 |
| proton-mail-review-2026 | 3191 | 3 | 3 | $9.72 |
| best-crm-for-small-business-2026 | 3518 | 2 | 4 | $7.20 |
| best-crm-software-2026 | 4398 | 2 | 4 | $2.88 |
| best-web-hosting-for-wordpress-beginners-2026 | 4060 | 2 | 5 | $2.16 |
| best-side-hustle-tools-apps-2026 | 1303 | 2 | 5 | $1.44 |
| best-tools-for-freelancers-2026 | 1138 | 2 | 5 | $1.44 |
| freshsales-review-2026 | 3110 | 1 | 0 | $5.76 |
| kinsta-vs-cloudways-2026 | 3290 | 1 | 5 | $2.70 |
| best-accounting-software-2026 | 3943 | 1 | 4 | $1.44 |
| best-invoicing-software-2026 | 4311 | 1 | 4 | $1.44 |
| best-managed-wordpress-hosting-2026 | 3591 | 1 | 4 | $1.44 |
| best-project-management-tools-2026 | 4924 | 1 | 4 | $1.44 |
| cloudways-review-2026 | 2935 | 1 | 2 | $1.44 |
| pipedrive-review-2026 | 4848 | 1 | 1 | $1.44 |
| best-password-managers-2026 | 4151 | 1 | 4 | $1.08 |
| best-vpn-for-streaming-2026 | 4728 | 1 | 4 | $1.08 |
| best-vpn-remote-work-2026 | 4144 | 1 | 4 | $1.08 |
| best-vpn-services-2026 | 4386 | 1 | 4 | $1.08 |
| how-to-protect-home-network-2026 | 4906 | 1 | 4 | $1.08 |
| nordvpn-vs-surfshark-vs-proton-vpn-2026 | 6879 | 1 | 3 | $1.08 |
| best-website-builders-2026 | 4711 | 1 | 4 | $0.90 |
| roboform-review-2026 | 3505 | 1 | 3 | $0.72 |
| best-ai-productivity-tools-remote-workers-2026 | 1317 | 1 | 5 | $0.00 |
| best-parental-control-software-2026 | 1131 | 1 | 5 | $0.00 |
| best-travel-tech-essentials-2026 | 1221 | 1 | 5 | $0.00 |
| best-vpn-for-gaming-2026 | 1448 | 1 | 4 | $0.00 |
| surfshark-one-review-2026-bundle | 1339 | 1 | 3 | $0.00 |
| why-is-my-wifi-slow-fixes-2026 | 5773 | 1 | 4 | $0.00 |
| ai-tools-replace-subscriptions-2026 | 6609 | 0 | 3 | $0.00 |
| asana-review-2026 | 3738 | 0 | 0 | $0.00 |
| best-4k-monitors-work-2026 | 4282 | 0 | 4 | $0.00 |
| best-ad-blockers-privacy-tools-2026 | 4089 | 0 | 4 | $0.00 |
| best-ai-writing-tools-2026 | 6178 | 0 | 4 | $0.00 |
| best-air-fryers-2026 | 3801 | 0 | 4 | $0.00 |
| best-air-purifiers-2026 | 4227 | 0 | 4 | $0.00 |
| best-antivirus-software-2026 | 4917 | 0 | 4 | $0.00 |
| best-antivirus-vpn-bundle-2026 | 4055 | 0 | 4 | $0.00 |
| best-baby-monitors-2026 | 4112 | 0 | 4 | $0.00 |
| best-backpacks-work-laptop-2026 | 4223 | 0 | 4 | $0.00 |
| best-bluetooth-speakers-2026 | 4064 | 0 | 4 | $0.00 |
| best-budget-mechanical-keyboards-2026 | 4192 | 0 | 4 | $0.00 |
| best-budget-tablets-2026 | 5818 | 0 | 1 | $0.00 |
| best-budgeting-apps-2026 | 4665 | 0 | 4 | $0.00 |
| best-cheap-laptops-2026 | 4124 | 0 | 4 | $0.00 |
| best-cloud-hosting-providers-2026 | 4007 | 0 | 4 | $0.00 |
| best-cloud-storage-2026 | 4815 | 0 | 4 | $0.00 |
| best-coffee-makers-2026 | 3744 | 0 | 4 | $0.00 |
| best-cordless-vacuums-2026 | 4243 | 0 | 4 | $0.00 |
| best-cybersecurity-tools-small-business-2026 | 1705 | 0 | 5 | $0.00 |
| best-dash-cams-2026 | 4221 | 0 | 4 | $0.00 |
| best-desk-lamps-2026 | 4233 | 0 | 4 | $0.00 |
| best-earbuds-under-100 | 4045 | 0 | 5 | $0.00 |
| best-ecommerce-platforms-2026 | 4623 | 0 | 4 | $0.00 |
| best-electric-bikes-2026 | 4239 | 0 | 4 | $0.00 |
| best-electric-kettles-2026 | 4565 | 0 | 4 | $0.00 |
| best-electric-scooters-2026 | 4669 | 0 | 4 | $0.00 |
| best-electric-toothbrushes-2026 | 4263 | 0 | 4 | $0.00 |
| best-email-hosting-for-business-2026 | 1517 | 0 | 5 | $0.00 |
| best-email-marketing-platforms-2026 | 4682 | 0 | 4 | $0.00 |
| best-encrypted-email-services-2026 | 3680 | 0 | 4 | $0.00 |
| best-ergonomic-mice-2026 | 2900 | 0 | 5 | $0.00 |
| best-ergonomic-office-chairs-2026 | 4687 | 0 | 4 | $0.00 |
| best-external-monitors-laptop-2026 | 7132 | 0 | 2 | $0.00 |
| best-external-ssds-2026 | 2477 | 0 | 5 | $0.00 |
| best-fitness-trackers-2026 | 4745 | 0 | 4 | $0.00 |
| best-free-vpn-alternatives-2026 | 4004 | 0 | 4 | $0.00 |
| best-gaming-chairs-2026 | 4106 | 0 | 4 | $0.00 |
| best-gaming-headsets-2026 | 4270 | 0 | 4 | $0.00 |
| best-gaming-laptops-2026 | 4598 | 0 | 4 | $0.00 |
| best-graphic-design-tools-2026 | 4912 | 0 | 4 | $0.00 |
| best-headphones-for-working-from-home-2026 | 3735 | 0 | 4 | $0.00 |
| best-headphones-for-working-from-home | 2163 | 0 | 7 | $0.00 |
| best-home-gym-equipment-2026 | 4263 | 0 | 4 | $0.00 |
| best-home-office-desks-2026 | 4687 | 0 | 4 | $0.00 |
| best-home-security-systems-2026 | 3804 | 0 | 4 | $0.00 |
| best-identity-theft-protection-2026 | 3770 | 0 | 4 | $0.00 |
| best-indoor-security-cameras-2026 | 4273 | 0 | 4 | $0.00 |
| best-kindle-e-readers-2026 | 3385 | 0 | 4 | $0.00 |
| best-kitchen-scales-2026 | 4133 | 0 | 4 | $0.00 |
| best-language-learning-apps-2026 | 4680 | 0 | 4 | $0.00 |
| best-laptop-stands-2026 | 4812 | 0 | 4 | $0.00 |
| best-led-strip-lights-2026 | 4237 | 0 | 4 | $0.00 |
| best-lightweight-gaming-mice-under-60g | 3201 | 0 | 5 | $0.00 |
| best-mechanical-keyboards-2026 | 7493 | 0 | 1 | $0.00 |
| best-meditation-apps-2026 | 4277 | 0 | 4 | $0.00 |
| best-mesh-wifi-systems-2026 | 6972 | 0 | 1 | $0.00 |
| best-microphones-podcasting-2026 | 4680 | 0 | 4 | $0.00 |
| best-microphones-streaming-podcasting-2026 | 4215 | 0 | 4 | $0.00 |
| best-monitors-for-wfh-2026 | 4158 | 0 | 4 | $0.00 |
| best-nas-devices-2026 | 5882 | 0 | 4 | $0.00 |
| best-noise-cancelling-headphones-2026-expert-research-guide | 3540 | 0 | 5 | $0.00 |
| best-noise-cancelling-headphones-under-100-2026 | 4235 | 0 | 4 | $0.00 |
| best-note-taking-apps-2026 | 4823 | 0 | 4 | $0.00 |
| best-online-course-platforms-2026 | 4358 | 0 | 4 | $0.00 |
| best-password-managers-for-business-2026 | 3221 | 0 | 4 | $0.00 |
| best-password-managers-for-families-2026 | 3720 | 0 | 4 | $0.00 |
| best-pet-cameras-2026 | 4157 | 0 | 4 | $0.00 |
| best-photo-editing-software-2026 | 4806 | 0 | 4 | $0.00 |
| best-photo-printers-2026 | 4749 | 0 | 4 | $0.00 |
| best-podcast-hosting-2026 | 4134 | 0 | 4 | $0.00 |
| best-portable-chargers-power-banks-2026 | 3774 | 0 | 4 | $0.00 |
| best-portable-power-stations-2026 | 5240 | 0 | 4 | $0.00 |
| best-portable-projectors-2026 | 4220 | 0 | 4 | $0.00 |
| best-pressure-washers-2026 | 4267 | 0 | 4 | $0.00 |
| best-project-management-software-2026 | 3624 | 0 | 4 | $0.00 |
| best-resume-builders-2026 | 4738 | 0 | 4 | $0.00 |
| best-ring-lights-streaming-2026 | 4635 | 0 | 4 | $0.00 |
| best-robot-vacuums-2026 | 2617 | 0 | 6 | $0.00 |
| best-screen-recording-software-2026 | 4381 | 0 | 4 | $0.00 |
| best-seo-tools-2026 | 4709 | 0 | 4 | $0.00 |
| best-seo-tools-for-small-business-2026 | 3984 | 0 | 6 | $0.00 |
| best-sleep-trackers-2026 | 4249 | 0 | 4 | $0.00 |
| best-smart-door-locks-2026 | 4697 | 0 | 4 | $0.00 |
| best-smart-home-devices-2026 | 4134 | 0 | 4 | $0.00 |
| best-smart-home-hubs-2026 | 2035 | 0 | 5 | $0.00 |
| best-smart-plugs-2026 | 4268 | 0 | 4 | $0.00 |
| best-smart-thermostats-2026 | 4193 | 0 | 4 | $0.00 |
| best-smartwatches-2026 | 3766 | 0 | 4 | $0.00 |
| best-social-media-management-tools-2026 | 4774 | 0 | 4 | $0.00 |
| best-software-tools-2025 | 3297 | 0 | 5 | $0.00 |
| best-solar-power-stations-for-emergency | 4304 | 0 | 5 | $0.00 |
| best-standing-desks-2026 | 6579 | 0 | 1 | $0.00 |
| best-time-tracking-software-2026 | 4898 | 0 | 4 | $0.00 |
| best-travel-pillows-2026 | 4028 | 0 | 4 | $0.00 |
| best-tvs-under-1000-2026 | 4859 | 0 | 4 | $0.00 |
| best-two-factor-authentication-apps-2026 | 3806 | 0 | 4 | $0.00 |
| best-usb-c-hubs-docking-stations-2026 | 1839 | 0 | 5 | $0.00 |
| best-video-doorbells-2026 | 4256 | 0 | 4 | $0.00 |
| best-video-editing-software-2026 | 4340 | 0 | 4 | $0.00 |
| best-vpn-for-android-2026 | 4643 | 0 | 4 | $0.00 |
| best-vpn-for-china-2026 | 5389 | 0 | 5 | $0.00 |
| best-vpn-for-firestick-2026 | 3807 | 0 | 4 | $0.00 |
| best-vpn-for-iphone-2026 | 5100 | 0 | 5 | $0.00 |
| best-vpn-for-mac-2026 | 4269 | 0 | 4 | $0.00 |
| best-vpn-for-small-business-2026 | 3366 | 0 | 4 | $0.00 |
| best-vpn-for-torrenting-2026 | 5375 | 0 | 5 | $0.00 |
| best-vpn-for-travel-2026 | 1502 | 0 | 5 | $0.00 |
| best-vpn-for-windows-2026 | 4296 | 0 | 4 | $0.00 |
| best-water-bottles-2026 | 4183 | 0 | 4 | $0.00 |
| best-webcams-2026 | 4123 | 0 | 4 | $0.00 |
| best-wifi-7-routers-2026 | 1908 | 0 | 5 | $0.00 |
| best-wifi-routers-2026 | 4393 | 0 | 4 | $0.00 |
| best-wireless-chargers-2026 | 4329 | 0 | 4 | $0.00 |
| best-wireless-earbuds-2026 | 3772 | 0 | 4 | $0.00 |
| best-wireless-earbuds-running-2026 | 7899 | 0 | 4 | $0.00 |
| best-wireless-mice-2026 | 4189 | 0 | 4 | $0.00 |
| best-woocommerce-hosting-2026 | 3372 | 0 | 0 | $0.00 |
| best-wordpress-page-builders-2026 | 3411 | 0 | 0 | $0.00 |
| bitdefender-antivirus-review-2026 | 3756 | 0 | 4 | $0.00 |
| buzzsprout-review-2026 | 3281 | 0 | 0 | $0.00 |
| ces-2026-top-5-gadgets | 2334 | 0 | 7 | $0.00 |
| chatgpt-vs-claude-2026 | 3460 | 0 | 6 | $0.00 |
| clickup-review-2026 | 2549 | 0 | 2 | $0.00 |
| complete-guide-digital-privacy-2026 | 5696 | 0 | 2 | $0.00 |
| convertkit-vs-mailchimp-vs-activecampaign-2026 | 4060 | 0 | 4 | $0.00 |
| elementor-review-2026 | 3107 | 0 | 1 | $0.00 |
| elementor-vs-squarespace-vs-wix-2026 | 2428 | 0 | 5 | $0.00 |
| elementor-vs-wordpress-block-editor-vs-divi-2026 | 1558 | 0 | 5 | $0.00 |
| freshdesk-review-2026 | 2933 | 0 | 2 | $0.00 |
| getresponse-review-2026 | 4177 | 0 | 0 | $0.00 |
| home-office-setup-under-500 | 3651 | 0 | 6 | $0.00 |
| how-to-build-gaming-pc-2026 | 6764 | 0 | 4 | $0.00 |
| how-to-build-website-from-scratch-2026 | 1564 | 0 | 5 | $0.00 |
| how-to-set-up-home-office-2026 | 3978 | 0 | 3 | $0.00 |
| ipvanish-review-2026 | 2169 | 0 | 2 | $0.00 |
| january-2026-best-tech-deals | 2141 | 0 | 6 | $0.00 |
| kinsta-review-2026 | 3040 | 0 | 1 | $0.00 |
| kit-convertkit-review-2026 | 3941 | 0 | 0 | $0.00 |
| monday-com-review-2026 | 3205 | 0 | 0 | $0.00 |
| nordpass-review-2026 | 3477 | 0 | 3 | $0.00 |
| nordpass-vs-dashlane-vs-1password-2026 | 1524 | 0 | 5 | $0.00 |
| nordvpn-review-2026-long-term | 1759 | 0 | 4 | $0.00 |
| nordvpn-vs-proton-vpn-2026 | 3802 | 0 | 4 | $0.00 |
| nordvpn-vs-surfshark-2026 | 3122 | 0 | 4 | $0.00 |
| nordvpn-vs-surfshark-vs-ipvanish-2026 | 2627 | 0 | 5 | $0.00 |
| notion-review-2026 | 3293 | 0 | 0 | $0.00 |
| pcloud-review-2026 | 3668 | 0 | 0 | $0.00 |
| proton-pass-review-2026 | 3263 | 0 | 4 | $0.00 |
| protonvpn-review-2026 | 2264 | 0 | 2 | $0.00 |
| quickbooks-review-2026 | 3073 | 0 | 1 | $0.00 |
| remote-work-trends-2026 | 2436 | 0 | 7 | $0.00 |
| remove-personal-data-internet-2026 | 3813 | 0 | 4 | $0.00 |
| secretlab-review-2026 | 2432 | 0 | 2 | $0.00 |
| semrush-vs-ahrefs-2026 | 3615 | 0 | 4 | $0.00 |
| simplisafe-review-2026 | 4105 | 0 | 0 | $0.00 |
| smart-home-beginners-guide-2026 | 5658 | 0 | 4 | $0.00 |
| surfshark-vs-nordvpn-2026 | 4047 | 0 | 4 | $0.00 |
| teachable-review-2026 | 3636 | 0 | 0 | $0.00 |
| transistor-review-2026 | 3717 | 0 | 0 | $0.00 |
| writesonic-review-2026 | 4080 | 0 | 0 | $0.00 |
| ynab-review-2026 | 3559 | 0 | 0 | $0.00 |
| zoho-review-2026 | 3192 | 0 | 0 | $0.00 |
