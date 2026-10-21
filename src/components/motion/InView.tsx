import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, reducedVariants, staggerItem } from "./variants";

type InViewProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  amount?: number;
} & Omit<
  HTMLMotionProps<"div">,
  "children" | "initial" | "whileInView" | "viewport" | "variants"
>;

export const MotionChild = ({
  children,
  className,
  variants = staggerItem,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={prefersReducedMotion ? reducedVariants : variants}
    >
      {children}
    </motion.div>
  );
};

const InView = ({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  amount = 0.25,
  ...props
}: InViewProps) => {
  const prefersReducedMotion = useReducedMotion();
  const activeVariants = prefersReducedMotion ? reducedVariants : variants;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={activeVariants}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.55,
        ease: "easeOut",
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default InView;
