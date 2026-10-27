import type { CSSProperties } from "react";
import { drinks, JELLY_DRINK_SPECS, type Drink } from "../../../data/drinks";
import { formatNumber } from "../../../i18n/languages";
import { useContent } from "../../../i18n/useContent";
import InView, { MotionChild } from "../../motion/InView";
import { staggerContainer } from "../../motion/variants";
import QuoteButton from "../../ui/QuoteButton";

const DrinkCard = ({ drink }: { drink: Drink }) => {
  const { t, language } = useContent();
  const name = t.flavours[drink.slug].name;

  return (
    <article
      style={{ "--flavour": drink.color } as CSSProperties}
      className="group relative flex h-full flex-col rounded-2xl bg-[color-mix(in_oklab,var(--flavour)_14%,white)] p-4 sm:p-6"
    >
      <span className="absolute top-4 right-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand tabular-nums shadow-sm">
        {formatNumber(language, JELLY_DRINK_SPECS.bottleMl)} ml
      </span>
      <img
        src={drink.image}
        alt={t.jellyDrinks.imageAlt(name)}
        width={575}
        height={575}
        loading="lazy"
        decoding="async"
        className="mx-auto w-full max-w-xs transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:-rotate-2"
      />
      <div className="mt-4 flex items-center gap-2">
        <span
          aria-hidden="true"
          className="size-2.5 shrink-0 rounded-full bg-(--flavour)"
        />
        <h3 className="text-lg font-semibold text-brand">{name}</h3>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
        {t.jellyDrinks.descriptions[drink.slug]}
      </p>
      <div className="mt-auto pt-5">
        <QuoteButton
          size="sm"
          label={t.flavourPage.requestFlavour(name)}
          message={t.jellyDrinks.flavourQuoteMessage(name)}
        />
      </div>
    </article>
  );
};

const DrinkGrid = () => {
  return (
    <InView
      variants={staggerContainer}
      amount={0.1}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {drinks.map((drink) => (
        <MotionChild key={drink.slug}>
          <DrinkCard drink={drink} />
        </MotionChild>
      ))}
    </InView>
  );
};

export default DrinkGrid;
