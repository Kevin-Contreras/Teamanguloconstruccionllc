"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../providers/LanguageProvider";
import { FigmaImage } from "../layout/FigmaImage";
import {
  SERVICE_SECTION_SLUGS,
  serviceSectionHref,
} from "../../constants/serviceSections";

const SECTION_WIDTH = 1920;
const SECTION_HEIGHT = 1253;

const serviceLayout = [
  { slug: SERVICE_SECTION_SLUGS.demolitionRemoval, titleTop: 127.041, descTop: 210.041, arrowTop: 145, lineTop: 288, arrow: "/figma/imgFrame2147239083.svg" },
  { slug: SERVICE_SECTION_SLUGS.structuralRepair, titleTop: 336.96, descTop: 418.96, arrowTop: 355, lineTop: 501.747, arrow: "/figma/imgFrame2147239084.svg" },
  { slug: SERVICE_SECTION_SLUGS.hardieVinylSiding, titleTop: 550.707, descTop: 632.707, arrowTop: 551.707, lineTop: 710.666, arrow: "/figma/imgFrame2147239084.svg" },
  { slug: SERVICE_SECTION_SLUGS.pvcTrim, titleTop: 759.626, descTop: 843.138, arrowTop: 760.626, lineTop: 921, arrow: "/figma/imgFrame2147239084.svg" },
  { slug: SERVICE_SECTION_SLUGS.metalRoofing, titleTop: 984.374, descTop: 1068.894, arrowTop: 971, arrow: "/figma/imgFrame2147239085.svg" },
];

/** Figma nodes 1:213 + 1:363 — Services */
export function ServicesSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  
  const services = t.home.services.items.map((item, i) => ({
    ...serviceLayout[i],
    title: item.title,
    desc: item.description,
  }));

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
    <section id="services" className="relative overflow-hidden bg-black text-white">
      <div className="px-6 py-14 lg:hidden">
        <p className="m-0 text-[36px] font-bold leading-tight sm:text-[48px]">
          {t.home.services.discover}
          <br />
          {t.home.services.our} <span className="text-[#ff832a]">{t.home.services.exterior}</span>
          <br />
          <span className="text-[#ff832a]">{t.home.services.solutions}</span>
        </p>
        <p className="mt-6 max-w-[520px] text-[16px] leading-relaxed sm:text-[18px]">
          {t.home.services.description}
        </p>
        <ul className="mt-10 space-y-6 border-t border-white/20 pt-8">
          {services.map((service) => (
            <li key={service.slug} className="border-b border-white/20 pb-6 last:border-0">
              <Link href={serviceSectionHref(service.slug)} className="group block">
                <p className="m-0 text-[22px] font-medium transition-colors group-hover:text-[#ff832a] sm:text-[28px]">
                  {service.title}
                </p>
                <p className="mt-2 text-[15px] text-white/80 sm:text-[16px]">
                  {service.desc}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/services"
          className="mt-8 inline-flex h-[52px] items-center justify-center rounded-[100px] bg-[#f07b05] px-8 text-[16px] font-bold text-white hover:opacity-90"
        >
          {t.common.viewAllServices}
        </Link>
      </div>

      <div className="hidden w-full lg:block lg:px-0">
        <div
          ref={containerRef}
          className="relative w-full"
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
            {/* Decorative logo — node 1:363 @ -27,647 */}
            <FigmaImage
              src="/figma/logorecuadro.png"
              alt=""
              left={-27}
              top={647}
              width={750}
              height={601}
              className="pointer-events-none opacity-[0.17]"
            />

            {/* Left heading — nodes 1:216–1:218 */}
            <p
              className="absolute m-0 font-bold leading-none text-white"
              style={{ left: 174, top: 108.684, fontSize: 80 }}
            >
              {t.home.services.discover}
            </p>
            <p
              className="absolute m-0 font-bold leading-none text-white"
              style={{ left: 174, top: 198.684, fontSize: 80 }}
            >
              {t.home.services.our} <span className="text-[#ff832a]">{t.home.services.exterior}</span>
            </p>
            <p
              className="absolute m-0 font-bold leading-none text-[#ff832a]"
              style={{ left: 174, top: 288.684, fontSize: 80 }}
            >
              {t.home.services.solutions}
            </p>

            {/* Description — node 1:224 @ 174,447.667 */}
            <p
              className="absolute m-0 font-normal leading-normal text-white"
              style={{ left: 174, top: 447.667, width: 531, fontSize: 28 }}
            >
              {t.home.services.description}
            </p>

            {/* Service list — nodes 1:225+ */}
            {services.map((service) => {
              const rowHeight =
                (service.lineTop ?? service.descTop + 80) - service.titleTop;

              return (
                <div key={service.title}>
                  <Link
                    href={serviceSectionHref(service.slug)}
                    className="group absolute z-10 block"
                    style={{
                      left: 870,
                      top: service.titleTop,
                      width: 870,
                      height: rowHeight,
                    }}
                  >
                    <p className="absolute left-0 top-0 m-0 text-[55px] font-normal leading-none text-white transition-colors group-hover:text-[#ff832a]">
                      {service.title}
                    </p>
                    <p
                      className="absolute left-0 m-0 text-[20px] font-normal leading-normal text-white"
                      style={{ top: service.descTop - service.titleTop }}
                    >
                      {service.desc}
                    </p>
                    <Image
                      src={service.arrow}
                      alt=""
                      width={75}
                      height={76}
                      className="absolute"
                      style={{
                        left: 795,
                        top: service.arrowTop - service.titleTop,
                        width: 75,
                        height: 76,
                      }}
                      aria-hidden
                    />
                  </Link>
                  {"lineTop" in service && service.lineTop !== undefined && (
                    <Image
                      src="/figma/imgLine31.svg"
                      alt=""
                      width={880}
                      height={1}
                      className="absolute h-px"
                      style={{ left: 870, top: service.lineTop, width: 880 }}
                      aria-hidden
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
