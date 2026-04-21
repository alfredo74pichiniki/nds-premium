import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import {
    getProduct,
    getProductDownloadUrl,
    deliverProductByEmail,
} from '@/lib/product-delivery';

function getStripe() {
    return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export async function POST(request: NextRequest) {
    const body = await request.text();
    const sig = request.headers.get('stripe-signature');
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!sig || !webhookSecret) {
        return NextResponse.json(
            { error: 'Missing signature or webhook secret' },
            { status: 400 }
        );
    }

    let event: Stripe.Event;
    try {
        const stripe = getStripe();
        event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err) {
        console.error('[stripe-webhook] Signature verification failed:', err);
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;

        const customerEmail =
            session.customer_details?.email ?? session.customer_email ?? null;
        const customerName = session.customer_details?.name ?? undefined;
        const productSlug = session.metadata?.productSlug;
        const amountTotal = session.amount_total ?? 0;

        console.log('[stripe-webhook] Sale completed:', {
            email: customerEmail,
            amount: amountTotal,
            product: productSlug,
            session: session.id,
        });

        if (!customerEmail || !productSlug) {
            console.error('[stripe-webhook] Missing email or productSlug — cannot deliver');
            return NextResponse.json(
                { error: 'Missing email or product' },
                { status: 200 } // 200 so Stripe doesn't retry — admin needs to manually handle
            );
        }

        const product = getProduct(productSlug);
        if (!product) {
            console.error(`[stripe-webhook] Unknown product slug: ${productSlug}`);
            return NextResponse.json({ error: 'Unknown product' }, { status: 200 });
        }

        const downloadUrl = getProductDownloadUrl(product);
        if (!downloadUrl) {
            console.error(
                `[stripe-webhook] No download URL configured for ${productSlug} (env ${product.envVar})`
            );
            // Return 200 so Stripe doesn't retry, but send internal alert
            await notifyAdminOfFailedDelivery({
                session: session.id,
                email: customerEmail,
                productSlug,
                reason: `Missing env var ${product.envVar}`,
            });
            return NextResponse.json({ error: 'Product not configured' }, { status: 200 });
        }

        const result = await deliverProductByEmail({
            customerEmail,
            customerName,
            product,
            downloadUrl,
            sessionId: session.id,
            amountCents: amountTotal,
        });

        if (!result.success) {
            console.error('[stripe-webhook] Delivery failed:', result.error);
            await notifyAdminOfFailedDelivery({
                session: session.id,
                email: customerEmail,
                productSlug,
                reason: result.error ?? 'Unknown email error',
            });
        }
    }

    return NextResponse.json({ received: true });
}

async function notifyAdminOfFailedDelivery(params: {
    session: string;
    email: string;
    productSlug: string;
    reason: string;
}) {
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) return;

    try {
        await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${resendKey}`,
            },
            body: JSON.stringify({
                from: process.env.RESEND_FROM_EMAIL || 'Nest Digital Studio <onboarding@resend.dev>',
                to: 'admin@nestdigitalstudio.com',
                subject: `[URGENT] Delivery failed for ${params.productSlug} — Stripe ${params.session}`,
                html: `
                    <h2>Delivery Failed</h2>
                    <p><strong>Session:</strong> ${params.session}</p>
                    <p><strong>Customer:</strong> ${params.email}</p>
                    <p><strong>Product:</strong> ${params.productSlug}</p>
                    <p><strong>Reason:</strong> ${params.reason}</p>
                    <p>Manually send the download link to the customer and investigate the root cause.</p>
                `,
            }),
        });
    } catch (e) {
        console.error('[stripe-webhook] Failed to notify admin:', e);
    }
}
