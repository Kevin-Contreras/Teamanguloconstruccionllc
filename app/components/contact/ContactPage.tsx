"use client";

import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";
import { FigmaImage } from "../layout/FigmaImage";
import { TopNavigation } from "../layout/TopNavigation";
import { PageClosing } from "../layout/PageClosing";
import { ContactPageMobile } from "../layout/MobilePages";
import { ContactAreaNoticeModal } from "./ContactAreaNoticeModal";
import { ContactForm } from "./ContactForm";
import { ContactSuccessModal } from "./ContactSuccessModal";
import { useContactSubmit } from "./useContactSubmit";
import { useLanguage } from "../../providers/LanguageProvider";
import { orangePillBtn } from "../../utils/buttonClasses";

const PAGE_WIDTH = 1920;
const FOOTER_TOP = 1115;
const PAGE_HEIGHT = FOOTER_TOP;

function ContactPageDesktopForm() {
  const [submitted, setSubmitted] = useState(false);
  const { submit, isSubmitting, error } = useContactSubmit(() => setSubmitted(true));

  return (
    <>
      <ContactForm
        onSubmit={submit}
        isSubmitting={isSubmitting}
        error={error}
        className="absolute z-10"
        style={{ left: 1020, top: 377, width: 742 }}
        submitStyle={{ width: 206, height: 56 }}
        submitClassName={`${orangePillBtn} mt-[20px] inline-flex items-center justify-center rounded-[100px] text-[22px] font-medium disabled:cursor-not-allowed disabled:opacity-60`}
      />
      {submitted && <ContactSuccessModal onClose={() => setSubmitted(false)} variant="desktop" />}
    </>
  );
}

/** Figma node 1:1507 — Contact page */
export function ContactPage() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = containerRef.current?.clientWidth ?? PAGE_WIDTH;
      setScale(width / PAGE_WIDTH);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <>
      <ContactAreaNoticeModal />
      <div className="lg:hidden">
        <Suspense fallback={null}>
          <ContactPageMobile />
        </Suspense>
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

            <TopNavigation />

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

            <Suspense fallback={null}>
              <ContactPageDesktopForm />
            </Suspense>
          </div>
        </div>
      </div>
      <PageClosing />
    </>
  );
}
