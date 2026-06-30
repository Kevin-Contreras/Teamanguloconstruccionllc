"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TopNavigation } from "./TopNavigation";

const BANNER_WIDTH = 1920;
const BANNER_HEIGHT = 1134;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = containerRef.current?.clientWidth ?? BANNER_WIDTH;
      setScale(width / BANNER_WIDTH);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#1a2b3c]">
      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-[1920px]"
        style={{ height: BANNER_HEIGHT * scale }}
      >
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{
            width: BANNER_WIDTH,
            height: BANNER_HEIGHT,
            transform: `scale(${scale})`,
          }}
        >
          {/* Figma node 1:5 — banner background (pixel-perfect export) */}
          <div className="absolute inset-0">
            <Image
              src="/figma/hero-banner-export.png"
              alt=""
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>

          <TopNavigation />

          {/* Hero content — Figma positions (canvas 1920×1134) */}
          <h1
            className="absolute font-bold"
            style={{ left: 142, top: 474, width: 814, fontSize: 72, lineHeight: 1.05 }}
          >
            <span className="text-white">We Install the Exteriors</span>
            <br />
            <span className="text-white">That Protect &amp; Define</span>
            <br />
            <span className="text-[#ff832a]">Your Property</span>
          </h1>

          <Image
            src="/figma/imgLinea1.svg"
            alt=""
            width={80}
            height={3}
            className="absolute"
            style={{ left: 142, top: 749, width: 80, height: 3 }}
          />

          <p
            className="absolute text-[20px] leading-normal text-[#e8e8e8]"
            style={{ left: 142, top: 769, width: 570 }}
          >
            Since 2018, Team Angulo has delivered professional exterior solutions for residential and commercial properties.
          </p>
        

          <a
            href="#about"
            className="absolute flex items-center justify-center border rounded-[100px] border-white text-[16px] font-bold text-white hover:bg-white/10"
            style={{ left: 138, top: 859, width: 212, height: 60 }}
          >
            MORE INFO
          </a>

          <a
            href="#contact"
            className="absolute flex items-center justify-center rounded-[100px] bg-[#f07b05] text-[16px] font-bold text-white hover:opacity-90"
            style={{ left: 364, top: 858, width: 212, height: 60 }}
          >
            GET A QUOTE
          </a>
        </div>
      </div>
    </section>
  );
}
