"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FigmaHeroImage, FigmaImage } from "../layout/FigmaImage";
import { ResidentialPageMobile } from "../layout/MobilePages";

const PAGE_WIDTH = 1920;
const CTA_TOP = 6234;
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
          <Image
            src="/figma/imgTopNavigation.svg"
            alt=""
            width={1614}
            height={79}
            className="absolute z-20"
            style={{ left: 142, top: 66, width: 1614, height: 79 }}
          />
          <Link href="/" className="absolute z-20" style={{ left: 118, top: 43 }}>
            <Image
              src="/figma/imgEditableLogo10.png"
              alt="Team Angulo"
              width={306}
              height={112}
              className="block object-contain"
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
            style={{ left: 1142, top: 85 }}
          >
            Residential
          </Link>
          <Link
            href="/commercial"
            className="absolute z-20 text-[17px] font-normal text-white hover:opacity-80"
            style={{ left: 1276, top: 82 }}
          >
            Commercial
          </Link>
          <Link
            href="/about"
            className="absolute z-20 text-[17px] font-normal text-white hover:opacity-80"
            style={{ left: 1427, top: 82 }}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="absolute z-20 flex items-center justify-center hover:opacity-90"
            style={{ left: 1540, top: 69, width: 154, height: 48 }}
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
            style={{ left: 1732, top: 69, width: 50, height: 48 }}
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

          {/* Hero copy — node 1:774 Welcome + 1:779 Trazado 2016 */}
          <div
            className="absolute z-10 flex flex-col items-start"
            style={{ left: 138, top: 299, width: 722 }}
          >
            <h1 className="m-0 text-[72px] font-bold leading-[87px] text-white">
              Your home deserves
              <br />
              the best exterior.
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
            <p className="m-0 text-[65px] font-normal leading-[80px] text-[#1c1c1c]">
              The residential exterior
            </p>
            <p className="m-0 text-[65px] font-normal leading-[80px] text-[#1c1c1c]">
              specialists dedicated to
            </p>
            <p className="m-0 text-[65px] font-bold leading-[80px] text-[#ff832a]">
              protecting and
            </p>
            <p className="m-0 text-[65px] font-bold leading-[80px] text-[#ff832a]">
              transforming your
            </p>
            <p className="m-0 text-[65px] font-bold leading-[80px] text-[#ff832a]">
              home.
            </p>
          </div>

          <div className="absolute z-10" style={{ left: 1056, top: 1012, width: 706 }}>
            <div
              className="rounded-full bg-[#ff832a]"
              style={{ width: 76.5, height: 5 }}
              aria-hidden
            />
            <p className="mt-4 m-0 text-[20px] leading-[32px] text-black">
              Your home is more than a structure. It is your biggest investment and the
              place you call home every day. At Team Angulo we approach every residential
              project with the same level of{" "}
              <span className="font-bold">care and precision</span>, from the first
              demolition to the final installation, handling every detail so you do not
              have to worry about anything. We have been doing this since 2018 and our
              standard has never changed.
            </p>
          </div>

          {/* Values — node 1:807 */}
          <ValueColumn
            left={138}
            top={1414.579}
            iconSrc="/figma/residential/grupo-806.svg"
            iconWidth={125}
            iconHeight={102}
            iconTopOffset={5.4}
            title="Honest Communication"
            lines={[
              "No surprises, no hidden costs. We keep you informed at every stage from start to finish.",
            ]}
          />
          <ValueColumn
            left={743}
            top={1408}
            iconSrc="/figma/imgGrupo18.svg"
            iconWidth={147}
            iconHeight={125}
            textGap={18}
            title="Attention to Detail"
            lines={[
              "Every panel, corner and trim piece is installed to specification and inspected at every stage.",
            ]}
          />
          <ValueColumn
            left={1340}
            top={1416.605}
            iconSrc="/figma/imgGrupo20.svg"
            iconWidth={108}
            iconHeight={108}
            textGap={21}
            title="Quality That Lasts"
            lines={[
              "Every exterior we install is built to withstand the elements and protect your home for decades.",
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

          {/* Portfolio header — nodes 1:855–1:859 */}
          <p
            className="absolute z-10 m-0 w-full text-center text-[55px] font-bold leading-none text-[#ff832a]"
            style={{ top: 1718 }}
          >
            Our Residential Work
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[50px] leading-none text-[#1c1c1c]"
            style={{ top: 1790 }}
          >
            Every project<span className="font-bold"> tells a story</span>.
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[20px] leading-normal text-black"
            style={{ top: 1873 }}
          >
            A selection of residential exteriors completed by Team Angulo across New Jersey.
          </p>
          <div
            className="absolute z-10 rounded-full bg-[#ff832a]"
            style={{ left: 921, top: 1938, width: 64, height: 5 }}
            aria-hidden
          />

          {/* Gallery — Figma positions */}
          <FigmaImage
            src="/figma/residential/gallery-tall-left.png"
            alt="Residential project"
            left={-7}
            top={1991}
            width={1063}
            height={1113}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-whatsapp-1.png"
            alt="Residential project"
            left={1092}
            top={1992}
            width={835}
            height={557}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-rect.png"
            alt="Residential project"
            left={1092}
            top={2579}
            width={835}
            height={525}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-fullwidth.png"
            alt="Residential project"
            left={0}
            top={3142}
            width={1920}
            height={1047}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-images7.png"
            alt="Residential project"
            left={0}
            top={4227}
            width={530}
            height={557}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-images6.png"
            alt="Residential project"
            left={559}
            top={4227}
            width={1366}
            height={1113}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-whatsapp-4.png"
            alt="Residential project"
            left={0}
            top={4815}
            width={530}
            height={525}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-image4.png"
            alt="Residential project"
            left={0}
            top={5378}
            width={966}
            height={752}
            className="z-0"
          />
          <FigmaImage
            src="/figma/residential/gallery-images5.png"
            alt="Residential project"
            left={1000}
            top={5378}
            width={932}
            height={752}
            className="z-0"
          />

          {/* CTA — node 1:901 */}
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

          {/* Footer — node 1:920 */}
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
