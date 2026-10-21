import type { FeatureItem } from "./FeatureGrid";

/** Numbered sequence — only for content that really is ordered. */
const StepList = ({ items }: { items: FeatureItem[] }) => {
  return (
    <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {items.map((item, index) => (
        <li key={item.title} className="relative">
          <span
            aria-hidden="true"
            className="font-display block text-5xl leading-none text-accent tabular-nums"
          >
            {index + 1}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-brand">{item.title}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-text-secondary">
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default StepList;
