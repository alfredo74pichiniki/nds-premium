"use client";
/**
 * SolarSystemBackground - PREMIUM LEVEL
 * 
 * Sistema Solar realista con:
 * - Planetas con texturas CSS detalladas
 * - Órbitas circulares animadas
 * - Sol brillante en el centro
 * - Luna orbitando la Tierra
 * - Anillos de Saturno realistas
 * - Cinturón de asteroides
 * - Cometas con colas realistas
 * - Estrellas de fondo con brillo variable
 */

import { motion } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";

// ============ PLANET DATA (to scale ratio, not real distances) ============
const PLANETS = [
    {
        name: "mercury",
        orbitRadius: 80,
        size: 8,
        orbitDuration: 15,
        color: "#8c7853",
        texture: "radial-gradient(circle at 30% 30%, #c9b896 0%, #8c7853 40%, #5c4d3a 100%)",
        shadow: "inset -3px -3px 6px rgba(0,0,0,0.6), inset 1px 1px 2px rgba(255,255,255,0.2)",
    },
    {
        name: "venus",
        orbitRadius: 110,
        size: 14,
        orbitDuration: 25,
        color: "#e6c87a",
        texture: "radial-gradient(circle at 25% 25%, #f5e6b3 0%, #e6c87a 30%, #c4a644 70%, #8b7530 100%)",
        shadow: "inset -4px -4px 10px rgba(0,0,0,0.5), inset 2px 2px 4px rgba(255,255,255,0.3)",
        hasAtmosphere: true,
        atmosphereColor: "rgba(230, 200, 122, 0.3)",
    },
    {
        name: "earth",
        orbitRadius: 150,
        size: 16,
        orbitDuration: 40,
        color: "#4a90d9",
        texture: `
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 20%),
            radial-gradient(ellipse at 50% 60%, #2d5a1e 0%, transparent 30%),
            radial-gradient(ellipse at 30% 40%, #2d5a1e 0%, transparent 25%),
            radial-gradient(ellipse at 70% 35%, #2d5a1e 0%, transparent 20%),
            radial-gradient(circle, #4a90d9 0%, #1a4a7a 70%, #0d2847 100%)
        `,
        shadow: "inset -5px -5px 15px rgba(0,0,0,0.6), inset 2px 2px 5px rgba(255,255,255,0.2)",
        hasAtmosphere: true,
        atmosphereColor: "rgba(100, 180, 255, 0.4)",
        hasMoon: true,
    },
    {
        name: "mars",
        orbitRadius: 200,
        size: 12,
        orbitDuration: 55,
        color: "#c1440e",
        texture: `
            radial-gradient(circle at 40% 30%, rgba(200,100,50,0.5) 0%, transparent 30%),
            radial-gradient(circle at 60% 50%, rgba(100,40,20,0.6) 0%, transparent 25%),
            radial-gradient(circle, #c1440e 0%, #8b2500 60%, #4a1500 100%)
        `,
        shadow: "inset -4px -4px 12px rgba(0,0,0,0.6), inset 2px 2px 4px rgba(255,200,150,0.2)",
        hasPolarCap: true,
    },
    {
        name: "jupiter",
        orbitRadius: 280,
        size: 40,
        orbitDuration: 90,
        color: "#d4a574",
        texture: `
            repeating-linear-gradient(
                0deg,
                #e8d4b8 0px, #e8d4b8 2px,
                #c4956c 2px, #c4956c 4px,
                #a67d5a 4px, #a67d5a 6px,
                #d9b896 6px, #d9b896 8px,
                #8b6342 8px, #8b6342 10px
            ),
            radial-gradient(circle at 35% 55%, #c45c3a 0%, transparent 15%),
            radial-gradient(circle, #d4a574 0%, #a67d5a 100%)
        `,
        shadow: "inset -10px -8px 30px rgba(0,0,0,0.5), inset 5px 5px 15px rgba(255,255,255,0.1)",
        hasGreatSpot: true,
    },
    {
        name: "saturn",
        orbitRadius: 370,
        size: 35,
        orbitDuration: 120,
        color: "#e6d4a3",
        texture: `
            repeating-linear-gradient(
                0deg,
                #f5e6c8 0px, #f5e6c8 3px,
                #d4c4a1 3px, #d4c4a1 5px,
                #c4b48f 5px, #c4b48f 7px  
            ),
            radial-gradient(circle, #e6d4a3 0%, #c4a86c 100%)
        `,
        shadow: "inset -8px -6px 25px rgba(0,0,0,0.4), inset 4px 4px 12px rgba(255,255,255,0.15)",
        hasRings: true,
    },
    {
        name: "uranus",
        orbitRadius: 450,
        size: 22,
        orbitDuration: 160,
        color: "#7de3f4",
        texture: "radial-gradient(circle at 30% 30%, #b5f5ff 0%, #7de3f4 40%, #4fc4d4 80%, #2a9aab 100%)",
        shadow: "inset -6px -6px 18px rgba(0,0,0,0.4), inset 3px 3px 8px rgba(255,255,255,0.2)",
        hasRings: true,
        ringTilt: 90,
    },
    {
        name: "neptune",
        orbitRadius: 520,
        size: 20,
        orbitDuration: 200,
        color: "#4b70dd",
        texture: `
            radial-gradient(circle at 50% 40%, rgba(255,255,255,0.1) 0%, transparent 30%),
            radial-gradient(circle, #5b8be8 0%, #4b70dd 50%, #2a4494 100%)
        `,
        shadow: "inset -6px -6px 18px rgba(0,0,0,0.5), inset 3px 3px 8px rgba(100,150,255,0.2)",
    },
];

