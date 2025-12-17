"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsentBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState({
        essential: true, // Always required
        analytics: false,
        marketing: false,
        affiliate: false,
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("nds_cookie_consent");
        if (!consent) {
            setShowBanner(true);
        } else {
            // Load saved preferences
            try {
                const saved = JSON.parse(consent);
                setPreferences(saved);
            } catch {
                setShowBanner(true);
            }
        }
    }, []);

    const acceptAll = () => {
        const allAccepted = {
            essential: true,
            analytics: true,
            marketing: true,
            affiliate: true,
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem("nds_cookie_consent", JSON.stringify(allAccepted));
        setPreferences(allAccepted);
        setShowBanner(false);
    };

    const acceptEssentialOnly = () => {
        const essentialOnly = {
            essential: true,
            analytics: false,
            marketing: false,
            affiliate: false,
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem("nds_cookie_consent", JSON.stringify(essentialOnly));
        setPreferences(essentialOnly);
        setShowBanner(false);
    };

    const savePreferences = () => {
        const saved = {
            ...preferences,
            timestamp: new Date().toISOString(),
        };
        localStorage.setItem("nds_cookie_consent", JSON.stringify(saved));
        setShowBanner(false);
        setShowPreferences(false);
    };

    if (!showBanner) return null;

    return (
        <>
            {/* Main Banner */}
            <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#111] border-t border-white/10 shadow-2xl">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        {/* Icon & Text */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl">🍪</span>
                                <h3 className="text-lg font-bold text-white">Cookie Preferences</h3>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                We use cookies to enhance your experience, analyze site traffic, and serve personalized content.
                                Some cookies are essential for the website to function properly. You can choose which optional
                                cookies to accept below.{" "}
                                <Link href="/privacy" className="text-[var(--nds-primary)] hover:underline">
                                    Learn more in our Privacy Policy
                                </Link>
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                            <button
                                onClick={() => setShowPreferences(!showPreferences)}
                                className="px-4 py-2 rounded-lg border border-white/20 text-gray-300 text-sm font-medium hover:bg-white/5 transition-colors"
                            >
                                Customize
                            </button>
                            <button
                                onClick={acceptEssentialOnly}
                                className="px-4 py-2 rounded-lg border border-white/20 text-gray-300 text-sm font-medium hover:bg-white/5 transition-colors"
                            >
                                Essential Only
                            </button>
                            <button
                                onClick={acceptAll}
                                className="px-6 py-2 rounded-lg bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>

                    {/* Preferences Panel */}
                    {showPreferences && (
                        <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                {/* Essential Cookies */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-semibold text-white text-sm">Essential</h4>
                                        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">Always On</span>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Required for basic website functionality and security.
                                    </p>
                                </div>

                                {/* Analytics Cookies */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-semibold text-white text-sm">Analytics</h4>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.analytics}
                                                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-9 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--nds-primary)]"></div>
                                        </label>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Help us understand how visitors interact with our website.
                                    </p>
                                </div>

                                {/* Marketing Cookies */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-semibold text-white text-sm">Marketing</h4>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.marketing}
                                                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-9 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--nds-primary)]"></div>
                                        </label>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Used to deliver personalized advertisements.
                                    </p>
                                </div>

                                {/* Affiliate Cookies */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-semibold text-white text-sm">Affiliate</h4>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={preferences.affiliate}
                                                onChange={(e) => setPreferences({ ...preferences, affiliate: e.target.checked })}
                                                className="sr-only peer"
                                            />
                                            <div className="w-9 h-5 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--nds-primary)]"></div>
                                        </label>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Track referrals to our affiliate partners (Amazon, etc).
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={savePreferences}
                                    className="px-6 py-2 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                                >
                                    Save Preferences
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
