"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { FigmaImage } from "../layout/FigmaImage";
import { FigmaDesktopNav } from "../layout/FigmaDesktopNav";
import { PageClosing } from "../layout/PageClosing";
import { ContactPageMobile } from "../layout/MobilePages";
import { ContactSuccessModal } from "./ContactSuccessModal";
import { useLanguage } from "../../providers/LanguageProvider";

const PAGE_WIDTH = 1920;
const FOOTER_TOP = 1115;
const PAGE_HEIGHT = FOOTER_TOP;

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
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const width = containerRef.current?.clientWidth ?? PAGE_WIDTH;
      setScale(width / PAGE_WIDTH);
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
        className="relative w-full overflow-hidden"
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
            <FigmaImage
              src="/figma/contact/hero-bg.png"
              alt=""
              left={-4}
              top={-178}
              width={2656}
              height={1313}
              className="z-0"
              priority
            />
            <div className="absolute inset-0 bg-[#1a2b3c]/55" aria-hidden />
          </div>

          {/* Nav */}
          <FigmaDesktopNav activePath="/contact" />

          {/* Hero copy — nodes 1:1578–1:1577 */}
          <div className="absolute z-10" style={{ left: 138, top: 402, width: 560 }}>
            <h1 className="m-0 text-[90px] font-bold leading-[110px] text-white">{t.contact.heroLine1}</h1>
            <h1 className="m-0 text-[90px] font-bold leading-[110px] text-[#ff832a]">
              {t.contact.heroAccent}
            </h1>
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
            {t.contact.heroSubtext}
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
                  {t.contact.form.name}
                </label>
                <input id="contact-name" name="name" type="text" className={fieldClass} style={{ height: 57 }} />
              </div>
              <div style={{ width: 353 }}>
                <label className="mb-2 block text-[20px] text-white" htmlFor="contact-phone">
                  {t.contact.form.phone}
                </label>
                <input id="contact-phone" name="phone" type="tel" className={fieldClass} style={{ height: 57 }} />
              </div>
            </div>

            <div className="mt-[31px]">
              <label className="mb-2 block text-[20px] text-white" htmlFor="contact-email">
                {t.contact.form.email}
              </label>
              <input id="contact-email" name="email" type="email" className={fieldClass} style={{ height: 57 }} />
            </div>

            <div className="mt-[31px] flex gap-[36px]">
              <div style={{ width: 353 }}>
                <label className="mb-2 block text-[20px] text-white" htmlFor="contact-entry-date">
                  {t.contact.form.entryDate}
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
                  {t.contact.form.departureDate}
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
                {t.contact.form.message}
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
              <span className="relative z-10 text-[22px] text-white">{t.common.send}</span>
            </button>
          </form>

          {submitted && (
            <ContactSuccessModal
              height={FOOTER_TOP}
              onClose={() => setSubmitted(false)}
              variant="desktop"
            />
          )}
        </div>
      </div>
    </div>
      <PageClosing />
    </>
  );
}
