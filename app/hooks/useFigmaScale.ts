"use client";

import { useEffect, useState, type RefObject } from "react";

export function useFigmaScale(
  containerRef: RefObject<HTMLElement | null>,
  canvasWidth: number,
  maxScale = 1,
) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateScale = () => {
      const width = node.clientWidth || canvasWidth;
      setScale(Math.min(width / canvasWidth, maxScale));
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(node);
    window.addEventListener("resize", updateScale);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [canvasWidth, containerRef, maxScale]);

  return scale;
}
