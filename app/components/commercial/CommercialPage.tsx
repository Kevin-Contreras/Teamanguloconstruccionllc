"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FigmaHeroImage, FigmaImage } from "../layout/FigmaImage";
import { FigmaDesktopNav } from "../layout/FigmaDesktopNav";
import { PageClosing } from "../layout/PageClosing";
import { CommercialPageMobile } from "../layout/MobilePages";
import { useLanguage } from "../../providers/LanguageProvider";

const PAGE_WIDTH = 1920;
const CTA_TOP = 6235;
const PAGE_HEIGHT = CTA_TOP;

const commercialValueLayout = [
  { left: 148, top: 1414.579, iconSrc: "/figma/commercial/icon-minimal-disruption.svg", iconWidth: 114, iconHeight: 114, textGap: 14, width: 410 },
  { left: 754, top: 1408, iconSrc: "/figma/commercial/icon-on-schedule.svg", iconWidth: 111, iconHeight: 111, iconTopOffset: 4, textGap: 19, width: 468 },
  { left: 1325, top: 1408, iconSrc: "/figma/commercial/icon-clean-job-site.svg", iconWidth: 132, iconHeight: 125, textGap: 12, width: 441 },
];

function ValueColumn({
  left,
  top,
  iconSrc,
  iconWidth,
  iconHeight,
  iconTopOffset = 0,
  textGap = 13,
  width = 460,
  title,
  lines,
}: {
  left: number;
  top: number;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  iconTopOffset?: number;
  textGap?: number;
  width?: number;
  title: string;
  lines: string[];
}) {
  return (
    <div className="absolute z-10 flex" style={{ left, top, width }}>
      <Image
        src={iconSrc}
        alt=""
        width={iconWidth}
        height={iconHeight}
        className="shrink-0 object-contain"
        style={{ width: iconWidth, height: iconHeight, marginTop: iconTopOffset }}
        aria-hidden
      />
      <div className="min-w-0" style={{ marginLeft: textGap }}>
        <p className="m-0 text-[25px] font-bold leading-normal text-black">{title}</p>
        <p className="mt-1 m-0 text-[20px] leading-[32px] text-black">
          {lines.join(" ")}
        </p>
      </div>
    </div>
  );
}

