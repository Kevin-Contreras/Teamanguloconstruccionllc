"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const navLinks = [
  { href: "/services", label: "Services", font: "montserrat" as const },
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/about", label: "About Us" },
];

function CtaArrow() {
  return (
    <svg width={14} height={15} viewBox="0 0 14.174 14.571" fill="none" aria-hidden>
      <path
        d="M10.786 8.20002H0V6.37502H10.786L5.825 1.27502L7.087 1.95503e-05L14.174 7.28502L7.087 14.571L5.825 13.3L10.786 8.20002Z"
        fill="white"
      />
    </svg>
  );
}

const logoClassName = "h-14 w-auto sm:h-16 lg:h-[66px] lg:w-[180px]";

export function NavBar({
  variant = "overlay",
  activePath,
}: {
  variant?: "overlay" | "solid";
  activePath?: string;
}) {
  const [open, setOpen] = useState(false);
  const isOverlay = variant === "overlay";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`relative z-40 w-full ${
          isOverlay ? "text-white" : "bg-[#1a2b3c] text-white"
        }`}
      >
        <div className="mx-auto max-w-[1920px] px-4 py-4 lg:px-[138px] lg:py-6">
          <div
            className={`flex items-center justify-between gap-3 px-1 py-1 lg:rounded-none lg:bg-transparent lg:p-0 ${
              isOverlay
                ? "bg-transparent lg:bg-transparent"
                : "rounded-[100px] bg-[#243447]/95 px-3 py-2 sm:px-4 sm:py-2.5 lg:bg-transparent"
            }`}
          >
            <Link href="/" className="relative z-10 shrink-0" onClick={closeMenu}>
              <Image
                src="/figma/imgEditableLogo10.png"
                alt="Team Angulo"
                width={180}
                height={66}
                className={logoClassName}
                priority
              />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap text-[16px] hover:opacity-80 ${
                    link.font === "montserrat" ? "font-['Montserrat']" : ""
                  } ${activePath === link.href ? "font-bold" : "font-normal"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-[100px] bg-[#f07b05] px-6 text-[16px] font-bold hover:opacity-90"
              >
                Contact
              </Link>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-[100px] border border-white/30 text-[16px] font-bold hover:opacity-90"
                aria-label="Switch to Spanish"
              >
                ES
              </button>
            </div>

            <button
              type="button"
              className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#1a2b3c] text-white lg:hidden">
          <div className="flex items-center justify-between px-4 py-4">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/figma/imgEditableLogo10.png"
                alt="Team Angulo"
                width={180}
                height={66}
                className={logoClassName}
              />
            </Link>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-2xl leading-none"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              ×
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[28px] font-medium hover:text-[#ff832a] sm:text-[32px] ${
                  link.font === "montserrat" ? "font-['Montserrat']" : ""
                } ${activePath === link.href ? "font-bold text-[#ff832a]" : ""}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4 px-6 pb-10">
            <Link
              href="/contact"
              className="inline-flex h-14 w-full max-w-[320px] items-center justify-center gap-2 rounded-[100px] bg-[#f07b05] text-[16px] font-bold hover:opacity-90"
              onClick={closeMenu}
            >
              Contact
              <CtaArrow />
            </Link>
            <button
              type="button"
              className="inline-flex h-12 w-full max-w-[320px] items-center justify-center rounded-[100px] border border-white/30 text-[16px] font-bold hover:opacity-90"
              aria-label="Switch to Spanish"
            >
              ES
            </button>
          </div>
        </div>
      )}
    </>
  );
}
