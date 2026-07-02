"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../providers/LanguageProvider";
import { orangePillBtnStatic, langToggleHover } from "../../utils/buttonClasses";

/** Figma node 1:24 — Top Navigation (canvas 1920px) */
export function TopNavigation() {
  const { t, locale, toggleLocale } = useLanguage();

  return (
    <header className="absolute left-0 top-0 z-20 h-[155px] w-full" data-no-animate>
      <Image
        src="/figma/imgTopNavigation.svg"
        alt=""
        width={1614}
        height={79}
        className="absolute pointer-events-none"
        style={{ left: 140, top: 66, width: 1614, height: 79 }}
        aria-hidden
      />

      <Link href="/" className="absolute z-10" style={{ left: 116, top: 43 }}>
        <Image
          src="/figma/imgEditableLogo01.png"
          alt="Team Angulo Construction LLC"
          width={280}
          height={102}
          className="block object-contain"
          style={{ width: 280, height: 102 }}
          priority
        />
      </Link>

      <Link
        href="/services"
        className="absolute font-['Montserrat'] text-[16px] font-normal leading-none text-white transition-colors hover:text-[#ff832a]"
        style={{ left: 1013, top: 84 }}
      >
        {t.nav.services}
      </Link>

      <Link
        href="/residential"
        className="absolute text-[16px] font-normal leading-none text-white transition-colors hover:text-[#ff832a]"
        style={{ left: 1140, top: 85 }}
      >
        {t.nav.residential}
      </Link>

      <Link
        href="/commercial"
        className="absolute text-[17px] font-normal leading-none text-white transition-colors hover:text-[#ff832a]"
        style={{ left: 1274, top: 82 }}
      >
        {t.nav.commercial}
      </Link>

      <Link
        href="/about"
        className="absolute text-[17px] font-normal leading-none text-white transition-colors hover:text-[#ff832a]"
        style={{ left: 1425, top: 82 }}
      >
        {t.nav.aboutUs}
      </Link>

      <Link
        href="/contact"
        className={`${orangePillBtnStatic} absolute flex items-center justify-center rounded-[100px] text-[17px] font-bold leading-none`}
        style={{ left: 1538, top: 69, width: 154, height: 48 }}
      >
        {t.nav.contact}
      </Link>

      <button
        type="button"
        className={`group absolute flex cursor-pointer items-center justify-center overflow-hidden rounded-[100px] ${langToggleHover}`}
        style={{ left: 1730, top: 69, width: 50, height: 48 }}
        aria-label={locale === "en" ? t.nav.switchToSpanish : t.nav.switchToEnglish}
        onClick={toggleLocale}
      >
        <Image
          src="/figma/imgRectangulo18.svg"
          alt=""
          width={50}
          height={48}
          className="pointer-events-none absolute inset-0 h-full w-full transition-opacity group-hover:opacity-0"
        />
        <span className="relative z-10 text-[17px] font-bold leading-none text-white transition-colors group-hover:text-[#ff832a]">
          {locale === "en" ? t.nav.langEs : t.nav.langEn}
        </span>
      </button>
    </header>
  );
}
