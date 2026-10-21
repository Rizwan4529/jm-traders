import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

/** Current language, its content (`t`) and a setter. */
export const useContent = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useContent must be used within LanguageProvider");
  }
  return context;
};
