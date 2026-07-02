import {
  SERVICE_SECTION_SLUGS,
  type ServiceSectionSlug,
} from "../constants/serviceSections";

const VALID_SLUGS = new Set<string>(Object.values(SERVICE_SECTION_SLUGS));

export function contactServiceHref(slug: ServiceSectionSlug) {
  return `/contact?service=${slug}`;
}

export function parseContactServiceParam(
  value: string | null | undefined,
): ServiceSectionSlug | "" {
  if (!value || !VALID_SLUGS.has(value)) return "";
  return value as ServiceSectionSlug;
}

export function isServiceSectionSlug(value: string): value is ServiceSectionSlug {
  return VALID_SLUGS.has(value);
}
