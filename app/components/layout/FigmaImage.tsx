"use client";

import Image from "next/image";
import { useRef } from "react";
import { useParallax } from "../../hooks/useParallax";
import { ParallaxBannerImage } from "./ParallaxBannerImage";

type FigmaImageProps = {
  src: string;
  alt?: string;
  left: number;
  top: number;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  parallax?: boolean;
  parallaxSpeed?: number;
};

function FigmaParallaxImage({
  src,
  alt = "",
  width,
  priority = false,
  parallaxSpeed = 0.25,
}: Pick<FigmaImageProps, "src" | "alt" | "width" | "priority" | "parallaxSpeed">) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useParallax(containerRef, imageRef, parallaxSpeed, true, "section");

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <div
        ref={imageRef}
        className="absolute -top-[12%] left-0 h-[124%] w-full will-change-transform"
      >
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes={`${Math.round(width)}px`}
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}

/** Absolute-positioned photo for Figma desktop canvases — fill + cover, no stretch. */
export function FigmaImage({
  src,
  alt = "",
  left,
  top,
  width,
  height,
  className = "",
  priority = false,
  parallax = false,
  parallaxSpeed = 0.25,
}: FigmaImageProps) {
  return (
    <div
      className={`absolute ${className}`}
      style={{ left, top, width, height }}
    >
      {parallax ? (
        <FigmaParallaxImage
          src={src}
          alt={alt}
          width={width}
          priority={priority}
          parallaxSpeed={parallaxSpeed}
        />
      ) : (
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes={`${Math.round(width)}px`}
            priority={priority}
          />
        </div>
      )}
    </div>
  );
}

type FigmaHeroImageProps = {
  src: string;
  className?: string;
  priority?: boolean;
  parallax?: boolean;
};

/** Fills the hero band parent (must have fixed height + overflow-hidden). */
export function FigmaHeroImage({
  src,
  className = "",
  priority = false,
  parallax = true,
}: FigmaHeroImageProps) {
  return (
    <ParallaxBannerImage
      src={src}
      className={`absolute inset-0 ${className}`}
      priority={priority}
      parallax={parallax}
      mode="banner"
    />
  );
}
