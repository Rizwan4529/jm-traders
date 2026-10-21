import { FaWhatsapp } from "react-icons/fa6";
import { whatsappLink } from "../../constants/contact";
import { useContent } from "../../i18n/useContent";
import Button, { type ButtonProps } from "./Button";

type QuoteButtonProps = Omit<ButtonProps, "href" | "children"> & {
  label?: string;
  message?: string;
};

const QuoteButton = ({
  label,
  message,
  variant = "accent",
  ...props
}: QuoteButtonProps) => {
  const { t } = useContent();

  return (
    <Button
      variant={variant}
      href={whatsappLink(message ?? t.common.quoteMessage)}
      {...props}
    >
      <FaWhatsapp aria-hidden="true" className="size-4" />
      {label ?? t.common.requestQuote}
    </Button>
  );
};

export default QuoteButton;
