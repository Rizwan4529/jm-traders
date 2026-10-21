import type { CSSProperties } from "react";
import { flavourPath, type Flavour } from "../../../data/flavours";
import { useContent } from "../../../i18n/useContent";
import SmartLink from "../../ui/SmartLink";

const FlavourCard = ({ flavour }: { flavour: Flavour }) => {
  const { t } = useContent();
  const copy = t.flavours[flavour.slug];

  return (
    <SmartLink
      href={flavourPath(flavour.slug)}
      style={{ "--flavour": flavour.color } as CSSProperties}
      className="group flex h-full flex-col rounded-2xl bg-[color-mix(in_oklab,var(--flavour)_14%,white)] p-4 transition-colors duration-200 hover:bg-[color-mix(in_oklab,var(--flavour)_24%,white)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-5"
    >
      <img
        src={flavour.image}
        alt={t.flavourPage.imageAlt(copy.name)}
        width={575}
        height={375}
        loading="lazy"
        decoding="async"
        className="w-full transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:-rotate-2"
      />
      <div className="mt-3 flex items-center gap-2">
        <span
          aria-hidden="true"
          className="size-2.5 shrink-0 rounded-full bg-(--flavour)"
        />
        <h3 className="text-base font-semibold text-brand sm:text-lg">
          {copy.name}
        </h3>
      </div>
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-text-secondary">
        {copy.description}
      </p>
    </SmartLink>
  );
};

export default FlavourCard;
