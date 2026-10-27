import { drinks } from "../../../data/drinks";
import ProductCluster, { type ProductClusterProps } from "../ProductCluster";

/** The three jelly drink bottles, orange in front. */
const BottleCluster = (props: Omit<ProductClusterProps, "images" | "shape">) => {
  const [left, centre, right] = drinks.map((drink) => drink.image);
  return <ProductCluster images={[left, centre, right]} shape="tall" {...props} />;
};

export default BottleCluster;
