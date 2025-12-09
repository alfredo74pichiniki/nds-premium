"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ExternalLink, Award, ThumbsUp, ThumbsDown } from "lucide-react";

interface Product {
    id: string;
    name: string;
    image: string;
    rating: number;
    reviewCount: number;
    price: string;
    badge?: "winner" | "budget" | "premium";
    pros: string[];
    cons: string[];
    amazonLink: string;
}

const sampleProducts: Product[] = [
    {
        id: "1",
        name: "Sony WH-1000XM5",
        image: "/images/products/sony-xm5.jpg",
        rating: 4.8,
        reviewCount: 12500,
        price: "$349",
        badge: "winner",
        pros: ["Best-in-class ANC", "30hr battery", "Premium comfort"],
        cons: ["High price", "No waterproofing"],
        amazonLink: "#",
    },
    {
        id: "2",
        name: "Apple AirPods Max",
        image: "/images/products/airpods-max.jpg",
        rating: 4.6,
        reviewCount: 8900,
        price: "$549",
        badge: "premium",
        pros: ["Exceptional sound", "Apple ecosystem", "Premium build"],
        cons: ["Very expensive", "Heavy"],
        amazonLink: "#",
    },
    {
        id: "3",
        name: "Soundcore Space One",
        image: "/images/products/soundcore.jpg",
        rating: 4.5,
        reviewCount: 5600,
        price: "$99",
        badge: "budget",
        pros: ["Great value", "Good ANC", "Long battery"],
        cons: ["Plastic build", "Basic app"],
        amazonLink: "#",
    },
];

function ProductCard3D({ product, index }: { product: Product; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
            }}
            className="group relative bg-gradient-to-br from-[var(--nds-bg-card)] to-[var(--nds-bg-elevated)] rounded-3xl p-6 border border-white/5 hover:border-[var(--nds-primary)]/30 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,180,216,0.15)]"
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Badge */}
            {product.badge && (
                <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${product.badge === "winner"
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black"
                        : product.badge === "premium"
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                            : "bg-gradient-to-r from-emerald-500 to-green-500 text-white"
                    }`}>
                    <Award className="w-3 h-3" />
                    {product.badge === "winner" ? "Editor's Choice" : product.badge === "premium" ? "Premium" : "Best Value"}
                </div>
            )}

            {/* Product image placeholder */}
            <div className="relative h-48 mb-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                    🎧
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--nds-primary)] transition-colors">
                {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-600"}`}
                        />
                    ))}
                </div>
                <span className="text-sm text-gray-400">
                    {product.rating} ({product.reviewCount.toLocaleString()} reviews)
                </span>
            </div>

            {/* Pros/Cons */}
            <div className="space-y-2 mb-4">
                {product.pros.slice(0, 2).map((pro, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <ThumbsUp className="w-3 h-3 text-emerald-500" />
                        {pro}
                    </div>
                ))}
                {product.cons.slice(0, 1).map((con, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                        <ThumbsDown className="w-3 h-3 text-red-400" />
                        {con}
                    </div>
                ))}
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-2xl font-bold text-[var(--nds-primary)]">
                    {product.price}
                </span>
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-primary-dark)] text-sm font-medium hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] transition-all duration-300 hover:scale-105">
                    View on Amazon
                    <ExternalLink className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
}

export function FeaturedProducts() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--nds-primary)]/10 text-[var(--nds-primary)] text-sm font-medium mb-4">
                        ⭐ Top Rated
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Featured <span className="gradient-text">Recommendations</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Our top picks based on 50,000+ verified user reviews
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sampleProducts.map((product, index) => (
                        <ProductCard3D key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
