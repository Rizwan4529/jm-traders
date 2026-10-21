import { createContext } from "react";
import type { Content } from "../content/content";
import type { Language } from "./languages";

export type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Content;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
