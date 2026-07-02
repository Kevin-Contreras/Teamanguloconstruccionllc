export type ContactEmailPayload = {
  name: string;
  phone: string;
  email: string;
  entryDate: string;
  departureDate: string;
  message: string;
};

const BRAND_ORANGE = "#f07b05";
const BRAND_ORANGE_LIGHT = "#ff832a";
const BRAND_DARK = "#1a2b3c";
const TEXT_MUTED = "#6b7280";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getSiteUrl() {
  return (
    process.env.SITE_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://teamanguloconstruccionllc.vercel.app"
  ).replace(/\/$/, "");
}

function getLogoUrl() {
  return `${getSiteUrl()}/figma/imgEditableLogo01.png`;
}

function formatDate(value: string) {
  if (!value) return "";

  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function fieldRow(label: string, value: string, href?: string) {
  const display = value ? escapeHtml(value) : "—";
  const valueHtml = href && value
    ? `<a href="${href}" style="color:${BRAND_ORANGE};text-decoration:none;font-weight:600;">${display}</a>`
    : `<span style="color:#1c1c1c;font-weight:600;">${display}</span>`;

  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #ececec;width:38%;vertical-align:top;">
        <span style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${TEXT_MUTED};">${label}</span>
      </td>
      <td style="padding:14px 0 14px 16px;border-bottom:1px solid #ececec;vertical-align:top;font-size:16px;line-height:1.5;">
        ${valueHtml}
      </td>
    </tr>
  `;
}

function buildHtml(payload: ContactEmailPayload) {
  const logoUrl = getLogoUrl();
  const submittedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/New_York",
  }).format(new Date());

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New contact — Team Angulo</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f3f4f6;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f3f4f6;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:620px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
            <tr>
              <td style="background-color:${BRAND_DARK};padding:28px 32px;text-align:center;">
                <img
                  src="${logoUrl}"
                  alt="Team Angulo Construction LLC"
                  width="220"
                  style="display:block;margin:0 auto;max-width:220px;height:auto;border:0;"
                />
              </td>
            </tr>
            <tr>
              <td style="height:5px;background:linear-gradient(90deg, ${BRAND_ORANGE} 0%, ${BRAND_ORANGE_LIGHT} 100%);font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:32px 32px 8px;">
                <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${BRAND_ORANGE};">
                  Website Contact Form
                </p>
                <h1 style="margin:0 0 10px;font-size:28px;line-height:1.2;color:#111827;font-family:Arial,Helvetica,sans-serif;">
                  New message from ${escapeHtml(payload.name)}
                </h1>
                <p style="margin:0;font-size:14px;line-height:1.6;color:${TEXT_MUTED};font-family:Arial,Helvetica,sans-serif;">
                  Received on ${submittedAt} (ET)
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-family:Arial,Helvetica,sans-serif;">
                  ${fieldRow("Name", payload.name)}
                  ${fieldRow("Phone", payload.phone, payload.phone ? `tel:${payload.phone.replace(/\s/g, "")}` : undefined)}
                  ${fieldRow("Email", payload.email, payload.email ? `mailto:${payload.email}` : undefined)}
                  ${fieldRow("Entry date", formatDate(payload.entryDate))}
                  ${fieldRow("Departure date", formatDate(payload.departureDate))}
                </table>

                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:24px;font-family:Arial,Helvetica,sans-serif;">
                  <tr>
                    <td style="padding:20px 22px;background-color:#fafafa;border-left:4px solid ${BRAND_ORANGE};border-radius:0 12px 12px 0;">
                      <p style="margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${TEXT_MUTED};">
                        Message
                      </p>
                      <p style="margin:0;font-size:16px;line-height:1.7;color:#1c1c1c;white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
                    </td>
                  </tr>
                </table>

                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:28px;">
                  <tr>
                    <td align="center">
                      <a
                        href="mailto:${escapeHtml(payload.email)}?subject=${encodeURIComponent(`Re: Your inquiry — Team Angulo`)}"
                        style="display:inline-block;padding:14px 28px;background-color:${BRAND_ORANGE};color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;border-radius:999px;font-family:Arial,Helvetica,sans-serif;"
                      >
                        Reply to ${escapeHtml(payload.name)}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px;background-color:#fafafa;border-top:1px solid #ececec;text-align:center;">
                <p style="margin:0;font-size:12px;line-height:1.6;color:${TEXT_MUTED};font-family:Arial,Helvetica,sans-serif;">
                  Team Angulo Construction LLC · New Jersey, USA<br />
                  Sent automatically from the contact form at
                  <a href="${getSiteUrl()}/contact" style="color:${BRAND_ORANGE};text-decoration:none;">${getSiteUrl()}/contact</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildText(payload: ContactEmailPayload) {
  const submittedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/New_York",
  }).format(new Date());

  return [
    "TEAM ANGULO — NEW CONTACT FORM SUBMISSION",
    "==========================================",
    "",
    `Received: ${submittedAt} (ET)`,
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone || "—"}`,
    `Email: ${payload.email}`,
    `Entry date: ${payload.entryDate || "—"}`,
    `Departure date: ${payload.departureDate || "—"}`,
    "",
    "Message:",
    payload.message,
    "",
    `Reply: ${payload.email}`,
    "",
    getSiteUrl(),
  ].join("\n");
}

export async function sendContactEmail(
  payload: ContactEmailPayload,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Team Angulo Contact <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return { ok: false, reason: "email_not_configured" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `New contact from ${payload.name} — Team Angulo`,
      html: buildHtml(payload),
      text: buildText(payload),
    }),
  });

  if (!response.ok) {
    console.error("Resend error:", await response.text());
    return { ok: false, reason: "email_send_failed" };
  }

  return { ok: true };
}
