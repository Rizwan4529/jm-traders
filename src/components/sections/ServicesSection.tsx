import type { ReactNode } from "react";
import { serviceIcons } from "../../constants/icons";
import { useContent } from "../../i18n/useContent";
import FeatureGrid from "../ui/FeatureGrid";
import Section, { type SectionTone } from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

type ServicesSectionProps = {
  tone?: SectionTone;
  title?: string;
  text?: string;
  action?: ReactNode;
};

const ServicesSection = ({
  tone = "surface",
  title,
  text,
  action,
}: ServicesSectionProps) => {
  const { t } = useContent();
  const inverted = tone === "brand";

  return (
    <Section tone={tone}>
      <SectionHeading
        inverted={inverted}
        title={title ?? t.services.title}
        description={text ?? t.services.text}
        action={action}
      />
      <FeatureGrid
        className="mt-12"
        inverted={inverted}
        items={t.services.items}
        icons={serviceIcons}
      />
    </Section>
  );
};

export default ServicesSection;
