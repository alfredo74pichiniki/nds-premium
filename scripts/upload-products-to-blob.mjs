#!/usr/bin/env node
/**
 * Upload digital products to Vercel Blob storage.
 *
 * Prerequisites:
 *   1. Vercel Blob store created at https://vercel.com/dashboard (Storage → Blob)
 *   2. BLOB_READ_WRITE_TOKEN exported in your environment
 *
 * Usage:
 *   cd nds-premium
 *   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxx node scripts/upload-products-to-blob.mjs
 *
 * Output:
 *   For each product it prints `BLOB_URL_<SLUG>=<public url>`.
 *   Copy those lines into Vercel env vars (or .env.local for local testing).
 */

import { put } from "@vercel/blob";
import fs from "node:fs";
import path from "node:path";

const PRODUCTS = [
    {
        envVar: "BLOB_URL_PERSONAL_FINANCE_DASHBOARD",
        fileName: "Personal_Finance_Dashboard_Pro_v4.xlsx",
        source: "factory/output/products",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    {
        envVar: "BLOB_URL_TRAVEL_PLANNER_BUNDLE",
        fileName: "Ultimate_Travel_Planner_Bundle_v1.xlsx",
        source: "factory/output/products",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    {
        envVar: "BLOB_URL_HABIT_TRACKER_2026",
        fileName: "Ultimate_Habit_Tracker_Pro_2026_v3.xlsx",
        source: "factory/output/products",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    {
        envVar: "BLOB_URL_AI_BEGINNERS_GUIDE",
        fileName: "ai-for-beginners-first-30-days.pdf",
        source: "factory/output/pdfs",
        contentType: "application/pdf",
    },
    {
        envVar: "BLOB_URL_SIDE_HUSTLE_INCOME_TRACKER",
        fileName: "Side_Hustle_Income_Tracker_Pro_2026.xlsx",
        source: "factory/output/products",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    {
        envVar: "BLOB_URL_MEAL_PLANNER_2026",
        fileName: "Ultimate_Meal_Planner_2026.xlsx",
        source: "factory/output/products",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    {
        envVar: "BLOB_URL_STUDENT_PRODUCTIVITY",
        fileName: "Student_Productivity_System_2026.xlsx",
        source: "factory/output/products",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    {
        envVar: "BLOB_URL_CONTENT_CREATOR_TOOLKIT",
        fileName: "Content_Creator_Toolkit_2026.xlsx",
        source: "factory/output/products",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    {
        envVar: "BLOB_URL_WEDDING_PLANNER",
        fileName: "Ultimate_Wedding_Planner_2026.xlsx",
        source: "factory/output/products",
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
];

// Resolve path relative to repo root (nds-premium/../)
const REPO_ROOT = path.resolve(process.cwd(), "..");

async function main() {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
        console.error(
            "BLOB_READ_WRITE_TOKEN not set. Get it from Vercel Dashboard → Storage → Blob → .env.local tab"
        );
        process.exit(1);
    }

    const results = [];
    for (const product of PRODUCTS) {
        const filePath = path.join(REPO_ROOT, product.source, product.fileName);
        if (!fs.existsSync(filePath)) {
            console.error(`[MISSING] ${filePath}`);
            results.push({ envVar: product.envVar, status: "missing", url: null });
            continue;
        }
        const stats = fs.statSync(filePath);
        console.log(`Uploading ${product.fileName} (${(stats.size / 1024).toFixed(1)} KB)...`);
        const buffer = fs.readFileSync(filePath);
        try {
            const blob = await put(`products/${product.fileName}`, buffer, {
                access: "public",
                contentType: product.contentType,
                addRandomSuffix: true, // cryptographically random URL = effectively private
            });
            console.log(`  ✓ ${product.envVar}=${blob.url}`);
            results.push({ envVar: product.envVar, status: "ok", url: blob.url });
        } catch (err) {
            console.error(`  ✗ Failed: ${err.message}`);
            results.push({ envVar: product.envVar, status: "error", url: null, error: err.message });
        }
    }

    console.log("\n========== ENV VARS — COPY TO VERCEL DASHBOARD ==========");
    for (const r of results) {
        if (r.url) console.log(`${r.envVar}=${r.url}`);
    }
    console.log("=========================================================\n");

    const ok = results.filter((r) => r.status === "ok").length;
    const failed = results.filter((r) => r.status !== "ok").length;
    console.log(`Uploaded ${ok}/${PRODUCTS.length}. Failed: ${failed}`);
}

main().catch((err) => {
    console.error("Fatal:", err);
    process.exit(1);
});
