import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type CSSProperties } from "react";
import { flavourPath, flavours } from "../../../data/flavours";
import { useContent } from "../../../i18n/useContent";
import { cx } from "../../../lib/cx";
import SmartLink from "../../ui/SmartLink";

/** Interactive cup display: choosing a swatch swaps the cup and its glow. */
const FlavourStage = () => {
  const { t } = useContent();
  const prefersReducedMotion = useReducedMotion();
  const [activeSlug, setActiveSlug] = useState(flavours[0].slug);
  const active = flavours.find((flavour) => flavour.slug === activeSlug)!;
  const copy = t.flavours[active.slug];

  return (
    <div
      style={{ "--flavour": active.color } as CSSProperties}
      className="relative flex flex-col items-center"
    >
      <div className="relative flex aspect-[575/420] w-full max-w-xl items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--flavour)_55%,transparent)_0%,transparent_68%)] blur-2xl transition-[background] duration-500"
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={active.slug}
            src={active.image}
            alt={t.flavourPage.imageAlt(copy.name)}
            width={575}
            height={375}
            decoding="async"
            className="relative w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 24, rotate: -6, scale: 0.94 }
            }
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -16, rotate: 4, scale: 0.96 }
            }
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>
      </div>

      <div className="mt-2 text-center" aria-live="polite">
        <SmartLink
          href={flavourPath(active.slug)}
          className="font-display text-2xl text-white decoration-accent decoration-2 underline-offset-4 hover:underline"
        >
          {copy.name}
        </SmartLink>
        <p className="mx-auto mt-1 max-w-sm text-sm text-white/65">
          {copy.description}
        </p>
      </div>

      <div
        role="group"
        aria-label={t.home.hero.pickerLabel}
        className="mt-6 grid grid-cols-7 gap-2.5"
      >
        {flavours.map((flavour) => {
          const isActive = flavour.slug === active.slug;
          return (
            <button
              key={flavour.slug}
              type="button"
              aria-label={t.flavours[flavour.slug].name}
              title={t.flavours[flavour.slug].name}
              aria-pressed={isActive}
              onClick={() => setActiveSlug(flavour.slug)}
              style={{ backgroundColor: flavour.color }}
              className={cx(
                "size-7 rounded-full ring-offset-2 ring-offset-brand transition-transform duration-150 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                isActive ? "scale-110 ring-2 ring-accent" : "ring-1 ring-white/25",
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FlavourStage;
