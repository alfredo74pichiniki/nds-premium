"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export function AIChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "👋 Hi! I'm your AI shopping assistant powered by Gemini. Ask me anything about tech products - I'll help you find the perfect one!",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Listen for external "open chat" events (from Navbar Ask AI button)
    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener('openAIChat', handleOpenChat);
        return () => window.removeEventListener('openAIChat', handleOpenChat);
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-primary-dark)] shadow-lg flex items-center justify-center pulse-glow ${isOpen ? "hidden" : ""}`}
            >
                <MessageCircle className="w-7 h-7 text-white" />
            </motion.button>

            {/* Chat window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] bg-[var(--nds-bg-elevated)] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-[var(--nds-primary)]/20 to-transparent">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">NDS AI Assistant</h3>
                                    <p className="text-xs text-gray-400">Powered by Gemini 3.0 Pro</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl ${message.role === "user"
                                            ? "bg-[var(--nds-primary)] text-white rounded-br-md"
                                            : "bg-white/5 text-gray-200 rounded-bl-md"
                                            }`}
                                    >
                                        <p className="text-sm leading-relaxed">{message.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white/5 p-3 rounded-2xl rounded-bl-md">
                                        <Loader2 className="w-5 h-5 animate-spin text-[var(--nds-primary)]" />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Ask about any tech product..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-[var(--nds-primary)] transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading || !input.trim()}
                                    className="w-12 h-12 rounded-full bg-[var(--nds-primary)] hover:bg-[var(--nds-primary-dark)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 text-center mt-2">
                                AI can make mistakes. Verify important info.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
