"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CommercialPageMobile } from "../layout/MobilePages";

const PAGE_WIDTH = 1920;
const CTA_TOP = 6235;
const CTA_HEIGHT = 420;
const FOOTER_TOP = CTA_TOP + CTA_HEIGHT;
const PAGE_HEIGHT = FOOTER_TOP + 463;

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = containerRef.current?.clientWidth ?? PAGE_WIDTH;
      setScale(Math.min(width / PAGE_WIDTH, 1));
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
        className="relative mx-auto w-full max-w-[1920px] overflow-hidden"
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
            <Image
              src="/figma/commercial/hero-bg.png"
              alt=""
              width={1919}
              height={700}
              className="absolute object-cover"
              style={{ left: -4, top: 0, width: 1919, height: 700 }}
              priority
            />
            <div className="absolute inset-0 bg-[#1a2b3c]/45" aria-hidden />
          </div>

          {/* Nav */}
          <Image
            src="/figma/imgTopNavigation.svg"
            alt=""
            width={1614}
            height={79}
            className="absolute z-20"
            style={{ left: 141, top: 66, width: 1614, height: 79 }}
          />
          <Link href="/" className="absolute z-20" style={{ left: 117, top: 43 }}>
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
          <Link
            href="/services"
            className="absolute z-20 font-['Montserrat'] text-[16px] font-normal text-white hover:opacity-80"
            style={{ left: 1015, top: 84 }}
          >
            Services
          </Link>
          <Link
            href="/residential"
            className="absolute z-20 text-[16px] font-normal text-white hover:opacity-80"
            style={{ left: 1141, top: 85 }}
          >
            Residential
          </Link>
          <Link
            href="/commercial"
            className="absolute z-20 text-[17px] font-normal text-white hover:opacity-80"
            style={{ left: 1275, top: 82 }}
          >
            Commercial
          </Link>
          <Link
            href="/about"
            className="absolute z-20 text-[17px] font-normal text-white hover:opacity-80"
            style={{ left: 1426, top: 82 }}
          >
            About Us
          </Link>
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
            <span className="relative z-10 text-[17px] font-bold text-white">Contact</span>
          </Link>
          <button
            type="button"
            className="absolute z-20 flex cursor-pointer items-center justify-center hover:opacity-90"
            style={{ left: 1731, top: 69, width: 50, height: 48 }}
            aria-label="Switch to Spanish"
          >
            <Image
              src="/figma/imgRectangulo18.svg"
              alt=""
              width={50}
              height={48}
              className="pointer-events-none absolute inset-0 h-full w-full"
            />
            <span className="relative z-10 text-[17px] font-bold text-white">ES</span>
          </button>

          {/* Hero copy — node 1:989 Welcome + 1:995 Trazado 2016 */}
          <div
            className="absolute z-10 flex flex-col items-start"
            style={{ left: 138, top: 256, width: 785 }}
          >
            <h1 className="m-0 text-[72px] font-bold leading-[87px] text-white">
              Commercial exteriors
              <br />
              that reflect the quality
              <br />
              of your business.
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
            <p className="m-0 text-[65px] font-normal leading-[80px] text-[#1c1c1c]">
              Professional exterior
            </p>
            <p className="m-0 text-[65px] font-normal leading-[80px] text-[#1c1c1c]">
              solutions for commercial
            </p>
            <p className="m-0 text-[65px] font-normal leading-[80px] text-[#1c1c1c]">
              properties that demand
            </p>
            <p className="m-0 text-[65px] font-bold leading-[80px] text-[#ff832a]">
              precision and
            </p>
            <p className="m-0 text-[65px] font-bold leading-[80px] text-[#ff832a]">
              efficiency.
            </p>
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
              Commercial properties operate under tighter schedules, higher visibility
              and greater scrutiny. At Team Angulo we understand what is at stake. We
              work efficiently, communicate at every stage and deliver exterior solutions
              that meet the demands of commercial projects without compromising on
              quality or precision.
            </p>
          </div>

          {/* Values — node 1:1019 */}
          <ValueColumn
            left={148}
            top={1414.579}
            iconSrc="/figma/commercial/icon-minimal-disruption.svg"
            iconWidth={114}
            iconHeight={114}
            textGap={14}
            width={410}
            title="Minimal Disruption"
            lines={[
              "We plan every project to keep your business running while we work.",
            ]}
          />
          <ValueColumn
            left={754}
            top={1408}
            iconSrc="/figma/commercial/icon-on-schedule.svg"
            iconWidth={111}
            iconHeight={111}
            iconTopOffset={4}
            textGap={19}
            width={468}
            title="On Schedule"
            lines={[
              "Commercial deadlines do not move. We manage every stage with precision to deliver on time.",
            ]}
          />
          <ValueColumn
            left={1325}
            top={1408}
            iconSrc="/figma/commercial/icon-clean-job-site.svg"
            iconWidth={132}
            iconHeight={125}
            textGap={12}
            width={441}
            title="Clean Job Site"
            lines={[
              "We maintain a clean and organized job site from the first day to the last.",
            ]}
          />
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
            Our Commercial Work
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[50px] leading-none text-[#1c1c1c]"
            style={{ top: 1790 }}
          >
            Every exterior<span className="font-bold"> speaks for itself</span>.
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[20px] leading-normal text-black"
            style={{ top: 1872 }}
          >
            A selection of commercial exteriors completed by Team Angulo.
          </p>
          <div
            className="absolute z-10 rounded-full bg-[#ff832a]"
            style={{ left: 945, top: 1932, width: 64, height: 5 }}
            aria-hidden
          />

          {/* Gallery — Figma positions */}
          <Image
            src="/figma/commercial/gallery-images22.png"
            alt="Commercial project"
            width={1920}
            height={1047}
            className="absolute z-0 object-cover"
            style={{ left: 0, top: 2043, width: 1920, height: 1047 }}
          />
          <div
            className="absolute z-0 w-px bg-[#d9d9d9]"
            style={{ left: 1654, top: 1952, height: 78.5 }}
            aria-hidden
          />
          <Image
            src="/figma/commercial/gallery-tall-left.png"
            alt="Commercial project"
            width={1063}
            height={1113}
            className="absolute z-0 object-cover"
            style={{ left: 0, top: 3121, width: 1063, height: 1113 }}
          />
          <Image
            src="/figma/commercial/gallery-top-right.png"
            alt="Commercial project"
            width={835}
            height={557}
            className="absolute z-0 object-cover"
            style={{ left: 1099, top: 3122, width: 835, height: 557 }}
          />
          <Image
            src="/figma/commercial/gallery-mid-right.png"
            alt="Commercial project"
            width={835}
            height={525}
            className="absolute z-0 object-cover"
            style={{ left: 1099, top: 3709, width: 835, height: 525 }}
          />
          <Image
            src="/figma/commercial/gallery-fullwidth-2.png"
            alt="Commercial project"
            width={1920}
            height={1047}
            className="absolute z-0 object-cover"
            style={{ left: 0, top: 4265, width: 1920, height: 1047 }}
          />
          <div
            className="absolute z-0 w-px bg-[#d9d9d9]"
            style={{ left: 1654, top: 4267, height: 78.5 }}
            aria-hidden
          />
          <Image
            src="/figma/commercial/gallery-chicago.png"
            alt="Commercial project"
            width={966}
            height={752}
            className="absolute z-0 object-cover"
            style={{ left: 0, top: 5378, width: 966, height: 752 }}
          />
          <Image
            src="/figma/commercial/gallery-factory.png"
            alt="Commercial project"
            width={932}
            height={752}
            className="absolute z-0 object-cover"
            style={{ left: 1000, top: 5378, width: 932, height: 752 }}
          />

          {/* CTA — node 1:1117 */}
          <div
            className="absolute z-10 bg-white"
            style={{ left: 0, top: CTA_TOP, width: 1920, height: CTA_HEIGHT }}
          >
            <h2
              className="absolute m-0 font-bold leading-none text-black"
              style={{ left: 138, top: 48, width: 515, fontSize: 55 }}
            >
              <span className="block leading-normal">
                Ready to <span className="text-[#ff832a]">transform</span>
              </span>
              <span className="mt-[13px] block leading-normal">your exterior?</span>
            </h2>
            <p
              className="absolute m-0 text-[20px] leading-normal text-[#1c1c1c]"
              style={{ left: 138, top: 223, width: 470 }}
            >
              Contact us today and let&apos;s talk about{" "}
              <span className="font-bold">your project</span>
            </p>
            <a
              href="mailto:info@teamangulo.com"
              className="absolute inline-flex items-center justify-center gap-2 rounded-[100px] bg-[#f07b05] text-[16px] font-bold text-white hover:opacity-90"
              style={{ left: 1530, top: 65, width: 252, height: 60 }}
            >
              GET IN TOUCH
              <CtaArrow />
            </a>
          </div>

          {/* Footer — node 1:1136 */}
          <div
            className="absolute z-10 bg-black"
            style={{ left: 0, top: FOOTER_TOP, width: 1920, height: 463 }}
          >
            <Image
              src="/figma/imgEditableLogo01.png"
              alt="Team Angulo Construction LLC"
              width={370}
              height={135}
              className="absolute object-contain"
              style={{ left: 138, top: 47, width: 370, height: 135 }}
            />
            <p
              className="absolute m-0 text-[20px] leading-normal text-white"
              style={{ left: 160, top: 205, width: 316 }}
            >
              Professional exterior solutions for
              <br />
              residential and commercial
              <br />
              properties in New Jersey.
            </p>
            <p
              className="absolute m-0 text-[20px] font-bold leading-normal text-white"
              style={{ left: 643, top: 73 }}
            >
              SERVICES
            </p>
            {[
              { title: "Demolition & Removal", top: 112 },
              { title: "Structural Repair", top: 152 },
              { title: "Hardie & Vinyl Siding", top: 192 },
              { title: "PVC Trim", top: 232 },
              { title: "Metal Roofing", top: 272 },
            ].map((item) => (
              <Link
                key={item.title}
                href="/services"
                className="absolute text-[20px] leading-normal text-white hover:opacity-80"
                style={{ left: 643, top: item.top }}
              >
                {item.title}
              </Link>
            ))}
            <p
              className="absolute m-0 text-[20px] font-bold leading-normal text-white"
              style={{ left: 1047, top: 86 }}
            >
              CONTACT
            </p>
            <Image
              src="/figma/imgGrupo775.svg"
              alt=""
              width={17}
              height={17}
              className="absolute"
              style={{ left: 1047, top: 131, width: 17, height: 17 }}
              aria-hidden
            />
            <a
              href="tel:+10000000000"
              className="absolute text-[20px] leading-normal text-white hover:opacity-80"
              style={{ left: 1076, top: 125 }}
            >
              (XXX) XXX-XXXX
            </a>
            <Image
              src="/figma/imgGrupo777.svg"
              alt=""
              width={18}
              height={15}
              className="absolute"
              style={{ left: 1047, top: 170, width: 18, height: 15 }}
              aria-hidden
            />
            <a
              href="mailto:info@teamangulo.com"
              className="absolute text-[20px] leading-normal text-white hover:opacity-80"
              style={{ left: 1076, top: 165 }}
            >
              info@teamangulo.com
            </a>
            <Image
              src="/figma/imgGrupo779.svg"
              alt=""
              width={15}
              height={18}
              className="absolute"
              style={{ left: 1047, top: 206, width: 15, height: 18 }}
              aria-hidden
            />
            <p
              className="absolute m-0 text-[20px] leading-normal text-white"
              style={{ left: 1076, top: 205 }}
            >
              New Jersey, USA
            </p>
            <p
              className="absolute m-0 text-[20px] font-bold leading-normal text-white"
              style={{ left: 1468, top: 86 }}
            >
              FOLLOW US
            </p>
            <Image
              src="/figma/imgGrupo786.svg"
              alt="Social media"
              width={189}
              height={52}
              className="absolute"
              style={{ left: 1465, top: 126, width: 189, height: 52 }}
            />
            <div
              className="absolute bg-white/70"
              style={{ left: 138, top: 370, width: 1644, height: 1 }}
              aria-hidden
            />
            <p
              className="absolute m-0 text-[20px] leading-normal text-white"
              style={{ left: 138, top: 400 }}
            >
              © 2025 Team Angulo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
