import type { Content } from "../content/content";

/** Labels come from `t.nav[key]`, so links stay language-agnostic. */
export type NavKey = keyof Content["nav"];

export type NavLinkItem = {
  key: NavKey;
  href: string;
};

export const ROUTES = {
  home: "/",
  products: "/products",
  jellyCups: "/products/jelly-cups",
  packaging: "/products/packaging",
  wholesale: "/wholesale",
  about: "/about",
  catalogue: "/catalogue",
  contact: "/contact",
  imprint: "/imprint",
  privacy: "/privacy",
} as const;

export const mainNav: NavLinkItem[] = [
  { key: "products", href: ROUTES.products },
  { key: "wholesale", href: ROUTES.wholesale },
  { key: "about", href: ROUTES.about },
  { key: "catalogue", href: ROUTES.catalogue },
  { key: "contact", href: ROUTES.contact },
];

export const footerNav = {
  products: [
    { key: "jellyCups", href: ROUTES.jellyCups },
    { key: "packaging", href: ROUTES.packaging },
    { key: "catalogue", href: ROUTES.catalogue },
  ],
  company: [
    { key: "about", href: ROUTES.about },
    { key: "wholesale", href: ROUTES.wholesale },
    { key: "contact", href: ROUTES.contact },
  ],
  legal: [
    { key: "imprint", href: ROUTES.imprint },
    { key: "privacy", href: ROUTES.privacy },
  ],
} satisfies Record<string, NavLinkItem[]>;
