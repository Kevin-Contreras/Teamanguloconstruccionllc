"use client";

import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./NavBar";
import { ParallaxBannerImage } from "./ParallaxBannerImage";

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

export function SiteHeader({
  variant = "overlay",
  activePath,
}: {
  variant?: "overlay" | "solid";
  activePath?: string;
}) {
  return <NavBar variant={variant} activePath={activePath} />;
}

export function SiteCta({ id }: { id?: string }) {
  return (
    <section id={id} className="bg-white px-6 py-14 lg:px-[138px] lg:py-20">
      <div className="mx-auto flex max-w-[1644px] flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="m-0 text-[36px] font-bold  text-black sm:text-[48px] lg:text-[38px]">
            <span className="block">
              Ready to <span className="text-[#ff832a]">transform</span>
            </span>
            <span className="mt-[13px] block">your exterior?</span>
          </h2>
          <p className="mt-3 max-w-[470px] text-[18px] leading-normal text-[#1c1c1c] lg:text-[15px]">
            Contact us today and let&apos;s talk about{" "}
            <span className="font-bold">your project</span>
          </p>
        </div>
        <a
          href="mailto:info@teamangulo.com"
          className="inline-flex h-[60px] shrink-0 items-center justify-center gap-2 self-start rounded-[100px] bg-[#f07b05] px-8 text-[16px] font-bold text-white hover:opacity-90 lg:mt-[17px]"
        >
          GET IN TOUCH
          <CtaArrow />
        </a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const services = [
    "Demolition & Removal",
    "Structural Repair",
    "Hardie & Vinyl Siding",
    "PVC Trim",
    "Metal Roofing",
  ];

  return (
    <footer className="bg-black px-6 py-12 text-white lg:px-[138px] lg:py-16">
      <div className="mx-auto grid max-w-[1644px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/figma/imgEditableLogo01.png"
            alt="Team Angulo Construction LLC"
            width={280}
            height={102}
            className="mb-6 h-auto w-[220px] lg:w-[280px]"
          />
          <p className="m-0 max-w-[316px] text-[16px] leading-relaxed lg:text-[18px]">
            Professional exterior solutions for residential and commercial properties in New
            Jersey.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[18px] font-bold lg:text-[20px]">SERVICES</p>
          <ul className="space-y-2">
            {services.map((title) => (
              <li key={title}>
                <Link href="/services" className="text-[16px] hover:opacity-80 lg:text-[20px]">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[18px] font-bold lg:text-[20px]">CONTACT</p>
          <ul className="space-y-3 text-[16px] lg:text-[20px]">
            <li>
              <a href="tel:+10000000000" className="hover:opacity-80">
                (XXX) XXX-XXXX
              </a>
            </li>
            <li>
              <a href="mailto:info@teamangulo.com" className="hover:opacity-80">
                info@teamangulo.com
              </a>
            </li>
            <li>New Jersey, USA</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[18px] font-bold lg:text-[20px]">FOLLOW US</p>
          <Image
            src="/figma/imgGrupo786.svg"
            alt="Social media"
            width={189}
            height={52}
            className="h-auto w-[160px] lg:w-[189px]"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1644px] border-t border-white/30 pt-6">
        <p className="m-0 text-[16px] lg:text-[20px]">© 2025 Team Angulo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function PageHero({
  imageSrc,
  title,
  titleAccent,
  subtitle,
  dark = true,
  activePath,
}: {
  imageSrc: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  dark?: boolean;
  activePath?: string;
}) {
  return (
    <section className="relative">
      <div className="relative min-h-[380px] sm:min-h-[460px]">
        <div className="absolute inset-0 overflow-hidden">
          <ParallaxBannerImage src={imageSrc} priority />
          {dark && <div className="absolute inset-0 z-[1] bg-[#1a2b3c]/55" aria-hidden />}
        </div>

        <NavBar variant="overlay" activePath={activePath} />

        <div className="relative z-10 flex min-h-[380px] flex-col justify-end px-6 pb-10 pt-28 sm:min-h-[460px] sm:px-10 sm:pb-14 lg:px-[138px]">
          <h1 className="m-0 max-w-[800px] text-[40px] font-bold leading-tight text-white sm:text-[56px] lg:text-[72px]">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-[#ff832a]">{titleAccent}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-[640px] text-[18px] leading-normal text-white/90 sm:text-[20px] lg:text-[30px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
