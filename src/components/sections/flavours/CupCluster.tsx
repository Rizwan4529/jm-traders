import { getFlavour, type FlavourSlug } from "../../../data/flavours";
import ProductCluster, { type ProductClusterProps } from "../ProductCluster";

type CupClusterProps = Omit<ProductClusterProps, "images"> & {
  /** Left, centre (front) and right cup. */
  slugs?: [FlavourSlug, FlavourSlug, FlavourSlug];
};

/** Three overlapping cups, by default on a royal-blue glow. */
const CupCluster = ({
  slugs = ["orange", "strawberry", "apple"],
  ...props
}: CupClusterProps) => {
  const [left, centre, right] = slugs.map((slug) => getFlavour(slug)!.image);
  return <ProductCluster images={[left, centre, right]} {...props} />;
};

export default CupCluster;
