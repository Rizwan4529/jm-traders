import type { IconType } from "react-icons";
import { FaEnvelope, FaGlobe, FaPhone, FaWhatsapp } from "react-icons/fa6";

export const CONTACT_EMAIL = "info@jmtrader.de";
export const CONTACT_WEBSITE = "www.jmtrader.de";
export const CONTACT_WHATSAPP_DISPLAY = "+49 170 4253024";
export const CONTACT_WHATSAPP_NUMBER = "491704253024";
export const CONTACT_PHONE_DISPLAY = "+49 1577 3456786";
export const CONTACT_PHONE_TEL = "tel:+4915773456786";

export const whatsappLink = (message?: string) =>
  `https://wa.me/${CONTACT_WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const mailtoLink = (subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${CONTACT_EMAIL}${query ? `?${query}` : ""}`;
};

export type ContactChannel = "whatsapp" | "phone" | "email" | "web";

export type ContactItem = {
  channel: ContactChannel;
  value: string;
  href: string;
  Icon: IconType;
};

export const contactItems: ContactItem[] = [
  {
    channel: "whatsapp",
    value: CONTACT_WHATSAPP_DISPLAY,
    href: whatsappLink(),
    Icon: FaWhatsapp,
  },
  {
    channel: "phone",
    value: CONTACT_PHONE_DISPLAY,
    href: CONTACT_PHONE_TEL,
    Icon: FaPhone,
  },
  {
    channel: "email",
    value: CONTACT_EMAIL,
    href: mailtoLink(),
    Icon: FaEnvelope,
  },
  {
    channel: "web",
    value: CONTACT_WEBSITE,
    href: `https://${CONTACT_WEBSITE}`,
    Icon: FaGlobe,
  },
];
