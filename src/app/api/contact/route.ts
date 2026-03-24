import { NextRequest, NextResponse } from 'next/server';

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const resendKey = process.env.RESEND_API_KEY;
        if (!resendKey) {
            // Fallback: log the message if Resend is not configured
            console.log('Contact form submission (no Resend key):', { name, email, subject, message });
            return NextResponse.json({ success: true });
        }

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${resendKey}`,
            },
            body: JSON.stringify({
                from: 'NDS Contact Form <onboarding@resend.dev>',
                to: 'admin@nestdigitalstudio.com',
                subject: `[Contact Form] ${escapeHtml(subject || 'New message')}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Subject:</strong> ${escapeHtml(subject || 'N/A')}</p>
                    <p><strong>Message:</strong></p>
                    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
                `,
            }),
        });

        if (!res.ok) {
            const errData = await res.json();
            console.error('Resend error:', errData);
            throw new Error('Failed to send email');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
