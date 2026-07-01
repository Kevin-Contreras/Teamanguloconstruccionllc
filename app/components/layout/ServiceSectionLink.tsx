"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import {
  type ServiceSectionSlug,
  serviceSectionHref,
} from "../../constants/serviceSections";
import { scrollToServiceSectionFromHash } from "../../utils/serviceSectionScroll";

export function ServiceSectionLink({
  slug,
  className,
  style,
  children,
}: {
  slug: ServiceSectionSlug;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const href = serviceSectionHref(slug);

  return (
    <Link
      href={href}
      scroll={false}
      className={className}
      style={style}
      onClick={(event) => {
        if (pathname !== "/services") return;

        event.preventDefault();
        window.history.replaceState(null, "", href);
        scrollToServiceSectionFromHash();
      }}
    >
      {children}
    </Link>
  );
}
