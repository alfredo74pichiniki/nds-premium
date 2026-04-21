"""
Inject contextual Amazon affiliate sections into 54 articles that have zero
Amazon links. Uses Amazon search URLs with tag=nestdigital-20 (real URLs, no
invented ASINs). Section is placed BEFORE the "Related articles" block so SEO
and internal linking remain intact.
"""
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ARTICLES_DIR = "public/data/articles"
TAG = "nestdigital-20"


def amz(query: str) -> str:
    """Build an Amazon search URL with the affiliate tag."""
    return f"https://www.amazon.com/s?k={query.replace(' ', '+')}&tag={TAG}"


# ---- Category → gear blocks ----------------------------------------------

PRIVACY_BLOCK = f"""
## Complete Your Privacy Setup (Hardware Essentials)

Your VPN, password manager, or antivirus is only half of a real privacy stack.
These hardware companions close the gaps software alone cannot cover. *As an
Amazon Associate we earn from qualifying purchases.*

- **[YubiKey 5 NFC Security Key]({amz('yubikey 5 nfc')})** — Phishing-proof
  two-factor authentication that works with NordPass, 1Password, Proton, Google,
  and every major service. The single upgrade with the highest security ROI.
- **[Travel VPN Router (GL.iNet / ASUS)]({amz('travel vpn router gl-inet')})** —
  Runs your VPN at the router level so every device (phone, laptop, smart TV)
  is protected automatically. Essential for hotels and coworking spaces.
- **[Laptop Webcam Privacy Cover]({amz('webcam privacy cover slide')})** —
  Physical shutter against webcam hijacking. The $5 upgrade Snowden actually
  recommends.
- **[USB Data Blocker (Juice-Jack Defender)]({amz('usb data blocker juice jack')})** —
  Blocks data transfer on public USB charging ports. Power only, zero data.
- **[Privacy Screen Filter for Laptop]({amz('privacy screen filter laptop')})** —
  Stops shoulder-surfing in airports, cafés, and coworking. A must if you handle
  client data in public.
- **[Encrypted USB Drive (Kingston IronKey)]({amz('kingston ironkey encrypted usb')})** —
  Hardware-encrypted storage for sensitive backups and password vaults.
- **[RFID-Blocking Wallet]({amz('rfid blocking wallet leather')})** — Stops
  contactless card cloning in crowded spaces. Small upgrade, big peace of mind.
"""

WEBDEV_BLOCK = f"""
## The Web Builder's Workstation (Recommended Hardware)

Great software needs a setup that matches. Here are the hardware upgrades our
team and thousands of web builders swear by. *As an Amazon Associate we earn
from qualifying purchases.*

- **[4K Ultrawide Monitor (34-inch)]({amz('34 inch ultrawide 4k monitor')})** —
  Side-by-side code, design preview, and documentation without tab-switching.
  Biggest productivity jump you can buy.
- **[Mechanical Keyboard (Keychron)]({amz('keychron mechanical keyboard')})** —
  Wireless, hot-swappable, and built for long coding and writing sessions.
- **[Ergonomic Vertical Mouse (Logitech MX)]({amz('logitech mx vertical ergonomic mouse')})** —
  Saves your wrist after 8 hours of WordPress, Elementor, or Figma work.
- **[Thunderbolt 4 USB-C Hub]({amz('thunderbolt 4 usb c hub laptop')})** —
  One cable to connect monitor, external SSD, ethernet, and power to any
  modern laptop.
- **[External NVMe SSD (1TB+)]({amz('external nvme ssd 1tb portable')})** —
  Fast local backups of sites, databases, and assets. Essential before any
  migration or redesign.
- **[Adjustable Laptop Stand (Aluminum)]({amz('aluminum laptop stand adjustable')})** —
  Eye-level screen saves your neck and improves focus instantly.
- **[Blue Light Blocking Glasses]({amz('blue light blocking glasses')})** —
  Reduces eye strain during long design and dev sessions.
"""

