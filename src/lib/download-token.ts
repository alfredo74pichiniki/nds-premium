/**
 * Signed download tokens for digital product delivery.
 *
 * Format: base64url(JSON payload).base64url(HMAC-SHA256(payload, secret))
 *
 * Payload:
 *   {
 *     s: productSlug,
 *     c: stripeSessionId,
 *     e: customerEmail (optional, can be empty),
 *     i: issuedAt (unix seconds),
 *     x: expiresAt (unix seconds),
 *   }
 *
 * Tokens expire 7 days after issue. Secret lives in DOWNLOAD_TOKEN_SECRET env var.
 */

import { createHmac, timingSafeEqual } from "node:crypto";

const TOKEN_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days

export interface TokenPayload {
    s: string; // product slug
    c: string; // stripe session id
    e?: string; // customer email (optional, for logging)
    i: number; // issued at (unix seconds)
    x: number; // expires at (unix seconds)
}

function base64UrlEncode(buffer: Buffer): string {
    return buffer
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

function base64UrlDecode(str: string): Buffer {
    const pad = str.length % 4 === 0 ? 0 : 4 - (str.length % 4);
    const base64 = str.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat(pad);
    return Buffer.from(base64, "base64");
}

function getSecret(): string {
    const secret = process.env.DOWNLOAD_TOKEN_SECRET;
    if (!secret) {
        throw new Error("DOWNLOAD_TOKEN_SECRET env var is not set");
    }
    return secret;
}

export function signDownloadToken(params: {
    productSlug: string;
    stripeSessionId: string;
    customerEmail?: string;
}): string {
    const now = Math.floor(Date.now() / 1000);
    const payload: TokenPayload = {
        s: params.productSlug,
        c: params.stripeSessionId,
        e: params.customerEmail,
        i: now,
        x: now + TOKEN_TTL_SECONDS,
    };
    const payloadStr = JSON.stringify(payload);
    const payloadB64 = base64UrlEncode(Buffer.from(payloadStr, "utf-8"));
    const mac = createHmac("sha256", getSecret()).update(payloadB64).digest();
    const macB64 = base64UrlEncode(mac);
    return `${payloadB64}.${macB64}`;
}

export type VerifyResult =
    | { valid: true; payload: TokenPayload }
    | { valid: false; reason: string };

export function verifyDownloadToken(token: string): VerifyResult {
    const parts = token.split(".");
    if (parts.length !== 2) {
        return { valid: false, reason: "Malformed token" };
    }
    const [payloadB64, macB64] = parts;

    let expectedMac: Buffer;
    let providedMac: Buffer;
    try {
        expectedMac = createHmac("sha256", getSecret()).update(payloadB64).digest();
        providedMac = base64UrlDecode(macB64);
    } catch {
        return { valid: false, reason: "Invalid token encoding" };
    }

    if (expectedMac.length !== providedMac.length) {
        return { valid: false, reason: "Invalid signature length" };
    }
    if (!timingSafeEqual(expectedMac, providedMac)) {
        return { valid: false, reason: "Invalid signature" };
    }

    let payload: TokenPayload;
    try {
        const payloadStr = base64UrlDecode(payloadB64).toString("utf-8");
        payload = JSON.parse(payloadStr) as TokenPayload;
    } catch {
        return { valid: false, reason: "Invalid payload" };
    }

    const now = Math.floor(Date.now() / 1000);
    if (typeof payload.x !== "number" || payload.x < now) {
        return { valid: false, reason: "Token expired" };
    }
    if (!payload.s || !payload.c) {
        return { valid: false, reason: "Missing product or session" };
    }

    return { valid: true, payload };
}
