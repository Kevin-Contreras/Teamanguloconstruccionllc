"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
        fill="#F07B05"
      />
    </svg>
  );
}

/** Figma node 1:274 — Residential + Commercial */
export function ResidentialCommercialSection() {
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
    <div className="bg-white">
      {/* Residential — node 1:275+ */}
      <section id="residential" className="overflow-hidden bg-white">
        <div
          ref={containerRef}
          className="relative mx-auto w-full max-w-[1975px] overflow-hidden"
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
            <Image
              src="/figma/imgContemporaryHouseWithShingleDetailAndBlueSk20260326104821Utc.png"
              alt="Residential siding project"
              width={1074}
              height={800}
              className="absolute object-cover"
              style={{ left: 901, top: 0, width: 1074, height: 800 }}
            />

            {/* Label — node 1:275 @ 205,230 */}
            <p
              className="absolute m-0 text-[20px] leading-normal text-black"
              style={{ left: 205, top: 230 }}
            >
              For <span className="font-bold">homeowners</span>
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
              Residential
            </h2>

            {/* Body — nodes 1:279–1:283 */}
            <p
              className="absolute m-0 text-[20px] leading-[32px] text-black"
              style={{ left: 205, top: 391, width: 571 }}
            >
              Every residential project we take on is treated with the same standard{" "}
              <span className="font-bold">
                thorough preparation, precise installation, and a finished result built
                to last. From single-family homes to
              </span>{" "}
              multi-unit properties, we deliver exterior solutions that protect and add
              value to your home for decades.
            </p>

            {/* Button — node 1:285 @ 205,583 317×60 */}
            <Link
              href="/residential"
              className="absolute inline-flex items-center justify-center gap-2 rounded-[100px] border-2 border-[#f07b05] text-[16px] font-bold text-[#f07b05] hover:opacity-90"
              style={{ left: 205, top: 583, width: 317, height: 60 }}
            >
              SEE RESIDENTIAL PROJECTS
              <PillArrow />
            </Link>

            {/* Commercial image — node 1:328 @ 0,981 1077×800 */}
            <Image
              src="/figma/imgIndustrialFactoryFacadeWithSteelMashes20260325224915Utc.png"
              alt="Commercial building project"
              width={1077}
              height={800}
              className="absolute object-cover"
              style={{ left: 0, top: 981, width: 1077, height: 800 }}
            />

            {/* Commercial label — node 1:302 @ 1176,1219 */}
            <p
              className="absolute m-0 text-[20px] leading-normal text-black"
              style={{ left: 1176, top: 1219 }}
            >
              For business <span className="font-bold">owners</span>
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
              Commercial
            </h2>

            {/* Body — nodes 1:306–1:310 */}
            <p
              className="absolute m-0 text-[20px] leading-[32px] text-black"
              style={{ left: 1176, top: 1382, width: 635 }}
            >
              Commercial projects demand{" "}
              <span className="font-bold">
                precision, efficiency, and minimal disruption. We understand the stakes
                — a well-executed exterior
              </span>{" "}
              reflects directly on your business. We work within your timeline, maintain
              a clean and organized job site, and deliver results that meet the highest
              professional standards.
            </p>

            {/* Button — node 1:312 @ 1176,1572 330×60 */}
            <Link
              href="/commercial"
              className="absolute inline-flex items-center justify-center gap-2 rounded-[100px] border-2 border-[#f07b05] text-[16px] font-bold text-[#f07b05] hover:opacity-90"
              style={{ left: 1176, top: 1572, width: 330, height: 60 }}
            >
              SEE COMMERCIAL PROJECTS
              <PillArrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
