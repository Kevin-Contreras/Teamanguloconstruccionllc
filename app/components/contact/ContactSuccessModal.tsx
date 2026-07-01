"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../providers/LanguageProvider";

/** Figma node 1:1666 — Thank you modal after form submit */
export function ContactSuccessModal({
  onClose,
  variant = "desktop",
}: {
  onClose: () => void;
  variant?: "desktop" | "mobile";
}) {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const isDesktop = variant === "desktop";

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const modal = (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-success-title"
      onClick={onClose}
    >
      {/* Overlay — black tint + light frosted blur */}
      <div className="contact-success-overlay absolute inset-0" aria-hidden />

      <div
        className={`relative z-10 flex max-h-[90vh] w-full flex-col items-center overflow-y-auto bg-white text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] ${
          isDesktop
            ? "max-w-[720px] rounded-[28px] px-10 pb-10 pt-12 sm:px-12"
            : "max-w-[440px] rounded-[28px] p-7 sm:p-8"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[28px] leading-none text-[#1c1c1c] hover:bg-black/5 sm:right-6 sm:top-6"
          aria-label={t.common.close}
        >
          ×
        </button>

        <Image
          src="/figma/contact/icon-success-check.svg"
          alt=""
          width={isDesktop ? 120 : 96}
          height={isDesktop ? 120 : 96}
          className="shrink-0"
          aria-hidden
        />

        <h2
          id="contact-success-title"
          className={`m-0 font-bold text-black ${
            isDesktop
              ? "mt-6 text-[44px] leading-[1.05] sm:text-[64px] sm:leading-[72px]"
              : "mt-5 text-[30px] leading-tight sm:text-[40px]"
          }`}
        >
          {t.contact.successTitle}
          <br />
          <span className="text-[#ff832a]">{t.contact.successAccent}</span>
        </h2>

        <p
          className={`m-0 text-black ${
            isDesktop
              ? "mt-8 max-w-[540px] text-[20px] leading-normal sm:text-[24px]"
              : "mt-5 text-[16px] leading-relaxed sm:text-[18px]"
          }`}
        >
          {t.contact.successBody}{" "}
          <span className="font-bold italic">{t.contact.successBodyBold}</span>
        </p>
      </div>
    </div>
  );

  if (!mounted) return null;

  return createPortal(modal, document.body);
}
