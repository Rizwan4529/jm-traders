import pizzaBoxBranded from "../../assets/packaging/pizza-box-branded.webp";
import pizzaBoxRange from "../../assets/packaging/pizza-box-range.webp";
import { HiCheck } from "react-icons/hi2";
import { ROUTES } from "../../constants/nav";
import { PACKAGING_CATALOG_URL } from "../../constants/site";
import { MENU_BOXES, PIZZA_BOXES } from "../../data/packaging";
import { usePageMeta } from "../../hooks/usePageMeta";
import { formatDimensions } from "../../i18n/languages";
import { useContent } from "../../i18n/useContent";
import CtaBanner from "../sections/CtaBanner";
import Button from "../ui/Button";
import FeatureGrid from "../ui/FeatureGrid";
import PageHero from "../ui/PageHero";
import QuoteButton from "../ui/QuoteButton";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import SpecList from "../ui/SpecList";

const PizzaBoxTable = () => {
  const { t, language } = useContent();
  const { columns, bestseller } = t.packaging.pizza;

  return (
    <div className="overflow-x-auto rounded-2xl border border-kraft/40 bg-surface">
      <table className="w-full min-w-[40rem] text-left text-[0.95rem]">
        <thead className="bg-brand text-white">
          <tr>
            {[columns.format, columns.size, columns.use, columns.finish].map(
              (column) => (
                <th key={column} scope="col" className="px-5 py-4 font-semibold">
                  {column}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {PIZZA_BOXES.map((box) => {
            const copy = t.packaging.pizzaBoxes[box.id];
            return (
              <tr key={box.id} className="transition-colors hover:bg-kraft-light/50">
                <th scope="row" className="px-5 py-4 font-semibold text-brand">
                  <span className="flex flex-wrap items-center gap-2">
                    {copy.name}
                    {"bestseller" in box ? (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-brand">
                        {bestseller}
                      </span>
                    ) : null}
                  </span>
                </th>
                <td className="px-5 py-4 whitespace-nowrap text-text tabular-nums">
                  {formatDimensions(language, box.dimensions)}
                </td>
                <td className="px-5 py-4 text-text-secondary">{copy.use}</td>
                <td className="px-5 py-4 text-text-secondary">{copy.finish}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const PackagingPage = () => {
  const { t, language } = useContent();
  usePageMeta(t.meta.packaging);
  const { packaging } = t;

  return (
    <>
      <PageHero
        {...packaging.hero}
        breadcrumbs={[
          { label: t.nav.home, href: ROUTES.home },
          { label: t.nav.products, href: ROUTES.products },
          { label: t.nav.packaging },
        ]}
        actions={
          <>
            <QuoteButton size="lg" />
            <Button variant="inverse" size="lg" href={PACKAGING_CATALOG_URL}>
              {t.common.downloadCatalogue}
            </Button>
          </>
        }
        aside={
          <img
            src={pizzaBoxRange}
            alt={packaging.pizza.imageAlt}
            width={1600}
            height={893}
            decoding="async"
            fetchPriority="high"
            className="w-full rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
          />
        }
      />

      <Section tone="surface" className="py-12 sm:py-14 lg:py-16">
        <FeatureGrid items={packaging.highlights} />
      </Section>

      <Section tone="kraft">
        <SectionHeading
          title={packaging.pizza.title}
          description={packaging.pizza.text}
        />
        <div className="mt-10">
          <PizzaBoxTable />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          title={packaging.menu.title}
          description={packaging.menu.text}
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {MENU_BOXES.map((box) => {
            const copy = packaging.menuBoxes[box.id];
            return (
              <li
                key={box.id}
                className="flex flex-col rounded-2xl border border-border bg-surface p-4"
              >
                <img
                  src={box.image}
                  alt={`${copy.name}, ${copy.detail}`}
                  width={280}
                  height={180}
                  loading="lazy"
                  decoding="async"
                  className="w-full"
                />
                <h3 className="mt-3 text-sm font-semibold text-brand">
                  {copy.name}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">{copy.detail}</p>
                <p className="mt-auto pt-3 text-sm text-text-muted tabular-nums">
                  {formatDimensions(language, box.dimensions)}
                </p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <div>
            <SectionHeading
              title={packaging.branding.title}
              description={packaging.branding.text}
            />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {packaging.branding.options.map((option) => (
                <div key={option.title} className="border-t-2 border-accent pt-5">
                  <h3 className="text-lg font-semibold text-brand">
                    {option.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {option.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-[0.95rem] leading-relaxed text-text-secondary"
                      >
                        <HiCheck
                          aria-hidden="true"
                          className="mt-1 size-4 shrink-0 text-royal"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <img
            src={pizzaBoxBranded}
            alt={packaging.branding.imageAlt}
            width={1024}
            height={765}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl"
          />
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title={packaging.materials.title} />
        <SpecList items={packaging.materials.items} className="mt-8 max-w-4xl" />
      </Section>

      <CtaBanner />
    </>
  );
};

export default PackagingPage;
