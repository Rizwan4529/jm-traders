import { ROUTES } from "../../constants/nav";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useContent } from "../../i18n/useContent";
import CatalogueDownloads from "../sections/CatalogueDownloads";
import CtaBanner from "../sections/CtaBanner";
import ProductLines from "../sections/ProductLines";
import PageHero from "../ui/PageHero";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const ProductsPage = () => {
  const { t } = useContent();
  usePageMeta(t.meta.products);

  return (
    <>
      <PageHero
        {...t.products.hero}
        breadcrumbs={[
          { label: t.nav.home, href: ROUTES.home },
          { label: t.nav.products },
        ]}
      />

      <Section tone="surface">
        <ProductLines />
      </Section>

      <Section tone="muted">
        <SectionHeading
          title={t.products.downloads.title}
          description={t.products.downloads.text}
        />
        <div className="mt-10">
          <CatalogueDownloads />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
};

export default ProductsPage;
