import type { ReactNode } from "react";
import pizzaBoxBranded from "../../assets/packaging/pizza-box-branded.webp";
import { ROUTES } from "../../constants/nav";
import { useContent } from "../../i18n/useContent";
import Button from "../ui/Button";
import CupCluster from "./flavours/CupCluster";

const ProductLineCard = ({
  title,
  text,
  cta,
  href,
  visual,
}: {
  title: string;
  text: string;
  cta: string;
  href: string;
  visual: ReactNode;
}) => (
  <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface">
    <div className="aspect-16/10 overflow-hidden">{visual}</div>
    <div className="flex flex-1 flex-col p-6 sm:p-8">
      <h3 className="font-display text-2xl leading-tight text-brand">{title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-text-secondary">
        {text}
      </p>
      <div className="mt-auto pt-6">
        <Button variant="outline" href={href}>
          {cta}
        </Button>
      </div>
    </div>
  </article>
);

const ProductLines = () => {
  const { t } = useContent();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ProductLineCard
        {...t.productLines.jellyCups}
        href={ROUTES.jellyCups}
        visual={<CupCluster className="size-full" />}
      />
      <ProductLineCard
        {...t.productLines.packaging}
        href={ROUTES.packaging}
        visual={
          <img
            src={pizzaBoxBranded}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        }
      />
    </div>
  );
};

export default ProductLines;
