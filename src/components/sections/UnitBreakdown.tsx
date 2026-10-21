import { HiChevronRight } from "react-icons/hi2";
import {
  CUPS_PER_CARTON,
  JELLY_CUP_SPECS as SPECS,
} from "../../data/flavours";
import { formatDimensions, formatNumber } from "../../i18n/languages";
import { useContent } from "../../i18n/useContent";

/** Cup → tray → carton → container, each with the cup count at that level. */
const UnitBreakdown = () => {
  const { t, language } = useContent();
  const n = (value: number) => formatNumber(language, value);
  const { steps } = t.units;

  const levels = [
    {
      key: "cup",
      cups: 1,
      title: steps.cup.title,
      detail: steps.cup.detail(
        formatDimensions(language, [SPECS.cupHeightCm]),
        formatDimensions(language, [SPECS.cupDiameterCm]),
      ),
    },
    {
      key: "tray",
      cups: SPECS.cupsPerTray,
      title: steps.tray.title,
      detail: steps.tray.detail(n(SPECS.cupsPerTray)),
    },
    {
      key: "carton",
      cups: CUPS_PER_CARTON,
      title: steps.carton.title,
      detail: steps.carton.detail(
        n(SPECS.traysPerCarton),
        formatDimensions(language, SPECS.cartonMm, "mm"),
      ),
    },
    {
      key: "container",
      cups: CUPS_PER_CARTON * SPECS.cartonsPer40ft,
      title: steps.container.title,
      detail: steps.container.detail(
        n(SPECS.cartonsPer40ft),
        n(SPECS.cartonsPer20ft),
      ),
    },
  ];

  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-4">
      {levels.map((level, index) => (
        <li key={level.key} className="relative bg-surface p-6 sm:p-7">
          {index > 0 ? (
            <HiChevronRight
              aria-hidden="true"
              className="absolute top-1/2 -left-3 hidden size-6 -translate-y-1/2 rounded-full bg-accent p-1 text-brand lg:block"
            />
          ) : null}
          <p className="flex items-baseline gap-2">
            <span className="font-display text-4xl leading-none text-brand tabular-nums sm:text-[2.6rem]">
              {n(level.cups)}
            </span>
            <span className="text-sm text-text-muted">{t.units.cupsLabel}</span>
          </p>
          <h3 className="mt-5 text-lg font-semibold text-brand">{level.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-text-secondary tabular-nums">
            {level.detail}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default UnitBreakdown;
