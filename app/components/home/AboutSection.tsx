"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SECTION_WIDTH = 1627;
const SECTION_HEIGHT = 472;

/** Figma node 1:79 — about p */
export function AboutSection() {
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
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-0">
        <div
          ref={containerRef}
          className="relative lg:ml-[138px] lg:mr-[155px]"
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
          {/* Welcome to Team Angulo — node 1:91 @ 0,0 */}
          <p className="absolute text-[20px] leading-none text-black" style={{ left: 0, top: 0 }}>
            Welcome to <span className="italic">Team Angulo</span>
          </p>

          {/* Orange line — node 1:92 @ 0,49 */}
          <Image
            src="/figma/about-line2.svg"
            alt=""
            width={64}
            height={5}
            className="absolute"
            style={{ left: 0, top: 49, width: 64, height: 5 }}
          />

          {/* Headline — nodes 1:80–1:83 */}
          <p
            className="absolute text-[50px] leading-[70px] text-[#1c1c1c]"
            style={{ left: 0, top: 65 }}
          >
            We work for property owners
            <br />
            who refuse to settle{" "}
            <span className="font-bold text-[#f07b05]">for</span>
            <br />
            <span className="font-bold text-[#f07b05]">anything less than done</span>
            <br />
            <span className="font-bold text-[#f07b05]">right.</span>
          </p>

          {/* Right column — nodes 1:85–1:89 @ x=944 */}
          <p
            className="absolute text-[20px] leading-normal text-black"
            style={{ left: 944, top: 257, width: 683 }}
          >
            Every property deserves an exterior
            <span className="font-bold"> built to last</span>, and that&apos;s exactly what we
            deliver. At Team Angulo, quality isn&apos;t a promise we make lightly. It&apos;s a
            standard we hold ourselves to on every single project, residential or commercial. We
            show up, we do the work right, and we stand behind every job we complete.
          </p>

          {/* Stats — node 1:108 */}
          <p
            className="absolute leading-none text-black"
            style={{ left: 0, top: 371 }}
          >
            <span className="text-[50px] font-bold">7</span>
            <span className="text-[40px] font-normal">+</span>
          </p>
          <p
            className="absolute text-[20px] leading-none text-black"
            style={{ left: 0, top: 441 }}
          >
            Years in <span className="italic">Business</span>
          </p>

          <Image
            src="/figma/about-stats-divider.svg"
            alt=""
            width={1}
            height={87}
            className="absolute"
            style={{ left: 186.5, top: 385, width: 1, height: 87 }}
          />

          <p
            className="absolute leading-none text-black"
            style={{ left: 213, top: 371 }}
          >
            <span className="text-[50px] font-bold">100</span>
            <span className="text-[40px] font-normal">+</span>
          </p>
          <p
            className="absolute text-[20px] leading-none text-black"
            style={{ left: 213, top: 441 }}
          >
            Projects <span className="italic">Completed</span>
          </p>

          {/* WHO WE ARE — node 1:93 @ 1407,412 */}
          <Link
            href="/about"
            className="absolute flex items-center justify-center gap-2 hover:opacity-90"
            style={{ left: 1407, top: 412, width: 212, height: 60 }}
          >
            <Image
              src="/figma/about-who-btn.svg"
              alt=""
              width={212}
              height={60}
              className="pointer-events-none absolute inset-0 h-full w-full"
            />
            <span className="relative z-10 text-[16px] font-bold leading-none text-[#f07b05]">
              WHO WE ARE
            </span>
            <Image
              src="/figma/about-arrow.svg"
              alt=""
              width={14}
              height={15}
              className="relative z-10"
            />
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
