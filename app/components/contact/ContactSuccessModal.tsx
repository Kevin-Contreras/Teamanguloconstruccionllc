"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useLanguage } from "../../providers/LanguageProvider";

/** Figma node 1:1666 — Thank you modal after form submit */
export function ContactSuccessModal({
  top,
  height,
  onClose,
  variant = "desktop",
}: {
  top?: number;
  height?: number;
  onClose: () => void;
  variant?: "desktop" | "mobile";
}) {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (variant === "mobile") {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a2b3c]/70 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-success-title"
        onClick={onClose}
      >
        <div
          className="relative flex max-h-[90vh] w-full max-w-[520px] flex-col items-center overflow-y-auto rounded-[32px] bg-white p-8 text-center sm:p-10"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[28px] text-[#1c1c1c] hover:bg-black/5"
            aria-label={t.common.close}
          >
            ×
          </button>
          <Image
            src="/figma/contact/icon-success-check.svg"
            alt=""
            width={120}
            height={120}
            className="shrink-0"
            aria-hidden
          />
          <h2 id="contact-success-title" className="mt-6 text-[36px] font-bold leading-tight text-black sm:text-[48px]">
            {t.contact.successTitle}{" "}
            <span className="text-[#ff832a]">{t.contact.successAccent}</span>
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-black sm:text-[22px]">
            {t.contact.successBody}{" "}
            <span className="font-bold">{t.contact.successBodyBold}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute left-0 z-30 flex items-center justify-center bg-[#1a2b3c]/60"
      style={{ top: top ?? 0, width: 1920, height: height ?? 1115 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-success-title"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center bg-white text-center"
        style={{ width: 893, height: 648, borderRadius: 32, padding: "65px 48px 48px" }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[28px] leading-none text-[#1c1c1c] hover:bg-black/5"
          aria-label={t.common.close}
        >
          ×
        </button>
        <Image
          src="/figma/contact/icon-success-check.svg"
          alt=""
          width={148}
          height={148}
          className="shrink-0"
          aria-hidden
        />
        <h2
          id="contact-success-title"
          className="mt-8 m-0 text-[80px] font-bold leading-[90px] text-black"
        >
          {t.contact.successTitle}
          <br />
          <span className="text-[#ff832a]">{t.contact.successAccent}</span>
        </h2>
        <p className="mt-10 m-0 max-w-[665px] text-[30px] leading-normal text-black">
          {t.contact.successBody}{" "}
          <span className="font-bold">{t.contact.successBodyBold}</span>
        </p>
      </div>
    </div>
  );
}
