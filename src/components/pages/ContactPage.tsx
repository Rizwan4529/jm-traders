import { ROUTES } from "../../constants/nav";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useContent } from "../../i18n/useContent";
import ContactForm from "../sections/ContactForm";
import ContactList from "../ui/ContactList";
import PageHero from "../ui/PageHero";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const ContactPage = () => {
  const { t } = useContent();
  usePageMeta(t.meta.contact);
  const { contact } = t;

  return (
    <>
      <PageHero
        {...contact.hero}
        breadcrumbs={[
          { label: t.nav.home, href: ROUTES.home },
          { label: t.nav.contact },
        ]}
      />

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
          <div>
            <SectionHeading
              as="h2"
              title={contact.channels.title}
              description={contact.channels.text}
            />
            <ContactList size="md" className="mt-10" />
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 shadow-[0_18px_40px_rgba(11,26,61,0.06)] sm:p-8">
            <SectionHeading
              as="h3"
              title={contact.form.title}
              description={contact.form.text}
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
