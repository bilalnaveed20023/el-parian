// Inline SVG: the arcade emblem, a spinning trompo (al pastor spit), a star. No images.

export function Emblem({ className = "", id = "em" }: { className?: string; id?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" role="img" aria-label="Lonchería El Parian">
      <defs>
        <clipPath id={`${id}-c`}>
          <circle cx="120" cy="104" r="76" />
        </clipPath>
      </defs>
      <circle cx="120" cy="104" r="86" fill="var(--e-ring, #1b1210)" />
      <circle cx="120" cy="104" r="76" fill="var(--e-bg, #f5a21a)" />
      <g clipPath={`url(#${id}-c)`} fill="var(--e-fg, #1b1210)">
        {/* arcade facade */}
        <rect x="36" y="86" width="168" height="80" />
        <path d="M96 86 V62 q0 -8 8 -8 h32 q8 0 8 8 V86 Z" />
        <rect x="108" y="40" width="24" height="16" />
        <path d="M112 40 q8 -16 16 0 Z" />
      </g>
      <g clipPath={`url(#${id}-c)`} fill="var(--e-bg, #f5a21a)">
        {[49, 85, 121, 157].map((x, i) => (
          <path key={i} d={`M${x} 166 V120 a14 14 0 0 1 28 0 V166 Z`} />
        ))}
        <path d="M107 92 a13 13 0 0 1 26 0 V86 h-26 Z" />
      </g>
      <text x="120" y="204" textAnchor="middle" fontFamily="var(--f-display)" fontSize="19" letterSpacing="3" fill="var(--e-text, #1b1210)">LONCHERÍA</text>
      <text x="120" y="232" textAnchor="middle" fontFamily="var(--f-display)" fontSize="32" letterSpacing="2" fill="var(--e-text, #1b1210)">EL PARIAN</text>
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.5l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 8.8l7.1-.7z" fill="currentColor" />
    </svg>
  );
}

const layers = [
  { y: 112, w: 150, c: "#b22a14" },
  { y: 132, w: 156, c: "#e35a1f" },
  { y: 152, w: 150, c: "#9c2410" },
  { y: 172, w: 144, c: "#dd4d1b" },
  { y: 192, w: 138, c: "#b22a14" },
  { y: 212, w: 130, c: "#e8641f" },
  { y: 232, w: 122, c: "#a52710" },
  { y: 252, w: 112, c: "#d9491a" },
  { y: 272, w: 102, c: "#b22a14" },
  { y: 292, w: 92, c: "#e35a1f" },
  { y: 312, w: 82, c: "#9c2410" },
  { y: 332, w: 70, c: "#cf4217" },
];

export function Trompo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 260 440" aria-hidden="true">
      <defs>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffd25e" stopOpacity=".95" />
          <stop offset="1" stopColor="#ff7a1a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="12" y="104" width="34" height="250" rx="17" fill="url(#glow)" className="t-glow" />
      <rect x="125" y="30" width="10" height="390" rx="5" fill="#2a1a14" />
      <ellipse cx="130" cy="418" rx="62" ry="12" fill="#2a1a14" />
      {layers.map((l, i) => (
        <g key={i} className="t-layer" style={{ animationDelay: `${-i * 0.22}s` }}>
          <rect x={130 - l.w / 2} y={l.y} width={l.w} height="26" rx="13" fill={l.c} />
          <rect x={130 - l.w / 2 + 8} y={l.y + 4} width={l.w * 0.55} height="5" rx="2.5" fill="#fff" opacity=".12" />
          <circle cx={130 + l.w * 0.22} cy={l.y + 14} r="2.2" fill="#2a1a14" opacity=".35" />
          <circle cx={130 - l.w * 0.28} cy={l.y + 17} r="1.8" fill="#2a1a14" opacity=".3" />
        </g>
      ))}
      {/* pineapple */}
      <g>
        <ellipse cx="130" cy="90" rx="34" ry="30" fill="#f0b323" />
        <path d="M104 78 l52 24 M104 90 l52 24 M110 68 l40 18 M108 102 l40 18 M156 78 l-52 24 M156 90 l-52 24 M150 68 l-40 18 M152 102 l-40 18" stroke="#c98a10" strokeWidth="2" opacity=".7" />
        <path d="M130 64 C 118 44, 104 36, 96 26 C 110 28, 122 34, 130 48 C 138 34, 150 28, 164 26 C 156 36, 142 44, 130 64 Z" fill="#2d9a57" />
        <path d="M130 62 C 126 40, 128 24, 130 10 C 132 24, 134 40, 130 62 Z" fill="#23834a" />
      </g>
    </svg>
  );
}
