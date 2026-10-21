import type { CSSProperties } from "react";
import { useParams } from "react-router-dom";
import { ROUTES } from "../../constants/nav";
import { JELLY_CATALOG_URL } from "../../constants/site";
import { flavours, getFlavour } from "../../data/flavours";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useContent } from "../../i18n/useContent";
import CtaBanner from "../sections/CtaBanner";
import FlavourCard from "../sections/flavours/FlavourCard";
import JellyFacts from "../sections/flavours/JellyFacts";
import Button from "../ui/Button";
import Carousel from "../ui/Carousel";
import PageHero from "../ui/PageHero";
import QuoteButton from "../ui/QuoteButton";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import NotFoundPage from "./NotFoundPage";

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

  // Every other flavour, starting with the next one in the range.
  const others = Array.from(
    { length: flavours.length - 1 },
    (_, i) => flavours[(index + i + 1) % flavours.length],
  );
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
        {/* Keyed by flavour so the track resets to the start on navigation. */}
        <Carousel
          key={flavour.slug}
          header={<SectionHeading title={t.flavourPage.moreTitle} />}
          label={t.flavourPage.moreTitle}
          previousLabel={t.flavourPage.previous}
          nextLabel={t.flavourPage.next}
          items={others.map((item) => (
            <FlavourCard key={item.slug} flavour={item} />
          ))}
        />
      </Section>

      <CtaBanner message={quoteMessage} />
    </>
  );
};

export default FlavourPage;
