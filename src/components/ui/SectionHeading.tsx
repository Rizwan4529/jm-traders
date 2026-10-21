import type { ReactNode } from "react";
import { cx } from "../../lib/cx";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
  as?: "h1" | "h2" | "h3";
  /** Rendered beside the heading on wide screens (e.g. a "see all" link). */
  action?: ReactNode;
  className?: string;
};

const titleSizes = {
  h1: "text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.03]",
  h2: "text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.06]",
  h3: "text-2xl sm:text-[1.75rem] leading-[1.12]",
} as const;

const SectionHeading = ({
  title,
  description,
  align = "left",
  inverted = false,
  as: Heading = "h2",
  action,
  className,
}: SectionHeadingProps) => {
  const heading = (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Heading
        className={cx(
          "font-display text-balance",
          titleSizes[Heading],
          inverted ? "text-white" : "text-brand",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cx(
            "mt-5 text-base leading-relaxed text-pretty sm:text-lg",
            inverted ? "text-white/75" : "text-text-secondary",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );

  if (!action) {
    return <div className={className}>{heading}</div>;
  }

  return (
    <div
      className={cx(
        "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      {heading}
      <div className="shrink-0">{action}</div>
    </div>
  );
};

export default SectionHeading;
