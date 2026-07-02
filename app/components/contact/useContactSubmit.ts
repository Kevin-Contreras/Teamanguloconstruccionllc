"use client";

import { useCallback, useState, type FormEvent } from "react";
import { useLanguage } from "../../providers/LanguageProvider";
import { executeRecaptcha } from "../../utils/recaptchaClient";

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  entryDate: string;
  departureDate: string;
  message: string;
  captchaToken: string;
};

function getErrorMessage(code: string, fallback: string) {
  const messages: Record<string, string> = {
    missing_secret: fallback,
    captcha_failed: fallback,
    captcha_low_score: fallback,
    captcha_action_mismatch: fallback,
    verify_request_failed: fallback,
    invalid_payload: fallback,
    recaptcha_site_key_missing: fallback,
    recaptcha_unavailable: fallback,
    recaptcha_script_failed: fallback,
  };

  return messages[code] ?? fallback;
}

export function useContactSubmit(onSuccess: () => void) {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(null);
      setIsSubmitting(true);

      const form = event.currentTarget;

      try {
        const formData = new FormData(form);
        const captchaToken = await executeRecaptcha("contact");

        const payload: ContactPayload = {
          name: String(formData.get("name") ?? "").trim(),
          phone: String(formData.get("phone") ?? "").trim(),
          email: String(formData.get("email") ?? "").trim(),
          entryDate: String(formData.get("entryDate") ?? "").trim(),
          departureDate: String(formData.get("departureDate") ?? "").trim(),
          message: String(formData.get("message") ?? "").trim(),
          captchaToken,
        };

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;

        if (!response.ok) {
          throw new Error(getErrorMessage(data?.error ?? "", t.contact.form.submitError));
        }

        form.reset();
        onSuccess();
      } catch (caught) {
        const message =
          caught instanceof Error
            ? getErrorMessage(caught.message, t.contact.form.submitError)
            : t.contact.form.submitError;

        setError(message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [onSuccess, t.contact.form.submitError],
  );

  return { submit, isSubmitting, error };
}
