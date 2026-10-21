import { getFlavour, type FlavourSlug } from "../../../data/flavours";
import { cx } from "../../../lib/cx";

type CupClusterProps = {
  /** Left, centre (front) and right cup. */
  slugs?: [FlavourSlug, FlavourSlug, FlavourSlug];
  /** Draw the royal-blue glow panel; off when already on a navy hero. */
  glow?: boolean;
  className?: string;
};

/** Three overlapping cups, by default on a royal-blue glow. */
const CupCluster = ({
  slugs = ["orange", "strawberry", "apple"],
  glow = true,
  className,
}: CupClusterProps) => {
  const cups = slugs.map((slug) => getFlavour(slug)!);

  return (
    <div
      className={cx(
        "relative flex items-center justify-center",
        glow &&
          "bg-[radial-gradient(circle_at_50%_60%,#1d4fd0_0%,#0b1a3d_70%)] px-6 py-10",
        className,
      )}
    >
      {cups.map((flavour, index) => (
        <img
          key={flavour.slug}
          src={flavour.image}
          alt=""
          loading="lazy"
          decoding="async"
          className={cx(
            "drop-shadow-[0_18px_24px_rgba(0,0,0,0.35)]",
            index === 1 ? "relative z-10 mx-[-8%] w-[56%]" : "w-[46%]",
          )}
        />
      ))}
    </div>
  );
};

export default CupCluster;
