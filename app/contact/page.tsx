import type { Metadata } from "next";
import { ContactPage } from "../components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Team Angulo Construction LLC",
  description:
    "Get in touch with Team Angulo Construction LLC. Fill out our form and let us guide you through your next exterior project.",
};

export default function Contact() {
  return (
    <main className="w-full bg-black">
      <ContactPage />
    </main>
  );
}
