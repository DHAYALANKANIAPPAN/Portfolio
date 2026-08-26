"use client";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-glow" />
      <div
        className="absolute -top-1/4 left-1/2 h-[60vw] w-[60vw] max-w-[900px] max-h-[900px] -translate-x-1/2 rounded-full opacity-40 blur-[120px] animate-[float_10s_ease-in-out_infinite]"
        style={{
          background:
            "conic-gradient(from 90deg, #00E5FF, #7B61FF, #00FFB3, #00E5FF)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[40vw] w-[40vw] max-w-[600px] max-h-[600px] rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, #7B61FF, transparent 70%)" }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M56 0H0V56"
              fill="none"
              stroke="white"
              strokeOpacity="0.15"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    </div>
  );
}
