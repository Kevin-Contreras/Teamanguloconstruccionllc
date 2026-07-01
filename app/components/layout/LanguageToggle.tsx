"use client";

import { useLanguage } from "../../providers/LanguageProvider";

type LanguageToggleProps = {
  className?: string;
  tabIndex?: number;
  onClick?: () => void;
};

export function LanguageToggle({ className, tabIndex, onClick }: LanguageToggleProps) {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      className={className}
      aria-label={locale === "en" ? t.nav.switchToSpanish : t.nav.switchToEnglish}
      tabIndex={tabIndex}
      onClick={() => {
        toggleLocale();
        onClick?.();
      }}
    >
      {locale === "en" ? t.nav.langEs : t.nav.langEn}
    </button>
  );
}
