import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../../lib/cx";
import SmartLink from "./SmartLink";

type ButtonVariant = "primary" | "accent" | "outline" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

// HTMLElement (not HTMLButtonElement) so handlers also fit the link variant.
export type ButtonProps = ButtonHTMLAttributes<HTMLElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  href?: string;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-sm hover:bg-brand-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
  accent:
    "bg-accent text-brand shadow-sm hover:bg-accent-hover hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-brand/25 bg-transparent text-brand hover:border-brand hover:bg-brand-light",
  inverse:
    "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-13 px-8 text-base",
};

const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  type = "button",
  loading = false,
  disabled,
  href,
  ...props
}: ButtonProps) => {
  const classes = cx(
    "inline-flex items-center justify-center gap-2 rounded-md font-body font-semibold whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <SmartLink href={href} className={classes} onClick={props.onClick}>
        {children}
      </SmartLink>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes}
      {...props}
    >
      {loading ? (
        <span
          aria-hidden="true"
          className="size-4 shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      ) : null}
      {children}
    </button>
  );
};

export default Button;
