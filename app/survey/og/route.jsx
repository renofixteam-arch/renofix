import { ImageResponse } from "next/og";

// WhatsApp / social preview card for /survey (1200x630 PNG).
// Key message is centred so it survives WhatsApp's square thumbnail crop.
export const dynamic = "force-static";

const ORANGE = "#F26A1B";
const INK = "#14181F";
const MUTED = "#AEB4BF";

function Step({ icon, title, sub }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 250 }}>
      <div style={{ width: 84, height: 84, borderRadius: 24, background: "#232A35", border: "2px solid #39424F", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {icon}
      </div>
      <div style={{ marginTop: 14, fontSize: 28, color: "#F4F2EC", display: "flex" }}>{title}</div>
      <div style={{ marginTop: 4, fontSize: 21, color: MUTED, display: "flex" }}>{sub}</div>
    </div>
  );
}

function Arrow() {
  return (
    <div style={{ display: "flex", alignItems: "center", height: 84 }}>
      <svg width="56" height="24" viewBox="0 0 56 24">
        <path d="M2 12h46" stroke={ORANGE} strokeWidth="4" strokeDasharray="6 6" fill="none" />
        <path d="M42 4l10 8-10 8" stroke={ORANGE} strokeWidth="4" fill="none" />
      </svg>
    </div>
  );
}

const icon = (d) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

export function GET() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: INK, color: "#F4F2EC" }}>
        <div style={{ height: 22, display: "flex", overflow: "hidden", background: INK }}>
          {Array.from({ length: 30 }).map((_, k) => (
            <div key={k} style={{ width: 36, height: 22, marginRight: 36, background: ORANGE, transform: "skewX(-45deg)", flexShrink: 0 }} />
          ))}
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "28px 60px 0" }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: ORANGE, padding: "10px 22px", borderRadius: 999, border: `2px solid ${ORANGE}` }}>
            NEW FOR DUBAI CONTRACTORS
          </div>

          <div style={{ display: "flex", marginTop: 20, fontSize: 46, color: "#F4F2EC", textAlign: "center" }}>
            Site materials delivered to your site in
          </div>
          <div style={{ display: "flex", fontSize: 128, lineHeight: 1, color: ORANGE, letterSpacing: -4, marginTop: 2 }}>2 hours</div>

          <div style={{ display: "flex", alignItems: "flex-start", marginTop: 20 }}>
            <Step
              icon={icon(<g><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 18h4M9 7h6M9 11h6" /></g>)}
              title="You send the list"
              sub="From your phone"
            />
            <Arrow />
            <Step
              icon={icon(<g><circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><path d="M9 17h6l-2-7h-4M15 6h3l3 8" /><path d="M2 10h7" /></g>)}
              title="We pick it up"
              sub="From the supplier"
            />
            <Arrow />
            <Step
              icon={icon(<g><path d="M3 21h18" /><rect x="5" y="9" width="8" height="12" /><path d="M13 13h6v8" /><path d="M8 13h2M8 17h2" /><path d="M5 9l4-6 4 6" /><path d="M16 17h0.5" /></g>)}
              title="At your site"
              sub="Work never stops"
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 60px 30px" }}>
          <div style={{ display: "flex", fontSize: 23, color: MUTED }}>Glands · Lugs · PPR fittings · Anchors · Discs</div>
          <div style={{ display: "flex", fontSize: 26, background: ORANGE, color: "#1A0A00", padding: "14px 26px", borderRadius: 16 }}>
            Would you use it? Vote in 1 min
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
