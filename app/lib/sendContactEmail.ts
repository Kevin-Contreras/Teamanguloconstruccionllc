export type ContactEmailPayload = {
  name: string;
  phone: string;
  email: string;
  entryDate: string;
  departureDate: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatField(label: string, value: string) {
  return value
    ? `<tr><td style="padding:8px 12px;font-weight:600;">${label}</td><td style="padding:8px 12px;">${escapeHtml(value)}</td></tr>`
    : "";
}

function buildHtml(payload: ContactEmailPayload) {
  return `
    <div style="font-family:Arial,sans-serif;color:#1c1c1c;line-height:1.5;">
      <h2 style="margin:0 0 16px;color:#f07b05;">New contact form submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">
        ${formatField("Name", payload.name)}
        ${formatField("Phone", payload.phone)}
        ${formatField("Email", payload.email)}
        ${formatField("Entry date", payload.entryDate)}
        ${formatField("Departure date", payload.departureDate)}
      </table>
      <p style="margin:20px 0 8px;font-weight:600;">Message</p>
      <p style="margin:0;white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
    </div>
  `;
}

function buildText(payload: ContactEmailPayload) {
  return [
    "New contact form submission",
    "",
    `Name: ${payload.name}`,
    payload.phone ? `Phone: ${payload.phone}` : null,
    `Email: ${payload.email}`,
    payload.entryDate ? `Entry date: ${payload.entryDate}` : null,
    payload.departureDate ? `Departure date: ${payload.departureDate}` : null,
    "",
    "Message:",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");
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
