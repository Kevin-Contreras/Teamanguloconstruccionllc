"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ContactForm } from "../contact/ContactForm";
import { ContactSuccessModal } from "../contact/ContactSuccessModal";
import { PageHero, SiteCta, SiteFooter, SiteHeader } from "./SiteLayout";

export function ContactPageMobile() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative bg-[#1a2b3c]">
      <div className="absolute inset-0 z-0">
        <Image src="/figma/contact/hero-bg.png" alt="" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-[#1a2b3c]/55" aria-hidden />
      </div>

      <div className="relative z-10">
        <SiteHeader variant="overlay" activePath="/contact" />
        <section className="px-6 pb-10 pt-4">
          <h1 className="m-0 text-[40px] font-bold leading-tight text-white sm:text-[56px]">
            Ready to
            <br />
            <span className="text-[#ff832a]">Get Started?</span>
          </h1>
          <Image src="/figma/contact/accent-line.svg" alt="" width={76} height={5} className="mt-6" aria-hidden />
          <p className="mt-6 max-w-[640px] text-[18px] leading-normal text-white sm:text-[22px]">
            Fill out the form and let us guide you through your next exterior project.
          </p>
        </section>
        <section className="relative px-6 pb-14">
          <ContactForm
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          />
        </section>
        <SiteFooter />
      </div>

      {submitted && <ContactSuccessModal onClose={() => setSubmitted(false)} variant="mobile" />}
    </div>
  );
}

