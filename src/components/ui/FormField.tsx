import { useId, type ReactNode } from "react";
import { cx } from "../../lib/cx";

type FieldShellProps = {
  label: string;
  optionalLabel?: string;
  error?: string;
  children: (props: {
    id: string;
    className: string;
    "aria-invalid": boolean | undefined;
    "aria-describedby": string | undefined;
  }) => ReactNode;
};

const controlClasses =
  "w-full rounded-md border bg-surface px-3.5 py-2.5 text-[0.95rem] text-text placeholder:text-text-muted transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-accent/40";

/** Label, control and error message wired together with matching ids. */
const FormField = ({ label, optionalLabel, error, children }: FieldShellProps) => {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-brand">
        {label}
        {optionalLabel ? (
          <span className="ml-1.5 font-normal text-text-muted">
            ({optionalLabel})
          </span>
        ) : null}
      </label>
      {children({
        id,
        className: cx(controlClasses, error ? "border-red-600" : "border-border"),
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
      })}
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default FormField;