PRODUCTIVITY_BLOCK = f"""
## Complete Your Productivity Command Center

The right software plus the right physical setup is what separates productive
teams from burnt-out ones. These are the hardware upgrades we recommend to
every reader building a serious work environment. *As an Amazon Associate we
earn from qualifying purchases.*

- **[Dual Monitor Setup (27" QHD)]({amz('27 inch qhd monitor dual')})** —
  Second screen = documented 20-30% productivity lift. Non-negotiable for
  serious work.
- **[Ergonomic Office Chair (Herman Miller / Steelcase)]({amz('ergonomic office chair lumbar')})** —
  The one piece of gear you sit in 8+ hours. Cheap chairs cost you back pain.
- **[Electric Standing Desk]({amz('electric standing desk adjustable')})** —
  Alternating between sitting and standing throughout the day improves focus
  and reduces fatigue.
- **[Noise-Cancelling Headphones (Sony WH-1000XM5 / Bose QC)]({amz('noise cancelling headphones sony bose')})** —
  Deep-work mode anywhere, even in shared spaces.
- **[1080p Webcam with Ring Light]({amz('1080p webcam ring light')})** —
  Professional presence on every Zoom call and client meeting.
- **[Monitor Arm (Dual, VESA)]({amz('dual monitor arm vesa')})** — Frees up
  desk space and lets you position screens for perfect ergonomics.
- **[LED Desk Lamp with USB Charging]({amz('led desk lamp usb charging')})** —
  Reduces eye strain and keeps your phone topped up all day.
"""

CREATIVE_BLOCK = f"""
## The Creator's Hardware Stack

Creative software lives or dies by the hardware you run it on. If you are
investing in Photoshop, Premiere, Final Cut, or DaVinci Resolve, these are the
companion purchases that unlock the full experience. *As an Amazon Associate
we earn from qualifying purchases.*

- **[Color-Accurate 4K Monitor (BenQ / LG UltraFine)]({amz('color accurate 4k monitor designer')})** —
  Factory-calibrated for photo and video work. Your edits finally match the
  final export.
- **[Graphics Drawing Tablet (Wacom Intuos / XP-Pen)]({amz('wacom intuos drawing tablet')})** —
  Pressure-sensitive precision for retouching, illustration, and design.
- **[External NVMe SSD for Video Editing]({amz('external nvme ssd video editing 2tb')})** —
  Scrub 4K timelines without dropped frames. Essential for any serious editor.
- **[Studio Microphone (Blue Yeti / Shure MV7)]({amz('shure mv7 studio microphone usb')})** —
  Broadcast-quality audio for podcasts, voiceovers, and YouTube.
- **[Acoustic Panels Set]({amz('acoustic foam panels studio')})** — Tame room
  echo and record cleaner audio at home.
- **[32GB RAM Upgrade Kit]({amz('32gb ddr5 ram kit')})** — If you edit video
  or design on Photoshop, this is the single biggest performance upgrade.
- **[SD Card V90 Pro]({amz('sd card v90 pro video 256gb')})** — Reliable 4K/8K
  capture speed for cameras and drones.
"""

HOMEOFFICE_BLOCK = f"""
## Build Your Home Office (Beyond the Software)

Setting up a home office is 50% software and 50% environment. Here are the
physical pieces that make the biggest difference in comfort, focus, and
professionalism. *As an Amazon Associate we earn from qualifying purchases.*

- **[Electric Standing Desk (Flexispot / UPLIFT)]({amz('electric standing desk 60 inch')})** —
  The foundation of any modern home office.
- **[Ergonomic Chair with Lumbar Support]({amz('ergonomic chair mesh lumbar')})** —
  Herman Miller-style comfort at a fraction of the price.
- **[27-Inch QHD Monitor]({amz('27 inch qhd monitor 144hz')})** — The sweet
  spot between real estate and desk footprint.
- **[Monitor Arm (VESA, Gas Spring)]({amz('monitor arm vesa gas spring')})** —
  Clean desk, perfect ergonomic height.
- **[Noise-Cancelling Headphones]({amz('noise cancelling headphones wireless')})** —
  Protects your focus in shared living spaces.
- **[1080p Webcam with Auto Focus]({amz('1080p webcam autofocus')})** —
  Professional video calls without a laptop camera.
- **[LED Floor Lamp (Warm White)]({amz('led floor lamp warm white')})** —
  Soft ambient light for long work sessions.
- **[Cable Management Tray]({amz('under desk cable management tray')})** —
  Hides the mess and makes your desk look like a pro studio.
"""


# ---- Article → block mapping ---------------------------------------------

