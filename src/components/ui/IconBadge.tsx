import type { IconType } from "react-icons";
import { cx } from "../../lib/cx";

type IconBadgeSize = "sm" | "md" | "lg";

type IconBadgeProps = {
  Icon: IconType;
  size?: IconBadgeSize;
  className?: string;
};

const sizeClasses: Record<IconBadgeSize, { badge: string; icon: string }> = {
  sm: { badge: "size-8 border", icon: "size-3.5" },
  md: { badge: "size-12 border-[1.5px]", icon: "size-5" },
  lg: { badge: "size-16 border-2", icon: "size-7" },
};

/** Gold-ringed navy disc — the icon treatment from the JM Trader print material. */
const IconBadge = ({ Icon, size = "md", className }: IconBadgeProps) => {
  const classes = sizeClasses[size];

  return (
    <span
      aria-hidden="true"
      className={cx(
        "inline-flex shrink-0 items-center justify-center rounded-full border-accent bg-brand text-accent",
        classes.badge,
        className,
      )}
    >
      <Icon className={classes.icon} />
    </span>
  );
};

export default IconBadge;
