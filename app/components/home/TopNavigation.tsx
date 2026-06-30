import Image from "next/image";
import Link from "next/link";

/** Figma node 1:24 — Top Navigation (canvas 1920px) */
export function TopNavigation() {
  return (
    <header className="absolute left-0 top-0 z-20 h-[155px] w-full">
      {/* Nav bar pill — Figma node 1:25 @ 140,66 1614×79 */}
      <Image
        src="/figma/imgTopNavigation.svg"
        alt=""
        width={1614}
        height={79}
        className="absolute pointer-events-none"
        style={{ left: 140, top: 66, width: 1614, height: 79 }}
        aria-hidden
      />

      {/* Logo — Figma node 1:48 @ 116,43 306×112 */}
      <Link href="/" className="absolute z-10" style={{ left: 116, top: 43 }}>
        <Image
          src="/figma/imgEditableLogo10.png"
          alt="Team Angulo"
          width={306}
          height={112}
          className="block"
          style={{ width: 306, height: 112 }}
          priority
        />
      </Link>

      {/* Services — Figma node 1:31 @ 1013,84 Montserrat 16px */}
      <Link
        href="/services"
        className="absolute font-['Montserrat'] text-[16px] font-normal leading-none text-white hover:opacity-80"
        style={{ left: 1013, top: 84 }}
      >
        Services
      </Link>

      {/* Residential — Figma node 1:29 @ 1140,85 Inter 16px */}
      <Link
        href="/residential"
        className="absolute text-[16px] font-normal leading-none text-white hover:opacity-80"
        style={{ left: 1140, top: 85 }}
      >
        Residential
      </Link>

      {/* Commercial — Figma node 1:33 @ 1274,82 Inter 17px */}
      <Link
        href="/commercial"
        className="absolute text-[17px] font-normal leading-none text-white hover:opacity-80"
        style={{ left: 1274, top: 82 }}
      >
        Commercial
      </Link>

      {/* About Us — Figma node 1:35 @ 1425,82 Inter 17px */}
      <Link
        href="/about"
        className="absolute text-[17px] font-normal leading-none text-white hover:opacity-80"
        style={{ left: 1425, top: 82 }}
      >
        About Us
      </Link>

      {/* Contact button — Figma node 1:39 @ 1538,69 154×48 */}
      <Link
        href="/contact"
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
      </Link>

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
