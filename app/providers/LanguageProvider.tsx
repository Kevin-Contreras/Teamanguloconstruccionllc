"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { es } from "../i18n/locales/es";
import { en } from "../i18n/locales/en";
import { SERVICE_SECTION_SLUGS } from "../constants/serviceSections";
import type { Locale, Translations } from "../i18n/types";

const STORAGE_KEY = "team-angulo-locale";

type LanguageContextValue = {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const activeLocale = mounted ? locale : "en";

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = activeLocale;
  }, [activeLocale, mounted]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next = current === "en" ? "es" : "en";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const t = activeLocale === "es" ? es : en;

  const value = useMemo(
    () => ({ locale: activeLocale, t, setLocale, toggleLocale }),
    [activeLocale, t, setLocale, toggleLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function useNavLinks() {
  const { t } = useLanguage();
  return [
    { href: "/services", label: t.nav.services, font: "montserrat" as const },
    { href: "/residential", label: t.nav.residential },
    { href: "/commercial", label: t.nav.commercial },
    { href: "/about", label: t.nav.aboutUs },
  ];
}

export function useServiceNames() {
  return useFooterServices().map((service) => service.label);
}

export function useFooterServices() {
  const { t } = useLanguage();
  const s = t.serviceNames;
  return [
    { label: s.demolition, slug: SERVICE_SECTION_SLUGS.demolitionRemoval },
    { label: s.structural, slug: SERVICE_SECTION_SLUGS.structuralRepair },
    { label: s.hardieVinyl, slug: SERVICE_SECTION_SLUGS.hardieVinylSiding },
    { label: s.pvcTrim, slug: SERVICE_SECTION_SLUGS.pvcTrim },
    { label: s.metalRoofing, slug: SERVICE_SECTION_SLUGS.metalRoofing },
  ];
}
