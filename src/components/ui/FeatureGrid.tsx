import type { IconType } from "react-icons";
import { cx } from "../../lib/cx";
import IconBadge from "./IconBadge";

export type FeatureItem = {
  title: string;
  text: string;
};

type FeatureGridProps = {
  items: FeatureItem[];
  /** One icon per item, matched by index. */
  icons?: IconType[];
  inverted?: boolean;
  className?: string;
};

const FeatureGrid = ({
  items,
  icons,
  inverted = false,
  className,
}: FeatureGridProps) => {
  return (
    <ul
      className={cx(
        "grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((item, index) => {
        const Icon = icons?.[index];
        return (
          <li
            key={item.title}
            className={cx(
              "border-t-2 pt-5",
              inverted ? "border-accent/70" : "border-accent",
            )}
          >
            {Icon ? <IconBadge Icon={Icon} className="mb-4" /> : null}
            <h3
              className={cx(
                "text-lg font-semibold",
                inverted ? "text-white" : "text-brand",
              )}
            >
              {item.title}
            </h3>
            <p
              className={cx(
                "mt-2 text-[0.95rem] leading-relaxed",
                inverted ? "text-white/70" : "text-text-secondary",
              )}
            >
              {item.text}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default FeatureGrid;
