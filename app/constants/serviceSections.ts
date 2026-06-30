export const SERVICE_SECTION_SLUGS = {
  demolitionRemoval: "demolition-removal",
  structuralRepair: "structural-repair",
  hardieVinylSiding: "hardie-vinyl-siding",
  pvcTrim: "pvc-trim",
  metalRoofing: "metal-roofing",
} as const;

export type ServiceSectionSlug =
  (typeof SERVICE_SECTION_SLUGS)[keyof typeof SERVICE_SECTION_SLUGS];

export function serviceSectionHref(slug: ServiceSectionSlug) {
  return `/services#${slug}`;
}
