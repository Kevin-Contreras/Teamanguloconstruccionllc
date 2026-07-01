"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage, useServiceNames } from "../../providers/LanguageProvider";
import { SiteFooter } from "./SiteLayout";

const SECTION_WIDTH = 1920;
const SECTION_HEIGHT = 463;

const serviceTops = [112, 152, 192, 232, 272];

const contactItems = [
  {
    label: "(XXX) XXX-XXXX",
    href: "tel:+10000000000",
    icon: "/figma/imgGrupo775.svg",
    iconWidth: 17,
    iconHeight: 17,
    iconTop: 131,
    textTop: 125,
  },
  {
    label: "info@teamangulo.com",
    href: "mailto:info@teamangulo.com",
    icon: "/figma/imgGrupo777.svg",
    iconWidth: 18,
    iconHeight: 15,
    iconTop: 170,
    textTop: 165,
  },
  {
    href: undefined,
    icon: "/figma/imgGrupo779.svg",
    iconWidth: 15,
    iconHeight: 18,
    iconTop: 206,
    textTop: 205,
  },
];

/** Figma node 1:443 — Footer */
export function FooterSection() {
  const { t } = useLanguage();
  const services = useServiceNames();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = containerRef.current?.clientWidth ?? SECTION_WIDTH;
      setScale(width / SECTION_WIDTH);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <>
      <div className="lg:hidden">
        <SiteFooter />
      </div>
      <footer className="hidden overflow-hidden bg-black text-white lg:block">
        <div
          ref={containerRef}
          className="relative w-full"
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
            <Image
              src="/figma/imgEditableLogo01.png"
              alt="Team Angulo Construction LLC"
              width={370}
              height={135}
              className="absolute object-contain"
              style={{ left: 138, top: 47, width: 370, height: 135 }}
            />

            <p
              className="absolute m-0 text-[18px] leading-normal text-[#a8a8a8]"
              style={{ left: 160, top: 205, width: 316 }}
            >
              {t.footer.taglineLine1}
              <br />
              {t.footer.taglineLine2}
              <br />
              {t.footer.taglineLine3}
            </p>

            <p
              className="absolute m-0 text-[20px] font-bold leading-normal text-white"
              style={{ left: 643, top: 73 }}
            >
              {t.footer.services}
            </p>
            {services.map((title, index) => (
              <Link
                key={title}
                href="/services"
                className="absolute m-0 text-[20px] leading-normal text-[#a8a8a8] hover:opacity-80"
                style={{ left: 643, top: serviceTops[index] }}
              >
                {title}
              </Link>
            ))}

            <p
              className="absolute m-0 text-[20px] font-bold leading-normal text-white"
              style={{ left: 1047, top: 86 }}
            >
              {t.footer.contact}
            </p>
            {contactItems.map((item) => {
              const label = item.href ? item.label : t.footer.location;
              return (
              <div key={item.href ?? "location"}>
                <Image
                  src={item.icon}
                  alt=""
                  width={item.iconWidth}
                  height={item.iconHeight}
                  className="absolute"
                  style={{
                    left: 1047,
                    top: item.iconTop,
                    width: item.iconWidth,
                    height: item.iconHeight,
                  }}
                  aria-hidden
                />
                {item.href ? (
                  <a
                    href={item.href}
                    className="absolute m-0 text-[20px] leading-normal text-[#a8a8a8] hover:opacity-80"
                    style={{ left: 1076, top: item.textTop }}
                  >
                    {label}
                  </a>
                ) : (
                  <p
                    className="absolute m-0 text-[20px] leading-normal text-[#a8a8a8]"
                    style={{ left: 1076, top: item.textTop }}
                  >
                    {label}
                  </p>
                )}
              </div>
            );
            })}

            <p
              className="absolute m-0 text-[20px] font-bold leading-normal text-white"
              style={{ left: 1468, top: 86 }}
            >
              {t.footer.followUs}
            </p>
            <Image
              src="/figma/imgGrupo786.svg"
              alt={t.footer.socialAlt}
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
              className="absolute m-0 text-[20px] leading-normal text-[#a8a8a8]"
              style={{ left: 138, top: 400 }}
            >
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