export function AboutPageMobile() {
  const values = [
    { title: "Experience", body: "Over 7 years delivering exterior remodeling for residential and commercial properties." },
    { title: "Specialty", body: "Certified specialists in James Hardie fiber cement siding and standing seam metal roofing." },
    { title: "Process", body: "We never install over problems. Every project starts with full demolition and structural repair." },
    { title: "Integrity", body: "Honest assessments, fair pricing, and no surprises from quote to completion." },
    { title: "Commitment", body: "Residential or commercial, every project receives the same uncompromising standard." },
    { title: "Safety", body: "Every job site is managed with strict safety protocols to protect our team and your property." },
  ];

  return (
    <div className="bg-white">
      <PageHero
        imageSrc="/figma/about/hero-bg.png"
        title="Dedicated to Excellence"
        titleAccent="Since 2018."
        activePath="/about"
      />
      <section className="px-6 py-14">
        <p className="text-[32px] font-bold text-[#ff832a] sm:text-[48px]">Our Philosophy</p>
        <h2 className="mt-4 text-[28px] leading-tight sm:text-[40px]">
          What Drives Every Decision <span className="font-bold">We Make on the Job</span>
        </h2>
        <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden">
          <Image src="/figma/about/philosophy-house.png" alt="" fill className="object-cover" sizes="100vw" />
        </div>
      </section>
      <section className="bg-[#fafafa] px-6 py-14">
        <h2 className="text-center text-[32px] sm:text-[40px]">
          The Angulo <span className="font-bold text-[#ff832a]">difference</span>
        </h2>
        <div className="mx-auto mt-8 grid max-w-[900px] gap-8 sm:grid-cols-2">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="text-[22px] font-bold">{value.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 text-center">
        <h2 className="m-0 text-[24px] leading-snug sm:text-[32px]">
          We work with homeowners who want an exterior that protects their{" "}
          <span className="font-bold text-[#ff832a]">property and adds lasting value.</span>
        </h2>
        <p className="m-0 mt-4 text-[20px] leading-snug sm:text-[28px]">
          Every detail, handled with care from start to finish
        </p>
        <Link
          href="/residential"
          className="mt-8 inline-flex h-14 items-center rounded-[100px] bg-[#f07b05] px-8 text-[16px] font-bold text-white hover:opacity-90"
        >
          OUR RESIDENTIAL WORK
        </Link>
        <div className="mt-8 grid gap-3">
          {["gallery-residential-1", "gallery-residential-2", "gallery-residential-3"].map((img) => (
            <div key={img} className="relative aspect-[4/3] w-full overflow-hidden">
              <Image src={`/figma/about/${img}.png`} alt="" fill className="object-cover" sizes="100vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fafafa] px-6 py-14 text-center">
        <h2 className="m-0 text-[24px] leading-snug sm:text-[32px]">
          For commercial properties, we deliver{" "}
          <span className="font-bold text-[#ff832a]">professional exterior solutions</span> that
          reflect the quality and standards of your business.
        </h2>
        <p className="m-0 mt-4 text-[20px] leading-snug sm:text-[28px]">
          On time, within budget, without compromise.
        </p>
        <Link
          href="/commercial"
          className="mt-8 inline-flex h-14 items-center rounded-[100px] bg-[#f07b05] px-8 text-[16px] font-bold text-white hover:opacity-90"
        >
          OUR COMMERCIAL WORK
        </Link>
        <div className="mt-8 grid gap-3">
          {["gallery-commercial-1", "gallery-commercial-2", "gallery-commercial-3"].map((img) => (
            <div key={img} className="relative aspect-[4/3] w-full overflow-hidden">
              <Image src={`/figma/about/${img}.png`} alt="" fill className="object-cover" sizes="100vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 text-center">
        <h2 className="m-0 text-[40px] font-bold text-[#ff832a] sm:text-[56px]">Our Story</h2>
        <p className="m-0 mt-4 text-[28px] sm:text-[36px]">
          Where It All <span className="font-bold">Began</span>
        </p>
        <p className="mx-auto mt-6 max-w-[640px] text-[16px] leading-relaxed sm:text-[18px]">
          Team Angulo was founded in 2018 with a clear purpose to deliver exterior remodeling
          services that homeowners and commercial property owners could truly rely on. What started
          as a small, dedicated crew has grown into a trusted name in the industry, built entirely
          on the quality of the work we produce and the relationships we build along the way.
        </p>
      </section>

      <SiteCta />
      <SiteFooter />
    </div>
  );
}

const services = [
  {
    number: "01",
    title: "Demolition & Removal",
    caption: "It starts with a clean slate",
    body: "Before anything new goes up, everything old comes down. We safely remove all existing exterior materials down to the structure.",
    image: "/figma/services/services-side-house.png",
  },
  {
    number: "02",
    title: "Structural Repair",
    caption: "What's underneath matters just as much.",
    body: "We inspect every wall for damaged framing, rotted sheathing, or compromised components. If we find it, we fix it.",
    image: "/figma/services/services-trim-house.png",
  },
  {
    number: "03",
    title: "Hardie & Vinyl Siding",
    caption: "The exterior your property deserves.",
    body: "Certified James Hardie installers and vinyl siding options that protect your property for decades.",
    image: "/figma/services/services-neighborhood.png",
  },
  {
    number: "04",
    title: "PVC Trim",
    caption: "The details that define the finished look.",
    body: "Sharp, clean PVC trim work for every window, door, and corner of your property.",
    image: "/figma/services/services-images7.png",
  },
  {
    number: "05",
    title: "Metal Roofing",
    caption: "The strongest roof you can put on a property.",
    body: "Standing seam metal roofing installed with the precision the system demands.",
    image: "/figma/services/services-demolition.png",
  },
];

export function ServicesPageMobile() {
  return (
    <div className="bg-white">
      <PageHero
        imageSrc="/figma/services/services-hero-bg.png"
        title="Our Services"
        titleAccent="Built to Last."
        subtitle="Complete exterior solutions from demolition to final installation."
        activePath="/services"
      />
      <div className="px-6 py-10">
        {services.map((service) => (
          <article key={service.number} className="mb-14 border-b border-[#eee] pb-14 last:mb-0 last:border-0">
            <span className="text-[40px] font-bold text-[#ff832a]">{service.number}</span>
            <h2 className="mt-2 text-[28px] font-bold sm:text-[36px]">{service.title}</h2>
            <p className="mt-2 text-[18px] font-bold">{service.caption}</p>
            <p className="mt-4 text-[16px] leading-relaxed text-[#1c1c1c]">{service.body}</p>
            <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden">
              <Image src={service.image} alt="" fill className="object-cover" sizes="100vw" />
            </div>
          </article>
        ))}
      </div>
      <SiteCta />
      <SiteFooter />
    </div>
  );
}

export function ResidentialPageMobile() {
  return (
    <div className="bg-white">
      <PageHero
        imageSrc="/figma/residential/hero-bg.png"
        title="Residential exteriors"
        titleAccent="built with care."
        activePath="/residential"
      />
      <section className="px-6 py-14">
        <h2 className="text-[28px] leading-tight sm:text-[40px]">
          Exterior solutions for homeowners who expect{" "}
          <span className="font-bold text-[#ff832a]">quality and precision</span>.
        </h2>
        <p className="mt-6 text-[16px] leading-relaxed sm:text-[18px]">
          Every residential project receives the same attention to detail, from demolition through
          final installation.
        </p>
      </section>
      <section className="bg-[#fafafa] px-6 py-14">
        <h2 className="text-center text-[32px] font-bold text-[#ff832a]">Our Residential Work</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {["gallery-tall-left", "gallery-whatsapp-1", "gallery-fullwidth", "gallery-image4"].map((img) => (
            <div key={img} className="relative aspect-[4/3] overflow-hidden sm:last:col-span-2">
              <Image src={`/figma/residential/${img}.png`} alt="" fill className="object-cover" sizes="100vw" />
            </div>
          ))}
        </div>
      </section>
      <SiteCta />
      <SiteFooter />
    </div>
  );
}

export function CommercialPageMobile() {
  return (
    <div className="bg-white">
      <PageHero
        imageSrc="/figma/commercial/hero-bg.png"
        title="Commercial exteriors"
        titleAccent="that reflect your business."
        activePath="/commercial"
      />
      <section className="px-6 py-14">
        <h2 className="text-[28px] leading-tight sm:text-[40px]">
          Professional solutions for commercial properties that demand{" "}
          <span className="font-bold text-[#ff832a]">precision and efficiency</span>.
        </h2>
      </section>
      <section className="bg-[#fafafa] px-6 py-14">
        <h2 className="text-center text-[32px] font-bold text-[#ff832a]">Our Commercial Work</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {["gallery-chicago", "gallery-factory", "gallery-fullwidth-2", "gallery-tall-left"].map((img) => (
            <div key={img} className="relative aspect-[4/3] overflow-hidden">
              <Image src={`/figma/commercial/${img}.png`} alt="" fill className="object-cover" sizes="100vw" />
            </div>
          ))}
        </div>
      </section>
      <SiteCta />
      <SiteFooter />
    </div>
  );
}
