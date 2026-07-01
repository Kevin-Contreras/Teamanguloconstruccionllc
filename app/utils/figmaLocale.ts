import type { Locale } from "../i18n/types";

const FONT_SCALE: Record<Locale, number> = {
  en: 1,
  es: 0.88,
};

export function figmaFont(size: number, locale: Locale) {
  return Math.round(size * FONT_SCALE[locale]);
}

export function figmaLineHeight(size: number, locale: Locale) {
  return locale === "es" ? Math.round(size * 1.12) : size;
}

export function localeExtra(locale: Locale, extra: number) {
  return locale === "es" ? extra : 0;
}
