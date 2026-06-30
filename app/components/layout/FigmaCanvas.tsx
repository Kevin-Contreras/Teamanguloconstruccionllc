"use client";

import { useRef, type ReactNode } from "react";
import { useFigmaScale } from "../../hooks/useFigmaScale";

export function FigmaCanvas({
  width,
  height,
  className = "",
  innerClassName = "bg-white",
  children,
}: {
  width: number;
  height: number;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useFigmaScale(containerRef, width);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
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
