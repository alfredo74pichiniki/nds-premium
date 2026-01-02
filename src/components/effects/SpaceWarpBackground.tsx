"use client";
/**
 * SpaceWarpBackground - Intergalactic Warp Speed Effect
 * 
 * Efecto de viaje a velocidad warp a través del universo.
 * Implementado con CSS PURO (sin Three.js) para:
 * - Mejor compatibilidad
 * - Menor tiempo de build
 * - Sin conflictos de tipos
 * 
 * Features:
 * - Estrellas volando hacia el espectador (efecto warp)
 * - Nebulosas y galaxias pasando
 * - Efecto de velocidad luz
 * - Totalmente responsivo
 */

import { motion } from "framer-motion";
import { useMemo } from "react";

// ============ STAR FIELD (Warp effect) ============
function WarpStars() {
    const stars = useMemo(() => {
        return Array.from({ length: 200 }, (_, i) => ({
            id: i,
            // Random position in 3D space (x, y, z)
            x: Math.random() * 100,
            y: Math.random() * 100,
            z: Math.random() * 100, // depth
            size: Math.random() * 2 + 0.5,
            // Animation timing
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
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
                        // Stars fly towards viewer and fade
                        scale: [0.1, 1, 3, 8],
                        opacity: [0, 0.8, 1, 0],
                        x: [0, (star.x - 50) * 0.5, (star.x - 50) * 2, (star.x - 50) * 5],
                        y: [0, (star.y - 50) * 0.5, (star.y - 50) * 2, (star.y - 50) * 5],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        repeatDelay: 0,
                        ease: "easeIn",
                    }}
                />
            ))}
        </div>
    );
}

