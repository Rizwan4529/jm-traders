import { useContent } from "../../i18n/useContent";
import { LANGUAGES } from "../../i18n/languages";
import { cx } from "../../lib/cx";

type LanguageSwitchProps = {
  inverted?: boolean;
  className?: string;
};

const LanguageSwitch = ({ inverted = false, className }: LanguageSwitchProps) => {
  const { t, language, setLanguage } = useContent();

  return (
    <div
      role="group"
      aria-label={t.a11y.language}
      className={cx(
        "inline-flex rounded-md border p-0.5",
        inverted ? "border-white/25" : "border-border",
        className,
      )}
    >
      {LANGUAGES.map((code) => {
        const active = code === language;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            title={t.languageNames[code]}
            aria-label={t.languageNames[code]}
            aria-pressed={active}
            onClick={() => setLanguage(code)}
            className={cx(
              "h-8 min-w-10 rounded px-2 text-xs font-semibold uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent",
              active
                ? "bg-accent text-brand"
                : inverted
                  ? "text-white/75 hover:text-white"
                  : "text-text-secondary hover:text-brand",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitch;
