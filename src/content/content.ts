/**
 * All user-facing text, in every supported language.
 *
 * `en` is the source of truth: its shape defines the `Content` type, and
 * `de` must match it, so a missing translation is a type error. Values that
 * contain numbers are functions; components pass in figures formatted for
 * the active language (see `formatNumber` / `formatDimensions`).
 */
import type { FlavourSlug } from "../data/flavours";
import type { MenuBoxId, PizzaBoxId } from "../data/packaging";
import type { Language } from "../i18n/languages";

type Copy = { title: string; text: string };
type FlavourCopy = { name: string; description: string };
type PizzaBoxCopy = { name: string; use: string; finish: string };
type MenuBoxCopy = { name: string; detail: string };
type LabelValue = { label: string; value: string };
type Faq = { question: string; answer: string };
type LegalSection = { heading: string; paragraphs: string[] };

const en = {
  meta: {
    home: {
      title: "Jelly Cups And Gastro Packaging For Trade",
      description:
        "JM Trader supplies Jelly Jungle cup jelly in 14 flavours and gastro packaging to retailers, wholesalers and restaurants.",
    },
    products: {
      title: "Products",
      description:
        "Jelly Jungle cup jelly and gastro packaging from JM Trader.",
    },
    jellyCups: {
      title: "Jelly Jungle Jelly Cups",
      description:
        "14 flavours of Jelly Jungle cup jelly: vegetarian, halal and without high-fructose corn syrup. 144 cups per carton.",
    },
    flavour: (name: string) => ({
      title: `${name} Jelly Cups`,
      description: `Jelly Jungle ${name} cup jelly, available by the carton or container from JM Trader.`,
    }),
    packaging: {
      title: "Gastro Packaging",
      description:
        "Pizza boxes, calzone boxes and menu boxes from 100 pieces, plain or with your branding.",
    },
    wholesale: {
      title: "Wholesale",
      description:
        "How ordering works at JM Trader: request, quote, delivery by pallet or container.",
    },
    about: {
      title: "About Us",
      description:
        "JM Trader is a general trading, import and export business run by E4U Service UG.",
    },
    catalogue: {
      title: "Catalogue",
      description: "Download the JM Trader product catalogues as PDF.",
    },
    contact: {
      title: "Contact",
      description:
        "Reach JM Trader by WhatsApp, phone or email for quotes and orders.",
    },
    // Legal notice disabled for now; restore together with ROUTES.imprint and its route.
//     imprint: {
//       title: "Legal Notice",
//       description: "Legal notice for jmtrader.de.",
//     },
    privacy: {
      title: "Privacy Policy",
      description: "How JM Trader handles personal data on this website.",
    },
    terms: {
      title: "Terms & Conditions",
      description: "General terms and conditions for orders from JM Trader.",
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you were looking for doesn't exist.",
    },
  },

  common: {
    brand: "JM Trader",
    requestQuote: "Request A Quote",
    viewFlavours: "See All Flavours",
    viewDetails: "View Details",
    downloadCatalogue: "Download Catalogue",
    quoteMessage: "Hello JM Trader, I'd like to request a quote.",
    flavourQuoteMessage: (flavour: string) =>
      `Hello JM Trader, I'm interested in Jelly Jungle ${flavour} jelly cups. Please send me a quote.`,
    poweredBy: "Powered by",
    agency: "Stash",
    whatsappFab: "Chat With Us On WhatsApp",
  },

  a11y: {
    skipToContent: "Skip to content",
    mainNavigation: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    breadcrumb: "Breadcrumb",
  },

  languageNames: {
    de: "Deutsch",
    en: "English",
  } satisfies Record<Language, string>,

  nav: {
    home: "Home",
    products: "Products",
    jellyCups: "Jelly Cups",
    packaging: "Packaging",
    wholesale: "Wholesale",
    about: "About Us",
    catalogue: "Catalogue",
    contact: "Contact",
    // Legal notice disabled for now; restore together with ROUTES.imprint and its route.
//     imprint: "Legal Notice",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },

  footer: {
    tagline:
      "General trading, import and export. Jelly Jungle cup jelly and gastro packaging for retail, wholesale and food service.",
    columns: {
      products: "Products",
      company: "Company",
      legal: "Legal",
      contact: "Contact",
    },
    copyright: (year: number, company: string) => `© ${year} ${company}`,
  },

  contactChannels: {
    whatsapp: "WhatsApp",
    phone: "Phone",
    email: "Email",
    web: "Web",
  },

  certifications: {
    halal: { title: "Halal", text: "Certified halal food" },
    vegetarian: { title: "100% Vegetarian", text: "Carrageenan, no gelatine" },
    noHfcs: { title: "No HFCS", text: "No high-fructose corn syrup" },
    fda: { title: "FDA Registered", text: "Made in a registered facility" },
  },

  flavours: {
    strawberry: {
      name: "Strawberry",
      description:
        "Sweet, ripe strawberry. The flavour most customers reach for first.",
    },
    orange: {
      name: "Orange",
      description: "Bright, juicy orange with a gentle citrus tang.",
    },
    apple: {
      name: "Apple",
      description: "Crisp green apple, fresh and slightly tart.",
    },
    mango: {
      name: "Mango",
      description: "Rich tropical mango with a smooth, sunny sweetness.",
    },
    pineapple: {
      name: "Pineapple",
      description: "Tropical pineapple, sweet with a zesty finish.",
    },
    kiwi: {
      name: "Kiwi",
      description: "Fresh kiwi with a lively sweet-and-sour balance.",
    },
    lemon: {
      name: "Lemon",
      description: "Zesty lemon, light and refreshing.",
    },
    melon: {
      name: "Melon",
      description: "Juicy watermelon. A summer favourite in a cup.",
    },
    peach: {
      name: "Peach",
      description: "Soft, fragrant peach with a mellow sweetness.",
    },
    raspberry: {
      name: "Raspberry",
      description: "Bold raspberry, sweet with a light berry tartness.",
    },
    "tutti-fruit": {
      name: "Tutti Frutti",
      description: "The mixed-fruit classic, in a deep berry red.",
    },
    mint: {
      name: "Mint",
      description: "Cool, refreshing mint. Something different on the shelf.",
    },
    rose: {
      name: "Rose",
      description:
        "Delicate rose, floral and lightly sweet. A favourite in Middle Eastern cuisine.",
    },
    vanilla: {
      name: "Vanilla",
      description: "Creamy vanilla, mild and smooth.",
    },
  } satisfies Record<FlavourSlug, FlavourCopy>,

  units: {
    title: "From One Cup To A Full Container",
    text: "Every order is built from the same units, so planning shelf space and storage is simple.",
    cupsLabel: "cups",
    steps: {
      cup: {
        title: "Cup",
        detail: (height: string, diameter: string) =>
          `${height} high, ${diameter} across, sealed lid`,
      },
      tray: {
        title: "Tray",
        detail: (cups: string) => `${cups} cups in a printed tray`,
      },
      carton: {
        title: "Carton",
        detail: (trays: string, size: string) => `${trays} trays, ${size}`,
      },
      container: {
        title: "40-Foot Container",
        detail: (cartons40: string, cartons20: string) =>
          `${cartons40} cartons. A 20 ft container holds ${cartons20}.`,
      },
    },
  },

  productLines: {
    jellyCups: {
      title: "Jelly Jungle Jelly Cups",
      text: "Fruit-flavoured cup jelly in 14 flavours. Vegetarian, halal and made without high-fructose corn syrup.",
      cta: "Explore Jelly Cups",
    },
    packaging: {
      title: "Gastro Packaging",
      text: "Pizza boxes, calzone boxes and menu boxes from 100 pieces, plain kraft or printed with your brand.",
      cta: "Explore Packaging",
    },
  },

  services: {
    title: "What We Do",
    text: "JM Trader is a trading business. We source products from certified manufacturers and deliver them to businesses on dependable terms.",
    items: [
      {
        title: "General Trading",
        text: "Reliable B2B terms for retailers, wholesalers and food service.",
      },
      {
        title: "Import And Export",
        text: "Direct sourcing from manufacturers with certified production standards.",
      },
      {
        title: "Global Sourcing",
        text: "Production quantities that scale from 100 to 100,000 units.",
      },
      {
        title: "Reliable Supply",
        text: "Punctual delivery you can plan your stock around.",
      },
    ] satisfies Copy[],
  },

  ctaBanner: {
    title: "Tell Us What You Need",
    text: "Send us the products, quantities and delivery address. We'll reply with a quote, usually on the same day.",
  },

  home: {
    hero: {
      title: "Reliable Wholesale Supply For Traders",
      text: "JM Trader imports Jelly Jungle cup jelly in 14 flavours and supplies gastro packaging to retailers, wholesalers and restaurants.",
      pickerLabel: "Choose A Flavour",
    },
    flavours: {
      title: "14 Flavours, One Recognisable Cup",
      text: "Every Jelly Jungle cup has the same shape and lid, so a mixed range looks consistent on the shelf.",
    },
    lines: {
      title: "Two Product Lines",
      text: "Snacks for the shelf and packaging for the kitchen, from one supplier.",
    },
    about: {
      title: "A Trading Partner, Not A Middleman",
      text: "JM Trader is run by E4U Service UG. We import, store and deliver ourselves, so you have one contact from quote to delivery.",
      cta: "About JM Trader",
    },
  },

  products: {
    hero: {
      title: "Products",
      text: "Jelly Jungle cup jelly for retail and wholesale, and gastro packaging for food service.",
    },
    downloads: {
      title: "Product Catalogues",
      text: "Prefer a PDF? Download the full catalogues to share with your team.",
    },
  },

  jellyCups: {
    hero: {
      title: "Jelly Jungle Jelly Cups",
      text: "Fruit-flavoured cup jelly in 14 flavours, supplied by the carton or by the container.",
    },
    flavours: {
      title: "All Flavours",
      text: "Pick a flavour to see its details and request a quote.",
    },
    facts: {
      title: "Product Facts",
      ingredients: {
        label: "Ingredients",
        value: "Water, sugar, carrageenan, flavourings, citric acid, colouring",
      },
      freeFrom: {
        label: "Free From",
        value:
          "Animal gelatine, pork fat, GMOs and high-fructose corn syrup",
      },
      suitableFor: { label: "Suitable For", value: "Vegetarian and halal diets" },
      production: {
        label: "Production",
        value: "Made in an FDA-registered facility",
      },
      cup: { label: "Cup" },
      carton: { label: "Carton" },
    },
    packs: {
      title: "Retail-Ready Packs",
      text: "Cups come in printed trays of 12, ready to go straight onto the shelf or counter.",
      imageAlt:
        "Jelly Jungle trays of 12 cups with printed sleeves showing strawberry, orange and apple",
      sizeAlt: "Jelly Jungle cup measuring 7 cm high and 5.7 cm across",
    },
  },

  flavourPage: {
    imageAlt: (name: string) => `Jelly Jungle ${name} jelly cup`,
    flyerAlt: (name: string) => `Jelly Jungle ${name} product flyer`,
    flyerTitle: "Product Flyer",
    flyerText:
      "Use the flyer for your shelf, your shop window or your own catalogue.",
    moreTitle: "More Flavours",
    previous: "Previous Flavour",
    next: "Next Flavour",
    requestFlavour: (name: string) => `Request ${name}`,
  },

  packaging: {
    hero: {
      title: "Gastro Packaging",
      text: "Pizza boxes, calzone boxes and menu boxes made from food-safe corrugated board and natural fibres. From 100 pieces.",
    },
    highlights: [
      { title: "From 100 Pieces", text: "Small runs for single restaurants." },
      { title: "Up To 100,000", text: "Production volumes for chains and wholesale." },
      { title: "Food Safe", text: "Compliant with EU 1935/2004 and LFGB." },
      { title: "Free Shipping", text: "Delivered on time, shipping included." },
    ] satisfies Copy[],
    pizza: {
      title: "Pizza Boxes And Specials",
      text: "Sturdy single-wall corrugated board with steam vents, so pizzas arrive hot and crisp.",
      columns: {
        format: "Format",
        size: "Size (L × W × H)",
        use: "Recommended For",
        finish: "Finish",
      },
      bestseller: "Bestseller",
      imageAlt: "JM Trader branded pizza boxes in sizes from 24 to 36 cm",
    },
    pizzaBoxes: {
      mini: {
        name: "Mini",
        use: "Snack pizza, flatbread, sides",
        finish: "Plain brown",
      },
      standard: {
        name: "Standard",
        use: "Classic pizza (approx. 22–24 cm)",
        finish: "Brown or printed",
      },
      medium: {
        name: "Medium",
        use: "Medium pizza (26 cm)",
        finish: "Brown or printed",
      },
      large: {
        name: "Large",
        use: "Large pizza (approx. 28 cm)",
        finish: "Food-service standard, brown",
      },
      xl: {
        name: "XL",
        use: "Extra-large single pizza",
        finish: "Brown",
      },
      xxl: {
        name: "XXL",
        use: "Jumbo pizza, lahmacun",
        finish: "Brown or white printed",
      },
      super: {
        name: "Super",
        use: "Pizzeria special size",
        finish: "Brown, Italian design",
      },
      party: {
        name: "Party",
        use: "Party pizza, sharing size",
        finish: "Plain brown",
      },
      family: {
        name: "Family",
        use: "Family and giant pizza",
        finish: "Heavy-duty corrugated, brown",
      },
      calzone: {
        name: "Calzone Box",
        use: "Filled calzone, baguettes",
        finish: "Tall lid-and-base box, brown",
      },
      slicePlate: {
        name: "Triangle Plate",
        use: "Single pizza slice to go",
        finish: "PE-coated board",
      },
    } satisfies Record<PizzaBoxId, PizzaBoxCopy>,
    menu: {
      title: "Menu Boxes",
      text: "Hinged takeaway boxes made from bagasse (sugar-cane fibre) and wood fibre. White and unprinted.",
    },
    menuBoxes: {
      bagasse3Square: { name: "Bagasse Menu Box", detail: "Square, 3 compartments" },
      bagasse2: { name: "Bagasse Menu Box", detail: "2 compartments" },
      bagasse3: { name: "Bagasse Menu Box", detail: "3 compartments" },
      bagasse1: { name: "Bagasse Menu Box", detail: "Single compartment" },
      woodFibre2: { name: "Wood-Fibre Menu Box", detail: "Square, 2 compartments" },
    } satisfies Record<MenuBoxId, MenuBoxCopy>,
    branding: {
      title: "Your Brand On Every Box",
      text: "Deliver in plain kraft, or put your logo on the lid. The print area covers formats from 20 × 20 to 41 × 41 cm.",
      imageAlt: "Pizza box printed with the JM Trader design",
      options: [
        {
          title: "Option A: Full-Size Labels",
          points: [
            "Flexible runs for short notice",
            "High-resolution labels in photo quality",
            "Works with plain kraft boxes from 100 pieces",
            "True colours on white label stock",
          ],
        },
        {
          title: "Option B: Industrial Direct Print",
          points: [
            "Flexo or offset print directly on the board",
            "Full-coverage design on lid and side flaps",
            "Built for volumes from 500 to 100,000 units",
            "Food-certified, low-migration inks",
          ],
        },
      ],
    },
    materials: {
      title: "Materials And Disposal",
      items: [
        {
          label: "Material",
          value:
            "Stable single-wall corrugated board (kraftliner or testliner) with integrated steam vents",
        },
        {
          label: "Food Safety",
          value:
            "Compliant with EU Regulation 1935/2004 and LFGB, odour- and taste-neutral",
        },
        {
          label: "Disposal",
          value:
            "Without food residue, 100% recyclable with waste paper. Dispose of PE-coated triangle plates with general waste.",
        },
      ] satisfies LabelValue[],
    },
  },

  wholesale: {
    hero: {
      title: "Wholesale",
      text: "From a few cartons to full container loads, here is how ordering from JM Trader works.",
    },
    steps: {
      title: "How Ordering Works",
      items: [
        {
          title: "Send Your Request",
          text: "Tell us the flavours or formats, quantities and delivery address by WhatsApp, email or the contact form.",
        },
        {
          title: "Receive Your Quote",
          text: "We confirm availability, price and delivery date.",
        },
        {
          title: "Confirm The Order",
          text: "Approve the quote and we reserve the stock for you.",
        },
        {
          title: "Take Delivery",
          text: "Your goods arrive by pallet or container, ready to sell or use.",
        },
      ] satisfies Copy[],
    },
    customers: {
      title: "Who We Supply",
      items: [
        {
          title: "Supermarkets And Retail",
          text: "Shelf-ready jelly cup trays in a consistent design.",
        },
        {
          title: "Kiosks And Convenience Stores",
          text: "Popular flavours by the carton for counter and impulse sales.",
        },
        {
          title: "Wholesalers And Cash And Carry",
          text: "Pallet and container quantities for onward distribution.",
        },
        {
          title: "Restaurants And Delivery Services",
          text: "Pizza and menu boxes, plain or with your branding.",
        },
      ] satisfies Copy[],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Which jelly cup flavours are available?",
          answer:
            "All 14 Jelly Jungle flavours, from strawberry and mango to mint, rose and vanilla. You'll find the full range on the jelly cups page.",
        },
        {
          question: "How are the jelly cups packed?",
          answer:
            "12 cups per tray and 12 trays per carton, so 144 cups per carton. A 20 ft container holds 860 cartons and a 40 ft container holds 2,052.",
        },
        {
          question: "Are the jelly cups halal and vegetarian?",
          answer:
            "Yes. They are set with carrageenan instead of animal gelatine, contain no pork fat and are halal and 100% vegetarian.",
        },
        {
          question: "What is the minimum order for packaging?",
          answer:
            "Packaging orders start at 100 pieces per format. Industrial direct print starts at 500 units.",
        },
        {
          question: "Can you print our logo on the boxes?",
          answer:
            "Yes. Choose full-size labels for small runs or direct print for larger volumes. Send us your artwork with your request.",
        },
        {
          question: "How do I place an order?",
          answer:
            "Send us the products, quantities and delivery address by WhatsApp or email, or use the contact form. We reply with a quote.",
        },
      ] satisfies Faq[],
    },
  },

  about: {
    hero: {
      title: "About JM Trader",
      text: "A general trading, import and export business, run by E4U Service UG.",
    },
    story: {
      title: "Our Story",
      paragraphs: [
        "JM Trader started with a simple idea: businesses should be able to get dependable products without chasing several suppliers. We source directly from manufacturers, handle import and storage ourselves and deliver to our customers on clear terms.",
        "Today we supply two product lines. Jelly Jungle cup jelly for retail and wholesale, and gastro packaging for restaurants and delivery services.",
      ],
      imageAlt:
        "JM Trader banner: general trading, import and export, global sourcing, reliable supply",
    },
    brand: {
      title: "Jelly Jungle",
      text: "Jelly Jungle cups are produced by Jungle Trading Establishment in Lebanon, in an FDA-registered facility, and exported to markets including Germany, the Netherlands, the UK, the UAE, the US and Australia. JM Trader brings them to German customers.",
      imageAlt: "Jelly Jungle logo",
    },
  },

  catalogue: {
    hero: {
      title: "Catalogue",
      text: "Download our product catalogues as PDF to browse offline or share with your team.",
    },
    items: {
      jelly: {
        title: "Jelly Jungle Flavours",
        text: "Flyers for all 14 flavours, cup size, packing units and container loads.",
        meta: "PDF, 17 pages",
      },
      packaging: {
        title: "Gastro Packaging",
        text: "Pizza box formats, finishing options and material specifications.",
        meta: "PDF, 2 pages",
      },
    },
  },

  contact: {
    hero: {
      title: "Contact",
      text: "Questions, quotes or orders: reach us the way that suits you best.",
    },
    channels: {
      title: "Get In Touch Directly",
      text: "WhatsApp is the fastest way to reach us.",
    },
    form: {
      title: "Send A Request",
      text: "Fill in the form and send it by WhatsApp or email. Nothing is stored on this website.",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        interest: "I'm Interested In",
        quantity: "Quantity",
        message: "Message",
      },
      placeholders: {
        quantity: "e.g. 20 cartons",
        message: "Flavours or formats, delivery address, timing…",
      },
      optional: "optional",
      interests: {
        jellyCups: "Jelly Cups",
        pizzaBoxes: "Pizza Boxes",
        menuBoxes: "Menu Boxes",
        other: "Something Else",
      },
      errors: {
        name: "Please enter your name.",
        message: "Please describe what you need.",
        email: "Please enter a valid email address.",
      },
      sendWhatsApp: "Send By WhatsApp",
      sendEmail: "Send By Email",
      emailSubject: "Request via jmtrader.de",
      greeting: "Hello JM Trader,",
    },
  },

  legal: {
    // Legal notice disabled for now; restore together with ROUTES.imprint and its route.
//     imprint: {
//       title: "Legal Notice",
//       intro: "Information in accordance with § 5 DDG (German Digital Services Act).",
//       company: {
//         heading: "Provider",
//         lines: [
//           "E4U Service UG | JM Trader",
//           "[Street and house number]",
//           "[Postcode and city]",
//           "Germany",
//         ],
//       },
//       contactHeading: "Contact",
//       sections: [
//         {
//           heading: "Represented By",
//           paragraphs: ["[Name of managing director]"],
//         },
//         {
//           heading: "Register Entry",
//           paragraphs: ["[Register court], [HRB number]"],
//         },
//         {
//           heading: "VAT Identification Number",
//           paragraphs: ["[VAT ID according to § 27a UStG]"],
//         },
//         {
//           heading: "Consumer Dispute Resolution",
//           paragraphs: [
//             "We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.",
//           ],
//         },
//       ] satisfies LegalSection[],
//     },
    terms: {
      title: "Terms & Conditions",
      intro:
        "General terms and conditions of E4U Service UG | JM Trader for business customers.",
      sections: [
        {
          heading: "Scope",
          paragraphs: [
            "These terms apply to all offers, deliveries and services of E4U Service UG | JM Trader (\"JM Trader\") to businesses within the meaning of § 14 BGB, legal entities under public law and special funds under public law. We do not sell to consumers.",
            "Conflicting or additional terms of the customer only apply if we have expressly agreed to them in writing.",
          ],
        },
        {
          heading: "Offers And Contract",
          paragraphs: [
            "Our offers on this website, in catalogues and in messages are non-binding. A contract is concluded when we confirm an order in text form (email or WhatsApp is sufficient) or deliver the goods.",
          ],
        },
        {
          heading: "Prices And Payment",
          paragraphs: [
            "All prices are net prices in euros plus statutory VAT. Unless the quote or order confirmation states otherwise, invoices are payable without deduction within 14 days of the invoice date.",
          ],
        },
        {
          heading: "Delivery And Transfer Of Risk",
          paragraphs: [
            "Delivery dates are approximate unless expressly agreed as binding. Partial deliveries are permitted where reasonable for the customer.",
            "Risk passes to the customer when the goods are handed over to the carrier, or on handover to the customer if we deliver ourselves.",
          ],
        },
        {
          heading: "Retention Of Title",
          paragraphs: [
            "Goods remain our property until all claims arising from the business relationship have been paid in full.",
          ],
        },
        {
          heading: "Inspection And Defects",
          paragraphs: [
            "The customer must inspect the goods immediately on receipt and report visible defects in text form within 7 days, and hidden defects within 7 days of discovery (§ 377 HGB).",
            "If goods are defective, we will, at our option, remedy the defect, deliver a replacement or refund the purchase price. Food products must be stored as instructed on the packaging; defects caused by improper storage are excluded.",
          ],
        },
        {
          heading: "Custom-Printed Packaging",
          paragraphs: [
            "For printed packaging, the customer supplies print-ready artwork and confirms that they hold all rights to it. Slight deviations in colour and print position are technically unavoidable and do not constitute a defect. Custom-printed goods cannot be returned.",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "We are liable without limitation for intent and gross negligence and for injury to life, body or health. For slight negligence we are only liable for breach of essential contractual obligations, limited to the foreseeable damage typical for this type of contract. Liability under the Product Liability Act remains unaffected.",
          ],
        },
        {
          heading: "Governing Law And Jurisdiction",
          paragraphs: [
            "German law applies, excluding the UN Convention on Contracts for the International Sale of Goods (CISG). The place of jurisdiction for all disputes is the registered office of E4U Service UG, [city].",
          ],
        },
      ] satisfies LegalSection[],
    },
    privacy: {
      title: "Privacy Policy",
      intro:
        "We take the protection of your personal data seriously. This policy explains what data this website processes and why.",
      sections: [
        {
          heading: "Controller",
          paragraphs: [
            "E4U Service UG | JM Trader, [address]. Email: info@jmtrader.de.",
          ],
        },
        {
          heading: "Hosting And Server Log Files",
          paragraphs: [
            "When you visit this website, our hosting provider automatically processes technical data such as your IP address, the date and time of the request, the page requested and your browser type. This is necessary to deliver the website and keep it secure (Art. 6(1)(f) GDPR). Log files are deleted after a short period.",
          ],
        },
        {
          heading: "Contacting Us",
          paragraphs: [
            "If you contact us by email, phone or WhatsApp, we process your details to answer your request (Art. 6(1)(b) and (f) GDPR).",
            "The contact form does not send data to our server. It opens your email program or WhatsApp with your message filled in, and you decide whether to send it. WhatsApp is operated by WhatsApp Ireland Ltd.; its privacy policy applies to messages sent through it.",
          ],
        },
        {
          heading: "Cookies And Local Storage",
          paragraphs: [
            "This website does not use cookies or tracking tools. Your language choice is saved in your browser's local storage so the site opens in the same language next time. You can delete it at any time in your browser settings.",
          ],
        },
        {
          heading: "Fonts",
          paragraphs: [
            "Fonts are served from our own server. No connection to external font providers is made.",
          ],
        },
        {
          heading: "Your Rights",
          paragraphs: [
            "You have the right to access, rectify, erase and restrict the processing of your data, to data portability and to object to processing. You also have the right to lodge a complaint with a data protection supervisory authority.",
          ],
        },
      ] satisfies LegalSection[],
    },
  },

  notFound: {
    title: "This Page Doesn't Exist",
    text: "The link may be broken or the page may have moved. Head back to the homepage or browse our products.",
    cta: "Go To The Homepage",
  },
};

