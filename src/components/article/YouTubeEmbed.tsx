"use client";

/**
 * YouTubeEmbed - Lazy-loading YouTube Video Embed
 * FASE 5.1: Rich Content
 */

import React, { useState } from "react";

// ═══════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════

interface YouTubeEmbedProps {
    videoId: string;
    title: string;
    className?: string;
}

// ═══════════════════════════════════════════════════════════════
// PLAY BUTTON
// ═══════════════════════════════════════════════════════════════

const PlayButton = () => (
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-200">
            <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
            </svg>
        </div>
    </div>
);

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
    videoId,
    title,
    className = "",
}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    if (isPlaying) {
        return (
            <div className={`relative aspect-video rounded-xl overflow-hidden ${className}`}>
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <button
                onClick={() => setIsPlaying(true)}
                className="group relative w-full aspect-video rounded-xl overflow-hidden bg-gray-900 cursor-pointer"
                aria-label={`Play video: ${title}`}
            >
                {/* Thumbnail */}
                <img
                    src={thumbnailUrl}
                    alt={title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                {/* Play button */}
                <PlayButton />

                {/* Duration badge (placeholder) */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded text-white text-xs font-medium">
                    Watch Video
                </div>
            </button>

            {/* Title */}
            <p className="mt-3 text-sm text-gray-600 text-center">
                📺 {title}
            </p>
        </div>
    );
};

export default YouTubeEmbed;
