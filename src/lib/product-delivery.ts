/**
 * Product Delivery Service
 *
 * Handles digital product delivery after Stripe payment:
 * 1. Map product slug to Blob URL (files uploaded via scripts/upload-products.mjs)
 * 2. Send beautiful branded email via Resend with download link
 *
 * The Blob URLs are cryptographically random and unguessable, providing
 * effective privacy without needing per-purchase signed URLs.
 */

// ============================================
// PRODUCT CATALOG (source of truth)
// ============================================

export interface DigitalProduct {
    slug: string;
    name: string;
    price: number; // cents
    description: string;
    fileName: string; // file in factory/output/products or pdfs
    fileType: "xlsx" | "pdf";
    /**
     * Vercel Blob public URL. Set via env vars after upload.
     * Format: BLOB_URL_<SLUG_UPPER> (e.g. BLOB_URL_PERSONAL_FINANCE_DASHBOARD)
     */
    envVar: string;
}

export const DIGITAL_PRODUCTS: Record<string, DigitalProduct> = {
    "personal-finance-dashboard": {
        slug: "personal-finance-dashboard",
        name: "Personal Finance Dashboard",
        price: 2900,
        description: "Google Sheets template to track income, expenses, investments & net worth. 11 automated sheets.",
        fileName: "Personal_Finance_Dashboard_Pro_v4.xlsx",
        fileType: "xlsx",
        envVar: "BLOB_URL_PERSONAL_FINANCE_DASHBOARD",
    },
    "travel-planner-bundle": {
        slug: "travel-planner-bundle",
        name: "Travel Planner Bundle",
        price: 3499,
        description: "Google Sheets + Notion templates for trip planning, budgets & itineraries. 10-sheet planner.",
        fileName: "Ultimate_Travel_Planner_Bundle_v1.xlsx",
        fileType: "xlsx",
        envVar: "BLOB_URL_TRAVEL_PLANNER_BUNDLE",
    },
    "habit-tracker-2026": {
        slug: "habit-tracker-2026",
        name: "Habit Tracker Pro 2026",
        price: 999,
        description: "Visual habit tracking system with streaks, analytics & weekly reviews. 19 sheets.",
        fileName: "Ultimate_Habit_Tracker_Pro_2026_v3.xlsx",
        fileType: "xlsx",
        envVar: "BLOB_URL_HABIT_TRACKER_2026",
    },
    "ai-beginners-guide": {
        slug: "ai-beginners-guide",
        name: "AI for Beginners: 30-Day Guide",
        price: 999,
        description: "Learn ChatGPT, Claude, Gemini & more — from zero to productive in 30 days. 200+ pages.",
        fileName: "ai-for-beginners-first-30-days.pdf",
        fileType: "pdf",
        envVar: "BLOB_URL_AI_BEGINNERS_GUIDE",
    },
    "side-hustle-income-tracker": {
        slug: "side-hustle-income-tracker",
        name: "Side Hustle Income Tracker Pro",
        price: 2499,
        description: "Track multiple income streams, expenses, and profit margins in one dashboard. 15 sheets.",
        fileName: "Side_Hustle_Income_Tracker_Pro_2026.xlsx",
        fileType: "xlsx",
        envVar: "BLOB_URL_SIDE_HUSTLE_INCOME_TRACKER",
    },
    "meal-planner-2026": {
        slug: "meal-planner-2026",
        name: "Ultimate Meal Planner 2026",
        price: 1499,
        description: "Weekly meal planning, grocery lists, nutrition tracking & recipe organizer. 12 sheets.",
        fileName: "Ultimate_Meal_Planner_2026.xlsx",
        fileType: "xlsx",
        envVar: "BLOB_URL_MEAL_PLANNER_2026",
    },
    "student-productivity": {
        slug: "student-productivity",
        name: "Student Productivity System",
        price: 1299,
        description: "GPA tracker, assignment planner, study scheduler & exam prep all-in-one. 15 sheets.",
        fileName: "Student_Productivity_System_2026.xlsx",
        fileType: "xlsx",
        envVar: "BLOB_URL_STUDENT_PRODUCTIVITY",
    },
    "content-creator-toolkit": {
        slug: "content-creator-toolkit",
        name: "Content Creator Toolkit",
        price: 2499,
        description: "Content calendar, analytics dashboard, brand kit & collaboration tracker. 14 sheets.",
        fileName: "Content_Creator_Toolkit_2026.xlsx",
        fileType: "xlsx",
        envVar: "BLOB_URL_CONTENT_CREATOR_TOOLKIT",
    },
    "wedding-planner": {
        slug: "wedding-planner",
        name: "Ultimate Wedding Planner",
        price: 2999,
        description: "Budget tracker, guest list manager, vendor contacts & timeline planner. 16 sheets.",
        fileName: "Ultimate_Wedding_Planner_2026.xlsx",
        fileType: "xlsx",
        envVar: "BLOB_URL_WEDDING_PLANNER",
    },
};

