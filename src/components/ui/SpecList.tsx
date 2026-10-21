import { cx } from "../../lib/cx";

export type SpecItem = {
  label: string;
  value: string;
};

type SpecListProps = {
  items: SpecItem[];
  className?: string;
};

const SpecList = ({ items, className }: SpecListProps) => {
  return (
    <dl className={cx("divide-y divide-border border-y border-border", className)}>
      {items.map((item) => (
        <div
          key={item.label}
          className="grid gap-1 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6"
        >
          <dt className="text-sm font-semibold text-brand">{item.label}</dt>
          <dd className="text-[0.95rem] leading-relaxed text-text-secondary tabular-nums">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default SpecList;
