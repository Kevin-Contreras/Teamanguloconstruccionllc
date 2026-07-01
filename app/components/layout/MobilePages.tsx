"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ContactForm } from "../contact/ContactForm";
import { ContactSuccessModal } from "../contact/ContactSuccessModal";
import { SERVICE_SECTION_SLUGS } from "../../constants/serviceSections";
import { useLanguage } from "../../providers/LanguageProvider";
import { ParallaxBannerImage } from "./ParallaxBannerImage";
import { PageHero } from "./SiteLayout";

export function ContactPageMobile() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative bg-[#1a2b3c]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ParallaxBannerImage src="/figma/contact/hero-bg.png" priority />
        <div className="absolute inset-0 z-[1] bg-[#1a2b3c]/55" aria-hidden />
      </div>

      <div className="relative z-10">
        <section className="px-6 pb-10 pt-32" data-animate-hero>
          <h1 className="m-0 text-[40px] font-bold leading-tight text-white sm:text-[56px]">
            {t.contact.heroLine1}
            <br />
            <span className="text-[#ff832a]">{t.contact.heroAccent}</span>
          </h1>
          <Image src="/figma/contact/accent-line.svg" alt="" width={76} height={5} className="mt-6" aria-hidden />
          <p className="mt-6 max-w-[640px] text-[18px] leading-normal text-white sm:text-[22px]">
            {t.contact.heroSubtextMobile}
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
      </div>

      {submitted && <ContactSuccessModal onClose={() => setSubmitted(false)} variant="mobile" />}
    </div>
  );
}

const aboutValueIcons = [
  "/figma/imgGrupo14.svg",
  "/figma/about/icon-specialty.svg",
  "/figma/about/icon-process.svg",
  "/figma/about/icon-integrity.svg",
  "/figma/about/icon-commitment.svg",
  "/figma/about/icon-safety.svg",
];

