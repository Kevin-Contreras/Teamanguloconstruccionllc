"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../providers/LanguageProvider";
import { orangePillBtn } from "../../utils/buttonClasses";

export function ContactAreaNoticeModal() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(true);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-area-notice-title"
    >
      <div className="contact-success-overlay absolute inset-0" aria-hidden />

      <div
        className="relative z-10 w-full max-w-[520px] rounded-[28px] bg-white px-8 py-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:px-10"
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="mx-auto mb-5 h-1 w-16 rounded-full bg-[#ff832a]"
          aria-hidden
        />

        <h2
          id="contact-area-notice-title"
          className="m-0 text-[28px] font-bold leading-tight text-black sm:text-[36px]"
        >
          {t.contact.areaNoticeTitle}
        </h2>

        <p className="mx-auto mt-5 max-w-[420px] text-[16px] leading-relaxed text-[#1c1c1c] sm:text-[18px]">
          {t.contact.areaNoticeBody}
        </p>

        <button
          type="button"
          onClick={() => setOpen(false)}
          className={`${orangePillBtn} locale-pill-btn mt-8 inline-flex h-[52px] min-w-[180px] items-center justify-center rounded-[100px] px-8 text-[16px] font-bold`}
        >
          {t.contact.areaNoticeAccept}
        </button>
      </div>
    </div>,
    document.body,
  );
}
