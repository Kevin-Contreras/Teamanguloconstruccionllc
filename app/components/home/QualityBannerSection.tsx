"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SECTION_WIDTH = 1944;
const SECTION_HEIGHT = 737;

/** Figma node 1:330 — Quality banner */
export function QualityBannerSection() {
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
    <section className="overflow-hidden bg-[#ff832a] text-white">
      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-[1944px]"
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
          {/* Decorative logo — node 1:352 @ 1117,0 */}
          <Image
            src="/figma/logorecuadro.png"
            alt=""
            width={808}
            height={737}
            className="pointer-events-none absolute object-cover opacity-20"
            style={{ left: 1117, top: 0, width: 827, height: 737 }}
            aria-hidden
          />

          {/* Accent line — node 1:341 @ 174,206 */}
          <div
            className="absolute rounded-full bg-white"
            style={{ left: 174, top: 206.232, width: 76.5, height: 5 }}
            aria-hidden
          />

          {/* Heading — nodes 1:334–1:335 */}
          <h2
            className="absolute m-0 font-bold leading-none text-white"
            style={{ left: 174, top: 214.232, fontSize: 72 }}
          >
            <span className="block">Quality is not a differentiator,</span>
            <span className="mt-[13px] block">it&apos;s the baseline.</span>
          </h2>

          {/* Subtext — nodes 1:337–1:339 */}
          <p
            className="absolute m-0 font-bold leading-[60px] text-white"
            style={{ left: 174, top: 402.232, width: 931, fontSize: 40 }}
          >
            Every project we deliver is held to the same standard, from the smallest
            repair to the largest installation
          </p>
        </div>
      </div>
    </section>
  );
}
