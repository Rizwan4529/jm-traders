import { useEffect } from "react";
import { useContent } from "../i18n/useContent";

type PageMeta = {
  title: string;
  description: string;
};

/** Sets the document title and meta description for the current language. */
export const usePageMeta = ({ title, description }: PageMeta) => {
  const { t } = useContent();

  useEffect(() => {
    document.title = `${title} | ${t.common.brand}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description, t.common.brand]);
};
