"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NavBar } from "../layout/NavBar";
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
    <>
      <section className="relative min-h-[620px] bg-[#1a2b3c] lg:hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/figma/hero-banner-export.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-r from-[#1a2b3c]/95 via-[#1a2b3c]/70 to-[#1a2b3c]/30"
            aria-hidden
          />
        </div>

        <NavBar variant="overlay" />

        <div className="relative z-10 px-6 pb-14 pt-28">
            <h1 className="m-0 max-w-[520px] text-[38px] font-bold leading-[1.05] text-white sm:text-[48px]">
              We Install the Exteriors
              <br />
              That Protect &amp; Define
              <br />
              <span className="text-[#ff832a]">Your Property</span>
            </h1>
            <div className="mt-6 h-[3px] w-20 rounded-full bg-white/80" aria-hidden />
            <p className="mt-5 max-w-[420px] text-[16px] leading-relaxed text-[#e8e8e8] sm:text-[18px]">
              Since 2018, Team Angulo has delivered professional exterior solutions for
              residential and commercial properties.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex h-[52px] items-center justify-center rounded-[100px] border border-white px-8 text-[15px] font-bold text-white hover:bg-white/10"
              >
                MORE INFO
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[52px] items-center justify-center rounded-[100px] bg-[#f07b05] px-8 text-[15px] font-bold text-white hover:opacity-90"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
      </section>

      <section className="relative hidden w-full overflow-hidden bg-[#1a2b3c] lg:block">
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden"
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
            <div className="absolute inset-0 overflow-hidden">
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
              Since 2018, Team Angulo has delivered professional exterior solutions for
              residential and commercial properties.
            </p>

            <Link
              href="/about"
              className="absolute flex items-center justify-center rounded-[100px] border border-white text-[16px] font-bold text-white hover:bg-white/10"
              style={{ left: 138, top: 859, width: 212, height: 60 }}
            >
              MORE INFO
            </Link>

            <Link
              href="/contact"
              className="absolute flex items-center justify-center rounded-[100px] bg-[#f07b05] text-[16px] font-bold text-white hover:opacity-90"
              style={{ left: 364, top: 858, width: 212, height: 60 }}
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
