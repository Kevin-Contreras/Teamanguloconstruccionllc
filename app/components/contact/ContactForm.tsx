"use client";

import { useSearchParams } from "next/navigation";
import { type CSSProperties, type FormEvent } from "react";
import { useFooterServices, useLanguage } from "../../providers/LanguageProvider";
import { parseContactServiceParam } from "../../utils/contactService";
import { orangePillBtn } from "../../utils/buttonClasses";
import { ContactFormFeedback } from "./ContactFormFeedback";

const fieldClass =
  "w-full rounded-[13px] border border-white/80 bg-white/10 px-4 text-[16px] text-white outline-none placeholder:text-white/60 focus:border-[#ff832a]";

export function ContactForm({
  onSubmit,
  className = "",
  style,
  dark = true,
  isSubmitting = false,
  error = null,
  submitClassName = "",
  submitStyle,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
  className?: string;
  style?: CSSProperties;
  dark?: boolean;
  isSubmitting?: boolean;
  error?: string | null;
  submitClassName?: string;
  submitStyle?: CSSProperties;
}) {
  const { t } = useLanguage();
  const services = useFooterServices();
  const searchParams = useSearchParams();
  const selectedService = parseContactServiceParam(searchParams.get("service"));

  const labelClass = dark ? "text-white" : "text-[#1c1c1c]";
  const inputClass = dark
    ? fieldClass
    : "w-full rounded-[13px] border border-[#1c1c1c]/30 bg-white px-4 text-[16px] text-[#1c1c1c] outline-none focus:border-[#ff832a]";
  const selectClass = `${inputClass} ${dark ? "[color-scheme:dark]" : "[color-scheme:light]"}`;

  return (
    <form className={className} style={style} onSubmit={onSubmit}>
      <div className="grid gap-6 sm:grid-cols-2 lg:gap-[36px]">
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

      <div className="mt-6 lg:mt-[31px]">
        <label className={`mb-2 block text-[16px] sm:text-[20px] ${labelClass}`} htmlFor="contact-email">
          {t.contact.form.email}
        </label>
        <input id="contact-email" name="email" type="email" required className={inputClass} style={{ height: 57 }} />
      </div>

      <div className="mt-6 lg:mt-[31px]">
        <label className={`mb-2 block text-[16px] sm:text-[20px] ${labelClass}`} htmlFor="contact-service">
          {t.contact.form.service}
        </label>
        <select
          id="contact-service"
          name="service"
          required
          defaultValue={selectedService}
          key={selectedService}
          className={selectClass}
          style={{ height: 57 }}
        >
          <option value="" disabled>
            {t.contact.form.servicePlaceholder}
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 lg:mt-[31px]">
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
        disabled={isSubmitting}
        style={submitStyle}
        className={
          submitClassName ||
          `${orangePillBtn} mt-8 inline-flex h-14 min-w-[206px] items-center justify-center rounded-[100px] px-8 text-[18px] font-medium disabled:cursor-not-allowed disabled:opacity-60 sm:text-[22px]`
        }
      >
        {isSubmitting ? t.contact.form.sending : t.common.send}
      </button>

      <ContactFormFeedback error={error} className="mt-4" />
    </form>
  );
}
