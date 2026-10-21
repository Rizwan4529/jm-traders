import type { Flavour } from "../../../data/flavours";
import InView, { MotionChild } from "../../motion/InView";
import { staggerContainer } from "../../motion/variants";
import FlavourCard from "./FlavourCard";

const FlavourGrid = ({ items }: { items: Flavour[] }) => {
  return (
    <InView
      variants={staggerContainer}
      amount={0.1}
      className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
    >
      {items.map((flavour) => (
        <MotionChild key={flavour.slug}>
          <FlavourCard flavour={flavour} />
        </MotionChild>
      ))}
    </InView>
  );
};

export default FlavourGrid;
