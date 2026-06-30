import Image from "next/image";
import { Hero } from "./Hero";

const ORANGE = "#f07b05";
const ORANGE_LIGHT = "#ff832a";

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

function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-[20px] text-[#1c1c1c]">
              Welcome to <span className="italic">Team Angulo</span>
            </p>
            <div className="mb-8 h-[3px] w-16 bg-[#f07b05]" />
            <h2 className="text-[32px] leading-[1.2] text-[#1c1c1c] md:text-[42px] lg:text-[50px]">
              We work for property owners who refuse to settle{" "}
              <span className="font-bold" style={{ color: ORANGE }}>
                for anything less than done right.
              </span>
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10">
              <div>
                <p className="text-[50px] font-bold leading-none text-[#1c1c1c]">
                  7<span className="text-[40px] font-normal">+</span>
                </p>
                <p className="mt-2 text-[20px] text-[#1c1c1c]">
                  Years in <span className="italic">Business</span>
                </p>
              </div>
              <div className="border-l border-gray-200 pl-8">
                <p className="text-[50px] font-bold leading-none text-[#1c1c1c]">
                  100<span className="text-[40px] font-normal">+</span>
                </p>
                <p className="mt-2 text-[20px] text-[#1c1c1c]">
                  Projects <span className="italic">Completed</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-[18px] leading-relaxed text-black lg:text-[20px]">
              Every property deserves an exterior{" "}
              <span className="font-bold">built to last</span>, and that&apos;s
              exactly what we deliver. At Team Angulo, quality isn&apos;t a
              promise we make lightly. It&apos;s a standard we hold ourselves to
              on every single project, residential or commercial. We show up, we
              do the work right, and we stand behind every job we complete.
            </p>
            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-2 self-start text-[16px] font-bold"
              style={{ color: ORANGE }}
            >
              WHO WE ARE <ArrowIcon />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

const values = [
  {
    icon: "/figma/imgGrupo14.svg",
    title: "Quality",
    description:
      "Every project is held to the highest standard, from the first inspection to the final installation.",
  },
  {
    icon: "/figma/imgGrupo18.svg",
    title: "Integrity",
    description:
      "We operate with full transparency — honest assessments, clear communication, and fair pricing.",
  },
  {
    icon: "/figma/imgGrupo20.svg",
    title: "Reliability",
    description:
      "Committed to every deadline, every project, every client.",
  },
];

function Values() {
  return (
    <section className="bg-white pb-20 lg:pb-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center md:text-left">
              <Image
                src={value.icon}
                alt=""
                width={125}
                height={124}
                className="mx-auto mb-6 h-20 w-20 md:mx-0"
              />
              <h3 className="mb-4 text-[24px] font-bold text-[#1c1c1c]">
                {value.title}
              </h3>
              <p className="text-[16px] leading-relaxed text-[#1c1c1c] lg:text-[18px]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HardieSiding() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 text-[32px] font-bold leading-tight md:text-[42px] lg:text-[50px]">
              <span style={{ color: ORANGE }}>Hardie Siding</span>
              <br />
              Specialists
            </h2>
            <p className="mb-4 text-[18px] leading-relaxed text-[#1c1c1c] lg:text-[20px]">
              James Hardie fiber cement siding is one of the most durable and
              low maintenance exterior solutions available in the market today.
            </p>
            <p className="mb-8 text-[18px] leading-relaxed text-[#1c1c1c] lg:text-[20px]">
              At Team Angulo, we are certified specialists in its installation —
              from full demolition of existing materials to a flawless,
              professional finish that protects your property for decades.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-[#f07b05] px-6 py-3 text-[16px] font-bold"
              style={{ color: ORANGE }}
            >
              SEE OUR HARDIE PROJECTS <ArrowIcon />
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

const galleryImages = [
  "/figma/imgImages1.png",
  "/figma/imgImages2.png",
  "/figma/imgImage.png",
  "/figma/imgImages3.png",
  "/figma/imgImages4.png",
];

function OurWork() {
  return (
    <section id="work" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-[32px] font-bold md:text-[42px] lg:text-[50px]">
            Our Work
          </h2>
          <p className="mx-auto max-w-2xl text-[18px] text-[#1c1c1c] lg:text-[20px]">
            A selection of residential and commercial exteriors completed by Team
            Angulo.
          </p>
          <p className="mt-2 text-[18px] text-[#1c1c1c] lg:text-[20px]">
            Every project is a reflection of our standards
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          <div className="relative col-span-2 row-span-2 aspect-[3/4] overflow-hidden md:aspect-auto">
            <Image
              src={galleryImages[0]}
              alt="Project 1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {galleryImages.slice(1).map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt={`Project ${i + 2}`}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#work"
            className="text-[16px] font-bold"
            style={{ color: ORANGE }}
          >
            MORE
          </a>
        </div>
      </Container>
    </section>
  );
}

const services = [
  {
    title: "Demolition & Removal",
    description: "Safe removal of existing exterior materials",
  },
  {
    title: "Structural Repair",
    description: "Damaged framing fixed before anything goes up",
  },
  {
    title: "Hardie & Vinyl Siding",
    description: "Specialists in fiber cement & vinyl installation",
  },
  {
    title: "PVC Trim",
    description: "Clean, polished finish on every detail",
  },
  {
    title: "Metal Roofing",
    description: "Standing seam installation for any property",
  },
];

function Services() {
  return (
    <section id="services" className="bg-black py-20 text-white lg:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-[32px] font-bold leading-tight md:text-[42px] lg:text-[50px]">
              Discover
              <br />
              <span style={{ color: ORANGE_LIGHT }}>Our Exterior</span>
              <br />
              Solutions
            </h2>
            <p className="max-w-md text-[18px] leading-relaxed text-gray-300 lg:text-[20px]">
              From residential homes to commercial properties, we deliver premium
              exterior remodeling tailored to every need.
            </p>
          </div>
          <div className="divide-y divide-white/20">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex items-center justify-between py-6"
              >
                <div>
                  <h3 className="text-[20px] font-bold">{service.title}</h3>
                  <p className="mt-1 text-[16px] text-gray-400">
                    {service.description}
                  </p>
                </div>
                <ArrowIcon className="shrink-0 text-white" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Residential() {
  return (
    <section id="residential" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-2 text-[16px] text-gray-500">For homeowners</p>
            <h2
              className="mb-6 text-[32px] font-bold md:text-[42px] lg:text-[50px]"
              style={{ color: ORANGE }}
            >
              Residential
            </h2>
            <p className="mb-8 text-[18px] leading-relaxed text-[#1c1c1c] lg:text-[20px]">
              Every residential project we take on is treated with the same
              standard — thorough preparation, precise installation, and a
              finished result built to last. From single-family homes to
              multi-unit properties, we deliver exterior solutions that protect
              and add value to your home for decades.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-[16px] font-bold"
              style={{ color: ORANGE }}
            >
              SEE RESIDENTIAL PROJECTS <ArrowIcon />
            </a>
          </div>
          <div className="relative order-1 aspect-[4/3] w-full overflow-hidden lg:order-2">
            <Image
              src="/figma/imgContemporaryHouseWithShingleDetailAndBlueSk20260326104821Utc.png"
              alt="Residential project"
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

function Commercial() {
  return (
    <section id="commercial" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/figma/imgIndustrialFactoryFacadeWithSteelMashes20260325224915Utc.png"
              alt="Commercial project"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="mb-2 text-[16px] text-gray-500">For business owners</p>
            <h2
              className="mb-6 text-[32px] font-bold md:text-[42px] lg:text-[50px]"
              style={{ color: ORANGE }}
            >
              Commercial
            </h2>
            <p className="mb-8 text-[18px] leading-relaxed text-[#1c1c1c] lg:text-[20px]">
              Commercial projects demand precision, efficiency, and minimal
              disruption. We understand the stakes — a well-executed exterior
              reflects directly on your business. We work within your timeline,
              maintain a clean and organized job site, and deliver results that
              meet the highest professional standards.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-[16px] font-bold"
              style={{ color: ORANGE }}
            >
              SEE COMMERCIAL PROJECTS <ArrowIcon />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function QualityBanner() {
  return (
    <section className="relative overflow-hidden bg-[#f07b05] py-20 text-white lg:py-28">
      <Container className="relative z-10 text-center">
        <h2 className="text-[28px] font-bold leading-tight md:text-[36px] lg:text-[50px]">
          Quality is not a differentiator,
          <br />
          it&apos;s the baseline.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[18px] lg:text-[20px]">
          Every project we deliver is held to the same standard, from the
          smallest repair to the largest installation
        </p>
      </Container>
    </section>
  );
}

const faqs = [
  "Do you work on both residential and commercial properties?",
  "Do I need to vacate my property during the work?",
  "How long does a typical project take?",
  "Do you offer warranties on your work?",
  "What is the first step to get started?",
];

function FAQ() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <h2 className="mb-12 text-[32px] font-bold md:text-[42px] lg:text-[50px]">
          Frequently <span style={{ color: ORANGE }}>Questions</span>
        </h2>
        <div className="divide-y divide-gray-200">
          {faqs.map((question) => (
            <details key={question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[18px] font-medium text-[#1c1c1c] lg:text-[20px]">
                {question}
                <span className="ml-4 shrink-0 text-[#f07b05] transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
            </details>
          ))}
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
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-white">
                    {s.title}
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
      <About />
      <Values />
      <HardieSiding />
      <OurWork />
      <Services />
      <Residential />
      <Commercial />
      <QualityBanner />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
}
