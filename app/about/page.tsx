import type { Metadata } from "next";
import { AboutPage } from "../components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Team Angulo Construction LLC",
  description:
    "Dedicated to excellence in exterior remodeling since 2018. Learn about Team Angulo's philosophy, values, and story.",
};

export default function About() {
  return (
    <main className="w-full bg-white">
      <AboutPage />
    </main>
  );
}
