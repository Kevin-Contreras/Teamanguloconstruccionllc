"use client";

import Image from "next/image";
import { useRef } from "react";
import { useParallax, type ParallaxMode } from "../../hooks/useParallax";

type ParallaxBannerImageProps = {
  src: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  speed?: number;
  parallax?: boolean;
  mode?: ParallaxMode;
};

/** Hero/banner background with subtle scroll parallax. Parent must clip overflow. */
export function ParallaxBannerImage({
  src,
  className = "absolute inset-0",
  imageClassName = "object-cover object-center",
  priority = false,
  sizes = "100vw",
  speed = 0.35,
  parallax = true,
  mode = "banner",
}: ParallaxBannerImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useParallax(containerRef, imageRef, speed, parallax, mode);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div
        ref={imageRef}
        className="absolute -top-[12%] left-0 h-[124%] w-full will-change-transform"
      >
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt=""
            fill
            className={imageClassName}
            sizes={sizes}
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}
