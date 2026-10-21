import noHfcsBadge from "../assets/generated/badge-no-hfcs.svg";
import vegetarianBadge from "../assets/generated/badge-vegetarian.svg";
import fdaBadge from "../assets/home/ic1-26-300x300.min.webp";
import halalBadge from "../assets/home/ic2-300x300.webp";
import type { Content } from "../content/content";

export type CertificationKey = keyof Content["certifications"];

/** Badge artwork; titles and captions live in `t.certifications[key]`. */
export const CERTIFICATION_BADGES: { key: CertificationKey; image: string }[] = [
  { key: "halal", image: halalBadge },
  { key: "vegetarian", image: vegetarianBadge },
  { key: "noHfcs", image: noHfcsBadge },
  { key: "fda", image: fdaBadge },
];

export const HALAL_BADGE = halalBadge;
