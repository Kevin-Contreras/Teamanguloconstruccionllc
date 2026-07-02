import { NextResponse } from "next/server";
import { verifyRecaptchaToken } from "../../lib/recaptcha";

type ContactRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  entryDate?: string;
  departureDate?: string;
  message?: string;
  captchaToken?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const captchaToken = body.captchaToken?.trim() ?? "";

  if (!name || !email || !message || !captchaToken) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const captcha = await verifyRecaptchaToken(captchaToken, "contact");
  if (!captcha.ok) {
    return NextResponse.json({ error: captcha.reason }, { status: 403 });
  }

  // Submission verified — plug in email/CRM integration here when ready.
  return NextResponse.json({ ok: true });
}
