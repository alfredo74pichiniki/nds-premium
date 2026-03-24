'use client';

import { useState, FormEvent } from 'react';

export function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We&apos;ll get back to you within 24-48 hours.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm text-[var(--nds-primary)] hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[var(--nds-primary)] focus:outline-none transition-colors"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[var(--nds-primary)] focus:outline-none transition-colors"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this about?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[var(--nds-primary)] focus:outline-none transition-colors"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us more..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[var(--nds-primary)] focus:outline-none transition-colors resize-none"
                />
            </div>
            <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3.5 bg-gradient-to-r from-[var(--nds-primary)] to-[var(--nds-accent)] rounded-xl text-white font-bold hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] transition-all duration-300 disabled:opacity-50"
            >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>
            {status === 'error' && (
                <p className="text-red-400 text-sm">Failed to send. Please try emailing admin@nestdigitalstudio.com directly.</p>
            )}
        </form>
    );
}
