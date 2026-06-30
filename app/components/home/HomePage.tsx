import Image from "next/image";
import { AboutSection } from "./AboutSection";
import { Hero } from "./Hero";
import { OurWorkSection } from "./OurWorkSection";
import { FAQSection } from "./FAQSection";
import { QualityBannerSection } from "./QualityBannerSection";
import { ResidentialCommercialSection } from "./ResidentialCommercialSection";
import { ServicesSection } from "./ServicesSection";

const ORANGE = "#f07b05";

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1920px] px-6 md:px-[138px] ${className}`}>
      {children}
    </div>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const values = [
  {
    icon: "/figma/imgGrupo14.svg",
    iconWidth: 60,
    iconHeight: 59,
    title: "Quality",
    description:
      "Every project is held to the highest standard, from the first inspection to the final installation.",
  },
  {
    icon: "/figma/imgGrupo18.svg",
    iconWidth: 84,
    iconHeight: 52,
    title: "Integrity",
    description:
      "We operate with full transparency honest assessments, clear communication, and fair pricing.",
  },
  {
    icon: "/figma/imgGrupo20.svg",
    iconWidth: 58,
    iconHeight: 58,
    title: "Reliability",
    description: "Committed to every deadline, every project, every client.",
  },
];

function Values() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-0">
        <div className="lg:ml-[138px] lg:mr-[155px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            {values.map((value, index) => (
              <div key={value.title} className="contents">
                {index > 0 && (
                  <div
                    className="hidden lg:block h-[78px] w-px shrink-0 bg-[#d9d9d9]"
                    aria-hidden
                  />
                )}
                <div className="flex min-w-0 flex-1 items-center gap-4">
                  <Image
                    src={value.icon}
                    alt=""
                    width={value.iconWidth}
                    height={value.iconHeight}
                    className="shrink-0"
                    style={{ width: value.iconWidth, height: value.iconHeight }}
                  />
                  <div className="min-w-0">
                    <h3 className="mb-2 text-[22px] font-bold leading-none text-[#1c1c1c]">
                      {value.title}
                    </h3>
                    <p className="text-[14px] leading-normal text-[#1c1c1c]">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HardieSiding() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-7 text-[32px] font-bold leading-tight md:text-[42px] lg:text-[50px]">
              <span style={{ color: ORANGE }}>Hardie Siding</span>
              <br />
              <span className="text-[#1c1c1c]">Specialists</span>
            </h2>
            <Image
              src="/figma/about-line2.svg"
              alt=""
              width={64}
              height={5}
              className="mb-6"
              style={{ width: 64, height: 5 }}
            />
            <p className="mb-8 max-w-[611px] text-[18px] leading-normal text-[#1c1c1c] lg:text-[20px]">
              James Hardie fiber cement siding is one of the most durable and low
              maintenance exterior solutions available in the market today. At Team
              Angulo, we are certified specialists in its installation from full
              demolition of existing materials to a flawless, professional finish that
              protects your property for decades.
            </p>
            <a
              href="#work"
              className="inline-flex h-[60px] items-center justify-center gap-2 rounded-[100px] border-1 border-[#f07b05] px-8 text-[16px] font-bold text-[#f07b05] hover:opacity-90"
            >
              SEE OUR HARDIE PROJECTS
              <ArrowIcon />
            </a>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/figma/imgWhatsAppImage20260508At75616Am2.png"
              alt="Hardie siding project"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <Container className="text-center">
        <h2 className="mb-4 text-[32px] font-bold md:text-[42px] lg:text-[50px]">
          Ready to <span style={{ color: ORANGE }}>transform</span>
          <br />
          your exterior?
        </h2>
        <p className="mb-8 text-[18px] text-[#1c1c1c] lg:text-[20px]">
          Contact us today and let&apos;s talk about your project
        </p>
        <a
          href="mailto:info@teamangulo.com"
          className="inline-flex items-center gap-2 bg-[#f07b05] px-8 py-4 text-[16px] font-bold text-white"
        >
          GET A QUOTE <ArrowIcon />
        </a>
      </Container>
    </section>
  );
}

const footerServices = [
  "Demolition & Removal",
  "Structural Repair",
  "Hardie & Vinyl Siding",
  "PVC Trim",
  "Metal Roofing",
];

function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/figma/imgEditableLogo01.png"
              alt="Team Angulo"
              width={370}
              height={135}
              className="mb-6 h-16 w-auto"
            />
            <p className="text-[16px] leading-relaxed text-gray-400">
              Professional exterior solutions for residential and commercial
              properties in New Jersey.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-[20px] font-bold">SERVICES</h3>
            <ul className="space-y-2 text-[16px] text-gray-400">
              {footerServices.map((title) => (
                <li key={title}>
                  <a href="#services" className="hover:text-white">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-[20px] font-bold">CONTACT</h3>
            <ul className="space-y-2 text-[16px] text-gray-400">
              <li>(XXX) XXX-XXXX</li>
              <li>
                <a href="mailto:info@teamangulo.com" className="hover:text-white">
                  info@teamangulo.com
                </a>
              </li>
              <li>New Jersey, USA</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-[20px] font-bold">FOLLOW US</h3>
            <Image
              src="/figma/imgGrupo786.svg"
              alt="Social media"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-center text-[14px] text-gray-500">
            © 2025 Team Angulo. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Values />
      <HardieSiding />
      <OurWorkSection />
      <ServicesSection />
      <ResidentialCommercialSection />
      <QualityBannerSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
