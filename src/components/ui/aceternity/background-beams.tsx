"use client";

import { cn } from "@/lib/utils";
import React from "react";

/**
 * Background Beams With Collision - Aceternity UI
 * Efecto de rayos laser explosivos que chocan
 * https://ui.aceternity.com/components/background-beams-with-collision
 */
export const BackgroundBeamsWithCollision = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const parentRef = React.useRef<HTMLDivElement>(null);

    const beams = [
        { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
        { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
        { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "h-6" },
        { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
        { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20" },
        { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
        { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "h-6" },
    ];

    return (
        <div
            ref={parentRef}
            className={cn(
                "relative flex items-center w-full justify-center overflow-hidden",
                className
            )}
        >
            {beams.map((beam, idx) => (
                <CollisionMechanism
                    key={`beam-${idx}`}
                    beamOptions={beam}
                    containerRef={containerRef}
                    parentRef={parentRef}
                />
            ))}
            {children}
            <div
                ref={containerRef}
                className="absolute bottom-0 bg-gradient-to-t from-cyan-500/20 to-transparent w-full inset-x-0 pointer-events-none"
                style={{
                    boxShadow:
                        "0 0 50px 20px rgba(6, 182, 212, 0.2), 0 0 100px 40px rgba(6, 182, 212, 0.1), 0 0 200px 80px rgba(6, 182, 212, 0.05)",
                }}
            ></div>
        </div>
    );
};

const CollisionMechanism = React.forwardRef<
    HTMLDivElement,
    {
        containerRef: React.RefObject<HTMLDivElement | null>;
        parentRef: React.RefObject<HTMLDivElement | null>;
        beamOptions?: {
            initialX?: number;
            translateX?: number;
            initialY?: number;
            translateY?: number;
            rotate?: number;
            className?: string;
            duration?: number;
            delay?: number;
            repeatDelay?: number;
        };
    }
>((props, ref) => {
    const { beamOptions = {} } = props;
    const {
        initialX = 0,
        translateX = 0,
        duration = 8,
        delay = 0,
        repeatDelay = 0,
        className,
    } = beamOptions;

    const beamRef = React.useRef<HTMLDivElement>(null);
    const [collision, setCollision] = React.useState<{
        detected: boolean;
        coordinates: { x: number; y: number } | null;
    }>({
        detected: false,
        coordinates: null,
    });

    const [beamKey, setBeamKey] = React.useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = React.useState(false);

    React.useEffect(() => {
        const checkCollision = () => {
            if (
                beamRef.current &&
                props.containerRef.current &&
                props.parentRef.current &&
                !cycleCollisionDetected
            ) {
                const beamRect = beamRef.current.getBoundingClientRect();
                const containerRect = props.containerRef.current.getBoundingClientRect();
                const parentRect = props.parentRef.current.getBoundingClientRect();

                if (beamRect.bottom >= containerRect.top) {
                    const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
                    const relativeY = beamRect.bottom - parentRect.top;

                    setCollision({
                        detected: true,
                        coordinates: { x: relativeX, y: relativeY },
                    });
                    setCycleCollisionDetected(true);
                }
            }
        };

        const animationInterval = setInterval(checkCollision, 50);
        return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, props.containerRef, props.parentRef]);

    React.useEffect(() => {
        if (collision.detected && collision.coordinates) {
            setTimeout(() => {
                setCollision({ detected: false, coordinates: null });
                setCycleCollisionDetected(false);
            }, 2000);

            setTimeout(() => {
                setBeamKey((prevKey) => prevKey + 1);
            }, 2000);
        }
    }, [collision]);

    return (
        <>
            <div
                key={beamKey}
                ref={beamRef}
                className={cn(
                    "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-cyan-500 via-purple-500 to-transparent",
                    className
                )}
                style={{
                    transform: `translateX(${initialX}px) translateY(0px)`,
                    animation: `beam-fall ${duration}s linear infinite`,
                    animationDelay: `${delay}s`,
                }}
            />
            {collision.detected && collision.coordinates && (
                <Explosion
                    key={`${collision.coordinates.x}-${collision.coordinates.y}`}
                    className=""
                    style={{
                        left: `${collision.coordinates.x}px`,
                        top: `${collision.coordinates.y}px`,
                        transform: "translate(-50%, -50%)",
                    }}
                />
            )}
        </>
    );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
    const spans = Array.from({ length: 20 }, (_, index) => ({
        id: index,
        initialX: 0,
        initialY: 0,
        directionX: Math.floor(Math.random() * 80 - 40),
        directionY: Math.floor(Math.random() * -50 - 10),
    }));

    return (
        <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
            <div className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
            {spans.map((span) => (
                <span
                    key={span.id}
                    className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-cyan-500 to-purple-500"
                    style={{
                        animation: `explode 1s ease-out forwards`,
                        animationDelay: `${span.id * 0.02}s`,
                        transform: `translate(${span.directionX}px, ${span.directionY}px)`,
                    }}
                />
            ))}
        </div>
    );
};

// Global styles for beam animation
if (typeof window !== "undefined") {
    const style = document.createElement("style");
    style.textContent = `
        @keyframes beam-fall {
            0% { transform: translateY(-200px) translateX(var(--beam-x, 0px)); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(calc(100vh + 200px)) translateX(var(--beam-x, 0px)); opacity: 0; }
        }
        @keyframes explode {
            0% { transform: translate(0, 0); opacity: 1; }
            100% { transform: translate(var(--dir-x, 0px), var(--dir-y, 0px)); opacity: 0; }
        }
    `;
    if (!document.head.querySelector('[data-aceternity-beam-styles]')) {
        style.setAttribute('data-aceternity-beam-styles', 'true');
        document.head.appendChild(style);
    }
}
