import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../lib/cx";
import Container from "./Container";

export type SectionTone = "surface" | "muted" | "kraft" | "brand";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: SectionTone;
  containerClassName?: string;
  children: ReactNode;
};

const toneClasses: Record<SectionTone, string> = {
  /* Soft alpha so the coloured watermark can whisper through light sections. */
  surface: "bg-surface/92 text-text",
  muted: "bg-surface-muted/90 text-text",
  kraft: "bg-kraft-light/92 text-text",
  brand: "bg-transparent text-white",
};

const Section = ({
  tone = "surface",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) => {
  return (
    <section
      className={cx("py-16 sm:py-20 lg:py-24", toneClasses[tone], className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

export default Section;
