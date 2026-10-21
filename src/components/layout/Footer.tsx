import stashLogo from "../../assets/stash-logo.png";
import { footerNav, type NavLinkItem } from "../../constants/nav";
import { COMPANY_LEGAL_NAME } from "../../constants/site";
import { useContent } from "../../i18n/useContent";
import InView from "../motion/InView";
import { fadeUp } from "../motion/variants";
import ContactList from "../ui/ContactList";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import SmartLink from "../ui/SmartLink";

const FooterLinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: NavLinkItem[];
}) => {
  const { t } = useContent();

  return (
    <div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <SmartLink
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {t.nav[link.key]}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const { t } = useContent();
  const { columns } = t.footer;

  return (
    <footer className="border-t-2 border-accent bg-footer text-white">
      <Container>
        <InView variants={fadeUp} amount={0.1} className="pt-14 pb-24 sm:pb-8 lg:pt-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,0.6fr))_minmax(0,1fr)] lg:gap-10">
            <div className="max-w-sm">
              <Logo className="h-24 sm:h-28" />
              <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
                {t.footer.tagline}
              </p>
            </div>

            <FooterLinkColumn title={columns.products} links={footerNav.products} />
            <FooterLinkColumn title={columns.company} links={footerNav.company} />
            <FooterLinkColumn title={columns.legal} links={footerNav.legal} />

            <div>
              <h3 className="text-base font-semibold text-white">
                {columns.contact}
              </h3>
              <ContactList
                inverted
                channels={["whatsapp", "phone", "email"]}
                className="mt-4"
              />
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
            <p className="text-sm text-white/60">
              {t.footer.copyright(
                new Date().getFullYear(),
                `${COMPANY_LEGAL_NAME} | ${t.common.brand}`,
              )}
            </p>
            <a
              href="https://stashtechnologies.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
            >
              <span className="text-sm">{t.common.poweredBy}</span>
              <img
                src={stashLogo}
                alt={t.common.agency}
                width={28}
                height={28}
                loading="lazy"
                className="size-7 rounded-full object-cover"
              />
            </a>
          </div>
        </InView>
      </Container>
    </footer>
  );
};

export default Footer;
