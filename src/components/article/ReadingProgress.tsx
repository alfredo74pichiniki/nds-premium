"use client";

/**
 * ReadingProgress - Reading Progress Bar
 * FASE 4.2: Layout Components
 */

import React, { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface ReadingProgressProps {
    target?: string;  // CSS selector for content container
    className?: string;
    color?: string;
    height?: number;
    showPercentage?: boolean;
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const ReadingProgress: React.FC<ReadingProgressProps> = ({
    target = "article",
    className = "",
    color = "from-purple-500 to-pink-500",
    height = 3,
    showPercentage = false,
}) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateProgress = () => {
            const targetElement = document.querySelector(target);
            if (!targetElement) return;

            const rect = targetElement.getBoundingClientRect();
            const scrolled = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Calculate progress based on article position
            const articleTop = rect.top + scrolled;
            const articleHeight = targetElement.scrollHeight;
            const contentScrolled = scrolled - articleTop + viewportHeight;

            // Calculate percentage
            const percentage = Math.min(
                100,
                Math.max(0, (contentScrolled / articleHeight) * 100)
            );

            setProgress(percentage);
            setIsVisible(scrolled > 100);
        };

        window.addEventListener("scroll", updateProgress, { passive: true });
        updateProgress();

        return () => window.removeEventListener("scroll", updateProgress);
    }, [target]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 ${className}`}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <div
                className="bg-gray-100"
                style={{ height: `${height}px` }}
            >
                <div
                    className={`h-full bg-gradient-to-r ${color} transition-all duration-150 ease-out`}
                    style={{ width: `${progress}%` }}
                />
            </div>

            {showPercentage && progress > 5 && (
                <div className="absolute top-2 right-4">
                    <span className="text-xs font-medium text-gray-600 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
                        {Math.round(progress)}%
                    </span>
                </div>
            )}
        </div>
    );
};

export default ReadingProgress;
