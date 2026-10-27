import bottleMango from "../assets/jelly-bottles/drink_mango.webp";
import bottleOrange from "../assets/jelly-bottles/drink_orange.webp";
import bottlePineapple from "../assets/jelly-bottles/drink_pinapple.webp";
import { getFlavour, type FlavourSlug } from "./flavours";

/** Jelly drink flavours, in the order of the Jelly Jungle range. Names and colours come from the cup flavours. */
export const DRINK_SLUGS = [
  "pineapple",
  "orange",
  "mango",
] as const satisfies readonly FlavourSlug[];

export type DrinkSlug = (typeof DRINK_SLUGS)[number];

export type Drink = {
  slug: DrinkSlug;
  color: string;
  image: string;
};

const bottleImages: Record<DrinkSlug, string> = {
  pineapple: bottlePineapple,
  orange: bottleOrange,
  mango: bottleMango,
};

export const drinks: Drink[] = DRINK_SLUGS.map((slug) => ({
  slug,
  color: getFlavour(slug)!.color,
  image: bottleImages[slug],
}));

export const getDrink = (slug: DrinkSlug) =>
  drinks.find((drink) => drink.slug === slug)!;

/** Bottle figures printed on the Jelly Jungle drink label. */
export const JELLY_DRINK_SPECS = {
  bottleMl: 250,
} as const;
