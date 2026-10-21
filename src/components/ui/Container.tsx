import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../lib/cx";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const Container = ({ className, children, ...props }: ContainerProps) => {
  return (
    <div
      className={cx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
