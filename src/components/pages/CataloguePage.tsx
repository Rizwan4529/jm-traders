import { ROUTES } from "../../constants/nav";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useContent } from "../../i18n/useContent";
import CatalogueDownloads from "../sections/CatalogueDownloads";
import CtaBanner from "../sections/CtaBanner";
import PageHero from "../ui/PageHero";
import Section from "../ui/Section";

const CataloguePage = () => {
  const { t } = useContent();
  usePageMeta(t.meta.catalogue);

  return (
    <>
      <PageHero
        {...t.catalogue.hero}
        breadcrumbs={[
          { label: t.nav.home, href: ROUTES.home },
          { label: t.nav.catalogue },
        ]}
      />
      <Section tone="muted">
        <CatalogueDownloads />
      </Section>
      <CtaBanner />
    </>
  );
};

export default CataloguePage;
