import { FooterSection } from "./FooterSection";
import { SiteCta } from "./SiteLayout";

/** CTA spacing for residential, commercial, and about — between tight and default. */
export const galleryPageCtaClassName =
  "bg-white px-6 pb-14 pt-10 lg:px-[138px] lg:pt-12";

export function PageClosing({
  ctaId,
  ctaClassName,
}: {
  ctaId?: string;
  ctaClassName?: string;
}) {
  return (
    <>
      <SiteCta id={ctaId} className={ctaClassName} />
      <FooterSection />
    </>
  );
}
