"use client";

import { useRef, type ReactNode } from "react";
import { useFigmaScale } from "../../hooks/useFigmaScale";

export function FigmaCanvas({
  width,
  height,
  className = "",
  innerClassName = "bg-white",
  children,
  maxScale = 1,
}: {
  width: number;
  height: number;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  maxScale?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useFigmaScale(containerRef, width, maxScale);

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto w-full max-w-[1920px] overflow-hidden ${className}`}
      style={{ height: height * scale }}
    >
      <div
        className={`absolute left-0 top-0 origin-top-left ${innerClassName}`}
        style={{
          width,
          height,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