PRIVACY = {
    "best-vpn-services-2026",
    "best-vpn-for-china-2026",
    "best-vpn-for-gaming-2026",
    "best-vpn-for-streaming-2026",
    "best-vpn-for-travel-2026",
    "best-vpn-remote-work-2026",
    "best-antivirus-software-2026",
    "best-antivirus-vpn-bundle-2026",
    "best-ad-blockers-privacy-tools-2026",
    "best-cybersecurity-tools-small-business-2026",
    "best-password-managers-2026",
    "nordpass-vs-dashlane-vs-1password-2026",
    "how-to-protect-home-network-2026",
    "remove-personal-data-internet-2026",
    "ipvanish-review-2026",
    "nordvpn-review-2026-long-term",
    "nordvpn-vs-surfshark-vs-ipvanish-2026",
    "surfshark-one-review-2026-bundle",
    "proton-mail-review-2026",
}

WEBDEV = {
    "best-web-hosting-2026",
    "best-web-hosting-for-wordpress-beginners-2026",
    "best-wordpress-hosting-2026",
    "best-website-builders-2026",
    "elementor-vs-squarespace-vs-wix-2026",
    "elementor-vs-wordpress-block-editor-vs-divi-2026",
    "how-to-build-website-from-scratch-2026",
    "kinsta-vs-cloudways-2026",
    "best-email-hosting-for-business-2026",
    "best-ecommerce-platforms-2026",
}

CREATIVE = {
    "best-video-editing-software-2026",
    "best-photo-editing-software-2026",
    "best-graphic-design-tools-2026",
    "best-screen-recording-software-2026",
    "best-podcast-hosting-2026",
    "best-ai-writing-tools-2026",
}

HOMEOFFICE = {
    "how-to-set-up-home-office-2026",
}

# Everything else goes to PRODUCTIVITY_BLOCK (SaaS / accounting / CRM / etc)


def block_for(slug: str) -> str:
    if slug in PRIVACY:
        return PRIVACY_BLOCK
    if slug in WEBDEV:
        return WEBDEV_BLOCK
    if slug in CREATIVE:
        return CREATIVE_BLOCK
    if slug in HOMEOFFICE:
        return HOMEOFFICE_BLOCK
    return PRODUCTIVITY_BLOCK


# ---- Injection logic ------------------------------------------------------

def inject(content: str, block: str) -> str:
    """Insert the gear block BEFORE the '**Related articles on Nest Digital Studio:**'
    marker. If the marker isn't present, append at the end."""
    marker = "**Related articles on Nest Digital Studio:**"
    if marker in content:
        idx = content.rfind(marker)
        # Also include the horizontal rule right before it if present
        lookback = content.rfind("---", 0, idx)
        anchor = lookback if lookback != -1 and idx - lookback < 20 else idx
        return content[:anchor] + block.rstrip() + "\n\n---\n\n" + content[anchor:]
    return content.rstrip() + "\n\n" + block


def main():
    files = sorted(f for f in os.listdir(ARTICLES_DIR) if f.endswith(".json"))
    to_fix = []
    for fn in files:
        with open(os.path.join(ARTICLES_DIR, fn), "r", encoding="utf-8") as f:
            text = f.read()
        if TAG not in text:
            to_fix.append(fn)

    print(f"Found {len(to_fix)} articles without Amazon links. Injecting...")

    stats = {"privacy": 0, "webdev": 0, "creative": 0, "homeoffice": 0, "productivity": 0}

    for fn in to_fix:
        path = os.path.join(ARTICLES_DIR, fn)
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)

        slug = data.get("slug") or fn.replace(".json", "")
        block = block_for(slug)

        if block is PRIVACY_BLOCK:
            stats["privacy"] += 1
        elif block is WEBDEV_BLOCK:
            stats["webdev"] += 1
        elif block is CREATIVE_BLOCK:
            stats["creative"] += 1
        elif block is HOMEOFFICE_BLOCK:
            stats["homeoffice"] += 1
        else:
            stats["productivity"] += 1

        original = data.get("content", "")
        if TAG in original:
            continue  # Belt-and-braces safety

        data["content"] = inject(original, block)

        # Bump modifiedDate to force re-crawl
        from datetime import datetime, timezone
        data["modifiedDate"] = datetime.now(timezone.utc).strftime("%Y-%m-%d")

        # Bump word count roughly (for metadata consistency)
        data["wordCount"] = len(data["content"].split())

        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

        print(f"  [OK] {fn}")

    print()
    print("Distribution:")
    for k, v in stats.items():
        print(f"  {k}: {v}")
    print(f"Total injected: {sum(stats.values())}")


if __name__ == "__main__":
    main()
