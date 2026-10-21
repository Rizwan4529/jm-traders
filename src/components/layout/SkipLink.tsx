import { MAIN_CONTENT_ID } from "../../constants/site";
import { useContent } from "../../i18n/useContent";

const SkipLink = () => {
  const { t } = useContent();

  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className="sr-only rounded-md bg-accent px-4 py-2 font-semibold text-brand focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60"
    >
      {t.a11y.skipToContent}
    </a>
  );
};

export default SkipLink;
