import { useEffect, useRef, useState, type ReactNode } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

type CarouselProps = {
  items: ReactNode[];
  /** Accessible name for the scrollable track. */
  label: string;
  previousLabel: string;
  nextLabel: string;
  /** Rendered beside the controls, e.g. a SectionHeading. */
  header?: ReactNode;
  className?: string;
};

const controlClasses =
  "flex size-11 items-center justify-center rounded-md border border-brand/25 text-brand transition-colors hover:border-brand hover:bg-brand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-35";

/**
 * Horizontal, snap-aligned slider. The buttons scroll by exactly one card,
 * so swipe, trackpad, keyboard and buttons all land on the same positions.
 */
const Carousel = ({
  items,
  label,
  previousLabel,
  nextLabel,
  header,
  className,
}: CarouselProps) => {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ atStart: true, atEnd: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setEdges({
        atStart: track.scrollLeft <= 1,
        atEnd: track.scrollLeft >= max - 1,
      });
    };

    // ResizeObserver also fires once on observe, giving the initial state.
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, []);

  const slide = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className={className}>
      <div className="flex items-end justify-between gap-6">
        <div className="min-w-0">{header}</div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label={previousLabel}
            title={previousLabel}
            disabled={edges.atStart}
            onClick={() => slide(-1)}
            className={controlClasses}
          >
            <HiChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            title={nextLabel}
            disabled={edges.atEnd}
            onClick={() => slide(1)}
            className={controlClasses}
          >
            <HiChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        aria-label={label}
        tabIndex={0}
        className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="w-[78%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)] lg:w-[calc((100%-3rem)/4)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
