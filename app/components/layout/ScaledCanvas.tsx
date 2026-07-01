"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useLanguage } from "../../providers/LanguageProvider";

export function ScaledCanvas({
  width,
  minHeight = 0,
  className = "",
  innerClassName = "",
  children,
}: {
  width: number;
  minHeight?: number;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { locale } = useLanguage();
  const [scale, setScale] = useState(1);
  const [innerHeight, setInnerHeight] = useState(minHeight);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const update = () => {
      const nextScale = (container.clientWidth || width) / width;
      setScale(nextScale);
      setInnerHeight(Math.max(minHeight, inner.offsetHeight));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    observer.observe(inner);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [width, minHeight, locale]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ height: innerHeight * scale }}
    >
      <div
        ref={innerRef}
        className={`absolute left-0 top-0 origin-top-left ${innerClassName}`}
        style={{ width, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
