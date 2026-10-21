import { FaWhatsapp } from "react-icons/fa6";
import { whatsappLink } from "../../constants/contact";
import { useContent } from "../../i18n/useContent";
import SmartLink from "./SmartLink";

const FloatingWhatsApp = () => {
  const { t } = useContent();

  return (
    <SmartLink
      href={whatsappLink(t.common.quoteMessage)}
      aria-label={t.common.whatsappFab}
      title={t.common.whatsappFab}
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgba(11,26,61,0.25)] transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-6 sm:bottom-6"
    >
      <FaWhatsapp aria-hidden="true" className="size-7" />
    </SmartLink>
  );
};

export default FloatingWhatsApp;
