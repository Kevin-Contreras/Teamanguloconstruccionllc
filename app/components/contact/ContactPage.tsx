"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ContactPageMobile } from "../layout/MobilePages";
import { ContactSuccessModal } from "./ContactSuccessModal";

const PAGE_WIDTH = 1920;
const FOOTER_TOP = 1115;
const PAGE_HEIGHT = 1578;

const fieldClass =
  "w-full rounded-[13px] border border-white bg-transparent px-4 text-[16px] text-white outline-none placeholder:text-white/60 focus:border-[#ff832a]";

function CalendarIcon() {
  return (
    <Image
      src="/figma/contact/icon-calendar.svg"
      alt=""
      width={26}
      height={25}
      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 opacity-60"
      aria-hidden
    />
  );
}

/** Figma node 1:1507 — Contact page */
export function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const width = containerRef.current?.clientWidth ?? PAGE_WIDTH;
      setScale(Math.min(width / PAGE_WIDTH, 1));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="lg:hidden">
        <ContactPageMobile />
      </div>
      <div className="hidden w-full overflow-hidden bg-black lg:block">
      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-[1920px] overflow-hidden"
        style={{ height: PAGE_HEIGHT * scale }}
      >
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{
            width: PAGE_WIDTH,
            height: PAGE_HEIGHT,
            transform: `scale(${scale})`,
          }}
        >
          {/* Full-page background — nodes 1:1513–1:1515 */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/figma/contact/hero-bg.png"
              alt=""
              width={2656}
              height={1313}
              className="absolute object-cover"
              style={{ left: -4, top: -178, width: 2656, height: 1313 }}
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
            style={{ left: 141, top: 66, width: 1614, height: 79 }}
          />
          <Link href="/" className="absolute z-20" style={{ left: 117, top: 43 }}>
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
            className="absolute z-20 text-[17px] font-normal text-white hover:opacity-80"
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

          {/* Hero copy — nodes 1:1578–1:1577 */}
          <div className="absolute z-10" style={{ left: 138, top: 402, width: 560 }}>
            <h1 className="m-0 text-[90px] font-bold leading-[110px] text-white">Ready to</h1>
            <h1 className="m-0 text-[90px] font-bold leading-[110px] text-[#ff832a]">Get Started?</h1>
          </div>
          <div className="absolute z-10" style={{ left: 138, top: 658 }}>
            <Image
              src="/figma/contact/accent-line.svg"
              alt=""
              width={76}
              height={5}
              style={{ width: 76.5, height: 5 }}
              aria-hidden
            />
          </div>
          <p
            className="absolute z-10 m-0 text-[30px] leading-normal text-white"
            style={{ left: 138, top: 715, width: 644 }}
          >
            Fill out the form and let us guide you through your next exterior project. We&apos;re
            here to make the process simple and stress-free.
          </p>

          {/* Contact form — nodes 1:1583–1:1618 */}
          <form
            className="absolute z-10"
            style={{ left: 1020, top: 377, width: 742 }}
            onSubmit={handleSubmit}
          >
            <div className="flex gap-[36px]">
              <div style={{ width: 353 }}>
                <label className="mb-2 block text-[20px] text-white" htmlFor="contact-name">
                  Name:
                </label>
                <input id="contact-name" name="name" type="text" className={fieldClass} style={{ height: 57 }} />
              </div>
              <div style={{ width: 353 }}>
                <label className="mb-2 block text-[20px] text-white" htmlFor="contact-phone">
                  Phone:
                </label>
                <input id="contact-phone" name="phone" type="tel" className={fieldClass} style={{ height: 57 }} />
              </div>
            </div>

            <div className="mt-[31px]">
              <label className="mb-2 block text-[20px] text-white" htmlFor="contact-email">
                Email address
              </label>
              <input id="contact-email" name="email" type="email" className={fieldClass} style={{ height: 57 }} />
            </div>

            <div className="mt-[31px] flex gap-[36px]">
              <div style={{ width: 353 }}>
                <label className="mb-2 block text-[20px] text-white" htmlFor="contact-entry-date">
                  Entry date
                </label>
                <div className="relative">
                  <CalendarIcon />
                  <input
                    id="contact-entry-date"
                    name="entryDate"
                    type="date"
                    className={`${fieldClass} pl-12 [color-scheme:dark]`}
                    style={{ height: 57 }}
                  />
                </div>
              </div>
              <div style={{ width: 353 }}>
                <label className="mb-2 block text-[20px] text-white" htmlFor="contact-departure-date">
                  Departure date
                </label>
                <div className="relative">
                  <CalendarIcon />
                  <input
                    id="contact-departure-date"
                    name="departureDate"
                    type="date"
                    className={`${fieldClass} pl-12 [color-scheme:dark]`}
                    style={{ height: 57 }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-[31px]">
              <label className="mb-2 block text-[20px] text-white" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                className={`${fieldClass} resize-none py-3`}
                style={{ height: 120 }}
              />
            </div>

            <button
              type="submit"
              className="relative mt-[20px] inline-flex items-center justify-center hover:opacity-90"
              style={{ width: 206, height: 56 }}
            >
              <Image
                src="/figma/contact/btn-send.svg"
                alt=""
                width={206}
                height={56}
                className="pointer-events-none absolute inset-0 h-full w-full"
              />
              <span className="relative z-10 text-[22px] text-white">Send</span>
            </button>
          </form>

          {submitted && (
            <ContactSuccessModal
              height={FOOTER_TOP}
              onClose={() => setSubmitted(false)}
              variant="desktop"
            />
          )}

          {/* Footer — node 1:1516 */}
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
    </>
  );
}
