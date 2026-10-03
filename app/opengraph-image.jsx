import { ImageResponse } from "next/og";

// Default social share image (WhatsApp, LinkedIn, Facebook previews).
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "RenoFix — Renovation, MEP & Maintenance Company in Dubai";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "#0f172a",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 96,
              height: 96,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f59e0b",
              borderRadius: 22,
              color: "#0f172a",
              fontSize: 64,
              fontWeight: 700,
            }}
          >
            R
          </div>
          <div style={{ marginLeft: 28, fontSize: 56, fontWeight: 700 }}>RenoFix</div>
        </div>
        <div style={{ marginTop: 56, fontSize: 64, fontWeight: 700, lineHeight: 1.15 }}>
          Renovation, MEP &amp; Maintenance in Dubai
        </div>
        <div style={{ marginTop: 28, fontSize: 34, color: "#fbbf24" }}>
          Fixed, itemised pricing · renofixplus.ae
        </div>
      </div>
    ),
    size
  );
}
