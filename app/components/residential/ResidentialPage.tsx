"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FigmaHeroImage, FigmaImage } from "../layout/FigmaImage";
import { FigmaDesktopNav } from "../layout/FigmaDesktopNav";
import { PageClosing } from "../layout/PageClosing";
import { ResidentialPageMobile } from "../layout/MobilePages";
import { useLanguage } from "../../providers/LanguageProvider";

const PAGE_WIDTH = 1920;
const CTA_TOP = 6234;
const PAGE_HEIGHT = CTA_TOP;

const residentialValueLayout = [
  { left: 138, top: 1414.579, iconSrc: "/figma/residential/grupo-806.svg", iconWidth: 125, iconHeight: 102, iconTopOffset: 5.4, textGap: 13 },
  { left: 743, top: 1408, iconSrc: "/figma/imgGrupo18.svg", iconWidth: 147, iconHeight: 125, textGap: 18 },
  { left: 1340, top: 1416.605, iconSrc: "/figma/imgGrupo20.svg", iconWidth: 108, iconHeight: 108, textGap: 21 },
];

function ValueColumn({
  left,
  top,
  iconSrc,
  iconWidth,
  iconHeight,
  iconTopOffset = 0,
  textGap = 13,
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
  title: string;
  lines: string[];
}) {
  return (
    <div className="absolute z-10 flex" style={{ left, top, width: 460 }}>
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

/** Figma node 1:765 — Residential page */
export function ResidentialPage() {
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
        <ResidentialPageMobile />
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
            <FigmaHeroImage src="/figma/residential/hero-bg.png" priority />
            <div className="absolute inset-0 z-[1] bg-[#1a2b3c]/45" aria-hidden />
          </div>

          {/* Nav */}
          <FigmaDesktopNav activePath="/residential" />

          {/* Hero copy — node 1:774 Welcome + 1:779 Trazado 2016 */}
          <div
            className="absolute z-10 flex flex-col items-start"
            style={{ left: 138, top: 299, width: 722 }}
          >
            <h1 className="m-0 text-[72px] font-bold leading-[87px] text-white">
              {t.residentialPage.heroLine1}
              <br />
              {t.residentialPage.heroLine2}
            </h1>
            <svg
              width={76.5}
              height={5}
              viewBox="0 0 81.5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-[22px] shrink-0"
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

          {/* About — node 1:789 */}
          <div
            className="absolute z-10 flex flex-col"
            style={{ left: 138, top: 835, width: 729 }}
          >
            {t.residentialPage.introLines.map((line) => (
              <p
                key={line}
                className={`m-0 text-[65px] leading-[80px] ${
                  t.residentialPage.introAccentLines.includes(line)
                    ? "font-bold text-[#ff832a]"
                    : "font-normal text-[#1c1c1c]"
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="absolute z-10" style={{ left: 1056, top: 1012, width: 706 }}>
            <div
              className="rounded-full bg-[#ff832a]"
              style={{ width: 76.5, height: 5 }}
              aria-hidden
            />
            <p className="mt-4 m-0 text-[20px] leading-[32px] text-black">
              {t.residentialPage.introBody}
            </p>
          </div>

          {/* Values — node 1:807 */}
          {t.residentialPage.values.map((value, index) => {
            const layout = residentialValueLayout[index];
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

          {/* Portfolio header — nodes 1:855–1:859 */}
          <p
            className="absolute z-10 m-0 w-full text-center text-[55px] font-bold leading-none text-[#ff832a]"
            style={{ top: 1718 }}
          >
            {t.residentialPage.portfolioTitle}
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[50px] leading-none text-[#1c1c1c]"
            style={{ top: 1790 }}
          >
            {t.residentialPage.portfolioSubtitle}
            <span className="font-bold">{t.residentialPage.portfolioSubtitleBold}</span>.
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[20px] leading-normal text-black"
            style={{ top: 1873 }}
          >
            {t.residentialPage.portfolioDescription}
          </p>
          <div
            className="absolute z-10 rounded-full bg-[#ff832a]"
            style={{ left: 921, top: 1938, width: 64, height: 5 }}
            aria-hidden
          />

          {/* Gallery — Figma positions */}
          <FigmaImage
            src="/figma/residential/gallery-tall-left.png"
            alt={t.residentialPage.galleryAlt}
            left={-7}
            top={1991}
            width={1063}
            height={1113}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-whatsapp-1.png"
            alt={t.residentialPage.galleryAlt}
            left={1092}
            top={1992}
            width={835}
            height={557}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-rect.png"
            alt={t.residentialPage.galleryAlt}
            left={1092}
            top={2579}
            width={835}
            height={525}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-fullwidth.png"
            alt={t.residentialPage.galleryAlt}
            left={0}
            top={3142}
            width={1920}
            height={1047}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-images7.png"
            alt={t.residentialPage.galleryAlt}
            left={0}
            top={4227}
            width={530}
            height={557}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-images6.png"
            alt={t.residentialPage.galleryAlt}
            left={559}
            top={4227}
            width={1366}
            height={1113}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-whatsapp-4.png"
            alt={t.residentialPage.galleryAlt}
            left={0}
            top={4815}
            width={530}
            height={525}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-image4.png"
            alt={t.residentialPage.galleryAlt}
            left={0}
            top={5378}
            width={966}
            height={752}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-images5.png"
            alt={t.residentialPage.galleryAlt}
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
