import { NextResponse } from "next/server";
import { isServiceSectionSlug } from "../../utils/contactService";
import { verifyRecaptchaToken } from "../../lib/recaptcha";
import { sendContactEmail } from "../../lib/sendContactEmail";

type ContactRequestBody = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
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
  const phone = body.phone?.trim() ?? "";
  const service = body.service?.trim() ?? "";

  if (!name || !email || !message || !service || !captchaToken) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  if (!isServiceSectionSlug(service)) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const captcha = await verifyRecaptchaToken(captchaToken, "contact");
  if (!captcha.ok) {
    return NextResponse.json({ error: captcha.reason }, { status: 403 });
  }

  const emailResult = await sendContactEmail({
    name,
    phone,
    email,
    service,
    message,
  });

  if (!emailResult.ok) {
    return NextResponse.json({ error: emailResult.reason }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
