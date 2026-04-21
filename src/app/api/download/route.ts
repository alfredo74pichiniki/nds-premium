/**
 * Signed download endpoint for purchased digital products.
 *
 * Customers click a link like:
 *   /api/download?t=<signed-token>
 *
 * The token encodes the product slug + Stripe session ID + expiration.
 * We verify the signature, fetch the file from the private Blob store,
 * and stream it back with the correct filename.
 */

import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/blob";
import { verifyDownloadToken } from "@/lib/download-token";
import { getProduct, getProductDownloadUrl } from "@/lib/product-delivery";

// Keep this on the Node.js runtime so @vercel/blob + streaming work reliably.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    const token = request.nextUrl.searchParams.get("t");
    if (!token) {
        return NextResponse.json(
            { error: "Missing token" },
            { status: 400 }
        );
    }

    const verification = verifyDownloadToken(token);
    if (!verification.valid) {
        return NextResponse.json(
            { error: `Invalid token: ${verification.reason}` },
            { status: 403 }
        );
    }

    const { payload } = verification;
    const product = getProduct(payload.s);
    if (!product) {
        return NextResponse.json(
            { error: "Unknown product" },
            { status: 404 }
        );
    }

    const blobUrl = getProductDownloadUrl(product);
    if (!blobUrl) {
        console.error(
            `[download] Missing env var ${product.envVar} for product ${product.slug}`
        );
        return NextResponse.json(
            { error: "Product not available. Contact support." },
            { status: 500 }
        );
    }

    try {
        const blob = await get(blobUrl, { access: "private" });
        if (!blob) {
            return NextResponse.json(
                { error: "File not found" },
                { status: 404 }
            );
        }

        const mime =
            product.fileType === "pdf"
                ? "application/pdf"
                : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

        console.log(
            `[download] Serving ${product.slug} (session ${payload.c}, email ${payload.e ?? "?"})`
        );

        return new NextResponse(blob.stream, {
            status: 200,
            headers: {
                "Content-Type": mime,
                "Content-Disposition": `attachment; filename="${product.fileName}"`,
                "Cache-Control": "private, no-store",
            },
        });
    } catch (err) {
        console.error("[download] Failed to fetch blob:", err);
        return NextResponse.json(
            { error: "Download failed. Contact support." },
            { status: 500 }
        );
    }
}
