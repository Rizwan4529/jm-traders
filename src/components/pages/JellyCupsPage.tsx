import flyerCupSize from "../../assets/flyers/flyer-cup-size.webp";
import flyerRetailPacks from "../../assets/flyers/flyer-retail-packs.webp";
import { ROUTES } from "../../constants/nav";
import { JELLY_CATALOG_URL } from "../../constants/site";
import { flavours } from "../../data/flavours";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useContent } from "../../i18n/useContent";
import CtaBanner from "../sections/CtaBanner";
import CupCluster from "../sections/flavours/CupCluster";
import FlavourGrid from "../sections/flavours/FlavourGrid";
import JellyFacts from "../sections/flavours/JellyFacts";
import UnitBreakdown from "../sections/UnitBreakdown";
import Button from "../ui/Button";
import PageHero from "../ui/PageHero";
import QuoteButton from "../ui/QuoteButton";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const FlyerImage = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    width={900}
    height={1272}
    loading="lazy"
    decoding="async"
    className="w-full rounded-xl border border-border shadow-[0_18px_40px_rgba(11,26,61,0.12)]"
  />
);

const JellyCupsPage = () => {
  const { t } = useContent();
  usePageMeta(t.meta.jellyCups);
  const { packs } = t.jellyCups;

  return (
    <>
      <PageHero
        {...t.jellyCups.hero}
        breadcrumbs={[
          { label: t.nav.home, href: ROUTES.home },
          { label: t.nav.products, href: ROUTES.products },
          { label: t.nav.jellyCups },
        ]}
        actions={
          <>
            <QuoteButton size="lg" />
            <Button variant="inverse" size="lg" href={JELLY_CATALOG_URL}>
              {t.common.downloadCatalogue}
            </Button>
          </>
        }
        aside={
          <CupCluster slugs={["mango", "raspberry", "kiwi"]} glow={false} />
        }
      />

      <Section tone="muted">
        <SectionHeading
          title={t.jellyCups.flavours.title}
          description={t.jellyCups.flavours.text}
        />
        <div className="mt-12">
          <FlavourGrid items={flavours} />
        </div>
      </Section>

      <Section tone="surface">
        <JellyFacts />
      </Section>

      <Section tone="muted">
        <SectionHeading title={t.units.title} description={t.units.text} />
        <div className="mt-12">
          <UnitBreakdown />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title={packs.title} description={packs.text} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
          <FlyerImage src={flyerRetailPacks} alt={packs.imageAlt} />
          <FlyerImage src={flyerCupSize} alt={packs.sizeAlt} />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
};

export default JellyCupsPage;
