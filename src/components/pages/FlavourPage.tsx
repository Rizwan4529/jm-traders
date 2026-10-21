import type { CSSProperties } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { ROUTES } from "../../constants/nav";
import { JELLY_CATALOG_URL } from "../../constants/site";
import { flavourPath, flavours, getFlavour } from "../../data/flavours";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useContent } from "../../i18n/useContent";
import CtaBanner from "../sections/CtaBanner";
import FlavourGrid from "../sections/flavours/FlavourGrid";
import JellyFacts from "../sections/flavours/JellyFacts";
import Button from "../ui/Button";
import PageHero from "../ui/PageHero";
import QuoteButton from "../ui/QuoteButton";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import SmartLink from "../ui/SmartLink";
import NotFoundPage from "./NotFoundPage";

const RELATED_COUNT = 4;

const FlavourPage = () => {
  const { slug } = useParams();
  const flavour = getFlavour(slug);
  return flavour ? <FlavourDetail slug={flavour.slug} /> : <NotFoundPage />;
};

const FlavourDetail = ({ slug }: { slug: string }) => {
  const { t } = useContent();
  const index = flavours.findIndex((item) => item.slug === slug);
  const flavour = flavours[index];
  const copy = t.flavours[flavour.slug];
  usePageMeta(t.meta.flavour(copy.name));

  const at = (offset: number) =>
    flavours[(index + offset + flavours.length) % flavours.length];
  const previous = at(-1);
  const next = at(1);
  const related = Array.from({ length: RELATED_COUNT }, (_, i) => at(i + 1));
  const quoteMessage = t.common.flavourQuoteMessage(copy.name);

  return (
    <>
      <PageHero
        title={copy.name}
        text={copy.description}
        breadcrumbs={[
          { label: t.nav.home, href: ROUTES.home },
          { label: t.nav.jellyCups, href: ROUTES.jellyCups },
          { label: copy.name },
        ]}
        actions={
          <QuoteButton
            size="lg"
            label={t.flavourPage.requestFlavour(copy.name)}
            message={quoteMessage}
          />
        }
        aside={
          <div
            style={{ "--flavour": flavour.color } as CSSProperties}
            className="relative flex items-center justify-center"
          >
            <div
              aria-hidden="true"
              className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--flavour)_55%,transparent)_0%,transparent_68%)] blur-2xl"
            />
            <img
              src={flavour.image}
              alt={t.flavourPage.imageAlt(copy.name)}
              width={575}
              height={375}
              decoding="async"
              fetchPriority="high"
              className="relative w-full max-w-xl drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)]"
            />
          </div>
        }
      />

      <Section tone="surface">
        <JellyFacts />
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-16">
          <img
            src={flavour.flyer}
            alt={t.flavourPage.flyerAlt(copy.name)}
            width={900}
            height={1272}
            loading="lazy"
            decoding="async"
            className="mx-auto w-full max-w-md rounded-xl border border-border shadow-[0_18px_40px_rgba(11,26,61,0.12)]"
          />
          <div>
            <SectionHeading
              title={t.flavourPage.flyerTitle}
              description={t.flavourPage.flyerText}
            />
            <div className="mt-8">
              <Button variant="primary" href={JELLY_CATALOG_URL}>
                {t.common.downloadCatalogue}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          title={t.flavourPage.moreTitle}
          action={
            <div className="flex gap-2">
              {[
                { item: previous, label: t.flavourPage.previous, Icon: HiChevronLeft },
                { item: next, label: t.flavourPage.next, Icon: HiChevronRight },
              ].map(({ item, label, Icon }) => (
                <SmartLink
                  key={label}
                  href={flavourPath(item.slug)}
                  aria-label={`${label}: ${t.flavours[item.slug].name}`}
                  title={t.flavours[item.slug].name}
                  className="flex size-11 items-center justify-center rounded-md border border-brand/25 text-brand transition-colors hover:border-brand hover:bg-brand-light"
                >
                  <Icon aria-hidden="true" className="size-5" />
                </SmartLink>
              ))}
            </div>
          }
        />
        <div className="mt-10">
          <FlavourGrid key={flavour.slug} items={related} />
        </div>
      </Section>

      <CtaBanner message={quoteMessage} />
    </>
  );
};

export default FlavourPage;
