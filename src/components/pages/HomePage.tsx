import { ROUTES } from "../../constants/nav";
import { flavours } from "../../data/flavours";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useContent } from "../../i18n/useContent";
import CtaBanner from "../sections/CtaBanner";
import FlavourGrid from "../sections/flavours/FlavourGrid";
import HomeHero from "../sections/home/HomeHero";
import ProductionVideos from "../sections/home/ProductionVideos";
import ProductLines from "../sections/ProductLines";
import ServicesSection from "../sections/ServicesSection";
// Unit breakdown section is hidden for now — restore together with the JSX below.
// import UnitBreakdown from "../sections/UnitBreakdown";
import Button from "../ui/Button";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const FEATURED_FLAVOURS = 8;

const HomePage = () => {
  const { t } = useContent();
  usePageMeta(t.meta.home);

  return (
    <>
      <HomeHero />

      <Section tone="muted">
        <SectionHeading
          title={t.home.flavours.title}
          description={t.home.flavours.text}
          action={
            <Button variant="outline" href={ROUTES.jellyCups}>
              {t.common.viewFlavours}
            </Button>
          }
        />
        <div className="mt-12">
          <FlavourGrid items={flavours.slice(0, FEATURED_FLAVOURS)} />
        </div>
      </Section>

      {/* Unit breakdown section is hidden for now.
      <Section tone="surface">
        <SectionHeading
          title={t.units.title}
          description={t.units.text}
          action={
            <Button variant="outline" href={ROUTES.wholesale}>
              {t.nav.wholesale}
            </Button>
          }
        />
        <div className="mt-12">
          <UnitBreakdown />
        </div>
      </Section>
      */}

      <ProductionVideos />

      <Section tone="muted">
        <SectionHeading title={t.home.lines.title} description={t.home.lines.text} />
        <div className="mt-12">
          <ProductLines />
        </div>
      </Section>

      <ServicesSection
        tone="kraft"
        title={t.home.about.title}
        text={t.home.about.text}
        action={
          <Button variant="primary" href={ROUTES.about}>
            {t.home.about.cta}
          </Button>
        }
      />

      <CtaBanner />
    </>
  );
};

export default HomePage;
