// A component that renders the Certitude Professionals logo as an SVG.
// This makes it easy to reuse the logo throughout the application.

export default function Logo({ className }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 170 45" // Adjusted viewBox for better aspect ratio
        className={className}
        aria-label="Certitude Professionals Logo"
      >
        <style>
          {`
            .cp-cyan { stroke: hsl(var(--primary)); }
            .cp-white { stroke: hsl(var(--foreground)); }
            .cp-text { fill: hsl(var(--foreground)); font-family: sans-serif; }
            .cp-cyan-dot { fill: hsl(var(--primary)); }
            .cp-white-dot { fill: hsl(var(--foreground)); }
          `}
        </style>
        {/* CP Monogram */}
        <g transform="translate(10, 5) scale(0.8)">
          {/* C */}
          <path d="M 40 5 A 35 35 0 0 0 40 75" fill="none" className="cp-cyan" strokeWidth="2.5" />
          <path d="M 40 10 A 30 30 0 0 0 40 70" fill="none" className="cp-white" strokeWidth="2.5" />
          <circle cx="5.5" cy="40" r="1.5" className="cp-cyan-dot" />
          <circle cx="10.5" cy="40" r="1.5" className="cp-white-dot" />
          <circle cx="21" cy="13" r="1.5" className="cp-cyan-dot" />
          <circle cx="25" cy="18" r="1.5" className="cp-white-dot" />
          <circle cx="21" cy="67" r="1.5" className="cp-cyan-dot" />
          <circle cx="25" cy="62" r="1.5" className="cp-white-dot" />
  
          {/* Slash */}
          <line x1="45" y1="75" x2="65" y2="5" strokeWidth="2.5" className="cp-white" />
  
          {/* P */}
          <path d="M 70 5 H 95 A 17.5 17.5 0 0 1 95 40 H 70" fill="none" className="cp-cyan" strokeWidth="2.5" />
          <path d="M 70 10 H 90 A 12.5 12.5 0 0 1 90 35 H 70" fill="none" className="cp-white" strokeWidth="2.5" />
          <path d="M 70 5 V 75" fill="none" className="cp-cyan" strokeWidth="2.5" />
          <path d="M 70 10 V 70" fill="none" className="cp-white" strokeWidth="2.5" />
          <circle cx="70" cy="52.5" r="1.5" className="cp-cyan-dot" />
          <circle cx="70" cy="62.5" r="1.5" className="cp-white-dot" />
          <circle cx="109" cy="22.5" r="1.5" className="cp-cyan-dot" />
          <circle cx="100" cy="22.5" r="1.5" className="cp-white-dot" />
        </g>
  
        {/* Text */}
        <g transform="translate(0, 10)">
            <line x1="53" y1="31" x2="84" y2="31" strokeWidth="1" className="cp-white" />
            <text x="0" y="40" className="cp-text" fontSize="7" fontWeight="bold">CERTITUDE PROFESSIONALS</text>
        </g>
      </svg>
    );
  }
  