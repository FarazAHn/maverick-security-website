import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TechnologySection } from '@/components/TechnologySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <TechnologySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
