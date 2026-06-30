"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SECTION_WIDTH = 1920;
const SECTION_HEIGHT = 1253;

const services = [
  {
    title: "Demolition & Removal",
    titleTop: 127.041,
    desc: "Safe removal of existing exterior materials",
    descTop: 210.041,
    arrowTop: 145,
    lineTop: 288,
    arrow: "/figma/imgFrame2147239083.svg",
  },
  {
    title: "Structural Repair",
    titleTop: 336.96,
    desc: "Damaged framing fixed before anything goes up",
    descTop: 418.96,
    arrowTop: 355,
    lineTop: 501.747,
    arrow: "/figma/imgFrame2147239084.svg",
  },
  {
    title: "Hardie & Vinyl Siding",
    titleTop: 550.707,
    desc: "Specialists in fiber cement & vinyl installation",
    descTop: 632.707,
    arrowTop: 551.707,
    lineTop: 710.666,
    arrow: "/figma/imgFrame2147239084.svg",
  },
  {
    title: "PVC Trim",
    titleTop: 759.626,
    desc: "Clean, polished finish on every detail",
    descTop: 843.138,
    arrowTop: 760.626,
    lineTop: 921,
    arrow: "/figma/imgFrame2147239084.svg",
  },
  {
    title: "Metal Roofing",
    titleTop: 984.374,
    desc: "Standing seam installation for any property",
    descTop: 1068.894,
    arrowTop: 971,
    arrow: "/figma/imgFrame2147239085.svg",
  },
];

/** Figma nodes 1:213 + 1:363 — Services */
export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = containerRef.current?.clientWidth ?? SECTION_WIDTH;
      setScale(Math.min(width / SECTION_WIDTH, 1));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section id="services" className="relative overflow-hidden bg-black text-white">
      <div className="px-6 py-14 lg:hidden">
        <p className="m-0 text-[36px] font-bold leading-tight sm:text-[48px]">
          Discover
          <br />
          Our <span className="text-[#ff832a]">Exterior</span>
          <br />
          <span className="text-[#ff832a]">Solutions</span>
        </p>
        <p className="mt-6 max-w-[520px] text-[16px] leading-relaxed sm:text-[18px]">
          From residential homes to commercial properties, we deliver premium exterior
          remodeling tailored to every need.
        </p>
        <ul className="mt-10 space-y-6 border-t border-white/20 pt-8">
          {services.map((service) => (
            <li key={service.title} className="border-b border-white/20 pb-6 last:border-0">
              <p className="m-0 text-[22px] font-medium sm:text-[28px]">{service.title}</p>
              <p className="mt-2 text-[15px] text-white/80 sm:text-[16px]">{service.desc}</p>
            </li>
          ))}
        </ul>
        <Link
          href="/services"
          className="mt-8 inline-flex h-[52px] items-center justify-center rounded-[100px] bg-[#f07b05] px-8 text-[16px] font-bold text-white hover:opacity-90"
        >
          VIEW ALL SERVICES
        </Link>
      </div>

      <div className="mx-auto hidden w-full max-w-[1920px] lg:block lg:px-0">
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
            <Image
              src="/figma/logorecuadro.png"
              alt=""
              width={808}
              height={737}
              className="pointer-events-none absolute object-cover opacity-[0.17]"
              style={{ left: -27, top: 647, width: 750, height: 601 }}
              aria-hidden
            />

            {/* Left heading — nodes 1:216–1:218 */}
            <p
              className="absolute m-0 font-bold leading-none text-white"
              style={{ left: 174, top: 108.684, fontSize: 80 }}
            >
              Discover
            </p>
            <p
              className="absolute m-0 font-bold leading-none text-white"
              style={{ left: 174, top: 198.684, fontSize: 80 }}
            >
              Our <span className="text-[#ff832a]">Exterior</span>
            </p>
            <p
              className="absolute m-0 font-bold leading-none text-[#ff832a]"
              style={{ left: 174, top: 288.684, fontSize: 80 }}
            >
              Solutions
            </p>

            {/* Description — node 1:224 @ 174,447.667 */}
            <p
              className="absolute m-0 font-normal leading-normal text-white"
              style={{ left: 174, top: 447.667, width: 531, fontSize: 28 }}
            >
              From residential homes to commercial properties, we deliver premium
              exterior remodeling tailored to every need.
            </p>

            {/* Service list — nodes 1:225+ */}
            {services.map((service) => (
              <div key={service.title}>
                <p
                  className="absolute m-0 font-normal leading-none text-white"
                  style={{ left: 870, top: service.titleTop, fontSize: 55 }}
                >
                  {service.title}
                </p>
                <p
                  className="absolute m-0 font-normal leading-normal text-white"
                  style={{ left: 870, top: service.descTop, fontSize: 20 }}
                >
                  {service.desc}
                </p>
                <Image
                  src={service.arrow}
                  alt=""
                  width={75}
                  height={76}
                  className="absolute"
                  style={{ left: 1665, top: service.arrowTop, width: 75, height: 76 }}
                />
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
