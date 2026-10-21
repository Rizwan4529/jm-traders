import fdaBadge from "../../assets/home/ic1-26-300x300.min.webp";
import halalBadge from "../../assets/home/ic2-300x300.webp";
import noHfcsBadge from "../../assets/generated/badge-no-hfcs.svg";
import vegetarianBadge from "../../assets/generated/badge-vegetarian.svg";
import type { Content } from "../../content/content";
import { useContent } from "../../i18n/useContent";
import { cx } from "../../lib/cx";

const badges: { key: keyof Content["certifications"]; image: string }[] = [
  { key: "halal", image: halalBadge },
  { key: "vegetarian", image: vegetarianBadge },
  { key: "noHfcs", image: noHfcsBadge },
  { key: "fda", image: fdaBadge },
];

type CertificationLayout = "row" | "grid" | "stack";

type CertificationStripProps = {
  inverted?: boolean;
  /** row: 4 across on desktop · grid: always 2×2 · stack: 1 column on desktop */
  layout?: CertificationLayout;
  className?: string;
};

const layoutClasses: Record<CertificationLayout, string> = {
  row: "grid-cols-2 lg:grid-cols-4",
  grid: "grid-cols-2",
  stack: "grid-cols-2 lg:grid-cols-1",
};

const CertificationStrip = ({
  inverted = false,
  layout = "row",
  className,
}: CertificationStripProps) => {
  const { t } = useContent();

  return (
    <ul className={cx("grid gap-x-6 gap-y-6", layoutClasses[layout], className)}>
      {badges.map(({ key, image }) => (
        <li key={key} className="flex items-center gap-3">
          <img
            src={image}
            alt=""
            width={56}
            height={56}
            loading="lazy"
            decoding="async"
            className="size-12 shrink-0 rounded-full bg-white object-contain sm:size-14"
          />
          <span className="flex flex-col">
            <span
              className={cx(
                "text-sm font-semibold",
                inverted ? "text-white" : "text-brand",
              )}
            >
              {t.certifications[key].title}
            </span>
            <span
              className={cx(
                "text-xs leading-snug",
                inverted ? "text-white/60" : "text-text-muted",
              )}
            >
              {t.certifications[key].text}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default CertificationStrip;
