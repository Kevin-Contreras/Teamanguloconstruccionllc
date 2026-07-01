"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FigmaHeroImage, FigmaImage } from "../layout/FigmaImage";
import { FigmaDesktopNav } from "../layout/FigmaDesktopNav";
import { PageClosing } from "../layout/PageClosing";
import { AboutPageMobile } from "../layout/MobilePages";
import { useLanguage } from "../../providers/LanguageProvider";
import { figmaFont } from "../../utils/figmaLocale";

const PAGE_WIDTH = 1920;
const CTA_TOP = 5608;
const PAGE_HEIGHT = CTA_TOP;

const aboutValueLayout = [
  { left: 138, top: 2075, iconSrc: "/figma/imgGrupo14.svg", iconWidth: 125, iconHeight: 124, textGap: 14, width: 460 },
  { left: 717, top: 2075, iconSrc: "/figma/about/icon-specialty.svg", iconWidth: 125, iconHeight: 124, textGap: 14, width: 460 },
  { left: 1351, top: 2071, iconSrc: "/figma/about/icon-process.svg", iconWidth: 113, iconHeight: 109, textGap: 12, width: 441 },
  { left: 138, top: 2351, iconSrc: "/figma/about/icon-integrity.svg", iconWidth: 123, iconHeight: 123, textGap: 14, width: 460 },
  { left: 716, top: 2339, iconSrc: "/figma/about/icon-commitment.svg", iconWidth: 125, iconHeight: 124, textGap: 14, width: 460 },
  { left: 1371, top: 2347, iconSrc: "/figma/about/icon-safety.svg", iconWidth: 84, iconHeight: 117, textGap: 12, width: 441 },
];

function CtaArrow() {
  return (
    <svg width={14} height={15} viewBox="0 0 14.174 14.571" fill="none" aria-hidden>
      <path
        d="M10.786 8.20002H0V6.37502H10.786L5.825 1.27502L7.087 1.95503e-05L14.174 7.28502L7.087 14.571L5.825 13.3L10.786 8.20002Z"
        fill="white"
      />
    </svg>
  );
}

function OrangeLine({ width = 76.5 }: { width?: number }) {
  return (
    <svg
      width={width}
      height={5}
      viewBox="0 0 81.5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block shrink-0"
      aria-hidden
    >
      <path d="M2.5 2.5H79" stroke="#FF832A" strokeWidth={5} strokeLinecap="round" />
    </svg>
  );
}

function WorkButton({ href, label, top }: { href: string; label: string; top: number }) {
  return (
    <Link
      href={href}
      className="absolute z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[100px] bg-[#f07b05] px-5 text-[16px] font-bold text-white hover:opacity-90"
      style={{ left: 823, top, minWidth: 274, height: 60 }}
    >
      {label}
      <CtaArrow />
    </Link>
  );
}

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
  const { locale } = useLanguage();
  const titleSize = figmaFont(25, locale);
  const bodySize = figmaFont(20, locale);
  const bodyLeading = figmaFont(32, locale);

  return (
    <div className="absolute z-10 flex" style={{ left, top, width: locale === "es" ? width + 40 : width }}>
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
        <p className="m-0 font-bold leading-normal text-black" style={{ fontSize: titleSize }}>
          {title}
        </p>
        <p
          className="mt-1 m-0 text-black"
          style={{ fontSize: bodySize, lineHeight: `${bodyLeading}px` }}
        >
          {lines.join(" ")}
        </p>
      </div>
    </div>
  );
}