// ============ STARS GENERATION ============
function generateStars(count: number) {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        brightness: Math.random() * 0.5 + 0.5,
        twinkleDelay: Math.random() * 5,
    }));
}

// ============ ASTEROIDS ============
function generateAsteroids(count: number) {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        angle: (i / count) * 360 + Math.random() * 10,
        distance: 235 + Math.random() * 20, // Between Mars and Jupiter
        size: Math.random() * 2 + 1,
        orbitDuration: 70 + Math.random() * 20,
    }));
}

// ============ COMET COMPONENT ============
function Comet({ delay }: { delay: number }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showComet = () => {
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 3000);
        };

        const initialDelay = setTimeout(showComet, delay);
        const interval = setInterval(showComet, 15000 + Math.random() * 10000);

        return () => {
            clearTimeout(initialDelay);
            clearInterval(interval);
        };
    }, [delay]);

    if (!isVisible) return null;

    const startX = Math.random() * 30 + 10;
    const startY = Math.random() * 20;

    return (
        <motion.div
            className="absolute pointer-events-none z-5"
            style={{ left: `${startX}%`, top: `${startY}%` }}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
            animate={{
                opacity: [0, 1, 1, 0.5, 0],
                x: [0, 150, 350, 500],
                y: [0, 80, 180, 280],
                scale: [0.5, 1, 1, 0.8]
            }}
            transition={{ duration: 3, ease: "easeOut" }}
        >
            {/* Comet nucleus */}
            <div
                className="relative w-3 h-3 rounded-full"
                style={{
                    background: "radial-gradient(circle at 30% 30%, #ffffff 0%, #a0d8ff 50%, #4a90d9 100%)",
                    boxShadow: "0 0 10px 3px rgba(160, 216, 255, 0.8), 0 0 20px 6px rgba(74, 144, 217, 0.5)"
                }}
            />
            {/* Main tail */}
            <div
                className="absolute top-1/2 right-full -translate-y-1/2"
                style={{
                    width: "120px",
                    height: "6px",
                    background: "linear-gradient(to left, rgba(160,216,255,0.9), rgba(100,180,255,0.3), transparent)",
                    filter: "blur(1px)",
                    borderRadius: "3px 0 0 3px",
                }}
            />
            {/* Secondary tail (dust) */}
            <div
                className="absolute top-1/2 right-full -translate-y-1/2"
                style={{
                    width: "80px",
                    height: "12px",
                    background: "linear-gradient(to left, rgba(255,220,150,0.4), transparent)",
                    filter: "blur(3px)",
                    transform: "translateY(-50%) rotate(-10deg)",
                    transformOrigin: "right center",
                }}
            />
        </motion.div>
    );
}

