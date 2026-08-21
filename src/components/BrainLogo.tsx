export function BrainSymbolDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id="brain-cool" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2DD4BF" />
          <stop offset="55%" stopColor="#2E7BF6" />
          <stop offset="100%" stopColor="#4338CA" />
        </linearGradient>
        <linearGradient id="brain-warm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="40%" stopColor="#FB923C" />
          <stop offset="70%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <symbol id="brain" viewBox="0 0 64 56">
          {/* left (cool) hemisphere — faceted low-poly */}
          <g fill="url(#brain-cool)" stroke="#fff" strokeWidth="0.4" strokeLinejoin="round">
            <polygon points="30,2 18,6 22,14 30,10" />
            <polygon points="18,6 8,12 12,20 22,14" />
            <polygon points="8,12 4,22 12,26 12,20" />
            <polygon points="4,22 6,32 14,34 12,26" />
            <polygon points="6,32 12,42 18,40 14,34" />
            <polygon points="12,42 20,50 24,44 18,40" />
            <polygon points="20,50 30,54 30,46 24,44" />
            <polygon points="22,14 12,20 12,26 20,28 30,24 30,10" />
            <polygon points="12,26 14,34 20,36 20,28" />
            <polygon points="14,34 18,40 24,44 20,36" />
            <polygon points="20,28 20,36 24,44 30,46 30,24" />
          </g>
          {/* right (warm) hemisphere — faceted low-poly */}
          <g fill="url(#brain-warm)" stroke="#fff" strokeWidth="0.4" strokeLinejoin="round">
            <polygon points="34,2 46,6 42,14 34,10" />
            <polygon points="46,6 56,12 52,20 42,14" />
            <polygon points="56,12 60,22 52,26 52,20" />
            <polygon points="60,22 58,32 50,34 52,26" />
            <polygon points="58,32 52,42 46,40 50,34" />
            <polygon points="52,42 44,50 40,44 46,40" />
            <polygon points="44,50 34,54 34,46 40,44" />
            <polygon points="42,14 52,20 52,26 44,28 34,24 34,10" />
            <polygon points="52,26 50,34 44,36 44,28" />
            <polygon points="50,34 46,40 40,44 44,36" />
            <polygon points="44,28 44,36 40,44 34,46 34,24" />
          </g>
          {/* mid gap */}
          <rect x="31.4" y="2" width="1.2" height="52" fill="#fff" opacity="0.85" />
        </symbol>
      </defs>
    </svg>
  );
}

export function BrainLogo({ className = "h-8 w-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 56" role="img" aria-label="Company Brain Logo">
      <use href="#brain" />
    </svg>
  );
}
