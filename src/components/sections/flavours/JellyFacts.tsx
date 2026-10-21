import {
  CUPS_PER_CARTON,
  JELLY_CUP_SPECS as SPECS,
} from "../../../data/flavours";
import { formatDimensions, formatNumber } from "../../../i18n/languages";
import { useContent } from "../../../i18n/useContent";
import SpecList from "../../ui/SpecList";
import CertificationStrip from "../CertificationStrip";

/** Product facts shared by the jelly cups overview and every flavour page. */
const JellyFacts = () => {
  const { t, language } = useContent();
  const { facts } = t.jellyCups;
  const { steps } = t.units;

  const items = [
    facts.ingredients,
    facts.freeFrom,
    facts.suitableFor,
    facts.production,
    {
      label: facts.cup.label,
      value: steps.cup.detail(
        formatDimensions(language, [SPECS.cupHeightCm]),
        formatDimensions(language, [SPECS.cupDiameterCm]),
      ),
    },
    {
      label: facts.carton.label,
      value: `${formatNumber(language, CUPS_PER_CARTON)} ${t.units.cupsLabel}, ${steps.carton.detail(
        formatNumber(language, SPECS.traysPerCarton),
        formatDimensions(language, SPECS.cartonMm, "mm"),
      )}`,
    },
  ];

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
      <div>
        <h2 className="font-display text-3xl text-brand sm:text-4xl">
          {facts.title}
        </h2>
        <SpecList items={items} className="mt-8" />
      </div>
      <CertificationStrip layout="stack" className="content-start self-center" />
    </div>
  );
};

export default JellyFacts;
