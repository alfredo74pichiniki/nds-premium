import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const systemPrompt = `You are the AI shopping assistant for Nest Digital Studio, a premium tech review website. Your role is to help users find the perfect tech products based on their needs.

Guidelines:
- Be conversational, friendly, and helpful
- Provide specific product recommendations when asked
- Mention price ranges when relevant
- Highlight key features, pros, and cons
- Keep responses concise (2-3 paragraphs max)
- Use emojis sparingly

Your core expertise, and what this site is actually authoritative on, is SECURITY SOFTWARE:
- Antivirus (Norton, Bitdefender, McAfee, Malwarebytes)
- VPNs (NordVPN, Surfshark, Proton VPN, ExpressVPN, CyberGhost, IPVanish)
- Password managers (1Password, Bitwarden, Dashlane, NordPass, RoboForm)
- Online privacy and device security

Lead with those whenever the question allows it, and point to the matching guide:
/software/best-antivirus-software-2026, /software/best-vpn-services-2026,
/software/best-password-managers-2026.

You can also help with software/SaaS tools, work-from-home gear, audio and gaming
peripherals, but those are secondary.

Always end with a follow-up question.`;

// Fallback cuando la API de Gemini no responde. Apunta al nicho donde el sitio
// tiene posicion real (seguridad, posicion media 24 frente a 37-60 del resto),
// no a un producto suelto de otra categoria.
const FALLBACK =
    "I can't reach my AI assistant right now. In the meantime, our most useful guides are " +
    "[the best antivirus software of 2026](/software/best-antivirus-software-2026), " +
    "[the best VPN services](/software/best-vpn-services-2026) and " +
    "[the best password managers](/software/best-password-managers-2026). " +
    "Which of the three are you looking for?";

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error("[chat] GEMINI_API_KEY ausente");
            return NextResponse.json({ response: FALLBACK, degraded: true });
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        // gemini-1.5-flash esta RETIRADO por Google: con el, esta ruta devolvia
        // siempre el fallback y nadie se enteraba porque respondia HTTP 200.
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const result = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: systemPrompt },
                        { text: `User question: ${message}` }
                    ],
                },
            ],
            generationConfig: {
                // gemini-2.5-flash razona antes de responder y ese razonamiento
                // consume el presupuesto de salida: con 500 la respuesta salia
                // truncada o vacia. Margen suficiente para 2-3 parrafos.
                maxOutputTokens: 2048,
                temperature: 0.7,
            },
        });

        const response = result.response.text();
        if (!response || !response.trim()) {
            console.error("[chat] Gemini devolvio respuesta vacia");
            return NextResponse.json({ response: FALLBACK, degraded: true });
        }

        return NextResponse.json({ response });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        // Se registra el error REAL. Antes se tragaba y se servia un mensaje
        // alegre, asi que el chat llevaba roto desde que la clave dejo de valer
        // y no habia forma de notarlo desde fuera.
        console.error("[chat] Gemini fallo:", errorMessage);

        return NextResponse.json({ response: FALLBACK, degraded: true });
    }
}
