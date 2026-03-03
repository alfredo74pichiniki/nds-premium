import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nest Digital Studio - Expert Tech Reviews Powered by AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
                        gap: "24px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "72px",
                            fontWeight: 900,
                            background: "linear-gradient(90deg, #00b4d8, #0077b6, #00b4d8)",
                            backgroundClip: "text",
                            color: "transparent",
                            letterSpacing: "-2px",
                        }}
                    >
                        Nest Digital Studio
                    </div>
                    <div
                        style={{
                            fontSize: "28px",
                            color: "#9ca3af",
                            fontWeight: 500,
                            maxWidth: "800px",
                            textAlign: "center",
                        }}
                    >
                        Expert Tech Reviews Powered by AI
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "32px",
                            marginTop: "24px",
                        }}
                    >
                        {["Software", "Gaming", "Audio", "Home", "Security"].map((cat) => (
                            <div
                                key={cat}
                                style={{
                                    padding: "8px 20px",
                                    borderRadius: "999px",
                                    border: "1px solid rgba(0, 180, 216, 0.3)",
                                    color: "#00b4d8",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                }}
                            >
                                {cat}
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: "32px",
                        fontSize: "16px",
                        color: "#6b7280",
                    }}
                >
                    nestdigitalstudio.com
                </div>
            </div>
        ),
        { ...size }
    );
}
