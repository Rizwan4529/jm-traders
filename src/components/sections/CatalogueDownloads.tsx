import flyerStrawberry from "../../assets/flyers/flyer-strawberry.webp";
import pizzaBoxRange from "../../assets/packaging/pizza-box-range.webp";
import {
  JELLY_CATALOG_URL,
  PACKAGING_CATALOG_URL,
} from "../../constants/site";
import { useContent } from "../../i18n/useContent";
import DownloadCard from "../ui/DownloadCard";

const CatalogueDownloads = () => {
  const { t } = useContent();
  const { items } = t.catalogue;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <DownloadCard
        {...items.jelly}
        href={JELLY_CATALOG_URL}
        image={flyerStrawberry}
      />
      <DownloadCard
        {...items.packaging}
        href={PACKAGING_CATALOG_URL}
        image={pizzaBoxRange}
      />
    </div>
  );
};

export default CatalogueDownloads;
