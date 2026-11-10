/**
 * E-stamp filigree that frames a clear centre well for the brand logo.
 * Drawn wide and symmetrical so it reads as a certificate crest.
 */
const StampOrnament = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 34 720 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer wing silhouette */}
        <path
          d="M28 160 C70 48, 150 42, 210 95 C250 55, 300 40, 360 40 C420 40, 470 55, 510 95 C570 42, 650 48, 692 160 C650 272, 570 278, 510 225 C470 265, 420 280, 360 280 C300 280, 250 265, 210 225 C150 278, 70 272, 28 160 Z"
          strokeWidth="1.4"
          opacity="0.4"
        />
        <path
          d="M58 160 C95 72, 160 78, 205 118 C250 78, 305 68, 360 68 C415 68, 470 78, 515 118 C560 78, 625 72, 662 160 C625 248, 560 242, 515 202 C470 242, 415 252, 360 252 C305 252, 250 242, 205 202 C160 242, 95 248, 58 160 Z"
          strokeWidth="1.2"
          opacity="0.55"
        />

        {/* Guilloche arcs left */}
        <path d="M78 160 C105 115, 145 118, 168 160 C145 202, 105 205, 78 160" strokeWidth="1.15" />
        <path d="M108 160 C125 132, 150 134, 162 160 C150 186, 125 188, 108 160" strokeWidth="1" opacity="0.75" />
        <path d="M95 112 C125 88, 165 98, 185 130" strokeWidth="1" opacity="0.65" />
        <path d="M95 208 C125 232, 165 222, 185 190" strokeWidth="1" opacity="0.65" />
        <path d="M130 88 C165 58, 215 72, 235 110" strokeWidth="1" opacity="0.5" />
        <path d="M130 232 C165 262, 215 248, 235 210" strokeWidth="1" opacity="0.5" />
        <path d="M175 160 C190 138, 215 140, 228 160 C215 180, 190 182, 175 160" strokeWidth="1" opacity="0.7" />

        {/* Guilloche arcs right */}
        <path d="M642 160 C615 115, 575 118, 552 160 C575 202, 615 205, 642 160" strokeWidth="1.15" />
        <path d="M612 160 C595 132, 570 134, 558 160 C570 186, 595 188, 612 160" strokeWidth="1" opacity="0.75" />
        <path d="M625 112 C595 88, 555 98, 535 130" strokeWidth="1" opacity="0.65" />
        <path d="M625 208 C595 232, 555 222, 535 190" strokeWidth="1" opacity="0.65" />
        <path d="M590 88 C555 58, 505 72, 485 110" strokeWidth="1" opacity="0.5" />
        <path d="M590 232 C555 262, 505 248, 485 210" strokeWidth="1" opacity="0.5" />
        <path d="M545 160 C530 138, 505 140, 492 160 C505 180, 530 182, 545 160" strokeWidth="1" opacity="0.7" />

        {/* Leaf / petal bridges toward the seal */}
        <path d="M220 125 C245 100, 280 108, 295 135" strokeWidth="1" opacity="0.55" />
        <path d="M220 195 C245 220, 280 212, 295 185" strokeWidth="1" opacity="0.55" />
        <path d="M500 125 C475 100, 440 108, 425 135" strokeWidth="1" opacity="0.55" />
        <path d="M500 195 C475 220, 440 212, 425 185" strokeWidth="1" opacity="0.55" />

        {/* Small diamond ticks */}
        <path d="M200 160 L208 152 L216 160 L208 168 Z" fill="currentColor" stroke="none" opacity="0.55" />
        <path d="M504 160 L512 152 L520 160 L512 168 Z" fill="currentColor" stroke="none" opacity="0.55" />
        <path d="M360 72 L366 66 L372 72 L366 78 Z" fill="currentColor" stroke="none" opacity="0.45" />
        <path d="M360 248 L366 242 L372 248 L366 254 Z" fill="currentColor" stroke="none" opacity="0.45" />

        {/* Concentric seal rings — open centre for the logo */}
        <circle cx="360" cy="160" r="78" strokeWidth="1.5" opacity="0.7" />
        <circle cx="360" cy="160" r="70" strokeWidth="0.9" opacity="0.35" strokeDasharray="2 3.5" />
        <circle cx="360" cy="160" r="62" strokeWidth="1.25" opacity="0.6" />
        <circle cx="360" cy="160" r="54" strokeWidth="0.85" opacity="0.4" />

        {/* Tiny petal notches on the outer seal */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 360 + Math.cos(rad) * 78;
          const y1 = 160 + Math.sin(rad) * 78;
          const x2 = 360 + Math.cos(rad) * 86;
          const y2 = 160 + Math.sin(rad) * 86;
          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeWidth="1.2"
              opacity="0.55"
            />
          );
        })}
      </g>
    </svg>
  );
};

export default StampOrnament;
