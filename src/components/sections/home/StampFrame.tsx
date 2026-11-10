/** Guilloche-style certificate border inspired by e-stamp framing. */
const StampFrame = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-accent">
      {/* Double rule */}
      <div className="absolute inset-2 border-2 border-accent/75 sm:inset-3" />
      <div className="absolute inset-[11px] border border-accent/30 sm:inset-[15px]" />

      {/* Chain band between the rules */}
      <div
        className="absolute inset-[7px] border-[5px] border-transparent sm:inset-[10px]"
        style={{
          borderImageSource: `url("data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='12' viewBox='0 0 24 12'>
              <path d='M0 6 Q3 1 6 6 Q9 11 12 6 Q15 1 18 6 Q21 11 24 6' fill='none' stroke='%23c99a2e' stroke-width='1.4'/>
            </svg>`,
          )}")`,
          borderImageSlice: 4,
          borderImageRepeat: "repeat",
          borderImageWidth: 5,
        }}
      />

      {/* Corner rosettes */}
      {(
        [
          "top-2.5 left-2.5 sm:top-3.5 sm:left-3.5",
          "top-2.5 right-2.5 sm:top-3.5 sm:right-3.5",
          "bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5",
          "bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5",
        ] as const
      ).map((pos) => (
        <svg
          key={pos}
          className={`absolute size-6 sm:size-7 ${pos}`}
          viewBox="0 0 32 32"
        >
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.2" fill="#0b1a3d" />
          <circle cx="16" cy="16" r="6.5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
          <path
            d="M16 8 L17.2 13.8 L23 13 L18.4 16 L23 19 L17.2 18.2 L16 24 L14.8 18.2 L9 19 L13.6 16 L9 13 L14.8 13.8 Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
};

export default StampFrame;
