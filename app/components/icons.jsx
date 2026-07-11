const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Svg({ size = 24, className, children, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      {...base}
      {...rest}
    >
      {children}
    </svg>
  );
}

export const Menu = (p) => (
  <Svg {...p}><path d="M4 6h16M4 12h16M4 18h16" /></Svg>
);
export const X = (p) => (
  <Svg {...p}><path d="M18 6 6 18M6 6l12 12" /></Svg>
);
export const ArrowRight = (p) => (
  <Svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
);
export const MapPin = (p) => (
  <Svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></Svg>
);
export const Mail = (p) => (
  <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Svg>
);
export const Phone = (p) => (
  <Svg {...p}><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" /></Svg>
);
export const AtSign = (p) => (
  <Svg {...p}><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" /></Svg>
);
export const ShieldCheck = (p) => (
  <Svg {...p}><path d="M12 3 5 6v6c0 5 3.5 7.5 7 9 3.5-1.5 7-4 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></Svg>
);
export const BadgeCheck = (p) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 5-5" /></Svg>
);
export const ReceiptText = (p) => (
  <Svg {...p}><path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21V3Z" /><path d="M9 8h6M9 12h6" /></Svg>
);
export const CalendarClock = (p) => (
  <Svg {...p}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18M8 2v4M16 2v4M12 13v3l2 1" /></Svg>
);
export const Building2 = (p) => (
  <Svg {...p}><path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" /><path d="M14 9h4a2 2 0 0 1 2 2v10" /><path d="M8 7h2M8 11h2M8 15h2M2 21h20" /></Svg>
);
export const Home = (p) => (
  <Svg {...p}><path d="m3 10 9-7 9 7" /><path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" /><path d="M10 21v-6h4v6" /></Svg>
);
export const Bath = (p) => (
  <Svg {...p}><path d="M4 12V6a2 2 0 0 1 4 0v.5" /><path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" /><path d="M6 19l-1 2M18 19l1 2" /></Svg>
);
export const Utensils = (p) => (
  <Svg {...p}><path d="M7 3v8a2 2 0 0 0 4 0V3M9 11v10M17 3c-1.5 0-3 1.5-3 4s1.5 4 3 4v10" /></Svg>
);
export const Zap = (p) => (
  <Svg {...p}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></Svg>
);
export const Waves = (p) => (
  <Svg {...p}><path d="M2 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" /></Svg>
);
export const Trees = (p) => (
  <Svg {...p}><path d="M12 3 7 10h3l-3 5h10l-3-5h3l-5-7Z" /><path d="M12 15v6" /></Svg>
);
export const Calculator = (p) => (
  <Svg {...p}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h4" /></Svg>
);
export const ClipboardCheck = (p) => (
  <Svg {...p}><rect x="8" y="3" width="8" height="4" rx="1" /><path d="M9 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3" /><path d="m9 14 2 2 4-4" /></Svg>
);
export const Hammer = (p) => (
  <Svg {...p}><path d="m14 6 4 4-8 8-4-4 8-8Z" /><path d="m14 6 2.5-2.5a2 2 0 0 1 3 3L17 9" /><path d="m6 14-3 3 4 4 3-3" /></Svg>
);
