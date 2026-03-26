import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        
        // Dynamic params
        const title = searchParams.get("title") || "Expert Tech Reviews";
        const category = searchParams.get("category") || "Software";
        
        // Truncate title if extremely long
        const displayTitle = title.length > 80 ? title.substring(0, 80) + "..." : title;

        return new ImageResponse(
            (
                <div
                    style={{
                        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Inter, sans-serif",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "32px",
                            padding: "0 80px",
                        }}
                    >
                        {/* Dynamic Category Pill */}
                        <div
                            style={{
                                padding: "10px 24px",
                                borderRadius: "999px",
                                border: "1px solid rgba(0, 180, 216, 0.4)",
                                background: "rgba(0, 180, 216, 0.1)",
                                color: "#00b4d8",
                                fontSize: "18px",
                                fontWeight: 600,
                                textTransform: "capitalize",
                                letterSpacing: "1px",
                            }}
                        >
                            {category}
                        </div>

                        {/* Dynamic Title */}
                        <div
                            style={{
                                fontSize: "72px",
                                fontWeight: 900,
                                background: "linear-gradient(180deg, #ffffff, #c0c0c0)",
                                backgroundClip: "text",
                                color: "transparent",
                                letterSpacing: "-2px",
                                textAlign: "center",
                                lineHeight: 1.1,
                                maxWidth: "1000px",
                            }}
                        >
                            {displayTitle}
                        </div>
                        
                        {/* Brand Signature */}
                        <div
                            style={{
                                fontSize: "24px",
                                color: "#9ca3af",
                                fontWeight: 500,
                                textAlign: "center",
                                marginTop: "16px",
                            }}
                        >
                            Powered by Nest Digital Studio AI
                        </div>
                    </div>
                    {/* Bottom URL */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "40px",
                            fontSize: "20px",
                            color: "#6b7280",
                            fontWeight: 600,
                            letterSpacing: "2px",
                        }}
                    >
                        NESTDIGITALSTUDIO.COM
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e: any) {
        console.error(e);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
