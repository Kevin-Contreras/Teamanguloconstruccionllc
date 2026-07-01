"use client";

import { useEffect, useState, type RefObject } from "react";

export function useFigmaScale(
  containerRef: RefObject<HTMLElement | null>,
  canvasWidth: number,
) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateScale = () => {
      const width = node.clientWidth || canvasWidth;
      setScale(width / canvasWidth);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(node);
    window.addEventListener("resize", updateScale);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [canvasWidth, containerRef]);

  return scale;
}
