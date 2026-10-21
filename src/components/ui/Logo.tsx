import logo from "../../assets/logo.webp";
import { useContent } from "../../i18n/useContent";
import { cx } from "../../lib/cx";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

const Logo = ({ className, priority = false }: LogoProps) => {
  const { t } = useContent();

  return (
    <img
      src={logo}
      alt={t.common.brand}
      width={480}
      height={386}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      className={cx("w-auto object-contain object-left", className)}
    />
  );
};

export default Logo;
