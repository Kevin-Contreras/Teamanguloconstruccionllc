"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const EXCLUDE_SELECTOR = "nav, header, [data-no-animate]";
const TEXT_SELECTOR =
  "h1, h2, h3, h4, p, li, .faq-question, blockquote, dt, dd, label, span.faq-question";

const MAX_STAGGER = 6;

function isExcluded(element: Element) {
  return !!element.closest(EXCLUDE_SELECTOR);
}

function prepareTextReveals() {
  const containers = document.querySelectorAll("section, footer, .origin-top-left, [data-animate-section]");
  containers.forEach((container) => {
    if (isExcluded(container)) return;
    if (container.closest("[data-no-animate]")) return;

    const reveals = Array.from(container.querySelectorAll(TEXT_SELECTOR)).filter((el) => {
      if (isExcluded(el)) return false;
      if (el.hasAttribute("data-text-reveal")) return false;
      return Boolean(el.textContent?.trim());
    });

    reveals.forEach((el, index) => {
      el.setAttribute("data-text-reveal", "");
      (el as HTMLElement).style.setProperty(
        "--reveal-i",
        String(Math.min(index, MAX_STAGGER))
      );
    });
  });

  document.querySelectorAll("[data-animate-text]").forEach((el, index) => {
    if (el.hasAttribute("data-text-reveal")) return;
    el.setAttribute("data-text-reveal", "");
    (el as HTMLElement).style.setProperty("--reveal-i", String(index % (MAX_STAGGER + 1)));
  });
}

export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    prepareTextReveals();

    if (reducedMotion) {
      document.querySelectorAll("[data-text-reveal], [data-animate-hero]").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    const observe = () => {
      document.querySelectorAll("[data-text-reveal]").forEach((el) => {
        if (isExcluded(el)) return;
        if (el.classList.contains("is-visible")) return;
        observer.observe(el);
      });

      document.querySelectorAll("[data-animate-hero]").forEach((el) => {
        if (el.classList.contains("is-visible")) return;
        observer.observe(el);
      });
    };

    observe();

    const heroTimer = window.setTimeout(() => {
      document.querySelectorAll("[data-animate-hero]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-visible");
          el.querySelectorAll("[data-text-reveal]").forEach((child) => {
            child.classList.add("is-visible");
          });
        }
      });
    }, 50);

    return () => {
      window.clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
