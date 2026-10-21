import type { ReactNode } from "react";
import { ROUTES } from "../../constants/nav";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useContent } from "../../i18n/useContent";
// import ContactList from "../ui/ContactList";
import PageHero from "../ui/PageHero";
import Section from "../ui/Section";

// Legal notice ("imprint") disabled for now; re-add it here with its content.
type LegalVariant = "privacy" | "terms";

const LegalSectionBlock = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => (
  <section className="border-t border-border pt-8">
    <h2 className="text-xl font-semibold text-brand">{heading}</h2>
    <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-text-secondary">
      {children}
    </div>
  </section>
);

const LegalPage = ({ variant }: { variant: LegalVariant }) => {
  const { t } = useContent();
  usePageMeta(t.meta[variant]);
  const page = t.legal[variant];
  // const imprint = variant === "imprint" ? t.legal.imprint : null;

  return (
    <>
      <PageHero
        title={page.title}
        text={page.intro}
        breadcrumbs={[
          { label: t.nav.home, href: ROUTES.home },
          { label: t.nav[variant] },
        ]}
      />

      <Section tone="surface">
        <div className="max-w-3xl space-y-8">
          {/* {imprint ? (
            <>
              <LegalSectionBlock heading={imprint.company.heading}>
                <address className="not-italic">
                  {imprint.company.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </LegalSectionBlock>
              <LegalSectionBlock heading={imprint.contactHeading}>
                <ContactList
                  channels={["phone", "whatsapp", "email"]}
                  className="pt-2"
                />
              </LegalSectionBlock>
            </>
          ) : null} */}

          {page.sections.map((section) => (
            <LegalSectionBlock key={section.heading} heading={section.heading}>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </LegalSectionBlock>
          ))}
        </div>
      </Section>
    </>
  );
};

export default LegalPage;
