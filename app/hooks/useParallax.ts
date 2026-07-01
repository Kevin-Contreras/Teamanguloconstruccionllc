"use client";

import { useEffect, type RefObject } from "react";

function getCumulativeScale(el: HTMLElement): number {
  let scale = 1;
  let node: HTMLElement | null = el.parentElement;

  while (node) {
    const { transform } = getComputedStyle(node);
    if (transform && transform !== "none") {
      scale *= new DOMMatrix(transform).a;
    }
    node = node.parentElement;
  }

  return scale || 1;
}

export type ParallaxMode = "banner" | "section";

function getParallaxOffset(
  rect: DOMRect,
  windowH: number,
  speed: number,
  mode: ParallaxMode,
): number {
  if (mode === "banner") {
    return Math.max(0, -rect.top) * speed;
  }

  const totalTravel = rect.height + windowH;
  const traveled = windowH - rect.top;
  const progress = Math.max(0, Math.min(1, traveled / totalTravel));
  const maxOffset = rect.height * speed * 0.5;

  return (progress - 0.5) * 2 * maxOffset;
}

/** Scroll-linked vertical offset for banner/section backgrounds (respects reduced motion). */
export function useParallax(
  containerRef: RefObject<HTMLElement | null>,
  targetRef: RefObject<HTMLElement | null>,
  speed = 0.35,
  enabled = true,
  mode: ParallaxMode = "banner",
) {
  useEffect(() => {
    if (!enabled) return;

    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let raf = 0;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const scale = getCumulativeScale(target);
      const y = getParallaxOffset(rect, window.innerHeight, speed, mode) / scale;
      target.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      target.style.transform = "";
    };
  }, [containerRef, targetRef, speed, enabled, mode]);
}
