import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { MotionObserver } from "./components/motion/MotionObserver";
import { LanguageProvider } from "./providers/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Team Angulo Construction LLC",
  description:
    "We install the exteriors that protect and define your property. Residential and commercial exterior solutions in New Jersey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} overflow-x-hidden antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <LanguageProvider>
          <MotionObserver />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
