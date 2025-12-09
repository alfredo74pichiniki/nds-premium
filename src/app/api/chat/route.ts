import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const systemPrompt = `You are the AI shopping assistant for Nest Digital Studio, a premium tech review website. Your role is to help users find the perfect tech products based on their needs.

Guidelines:
- Be conversational, friendly, and helpful
- Provide specific product recommendations when asked
- Mention price ranges when relevant
- Highlight key features, pros, and cons
- If you don't know something specific, admit it and suggest visiting product pages
- Keep responses concise but informative (2-3 paragraphs max)
- Use emojis sparingly to make responses engaging

You have expertise in:
- Audio equipment (headphones, earbuds, speakers)
- Software and SaaS tools
- Smart home devices
- Work from home equipment
- Gaming peripherals
- Business tools

Always end with a follow-up question to help the user further.`;

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({
                response: `I'm currently in demo mode. In production, I'll be powered by Gemini AI! How can I help you with your tech product search?`,
            });
        }

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
        console.error("Chat API error:", error);
        return NextResponse.json(
            { response: "I apologize, but I'm having trouble connecting right now. Please try again in a moment!" },
            { status: 500 }
        );
    }
}