export function AboutPageMobile() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      <PageHero
        imageSrc="/figma/about/hero-bg.png"
        title={t.about.heroTitle}
        titleAccent={t.about.heroAccent}
        activePath="/about"
      />
      <section className="px-6 py-14">
        <p className="text-[32px] font-bold text-[#ff832a] sm:text-[48px]">{t.about.philosophyTitle}</p>
        <h2 className="mt-4 text-[28px] leading-tight sm:text-[40px]">
          {t.about.philosophyHeading}{" "}
          <span className="font-bold">{t.about.philosophyHeadingBold}</span>
        </h2>
        <p className="mt-6 text-[16px] leading-relaxed sm:text-[18px]">{t.about.philosophyBodyMobile}</p>
        <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden">
          <Image
            src="/figma/about/philosophy-house.png"
            alt={t.about.philosophyImageAlt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>
      <section className="bg-[#fafafa] px-6 py-14">
        <h2 className="text-center text-[32px] sm:text-[40px]">
          {t.about.differenceTitle}{" "}
          <span className="font-bold text-[#ff832a]">{t.about.differenceAccent}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-center text-[16px] leading-relaxed">
          {t.about.differenceIntro}
        </p>
        <div className="mx-auto mt-8 grid max-w-[900px] gap-8 sm:grid-cols-2">
          {t.about.values.map((value, index) => (
            <div key={value.title}>
              <Image
                src={aboutValueIcons[index]}
                alt=""
                width={60}
                height={60}
                className="mb-3"
                aria-hidden
              />
              <h3 className="text-[22px] font-bold">{value.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 text-center">
        <h2 className="m-0 text-[24px] leading-snug sm:text-[32px]">
          {t.about.residentialHeading}{" "}
          <span className="font-bold text-[#ff832a]">{t.about.residentialAccent}</span>
        </h2>
        <p className="m-0 mt-4 text-[20px] leading-snug sm:text-[28px]">{t.about.residentialSubtext}</p>
        <Link
          href="/residential"
          className="mt-8 inline-flex h-14 items-center rounded-[100px] bg-[#f07b05] px-8 text-[16px] font-bold text-white hover:opacity-90"
        >
          {t.about.residentialButton}
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
          {t.about.commercialHeading}{" "}
          <span className="font-bold text-[#ff832a]">{t.about.commercialAccent}</span>
        </h2>
        <p className="m-0 mt-4 text-[20px] leading-snug sm:text-[28px]">{t.about.commercialSubtext}</p>
        <Link
          href="/commercial"
          className="mt-8 inline-flex h-14 items-center rounded-[100px] bg-[#f07b05] px-8 text-[16px] font-bold text-white hover:opacity-90"
        >
          {t.about.commercialButton}
        </Link>
        <div className="mt-8 grid gap-3">
          {["gallery-commercial-1", "gallery-commercial-2", "gallery-commercial-3"].map((img) => (
            <div key={img} className="relative aspect-[4/3] w-full overflow-hidden">
              <Image src={`/figma/about/${img}.png`} alt="" fill className="object-cover" sizes="100vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pt-14 pb-8 text-center">
        <h2 className="m-0 text-[40px] font-bold text-[#ff832a] sm:text-[56px]">{t.about.storyTitle}</h2>
        <p className="m-0 mt-4 text-[28px] sm:text-[36px]">
          {t.about.storyHeading}{" "}
          <span className="font-bold">{t.about.storyHeadingBold}</span>
        </p>
        <p className="mx-auto mt-6 max-w-[640px] text-[16px] leading-relaxed sm:text-[18px]">
          {t.about.storyBodyMobile}
        </p>
      </section>
    </div>
  );
}

const serviceSlugs = [
  SERVICE_SECTION_SLUGS.demolitionRemoval,
  SERVICE_SECTION_SLUGS.structuralRepair,
  SERVICE_SECTION_SLUGS.hardieVinylSiding,
  SERVICE_SECTION_SLUGS.pvcTrim,
  SERVICE_SECTION_SLUGS.metalRoofing,
];

const serviceImages = [
  "/figma/services/services-side-house.png",
  "/figma/services/services-trim-house.png",
  "/figma/services/services-neighborhood.png",
  "/figma/services/services-images7.png",
  "/figma/services/services-demolition.png",
];

export function ServicesPageMobile() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      <PageHero
        imageSrc="/figma/services/services-hero-bg.png"
        title={`${t.servicesPage.heroTitle} ${t.servicesPage.heroAccent}`}
        titleAccent={t.servicesPage.heroAccentMobile}
        subtitle={t.servicesPage.heroSubtitleMobile}
        activePath="/services"
      />
      <div className="px-6 py-10">
        {t.servicesPage.itemsMobile.map((service, index) => (
          <article
            key={service.number}
            id={serviceSlugs[index]}
            data-service-section={serviceSlugs[index]}
            className="mb-14 scroll-mt-28 border-b border-[#eee] pb-14 last:mb-0 last:border-0"
          >
            <span className="text-[40px] font-bold text-[#ff832a]">{service.number}</span>
            <h2 className="mt-2 text-[28px] font-bold sm:text-[36px]">{service.title}</h2>
            <p className="mt-2 text-[18px] font-bold">{service.caption}</p>
            <p className="mt-4 text-[16px] leading-relaxed text-[#1c1c1c]">{service.body}</p>
            <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden">
              <ParallaxBannerImage
                src={serviceImages[index]}
                className="absolute inset-0"
                mode="section"
                speed={0.25}
                sizes="100vw"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

const residentialGallery = [
  { img: "gallery-tall-left", aspect: "aspect-[2126/2226]" },
  { img: "gallery-whatsapp-1", aspect: "aspect-[1670/1114]" },
  { img: "gallery-fullwidth", aspect: "aspect-[3840/2094] sm:col-span-2" },
  { img: "gallery-image4", aspect: "aspect-[1932/1504] sm:col-span-2" },
];

export function ResidentialPageMobile() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      <PageHero
        imageSrc="/figma/residential/hero-bg.png"
        title={t.residentialPage.heroTitle}
        titleAccent={t.residentialPage.heroAccent}
        activePath="/residential"
      />
      <section className="px-6 py-14">
        <h2 className="text-[28px] leading-tight sm:text-[40px]">
          {t.residentialPage.introHeadingMobile}{" "}
          <span className="font-bold text-[#ff832a]">{t.residentialPage.introAccentMobile}</span>.
        </h2>
        <p className="mt-6 text-[16px] leading-relaxed sm:text-[18px]">
          {t.residentialPage.introBodyMobile}
        </p>
      </section>
      <section className="bg-[#fafafa] px-6 pt-14 pb-8">
        <h2 className="text-center text-[32px] font-bold text-[#ff832a]">
          {t.residentialPage.portfolioTitle}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {residentialGallery.map(({ img, aspect }) => (
            <div key={img} className={`relative w-full overflow-hidden ${aspect}`}>
              <Image src={`/figma/residential/${img}.png`} alt="" fill className="object-cover object-center" sizes="100vw" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function CommercialPageMobile() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      <PageHero
        imageSrc="/figma/commercial/hero-bg.png"
        title={t.commercialPage.heroTitle}
        titleAccent={t.commercialPage.heroAccent}
        activePath="/commercial"
      />
      <section className="px-6 py-14">
        <h2 className="text-[28px] leading-tight sm:text-[40px]">
          {t.commercialPage.introHeadingMobile}{" "}
          <span className="font-bold text-[#ff832a]">{t.commercialPage.introAccentMobile}</span>.
        </h2>
      </section>
      <section className="bg-[#fafafa] px-6 pt-14 pb-8">
        <h2 className="text-center text-[32px] font-bold text-[#ff832a]">
          {t.commercialPage.portfolioTitle}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {["gallery-chicago", "gallery-factory", "gallery-fullwidth-2", "gallery-tall-left"].map((img) => (
            <div key={img} className="relative aspect-[4/3] overflow-hidden">
              <Image src={`/figma/commercial/${img}.png`} alt="" fill className="object-cover" sizes="100vw" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
