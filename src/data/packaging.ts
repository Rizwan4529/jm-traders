import menuBox1 from "../assets/packaging/menu-box-1.webp";
import menuBox2 from "../assets/packaging/menu-box-2.webp";
import menuBox3 from "../assets/packaging/menu-box-3.webp";
import menuBox4 from "../assets/packaging/menu-box-4.webp";
import menuBox5 from "../assets/packaging/menu-box-5.webp";

/** Formats from the JM Trader gastro packaging catalogue (L × W × H, cm). */
export const PIZZA_BOXES = [
  { id: "mini", dimensions: [20, 20, 4] },
  { id: "standard", dimensions: [24, 24, 4], bestseller: true },
  { id: "medium", dimensions: [26, 26, 4] },
  { id: "large", dimensions: [28, 28, 4] },
  { id: "xl", dimensions: [30, 30, 4] },
  { id: "xxl", dimensions: [32, 32, 4] },
  { id: "super", dimensions: [33, 33, 4] },
  { id: "party", dimensions: [36, 36, 4] },
  { id: "family", dimensions: [41, 41, 4] },
  { id: "calzone", dimensions: [30, 16, 10] },
  { id: "slicePlate", dimensions: [17.2, 18] },
] as const;

export type PizzaBoxId = (typeof PIZZA_BOXES)[number]["id"];

export const MENU_BOXES = [
  { id: "bagasse3Square", dimensions: [22.8, 23, 8], image: menuBox1 },
  { id: "bagasse2", dimensions: [24.4, 20.8, 7], image: menuBox2 },
  { id: "bagasse3", dimensions: [24.4, 20.8, 7], image: menuBox3 },
  { id: "bagasse1", dimensions: [24.4, 20.8, 7], image: menuBox4 },
  { id: "woodFibre2", dimensions: [22.8, 23, 8], image: menuBox5 },
] as const;

export type MenuBoxId = (typeof MENU_BOXES)[number]["id"];

export const PACKAGING_MIN_ORDER = 100;
export const PACKAGING_MAX_RUN = 100000;