export function getProduct(slug: string): DigitalProduct | null {
    return DIGITAL_PRODUCTS[slug] ?? null;
}

export function getProductDownloadUrl(product: DigitalProduct): string | null {
    const url = process.env[product.envVar];
    return url ?? null;
}

// ============================================
// EMAIL DELIVERY
// ============================================

const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Nest Digital Studio <onboarding@resend.dev>";
const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://nestdigitalstudio.com";

export interface DeliveryResult {
    success: boolean;
    error?: string;
}

export async function deliverProductByEmail(params: {
    customerEmail: string;
    customerName?: string;
    product: DigitalProduct;
    downloadUrl: string; // signed /api/download?t=... URL
    sessionId: string;
    amountCents: number;
}): Promise<DeliveryResult> {
    const { customerEmail, customerName, product, downloadUrl, sessionId, amountCents } = params;
    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
        console.error("[delivery] RESEND_API_KEY not set — cannot send email");
        return { success: false, error: "Email service not configured" };
    }

    const amountUsd = (amountCents / 100).toFixed(2);
    const displayName = customerName || customerEmail.split("@")[0];

    const html = buildDeliveryEmail({
        customerName: displayName,
        product,
        downloadUrl,
        amountUsd,
        sessionId,
    });

    try {
        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${resendKey}`,
            },
            body: JSON.stringify({
                from: RESEND_FROM_EMAIL,
                to: customerEmail,
                reply_to: "admin@nestdigitalstudio.com",
                subject: `Your ${product.name} is ready — Thank you for your purchase`,
                html,
            }),
        });

        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            console.error("[delivery] Resend API error:", errData);
            return { success: false, error: `Resend error: ${JSON.stringify(errData)}` };
        }

        console.log(`[delivery] Sent ${product.slug} to ${customerEmail} (session ${sessionId})`);
        return { success: true };
    } catch (err) {
        console.error("[delivery] Failed to send email:", err);
        return { success: false, error: err instanceof Error ? err.message : "Unknown error" };
    }
}

// ============================================
// EMAIL TEMPLATE (editorial, branded)
// ============================================

function buildDeliveryEmail(params: {
    customerName: string;
    product: DigitalProduct;
    downloadUrl: string;
    amountUsd: string;
    sessionId: string;
}): string {
    const { customerName, product, downloadUrl, amountUsd, sessionId } = params;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your ${product.name} is ready</title>
</head>
<body style="margin:0;padding:0;background:#F5F1E8;font-family:Georgia,'Times New Roman',serif;color:#1A1614;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F5F1E8;padding:40px 20px;">
<tr><td align="center">

<table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background:#FFFFFF;border:1px solid #E4DCC3;">

<!-- Header -->
<tr>
  <td style="padding:40px 40px 24px 40px;border-bottom:1px solid #E4DCC3;">
    <table role="presentation" width="100%"><tr>
      <td style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:2.5px;color:#6B625A;text-transform:uppercase;">
        Nest Digital Studio
      </td>
      <td align="right" style="font-family:'Courier New',monospace;font-size:11px;letter-spacing:2px;color:#9A9085;text-transform:uppercase;">
        Order ${sessionId.slice(-8).toUpperCase()}
      </td>
    </tr></table>
  </td>
</tr>

<!-- Greeting -->
<tr>
  <td style="padding:48px 40px 8px 40px;">
    <p style="margin:0;font-size:16px;color:#3A3530;font-style:italic;">Hi ${escapeHtmlAttr(customerName)},</p>
  </td>
</tr>

<!-- Main headline -->
<tr>
  <td style="padding:12px 40px 24px 40px;">
    <h1 style="margin:0;font-size:40px;line-height:1.1;font-weight:400;letter-spacing:-1px;color:#1A1614;">
      Your ${escapeHtmlAttr(product.name)} is ready.
    </h1>
  </td>
</tr>

<!-- Thank you body -->
<tr>
  <td style="padding:0 40px 32px 40px;">
    <p style="margin:0;font-size:16px;line-height:1.6;color:#3A3530;">
      Thank you for your purchase. We've prepared your file and you can download it right away using the button below.
    </p>
  </td>
</tr>

<!-- CTA -->
<tr>
  <td style="padding:0 40px 40px 40px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="background:#1A1614;">
          <a href="${downloadUrl}" style="display:inline-block;padding:18px 32px;font-family:'Courier New',monospace;font-size:12px;letter-spacing:2.5px;color:#F5F1E8;text-decoration:none;text-transform:uppercase;font-weight:500;">
            Download Your File →
          </a>
        </td>
      </tr>
    </table>
    <p style="margin:16px 0 0 0;font-size:13px;color:#6B625A;">
      Or copy this link: <span style="color:#B94A2A;word-break:break-all;">${downloadUrl}</span>
    </p>
  </td>
</tr>

<!-- Divider -->
<tr><td style="padding:0 40px;"><div style="height:1px;background:#E4DCC3;"></div></td></tr>

<!-- Receipt -->
<tr>
  <td style="padding:32px 40px 8px 40px;">
    <p style="margin:0 0 12px 0;font-family:'Courier New',monospace;font-size:11px;letter-spacing:2.5px;color:#6B625A;text-transform:uppercase;">Receipt</p>
  </td>
</tr>
<tr>
  <td style="padding:0 40px 8px 40px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="font-size:15px;color:#3A3530;padding:6px 0;">${escapeHtmlAttr(product.name)}</td>
        <td align="right" style="font-size:15px;color:#1A1614;padding:6px 0;">$${amountUsd}</td>
      </tr>
      <tr>
        <td colspan="2" style="padding:8px 0 0 0;"><div style="height:1px;background:#E4DCC3;"></div></td>
      </tr>
      <tr>
        <td style="font-size:15px;color:#1A1614;padding:8px 0;font-weight:600;">Total</td>
        <td align="right" style="font-size:15px;color:#1A1614;padding:8px 0;font-weight:600;">$${amountUsd} USD</td>
      </tr>
    </table>
  </td>
</tr>

<!-- Tips -->
<tr>
  <td style="padding:32px 40px 16px 40px;">
    <p style="margin:0 0 12px 0;font-family:'Courier New',monospace;font-size:11px;letter-spacing:2.5px;color:#6B625A;text-transform:uppercase;">A few notes</p>
    <ul style="margin:0;padding-left:20px;font-size:14px;line-height:1.7;color:#3A3530;">
      <li>Save the file to your computer so you can access it anytime.</li>
      <li>${product.fileType === "xlsx" ? "Open the .xlsx with Microsoft Excel, Google Sheets, or Numbers." : "The PDF opens in any modern browser or PDF reader."}</li>
      <li>Questions? Reply to this email or write to admin@nestdigitalstudio.com.</li>
    </ul>
  </td>
</tr>

<!-- Footer -->
<tr>
  <td style="padding:32px 40px 40px 40px;border-top:1px solid #E4DCC3;">
    <p style="margin:0 0 8px 0;font-family:'Courier New',monospace;font-size:11px;letter-spacing:2px;color:#9A9085;text-transform:uppercase;">
      Nest Digital Studio · Est. MMXXIV
    </p>
    <p style="margin:0;font-size:13px;color:#6B625A;line-height:1.6;">
      Templates and guides for modern life. <a href="${SITE_URL}" style="color:#B94A2A;text-decoration:none;">nestdigitalstudio.com</a>
    </p>
  </td>
</tr>

</table>

</td></tr>
</table>
</body>
</html>
`.trim();
}

function escapeHtmlAttr(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
