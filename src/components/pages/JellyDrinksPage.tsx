import { ROUTES } from "../../constants/nav";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useContent } from "../../i18n/useContent";
import CtaBanner from "../sections/CtaBanner";
import BottleCluster from "../sections/drinks/BottleCluster";
import DrinkFacts from "../sections/drinks/DrinkFacts";
import DrinkGrid from "../sections/drinks/DrinkGrid";
import Button from "../ui/Button";
import PageHero from "../ui/PageHero";
import QuoteButton from "../ui/QuoteButton";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const JellyDrinksPage = () => {
  const { t } = useContent();
  usePageMeta(t.meta.jellyDrinks);
  const copy = t.jellyDrinks;

  return (
    <>
      <PageHero
        {...copy.hero}
        breadcrumbs={[
          { label: t.nav.home, href: ROUTES.home },
          { label: t.nav.products, href: ROUTES.products },
          { label: t.nav.jellyDrinks },
        ]}
        actions={
          <>
            <QuoteButton size="lg" message={copy.quoteMessage} />
            <Button variant="inverse" size="lg" href={ROUTES.jellyCups}>
              {t.nav.jellyCups}
            </Button>
          </>
        }
        aside={<BottleCluster glow={false} />}
      />

      <Section tone="muted">
        <SectionHeading title={copy.flavours.title} description={copy.flavours.text} />
        <div className="mt-12">
          <DrinkGrid />
        </div>
      </Section>

      <Section tone="surface">
        <DrinkFacts />
      </Section>

      <CtaBanner message={copy.quoteMessage} />
    </>
  );
};

export default JellyDrinksPage;
