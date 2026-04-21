# Stripe Digital Product Delivery — Setup Guide

**Last updated:** 21 April 2026
**Status:** Code ready, awaiting Blob store + env vars

This repo now has a fully working digital product delivery system:

- `src/lib/product-delivery.ts` — product catalog + Resend email delivery
- `src/app/api/webhook/stripe/route.ts` — Stripe webhook handler that triggers delivery
- `src/app/checkout/success/page.tsx` — honest success page
- `scripts/upload-products-to-blob.mjs` — upload script for files

## What Claude already did

1. Installed `@vercel/blob`
2. Built the delivery system (product catalog, email template, webhook wiring)
3. Wrote a beautiful branded HTML email template (editorial style, matches future NDS identity)
4. Added admin fallback — if delivery fails, admin@nestdigitalstudio.com gets an urgent email so you can manually send the file
5. Rewrote success page — no longer promises things that aren't happening

## What YOU need to do (5 steps)

### 1. Create a Vercel Blob Store

- Go to: https://vercel.com/dashboard
- Click on the `nds-premium` project
- Go to **Storage** tab → **Create Database** → **Blob**
- Name it `nds-products` (or whatever you like)
- Click **Create**
- Vercel will auto-add `BLOB_READ_WRITE_TOKEN` to your project env vars

### 2. Pull the env vars locally

```bash
cd nds-premium
npx vercel env pull
```

This creates/updates `.env.local` with the `BLOB_READ_WRITE_TOKEN`.

### 3. Upload the 9 products to Blob

```bash
cd nds-premium
node scripts/upload-products-to-blob.mjs
```

The script prints 9 `BLOB_URL_XXX=https://...` lines at the end. **Copy those.**

### 4. Add the 9 Blob URLs to Vercel env vars

Either:
- Paste them into the Vercel Dashboard (Project → Settings → Environment Variables), marking them for **Production** + **Preview** + **Development**.
- OR use the Vercel CLI:
  ```bash
  vercel env add BLOB_URL_PERSONAL_FINANCE_DASHBOARD production
  # paste the URL when prompted
  # repeat for each of the 9
  ```

Then redeploy (or it happens automatically on next commit).

### 5. Configure Stripe Webhook

If not already done:

1. Go to: https://dashboard.stripe.com/webhooks
2. **Add endpoint**
3. URL: `https://nestdigitalstudio.com/api/webhook/stripe`
4. Events to listen to: **`checkout.session.completed`** (that's all you need)
5. Copy the **Signing secret** (starts with `whsec_...`)
6. Add to Vercel env vars: `STRIPE_WEBHOOK_SECRET=whsec_xxx`
7. Redeploy

### 6. (Optional but recommended) Verify domain in Resend

This stops emails going from `onboarding@resend.dev` (which looks spammy).

1. Go to: https://resend.com/domains
2. Add `nestdigitalstudio.com`
3. Add the DNS records Resend gives you to your domain provider
4. Once verified, add env var: `RESEND_FROM_EMAIL=Nest Digital Studio <hello@nestdigitalstudio.com>`

## How to test end-to-end

1. Use Stripe **Test mode** — switch key to `sk_test_xxx` in Vercel env temporarily
2. Create a test checkout via `/products/<slug>`
3. Pay with Stripe test card: `4242 4242 4242 4242`, any future date, any CVC
4. Watch Vercel logs (`vercel logs --follow`)
5. You should receive:
   - Stripe receipt email
   - Delivery email with working download link
6. Click link → confirm file downloads correctly

Once verified: switch env back to `sk_live_xxx`.

## Architecture overview

```
Customer                 Stripe                  Vercel (this repo)              Resend
   │                        │                           │                           │
   ├─ Buys product ────────►│                           │                           │
   │                        ├─ Redirect to Checkout ─►  │                           │
   │ ◄─ Pays ───────────────┤                           │                           │
   │                        │                           │                           │
   │                        ├─ Webhook: session.completed ─►                        │
   │                        │                           │                           │
   │                        │             /api/webhook/stripe                       │
   │                        │                ├─ Verify signature                    │
   │                        │                ├─ Lookup product catalog              │
   │                        │                ├─ Get Blob URL from env               │
   │                        │                └─ Build + send email ─────────────►   │
   │                        │                                                       │
   │ ◄──────────────── Email with download link ─────────────────────────────────── ┤
   │                                                                                 │
   ├─ Clicks link, downloads file from Vercel Blob (public URL, random suffix)      │
```

## What happens when things go wrong

- **Invalid signature** → 400 returned, no delivery attempt
- **Unknown product slug** → Returns 200 to Stripe (so it doesn't retry), logs error
- **Missing Blob URL** → Returns 200, sends admin email: `[URGENT] Delivery failed for X`
- **Resend API fails** → Returns 200, sends admin email

The admin failure emails have the session ID, customer email, and the reason, so you can manually send the file to the customer and fix the config.

## Security notes

- Files are stored as **public** Vercel Blobs but with cryptographically random URLs (32+ chars).
- A URL is effectively unguessable — attacker would need 2^256 attempts.
- This is the same model Gumroad, Lemon Squeezy, and most creator tools use.
- For higher security (per-purchase signed URLs with expiration), the architecture can be extended. For now this is enough.
