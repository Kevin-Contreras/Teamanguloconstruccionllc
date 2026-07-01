import type { RefObject } from "react";

const SERVICES_PAGE_WIDTH = 1920;
const NAV_OFFSET = 120;

export function getServiceSectionSlugFromHash(): string {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return "";

  const segments = raw.split("#").filter(Boolean);
  return segments[segments.length - 1] ?? "";
}

export function normalizeServiceSectionHash(): void {
  if (window.location.pathname !== "/services") return;

  const slug = getServiceSectionSlugFromHash();
  if (!slug) return;

  const expectedHash = `#${slug}`;
  if (window.location.hash !== expectedHash) {
    window.history.replaceState(null, "", `/services${expectedHash}`);
  }
}

function getServicesCanvas(containerRef?: RefObject<HTMLDivElement | null> | null) {
  return (
    containerRef?.current ??
    document.querySelector<HTMLDivElement>("[data-services-scaled-canvas]")
  );
}

export function scrollToServiceSectionFromHash(
  containerRef?: RefObject<HTMLDivElement | null> | null,
) {
  normalizeServiceSectionHash();

  const slug = getServiceSectionSlugFromHash();
  if (!slug) return;

  const run = () => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    if (isDesktop) {
      const canvas = getServicesCanvas(containerRef);
      const anchor = canvas?.querySelector<HTMLElement>(
        `[data-service-section="${slug}"]`,
      );
      if (!canvas || !anchor) return;

      const top = Number.parseFloat(anchor.style.top);
      if (Number.isNaN(top)) return;

      const scale = canvas.clientWidth / SERVICES_PAGE_WIDTH;
      const pageTop = canvas.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(0, pageTop + top * scale - NAV_OFFSET),
        behavior: "smooth",
      });
      return;
    }

    const mobileTarget = document.querySelector<HTMLElement>(
      `.lg\\:hidden [data-service-section="${slug}"]`,
    );
    const target =
      mobileTarget ??
      document.querySelector<HTMLElement>(`[data-service-section="${slug}"]`);

    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  requestAnimationFrame(run);
  window.setTimeout(run, 100);
  window.setTimeout(run, 350);
}
