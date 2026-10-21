import jellyJungleLogo from "../../assets/home/logo2019_en.webp";
import brandBanner from "../../assets/packaging/brand-banner.webp";
import { ROUTES } from "../../constants/nav";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useContent } from "../../i18n/useContent";
import CtaBanner from "../sections/CtaBanner";
import CupCluster from "../sections/flavours/CupCluster";
import ServicesSection from "../sections/ServicesSection";
import Button from "../ui/Button";
import PageHero from "../ui/PageHero";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const AboutPage = () => {
  const { t } = useContent();
  usePageMeta(t.meta.about);
  const { about } = t;

  return (
    <>
      <PageHero
        {...about.hero}
        breadcrumbs={[
          { label: t.nav.home, href: ROUTES.home },
          { label: t.nav.about },
        ]}
      />

      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title={about.story.title} />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-text-secondary sm:text-lg">
              {about.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <img
            src={brandBanner}
            alt={about.story.imageAlt}
            width={1600}
            height={914}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl shadow-[0_18px_40px_rgba(11,26,61,0.15)]"
          />
        </div>
      </Section>

      <ServicesSection tone="kraft" />

      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <CupCluster
            slugs={["pineapple", "melon", "mint"]}
            className="order-last aspect-16/10 rounded-2xl lg:order-first"
          />
          <div>
            <img
              src={jellyJungleLogo}
              alt={about.brand.imageAlt}
              width={161}
              height={127}
              loading="lazy"
              className="h-20 w-auto"
            />
            <SectionHeading
              className="mt-6"
              title={about.brand.title}
              description={about.brand.text}
            />
            <div className="mt-8">
              <Button variant="outline" href={ROUTES.jellyCups}>
                {t.common.viewFlavours}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
};

export default AboutPage;
