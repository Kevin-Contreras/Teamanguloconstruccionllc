"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../providers/LanguageProvider";

export function FigmaDesktopNav({ activePath }: { activePath?: string }) {
  const { t, locale, toggleLocale } = useLanguage();

  const navLinks = [
    { href: "/services", label: t.nav.services, left: 1015, top: 84, montserrat: true, bold: activePath === "/services" },
    { href: "/residential", label: t.nav.residential, left: 1141, top: 85, montserrat: false, bold: activePath === "/residential" },
    { href: "/commercial", label: t.nav.commercial, left: 1275, top: 82, montserrat: false, bold: activePath === "/commercial" },
    { href: "/about", label: t.nav.aboutUs, left: 1426, top: 82, montserrat: false, bold: activePath === "/about" },
  ];

  return (
    <>
      <Image
        src="/figma/imgTopNavigation.svg"
        alt=""
        width={1614}
        height={79}
        className="absolute z-20"
        style={{ left: 142, top: 66, width: 1614, height: 79 }}
      />
      <Link href="/" className="absolute z-20" style={{ left: 118, top: 43 }}>
        <Image
          src="/figma/imgEditableLogo10.png"
          alt="Team Angulo"
          width={306}
          height={112}
          className="block"
          style={{ width: 306, height: 112 }}
          priority
        />
      </Link>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`locale-nav-link absolute z-20 text-white hover:opacity-80 ${
            link.montserrat ? "font-['Montserrat']" : ""
          } ${link.bold ? "font-bold" : "font-normal"}`}
          style={{ left: link.left, top: link.top, fontSize: locale === "es" ? 14 : 16 }}
        >
          {link.label}
        </Link>
      ))}
      <Link
        href="/contact"
        className="absolute z-20 flex items-center justify-center hover:opacity-90"
        style={{ left: 1539, top: 69, width: 154, height: 48 }}
      >
        <Image
          src="/figma/imgRectangulo5.svg"
          alt=""
          width={154}
          height={48}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
        <span className="relative z-10 text-[17px] font-bold text-white">{t.nav.contact}</span>
      </Link>
      <button
        type="button"
        className="absolute z-20 flex cursor-pointer items-center justify-center hover:opacity-90"
        style={{ left: 1731, top: 69, width: 50, height: 48 }}
        aria-label={locale === "en" ? t.nav.switchToSpanish : t.nav.switchToEnglish}
        onClick={toggleLocale}
      >
        <Image
          src="/figma/imgRectangulo18.svg"
          alt=""
          width={50}
          height={48}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
        <span className="relative z-10 text-[17px] font-bold text-white">
          {locale === "en" ? t.nav.langEs : t.nav.langEn}
        </span>
      </button>
    </>
  );
}
