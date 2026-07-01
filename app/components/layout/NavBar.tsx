"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage, useNavLinks } from "../../providers/LanguageProvider";

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
const navOpenBg = "bg-[#1a2b3c]/90 backdrop-blur-xl";
const navScrolledBg = "bg-[#1a2b3c]/75 backdrop-blur-md";
const navOverlayBg = "bg-[#1a2b3c]/35 backdrop-blur-md";

export function NavBar({
  variant = "overlay",
  activePath,
}: {
  variant?: "overlay" | "solid";
  activePath?: string;
}) {
  const { t } = useLanguage();
  const navLinks = useNavLinks();
  const pathname = usePathname();
  const resolvedActivePath = activePath ?? pathname;
  const [open, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const isOverlay = variant === "overlay";

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeaderHeight = () => {
      setHeaderHeight(header.offsetHeight);
    };

    updateHeaderHeight();

    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);

    return () => observer.disconnect();
  }, [mounted]);

  const closeMenu = () => setOpen(false);

  const headerBg = open
    ? "border-b border-white/10 bg-transparent"
    : isOverlay && !isScrolled
      ? navOverlayBg
      : navScrolledBg;

  const navUi = (
    <>
      <div
        className={`fixed inset-0 z-40 lg:hidden motion-reduce:transition-none ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 ${navOpenBg} transition-opacity duration-300 motion-reduce:transition-none ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-label={t.nav.closeMenu}
          tabIndex={open ? 0 : -1}
          onClick={closeMenu}
        />

        <div
          className={`relative flex h-full flex-col text-white transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
            open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ paddingTop: headerHeight }}
        >
          <nav className="flex flex-1 flex-col justify-center px-6">
            <ul className="mx-auto w-full max-w-[320px]">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`border-b border-white/10 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${80 + index * 55}ms` : "0ms" }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between py-5 text-[26px] font-medium transition-colors hover:text-[#ff832a] sm:text-[30px] ${
                      link.font === "montserrat" ? "font-['Montserrat']" : ""
                    } ${resolvedActivePath === link.href ? "font-bold text-[#ff832a]" : ""}`}
                    onClick={closeMenu}
                    tabIndex={open ? 0 : -1}
                  >
                    {link.label}
                    <span className="text-[#ff832a]" aria-hidden>
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`flex flex-col items-center gap-4 px-6 pb-10 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "320ms" : "0ms" }}
          >
            <Link
              href="/contact"
              className="inline-flex h-14 w-full max-w-[320px] items-center justify-center gap-2 rounded-[100px] bg-[#f07b05] text-[16px] font-bold shadow-lg shadow-[#f07b05]/25 transition-transform hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]"
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
            >
              {t.nav.contact}
              <CtaArrow />
            </Link>
            <LanguageToggle
              className="inline-flex h-12 w-full max-w-[320px] items-center justify-center rounded-[100px] border border-white/25 bg-white/5 text-[16px] font-bold backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10"
              tabIndex={open ? 0 : -1}
            />
          </div>
        </div>
      </div>

      <header
        ref={headerRef}
        data-no-animate
        className={`fixed top-0 left-0 right-0 z-50 w-full text-white lg:hidden transition-[background-color,backdrop-filter,border-color] duration-300 motion-reduce:transition-none ${headerBg}`}
      >
        <div className="w-full px-4 py-4 lg:px-[138px] lg:py-6">
          <div
            className={`flex items-center justify-between gap-3 px-1 py-1 lg:rounded-none lg:bg-transparent lg:p-0 ${
              isOverlay && !open
                ? "bg-transparent lg:bg-transparent"
                : !isOverlay && !open
                  ? "rounded-[100px] bg-[#243447]/75 px-3 py-2 backdrop-blur-md sm:px-4 sm:py-2.5 lg:bg-transparent"
                  : ""
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
                  } ${resolvedActivePath === link.href ? "font-bold" : "font-normal"}`}
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
                {t.nav.contact}
              </Link>
              <LanguageToggle className="flex h-12 w-12 items-center justify-center rounded-[100px] border border-white/30 text-[16px] font-bold hover:opacity-90" />
            </div>

            <button
              type="button"
              className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg lg:hidden"
              aria-expanded={open}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setOpen((value) => !value)}
            >
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ease-out motion-reduce:transition-none ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ease-out motion-reduce:transition-none ${
                  open ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ease-out motion-reduce:transition-none ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );

  if (!mounted) return null;

  return createPortal(navUi, document.body);
}
