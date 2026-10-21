import cupMint from "../assets/generated/cup-mint.webp";
import cupRaspberry from "../assets/generated/cup-raspberry.webp";
import cupTuttiFruit from "../assets/generated/cup-tutti-fruit.webp";
import cupVanilla from "../assets/generated/cup-vanilla.webp";
import flyerApple from "../assets/flyers/flyer-apple.webp";
import flyerKiwi from "../assets/flyers/flyer-kiwi.webp";
import flyerLemon from "../assets/flyers/flyer-lemon.webp";
import flyerMango from "../assets/flyers/flyer-mango.webp";
import flyerMelon from "../assets/flyers/flyer-melon.webp";
import flyerMint from "../assets/flyers/flyer-mint.webp";
import flyerOrange from "../assets/flyers/flyer-orange.webp";
import flyerPeach from "../assets/flyers/flyer-peach.webp";
import flyerPineapple from "../assets/flyers/flyer-pineapple.webp";
import flyerRaspberry from "../assets/flyers/flyer-raspberry.webp";
import flyerRose from "../assets/flyers/flyer-rose.webp";
import flyerStrawberry from "../assets/flyers/flyer-strawberry.webp";
import flyerTuttiFruit from "../assets/flyers/flyer-tutti-fruit.webp";
import flyerVanilla from "../assets/flyers/flyer-vanilla.webp";
import cupKiwi from "../assets/home/kiwi1.webp";
import cupLemon from "../assets/home/lemon1.webp";
import cupMango from "../assets/home/mango1.webp";
import cupMelon from "../assets/home/melon1.webp";
import cupApple from "../assets/home/mint.webp";
import cupOrange from "../assets/home/orange.webp";
import cupPeach from "../assets/home/peach.webp";
import cupPineapple from "../assets/home/pineapple1.webp";
import cupRose from "../assets/home/rose.webp";
import cupStrawberry from "../assets/home/strawberry.webp";

export const FLAVOUR_SLUGS = [
  "strawberry",
  "orange",
  "apple",
  "mango",
  "pineapple",
  "kiwi",
  "lemon",
  "melon",
  "peach",
  "raspberry",
  "tutti-fruit",
  "mint",
  "rose",
  "vanilla",
] as const;

export type FlavourSlug = (typeof FLAVOUR_SLUGS)[number];

export type Flavour = {
  slug: FlavourSlug;
  /** Cup colour — tints cards and the hero stage. */
  color: string;
  image: string;
  flyer: string;
};

const flavourAssets: Record<FlavourSlug, Omit<Flavour, "slug">> = {
  strawberry: { color: "#e3263a", image: cupStrawberry, flyer: flyerStrawberry },
  orange: { color: "#f68b1f", image: cupOrange, flyer: flyerOrange },
  apple: { color: "#2fb34a", image: cupApple, flyer: flyerApple },
  mango: { color: "#f7a400", image: cupMango, flyer: flyerMango },
  pineapple: { color: "#f2c418", image: cupPineapple, flyer: flyerPineapple },
  kiwi: { color: "#5cc93b", image: cupKiwi, flyer: flyerKiwi },
  lemon: { color: "#e9dc5a", image: cupLemon, flyer: flyerLemon },
  melon: { color: "#d92b2f", image: cupMelon, flyer: flyerMelon },
  peach: { color: "#f5953a", image: cupPeach, flyer: flyerPeach },
  raspberry: { color: "#d61f55", image: cupRaspberry, flyer: flyerRaspberry },
  "tutti-fruit": { color: "#9e1238", image: cupTuttiFruit, flyer: flyerTuttiFruit },
  mint: { color: "#4fcfae", image: cupMint, flyer: flyerMint },
  rose: { color: "#f08cba", image: cupRose, flyer: flyerRose },
  vanilla: { color: "#eadcb4", image: cupVanilla, flyer: flyerVanilla },
};

export const flavours: Flavour[] = FLAVOUR_SLUGS.map((slug) => ({
  slug,
  ...flavourAssets[slug],
}));

export const getFlavour = (slug: string | undefined) =>
  flavours.find((flavour) => flavour.slug === slug);

export const flavourPath = (slug: FlavourSlug) =>
  `/products/jelly-cups/${slug}`;

/** Cup and logistics figures from the Jelly Jungle product sheets. */
export const JELLY_CUP_SPECS = {
  cupHeightCm: 7,
  cupDiameterCm: 5.7,
  cupsPerTray: 12,
  traysPerCarton: 12,
  cartonMm: [477, 220, 310],
  cartonsPer20ft: 860,
  cartonsPer40ft: 2052,
} as const;

export const CUPS_PER_CARTON =
  JELLY_CUP_SPECS.cupsPerTray * JELLY_CUP_SPECS.traysPerCarton;
