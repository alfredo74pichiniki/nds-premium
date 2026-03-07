import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // =====================================================
      // Old Shopify product URLs → /products page
      // These were used in social media posts before Shopify
      // was shut down. Keeps old Pinterest pins, tweets, etc. alive.
      // =====================================================
      {
        source: "/products/personal-finance-dashboard-google-sheets-template-excel",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/habit-tracker-2026-google-sheets-template-track-progress",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/ai-for-beginners-course",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/travel-planner-bundle",
        destination: "/products",
        permanent: true,
      },
      // Legacy product slugs (from old Shopify catalog)
      {
        source: "/products/personal-finance-dashboard",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/habit-tracker-2026",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/ai-beginners-guide",
        destination: "/products",
        permanent: true,
      },
      // Catch-all: any other old /products/slug that doesn't
      // have its own page → redirect to products listing
      {
        source: "/products/:slug((?!$).*)",
        destination: "/products",
        permanent: false,  // 302 for catch-all (flexible)
      },
    ];
  },
};

export default nextConfig;
