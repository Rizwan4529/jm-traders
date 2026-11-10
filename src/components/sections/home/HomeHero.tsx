import { motion, useReducedMotion } from "framer-motion";
import logo from "../../../assets/logo.webp";
import { whatsappLink } from "../../../constants/contact";
import { ROUTES } from "../../../constants/nav";
import { useContent } from "../../../i18n/useContent";
import Container from "../../ui/Container";
import SmartLink from "../../ui/SmartLink";
// Auto-scrolling product images on the right — restore with the block below.
// import HeroShowcase from "./HeroShowcase";
import StampFrame from "./StampFrame";

type StampLink = { label: string; href: string; accent?: boolean };

/** Dot-separated, small-caps link row used in the stamp header and footer bands. */
const StampLinks = ({ links }: { links: StampLink[] }) => (
  <nav className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 px-1 text-center text-[0.65rem] tracking-[0.18em] uppercase sm:px-2 sm:text-[0.7rem]">
    {links.map(({ label, href, accent }, i) => (
      <span key={href} className="flex items-center gap-x-4">
        {i > 0 && (
          <span aria-hidden="true" className="text-accent/50">
            ·
          </span>
        )}
        <SmartLink
          href={href}
          className={`rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
            accent
              ? "text-accent/80 hover:text-accent"
              : "text-white/45 hover:text-white"
          }`}
        >
          {label}
        </SmartLink>
      </span>
    ))}
  </nav>
);

const HomeHero = () => {
  const { t } = useContent();
  const prefersReducedMotion = useReducedMotion();
  const duration = prefersReducedMotion ? 0.01 : 0.6;

  const rise = (delay: number) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: "easeOut" as const },
  });

  return (
    <section
      data-page-opener
      className="relative overflow-hidden bg-transparent pt-28 pb-12 text-white sm:pt-36 lg:pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-royal/20 blur-3xl"
      />

      <Container className="relative">
        {/* Certificate / e-stamp panel */}
        <div className="relative flex flex-col items-center gap-10 overflow-hidden bg-brand/40 px-5 py-12 sm:gap-12 sm:px-8 sm:py-14 lg:gap-16 lg:px-12 lg:py-16">
          <StampFrame />

          {/* Soft paper grain */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-soft-light"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Stamp header band */}
          <motion.div
            {...rise(0)}
            className="relative flex w-full flex-col items-center gap-3"
          >
            <p className="font-display text-[0.7rem] tracking-[0.42em] text-accent uppercase sm:text-xs">
              {t.common.brand}
            </p>
            <div
              className="flex w-full max-w-md items-center gap-3"
              aria-hidden="true"
            >
              <span className="h-px flex-1 bg-accent/35" />
              <span className="size-1.5 rotate-45 border border-accent/70" />
              <span className="h-px flex-1 bg-accent/35" />
            </div>
            <StampLinks
              links={[
                { label: t.nav.wholesale, href: ROUTES.wholesale },
                { label: t.nav.products, href: ROUTES.products },
                { label: t.nav.about, href: ROUTES.about },
                {
                  label: t.common.requestQuote,
                  href: whatsappLink(t.common.quoteMessage),
                  accent: true,
                },
              ]}
            />
          </motion.div>

          {/* Brand logo — height-capped so the card keeps its size */}
          <motion.img
            {...rise(0.06)}
            src={logo}
            alt={t.common.brand}
            width={480}
            height={386}
            decoding="async"
            draggable={false}
            className="relative h-32 w-auto select-none drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] sm:h-48 lg:h-56"
          />

          {/* sr-only h1 is absolutely positioned, so it adds no flex gap. */}
          <>
            {/* Title / subtitle hidden for now — restore when needed.
            <motion.h1
              {...rise(0.08)}
              className="font-display max-w-[14em] text-[clamp(1.75rem,8.2vw,2.4rem)] leading-[1.05] text-balance sm:text-[3.1rem] lg:text-[2.8rem] xl:text-[3.6rem]"
            >
              {t.home.hero.title}
            </motion.h1>
            <motion.p
              {...rise(0.18)}
              className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-white/75 sm:text-lg"
            >
              {t.home.hero.text}
            </motion.p>
            */}
            <h1 className="sr-only">{t.home.hero.title}</h1>

            {/* Auto-scrolling product images — restore together with the HeroShowcase import.
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: duration + 0.2,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              <HeroShowcase />
            </motion.div>
            */}
          </>

          {/* Stamp footer band */}
          <motion.div
            {...rise(0.35)}
            className="relative w-full border-t border-accent/25 pt-4"
          >
            <StampLinks
              links={[
                { label: t.common.viewProducts, href: ROUTES.products },
                { label: t.nav.contact, href: ROUTES.contact },
                { label: t.common.brand, href: ROUTES.home, accent: true },
              ]}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
