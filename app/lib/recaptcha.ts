type RecaptchaVerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

const DEFAULT_MIN_SCORE = 0.5;

export async function verifyRecaptchaToken(
  token: string,
  expectedAction = "contact",
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return { ok: false, reason: "missing_secret" };
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });

  if (!response.ok) {
    return { ok: false, reason: "verify_request_failed" };
  }

  const data = (await response.json()) as RecaptchaVerifyResponse;
  const minScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? DEFAULT_MIN_SCORE);

  if (!data.success) {
    return { ok: false, reason: "captcha_failed" };
  }

  if (data.action && data.action !== expectedAction) {
    return { ok: false, reason: "captcha_action_mismatch" };
  }

  if (typeof data.score === "number" && data.score < minScore) {
    return { ok: false, reason: "captcha_low_score" };
  }

  return { ok: true };
}
