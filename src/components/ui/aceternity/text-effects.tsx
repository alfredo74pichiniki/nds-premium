"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

/**
 * Colourful Text - Aceternity UI
 * Texto con colores vibrantes y efectos
 * https://ui.aceternity.com/components/colourful-text
 */

export const ColourfulText = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    const colors = [
        "rgb(131, 179, 32)",
        "rgb(47, 195, 106)",
        "rgb(42, 169, 210)",
        "rgb(4, 112, 202)",
        "rgb(107, 10, 255)",
        "rgb(183, 0, 218)",
        "rgb(218, 0, 171)",
        "rgb(230, 64, 92)",
        "rgb(232, 98, 63)",
        "rgb(249, 129, 47)",
    ];

    const [currentColors, setCurrentColors] = React.useState(colors);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const shuffled = [...colors].sort(() => Math.random() - 0.5);
            setCurrentColors(shuffled);
            setCount((c) => c + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return text.split("").map((char, index) => (
        <motion.span
            key={`${char}-${index}-${count}`}
            initial={{ y: 0 }}
            animate={{
                color: currentColors[index % currentColors.length],
                y: [0, -3, 0],
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
            }}
            className={cn("inline-block", className)}
        >
            {char === " " ? "\u00A0" : char}
        </motion.span>
    ));
};

/**
 * Text Gradient Effect
 * Texto con gradiente animado
 */
export const GradientText = ({
    children,
    className,
    colors = ["#00e5ff", "#7c3aed", "#ec4899", "#00e5ff"],
}: {
    children: React.ReactNode;
    className?: string;
    colors?: string[];
}) => {
    return (
        <motion.span
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
            }}
            className={cn("inline-block", className)}
            style={{
                backgroundSize: "200% auto",
                backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
            }}
        >
            {children}
        </motion.span>
    );
};

/**
 * Typewriter Effect
 * Efecto de escritura letra por letra
 */
export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: {
    words: { text: string; className?: string }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const wordsArray = words.map((word) => ({
        ...word,
        text: word.text.split(""),
    }));

    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [currentCharIndex, setCurrentCharIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const word = wordsArray[currentWordIndex];

        if (!isDeleting && currentCharIndex === word.text.length) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        if (isDeleting && currentCharIndex === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % wordsArray.length);
            return;
        }

        const timeout = setTimeout(
            () => {
                setCurrentCharIndex((prev) => prev + (isDeleting ? -1 : 1));
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [currentCharIndex, isDeleting, currentWordIndex, wordsArray]);

    const currentWord = wordsArray[currentWordIndex];

    return (
        <div className={cn("flex items-center space-x-1", className)}>
            <span className="inline-block">
                {currentWord.text.slice(0, currentCharIndex).map((char, idx) => (
                    <span key={idx} className={currentWord.className}>
                        {char}
                    </span>
                ))}
            </span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block w-[4px] h-8 bg-cyan-500",
                    cursorClassName
                )}
            />
        </div>
    );
};
