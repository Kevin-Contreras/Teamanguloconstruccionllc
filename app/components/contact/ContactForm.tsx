"use client";

import Image from "next/image";
import { type FormEvent } from "react";
import { useLanguage } from "../../providers/LanguageProvider";

const fieldClass =
  "w-full rounded-[13px] border border-white/80 bg-white/10 px-4 text-[16px] text-white outline-none placeholder:text-white/60 focus:border-[#ff832a]";

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

export function ContactForm({
  onSubmit,
  className = "",
  dark = true,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  className?: string;
  dark?: boolean;
}) {
  const { t } = useLanguage();
  const labelClass = dark ? "text-white" : "text-[#1c1c1c]";
  const inputClass = dark
    ? fieldClass
    : "w-full rounded-[13px] border border-[#1c1c1c]/30 bg-white px-4 text-[16px] text-[#1c1c1c] outline-none focus:border-[#ff832a]";

  return (
    <form className={className} onSubmit={onSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={`mb-2 block text-[16px] sm:text-[20px] ${labelClass}`} htmlFor="contact-name">
            {t.contact.form.name}
          </label>
          <input id="contact-name" name="name" type="text" required className={inputClass} style={{ height: 57 }} />
        </div>
        <div>
          <label className={`mb-2 block text-[16px] sm:text-[20px] ${labelClass}`} htmlFor="contact-phone">
            {t.contact.form.phone}
          </label>
          <input id="contact-phone" name="phone" type="tel" className={inputClass} style={{ height: 57 }} />
        </div>
      </div>

      <div className="mt-6">
        <label className={`mb-2 block text-[16px] sm:text-[20px] ${labelClass}`} htmlFor="contact-email">
          {t.contact.form.email}
        </label>
        <input id="contact-email" name="email" type="email" required className={inputClass} style={{ height: 57 }} />
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label className={`mb-2 block text-[16px] sm:text-[20px] ${labelClass}`} htmlFor="contact-entry-date">
            {t.contact.form.entryDate}
          </label>
          <div className="relative">
            {dark && <CalendarIcon />}
            <input
              id="contact-entry-date"
              name="entryDate"
              type="date"
              className={`${inputClass} ${dark ? "pl-12 [color-scheme:dark]" : "[color-scheme:light]"}`}
              style={{ height: 57 }}
            />
          </div>
        </div>
        <div>
          <label
            className={`mb-2 block text-[16px] sm:text-[20px] ${labelClass}`}
            htmlFor="contact-departure-date"
          >
            {t.contact.form.departureDate}
          </label>
          <div className="relative">
            {dark && <CalendarIcon />}
            <input
              id="contact-departure-date"
              name="departureDate"
              type="date"
              className={`${inputClass} ${dark ? "pl-12 [color-scheme:dark]" : "[color-scheme:light]"}`}
              style={{ height: 57 }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className={`mb-2 block text-[16px] sm:text-[20px] ${labelClass}`} htmlFor="contact-message">
          {t.contact.form.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className={`${inputClass} resize-none py-3`}
          style={{ minHeight: 120 }}
        />
      </div>

      <button
        type="submit"
        className="relative mt-8 inline-flex h-14 min-w-[206px] items-center justify-center hover:opacity-90"
      >
        <Image
          src="/figma/contact/btn-send.svg"
          alt=""
          width={206}
          height={56}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <span className="relative z-10 text-[18px] font-medium text-white sm:text-[22px]">{t.common.send}</span>
      </button>
    </form>
  );
}
