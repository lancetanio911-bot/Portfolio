import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Frontend Developer";
  const name = searchParams.get("name") || "Lance P. Tanio";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f0a1a 0%, #1a0f2e 40%, #0d1117 100%)",
          padding: "60px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: "bold",
              color: "white",
              fontFamily: "sans-serif",
            }}
          >
            L
          </div>
          <span
            style={{
              fontSize: "18px",
              color: "#a1a1aa",
              fontFamily: "sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            PORTFOLIO
          </span>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "white",
            lineHeight: 1.1,
            fontFamily: "sans-serif",
            marginBottom: "16px",
          }}
        >
          {name}
        </div>

        <div
          style={{
            fontSize: "32px",
            background: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "sans-serif",
            fontWeight: 600,
            marginBottom: "32px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          {["React", "Next.js", "TypeScript", "Flutter"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 20px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.06)",
                color: "#d4d4d8",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            fontSize: "14px",
            color: "#52525b",
            fontFamily: "sans-serif",
          }}
        >
          lance-tanio-portfolio.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