export type Content = typeof en;

const de: Content = {
  meta: {
    home: {
      title: "Jelly-Cups Und Gastro-Verpackungen Für Den Handel",
      description:
        "JM Trader liefert Jelly Jungle Cup-Jelly in 14 Sorten sowie Gastro-Verpackungen an Einzelhandel, Großhandel und Gastronomie.",
    },
    products: {
      title: "Produkte",
      description:
        "Jelly Jungle Cup-Jelly und Gastro-Verpackungen von JM Trader.",
    },
    jellyCups: {
      title: "Jelly Jungle Jelly-Cups",
      description:
        "14 Sorten Jelly Jungle Cup-Jelly: vegetarisch, halal und ohne Maissirup mit hohem Fructosegehalt. 144 Becher pro Karton.",
    },
    flavour: (name: string) => ({
      title: `Jelly-Cups ${name}`,
      description: `Jelly Jungle Cup-Jelly ${name}, erhältlich im Karton oder Container bei JM Trader.`,
    }),
    packaging: {
      title: "Gastro-Verpackungen",
      description:
        "Pizzakartons, Calzone-Boxen und Menüboxen ab 100 Stück, unbedruckt oder mit Ihrem Branding.",
    },
    wholesale: {
      title: "Großhandel",
      description:
        "So bestellen Sie bei JM Trader: Anfrage, Angebot, Lieferung per Palette oder Container.",
    },
    about: {
      title: "Über Uns",
      description:
        "JM Trader ist ein Handels-, Import- und Exportunternehmen der E4U Service UG.",
    },
    catalogue: {
      title: "Katalog",
      description: "Laden Sie die Produktkataloge von JM Trader als PDF herunter.",
    },
    contact: {
      title: "Kontakt",
      description:
        "Erreichen Sie JM Trader per WhatsApp, Telefon oder E-Mail für Angebote und Bestellungen.",
    },
    // Legal notice disabled for now; restore together with ROUTES.imprint and its route.
//     imprint: {
//       title: "Impressum",
//       description: "Impressum von jmtrader.de.",
//     },
    privacy: {
      title: "Datenschutz",
      description:
        "Wie JM Trader personenbezogene Daten auf dieser Website verarbeitet.",
    },
    terms: {
      title: "Allgemeine Geschäftsbedingungen",
      description: "Allgemeine Geschäftsbedingungen für Bestellungen bei JM Trader.",
    },
    notFound: {
      title: "Seite Nicht Gefunden",
      description: "Die gesuchte Seite existiert nicht.",
    },
  },

  common: {
    brand: "JM Trader",
    requestQuote: "Angebot Anfragen",
    viewFlavours: "Alle Sorten Ansehen",
    viewDetails: "Details Ansehen",
    downloadCatalogue: "Katalog Herunterladen",
    quoteMessage: "Hallo JM Trader, ich möchte ein Angebot anfragen.",
    flavourQuoteMessage: (flavour: string) =>
      `Hallo JM Trader, ich interessiere mich für Jelly Jungle Jelly-Cups der Sorte ${flavour}. Bitte senden Sie mir ein Angebot.`,
    poweredBy: "Umgesetzt von",
    agency: "Stash",
    whatsappFab: "Per WhatsApp Schreiben",
  },

  a11y: {
    skipToContent: "Zum Inhalt springen",
    mainNavigation: "Hauptnavigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
    breadcrumb: "Brotkrümelnavigation",
  },

  languageNames: {
    de: "Deutsch",
    en: "English",
  },

  nav: {
    home: "Start",
    products: "Produkte",
    jellyCups: "Jelly-Cups",
    packaging: "Verpackungen",
    wholesale: "Großhandel",
    about: "Über Uns",
    catalogue: "Katalog",
    contact: "Kontakt",
    // Legal notice disabled for now; restore together with ROUTES.imprint and its route.
//     imprint: "Impressum",
    privacy: "Datenschutz",
    terms: "AGB",
  },

  footer: {
    tagline:
      "Handel, Import und Export. Jelly Jungle Cup-Jelly und Gastro-Verpackungen für Einzelhandel, Großhandel und Gastronomie.",
    columns: {
      products: "Produkte",
      company: "Unternehmen",
      legal: "Rechtliches",
      contact: "Kontakt",
    },
    copyright: (year: number, company: string) => `© ${year} ${company}`,
  },

  contactChannels: {
    whatsapp: "WhatsApp",
    phone: "Telefon",
    email: "E-Mail",
    web: "Web",
  },

  certifications: {
    halal: { title: "Halal", text: "Zertifiziert halal" },
    vegetarian: { title: "100 % Vegetarisch", text: "Carrageen statt Gelatine" },
    noHfcs: { title: "Ohne HFCS", text: "Ohne Maissirup mit hohem Fructosegehalt" },
    fda: { title: "FDA-Registriert", text: "Hergestellt in registriertem Betrieb" },
  },

  flavours: {
    strawberry: {
      name: "Erdbeere",
      description:
        "Süße, reife Erdbeere. Die Sorte, zu der die meisten zuerst greifen.",
    },
    orange: {
      name: "Orange",
      description: "Saftige Orange mit milder Zitrusnote.",
    },
    apple: {
      name: "Apfel",
      description: "Knackiger grüner Apfel, frisch und leicht säuerlich.",
    },
    mango: {
      name: "Mango",
      description: "Vollmundige tropische Mango mit sonniger Süße.",
    },
    pineapple: {
      name: "Ananas",
      description: "Tropische Ananas, süß mit spritzigem Abgang.",
    },
    kiwi: {
      name: "Kiwi",
      description: "Frische Kiwi mit lebendiger süß-saurer Note.",
    },
    lemon: {
      name: "Zitrone",
      description: "Spritzige Zitrone, leicht und erfrischend.",
    },
    melon: {
      name: "Melone",
      description: "Saftige Wassermelone. Der Sommerklassiker im Becher.",
    },
    peach: {
      name: "Pfirsich",
      description: "Zarter, aromatischer Pfirsich mit milder Süße.",
    },
    raspberry: {
      name: "Himbeere",
      description: "Kräftige Himbeere, süß mit feiner Beerensäure.",
    },
    "tutti-fruit": {
      name: "Tutti Frutti",
      description: "Der Mehrfrucht-Klassiker in tiefem Beerenrot.",
    },
    mint: {
      name: "Minze",
      description: "Kühle, erfrischende Minze. Eine Abwechslung im Regal.",
    },
    rose: {
      name: "Rose",
      description:
        "Zarte Rose, blumig und leicht süß. Beliebt in der orientalischen Küche.",
    },
    vanilla: {
      name: "Vanille",
      description: "Cremige Vanille, mild und sanft.",
    },
  },

  units: {
    title: "Vom Einzelnen Becher Bis Zum Vollen Container",
    text: "Jede Bestellung setzt sich aus denselben Einheiten zusammen. So lassen sich Regalfläche und Lager einfach planen.",
    cupsLabel: "Becher",
    steps: {
      cup: {
        title: "Becher",
        detail: (height: string, diameter: string) =>
          `${height} hoch, Ø ${diameter}, versiegelter Deckel`,
      },
      tray: {
        title: "Schale",
        detail: (cups: string) => `${cups} Becher in einer bedruckten Schale`,
      },
      carton: {
        title: "Karton",
        detail: (trays: string, size: string) => `${trays} Schalen, ${size}`,
      },
      container: {
        title: "40-Fuß-Container",
        detail: (cartons40: string, cartons20: string) =>
          `${cartons40} Kartons. In einen 20-Fuß-Container passen ${cartons20}.`,
      },
    },
  },

  productLines: {
    jellyCups: {
      title: "Jelly Jungle Jelly-Cups",
      text: "Cup-Jelly mit Fruchtgeschmack in 14 Sorten. Vegetarisch, halal und ohne Maissirup mit hohem Fructosegehalt.",
      cta: "Jelly-Cups Entdecken",
    },
    packaging: {
      title: "Gastro-Verpackungen",
      text: "Pizzakartons, Calzone-Boxen und Menüboxen ab 100 Stück, in Kraftbraun oder mit Ihrer Marke bedruckt.",
      cta: "Verpackungen Entdecken",
    },
  },

  services: {
    title: "Was Wir Tun",
    text: "JM Trader ist ein Handelsunternehmen. Wir beziehen Produkte von zertifizierten Herstellern und beliefern Unternehmen zu verlässlichen Konditionen.",
    items: [
      {
        title: "Allgemeiner Handel",
        text: "Zuverlässige B2B-Konditionen für Handel, Großhandel und Gastronomie.",
      },
      {
        title: "Import Und Export",
        text: "Direktsourcing bei Herstellern mit zertifizierten Fertigungsstandards.",
      },
      {
        title: "Globale Beschaffung",
        text: "Skalierbare Produktionsmengen von 100 bis 100.000 Stück.",
      },
      {
        title: "Verlässliche Lieferung",
        text: "Pünktliche Bereitstellung, mit der Sie Ihren Bestand planen können.",
      },
    ],
  },

  ctaBanner: {
    title: "Sagen Sie Uns, Was Sie Brauchen",
    text: "Schicken Sie uns Produkte, Mengen und Lieferadresse. Sie erhalten ein Angebot, meist noch am selben Tag.",
  },

  home: {
    hero: {
      title: "Zuverlässiger Großhandel Für Händler",
      text: "JM Trader importiert Jelly Jungle Cup-Jelly in 14 Sorten und liefert Gastro-Verpackungen an Einzelhandel, Großhandel und Gastronomie.",
      pickerLabel: "Sorte Wählen",
    },
    flavours: {
      title: "14 Sorten, Ein Unverwechselbarer Becher",
      text: "Jeder Jelly Jungle Becher hat dieselbe Form und denselben Deckel. So wirkt auch ein gemischtes Sortiment im Regal einheitlich.",
    },
    lines: {
      title: "Zwei Produktlinien",
      text: "Snacks fürs Regal und Verpackungen für die Küche, aus einer Hand.",
    },
    about: {
      title: "Ein Handelspartner, Kein Zwischenhändler",
      text: "JM Trader wird von der E4U Service UG betrieben. Wir importieren, lagern und liefern selbst. Sie haben einen Ansprechpartner vom Angebot bis zur Lieferung.",
      cta: "Über JM Trader",
    },
  },

  products: {
    hero: {
      title: "Produkte",
      text: "Jelly Jungle Cup-Jelly für Einzel- und Großhandel sowie Gastro-Verpackungen für die Gastronomie.",
    },
    downloads: {
      title: "Produktkataloge",
      text: "Lieber als PDF? Laden Sie die vollständigen Kataloge herunter und teilen Sie sie mit Ihrem Team.",
    },
  },

  jellyCups: {
    hero: {
      title: "Jelly Jungle Jelly-Cups",
      text: "Cup-Jelly mit Fruchtgeschmack in 14 Sorten, geliefert im Karton oder im Container.",
    },
    flavours: {
      title: "Alle Sorten",
      text: "Wählen Sie eine Sorte, um Details zu sehen und ein Angebot anzufragen.",
    },
    facts: {
      title: "Produktdetails",
      ingredients: {
        label: "Zutaten",
        value: "Wasser, Zucker, Carrageen, Aromen, Citronensäure, Farbstoff",
      },
      freeFrom: {
        label: "Frei Von",
        value:
          "Tierischer Gelatine, Schweinefett, Gentechnik und Maissirup mit hohem Fructosegehalt",
      },
      suitableFor: {
        label: "Geeignet Für",
        value: "Vegetarische und halal Ernährung",
      },
      production: {
        label: "Herstellung",
        value: "In einem FDA-registrierten Betrieb",
      },
      cup: { label: "Becher" },
      carton: { label: "Karton" },
    },
    packs: {
      title: "Regalfertige Verpackung",
      text: "Die Becher kommen in bedruckten Schalen zu je 12 Stück, bereit für Regal oder Theke.",
      imageAlt:
        "Jelly Jungle Schalen mit 12 Bechern und bedruckter Banderole in Erdbeere, Orange und Apfel",
      sizeAlt: "Jelly Jungle Becher, 7 cm hoch und 5,7 cm im Durchmesser",
    },
  },

  flavourPage: {
    imageAlt: (name: string) => `Jelly Jungle Jelly-Cup ${name}`,
    flyerAlt: (name: string) => `Jelly Jungle Produktflyer ${name}`,
    flyerTitle: "Produktflyer",
    flyerText:
      "Nutzen Sie den Flyer für Ihr Regal, Ihr Schaufenster oder Ihren eigenen Katalog.",
    moreTitle: "Weitere Sorten",
    previous: "Vorherige Sorte",
    next: "Nächste Sorte",
    requestFlavour: (name: string) => `${name} Anfragen`,
  },

  packaging: {
    hero: {
      title: "Gastro-Verpackungen",
      text: "Pizzakartons, Calzone-Boxen und Menüboxen aus lebensmittelechter Wellpappe und Naturfasern. Ab 100 Stück.",
    },
    highlights: [
      { title: "Ab 100 Stück", text: "Kleine Auflagen für einzelne Restaurants." },
      { title: "Bis 100.000", text: "Produktionsmengen für Ketten und Großhandel." },
      { title: "Lebensmittelecht", text: "Konform mit EU 1935/2004 und LFGB." },
      { title: "Kostenloser Versand", text: "Pünktlich geliefert, Versand inklusive." },
    ],
    pizza: {
      title: "Pizzakartons Und Spezialformate",
      text: "Stabile 1-wellige Wellpappe mit Dampfaustritts-Schlitzen, damit Pizzen heiß und knusprig ankommen.",
      columns: {
        format: "Format",
        size: "Maße (L × B × H)",
        use: "Empfohlen Für",
        finish: "Ausführung",
      },
      bestseller: "Top-Seller",
      imageAlt: "Pizzakartons mit JM Trader Design in Größen von 24 bis 36 cm",
    },
    pizzaBoxes: {
      mini: {
        name: "Mini",
        use: "Snack-Pizza, Fladenbrot, Beilagen",
        finish: "Unbedruckt braun",
      },
      standard: {
        name: "Standard",
        use: "Klassische Pizza (Ø ca. 22–24 cm)",
        finish: "Braun oder bedruckt",
      },
      medium: {
        name: "Medium",
        use: "Mittlere Standardpizza (Ø 26 cm)",
        finish: "Braun oder bedruckt",
      },
      large: {
        name: "Large",
        use: "Große Pizza (Ø ca. 28 cm)",
        finish: "Gastro-Standard braun",
      },
      xl: {
        name: "XL",
        use: "Extragroße Einzelpizza",
        finish: "Braun",
      },
      xxl: {
        name: "XXL",
        use: "Jumbo-Pizza, Lahmacun",
        finish: "Braun oder weiß bedruckt",
      },
      super: {
        name: "Super",
        use: "Pizzeria-Spezialgröße",
        finish: "Braun, Italien-Motiv",
      },
      party: {
        name: "Party",
        use: "Party-Pizza, Sharing-Size",
        finish: "Unbedruckt braun",
      },
      family: {
        name: "Familie",
        use: "Familien- und Riesenpizza",
        finish: "Stabile Wellpappe, braun",
      },
      calzone: {
        name: "Calzone-Box",
        use: "Gefüllte Calzone, Baguettes",
        finish: "Hohe Stülpschachtel, braun",
      },
      slicePlate: {
        name: "Pappteller Dreieck",
        use: "Einzelnes Pizzastück to go",
        finish: "PE-beschichtet",
      },
    },
    menu: {
      title: "Menüboxen",
      text: "Klappbare Take-away-Boxen aus Bagasse (Zuckerrohrfaser) und Holzfaser. Weiß und unbedruckt.",
    },
    menuBoxes: {
      bagasse3Square: { name: "Bagasse-Menübox", detail: "Eckig, 3-geteilt" },
      bagasse2: { name: "Bagasse-Menübox", detail: "2-geteilt" },
      bagasse3: { name: "Bagasse-Menübox", detail: "3-geteilt" },
      bagasse1: { name: "Bagasse-Menübox", detail: "Ungeteilt" },
      woodFibre2: { name: "Holzfaser-Menübox", detail: "Eckig, 2-geteilt" },
    },
    branding: {
      title: "Ihre Marke Auf Jedem Karton",
      text: "Liefern Sie in Kraftbraun aus oder bringen Sie Ihr Logo auf den Deckel. Die Druckzone deckt Formate von 20 × 20 bis 41 × 41 cm ab.",
      imageAlt: "Pizzakarton mit JM Trader Design bedruckt",
      options: [
        {
          title: "Variante A: Vollflächiges Etikett",
          points: [
            "Flexible Auflagen für kurzfristige Einsätze",
            "Hochauflösende Aufkleber in Fotoqualität",
            "Kombinierbar mit unbedruckten Kraftkartons ab 100 Stück",
            "Farbecht auf weißem Trägermaterial",
          ],
        },
        {
          title: "Variante B: Industrieller Direktdruck",
          points: [
            "Flexo- oder Offsetdruck direkt auf die Wellpappe",
            "Flächendeckendes Motiv auf Deckel und Seitenlaschen",
            "Optimiert für 500 bis 100.000 Einheiten",
            "Lebensmittelzertifizierte, migrationsarme Druckfarben",
          ],
        },
      ],
    },
    materials: {
      title: "Material Und Entsorgung",
      items: [
        {
          label: "Material",
          value:
            "Stabile 1-wellige Wellpappe (Kraftliner oder Testliner) mit integrierten Dampfaustritts-Schlitzen",
        },
        {
          label: "Lebensmitteleignung",
          value:
            "Konform nach EU-Verordnung 1935/2004 und LFGB, geruchs- und geschmacksneutral",
        },
        {
          label: "Entsorgung",
          value:
            "Ohne Speisereste zu 100 % im Altpapier recycelbar. PE-beschichtete Dreiecksteller im Restmüll entsorgen.",
        },
      ],
    },
  },

  wholesale: {
    hero: {
      title: "Großhandel",
      text: "Von wenigen Kartons bis zur vollen Containerladung: So funktioniert die Bestellung bei JM Trader.",
    },
    steps: {
      title: "So Bestellen Sie",
      items: [
        {
          title: "Anfrage Senden",
          text: "Nennen Sie uns Sorten oder Formate, Mengen und Lieferadresse per WhatsApp, E-Mail oder Kontaktformular.",
        },
        {
          title: "Angebot Erhalten",
          text: "Wir bestätigen Verfügbarkeit, Preis und Liefertermin.",
        },
        {
          title: "Bestellung Bestätigen",
          text: "Sie geben das Angebot frei und wir reservieren die Ware für Sie.",
        },
        {
          title: "Lieferung Erhalten",
          text: "Ihre Ware kommt per Palette oder Container, bereit für Verkauf oder Einsatz.",
        },
      ],
    },
    customers: {
      title: "Wen Wir Beliefern",
      items: [
        {
          title: "Supermärkte Und Einzelhandel",
          text: "Regalfertige Jelly-Cup-Schalen in einheitlichem Design.",
        },
        {
          title: "Kioske Und Convenience-Stores",
          text: "Beliebte Sorten im Karton für Theke und Impulskauf.",
        },
        {
          title: "Großhandel Und Cash & Carry",
          text: "Paletten- und Containermengen für den Weitervertrieb.",
        },
        {
          title: "Restaurants Und Lieferdienste",
          text: "Pizza- und Menüboxen, unbedruckt oder mit Ihrem Branding.",
        },
      ],
    },
    faq: {
      title: "Häufige Fragen",
      items: [
        {
          question: "Welche Jelly-Cup-Sorten gibt es?",
          answer:
            "Alle 14 Jelly Jungle Sorten, von Erdbeere und Mango bis Minze, Rose und Vanille. Das komplette Sortiment finden Sie auf der Jelly-Cups-Seite.",
        },
        {
          question: "Wie sind die Jelly-Cups verpackt?",
          answer:
            "12 Becher pro Schale und 12 Schalen pro Karton, also 144 Becher pro Karton. Ein 20-Fuß-Container fasst 860 Kartons, ein 40-Fuß-Container 2.052.",
        },
        {
          question: "Sind die Jelly-Cups halal und vegetarisch?",
          answer:
            "Ja. Sie werden mit Carrageen statt tierischer Gelatine hergestellt, enthalten kein Schweinefett und sind halal sowie 100 % vegetarisch.",
        },
        {
          question: "Was ist die Mindestbestellmenge für Verpackungen?",
          answer:
            "Verpackungen bestellen Sie ab 100 Stück pro Format. Industrieller Direktdruck beginnt bei 500 Einheiten.",
        },
        {
          question: "Können Sie unser Logo auf die Kartons drucken?",
          answer:
            "Ja. Wählen Sie vollflächige Etiketten für kleine Auflagen oder Direktdruck für größere Mengen. Senden Sie uns Ihre Druckdaten mit der Anfrage.",
        },
        {
          question: "Wie gebe ich eine Bestellung auf?",
          answer:
            "Schicken Sie uns Produkte, Mengen und Lieferadresse per WhatsApp oder E-Mail oder nutzen Sie das Kontaktformular. Wir antworten mit einem Angebot.",
        },
      ],
    },
  },

  about: {
    hero: {
      title: "Über JM Trader",
      text: "Ein Handels-, Import- und Exportunternehmen der E4U Service UG.",
    },
    story: {
      title: "Unsere Geschichte",
      paragraphs: [
        "JM Trader entstand aus einer einfachen Idee: Unternehmen sollen verlässliche Produkte bekommen, ohne mehreren Lieferanten hinterherzulaufen. Wir beziehen direkt bei Herstellern, übernehmen Import und Lagerung selbst und beliefern unsere Kunden zu klaren Konditionen.",
        "Heute führen wir zwei Produktlinien: Jelly Jungle Cup-Jelly für Einzel- und Großhandel sowie Gastro-Verpackungen für Restaurants und Lieferdienste.",
      ],
      imageAlt:
        "JM Trader Banner: Allgemeiner Handel, Import und Export, globale Beschaffung, verlässliche Lieferung",
    },
    brand: {
      title: "Jelly Jungle",
      text: "Jelly Jungle Becher werden von der Jungle Trading Establishment im Libanon in einem FDA-registrierten Betrieb hergestellt und unter anderem nach Deutschland, in die Niederlande, nach Großbritannien, in die VAE, die USA und nach Australien exportiert. JM Trader bringt sie zu Kunden in Deutschland.",
      imageAlt: "Jelly Jungle Logo",
    },
  },

  catalogue: {
    hero: {
      title: "Katalog",
      text: "Laden Sie unsere Produktkataloge als PDF herunter, um sie offline anzusehen oder mit Ihrem Team zu teilen.",
    },
    items: {
      jelly: {
        title: "Jelly Jungle Sorten",
        text: "Flyer für alle 14 Sorten, Bechergröße, Verpackungseinheiten und Containerladungen.",
        meta: "PDF, 17 Seiten",
      },
      packaging: {
        title: "Gastro-Verpackungen",
        text: "Pizzakarton-Formate, Veredelungsoptionen und Materialspezifikationen.",
        meta: "PDF, 2 Seiten",
      },
    },
  },

  contact: {
    hero: {
      title: "Kontakt",
      text: "Fragen, Angebote oder Bestellungen: Erreichen Sie uns so, wie es Ihnen am besten passt.",
    },
    channels: {
      title: "Direkt Kontakt Aufnehmen",
      text: "Per WhatsApp erreichen Sie uns am schnellsten.",
    },
    form: {
      title: "Anfrage Senden",
      text: "Füllen Sie das Formular aus und senden Sie es per WhatsApp oder E-Mail. Auf dieser Website wird nichts gespeichert.",
      fields: {
        name: "Name",
        company: "Firma",
        email: "E-Mail",
        phone: "Telefon",
        interest: "Ich Interessiere Mich Für",
        quantity: "Menge",
        message: "Nachricht",
      },
      placeholders: {
        quantity: "z. B. 20 Kartons",
        message: "Sorten oder Formate, Lieferadresse, Zeitraum…",
      },
      optional: "optional",
      interests: {
        jellyCups: "Jelly-Cups",
        pizzaBoxes: "Pizzakartons",
        menuBoxes: "Menüboxen",
        other: "Etwas Anderes",
      },
      errors: {
        name: "Bitte geben Sie Ihren Namen ein.",
        message: "Bitte beschreiben Sie, was Sie benötigen.",
        email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      },
      sendWhatsApp: "Per WhatsApp Senden",
      sendEmail: "Per E-Mail Senden",
      emailSubject: "Anfrage über jmtrader.de",
      greeting: "Hallo JM Trader,",
    },
  },

  legal: {
    // Legal notice disabled for now; restore together with ROUTES.imprint and its route.
//     imprint: {
//       title: "Impressum",
//       intro: "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).",
//       company: {
//         heading: "Anbieter",
//         lines: [
//           "E4U Service UG | JM Trader",
//           "[Straße und Hausnummer]",
//           "[PLZ und Ort]",
//           "Deutschland",
//         ],
//       },
//       contactHeading: "Kontakt",
//       sections: [
//         {
//           heading: "Vertreten Durch",
//           paragraphs: ["[Name der Geschäftsführung]"],
//         },
//         {
//           heading: "Registereintrag",
//           paragraphs: ["[Registergericht], [HRB-Nummer]"],
//         },
//         {
//           heading: "Umsatzsteuer-Identifikationsnummer",
//           paragraphs: ["[USt-IdNr. gemäß § 27a UStG]"],
//         },
//         {
//           heading: "Verbraucherstreitbeilegung",
//           paragraphs: [
//             "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
//           ],
//         },
//       ],
//     },
    terms: {
      title: "Allgemeine Geschäftsbedingungen",
      intro:
        "Allgemeine Geschäftsbedingungen der E4U Service UG | JM Trader für Geschäftskunden.",
      sections: [
        {
          heading: "Geltungsbereich",
          paragraphs: [
            "Diese Bedingungen gelten für alle Angebote, Lieferungen und Leistungen der E4U Service UG | JM Trader („JM Trader“) gegenüber Unternehmern im Sinne von § 14 BGB, juristischen Personen des öffentlichen Rechts und öffentlich-rechtlichen Sondervermögen. Wir verkaufen nicht an Verbraucher.",
            "Abweichende oder ergänzende Bedingungen des Kunden gelten nur, wenn wir ihnen ausdrücklich schriftlich zugestimmt haben.",
          ],
        },
        {
          heading: "Angebot Und Vertragsschluss",
          paragraphs: [
            "Unsere Angebote auf dieser Website, in Katalogen und in Nachrichten sind freibleibend. Ein Vertrag kommt zustande, wenn wir eine Bestellung in Textform bestätigen (E-Mail oder WhatsApp genügt) oder die Ware ausliefern.",
          ],
        },
        {
          heading: "Preise Und Zahlung",
          paragraphs: [
            "Alle Preise sind Nettopreise in Euro zuzüglich gesetzlicher Umsatzsteuer. Sofern im Angebot oder in der Auftragsbestätigung nichts anderes angegeben ist, sind Rechnungen innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zahlbar.",
          ],
        },
        {
          heading: "Lieferung Und Gefahrübergang",
          paragraphs: [
            "Liefertermine sind unverbindlich, sofern sie nicht ausdrücklich als verbindlich vereinbart wurden. Teillieferungen sind zulässig, soweit sie dem Kunden zumutbar sind.",
            "Die Gefahr geht mit Übergabe der Ware an den Frachtführer auf den Kunden über, bei Lieferung durch uns selbst mit Übergabe an den Kunden.",
          ],
        },
        {
          heading: "Eigentumsvorbehalt",
          paragraphs: [
            "Die Ware bleibt bis zur vollständigen Bezahlung aller Forderungen aus der Geschäftsbeziehung unser Eigentum.",
          ],
        },
        {
          heading: "Untersuchungspflicht Und Mängel",
          paragraphs: [
            "Der Kunde hat die Ware unverzüglich nach Erhalt zu untersuchen und offensichtliche Mängel innerhalb von 7 Tagen, versteckte Mängel innerhalb von 7 Tagen nach Entdeckung in Textform anzuzeigen (§ 377 HGB).",
            "Bei mangelhafter Ware leisten wir nach unserer Wahl Nachbesserung, Ersatzlieferung oder Erstattung des Kaufpreises. Lebensmittel sind gemäß den Angaben auf der Verpackung zu lagern; Mängel durch unsachgemäße Lagerung sind ausgeschlossen.",
          ],
        },
        {
          heading: "Individuell Bedruckte Verpackungen",
          paragraphs: [
            "Bei bedruckten Verpackungen liefert der Kunde druckfertige Daten und bestätigt, dass er alle Rechte daran besitzt. Geringe Abweichungen in Farbe und Druckposition sind technisch unvermeidbar und stellen keinen Mangel dar. Individuell bedruckte Ware ist vom Umtausch ausgeschlossen.",
          ],
        },
        {
          heading: "Haftung",
          paragraphs: [
            "Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit. Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten, begrenzt auf den vertragstypischen, vorhersehbaren Schaden. Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.",
          ],
        },
        {
          heading: "Anwendbares Recht Und Gerichtsstand",
          paragraphs: [
            "Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG). Gerichtsstand für alle Streitigkeiten ist der Sitz der E4U Service UG, [Ort].",
          ],
        },
      ],
    },
    privacy: {
      title: "Datenschutzerklärung",
      intro:
        "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Erklärung beschreibt, welche Daten diese Website verarbeitet und warum.",
      sections: [
        {
          heading: "Verantwortlicher",
          paragraphs: [
            "E4U Service UG | JM Trader, [Anschrift]. E-Mail: info@jmtrader.de.",
          ],
        },
        {
          heading: "Hosting Und Server-Logfiles",
          paragraphs: [
            "Beim Besuch dieser Website verarbeitet unser Hosting-Anbieter automatisch technische Daten wie Ihre IP-Adresse, Datum und Uhrzeit des Abrufs, die aufgerufene Seite und Ihren Browsertyp. Das ist erforderlich, um die Website auszuliefern und sicher zu betreiben (Art. 6 Abs. 1 lit. f DSGVO). Die Logfiles werden nach kurzer Zeit gelöscht.",
          ],
        },
        {
          heading: "Kontaktaufnahme",
          paragraphs: [
            "Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, verarbeiten wir Ihre Angaben, um Ihre Anfrage zu beantworten (Art. 6 Abs. 1 lit. b und f DSGVO).",
            "Das Kontaktformular sendet keine Daten an unseren Server. Es öffnet Ihr E-Mail-Programm oder WhatsApp mit Ihrer vorausgefüllten Nachricht, und Sie entscheiden, ob Sie sie absenden. WhatsApp wird von der WhatsApp Ireland Ltd. betrieben; für darüber gesendete Nachrichten gilt deren Datenschutzerklärung.",
          ],
        },
        {
          heading: "Cookies Und Lokaler Speicher",
          paragraphs: [
            "Diese Website verwendet keine Cookies und keine Tracking-Tools. Ihre Sprachauswahl wird im lokalen Speicher Ihres Browsers abgelegt, damit die Seite beim nächsten Besuch in derselben Sprache öffnet. Sie können sie jederzeit in den Browsereinstellungen löschen.",
          ],
        },
        {
          heading: "Schriftarten",
          paragraphs: [
            "Schriftarten werden von unserem eigenen Server ausgeliefert. Es wird keine Verbindung zu externen Schriftanbietern aufgebaut.",
          ],
        },
        {
          heading: "Ihre Rechte",
          paragraphs: [
            "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten, auf Datenübertragbarkeit sowie auf Widerspruch gegen die Verarbeitung. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren.",
          ],
        },
      ],
    },
  },

  notFound: {
    title: "Diese Seite Gibt Es Nicht",
    text: "Der Link ist möglicherweise fehlerhaft oder die Seite wurde verschoben. Gehen Sie zurück zur Startseite oder sehen Sie sich unsere Produkte an.",
    cta: "Zur Startseite",
  },
};

export const content: Record<Language, Content> = { en, de };
