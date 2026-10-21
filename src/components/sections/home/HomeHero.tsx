import { motion, useReducedMotion } from "framer-motion";
import { ROUTES } from "../../../constants/nav";
import { useContent } from "../../../i18n/useContent";
import Button from "../../ui/Button";
import Container from "../../ui/Container";
import QuoteButton from "../../ui/QuoteButton";
import CertificationStrip from "../CertificationStrip";
import FlavourStage from "./FlavourStage";

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
    <section className="relative overflow-hidden bg-brand pt-32 pb-16 text-white sm:pt-40 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-royal/25 blur-3xl"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
        <div>
          <motion.h1
            {...rise(0)}
            className="font-display max-w-[13em] text-[clamp(1.75rem,8.2vw,2.4rem)] leading-[1.05] text-balance sm:text-[3.1rem] lg:text-[2.8rem] xl:text-[3.6rem]"
          >
            {t.home.hero.title}
          </motion.h1>
          <motion.p
            {...rise(0.12)}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {t.home.hero.text}
          </motion.p>
          <motion.div
            {...rise(0.22)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <QuoteButton size="lg" />
            <Button variant="inverse" size="lg" href={ROUTES.jellyCups}>
              {t.common.viewFlavours}
            </Button>
          </motion.div>
          <motion.div {...rise(0.32)} className="mt-12 border-t border-white/15 pt-8">
            <CertificationStrip inverted layout="grid" />
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: duration + 0.2, delay: 0.15, ease: "easeOut" }}
        >
          <FlavourStage />
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeHero;
