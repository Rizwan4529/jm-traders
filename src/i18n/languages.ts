export const LANGUAGES = ["de", "en"] as const;

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "de";

const STORAGE_KEY = "jm-trader-language";

const isLanguage = (value: unknown): value is Language =>
  LANGUAGES.includes(value as Language);

/** Saved choice first, then the browser language, then German. */
export const detectLanguage = (): Language => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // Storage can be blocked (private mode); fall through to detection.
  }

  const browser = window.navigator.language?.slice(0, 2);
  return isLanguage(browser) ? browser : DEFAULT_LANGUAGE;
};

export const saveLanguage = (language: Language) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Not persisting is fine; the choice still applies for this visit.
  }
};

export const formatNumber = (language: Language, value: number) =>
  new Intl.NumberFormat(language).format(value);

/** `[24, 24, 4]` → "24 × 24 × 4 cm" (decimal comma in German). */
export const formatDimensions = (
  language: Language,
  dimensions: readonly number[],
  unit = "cm",
) => `${dimensions.map((d) => formatNumber(language, d)).join(" × ")} ${unit}`;
