import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import json
import os
from pathlib import Path

ARTICLES_DIR = Path('public/data/articles')

# Top 10 review articles that MUST have affiliateLinks
AFFILIATE_DATA = {
    "kinsta-review-2026": {
        "affiliateLinks": [
            {
                "label": "Try Kinsta Free for 30 Days",
                "url": "https://kinsta.com/?kaid=AFFILIATE_ID",
                "type": "primary",
                "cta": "Start Free Trial",
                "badge": "Best for High-Traffic Sites"
            },
            {
                "label": "View Kinsta Plans & Pricing",
                "url": "https://kinsta.com/plans/?kaid=AFFILIATE_ID",
                "type": "secondary",
                "cta": "See All Plans"
            }
        ]
    },
    "cloudways-review-2026": {
        "affiliateLinks": [
            {
                "label": "Try Cloudways Free for 3 Days",
                "url": "https://www.cloudways.com/en/?id=AFFILIATE_ID",
                "type": "primary",
                "cta": "Start Free Trial",
                "badge": "Best Value Managed Cloud"
            },
            {
                "label": "View Cloudways Plans",
                "url": "https://www.cloudways.com/en/pricing.php?id=AFFILIATE_ID",
                "type": "secondary",
                "cta": "See Pricing"
            }
        ]
    },
    "nordvpn-review-2026-long-term": {
        "affiliateLinks": [
            {
                "label": "Get NordVPN — 74% Off + 3 Months Free",
                "url": "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=AFFILIATE_ID",
                "type": "primary",
                "cta": "Claim Deal",
                "badge": "Best Overall VPN"
            },
            {
                "label": "NordVPN Plans Comparison",
                "url": "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=AFFILIATE_ID",
                "type": "secondary",
                "cta": "Compare Plans"
            }
        ]
    },
    "surfshark-one-review-2026-bundle": {
        "affiliateLinks": [
            {
                "label": "Get Surfshark One — 86% Off",
                "url": "https://get.surfshark.net/aff_c?offer_id=926&aff_id=AFFILIATE_ID",
                "type": "primary",
                "cta": "Claim Deal",
                "badge": "Best Budget VPN Bundle"
            }
        ]
    },
    "ipvanish-review-2026": {
        "affiliateLinks": [
            {
                "label": "Get IPVanish — Best Price",
                "url": "https://www.ipvanish.com/?a_aid=AFFILIATE_ID",
                "type": "primary",
                "cta": "Get IPVanish",
                "badge": "Best for Streaming & Torrenting"
            }
        ]
    },
    "nordpass-review-2026": {
        "affiliateLinks": [
            {
                "label": "Try NordPass Free — 30 Days",
                "url": "https://go.nordpass.io/aff_c?offer_id=488&aff_id=AFFILIATE_ID",
                "type": "primary",
                "cta": "Start Free Trial",
                "badge": "Best for NordVPN Users"
            }
        ]
    },
    "roboform-review-2026": {
        "affiliateLinks": [
            {
                "label": "Try RoboForm Free",
                "url": "https://www.roboform.com/go?id=AFFILIATE_ID",
                "type": "primary",
                "cta": "Try Free",
                "badge": "Best Form-Filling Password Manager"
            }
        ]
    },
    "proton-mail-review-2026": {
        "affiliateLinks": [
            {
                "label": "Get Proton Mail Free",
                "url": "https://proton.me/mail/referral?ref=AFFILIATE_ID",
                "type": "primary",
                "cta": "Create Free Account",
                "badge": "Most Secure Email Provider"
            },
            {
                "label": "Proton Unlimited — All Apps Bundle",
                "url": "https://proton.me/pricing?ref=AFFILIATE_ID",
                "type": "secondary",
                "cta": "See Proton Unlimited"
            }
        ]
    },
    "elementor-review-2026": {
        "affiliateLinks": [
            {
                "label": "Get Elementor Pro",
                "url": "https://be.elementor.com/visit/?bta=AFFILIATE_ID&brand=elementorpro",
                "type": "primary",
                "cta": "Get Elementor Pro",
                "badge": "Best WordPress Page Builder"
            },
            {
                "label": "Elementor Free vs Pro Comparison",
                "url": "https://be.elementor.com/visit/?bta=AFFILIATE_ID&brand=elementorpro",
                "type": "secondary",
                "cta": "Compare Plans"
            }
        ]
    },
    "best-crm-for-small-business-2026": {
        "affiliateLinks": [
            {
                "label": "Try Pipedrive Free — 14 Days",
                "url": "https://www.pipedrive.com/en/affiliates/AFFILIATE_ID",
                "type": "primary",
                "cta": "Start Free Trial",
                "badge": "#1 CRM for Sales Teams"
            },
            {
                "label": "Compare Top CRM Tools",
                "url": "https://nestdigitalstudio.com/software/best-crm-software-2026",
                "type": "secondary",
                "cta": "See Full Comparison",
                "internal": True
            }
        ]
    }
}

updated = []
skipped = []

for slug, data in AFFILIATE_DATA.items():
    filepath = ARTICLES_DIR / f"{slug}.json"
    if not filepath.exists():
        print(f"  ❌ NOT FOUND: {slug}")
        skipped.append(slug)
        continue
    
    try:
        article = json.loads(filepath.read_text(encoding='utf-8'))
        existing = article.get('affiliateLinks', [])
        
        if existing:
            print(f"  ⚠️  HAS LINKS ALREADY ({len(existing)}): {slug} — OVERWRITING with better ones")
        
        article['affiliateLinks'] = data['affiliateLinks']
        
        filepath.write_text(
            json.dumps(article, ensure_ascii=False, indent=2),
            encoding='utf-8'
        )
        print(f"  ✅ Updated ({len(data['affiliateLinks'])} links): {slug}")
        updated.append(slug)
    
    except Exception as e:
        print(f"  ❌ ERROR {slug}: {e}")
        skipped.append(slug)

print(f"\n=== DONE ===")
print(f"Updated: {len(updated)}/10")
print(f"Skipped: {len(skipped)}")
