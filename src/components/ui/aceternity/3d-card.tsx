"use client";

import { cn } from "@/lib/utils";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

/**
 * 3D Card Effect - Aceternity UI
 * Efecto de perspectiva 3D al hover
 * https://ui.aceternity.com/components/3d-card-effect
 */

export const CardContainer = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseEnter = () => {
        setIsMouseEntered(true);
    };

    const handleMouseLeave = () => {
        setIsMouseEntered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            className={cn(
                "py-10 flex items-center justify-center",
                containerClassName
            )}
            style={{ perspective: "1000px" }}
        >
            <div
                ref={containerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                className={cn(
                    "flex items-center justify-center relative transition-all duration-200 ease-linear",
                    className
                )}
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                <motion.div
                    style={{
                        rotateY: useSpring(useTransform(mouseX, [-20, 20], [15, -15])),
                        rotateX: useSpring(useTransform(mouseY, [-20, 20], [-15, 15])),
                    }}
                    className="w-full h-full"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export const CardBody = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CardItem = ({
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
}: {
    children: React.ReactNode;
    className?: string;
    translateX?: number | string;
    translateY?: number | string;
    translateZ?: number | string;
    rotateX?: number | string;
    rotateY?: number | string;
    rotateZ?: number | string;
    [key: string]: unknown;
}) => {
    return (
        <div
            className={cn("w-fit transition duration-200 ease-linear", className)}
            style={{
                transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
            }}
            {...(rest as React.HTMLAttributes<HTMLDivElement>)}
        >
            {children}
        </div>
    );
};
