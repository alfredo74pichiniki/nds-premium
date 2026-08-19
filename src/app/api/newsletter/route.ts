import { NextRequest, NextResponse } from 'next/server';

/**
 * Alta en la lista de correo.
 *
 * Creado el 19 ago 2026. Hasta hoy este endpoint NO EXISTIA: `Newsletter.tsx`
 * tenia la llamada comentada y `LeadMagnet.tsx` un `setTimeout`, asi que los
 * dos formularios esperaban 1,5 s, decian "Check your inbox!" y tiraban el
 * correo a la basura. Comprobado contra la API de Resend: la audiencia
 * "General" existe desde el 31 ene 2026 y tenia 0 contactos.
 *
 * El dominio nestdigitalstudio.com esta verificado en Resend para envio.
 */

// Audiencia "General" de Resend. Se puede sobreescribir por entorno.
const AUDIENCE_ID =
    process.env.RESEND_AUDIENCE_ID || '3052f11a-e188-46c0-b0ab-e7b0b462594a';

// Validacion deliberadamente laxa: rechazar un correo valido es peor que
// aceptar uno falso, que Resend descartara al enviar.
function esEmailPlausible(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254;
}

export async function POST(request: NextRequest) {
    let email: string;
    let source: string | undefined;

    try {
        const body = await request.json();
        email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
        source = typeof body?.source === 'string' ? body.source.slice(0, 120) : undefined;
    } catch {
        return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    if (!email || !esEmailPlausible(email)) {
        return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
        // Sin clave no se puede guardar. Se devuelve error de servidor a
        // proposito: es preferible que el formulario avise a que vuelva a
        // mentirle al visitante diciendole que se ha suscrito.
        console.error('[newsletter] RESEND_API_KEY no configurada, alta perdida');
        return NextResponse.json({ error: 'Newsletter is not configured' }, { status: 503 });
    }

    try {
        const res = await fetch(
            `https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${resendKey}`,
                },
                body: JSON.stringify({ email, unsubscribed: false }),
            },
        );

        if (!res.ok) {
            const detalle = await res.text();
            // Resend devuelve 409 si el contacto ya existe. Para el visitante
            // eso es un exito: ya esta en la lista.
            if (res.status === 409 || detalle.includes('already exists')) {
                return NextResponse.json({ success: true, alreadySubscribed: true });
            }
            console.error('[newsletter] Resend', res.status, detalle.slice(0, 300));
            return NextResponse.json({ error: 'Could not subscribe' }, { status: 502 });
        }

        console.log(`[newsletter] alta OK${source ? ` (${source})` : ''}`);
        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('[newsletter] fallo de red', err);
        return NextResponse.json({ error: 'Could not subscribe' }, { status: 502 });
    }
}
