"use client";

import Image from "next/image";
import { useEffect } from "react";

/** Figma node 1:1666 — Thank you modal after form submit */
export function ContactSuccessModal({
  top,
  height,
  onClose,
}: {
  top?: number;
  height: number;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="absolute left-0 z-30 flex items-center justify-center bg-[#1a2b3c]/60"
      style={{ top: top ?? 0, width: 1920, height }}
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
          aria-label="Close"
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
          Thank You for
          <br />
          <span className="text-[#ff832a]">Contacting Us!</span>
        </h2>

        <p className="mt-10 m-0 max-w-[665px] text-[30px] leading-normal text-black">
          We received your message and will be in touch shortly{" "}
          <span className="font-bold">to discuss your project.</span>
        </p>
      </div>
    </div>
  );
}
