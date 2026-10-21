import { HiArrowDownTray } from "react-icons/hi2";
import { useContent } from "../../i18n/useContent";
import SmartLink from "./SmartLink";

type DownloadCardProps = {
  title: string;
  text: string;
  meta: string;
  href: string;
  image: string;
  imageAlt?: string;
};

const DownloadCard = ({
  title,
  text,
  meta,
  href,
  image,
  imageAlt = "",
}: DownloadCardProps) => {
  const { t } = useContent();

  return (
    <SmartLink
      href={href}
      className="group grid overflow-hidden rounded-xl border border-border bg-surface transition-shadow duration-200 hover:shadow-[0_18px_40px_rgba(11,26,61,0.12)] sm:grid-cols-[11rem_minmax(0,1fr)]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-muted sm:aspect-auto">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col p-6">
        <h3 className="text-lg font-semibold text-brand">{title}</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-text-secondary">
          {text}
        </p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <span className="text-sm text-text-muted">{meta}</span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand group-hover:text-royal">
            <HiArrowDownTray aria-hidden="true" className="size-4" />
            {t.common.downloadCatalogue}
          </span>
        </div>
      </div>
    </SmartLink>
  );
};

export default DownloadCard;
