import { customerIcons } from "../../constants/icons";
import { ROUTES } from "../../constants/nav";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useContent } from "../../i18n/useContent";
import CtaBanner from "../sections/CtaBanner";
import UnitBreakdown from "../sections/UnitBreakdown";
import Accordion from "../ui/Accordion";
import FeatureGrid from "../ui/FeatureGrid";
import PageHero from "../ui/PageHero";
import QuoteButton from "../ui/QuoteButton";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import StepList from "../ui/StepList";

const WholesalePage = () => {
  const { t } = useContent();
  usePageMeta(t.meta.wholesale);
  const { wholesale } = t;

  return (
    <>
      <PageHero
        {...wholesale.hero}
        breadcrumbs={[
          { label: t.nav.home, href: ROUTES.home },
          { label: t.nav.wholesale },
        ]}
        actions={<QuoteButton size="lg" />}
      />

      <Section tone="surface">
        <SectionHeading title={wholesale.steps.title} />
        <div className="mt-12">
          <StepList items={wholesale.steps.items} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title={t.units.title} description={t.units.text} />
        <div className="mt-12">
          <UnitBreakdown />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title={wholesale.customers.title} />
        <FeatureGrid
          className="mt-12"
          items={wholesale.customers.items}
          icons={customerIcons}
        />
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <SectionHeading title={wholesale.faq.title} />
          <Accordion items={wholesale.faq.items} />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
};

export default WholesalePage;
