"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FigmaHeroImage, FigmaImage } from "../layout/FigmaImage";
import { PageClosing } from "../layout/PageClosing";
import { AboutPageMobile } from "../layout/MobilePages";

const PAGE_WIDTH = 1920;
const CTA_TOP = 5608;
const PAGE_HEIGHT = CTA_TOP;

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
      className="absolute z-10 inline-flex items-center justify-center gap-2 rounded-[100px] bg-[#f07b05] text-[16px] font-bold text-white hover:opacity-90"
      style={{ left: 823, top, width: 274, height: 60 }}
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
        <p className="mt-1 m-0 text-[20px] leading-[32px] text-black">{lines.join(" ")}</p>
      </div>
    </div>
  );
}

/** Figma node 1:1196 — About page */
export function AboutPage() {
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
            className="absolute z-20 text-[17px] font-bold text-white hover:opacity-80"
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

          {/* Hero copy — node 1:1205 Welcome */}
          <div
            className="absolute z-10 flex flex-col items-start"
            style={{ left: 138, top: 288, width: 850 }}
          >
            <h1 className="m-0 text-[72px] font-bold leading-[87px] text-white">
              Dedicated to Excellence
              <br />
              in Exterior Remodeling
              <br />
              Since 2018.
            </h1>
            <div className="mt-[33px]">
              <OrangeLine />
            </div>
          </div>

          {/* Philosophy — nodes 1:1212–1:1224 */}
          <p
            className="absolute z-10 m-0 text-[72px] font-bold leading-normal text-[#ff832a]"
            style={{ left: 138, top: 1020 }}
          >
            Our Philosophy
          </p>
          <div className="absolute z-10" style={{ left: 138, top: 1110, width: 670 }}>
            <p className="m-0 text-[50px] leading-normal text-[#1c1c1c]">What Drives Every Decision</p>
            <p className="m-0 text-[50px] font-bold leading-normal text-[#1c1c1c]">We Make on the Job</p>
          </div>
          <div className="absolute z-10" style={{ left: 138, top: 1269 }}>
            <OrangeLine />
          </div>
          <p
            className="absolute z-10 m-0 text-[20px] leading-[32px] text-black"
            style={{ left: 138, top: 1297, width: 740 }}
          >
            At Team Angulo, the quality of our work doesn&apos;t start and end at the job site. It
            starts with the way we assess every project, the materials we select, and the standards
            we hold ourselves to before a single panel goes up. Since 2018, we have built our
            reputation on one simple principle — do the job right, every single time, for every
            single client, residential or commercial.
          </p>
          <FigmaImage
            src="/figma/about/philosophy-house.png"
            alt="Contemporary house exterior"
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
            The Angulo <span className="font-bold text-[#ff832a]">difference</span>
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
            Seven years in the industry have taught us one thing doing it right the first time is
            always the best option.
          </p>

          {/* Values 3×2 — nodes 1:1230–1:1334 */}
          <ValueColumn
            left={138}
            top={2075}
            iconSrc="/figma/imgGrupo14.svg"
            iconWidth={125}
            iconHeight={124}
            textGap={14}
            width={460}
            title="Experience"
            lines={[
              "Over 7 years delivering exterior remodeling for residential and commercial properties.",
            ]}
          />
          <ValueColumn
            left={717}
            top={2075}
            iconSrc="/figma/about/icon-specialty.svg"
            iconWidth={125}
            iconHeight={124}
            textGap={14}
            width={460}
            title="Specialty"
            lines={[
              "Certified specialists in James Hardie fiber cement siding and standing seam metal roofing.",
            ]}
          />
          <ValueColumn
            left={1351}
            top={2071}
            iconSrc="/figma/about/icon-process.svg"
            iconWidth={113}
            iconHeight={109}
            textGap={12}
            width={441}
            title="Process"
            lines={[
              "We never install over problems. Every project starts with full demolition and structural repair.",
            ]}
          />
          <ValueColumn
            left={138}
            top={2351}
            iconSrc="/figma/about/icon-integrity.svg"
            iconWidth={123}
            iconHeight={123}
            textGap={14}
            width={460}
            title="Integrity"
            lines={[
              "Honest assessments, fair pricing, and no surprises from quote to completion.",
            ]}
          />
          <ValueColumn
            left={716}
            top={2339}
            iconSrc="/figma/about/icon-commitment.svg"
            iconWidth={125}
            iconHeight={124}
            textGap={14}
            width={460}
            title="Commitment"
            lines={[
              "Residential or commercial, every project receives the same uncompromising standard.",
            ]}
          />
          <ValueColumn
            left={1371}
            top={2347}
            iconSrc="/figma/about/icon-safety.svg"
            iconWidth={84}
            iconHeight={117}
            textGap={12}
            width={441}
            title="Safety"
            lines={[
              "Every job site is managed with strict safety protocols to protect our team and your property.",
            ]}
          />

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
            We work with homeowners who want an
            <br />
            exterior that protects their{" "}
            <span className="text-[#ff832a]">property and adds lasting value.</span>
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[40px] leading-normal text-black"
            style={{ top: 2794 }}
          >
            Every detail, handled with care from start to finish
          </p>
          <WorkButton href="/residential" label="OUR RESIDENTIAL WORK" top={2889} />
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
            For commercial properties, we deliver{" "}
            <span className="text-[#ff832a]">professional exterior solutions</span>
            <br />
            that reflect the quality and standards of your business.
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[40px] leading-normal text-black"
            style={{ top: 4049 }}
          >
            On time, within budget, without compromise.
          </p>
          <WorkButton href="/commercial" label="OUR COMMERCIAL WORK" top={4144} />
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
            Our Story
          </p>
          <p
            className="absolute z-10 m-0 w-full text-center text-[50px] leading-normal text-[#1c1c1c]"
            style={{ top: 5186 }}
          >
            Where It All <span className="font-bold">Began</span>
          </p>
          <p
            className="absolute z-10 m-0 text-center text-[20px] leading-[32px] text-black"
            style={{ left: 405, top: 5272, width: 1110 }}
          >
            Team Angulo was founded in 2018 with a clear purpose to deliver exterior remodeling
            services that homeowners and commercial property owners could truly rely on. What started
            as a small, dedicated crew has grown into a trusted name in the industry, built entirely
            on the quality of the work we produce and the relationships we build along the way. Every
            project we take on is a reflection of where we started and a commitment to where we are
            going.
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
