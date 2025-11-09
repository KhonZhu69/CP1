
import HeroSection from '@/components/sections/hero-section';
import KeyFeaturesSection from '@/components/sections/key-features-section';
import ServicesSection from '@/components/sections/services-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <KeyFeaturesSection />
      <ContactSection />
    </>
  );
}
