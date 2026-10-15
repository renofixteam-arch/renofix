import { ImageResponse } from "next/og";

// WhatsApp / social preview card for /survey (1200x630 PNG).
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#14181F", color: "#F4F2EC" }}>
        <div style={{ height: 26, display: "flex", overflow: "hidden", background: "#14181F" }}>
          {Array.from({ length: 30 }).map((_, k) => (
            <div key={k} style={{ width: 40, height: 26, marginRight: 40, background: "#F26A1B", transform: "skewX(-45deg)", flexShrink: 0 }} />
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "54px 72px 60px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: 16, background: "#F26A1B", color: "#1A0A00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, fontWeight: 800 }}><svg width="36" height="36" viewBox="0 0 24 24" fill="#1A0A00"><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg></div>
              <div style={{ marginLeft: 20, fontSize: 40, fontWeight: 800 }}>SiteRunner</div>
            </div>
            <div style={{ display: "flex", fontSize: 26, padding: "12px 22px", borderRadius: 999, border: "2px solid #3A4250", color: "#B9BDC6" }}>1-minute survey - Dubai</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignSelf: "flex-start", fontSize: 28, padding: "14px 22px", borderRadius: "6px 24px 24px 24px", background: "#22303C", color: "#F4F2EC", marginBottom: 28 }}>
              "Boss, the glands are finished. Work is stopped."
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", fontSize: 76, fontWeight: 800, lineHeight: 1.04, letterSpacing: -2 }}>
              <span>One missing box should not cost your site&nbsp;</span>
              <span style={{ color: "#F26A1B" }}>half a day.</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", fontSize: 30, color: "#B9BDC6" }}>Vote for 2-hour site delivery in your area</div>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 800, background: "#F26A1B", color: "#1A0A00", padding: "16px 30px", borderRadius: 18 }}>Take the survey</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
