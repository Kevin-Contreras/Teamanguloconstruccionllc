"use client";

import { SiteCta } from "../layout/SiteLayout";
import { useEffect, useRef, useState } from "react";

const SECTION_WIDTH = 1644;
const SECTION_HEIGHT = 199;

function CtaArrow() {
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
        fill="white"
      />
    </svg>
  );
}

/** Figma node 1:424 — CTA */
export function CTASection() {
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
    <>
      <div className="lg:hidden" id="contact">
        <SiteCta />
      </div>
      <section className="hidden overflow-hidden bg-white py-16 lg:block lg:py-20">
      <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-0">
        <div
          ref={containerRef}
          className="relative lg:ml-[138px] lg:mr-[138px]"
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
            {/* Heading — nodes 1:427–1:428 */}
            <h2
              className="absolute m-0 font-bold leading-none text-black"
              style={{ left: 0, top: 0, width: 515, fontSize: 55 }}
            >
              <span className="block leading-normal">
                Ready to <span className="text-[#ff832a]">transform</span>
              </span>
              <span className="mt-[13px] block leading-normal">your exterior?</span>
            </h2>

            {/* Subtext — node 1:430 */}
            <p
              className="absolute m-0 text-[20px] leading-normal text-[#1c1c1c]"
              style={{ left: 0, top: 175, width: 470 }}
            >
              Contact us today and let&apos;s talk about{" "}
              <span className="font-bold">your project</span>
            </p>

            {/* Button — nodes 1:431–1:434 */}
            <a
              href="mailto:info@teamangulo.com"
              className="absolute inline-flex items-center justify-center gap-2 rounded-[100px] bg-[#f07b05] text-[16px] font-bold text-white hover:opacity-90"
              style={{ left: 1392, top: 17, width: 252, height: 60 }}
            >
              GET IN TOUCH
              <CtaArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
