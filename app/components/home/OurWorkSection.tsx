"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../providers/LanguageProvider";

const GALLERY_WIDTH = 1644;
const GALLERY_HEIGHT = 651;

const galleryLayout = [
  { src: "/figma/imgImage.png", left: 0, top: 0, width: 386, height: 291 },
  { src: "/figma/imgRectangle12347.png", left: 398, top: 0, width: 548, height: 651 },
  { src: "/figma/imgImages1.png", left: 958, top: 0, width: 684, height: 315 },
  { src: "/figma/imgImages2.png", left: 0, top: 305, width: 386, height: 347 },
  { src: "/figma/imgImages3.png", left: 958, top: 326, width: 308, height: 326 },
  { src: "/figma/imgImages4.png", left: 1276, top: 326, width: 368, height: 326 },
];

/** Figma node 1:192 — Our Work */
export function OurWorkSection() {
  const { t } = useLanguage();
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  
  const galleryImages = galleryLayout.map((img, i) => ({
    ...img,
    alt: t.home.ourWork.galleryAlts[i] || "",
  }));

  useEffect(() => {
    const updateScale = () => {
      const width = galleryRef.current?.clientWidth ?? GALLERY_WIDTH;
      setScale(width / GALLERY_WIDTH);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section id="work" className="bg-white py-14 lg:py-24">
      <div className="w-full px-6 lg:px-0">
        <div className="lg:ml-[138px] lg:mr-[155px]">
          <div className="mb-10 flex flex-col items-center text-center lg:mb-12">
            <div className="mb-5 h-[5px] w-16 rounded-full bg-[#f07b05] lg:mb-6" aria-hidden />
            <h2 className="m-0 text-[36px] font-bold leading-none text-[#ff832a] sm:text-[48px] lg:text-[72px]">
              {t.home.ourWork.title}
            </h2>
            <p className="m-0 mt-4 max-w-[1059px] text-[20px] leading-snug text-[#1c1c1c] sm:text-[28px] lg:mt-4 lg:text-[50px] lg:leading-tight">
              {t.home.ourWork.subtitle}
            </p>
            <p className="m-0 mt-4 max-w-[746px] text-[16px] leading-relaxed text-black sm:text-[18px] lg:mt-4 lg:text-[20px]">
              {t.home.ourWork.description}
            </p>
          </div>

          {/* Portfolio — single column on mobile/tablet */}
          <div className="flex flex-col gap-4 lg:hidden">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="100vw" />
              </div>
            ))}
          </div>

          <div
            ref={galleryRef}
            className="relative hidden w-full lg:block"
            style={{ height: GALLERY_HEIGHT * scale }}
          >
            <div
              className="absolute left-0 top-0 origin-top-left"
              style={{
                width: GALLERY_WIDTH,
                height: GALLERY_HEIGHT,
                transform: `scale(${scale})`,
              }}
            >
              {galleryImages.map((image) => (
                <div
                  key={image.src}
                  className="absolute overflow-hidden"
                  style={{
                    left: image.left,
                    top: image.top,
                    width: image.width,
                    height: image.height,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
