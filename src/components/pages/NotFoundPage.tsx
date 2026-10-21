import { ROUTES } from "../../constants/nav";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useContent } from "../../i18n/useContent";
import Button from "../ui/Button";
import PageHero from "../ui/PageHero";

const NotFoundPage = () => {
  const { t } = useContent();
  usePageMeta(t.meta.notFound);

  return (
    <PageHero
      title={t.notFound.title}
      text={t.notFound.text}
      className="min-h-[70vh]"
      actions={
        <>
          <Button variant="accent" size="lg" href={ROUTES.home}>
            {t.notFound.cta}
          </Button>
          <Button variant="inverse" size="lg" href={ROUTES.products}>
            {t.nav.products}
          </Button>
        </>
      }
    />
  );
};

export default NotFoundPage;
