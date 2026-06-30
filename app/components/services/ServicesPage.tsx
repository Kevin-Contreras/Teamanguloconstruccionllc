"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PAGE_WIDTH = 1920;
const PAGE_HEIGHT = 8228;
const CTA_TOP = 7346;
const CTA_HEIGHT = 420;
const FOOTER_TOP = CTA_TOP + CTA_HEIGHT;

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
  return (
    <div
      className="absolute z-10 flex flex-col"
      style={{ left, top, width }}
    >
      <span className="text-[55px] leading-none text-[#ff832a]">{number}</span>
      <div
        className="mt-[14px] rounded-full bg-[#ff832a]"
        style={{ width: 64, height: 5 }}
        aria-hidden
      />
      <h2 className="mt-[6px] m-0 text-[50px] font-normal leading-none text-black">
        {title}
      </h2>
      <p className="mt-[10px] m-0 text-[20px] font-bold leading-normal text-black">
        {caption}
      </p>
      <p className="mt-[20px] m-0 text-[20px] leading-[32px] text-black">{body}</p>
      <p className="mt-[28px] m-0 text-[20px] font-bold leading-normal text-black">
        {tagline}
      </p>
    </div>
  );
}

/** Figma node 1:503 — Services page */
export function ServicesPage() {
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
    <div className="w-full overflow-hidden bg-white">
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
          {/* ── Hero ── */}
          <div className="absolute inset-x-0 top-0 z-0 h-[707px] overflow-hidden">
            <Image
              src="/figma/services/services-hero-bg.png"
              alt=""
              width={1927}
              height={704}
              className="absolute object-cover"
              style={{ left: -8, top: 0, width: 1927, height: 704 }}
              priority
            />
            <div className="absolute inset-0 bg-[#1a2b3c]/55" aria-hidden />
          </div>

          {/* Nav */}
          <Image
            src="/figma/imgTopNavigation.svg"
            alt=""
            width={1614}
            height={79}
            className="absolute z-20"
            style={{ left: 141, top: 65, width: 1614, height: 79 }}
          />
          <Link href="/" className="absolute z-20" style={{ left: 117, top: 42 }}>
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
            style={{ left: 1014, top: 83 }}
          >
            Services
          </Link>
          <Link
            href="/residential"
            className="absolute z-20 text-[16px] font-normal text-white hover:opacity-80"
            style={{ left: 1141, top: 84 }}
          >
            Residential
          </Link>
          <Link
            href="/commercial"
            className="absolute z-20 text-[17px] font-normal text-white hover:opacity-80"
            style={{ left: 1275, top: 81 }}
          >
            Commercial
          </Link>
          <Link
            href="/about"
            className="absolute z-20 text-[17px] font-normal text-white hover:opacity-80"
            style={{ left: 1426, top: 81 }}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="absolute z-20 flex items-center justify-center hover:opacity-90"
            style={{ left: 1539, top: 68, width: 154, height: 48 }}
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
            style={{ left: 1731, top: 68, width: 50, height: 48 }}
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

          <h1
            className="absolute z-10 m-0 text-[72px] font-bold leading-none text-white"
            style={{ left: 139, top: 331, width: 456 }}
          >
            Our <span className="text-[#ff832a]">Services</span>
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
            Every project starts with the right foundation and
            <br />
            ends with an exterior built to last.
          </p>

          {/* ── Service 01 ── */}
          <Image
            src="/figma/services/services-side-house.png"
            alt="Demolition project"
            width={1051}
            height={800}
            className="absolute z-0 object-cover"
            style={{ left: 869, top: 808, width: 1051, height: 800 }}
          />
          <ServiceTextBlock
            left={138}
            top={965}
            width={620}
            number="01"
            title={
              <>
                Demolition & <span className="font-bold text-[#ff832a]">Removal</span>
              </>
            }
            caption="It starts with a clean slate"
            body="Before anything new goes up, everything old comes down. We safely remove all existing exterior materials, siding, trim, and any damaged components, down to the structure. No shortcuts, no material left behind. Just a clean, solid base ready for what comes next."
            tagline="This is where every transformation begins."
          />

          <Image
            src="/figma/services/services-fullwidth-1.png"
            alt=""
            width={1920}
            height={800}
            className="absolute z-0 object-cover"
            style={{ left: 0, top: 1763, width: 1920, height: 800 }}
          />
          <div
            className="absolute z-0 w-px bg-[#d9d9d9]"
            style={{ left: 1654, top: 1918, height: 78.5 }}
            aria-hidden
          />

          {/* ── Service 02 ── */}
          <Image
            src="/figma/services/services-trim-house.png"
            alt="Structural repair"
            width={822}
            height={445}
            className="absolute z-0 object-cover"
            style={{ left: 960, top: 2677, width: 822, height: 445 }}
          />
          <ServiceTextBlock
            left={138}
            top={2702}
            width={740}
            number="02"
            title={
              <>
                Structural <span className="font-bold text-[#ff832a]">Repair</span>
              </>
            }
            caption="What's underneath matters just as much."
            body="A great exterior starts with a solid structure. Before any new material goes up, we inspect every wall for damaged framing, rotted sheathing, or compromised components. If we find it, we fix it. No exceptions, no shortcuts."
            tagline="Built right from the inside out."
          />

          {/* ── Service 03 ── */}
          <Image
            src="/figma/services/services-neighborhood.png"
            alt="Hardie siding project"
            width={1056}
            height={800}
            className="absolute z-0 object-cover"
            style={{ left: 0, top: 3287, width: 1056, height: 800 }}
          />
          <ServiceTextBlock
            left={1172}
            top={3436}
            width={610}
            number="03"
            title={
              <>
                Hardie & Vinyl <span className="font-bold text-[#ff832a]">Siding</span>
              </>
            }
            caption="The exterior your property deserves."
            body="James Hardie fiber cement siding is the most durable and low maintenance exterior solution available in the market today. As certified installers, we handle the entire process from start to finish, ensuring a flawless professional finish that protects your property for decades. For those looking for a cost effective option, vinyl siding delivers great curb appeal with minimal upkeep."
            tagline="Installed to last. Finished to impress."
          />

          <Image
            src="/figma/services/services-images6.png"
            alt=""
            width={1920}
            height={800}
            className="absolute z-0 object-cover"
            style={{ left: 0, top: 4142, width: 1920, height: 800 }}
          />
          <div
            className="absolute z-0 w-px bg-[#d9d9d9]"
            style={{ left: 1654, top: 4267, height: 78.5 }}
            aria-hidden
          />

          {/* ── Service 04 ── */}
          <Image
            src="/figma/services/services-images7.png"
            alt="PVC trim detail"
            width={822}
            height={445}
            className="absolute z-0 object-cover"
            style={{ left: 138, top: 5038, width: 822, height: 445 }}
          />
          <ServiceTextBlock
            left={1056}
            top={5065}
            width={726}
            number="04"
            title={
              <>
                PVC <span className="font-bold text-[#ff832a]">Trim</span>
              </>
            }
            caption="The details that define the finished look."
            body="Every window, door, and corner tells a story. Our PVC trim work gives every edge of your property a sharp, clean and polished finish that holds up against moisture, impact and time. It is the detail most people notice without knowing why the exterior looks so complete."
            tagline="Built right from the inside out."
          />

          {/* ── Service 05 ── */}
          <Image
            src="/figma/services/services-demolition.png"
            alt="Metal roofing"
            width={1051}
            height={800}
            className="absolute z-0 object-cover"
            style={{ left: 869, top: 5634, width: 1051, height: 800 }}
          />
          <ServiceTextBlock
            left={138}
            top={5776}
            width={620}
            number="05"
            title={
              <>
                Metal <span className="font-bold text-[#ff832a]">Roofing</span>
              </>
            }
            caption="The strongest roof you can put on a property."
            body="Standing seam metal roofing is one of the most durable and weather resistant options available today. Engineered to withstand extreme conditions, it requires minimal maintenance and outlasts traditional roofing materials by decades. We install every panel with the precision the system demands, ensuring a watertight, structurally sound result from edge to edge."
            tagline="Built to withstand."
          />

          {/* Orange banner */}
          <div
            className="absolute z-0 bg-[#ff832a]"
            style={{ left: -12, top: 6581, width: 1944, height: 737 }}
          >
            <Image
              src="/figma/logorecuadro.png"
              alt=""
              width={808}
              height={737}
              className="pointer-events-none absolute object-cover opacity-20"
              style={{ left: 1117, top: 0, width: 827, height: 737 }}
              aria-hidden
            />
            <div
              className="absolute rounded-full bg-white"
              style={{ left: 175, top: 198, width: 76.5, height: 5 }}
              aria-hidden
            />
            <h2
              className="absolute m-0 font-bold leading-none text-white"
              style={{ left: 175, top: 206, fontSize: 72, width: 907 }}
            >
              <span className="block">Everything your exterior</span>
              <span className="mt-[13px] block">needs, handled from start</span>
              <span className="mt-[13px] block">to finish</span>
            </h2>
          </div>

          {/* CTA — taller section before footer */}
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

          {/* Footer */}
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
  );
}