/** Figma node 1:980 — Commercial page */
export function CommercialPage() {
  const { t } = useLanguage();
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

  return (
    <>
      <div className="lg:hidden">
        <CommercialPageMobile />
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
          {/* Hero */}
          <div className="absolute inset-x-0 top-0 z-0 h-[703px] overflow-hidden">
            <FigmaHeroImage src="/figma/commercial/hero-bg.png" priority />
            <div className="absolute inset-0 z-[1] bg-[#1a2b3c]/45" aria-hidden />
          </div>

          {/* Nav */}
          <FigmaDesktopNav activePath="/commercial" />

          {/* Hero copy — node 1:989 Welcome + 1:995 Trazado 2016 */}
          <div
            className="absolute z-10 flex flex-col items-start"
            style={{ left: 138, top: 256, width: 785 }}
          >
            <h1 className="m-0 text-[72px] font-bold leading-[87px] text-white">
              {t.commercialPage.heroLine1}
              <br />
              {t.commercialPage.heroLine2}
              <br />
              {t.commercialPage.heroLine3}
            </h1>
            <svg
              width={76.5}
              height={5}
              viewBox="0 0 81.5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-[33px] shrink-0"
              aria-hidden
            >
              <path
                d="M2.5 2.5H79"
                stroke="#FF832A"
                strokeWidth={5}
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* About — node 1:1002 */}
          <div
            className="absolute z-10 flex flex-col"
            style={{ left: 138, top: 835, width: 751 }}
          >
            {t.commercialPage.introLines.map((line) => (
              <p
                key={line}
                className={`m-0 text-[65px] leading-[80px] ${
                  t.commercialPage.introAccentLines.includes(line)
                    ? "font-bold text-[#ff832a]"
                    : "font-normal text-[#1c1c1c]"
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="absolute z-10" style={{ left: 1055, top: 1058, width: 703 }}>
            <svg
              width={76.5}
              height={5}
              viewBox="0 0 81.5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block shrink-0"
              aria-hidden
            >
              <path
                d="M2.5 2.5H79"
                stroke="#FF832A"
                strokeWidth={5}
                strokeLinecap="round"
              />
            </svg>
            <p className="mt-4 m-0 text-[20px] leading-[32px] text-black">
              {t.commercialPage.introBody}
            </p>
          </div>

          {/* Values — node 1:1019 */}
          {t.commercialPage.values.map((value, index) => {
            const layout = commercialValueLayout[index];
            return (
              <ValueColumn
                key={value.title}
                left={layout.left}
                top={layout.top}
                iconSrc={layout.iconSrc}
                iconWidth={layout.iconWidth}
                iconHeight={layout.iconHeight}
                iconTopOffset={layout.iconTopOffset}
                textGap={layout.textGap}
                width={layout.width}
                title={value.title}
                lines={[value.body]}
              />
            );
          })}
          <div
            className="absolute z-10 w-px bg-[#d9d9d9]"
            style={{ left: 673, top: 1428, height: 78.5 }}
            aria-hidden
          />
          <div
            className="absolute z-10 w-px bg-[#d9d9d9]"
            style={{ left: 1287, top: 1428, height: 78.5 }}
            aria-hidden
          />

          {/* Portfolio header — nodes 1:1070–1:1074 */}
          <p
            className="absolute z-10 m-0 w-full text-center text-[55px] font-bold leading-none text-[#ff832a]"
            style={{ top: 1718 }}
          >
            {t.commercialPage.portfolioTitle}
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[50px] leading-none text-[#1c1c1c]"
            style={{ top: 1790 }}
          >
            {t.commercialPage.portfolioSubtitle}
            <span className="font-bold">{t.commercialPage.portfolioSubtitleBold}</span>.
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[20px] leading-normal text-black"
            style={{ top: 1872 }}
          >
            {t.commercialPage.portfolioDescription}
          </p>
          <div
            className="absolute z-10 rounded-full bg-[#ff832a]"
            style={{ left: 945, top: 1932, width: 64, height: 5 }}
            aria-hidden
          />

          {/* Gallery — Figma positions */}
          <FigmaImage
            src="/figma/commercial/gallery-images22.png"
            alt={t.commercialPage.galleryAlt}
            left={0}
            top={2043}
            width={1920}
            height={1047}
            className="z-0"
          />
          <div
            className="absolute z-0 w-px bg-[#d9d9d9]"
            style={{ left: 1654, top: 1952, height: 78.5 }}
            aria-hidden
          />
          <FigmaImage
            src="/figma/commercial/gallery-tall-left.png"
            alt={t.commercialPage.galleryAlt}
            left={0}
            top={3121}
            width={1063}
            height={1113}
            className="z-0"
          />
          <FigmaImage
            src="/figma/commercial/gallery-top-right.png"
            alt={t.commercialPage.galleryAlt}
            left={1099}
            top={3122}
            width={835}
            height={557}
            className="z-0"
          />
          <FigmaImage
            src="/figma/commercial/gallery-mid-right.png"
            alt={t.commercialPage.galleryAlt}
            left={1099}
            top={3709}
            width={835}
            height={525}
            className="z-0"
          />
          <FigmaImage
            src="/figma/commercial/gallery-fullwidth-2.png"
            alt={t.commercialPage.galleryAlt}
            left={0}
            top={4265}
            width={1920}
            height={1047}
            className="z-0"
          />
          <div
            className="absolute z-0 w-px bg-[#d9d9d9]"
            style={{ left: 1654, top: 4267, height: 78.5 }}
            aria-hidden
          />
          <FigmaImage
            src="/figma/commercial/gallery-chicago.png"
            alt={t.commercialPage.galleryAlt}
            left={0}
            top={5378}
            width={966}
            height={752}
            className="z-0"
          />
          <FigmaImage
            src="/figma/commercial/gallery-factory.png"
            alt={t.commercialPage.galleryAlt}
            left={1000}
            top={5378}
            width={932}
            height={752}
            className="z-0"
          />

        </div>
      </div>
    </div>
      <PageClosing />
    </>
  );
}
