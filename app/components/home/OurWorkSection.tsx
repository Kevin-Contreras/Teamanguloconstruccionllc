"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const GALLERY_WIDTH = 1644;
const GALLERY_HEIGHT = 651;

const galleryImages = [
  { src: "/figma/imgImage.png", alt: "Residential exterior project", left: 0, top: 0, width: 386, height: 291 },
  {
    src: "/figma/imgRectangle12347.png",
    alt: "Siding detail project",
    left: 398,
    top: 0,
    width: 548,
    height: 651,
  },
  {
    src: "/figma/imgImages1.png",
    alt: "Commercial storefront project",
    left: 958,
    top: 0,
    width: 684,
    height: 315,
  },
  {
    src: "/figma/imgImages2.png",
    alt: "Residential siding project",
    left: 0,
    top: 305,
    width: 386,
    height: 347,
  },
  {
    src: "/figma/imgImages3.png",
    alt: "Commercial building project",
    left: 958,
    top: 326,
    width: 308,
    height: 326,
  },
  {
    src: "/figma/imgImages4.png",
    alt: "Residential home project",
    left: 1276,
    top: 326,
    width: 368,
    height: 326,
  },
];

/** Figma node 1:192 — Our Work */
export function OurWorkSection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

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
              Our Work
            </h2>
            <p className="m-0 mt-4 max-w-[1059px] text-[20px] leading-snug text-[#1c1c1c] sm:text-[28px] lg:mt-4 lg:text-[50px] lg:leading-tight">
              Every project is a reflection of our{" "}
              <span className="font-bold">standards</span>
            </p>
            <p className="m-0 mt-4 max-w-[746px] text-[16px] leading-relaxed text-black sm:text-[18px] lg:mt-4 lg:text-[20px]">
              A selection of residential and commercial exteriors completed by Team Angulo.
            </p>
          </div>

          {/* Portfolio grid — node 1:193 */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className={`relative overflow-hidden ${image.width > 500 ? "col-span-2 aspect-[16/10]" : "aspect-[4/3]"}`}
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="50vw" />
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
