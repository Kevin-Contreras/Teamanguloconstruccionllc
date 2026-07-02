"use client";

import { useLanguage } from "../../providers/LanguageProvider";

export function ContactFormFeedback({
  error,
  className = "",
}: {
  error?: string | null;
  className?: string;
}) {
  const { t } = useLanguage();

  return (
    <div className={className}>
      {error ? (
        <p className="m-0 text-[14px] leading-relaxed text-[#ffb4b4] sm:text-[16px]" role="alert">
          {error}
        </p>
      ) : null}
      <p className="m-0 mt-3 text-[11px] leading-relaxed text-white/45 sm:text-[12px]">
        {t.contact.form.recaptchaNotice}
      </p>
    </div>
  );
}
