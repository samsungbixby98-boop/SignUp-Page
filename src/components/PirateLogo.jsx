export default function PirateLogo() {
  return (
    <div className="pirate-logo">
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle cx="32" cy="32" r="30" fill="rgba(255,255,255,0.18)" />
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
        />

        {/* Crossbones */}
        <path
          d="M18 44 L46 20"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M46 44 L18 20"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Skull */}
        <path
          d="M32 16c-9 0-16 6.5-16 15 0 6.5 4.5 12 11 14v4c0 2 1.5 3 3 3h4c1.5 0 3-1 3-3v-4c6.5-2 11-7.5 11-14 0-8.5-7-15-16-15Z"
          fill="white"
        />

        {/* Eyes */}
        <circle cx="26" cy="30" r="3" fill="#111827" />
        <circle cx="38" cy="30" r="3" fill="#111827" />

        {/* Nose */}
        <path d="M32 34 L29 39 H35 Z" fill="#111827" />
      </svg>
    </div>
  );
}