/** Figma node 1:1196 — About page */
export function AboutPage() {
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

  return (
    <>
      <div className="lg:hidden">
        <AboutPageMobile />
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
          {/* Hero — nodes 1:1200–1:1211 */}
          <div className="absolute inset-x-0 top-0 z-0 h-[703px] overflow-hidden">
            <FigmaHeroImage src="/figma/about/hero-bg.png" priority />
            <div className="absolute inset-0 z-[1] bg-[#1a2b3c]/45" aria-hidden />
          </div>

          {/* Nav */}
          <FigmaDesktopNav activePath="/about" />

          {/* Hero copy — node 1:1205 Welcome */}
          <div
            className="absolute z-10 flex flex-col items-start"
            style={{ left: 138, top: 288, width: locale === "es" ? 950 : 850 }}
          >
            <h1
              className="m-0 font-bold text-white"
              style={{
                fontSize: figmaFont(72, locale),
                lineHeight: `${figmaFont(87, locale)}px`,
              }}
            >
              {t.about.heroTitle}
              <br />
              <span className="text-[#ff832a]">{t.about.heroAccent}</span>
            </h1>
            <div className="mt-[33px]">
              <OrangeLine />
            </div>
          </div>

          <div
            className="absolute z-10 flex flex-col"
            style={{ left: 138, top: 1020, width: locale === "es" ? 780 : 670 }}
          >
            <p
              className="m-0 font-bold leading-normal text-[#ff832a]"
              style={{ fontSize: figmaFont(72, locale) }}
            >
              {t.about.philosophyTitle}
            </p>
            <div className="mt-6">
              <p
                className="m-0 leading-normal text-[#1c1c1c]"
                style={{ fontSize: figmaFont(50, locale) }}
              >
                {t.about.philosophyHeading}
              </p>
              <p
                className="m-0 font-bold leading-normal text-[#1c1c1c]"
                style={{ fontSize: figmaFont(50, locale) }}
              >
                {t.about.philosophyHeadingBold}
              </p>
            </div>
            <div className="mt-6">
              <OrangeLine />
            </div>
            <p
              className="m-0 mt-6 text-black"
              style={{
                fontSize: figmaFont(20, locale),
                lineHeight: `${figmaFont(32, locale)}px`,
              }}
            >
              {t.about.philosophyBody}
            </p>
          </div>
          <FigmaImage
            src="/figma/about/philosophy-house.png"
            alt={t.about.philosophyImageAlt}
            left={960}
            top={856}
            width={1051}
            height={800}
            className="z-0"
          />

          {/* The Angulo difference — nodes 1:1225–1:1229 */}
          <p
            className="absolute z-10 m-0 w-full text-center text-[50px] leading-normal text-[#1c1c1c]"
            style={{ top: 1849 }}
          >
            {t.about.differenceTitle}{" "}
            <span className="font-bold text-[#ff832a]">{t.about.differenceAccent}</span>
          </p>
          <div
            className="absolute z-10 rounded-full bg-[#ff832a]"
            style={{ left: 921, top: 1931, width: 64, height: 5 }}
            aria-hidden
          />
          <p
            className="absolute z-10 m-0 w-full text-center text-[20px] leading-normal text-black"
            style={{ top: 1961, paddingLeft: 247, paddingRight: 247 }}
          >
            {t.about.differenceIntro}
          </p>

          {/* Values 3×2 — nodes 1:1230–1:1334 */}
          {t.about.values.map((value, index) => {
            const layout = aboutValueLayout[index];
            return (
              <ValueColumn
                key={value.title}
                left={layout.left}
                top={layout.top}
                iconSrc={layout.iconSrc}
                iconWidth={layout.iconWidth}
                iconHeight={layout.iconHeight}
                textGap={layout.textGap}
                width={layout.width}
                title={value.title}
                lines={[value.body]}
              />
            );
          })}

          {/* Column dividers — nodes 1:1331–1:1334 */}
          {[2102, 2383].map((top) => (
            <div key={top}>
              <div
                className="absolute z-10 bg-[#d9d9d9]"
                style={{ left: 645.5, top, width: 1, height: 78.5 }}
                aria-hidden
              />
              <div
                className="absolute z-10 bg-[#d9d9d9]"
                style={{ left: 1301.5, top, width: 1, height: 78.5 }}
                aria-hidden
              />
            </div>
          ))}

          {/* Residential CTA — nodes 1:1335–1:1377 */}
          <p
            className="absolute z-10 m-0 w-full text-center text-[40px] font-bold leading-normal text-black"
            style={{ top: 2649 }}
          >
            {t.about.residentialHeading}{" "}
            <span className="text-[#ff832a]">{t.about.residentialAccent}</span>
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[40px] leading-normal text-black"
            style={{ top: 2794 }}
          >
            {t.about.residentialSubtext}
          </p>
          <WorkButton href="/residential" label={t.about.residentialButton} top={2889} />
          <div
            className="absolute z-0 overflow-hidden"
            style={{ left: 0, top: 3044, width: 1920, height: 704 }}
          >
            <FigmaImage
              src="/figma/about/gallery-residential-1.png"
              alt="Residential exterior project"
              left={-35.5}
              top={0}
              width={639}
              height={704}
            />
            <FigmaImage
              src="/figma/about/gallery-residential-2.png"
              alt="Residential exterior project"
              left={623}
              top={0}
              width={639}
              height={704}
            />
            <FigmaImage
              src="/figma/about/gallery-residential-3.png"
              alt="Residential exterior project"
              left={1281}
              top={0}
              width={639}
              height={704}
            />
          </div>

          {/* Commercial CTA — nodes 1:1336–1:1378 */}
          <p
            className="absolute z-10 m-0 w-full text-center text-[40px] font-bold leading-normal text-black"
            style={{ top: 3904, paddingLeft: 247, paddingRight: 247 }}
          >
            {t.about.commercialHeading}{" "}
            <span className="text-[#ff832a]">{t.about.commercialAccent}</span>
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[40px] leading-normal text-black"
            style={{ top: 4049 }}
          >
            {t.about.commercialSubtext}
          </p>
          <WorkButton href="/commercial" label={t.about.commercialButton} top={4144} />
          <div
            className="absolute z-0 overflow-hidden"
            style={{ left: 0, top: 4299, width: 1920, height: 704 }}
          >
            <FigmaImage
              src="/figma/about/gallery-commercial-1.png"
              alt="Commercial exterior project"
              left={-35.5}
              top={0}
              width={639}
              height={704}
            />
            <FigmaImage
              src="/figma/about/gallery-commercial-2.png"
              alt="Commercial exterior project"
              left={623}
              top={0}
              width={639}
              height={704}
            />
            <FigmaImage
              src="/figma/about/gallery-commercial-3.png"
              alt="Commercial exterior project"
              left={1281}
              top={0}
              width={639}
              height={704}
            />
          </div>

          {/* Our Story — nodes 1:1379–1:1387 */}
          <p
            className="absolute z-10 m-0 w-full text-center text-[72px] font-bold leading-normal text-[#ff832a]"
            style={{ top: 5097 }}
          >
            {t.about.storyTitle}
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[50px] leading-normal text-[#1c1c1c]"
            style={{ top: 5186 }}
          >
            {t.about.storyHeading}{" "}
            <span className="font-bold">{t.about.storyHeadingBold}</span>
          </p>
          <p
            className="absolute z-10 m-0 text-center text-[20px] leading-[32px] text-black"
            style={{ left: 405, top: 5272, width: 1110 }}
          >
            {t.about.storyBody}
          </p>
          <div
            className="absolute z-10 rounded-full bg-[#ff832a]"
            style={{ left: 138, top: 5501, width: 1644, height: 5 }}
            aria-hidden
          />
        </div>
      </div>
    </div>
      <PageClosing />
    </>
  );
}
