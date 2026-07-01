"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FigmaHeroImage } from "../layout/FigmaImage";
import { TopNavigation } from "../layout/TopNavigation";
import { PageClosing } from "../layout/PageClosing";
import { ParallaxBannerImage } from "../layout/ParallaxBannerImage";
import { SiteHeader } from "../layout/SiteLayout";
import { useLanguage } from "../../providers/LanguageProvider";
import { figmaFont } from "../../utils/figmaLocale";

const PAGE_WIDTH = 1920;
const HERO_HEIGHT = 703;
const PAGE_HEIGHT = HERO_HEIGHT;

function HomeArrow() {
  return (
    <svg width={14} height={15} viewBox="0 0 14.174 14.571" fill="none" aria-hidden>
      <path
        d="M10.786 8.20002H0V6.37502H10.786L5.825 1.27502L7.087 1.95503e-05L14.174 7.28502L7.087 14.571L5.825 13.3L10.786 8.20002Z"
        fill="white"
      />
    </svg>
  );
}

function OrangeLine({ width = 76 }: { width?: number }) {
  return (
    <Image
      src="/figma/contact/accent-line.svg"
      alt=""
      width={width}
      height={5}
      className="block"
      aria-hidden
    />
  );
}

function NotFoundContent({
  className = "",
  titleClassName = "text-[32px] sm:text-[48px]",
  descriptionClassName = "text-[16px] sm:text-[18px]",
  codeClassName = "text-[88px] sm:text-[120px]",
}: {
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  codeClassName?: string;
}) {
  const { t } = useLanguage();

  return (
    <div className={`flex flex-col items-center text-center text-white ${className}`}>
      <p className={`m-0 font-bold leading-none text-[#ff832a] ${codeClassName}`}>404</p>
      <div className="mt-6">
        <OrangeLine />
      </div>
      <h1 className={`m-0 mt-8 max-w-[640px] font-bold leading-tight ${titleClassName}`}>
        {t.notFound.title}
      </h1>
      <p className={`m-0 mt-5 max-w-[520px] leading-relaxed text-white/90 ${descriptionClassName}`}>
        {t.notFound.description}
      </p>
      <Link
        href="/"
        className="locale-pill-btn mt-10 inline-flex h-[60px] items-center justify-center gap-2 rounded-[100px] bg-[#f07b05] px-8 text-[16px] font-bold text-white hover:opacity-90"
      >
        {t.notFound.backHome}
        <HomeArrow />
      </Link>
    </div>
  );
}

function NotFoundPageMobile() {
  return (
    <div className="relative min-h-screen bg-[#1a2b3c]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ParallaxBannerImage src="/figma/about/hero-bg.png" priority />
        <div className="absolute inset-0 z-[1] bg-[#1a2b3c]/55" aria-hidden />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader variant="overlay" />
        <section
          data-animate-hero
          className="flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-32 sm:pt-36"
        >
          <NotFoundContent />
        </section>
      </div>
    </div>
  );
}

function NotFoundPageDesktop() {
  const { t, locale } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = containerRef.current?.clientWidth ?? PAGE_WIDTH;
      setScale(width / PAGE_WIDTH);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const titleSize = figmaFont(48, locale);
  const descriptionSize = figmaFont(18, locale);
  const codeSize = figmaFont(120, locale);

  return (
    <div className="hidden w-full overflow-hidden bg-white lg:block">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ height: PAGE_HEIGHT * scale }}
      >
        <div
          className="absolute left-0 top-0 origin-top-left bg-white"
          style={{
            width: PAGE_WIDTH,
            height: PAGE_HEIGHT,
            transform: `scale(${scale})`,
          }}
        >
          <div className="absolute inset-x-0 top-0 z-0 h-[703px] overflow-hidden">
            <FigmaHeroImage src="/figma/about/hero-bg.png" priority />
            <div className="absolute inset-0 z-[1] bg-[#1a2b3c]/45" aria-hidden />
          </div>

          <TopNavigation />

          <div
            className="absolute z-10 flex flex-col items-center text-center text-white"
            data-animate-hero
            style={{ left: 360, top: 240, width: 1200 }}
          >
            <p
              className="m-0 font-bold leading-none text-[#ff832a]"
              style={{ fontSize: codeSize }}
            >
              404
            </p>
            <div className="mt-8">
              <OrangeLine width={76} />
            </div>
            <h1
              className="m-0 mt-8 font-bold leading-tight"
              style={{ fontSize: titleSize, lineHeight: `${figmaFont(58, locale)}px` }}
            >
              {t.notFound.title}
            </h1>
            <p
              className="m-0 mt-5 max-w-[720px] text-white/90"
              style={{ fontSize: descriptionSize, lineHeight: `${figmaFont(28, locale)}px` }}
            >
              {t.notFound.description}
            </p>
            <Link
              href="/"
              className="locale-pill-btn mt-10 inline-flex h-[60px] items-center justify-center gap-2 rounded-[100px] bg-[#f07b05] px-8 text-[16px] font-bold text-white hover:opacity-90"
            >
              {t.notFound.backHome}
              <HomeArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <>
      <div className="lg:hidden">
        <NotFoundPageMobile />
      </div>
      <NotFoundPageDesktop />
      <PageClosing />
    </>
  );
}
