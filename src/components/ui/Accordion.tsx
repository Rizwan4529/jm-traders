import { HiPlus } from "react-icons/hi2";

export type AccordionItem = {
  question: string;
  answer: string;
};

/** Native <details> keeps it keyboard- and screen-reader-friendly for free. */
const Accordion = ({ items }: { items: AccordionItem[] }) => {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-semibold text-brand transition-colors hover:text-royal sm:text-lg [&::-webkit-details-marker]:hidden">
            {item.question}
            <HiPlus
              aria-hidden="true"
              className="size-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className="max-w-3xl pb-6 text-[0.95rem] leading-relaxed text-text-secondary">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
};

export default Accordion;
