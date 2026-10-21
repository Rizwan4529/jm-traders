import { ROUTES } from "../../constants/nav";
import { useContent } from "../../i18n/useContent";
import Button from "../ui/Button";
import QuoteButton from "../ui/QuoteButton";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

type CtaBannerProps = {
  title?: string;
  text?: string;
  /** Pre-filled WhatsApp message, e.g. for a specific flavour. */
  message?: string;
};

const CtaBanner = ({ title, text, message }: CtaBannerProps) => {
  const { t } = useContent();

  return (
    <Section tone="brand" className="border-t-2 border-accent">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeading
          inverted
          title={title ?? t.ctaBanner.title}
          description={text ?? t.ctaBanner.text}
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <QuoteButton size="lg" message={message} />
          <Button variant="inverse" size="lg" href={ROUTES.contact}>
            {t.nav.contact}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CtaBanner;
