"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FigmaHeroImage, FigmaImage } from "../layout/FigmaImage";
import { FigmaDesktopNav } from "../layout/FigmaDesktopNav";
import { PageClosing } from "../layout/PageClosing";
import { ServicesPageMobile } from "../layout/MobilePages";
import { SERVICE_SECTION_SLUGS } from "../../constants/serviceSections";
import { useLanguage } from "../../providers/LanguageProvider";
import { figmaFont } from "../../utils/figmaLocale";

const PAGE_WIDTH = 1920;
const CTA_TOP = 7346;
const PAGE_HEIGHT = CTA_TOP;

function ServiceTextBlock({
  left,
  top,
  width,
  number,
  title,
  caption,
  body,
  tagline,
}: {
  left: number;
  top: number;
  width: number;
  number: string;
  title: React.ReactNode;
  caption: string;
  body: string;
  tagline: string;
}) {
  const { locale } = useLanguage();

  return (
    <div
      className="absolute z-10 flex flex-col"
      style={{ left, top, width: locale === "es" ? width + 60 : width }}
    >
      <span
        className="leading-none text-[#ff832a]"
        style={{ fontSize: figmaFont(55, locale) }}
      >
        {number}
      </span>
      <div
        className="mt-[14px] rounded-full bg-[#ff832a]"
        style={{ width: 64, height: 5 }}
        aria-hidden
      />
      <h2
        className="mt-[6px] m-0 font-normal leading-tight text-black"
        style={{ fontSize: figmaFont(50, locale) }}
      >
        {title}
      </h2>
      <p
        className="mt-[10px] m-0 font-bold leading-normal text-black"
        style={{ fontSize: figmaFont(20, locale) }}
      >
        {caption}
      </p>
      <p
        className="mt-[20px] m-0 text-black"
        style={{ fontSize: figmaFont(20, locale), lineHeight: `${figmaFont(32, locale)}px` }}
      >
        {body}
      </p>
      <p
        className="mt-[28px] m-0 font-bold leading-normal text-black"
        style={{ fontSize: figmaFont(20, locale) }}
      >
        {tagline}
      </p>
    </div>
  );
}

function ServiceAnchor({ slug, top }: { slug: string; top: number }) {
  return (
    <span
      data-service-section={slug}
      className="pointer-events-none absolute block scroll-mt-28"
      style={{ left: 0, top, width: 1, height: 1 }}
      aria-hidden
    />
  );
}

