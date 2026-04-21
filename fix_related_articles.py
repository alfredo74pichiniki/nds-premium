"""Add missing 'Related articles on Nest Digital Studio' sections to the 5
articles that lack them. Uses thematically close articles for internal linking."""
import json
import os
import sys
from datetime import datetime, timezone

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ARTICLES_DIR = "public/data/articles"

# slug -> list of (title, category-path) related articles
RELATED = {
    "best-crm-for-small-business-2026": [
        ("7 Best CRM Software for Small Business in 2026: Pipedrive, HubSpot & More Ranked", "/software/best-crm-software-2026"),
        ("7 Best Project Management Tools in 2026: ClickUp, Asana & Trello Ranked", "/software/best-project-management-tools-2026"),
        ("7 Best Email Marketing Platforms in 2026: MailerLite, Brevo & ConvertKit", "/software/best-email-marketing-platforms-2026"),
    ],
    "best-vpn-for-china-2026": [
        ("7 Best VPN Services in 2026: NordVPN, Surfshark & Proton Tested", "/software/best-vpn-services-2026"),
        ("5 Best VPNs for Travel in 2026: Bypass Geo-Blocks Securely", "/software/best-vpn-for-travel-2026"),
        ("7 Best VPNs for Streaming in 2026: Netflix, Disney+ & Hulu Unblocked", "/software/best-vpn-for-streaming-2026"),
    ],
    "best-web-hosting-for-wordpress-beginners-2026": [
        ("7 Best WordPress Hosting in 2026: Kinsta, Cloudways & SiteGround Compared", "/software/best-wordpress-hosting-2026"),
        ("Kinsta vs Cloudways 2026: Which Managed WordPress Host Wins?", "/software/kinsta-vs-cloudways-2026"),
        ("How to Build a Website from Scratch in 2026: Beginner's Guide", "/software/how-to-build-website-from-scratch-2026"),
    ],
    "kinsta-vs-cloudways-2026": [
        ("7 Best WordPress Hosting in 2026: Kinsta, Cloudways & SiteGround Compared", "/software/best-wordpress-hosting-2026"),
        ("7 Best Web Hosting Services in 2026: Speed, Uptime & Support Tested", "/software/best-web-hosting-2026"),
        ("7 Best Web Hosting for WordPress Beginners in 2026", "/software/best-web-hosting-for-wordpress-beginners-2026"),
    ],
    "proton-mail-review-2026": [
        ("7 Best VPN Services in 2026: NordVPN, Surfshark & Proton Tested", "/software/best-vpn-services-2026"),
        ("7 Best Email Hosting for Business in 2026: Google Workspace vs Proton vs Zoho", "/software/best-email-hosting-for-business-2026"),
        ("NordPass vs Dashlane vs 1Password: Which Password Manager is Best in 2026?", "/software/nordpass-vs-dashlane-vs-1password-2026"),
    ],
}


def build_block(slug: str) -> str:
    items = RELATED[slug]
    lines = ["\n\n---\n\n**Related articles on Nest Digital Studio:**"]
    for title, path in items:
        lines.append(f"- [{title}]({path})")
    return "\n".join(lines) + "\n"


def main():
    for slug in RELATED:
        path = os.path.join(ARTICLES_DIR, f"{slug}.json")
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
        content = data.get("content", "")
        if "**Related articles on Nest Digital Studio:**" in content:
            print(f"  [SKIP] {slug} already has related articles")
            continue
        data["content"] = content.rstrip() + build_block(slug)
        data["modifiedDate"] = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        data["wordCount"] = len(data["content"].split())
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"  [OK] {slug}")


if __name__ == "__main__":
    main()
