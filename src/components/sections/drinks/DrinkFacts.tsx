import type { CSSProperties } from "react";
import { drinks, getDrink, JELLY_DRINK_SPECS } from "../../../data/drinks";
import { formatNumber } from "../../../i18n/languages";
import { useContent } from "../../../i18n/useContent";
import SpecList from "../../ui/SpecList";

const feature = getDrink("mango");

/** Bottle facts for the jelly drinks page, beside a single bottle shot. */
const DrinkFacts = () => {
  const { t, language } = useContent();
  const { facts } = t.jellyDrinks;

  const items = [
    {
      label: facts.bottle.label,
      value: facts.bottle.value(formatNumber(language, JELLY_DRINK_SPECS.bottleMl)),
    },
    {
      label: facts.flavours.label,
      value: drinks.map((drink) => t.flavours[drink.slug].name).join(", "),
    },
    facts.ingredients,
    facts.freeFrom,
    facts.supply,
  ];

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
      <div>
        <h2 className="font-display text-3xl text-brand sm:text-4xl">
          {facts.title}
        </h2>
        <SpecList items={items} className="mt-8" />
      </div>
      <div
        style={{ "--flavour": feature.color } as CSSProperties}
        className="relative mx-auto w-full max-w-sm"
      >
        <div
          aria-hidden="true"
          className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--flavour)_35%,transparent)_0%,transparent_70%)] blur-2xl"
        />
        <img
          src={feature.image}
          alt={t.jellyDrinks.imageAlt(t.flavours[feature.slug].name)}
          width={575}
          height={575}
          loading="lazy"
          decoding="async"
          className="relative w-full drop-shadow-[0_24px_32px_rgba(11,26,61,0.18)]"
        />
      </div>
    </div>
  );
};

export default DrinkFacts;
