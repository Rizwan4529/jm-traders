import { HiChevronRight } from "react-icons/hi2";
import { useContent } from "../../i18n/useContent";
import SmartLink from "./SmartLink";

export type Crumb = {
  label: string;
  href?: string;
};

const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  const { t } = useContent();

  return (
    <nav aria-label={t.a11y.breadcrumb}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {index > 0 ? (
              <HiChevronRight aria-hidden="true" className="size-3.5" />
            ) : null}
            {item.href ? (
              <SmartLink
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </SmartLink>
            ) : (
              <span aria-current="page" className="text-white">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
