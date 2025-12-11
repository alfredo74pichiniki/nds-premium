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

You have expertise in:
- Audio equipment (headphones, earbuds, speakers)
- Software and SaaS tools
- Smart home devices
- Work from home equipment  
- Gaming peripherals

Always end with a follow-up question.`;

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error("GEMINI_API_KEY not found in environment");
            return NextResponse.json({
                response: `I'm currently in demo mode. Ask me anything about headphones, standing desks, or other tech products! 🎧`,
            });
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        // Try gemini-1.5-flash first (most stable)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
                maxOutputTokens: 500,
                temperature: 0.7,
            },
        });

        const response = result.response.text();

        return NextResponse.json({ response });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error("Chat API error:", errorMessage);

        // Return a helpful fallback response
        return NextResponse.json({
            response: `I'm having a small technical hiccup! 🔧 But I can still help - for the best noise-canceling headphones, check out our Sony WH-1000XM5 review. For a great standing desk, the Uplift V2 is our top pick. What category interests you?`
        });
    }
}
