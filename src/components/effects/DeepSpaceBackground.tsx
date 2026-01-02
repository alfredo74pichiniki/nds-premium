"use client";
/**
 * DeepSpaceBackground - Subtle and Premium
 * 
 * Un fondo espacial elegante y profesional:
 * - Estrellas sutiles que parpadean suavemente
 * - Nebulosas difusas y lentas
 * - Sin elementos agresivos ni "disco ball"
 * - Movimiento muy lento y calmado
 */

import { motion } from "framer-motion";
import { useMemo } from "react";

// ============ TWINKLING STARS (Subtle) ============
function TwinklingStars() {
    const stars = useMemo(() => {
        return Array.from({ length: 80 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 5,
            maxOpacity: 0.3 + Math.random() * 0.5,
        }));
    }, []);

    return (
        <div className="absolute inset-0">
            {stars.map(star => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [0.1, star.maxOpacity, 0.1],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// ============ SLOW FLOATING NEBULAE ============
function FloatingNebulae() {
    const nebulae = useMemo(() => [
        {
            id: 1,
            color1: "rgba(100, 50, 200, 0.08)",
            color2: "rgba(50, 100, 180, 0.05)",
            x: 10, y: 20,
            size: 500,
            duration: 60
        },
        {
            id: 2,
            color1: "rgba(200, 50, 100, 0.06)",
            color2: "rgba(150, 80, 120, 0.04)",
            x: 70, y: 60,
            size: 400,
            duration: 80
        },
        {
            id: 3,
            color1: "rgba(50, 150, 200, 0.07)",
            color2: "rgba(80, 120, 180, 0.04)",
            x: 40, y: 80,
            size: 350,
            duration: 70
        },
    ], []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {nebulae.map(nebula => (
                <motion.div
                    key={nebula.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${nebula.x}%`,
                        top: `${nebula.y}%`,
                        width: nebula.size,
                        height: nebula.size,
                        background: `radial-gradient(circle, ${nebula.color1} 0%, ${nebula.color2} 40%, transparent 70%)`,
                        filter: "blur(60px)",
                        transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -30, 40, 0],
                        scale: [1, 1.1, 0.95, 1],
                        opacity: [0.6, 0.8, 0.6, 0.7],
                    }}
                    transition={{
                        duration: nebula.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// ============ SUBTLE SHOOTING STARS (Only 3) ============
function SubtleShootingStars() {
    const shootingStars = useMemo(() => [
        { id: 1, startX: 10, startY: 15, angle: 45, delay: 0, duration: 3 },
        { id: 2, startX: 80, startY: 25, angle: 135, delay: 8, duration: 2.5 },
        { id: 3, startX: 50, startY: 5, angle: 60, delay: 15, duration: 3.5 },
    ], []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {shootingStars.map(star => {
                const radians = (star.angle * Math.PI) / 180;
                const endX = star.startX + Math.cos(radians) * 40;
                const endY = star.startY + Math.sin(radians) * 40;

                return (
                    <motion.div
                        key={star.id}
                        className="absolute"
                        style={{
                            left: `${star.startX}%`,
                            top: `${star.startY}%`,
                            width: 2,
                            height: 2,
                            background: "white",
                            borderRadius: "50%",
                            boxShadow: "0 0 6px rgba(255,255,255,0.8), -10px 0 15px rgba(255,255,255,0.4), -20px 0 20px rgba(255,255,255,0.2)",
                        }}
                        animate={{
                            left: [`${star.startX}%`, `${endX}%`],
                            top: [`${star.startY}%`, `${endY}%`],
                            opacity: [0, 1, 0.8, 0],
                        }}
                        transition={{
                            duration: star.duration,
                            delay: star.delay,
                            repeat: Infinity,
                            repeatDelay: 20,
                            ease: "easeOut",
                        }}
                    />
                );
            })}
        </div>
    );
}

// ============ GRADIENT OVERLAY ============
function GradientOverlay() {
    return (
        <>
            {/* Top gradient */}
            <div
                className="absolute inset-x-0 top-0 h-1/3 pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, rgba(10,10,30,0.9) 0%, transparent 100%)",
                }}
            />

            {/* Bottom gradient */}
            <div
                className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none"
                style={{
                    background: "linear-gradient(to top, rgba(5,5,15,1) 0%, transparent 100%)",
                }}
            />

            {/* Vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
                }}
            />
        </>
    );
}

// ============ MAIN COMPONENT ============
export default function DeepSpaceBackground() {
    return (
        <div
            className="absolute inset-0 overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #0a0a1a 0%, #050510 50%, #020208 100%)",
            }}
        >
            {/* Static star field (CSS only) */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `
                        radial-gradient(1px 1px at 10% 10%, rgba(255,255,255,0.7) 1px, transparent 0),
                        radial-gradient(1.5px 1.5px at 20% 40%, rgba(255,255,255,0.5) 1px, transparent 0),
                        radial-gradient(1px 1px at 30% 70%, rgba(255,255,255,0.6) 1px, transparent 0),
                        radial-gradient(1px 1px at 40% 20%, rgba(255,255,255,0.4) 1px, transparent 0),
                        radial-gradient(1.5px 1.5px at 50% 50%, rgba(255,255,255,0.5) 1px, transparent 0),
                        radial-gradient(1px 1px at 60% 80%, rgba(255,255,255,0.6) 1px, transparent 0),
                        radial-gradient(1px 1px at 70% 30%, rgba(255,255,255,0.5) 1px, transparent 0),
                        radial-gradient(1.5px 1.5px at 80% 60%, rgba(255,255,255,0.4) 1px, transparent 0),
                        radial-gradient(1px 1px at 90% 90%, rgba(255,255,255,0.7) 1px, transparent 0),
                        radial-gradient(1px 1px at 5% 50%, rgba(255,255,255,0.5) 1px, transparent 0),
                        radial-gradient(1px 1px at 15% 85%, rgba(255,255,255,0.4) 1px, transparent 0),
                        radial-gradient(1px 1px at 25% 5%, rgba(255,255,255,0.6) 1px, transparent 0),
                        radial-gradient(1px 1px at 35% 95%, rgba(255,255,255,0.5) 1px, transparent 0),
                        radial-gradient(1px 1px at 45% 35%, rgba(255,255,255,0.4) 1px, transparent 0),
                        radial-gradient(1px 1px at 55% 65%, rgba(255,255,255,0.6) 1px, transparent 0),
                        radial-gradient(1px 1px at 65% 15%, rgba(255,255,255,0.5) 1px, transparent 0),
                        radial-gradient(1px 1px at 75% 75%, rgba(255,255,255,0.4) 1px, transparent 0),
                        radial-gradient(1px 1px at 85% 45%, rgba(255,255,255,0.5) 1px, transparent 0),
                        radial-gradient(1px 1px at 95% 25%, rgba(255,255,255,0.6) 1px, transparent 0),
                        radial-gradient(1px 1px at 12% 62%, rgba(255,255,255,0.4) 1px, transparent 0)
                    `,
                    backgroundSize: "200px 200px",
                }}
            />

            {/* Floating nebulae */}
            <FloatingNebulae />

            {/* Twinkling stars */}
            <TwinklingStars />

            {/* Occasional shooting stars */}
            <SubtleShootingStars />

            {/* Gradients and vignette */}
            <GradientOverlay />
        </div>
    );
}
