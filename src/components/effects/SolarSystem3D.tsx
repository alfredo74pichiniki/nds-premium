"use client";
/**
 * SolarSystem3D - PREMIUM 3D Solar System with React Three Fiber
 * 
 * Features:
 * - Real 3D WebGL rendering
 * - Realistic planet textures (generated with CSS gradients for lightweight)
 * - Inclined orbits (not all on same plane)
 * - Smooth orbital animations
 * - Stars background with depth
 * - Optimized for performance
 */

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, OrbitControls, Sphere, Ring, Line } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

// ============ PLANET DATA ============
const PLANETS_DATA = [
    { name: "mercury", distance: 4, size: 0.2, speed: 4.7, color: "#8c7853", tilt: 0.03 },
    { name: "venus", distance: 5.5, size: 0.35, speed: 3.5, color: "#e6c87a", tilt: 0.05 },
    { name: "earth", distance: 7, size: 0.4, speed: 3, color: "#4a90d9", tilt: 0.0, hasMoon: true },
    { name: "mars", distance: 9, size: 0.3, speed: 2.4, color: "#c1440e", tilt: 0.04 },
    { name: "jupiter", distance: 13, size: 1.2, speed: 1.3, color: "#d4a574", tilt: 0.02 },
    { name: "saturn", distance: 17, size: 1, speed: 0.9, color: "#e6d4a3", tilt: 0.07, hasRings: true },
    { name: "uranus", distance: 21, size: 0.6, speed: 0.6, color: "#7de3f4", tilt: 0.15, hasRings: true },
    { name: "neptune", distance: 25, size: 0.55, speed: 0.5, color: "#4b70dd", tilt: 0.05 },
];

// ============ SUN COMPONENT ============
function Sun() {
    const sunRef = useRef<THREE.Mesh>(null);
    const glowRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (glowRef.current) {
            glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.05);
        }
    });

    return (
        <group>
            {/* Sun glow */}
            <Sphere ref={glowRef} args={[2.5, 32, 32]}>
                <meshBasicMaterial
                    color="#ffaa00"
                    transparent
                    opacity={0.15}
                />
            </Sphere>

            {/* Sun body */}
            <Sphere ref={sunRef} args={[1.5, 64, 64]}>
                <meshBasicMaterial color="#ffd700" />
            </Sphere>

            {/* Point light from sun */}
            <pointLight color="#ffffff" intensity={2} distance={100} />
            <pointLight color="#ffcc00" intensity={1} distance={50} />
        </group>
    );
}

// ============ PLANET COMPONENT ============
function Planet({
    name,
    distance,
    size,
    speed,
    color,
    tilt,
    hasMoon,
    hasRings
}: {
    name: string;
    distance: number;
    size: number;
    speed: number;
    color: string;
    tilt: number;
    hasMoon?: boolean;
    hasRings?: boolean;
}) {
    const planetRef = useRef<THREE.Mesh>(null);
    const orbitRef = useRef<THREE.Group>(null);
    const moonRef = useRef<THREE.Mesh>(null);

    // Random starting position
    const startAngle = useMemo(() => Math.random() * Math.PI * 2, []);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        const angle = startAngle + time * speed * 0.1;

        if (orbitRef.current) {
            orbitRef.current.position.x = Math.cos(angle) * distance;
            orbitRef.current.position.z = Math.sin(angle) * distance;
            orbitRef.current.position.y = Math.sin(angle * 2) * tilt * 3; // Orbital inclination
        }

        // Planet rotation
        if (planetRef.current) {
            planetRef.current.rotation.y += 0.01;
        }

        // Moon orbit
        if (moonRef.current && hasMoon) {
            moonRef.current.position.x = Math.cos(time * 3) * (size + 0.5);
            moonRef.current.position.z = Math.sin(time * 3) * (size + 0.5);
        }
    });

    return (
        <group ref={orbitRef}>
            {/* Planet */}
            <Sphere ref={planetRef} args={[size, 32, 32]}>
                <meshStandardMaterial
                    color={color}
                    roughness={0.8}
                    metalness={0.1}
                />
            </Sphere>

            {/* Saturn/Uranus rings */}
            {hasRings && (
                <Ring
                    args={[size * 1.4, size * 2, 64]}
                    rotation={[Math.PI / 2, name === "uranus" ? Math.PI / 2 : 0, 0]}
                >
                    <meshBasicMaterial
                        color={name === "saturn" ? "#d2be8c" : "#7de3f4"}
                        transparent
                        opacity={0.6}
                        side={THREE.DoubleSide}
                    />
                </Ring>
            )}

            {/* Earth's Moon */}
            {hasMoon && (
                <Sphere ref={moonRef} args={[0.1, 16, 16]}>
                    <meshStandardMaterial color="#cccccc" roughness={1} />
                </Sphere>
            )}
        </group>
    );
}

