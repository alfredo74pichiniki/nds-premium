"use client";
/**
 * CosmicBackground - NIVEL DIOS Premium Background
 * 
 * Features:
 * - Starfield with hundreds of twinkling stars
 * - Stylized glassmorphism planets
 * - Animated shooting stars
 * - Subtle nebula effects
 * - Mouse parallax interaction
 */

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

// ============ CONFIGURATION ============
const STAR_COUNT = 200;
const SHOOTING_STAR_INTERVAL = 4000; // New shooting star every 4 seconds

// ============ STARS ============
interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    twinkleSpeed: number;
    layer: 1 | 2 | 3; // For parallax depth
}

function generateStars(count: number): Star[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 3 + 2,
        layer: (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3,
    }));
}

// ============ PLANETS ============
const planets = [
    {
        id: 1,
        name: "saturn",
        x: 15,
        y: 25,
        size: 80,
        color: "from-amber-400/40 to-orange-600/30",
        ringColor: "rgba(251, 191, 36, 0.3)",
        hasRing: true,
        layer: 2,
    },
    {
        id: 2,
        name: "neptune",
        x: 85,
        y: 65,
        size: 60,
        color: "from-blue-400/50 to-indigo-600/40",
        hasRing: false,
        layer: 3,
    },
    {
        id: 3,
        name: "mars",
        x: 75,
        y: 20,
        size: 40,
        color: "from-red-400/40 to-rose-700/30",
        hasRing: false,
        layer: 1,
    },
];

// ============ SHOOTING STAR COMPONENT ============
function ShootingStar({ onComplete }: { onComplete: () => void }) {
    const startX = Math.random() * 60 + 20;
    const startY = Math.random() * 30;

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{
                left: `${startX}%`,
                top: `${startY}%`,
            }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
                opacity: [0, 1, 1, 0],
                x: [0, 200, 400],
                y: [0, 100, 200],
            }}
            transition={{
                duration: 1.5,
                ease: "easeOut",
            }}
            onAnimationComplete={onComplete}
        >
            {/* Star head */}
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_4px_rgba(255,255,255,0.8)]" />
            {/* Tail */}
            <div
                className="absolute top-1/2 right-full w-32 h-0.5 -translate-y-1/2"
                style={{
                    background: "linear-gradient(to left, white, transparent)",
                }}
            />
        </motion.div>
    );
}

// ============ PLANET COMPONENT ============
function Planet({
    planet,
    mouseX,
    mouseY
}: {
    planet: typeof planets[0];
    mouseX: number;
    mouseY: number;
}) {
    const parallaxFactor = planet.layer * 5;
    const offsetX = (mouseX - 0.5) * parallaxFactor;
    const offsetY = (mouseY - 0.5) * parallaxFactor;

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{
                left: `${planet.x}%`,
                top: `${planet.y}%`,
                width: planet.size,
                height: planet.size,
            }}
            animate={{
                x: offsetX,
                y: offsetY,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
        >
            {/* Planet body with glassmorphism */}
            <div
                className={`w-full h-full rounded-full bg-gradient-to-br ${planet.color} backdrop-blur-sm border border-white/10`}
                style={{
                    boxShadow: `
                        inset -10px -10px 30px rgba(0,0,0,0.3),
                        inset 5px 5px 20px rgba(255,255,255,0.1),
                        0 0 40px rgba(100,200,255,0.2)
                    `,
                }}
            />

            {/* Saturn ring */}
            {planet.hasRing && (
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                        width: planet.size * 1.8,
                        height: planet.size * 0.4,
                        border: `2px solid ${planet.ringColor}`,
                        borderRadius: "50%",
                        transform: "translate(-50%, -50%) rotateX(70deg)",
                    }}
                />
            )}

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                    boxShadow: [
                        "0 0 20px rgba(100,200,255,0.2)",
                        "0 0 40px rgba(100,200,255,0.4)",
                        "0 0 20px rgba(100,200,255,0.2)",
                    ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />
        </motion.div>
    );
}

// ============ NEBULA COMPONENT ============
function Nebula() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary nebula - cyan */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(0,180,216,0.3) 0%, transparent 70%)",
                    left: "-20%",
                    top: "10%",
                    filter: "blur(60px)",
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 30, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Secondary nebula - purple */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
                    right: "-10%",
                    bottom: "20%",
                    filter: "blur(80px)",
                }}
                animate={{
                    scale: [1, 1.15, 1],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Tertiary nebula - pink accent */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)",
                    left: "30%",
                    top: "60%",
                    filter: "blur(50px)",
                }}
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}

// ============ MAIN COMPONENT ============
export default function CosmicBackground() {
    const [stars] = useState(() => generateStars(STAR_COUNT));
    const [shootingStars, setShootingStars] = useState<number[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Shooting stars system
    useEffect(() => {
        const interval = setInterval(() => {
            setShootingStars(prev => [...prev, Date.now()]);
        }, SHOOTING_STAR_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    const removeShootingStar = useCallback((id: number) => {
        setShootingStars(prev => prev.filter(s => s !== id));
    }, []);

    // Mouse tracking for parallax
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePos({
                    x: (e.clientX - rect.left) / rect.width,
                    y: (e.clientY - rect.top) / rect.height,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden"
            style={{
                background: "radial-gradient(ellipse at center, #0a0a1a 0%, #030309 50%, #000000 100%)",
            }}
        >
            {/* Nebula layer (bottom) */}
            <Nebula />

            {/* Stars layer */}
            <div className="absolute inset-0">
                {stars.map(star => {
                    const parallaxFactor = star.layer * 3;
                    const offsetX = (mousePos.x - 0.5) * parallaxFactor;
                    const offsetY = (mousePos.y - 0.5) * parallaxFactor;

                    return (
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
                                opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                                x: offsetX,
                                y: offsetY,
                                boxShadow: [
                                    `0 0 ${star.size * 2}px rgba(255,255,255,0.5)`,
                                    `0 0 ${star.size * 4}px rgba(255,255,255,0.8)`,
                                    `0 0 ${star.size * 2}px rgba(255,255,255,0.5)`,
                                ],
                            }}
                            transition={{
                                opacity: {
                                    duration: star.twinkleSpeed,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                                x: { type: "spring", stiffness: 100, damping: 30 },
                                y: { type: "spring", stiffness: 100, damping: 30 },
                                boxShadow: {
                                    duration: star.twinkleSpeed,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />
                    );
                })}
            </div>

            {/* Planets layer */}
            {planets.map(planet => (
                <Planet
                    key={planet.id}
                    planet={planet}
                    mouseX={mousePos.x}
                    mouseY={mousePos.y}
                />
            ))}

            {/* Shooting stars layer */}
            {shootingStars.map(id => (
                <ShootingStar
                    key={id}
                    onComplete={() => removeShootingStar(id)}
                />
            ))}

            {/* Subtle vignette overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
                }}
            />
        </div>
    );
}
