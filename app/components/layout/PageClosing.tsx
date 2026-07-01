import { FooterSection } from "./FooterSection";
import { SiteCta } from "./SiteLayout";

export function PageClosing({ ctaId }: { ctaId?: string }) {
  return (
    <>
      <SiteCta id={ctaId} />
      <FooterSection />
    </>
  );
}