// ============ ORBIT LINES ============
function OrbitLine({ radius, tilt }: { radius: number; tilt: number }) {
    const points = useMemo(() => {
        const pts: [number, number, number][] = [];
        for (let i = 0; i <= 64; i++) {
            const angle = (i / 64) * Math.PI * 2;
            pts.push([
                Math.cos(angle) * radius,
                Math.sin(angle * 2) * tilt * 3,
                Math.sin(angle) * radius
            ]);
        }
        return pts;
    }, [radius, tilt]);

    return (
        <Line
            points={points}
            color="#ffffff"
            lineWidth={0.5}
            transparent
            opacity={0.15}
        />
    );
}

// ============ SHOOTING STAR ============
function ShootingStar() {
    const ref = useRef<THREE.Mesh>(null);
    const startPos = useMemo(() => ({
        x: (Math.random() - 0.5) * 60,
        y: Math.random() * 20 + 10,
        z: (Math.random() - 0.5) * 60,
    }), []);

    useFrame((state) => {
        if (ref.current) {
            const time = (state.clock.elapsedTime * 0.5) % 10;
            ref.current.position.x = startPos.x + time * 5;
            ref.current.position.y = startPos.y - time * 2;
            ref.current.position.z = startPos.z + time * 3;
            ref.current.visible = time < 2;
        }
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
        </mesh>
    );
}

// ============ ASTEROID BELT ============
function AsteroidBelt() {
    const asteroids = useMemo(() => {
        return Array.from({ length: 100 }, (_, i) => ({
            angle: (i / 100) * Math.PI * 2 + Math.random() * 0.3,
            distance: 10.5 + Math.random() * 1.5,
            size: 0.02 + Math.random() * 0.03,
            speed: 1.8 + Math.random() * 0.4,
            yOffset: (Math.random() - 0.5) * 0.5,
        }));
    }, []);

    return (
        <group>
            {asteroids.map((asteroid, i) => (
                <Asteroid key={i} {...asteroid} />
            ))}
        </group>
    );
}

function Asteroid({ angle, distance, size, speed, yOffset }: {
    angle: number;
    distance: number;
    size: number;
    speed: number;
    yOffset: number;
}) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        const currentAngle = angle + time * speed * 0.1;

        if (ref.current) {
            ref.current.position.x = Math.cos(currentAngle) * distance;
            ref.current.position.z = Math.sin(currentAngle) * distance;
            ref.current.position.y = yOffset;
        }
    });

    return (
        <mesh ref={ref}>
            <dodecahedronGeometry args={[size, 0]} />
            <meshStandardMaterial color="#666666" roughness={1} />
        </mesh>
    );
}

// ============ SCENE CONTENT ============
function SolarSystemScene() {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.1} />

            {/* Stars background */}
            <Stars
                radius={100}
                depth={50}
                count={3000}
                factor={4}
                saturation={0}
                fade
                speed={0.5}
            />

            {/* Sun */}
            <Sun />

            {/* Orbit lines */}
            {PLANETS_DATA.map((planet) => (
                <OrbitLine
                    key={`orbit-${planet.name}`}
                    radius={planet.distance}
                    tilt={planet.tilt}
                />
            ))}

            {/* Planets */}
            {PLANETS_DATA.map((planet) => (
                <Planet key={planet.name} {...planet} />
            ))}

            {/* Asteroid Belt */}
            <AsteroidBelt />

            {/* Shooting stars */}
            {Array.from({ length: 3 }).map((_, i) => (
                <ShootingStar key={i} />
            ))}

            {/* Camera controls - disabled for background use */}
            {/* <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} /> */}
        </>
    );
}

// ============ CAMERA ANIMATION ============
function CameraAnimation() {
    const { camera } = useThree();

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        // Subtle camera movement for immersion
        camera.position.x = Math.sin(time * 0.05) * 2;
        camera.position.y = 15 + Math.sin(time * 0.03) * 2;
        camera.position.z = 35 + Math.cos(time * 0.05) * 2;
        camera.lookAt(0, 0, 0);
    });

    return null;
}

// ============ MAIN COMPONENT ============
export default function SolarSystem3D() {
    return (
        <div className="absolute inset-0 bg-black">
            <Canvas
                camera={{
                    position: [0, 15, 35],
                    fov: 60,
                    near: 0.1,
                    far: 200
                }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance"
                }}
            >
                <Suspense fallback={null}>
                    <SolarSystemScene />
                    <CameraAnimation />
                </Suspense>
            </Canvas>
        </div>
    );
}
