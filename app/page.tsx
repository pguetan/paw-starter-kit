import {
  AuthorityBioSection,
  BlogPreviewSection,
  CtaSection,
  HeroSection,
  LeadMagnetSection,
  LogoStripSection,
  QuoteProofSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/sections";
import {
  homepageAuthorityBio,
  homepageBlogPreview,
  homepageFinalCta,
  homepageHero,
  homepageLeadMagnet,
  homepageLogoStrip,
  homepageQuoteProof,
  homepageServicesIntro,
  homepageTestimonialsIntro,
} from "@/data/home";
import { placeholderServices } from "@/data/services";
import { placeholderTestimonials } from "@/data/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection {...homepageHero} />
      <ServicesSection
        {...homepageServicesIntro}
        items={placeholderServices}
        variant="programCards"
        tone="muted"
      />
      <QuoteProofSection {...homepageQuoteProof} />
      <AuthorityBioSection {...homepageAuthorityBio} />
      <LogoStripSection {...homepageLogoStrip} />
      <TestimonialsSection
        {...homepageTestimonialsIntro}
        items={placeholderTestimonials}
        variant="rail"
        tone="default"
      />
      <LeadMagnetSection {...homepageLeadMagnet} />
      <BlogPreviewSection {...homepageBlogPreview} />
      <CtaSection {...homepageFinalCta} />
    </>
  );
}
