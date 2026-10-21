import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { content } from "../content/content";
import { LanguageContext } from "./LanguageContext";
import { detectLanguage, saveLanguage, type Language } from "./languages";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    saveLanguage(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: content[language] }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};