// ============ PLANET COMPONENT ============
function Planet({ planet, centerX, centerY }: {
    planet: typeof PLANETS[0];
    centerX: number;
    centerY: number;
}) {
    return (
        <div className="absolute" style={{ left: centerX, top: centerY }}>
            {/* Orbit path */}
            <div
                className="absolute rounded-full border border-white/5"
                style={{
                    width: planet.orbitRadius * 2,
                    height: planet.orbitRadius * 2,
                    left: -planet.orbitRadius,
                    top: -planet.orbitRadius,
                }}
            />

            {/* Orbiting planet container */}
            <motion.div
                className="absolute"
                style={{
                    width: planet.orbitRadius * 2,
                    height: planet.orbitRadius * 2,
                    left: -planet.orbitRadius,
                    top: -planet.orbitRadius,
                }}
                animate={{ rotate: 360 }}
                transition={{
                    duration: planet.orbitDuration,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {/* Planet positioned on orbit edge */}
                <motion.div
                    className="absolute"
                    style={{
                        width: planet.size,
                        height: planet.size,
                        left: planet.orbitRadius - planet.size / 2,
                        top: -planet.size / 2,
                    }}
                    // Counter-rotate to keep planet orientation stable
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: planet.orbitDuration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Atmosphere glow */}
                    {planet.hasAtmosphere && (
                        <div
                            className="absolute -inset-1 rounded-full"
                            style={{
                                background: planet.atmosphereColor,
                                filter: "blur(3px)",
                            }}
                        />
                    )}

                    {/* Planet body */}
                    <div
                        className="w-full h-full rounded-full relative overflow-hidden"
                        style={{
                            background: planet.texture,
                            boxShadow: planet.shadow,
                        }}
                    >
                        {/* Polar cap for Mars */}
                        {planet.hasPolarCap && (
                            <div
                                className="absolute w-1/2 h-1/4 top-0 left-1/4 rounded-b-full"
                                style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.7), transparent)" }}
                            />
                        )}

                        {/* Great Red Spot for Jupiter */}
                        {planet.hasGreatSpot && (
                            <div
                                className="absolute w-1/4 h-1/6 rounded-full"
                                style={{
                                    left: "30%",
                                    top: "55%",
                                    background: "radial-gradient(ellipse, #c45c3a, #a04020)",
                                    boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.2)",
                                }}
                            />
                        )}
                    </div>

                    {/* Saturn's rings */}
                    {planet.hasRings && planet.name === "saturn" && (
                        <div className="absolute inset-0 pointer-events-none" style={{ transform: "rotateX(70deg)" }}>
                            {/* Inner ring */}
                            <div
                                className="absolute rounded-full"
                                style={{
                                    width: planet.size * 2.2,
                                    height: planet.size * 2.2,
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    border: "3px solid rgba(210, 190, 140, 0.5)",
                                    boxShadow: "0 0 5px rgba(210, 190, 140, 0.3)",
                                }}
                            />
                            {/* Middle ring */}
                            <div
                                className="absolute rounded-full"
                                style={{
                                    width: planet.size * 2.5,
                                    height: planet.size * 2.5,
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    border: "4px solid rgba(200, 180, 130, 0.4)",
                                }}
                            />
                            {/* Outer ring */}
                            <div
                                className="absolute rounded-full"
                                style={{
                                    width: planet.size * 2.8,
                                    height: planet.size * 2.8,
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    border: "2px solid rgba(180, 160, 120, 0.3)",
                                }}
                            />
                        </div>
                    )}

                    {/* Uranus rings (tilted) */}
                    {planet.hasRings && planet.name === "uranus" && (
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: planet.size * 1.8,
                                height: planet.size * 1.8,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%) rotateZ(90deg) rotateX(70deg)",
                                border: "2px solid rgba(125, 227, 244, 0.3)",
                            }}
                        />
                    )}

                    {/* Earth's Moon */}
                    {planet.hasMoon && (
                        <motion.div
                            className="absolute"
                            style={{
                                width: planet.size * 2.5,
                                height: planet.size * 2.5,
                                left: "50%",
                                top: "50%",
                                marginLeft: -planet.size * 1.25,
                                marginTop: -planet.size * 1.25,
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <div
                                className="absolute rounded-full"
                                style={{
                                    width: 4,
                                    height: 4,
                                    left: 0,
                                    top: "50%",
                                    marginTop: -2,
                                    background: "radial-gradient(circle at 30% 30%, #e8e8e8 0%, #a0a0a0 50%, #606060 100%)",
                                    boxShadow: "inset -1px -1px 2px rgba(0,0,0,0.5)",
                                }}
                            />
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}

// ============ SUN COMPONENT ============
function Sun({ x, y, size }: { x: number; y: number; size: number }) {
    return (
        <div
            className="absolute"
            style={{ left: x - size / 2, top: y - size / 2 }}
        >
            {/* Corona outer */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: size * 3,
                    height: size * 3,
                    left: -size,
                    top: -size,
                    background: "radial-gradient(circle, rgba(255,200,50,0.2) 0%, transparent 70%)",
                    filter: "blur(15px)",
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Corona middle */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: size * 2,
                    height: size * 2,
                    left: -size / 2,
                    top: -size / 2,
                    background: "radial-gradient(circle, rgba(255,180,50,0.4) 0%, transparent 70%)",
                    filter: "blur(8px)",
                }}
                animate={{
                    scale: [1, 1.15, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            />

            {/* Sun body */}
            <div
                className="rounded-full relative overflow-hidden"
                style={{
                    width: size,
                    height: size,
                    background: `
                        radial-gradient(circle at 40% 40%, #fff8dc 0%, #ffd700 20%, #ff8c00 60%, #ff4500 100%)
                    `,
                    boxShadow: `
                        0 0 ${size / 2}px rgba(255,200,50,0.8),
                        0 0 ${size}px rgba(255,150,50,0.5),
                        0 0 ${size * 1.5}px rgba(255,100,50,0.3),
                        inset 0 0 ${size / 4}px rgba(255,255,255,0.3)
                    `,
                }}
            >
                {/* Sun surface texture */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `
                            radial-gradient(circle at 30% 20%, rgba(255,255,200,0.5) 0%, transparent 20%),
                            radial-gradient(circle at 70% 60%, rgba(255,100,0,0.3) 0%, transparent 15%),
                            radial-gradient(circle at 50% 80%, rgba(255,150,50,0.4) 0%, transparent 18%)
                        `,
                    }}
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </div>
    );
}

// ============ MAIN COMPONENT ============
export default function SolarSystemBackground() {
    const stars = useMemo(() => generateStars(300), []);
    const asteroids = useMemo(() => generateAsteroids(50), []);
    const containerRef = useRef<HTMLDivElement>(null);
    const [center, setCenter] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCenter = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setCenter({ x: rect.width / 2, y: rect.height / 2 });
            }
        };

        updateCenter();
        window.addEventListener("resize", updateCenter);
        return () => window.removeEventListener("resize", updateCenter);
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden"
            style={{
                background: "radial-gradient(ellipse at 50% 50%, #0a0a18 0%, #050510 40%, #000000 100%)",
            }}
        >
            {/* Stars layer */}
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
                            opacity: [star.brightness, star.brightness * 0.3, star.brightness],
                            boxShadow: [
                                `0 0 ${star.size}px rgba(255,255,255,0.5)`,
                                `0 0 ${star.size * 2}px rgba(255,255,255,0.8)`,
                                `0 0 ${star.size}px rgba(255,255,255,0.5)`,
                            ],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            delay: star.twinkleDelay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Distant galaxies */}
            <div
                className="absolute w-20 h-8 opacity-20"
                style={{
                    left: "10%",
                    top: "15%",
                    background: "radial-gradient(ellipse, rgba(180,150,255,0.5) 0%, transparent 70%)",
                    filter: "blur(5px)",
                    transform: "rotate(-30deg)",
                }}
            />
            <div
                className="absolute w-16 h-6 opacity-15"
                style={{
                    right: "15%",
                    top: "25%",
                    background: "radial-gradient(ellipse, rgba(255,200,150,0.4) 0%, transparent 70%)",
                    filter: "blur(4px)",
                    transform: "rotate(20deg)",
                }}
            />

            {/* Asteroid belt (between Mars and Jupiter) */}
            {center.x > 0 && asteroids.map(asteroid => (
                <motion.div
                    key={`asteroid-${asteroid.id}`}
                    className="absolute bg-gray-500 rounded-full"
                    style={{
                        width: asteroid.size,
                        height: asteroid.size,
                        left: center.x,
                        top: center.y,
                    }}
                    animate={{
                        x: [
                            Math.cos(asteroid.angle * Math.PI / 180) * asteroid.distance,
                            Math.cos((asteroid.angle + 360) * Math.PI / 180) * asteroid.distance,
                        ],
                        y: [
                            Math.sin(asteroid.angle * Math.PI / 180) * asteroid.distance,
                            Math.sin((asteroid.angle + 360) * Math.PI / 180) * asteroid.distance,
                        ],
                    }}
                    transition={{
                        duration: asteroid.orbitDuration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Sun */}
            {center.x > 0 && (
                <Sun x={center.x} y={center.y} size={50} />
            )}

            {/* Planets */}
            {center.x > 0 && PLANETS.map(planet => (
                <Planet
                    key={planet.name}
                    planet={planet}
                    centerX={center.x}
                    centerY={center.y}
                />
            ))}

            {/* Comets */}
            <Comet delay={5000} />
            <Comet delay={12000} />

            {/* Subtle vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)",
                }}
            />
        </div>
    );
}
