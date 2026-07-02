"use client";

import Link from "next/link";
import { type ServiceSectionSlug } from "../../constants/serviceSections";
import { useLanguage } from "../../providers/LanguageProvider";
import { contactServiceHref } from "../../utils/contactService";
import { orangePillBtn } from "../../utils/buttonClasses";

export function ServiceStartLink({
  slug,
  className = "",
}: {
  slug: ServiceSectionSlug;
  className?: string;
}) {
  const { t } = useLanguage();

  return (
    <Link
      href={contactServiceHref(slug)}
      className={`${orangePillBtn} mt-6 inline-flex w-fit self-start h-[52px] items-center justify-center gap-2 rounded-[100px] px-6 text-[15px] font-bold sm:px-8 sm:text-[16px] ${className}`}
    >
      {t.common.startToday}
    </Link>
  );
}
