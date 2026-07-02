"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../providers/LanguageProvider";
import { orangeOutlineBtn } from "../../utils/buttonClasses";
import { FigmaImage } from "../layout/FigmaImage";

const SECTION_WIDTH = 1975;
const SECTION_HEIGHT = 1781;

function PillArrow() {
  return (
    <svg
      width={14}
      height={15}
      viewBox="0 0 14.174 14.571"
      fill="none"
      aria-hidden
    >
      <path
        d="M10.786 8.20002H0V6.37502H10.786L5.825 1.27502L7.087 1.95503e-05L14.174 7.28502L7.087 14.571L5.825 13.3L10.786 8.20002Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Figma node 1:274 — Residential + Commercial */
export function ResidentialCommercialSection() {
  const { t } = useLanguage();
  const rc = t.home.residentialCommercial;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = containerRef.current?.clientWidth ?? SECTION_WIDTH;
      setScale(width / SECTION_WIDTH);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="bg-white">
      <section id="residential" className="overflow-hidden bg-white lg:hidden">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/figma/imgContemporaryHouseWithShingleDetailAndBlueSk20260326104821Utc.png"
            alt={rc.residentialImageAlt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="px-6 py-10">
          <p className="m-0 text-[18px] text-black">{rc.residentialLabel}</p>
          <Image src="/figma/imgLinea8.svg" alt="" width={64} height={5} className="mt-3" aria-hidden />
          <h2 className="m-0 mt-3 text-[40px] font-bold leading-none text-[#ff832a] sm:text-[52px]">
            {rc.residentialTitle}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-black sm:text-[18px]">
            {rc.residentialBodyMobile}
          </p>
          <Link
            href="/residential"
            className={`${orangeOutlineBtn} mt-6 inline-flex h-[52px] items-center justify-center gap-2 rounded-[100px] px-6 text-[15px] font-bold sm:px-8 sm:text-[16px]`}
          >
            {t.common.seeResidentialProjects}
            <PillArrow />
          </Link>
        </div>
      </section>

      <section id="commercial" className="overflow-hidden bg-white pb-14 lg:hidden">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/figma/imgIndustrialFactoryFacadeWithSteelMashes20260325224915Utc.png"
            alt={rc.commercialImageAlt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="px-6 py-10">
          <p className="m-0 text-[18px] text-black">{rc.commercialLabel}</p>
          <Image src="/figma/imgLinea8.svg" alt="" width={64} height={5} className="mt-3" aria-hidden />
          <h2 className="m-0 mt-3 text-[40px] font-bold leading-none text-[#ff832a] sm:text-[52px]">
            {rc.commercialTitle}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-black sm:text-[18px]">
            {rc.commercialBodyMobile}
          </p>
          <Link
            href="/commercial"
            className={`${orangeOutlineBtn} mt-6 inline-flex h-[52px] items-center justify-center gap-2 rounded-[100px] px-6 text-[15px] font-bold sm:px-8 sm:text-[16px]`}
          >
            {t.common.seeCommercialProjects}
            <PillArrow />
          </Link>
        </div>
      </section>

      {/* Residential — node 1:275+ */}
      <section className="hidden overflow-hidden bg-white lg:block">
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden"
          style={{ height: SECTION_HEIGHT * scale }}
        >
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{
              width: SECTION_WIDTH,
              height: SECTION_HEIGHT,
              transform: `scale(${scale})`,
            }}
          >
            {/* Residential image — node 1:300 @ 901,0 1074×800 */}
            <FigmaImage
              src="/figma/imgContemporaryHouseWithShingleDetailAndBlueSk20260326104821Utc.png"
              alt={rc.residentialImageAlt}
              left={901}
              top={0}
              width={1074}
              height={800}
            />

            {/* Label — node 1:275 @ 205,230 */}
            <p
              className="absolute m-0 text-[20px] leading-normal text-black"
              style={{ left: 205, top: 230 }}
            >
              {rc.residentialLabel}
            </p>

            {/* Orange line — node 1:276 @ 208,275 */}
            <Image
              src="/figma/imgLinea8.svg"
              alt=""
              width={64}
              height={5}
              className="absolute"
              style={{ left: 208, top: 275, width: 64, height: 5 }}
              aria-hidden
            />

            {/* Title — node 1:278 @ 205,282 */}
            <h2
              className="absolute m-0 font-bold leading-none text-[#ff832a]"
              style={{ left: 205, top: 282, fontSize: 72 }}
            >
              {rc.residentialTitle}
            </h2>

            {/* Body — nodes 1:279–1:283 */}
            <p
              className="absolute m-0 text-[20px] leading-[32px] text-black"
              style={{ left: 205, top: 391, width: 571 }}
            >
              {rc.residentialBodyDesktop}
            </p>

            {/* Button — node 1:285 @ 205,583 317×60 */}
            <Link
              href="/residential"
              className={`${orangeOutlineBtn} absolute inline-flex items-center justify-center gap-2 rounded-[100px] text-[16px] font-bold`}
              style={{ left: 205, top: 583, width: 317, height: 60 }}
            >
              {t.common.seeResidentialProjects}
              <PillArrow />
            </Link>

            {/* Commercial image — node 1:328 @ 0,981 1077×800 */}
            <FigmaImage
              src="/figma/imgIndustrialFactoryFacadeWithSteelMashes20260325224915Utc.png"
              alt={rc.commercialImageAlt}
              left={0}
              top={981}
              width={1077}
              height={800}
            />

            {/* Commercial label — node 1:302 @ 1176,1219 */}
            <p
              className="absolute m-0 text-[20px] leading-normal text-black"
              style={{ left: 1176, top: 1219 }}
            >
              {rc.commercialLabel}
            </p>

            {/* Orange line — node 1:303 @ 1179,1264 */}
            <Image
              src="/figma/imgLinea8.svg"
              alt=""
              width={64}
              height={5}
              className="absolute"
              style={{ left: 1179, top: 1264, width: 64, height: 5 }}
              aria-hidden
            />

            {/* Title — node 1:305 @ 1176,1271 */}
            <h2
              id="commercial"
              className="absolute m-0 font-bold leading-none text-[#ff832a]"
              style={{ left: 1176, top: 1271, fontSize: 72 }}
            >
              {rc.commercialTitle}
            </h2>

            {/* Body — nodes 1:306–1:310 */}
            <p
              className="absolute m-0 text-[20px] leading-[32px] text-black"
              style={{ left: 1176, top: 1382, width: 635 }}
            >
              {rc.commercialBodyDesktop}
            </p>

            {/* Button — node 1:312 @ 1176,1572 330×60 */}
            <Link
              href="/commercial"
              className={`${orangeOutlineBtn} absolute inline-flex items-center justify-center gap-2 rounded-[100px] text-[16px] font-bold`}
              style={{ left: 1176, top: 1572, width: 330, height: 60 }}
            >
              {t.common.seeCommercialProjects}
              <PillArrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
