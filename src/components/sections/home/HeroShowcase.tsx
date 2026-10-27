import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type CSSProperties } from "react";
import packagingBox from "../../../assets/generated/packaging-box.webp";
import { ROUTES } from "../../../constants/nav";
import { getDrink } from "../../../data/drinks";
import { flavours } from "../../../data/flavours";
import { useContent } from "../../../i18n/useContent";
import { cx } from "../../../lib/cx";
import SmartLink from "../../ui/SmartLink";

const SLIDE_MS = 4500;
const cup = flavours[0];
const bottle = getDrink("mango");

/** Auto-advancing hero slider: one slide per product line. */
const HeroShowcase = () => {
  const { t } = useContent();
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = [
    {
      key: "jellyCups",
      label: t.nav.jellyCups,
      href: ROUTES.jellyCups,
      image: cup.image,
      alt: t.flavourPage.imageAlt(t.flavours[cup.slug].name),
      width: 575,
      height: 375,
      glow: cup.color,
    },
    {
      key: "jellyDrinks",
      label: t.nav.jellyDrinks,
      href: ROUTES.jellyDrinks,
      image: bottle.image,
      alt: t.jellyDrinks.imageAlt(t.flavours[bottle.slug].name),
      width: 575,
      height: 575,
      glow: bottle.color,
    },
    {
      key: "packaging",
      label: t.nav.packaging,
      href: ROUTES.packaging,
      image: packagingBox,
      alt: t.packaging.branding.imageAlt,
      width: 900,
      height: 616,
      glow: "#d4a237",
    },
  ];
  const active = slides[index];

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(
      () => setIndex((current) => (current + 1) % slides.length),
      SLIDE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [index, paused, slides.length]);

  return (
    <div
      style={{ "--glow": active.glow } as CSSProperties}
      className="relative flex flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative flex aspect-[575/420] w-full max-w-xl items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--glow)_50%,transparent)_0%,transparent_68%)] blur-2xl transition-[background] duration-700"
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={active.key}
            src={active.image}
            alt={active.alt}
            width={active.width}
            height={active.height}
            decoding="async"
            className="relative max-h-full w-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -40, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
      </div>

      <SmartLink
        href={active.href}
        aria-live="polite"
        className="font-display mt-4 text-2xl text-white decoration-accent decoration-2 underline-offset-4 hover:underline"
      >
        {active.label}
      </SmartLink>

      <div className="mt-5 flex gap-2.5">
        {slides.map((slide, slideIndex) => {
          const isActive = slideIndex === index;
          return (
            <button
              key={slide.key}
              type="button"
              aria-label={slide.label}
              aria-pressed={isActive}
              onClick={() => setIndex(slideIndex)}
              className={cx(
                "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand",
                isActive ? "w-8 bg-accent" : "w-2 bg-white/35 hover:bg-white/60",
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeroShowcase;
