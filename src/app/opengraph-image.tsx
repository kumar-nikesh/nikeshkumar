import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #08131e 0%, #10314b 50%, #e6a44a 100%)",
          color: "#f8fafc",
          padding: "72px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          Nikesh Singh
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Software Engineer | .NET | Microservices | AI & Data
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.4, color: "rgba(248,250,252,0.82)" }}>
            Scalable backend systems, APIs, distributed architecture, and a growing focus on data engineering and AI.
          </div>
        </div>
      </div>
    ),
    size
  );
}