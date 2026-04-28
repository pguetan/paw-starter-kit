import {
  HeroSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/sections";
import {
  homepageHero,
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
        variant="featured"
        tone="muted"
      />
      <TestimonialsSection
        {...homepageTestimonialsIntro}
        items={placeholderTestimonials}
        variant="grid"
        tone="default"
      />
    </>
  );
}
