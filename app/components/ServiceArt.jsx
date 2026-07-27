"use client";

// Branded line-art illustrations per service (blueprint / precision-builder style).
// Used as the default service-card visual until a real photo is uploaded in /admin/images.
// Dependency-free inline SVG; amber + white strokes on a dark slate gradient tile.

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 5, strokeLinecap: "round", strokeLinejoin: "round" };
const amber = { fill: "none", stroke: "#f59e0b", strokeWidth: 5, strokeLinecap: "round", strokeLinejoin: "round" };

function Frame({ children }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sa-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <pattern id="sa-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#sa-bg)" />
      <rect width="400" height="300" fill="url(#sa-grid)" />
      <g className="text-white/85" transform="translate(0,-8)">{children}</g>
    </svg>
  );
}

const ART = {
  "apartment-renovation": (
    <Frame>
      <rect x="120" y="70" width="160" height="170" rx="4" {...stroke} />
      <line x1="120" y1="120" x2="280" y2="120" {...stroke} />
      <line x1="120" y1="170" x2="280" y2="170" {...stroke} />
      <rect x="140" y="88" width="30" height="22" {...amber} />
      <rect x="230" y="88" width="30" height="22" {...stroke} />
      <rect x="140" y="138" width="30" height="22" {...stroke} />
      <rect x="230" y="138" width="30" height="22" {...amber} />
      <rect x="185" y="200" width="30" height="40" {...stroke} />
    </Frame>
  ),
  "villa-renovation": (
    <Frame>
      <path d="M110 150 L200 90 L290 150" {...stroke} />
      <rect x="130" y="150" width="140" height="90" {...stroke} />
      <rect x="185" y="195" width="30" height="45" {...amber} />
      <rect x="145" y="165" width="26" height="26" {...stroke} />
      <rect x="229" y="165" width="26" height="26" {...stroke} />
    </Frame>
  ),
  "bathroom-renovation": (
    <Frame>
      <path d="M120 160 h160 v20 a30 30 0 0 1 -30 30 h-100 a30 30 0 0 1 -30 -30 z" {...stroke} />
      <line x1="130" y1="210" x2="130" y2="230" {...stroke} />
      <line x1="270" y1="210" x2="270" y2="230" {...stroke} />
      <path d="M150 160 v-40 a18 18 0 0 1 36 0" {...amber} />
      <circle cx="255" cy="95" r="14" {...stroke} />
      <line x1="255" y1="109" x2="255" y2="150" {...amber} strokeDasharray="4 8" />
    </Frame>
  ),
  "kitchen-renovation": (
    <Frame>
      <rect x="110" y="150" width="180" height="90" {...stroke} />
      <line x1="110" y1="180" x2="290" y2="180" {...stroke} />
      <line x1="170" y1="180" x2="170" y2="240" {...stroke} />
      <line x1="230" y1="180" x2="230" y2="240" {...stroke} />
      <rect x="130" y="95" width="140" height="45" {...stroke} />
      <path d="M200 150 v-20 a14 14 0 0 1 28 0" {...amber} />
    </Frame>
  ),
  "mep-works": (
    <Frame>
      <path d="M205 80 L165 165 h35 L190 230 L245 135 h-35 z" {...amber} />
      <path d="M110 120 h30 v60 h-30" {...stroke} />
      <path d="M290 180 h-30 v-60 h30" {...stroke} />
    </Frame>
  ),
  "swimming-pool-construction": (
    <Frame>
      <rect x="100" y="120" width="200" height="110" rx="10" {...stroke} />
      <path d="M110 165 q20 -12 40 0 t40 0 t40 0 t40 0" {...amber} />
      <path d="M110 195 q20 -12 40 0 t40 0 t40 0 t40 0" {...amber} />
      <line x1="250" y1="120" x2="250" y2="95" {...stroke} />
      <line x1="270" y1="120" x2="270" y2="95" {...stroke} />
      <line x1="250" y1="105" x2="270" y2="105" {...stroke} />
    </Frame>
  ),
  landscaping: (
    <Frame>
      <line x1="200" y1="230" x2="200" y2="150" {...stroke} />
      <circle cx="200" cy="120" r="42" {...amber} />
      <path d="M120 230 q20 -40 40 0" {...stroke} />
      <path d="M240 230 q20 -50 40 0" {...stroke} />
      <line x1="90" y1="230" x2="310" y2="230" {...stroke} />
    </Frame>
  ),
  "painting-flooring": (
    <Frame>
      <rect x="150" y="90" width="90" height="40" rx="6" {...amber} />
      <line x1="195" y1="130" x2="195" y2="170" {...stroke} />
      <path d="M180 170 h30 v50 h-30 z" {...stroke} />
      <line x1="110" y1="245" x2="290" y2="245" {...stroke} />
      <line x1="140" y1="245" x2="160" y2="225" {...stroke} />
      <line x1="200" y1="245" x2="220" y2="225" {...stroke} />
      <line x1="260" y1="245" x2="280" y2="225" {...stroke} />
    </Frame>
  ),
  "false-ceiling-partitions": (
    <Frame>
      <rect x="110" y="90" width="180" height="70" {...stroke} />
      <line x1="170" y1="90" x2="170" y2="160" {...stroke} />
      <line x1="230" y1="90" x2="230" y2="160" {...stroke} />
      <line x1="110" y1="125" x2="290" y2="125" {...stroke} />
      <circle cx="140" cy="107" r="6" {...amber} />
      <circle cx="200" cy="142" r="6" {...amber} />
      <circle cx="260" cy="107" r="6" {...amber} />
    </Frame>
  ),
  "home-maintenance": (
    <Frame>
      <path d="M150 110 a30 30 0 1 0 34 48 l40 40 a14 14 0 0 0 20 -20 l-40 -40 a30 30 0 0 0 -48 -34 l22 22 -14 14 z" {...amber} />
      <line x1="215" y1="205" x2="245" y2="235" {...stroke} />
    </Frame>
  ),
};

export default function ServiceArt({ slug }) {
  return ART[slug] || (
    <Frame>
      <rect x="130" y="100" width="140" height="110" rx="6" {...stroke} />
      <line x1="130" y1="145" x2="270" y2="145" {...amber} />
    </Frame>
  );
}
