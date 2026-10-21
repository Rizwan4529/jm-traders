import type { ReactNode } from "react";
import { cx } from "../../lib/cx";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

type PageHeroProps = {
  title: ReactNode;
  text?: ReactNode;
  breadcrumbs?: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
  className?: string;
};

/** Navy page opener; sits under the transparent navbar on every inner page. */
const PageHero = ({
  title,
  text,
  breadcrumbs,
  actions,
  aside,
  className,
}: PageHeroProps) => {
  return (
    <section
      className={cx(
        "relative overflow-hidden bg-brand pt-32 pb-16 text-white sm:pt-40 sm:pb-20 lg:pb-24",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-accent/60"
      />
      <Container
        className={cx(
          "relative grid items-center gap-12",
          Boolean(aside) && "lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
        )}
      >
        <div>
          {breadcrumbs ? (
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          ) : null}
          <SectionHeading as="h1" inverted title={title} description={text} />
          {actions ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              {actions}
            </div>
          ) : null}
        </div>
        {aside}
      </Container>
    </section>
  );
};

export default PageHero;
