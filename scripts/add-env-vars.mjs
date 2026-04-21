#!/usr/bin/env node
/**
 * Add all 11 env vars to Vercel project nds-premium via API.
 * One-shot utility.
 */

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = "prj_1yNz30iGPteVZP635MkN5WT8Ri2e";
const TEAM_ID = "team_ZZGPAe4XbGqlfuTqoQ2zzVgo";

if (!VERCEL_TOKEN) {
    console.error("VERCEL_TOKEN not set");
    process.exit(1);
}

const ENV_VARS = [
    {
        key: "BLOB_URL_PERSONAL_FINANCE_DASHBOARD",
        value: "https://ja6og3kp3j751wxy.private.blob.vercel-storage.com/products/Personal_Finance_Dashboard_Pro_v4-F1UhmnhRBecfPSsM1l39gCLaXVtZ3j.xlsx",
    },
    {
        key: "BLOB_URL_TRAVEL_PLANNER_BUNDLE",
        value: "https://ja6og3kp3j751wxy.private.blob.vercel-storage.com/products/Ultimate_Travel_Planner_Bundle_v1-UwM1w6w2ra0x2MEgh7KWUBzwVdjj5M.xlsx",
    },
    {
        key: "BLOB_URL_HABIT_TRACKER_2026",
        value: "https://ja6og3kp3j751wxy.private.blob.vercel-storage.com/products/Ultimate_Habit_Tracker_Pro_2026_v3-AnxPZZdsivT8p04bGQ9krQeMUoVSTB.xlsx",
    },
    {
        key: "BLOB_URL_AI_BEGINNERS_GUIDE",
        value: "https://ja6og3kp3j751wxy.private.blob.vercel-storage.com/products/ai-for-beginners-first-30-days-OyD9qTRmrfV6kjRL2qXWPcbAeJkCJ3.pdf",
    },
    {
        key: "BLOB_URL_SIDE_HUSTLE_INCOME_TRACKER",
        value: "https://ja6og3kp3j751wxy.private.blob.vercel-storage.com/products/Side_Hustle_Income_Tracker_Pro_2026-E0cBJyRuDRTi4PwQUjaVIqsPub3Mdz.xlsx",
    },
    {
        key: "BLOB_URL_MEAL_PLANNER_2026",
        value: "https://ja6og3kp3j751wxy.private.blob.vercel-storage.com/products/Ultimate_Meal_Planner_2026-yzq8Nk3sV2Oaypz1YMkYFxFcglscu9.xlsx",
    },
    {
        key: "BLOB_URL_STUDENT_PRODUCTIVITY",
        value: "https://ja6og3kp3j751wxy.private.blob.vercel-storage.com/products/Student_Productivity_System_2026-jurGjhlwuLvMSOSdBx0W1SX5darQ1l.xlsx",
    },
    {
        key: "BLOB_URL_CONTENT_CREATOR_TOOLKIT",
        value: "https://ja6og3kp3j751wxy.private.blob.vercel-storage.com/products/Content_Creator_Toolkit_2026-yiojn3BMnwPVs75T71Y5yygtcxYTSP.xlsx",
    },
    {
        key: "BLOB_URL_WEDDING_PLANNER",
        value: "https://ja6og3kp3j751wxy.private.blob.vercel-storage.com/products/Ultimate_Wedding_Planner_2026-SJlbLLzj7KRlcLiz6gqkWCg9zCM49A.xlsx",
    },
    {
        key: "DOWNLOAD_TOKEN_SECRET",
        value: "1b5be3625b8493c73b85035a9d3af4e02dedc09aaa26072be3a48011049b5fd7",
    },
    {
        key: "NEXT_PUBLIC_BASE_URL",
        value: "https://nestdigitalstudio.com",
    },
];

async function addEnvVar(key, value) {
    const url = `https://api.vercel.com/v10/projects/${PROJECT_ID}/env?teamId=${TEAM_ID}&upsert=true`;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${VERCEL_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            key,
            value,
            type: "encrypted",
            target: ["production", "preview", "development"],
        }),
    });
    const data = await res.json();
    if (!res.ok) {
        // If already exists, try updating
        if (data.error?.code === "ENV_ALREADY_EXISTS") {
            return { key, status: "exists" };
        }
        return { key, status: "error", error: data.error?.message || JSON.stringify(data) };
    }
    return { key, status: "ok" };
}

async function main() {
    console.log(`Adding ${ENV_VARS.length} env vars to nds-premium...`);
    const results = [];
    for (const v of ENV_VARS) {
        const r = await addEnvVar(v.key, v.value);
        const icon = r.status === "ok" ? "✓" : r.status === "exists" ? "~" : "✗";
        console.log(`  ${icon} ${r.key}${r.error ? ` — ${r.error}` : ""}`);
        results.push(r);
    }

    const ok = results.filter((r) => r.status === "ok").length;
    const exists = results.filter((r) => r.status === "exists").length;
    const errors = results.filter((r) => r.status === "error").length;
    console.log(`\nResult: ${ok} created, ${exists} already existed, ${errors} errors`);
    if (errors > 0) process.exit(1);
}

main().catch((err) => {
    console.error("Fatal:", err);
    process.exit(1);
});