// ============ WARP LINES (Speed lines) ============
function WarpLines() {
    const lines = useMemo(() => {
        return Array.from({ length: 100 }, (_, i) => {
            const angle = (i / 100) * Math.PI * 2;
            return {
                id: i,
                angle,
                x: 50 + Math.cos(angle) * 5,
                y: 50 + Math.sin(angle) * 5,
                endX: 50 + Math.cos(angle) * 70,
                endY: 50 + Math.sin(angle) * 70,
                length: 20 + Math.random() * 80,
                delay: Math.random() * 2,
                duration: 0.8 + Math.random() * 0.5,
            };
        });
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {lines.map(line => (
                    <motion.line
                        key={line.id}
                        x1={line.x}
                        y1={line.y}
                        x2={line.x}
                        y2={line.y}
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="0.1"
                        animate={{
                            x2: [line.x, line.endX],
                            y2: [line.y, line.endY],
                            opacity: [0, 0.8, 0],
                            strokeWidth: [0.05, 0.2, 0.02],
                        }}
                        transition={{
                            duration: line.duration,
                            delay: line.delay,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 2,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

// ============ PASSING NEBULAE ============
function PassingNebulae() {
    const nebulae = useMemo(() => [
        { id: 1, color: "rgba(147, 51, 234, 0.15)", size: 400, duration: 25, delay: 0, startX: -20, startY: 20 },
        { id: 2, color: "rgba(59, 130, 246, 0.12)", size: 350, duration: 30, delay: 8, startX: 120, startY: 60 },
        { id: 3, color: "rgba(236, 72, 153, 0.10)", size: 300, duration: 22, delay: 4, startX: -10, startY: 70 },
        { id: 4, color: "rgba(34, 211, 238, 0.08)", size: 450, duration: 35, delay: 12, startX: 110, startY: 10 },
    ], []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {nebulae.map(nebula => (
                <motion.div
                    key={nebula.id}
                    className="absolute rounded-full"
                    style={{
                        width: nebula.size,
                        height: nebula.size,
                        background: `radial-gradient(circle, ${nebula.color} 0%, transparent 70%)`,
                        filter: "blur(40px)",
                    }}
                    animate={{
                        x: [`${nebula.startX}%`, `${nebula.startX - 140}%`],
                        y: [`${nebula.startY}%`, `${nebula.startY}%`],
                        scale: [0.8, 1.2, 0.9],
                        opacity: [0, 0.8, 0.6, 0],
                    }}
                    transition={{
                        duration: nebula.duration,
                        delay: nebula.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}

// ============ DISTANT GALAXIES ============
function DistantGalaxies() {
    const galaxies = useMemo(() => [
        { id: 1, x: 15, y: 25, size: 60, rotation: 30, duration: 40, delay: 0 },
        { id: 2, x: 80, y: 65, size: 40, rotation: -20, duration: 35, delay: 10 },
        { id: 3, x: 60, y: 15, size: 30, rotation: 45, duration: 45, delay: 20 },
    ], []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {galaxies.map(galaxy => (
                <motion.div
                    key={galaxy.id}
                    className="absolute"
                    style={{
                        left: `${galaxy.x}%`,
                        top: `${galaxy.y}%`,
                        width: galaxy.size,
                        height: galaxy.size / 3,
                    }}
                    animate={{
                        rotate: [galaxy.rotation, galaxy.rotation + 360],
                        opacity: [0.1, 0.3, 0.1],
                        scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: galaxy.duration,
                        delay: galaxy.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <div
                        className="w-full h-full rounded-full"
                        style={{
                            background: `
                                radial-gradient(ellipse at center, 
                                    rgba(255,255,255,0.5) 0%, 
                                    rgba(200,180,255,0.3) 30%,
                                    rgba(100,100,200,0.1) 60%,
                                    transparent 100%
                                )
                            `,
                            boxShadow: "0 0 20px rgba(200,180,255,0.3)",
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
}

// ============ CENTER WARP CORE ============
function WarpCore() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer glow */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: 300,
                    height: 300,
                    background: "radial-gradient(circle, rgba(100,200,255,0.05) 0%, transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Inner bright core */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: 10,
                    height: 10,
                    background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(100,200,255,0.5) 50%, transparent 100%)",
                    boxShadow: "0 0 30px rgba(100,200,255,0.8), 0 0 60px rgba(100,200,255,0.4)",
                }}
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 1, 0.8],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}

// ============ MAIN COMPONENT ============
export default function SpaceWarpBackground() {
    return (
        <div
            className="absolute inset-0 overflow-hidden"
            style={{
                background: "radial-gradient(ellipse at center, #0a0a1a 0%, #050508 50%, #000000 100%)",
            }}
        >
            {/* Distant stars (static background) */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        radial-gradient(1px 1px at 20% 30%, white 1px, transparent 0),
                        radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.8) 1px, transparent 0),
                        radial-gradient(1px 1px at 50% 20%, rgba(255,255,255,0.6) 1px, transparent 0),
                        radial-gradient(1px 1px at 60% 50%, white 1px, transparent 0),
                        radial-gradient(1px 1px at 70% 80%, rgba(255,255,255,0.7) 1px, transparent 0),
                        radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.9) 1px, transparent 0),
                        radial-gradient(1px 1px at 10% 60%, rgba(255,255,255,0.5) 1px, transparent 0),
                        radial-gradient(1px 1px at 30% 90%, white 1px, transparent 0),
                        radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.6) 1px, transparent 0),
                        radial-gradient(1px 1px at 15% 15%, rgba(255,255,255,0.8) 1px, transparent 0)
                    `,
                    backgroundSize: "250px 250px",
                    opacity: 0.4,
                }}
            />

            {/* Warp speed stars */}
            <WarpStars />

            {/* Speed lines */}
            <WarpLines />

            {/* Passing nebulae */}
            <PassingNebulae />

            {/* Distant galaxies */}
            <DistantGalaxies />

            {/* Center warp core */}
            <WarpCore />

            {/* Vignette effect */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)",
                }}
            />
        </div>
    );
}
