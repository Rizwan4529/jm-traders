import { cx } from "../../lib/cx";

export type ProductClusterProps = {
  /** Left, centre (front) and right product shot. */
  images: [string, string, string];
  /** Landscape shots (cups) or square shots with a narrow subject (bottles). */
  shape?: "wide" | "tall";
  /** Draw the royal-blue glow panel; off when already on a navy hero. */
  glow?: boolean;
  className?: string;
};

// Side and front widths; the front overlaps both sides.
const shapeClasses = {
  wide: { side: "w-[46%]", front: "mx-[-8%] w-[56%]" },
  tall: { side: "w-[38%]", front: "mx-[-11%] w-[46%]" },
} as const;

/** Three overlapping product shots, by default on a royal-blue glow. */
const ProductCluster = ({
  images,
  shape = "wide",
  glow = true,
  className,
}: ProductClusterProps) => {
  const sizes = shapeClasses[shape];
  return (
    <div
      className={cx(
        "relative flex items-center justify-center",
        glow &&
          "bg-[radial-gradient(circle_at_50%_60%,#1d4fd0_0%,#0b1a3d_70%)] px-6 py-10",
        className,
      )}
    >
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className={cx(
            "drop-shadow-[0_18px_24px_rgba(0,0,0,0.35)]",
            index === 1 ? cx("relative z-10", sizes.front) : sizes.side,
          )}
        />
      ))}
    </div>
  );
};

export default ProductCluster;
