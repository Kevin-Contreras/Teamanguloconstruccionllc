import Image from "next/image";

/** Figma node 1:24 — Top Navigation (canvas 1920px) */
export function TopNavigation() {
  return (
    <header className="absolute left-0 top-0 z-20 h-[155px] w-full">
      {/* Nav bar pill — Figma node 1:25 @ 140,66 1614×79 */}
      <div
        className="absolute rounded-full "
        style={{ left: 140, top: 66, width: 1614, height: 79 }}
        aria-hidden
      />

      {/* Logo — Figma node 1:48 @ 116,43 306×112 */}
      <Image
        src="/figma/imgEditableLogo10.png"
        alt="Team Angulo"
        width={306}
        height={112}
        className="absolute"
        style={{ left: 116, top: 43, width: 306, height: 112 }}
        priority
      />

      {/* Services — Figma node 1:31 @ 1013,84 Montserrat 16px */}
      <a
        href="#services"
        className="absolute font-['Montserrat'] text-[16px] font-normal leading-none text-white hover:opacity-80"
        style={{ left: 1013, top: 84 }}
      >
        Services
      </a>

      {/* Residential — Figma node 1:29 @ 1140,85 Inter 16px */}
      <a
        href="#residential"
        className="absolute text-[16px] font-normal leading-none text-white hover:opacity-80"
        style={{ left: 1140, top: 85 }}
      >
        Residential
      </a>

      {/* Commercial — Figma node 1:33 @ 1274,82 Inter 17px */}
      <a
        href="#commercial"
        className="absolute text-[17px] font-normal leading-none text-white hover:opacity-80"
        style={{ left: 1274, top: 82 }}
      >
        Commercial
      </a>

      {/* About Us — Figma node 1:35 @ 1425,82 Inter 17px */}
      <a
        href="#about"
        className="absolute text-[17px] font-normal leading-none text-white hover:opacity-80"
        style={{ left: 1425, top: 82 }}
      >
        About Us
      </a>

      {/* Contact button — Figma node 1:39 @ 1538,69 154×48 */}
      <a
        href="#contact"
        className="absolute flex items-center justify-center hover:opacity-90"
        style={{ left: 1538, top: 69, width: 154, height: 48 }}
      >
        <Image
          src="/figma/imgRectangulo5.svg"
          alt=""
          width={154}
          height={48}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
        <span className="relative z-10 text-[17px] font-bold leading-none text-white">
          Contact
        </span>
      </a>

      {/* ES language — Figma node 1:44 @ 1730,69 50×48 */}
      <button
        type="button"
        className="absolute flex cursor-pointer items-center justify-center hover:opacity-90"
        style={{ left: 1730, top: 69, width: 50, height: 48 }}
        aria-label="Switch to Spanish"
      >
        <Image
          src="/figma/imgRectangulo18.svg"
          alt=""
          width={50}
          height={48}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
        <span className="relative z-10 text-[17px] font-bold leading-none text-white">
          ES
        </span>
      </button>
    </header>
  );
}
