// Logo component matching the Optqvo brand — gradient O icon + wordmark

export default function OptqvoLogo({ height = 38 }: { height?: number }) {
  const scale = height / 38;
  const iconSize = 32 * scale;
  const fontSize = 22 * scale;
  const gap = 10 * scale;
  const totalWidth = iconSize + gap + fontSize * 4.4;

  return (
    <svg
      width={totalWidth}
      height={height}
      viewBox={`0 0 ${totalWidth} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Optqvo"
    >
      <defs>
        {/* Icon gradient */}
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        {/* Text gradient for "qvo" */}
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        {/* Inner icon glow */}
        <radialGradient id="iconGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── Rounded square icon badge ── */}
      <rect
        x={0}
        y={0}
        width={iconSize}
        height={iconSize}
        rx={iconSize * 0.22}
        fill="#0d0d18"
        stroke="url(#iconGrad)"
        strokeWidth={1.2}
      />
      {/* Glow inside badge */}
      <rect
        x={0}
        y={0}
        width={iconSize}
        height={iconSize}
        rx={iconSize * 0.22}
        fill="url(#iconGlow)"
        opacity={0.6}
      />

      {/* ── The "O" / target icon ── */}
      {/* Outer ring */}
      <circle
        cx={iconSize / 2}
        cy={iconSize / 2}
        r={iconSize * 0.32}
        stroke="url(#iconGrad)"
        strokeWidth={iconSize * 0.07}
        fill="none"
      />
      {/* Inner dot / slash */}
      <path
        d={`
          M ${iconSize / 2 - iconSize * 0.12} ${iconSize / 2 + iconSize * 0.06}
          L ${iconSize / 2 + iconSize * 0.12} ${iconSize / 2 - iconSize * 0.06}
        `}
        stroke="url(#iconGrad)"
        strokeWidth={iconSize * 0.07}
        strokeLinecap="round"
      />

      {/* ── Wordmark: "Opt" in white ── */}
      <text
        x={iconSize + gap}
        y={height * 0.72}
        fontFamily='"Inter", "Outfit", system-ui, sans-serif'
        fontWeight="800"
        fontSize={fontSize}
        fill="white"
        letterSpacing="-0.03em"
      >
        Opt
      </text>

      {/* ── Wordmark: "qvo" in gradient ── */}
      <text
        x={iconSize + gap + fontSize * 2.05}
        y={height * 0.72}
        fontFamily='"Inter", "Outfit", system-ui, sans-serif'
        fontWeight="800"
        fontSize={fontSize}
        fill="url(#textGrad)"
        letterSpacing="-0.03em"
      >
        qvo
      </text>
    </svg>
  );
}