function scrollToServiceSection() {
  const slug = window.location.hash.replace(/^#/, "");
  if (!slug) return;

  requestAnimationFrame(() => {
    const anchors = document.querySelectorAll<HTMLElement>(`[data-service-section="${slug}"]`);
    const target = Array.from(anchors).find((el) => el.offsetParent !== null);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

/** Figma node 1:503 — Services page */
export function ServicesPage() {
  const { t, locale } = useLanguage();
  const items = t.servicesPage.items;
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

  useEffect(() => {
    scrollToServiceSection();
    window.addEventListener("hashchange", scrollToServiceSection);
    return () => window.removeEventListener("hashchange", scrollToServiceSection);
  }, []);

  return (
    <>
      <div className="lg:hidden">
        <ServicesPageMobile />
      </div>
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
          {/* ── Hero ── */}
          <div className="absolute inset-x-0 top-0 z-0 h-[707px] overflow-hidden">
            <FigmaHeroImage src="/figma/services/services-hero-bg.png" priority />
            <div className="absolute inset-0 z-[1] bg-[#1a2b3c]/55" aria-hidden />
          </div>

          {/* Nav */}
          <FigmaDesktopNav activePath="/services" />

          <h1
            className="absolute z-10 m-0 text-[72px] font-bold leading-none text-white"
            style={{ left: 139, top: 331, width: 456 }}
          >
            {t.servicesPage.heroTitle}{" "}
            <span className="text-[#ff832a]">{t.servicesPage.heroAccent}</span>
          </h1>
          <div
            className="absolute z-10 rounded-full bg-[#ff832a]"
            style={{ left: 139, top: 436, width: 76.5, height: 5 }}
            aria-hidden
          />
          <p
            className="absolute z-10 m-0 text-[20px] leading-normal text-[#e8e8e8]"
            style={{ left: 138, top: 472, width: 465 }}
          >
            {t.servicesPage.heroSubtitle}
          </p>

          {/* ── Service 01 ── */}
          <ServiceAnchor slug={SERVICE_SECTION_SLUGS.demolitionRemoval} top={965} />
          <FigmaImage
            src="/figma/services/services-side-house.png"
            alt={items[0].imageAlt}
            left={869}
            top={808}
            width={1051}
            height={800}
            className="z-0"
          />
          <ServiceTextBlock
            left={138}
            top={965}
            width={620}
            number={items[0].number}
            title={
              <>
                {items[0].title}{" "}
                <span className="font-bold text-[#ff832a]">{items[0].titleAccent}</span>
              </>
            }
            caption={items[0].caption}
            body={items[0].body}
            tagline={items[0].tagline}
          />

          <FigmaImage
            src="/figma/services/services-fullwidth-1.png"
            alt=""
            left={0}
            top={1763}
            width={1920}
            height={800}
            className="z-0"
            parallax
          />
          <div
            className="absolute z-0 w-px bg-[#d9d9d9]"
            style={{ left: 1654, top: 1918, height: 78.5 }}
            aria-hidden
          />

          {/* ── Service 02 ── */}
          <ServiceAnchor slug={SERVICE_SECTION_SLUGS.structuralRepair} top={2702} />
          <FigmaImage
            src="/figma/services/services-trim-house.png"
            alt={items[1].imageAlt}
            left={960}
            top={2677}
            width={822}
            height={445}
            className="z-0"
          />
          <ServiceTextBlock
            left={138}
            top={2702}
            width={740}
            number={items[1].number}
            title={
              <>
                {items[1].title}{" "}
                <span className="font-bold text-[#ff832a]">{items[1].titleAccent}</span>
              </>
            }
            caption={items[1].caption}
            body={items[1].body}
            tagline={items[1].tagline}
          />

          {/* ── Service 03 ── */}
          <ServiceAnchor slug={SERVICE_SECTION_SLUGS.hardieVinylSiding} top={3436} />
          <FigmaImage
            src="/figma/services/services-neighborhood.png"
            alt={items[2].imageAlt}
            left={0}
            top={3287}
            width={1056}
            height={800}
            className="z-0"
          />
          <ServiceTextBlock
            left={1172}
            top={3436}
            width={610}
            number={items[2].number}
            title={
              <>
                {items[2].title}{" "}
                <span className="font-bold text-[#ff832a]">{items[2].titleAccent}</span>
              </>
            }
            caption={items[2].caption}
            body={items[2].body}
            tagline={items[2].tagline}
          />

          <FigmaImage
            src="/figma/services/services-images6.png"
            alt=""
            left={0}
            top={4142}
            width={1920}
            height={800}
            className="z-0"
            parallax
          />
          <div
            className="absolute z-0 w-px bg-[#d9d9d9]"
            style={{ left: 1654, top: 4267, height: 78.5 }}
            aria-hidden
          />

          {/* ── Service 04 ── */}
          <ServiceAnchor slug={SERVICE_SECTION_SLUGS.pvcTrim} top={5065} />
          <FigmaImage
            src="/figma/services/services-images7.png"
            alt={items[3].imageAlt}
            left={138}
            top={5038}
            width={822}
            height={445}
            className="z-0"
          />
          <ServiceTextBlock
            left={1056}
            top={5065}
            width={726}
            number={items[3].number}
            title={
              <>
                {items[3].title}{" "}
                <span className="font-bold text-[#ff832a]">{items[3].titleAccent}</span>
              </>
            }
            caption={items[3].caption}
            body={items[3].body}
            tagline={items[3].tagline}
          />

          {/* ── Service 05 ── */}
          <ServiceAnchor slug={SERVICE_SECTION_SLUGS.metalRoofing} top={5776} />
          <FigmaImage
            src="/figma/services/services-demolition.png"
            alt={items[4].imageAlt}
            left={869}
            top={5634}
            width={1051}
            height={800}
            className="z-0"
          />
          <ServiceTextBlock
            left={138}
            top={5776}
            width={620}
            number={items[4].number}
            title={
              <>
                {items[4].title}{" "}
                <span className="font-bold text-[#ff832a]">{items[4].titleAccent}</span>
              </>
            }
            caption={items[4].caption}
            body={items[4].body}
            tagline={items[4].tagline}
          />

          {/* Orange banner */}
          <div
            className="absolute z-0 bg-[#ff832a]"
            style={{ left: -12, top: 6581, width: 1944, height: 737 }}
          >
            <FigmaImage
              src="/figma/logorecuadro.png"
              alt=""
              left={1117}
              top={0}
              width={827}
              height={737}
              className="pointer-events-none opacity-20"
            />
            <div
              className="absolute rounded-full bg-white"
              style={{ left: 175, top: 198, width: 76.5, height: 5 }}
              aria-hidden
            />
            <h2
              className="absolute m-0 font-bold leading-none text-white"
              style={{
                left: 175,
                top: 206,
                width: locale === "es" ? 980 : 907,
                fontSize: figmaFont(72, locale),
              }}
            >
              <span className="block">{t.servicesPage.bannerLine1}</span>
              <span className="mt-[13px] block">{t.servicesPage.bannerLine2}</span>
              <span className="mt-[13px] block">{t.servicesPage.bannerLine3}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
      <PageClosing />
    </>
  );
}
