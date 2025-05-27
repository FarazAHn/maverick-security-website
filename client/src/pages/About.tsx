import { Navigation } from '@/components/Navigation';
import { AboutSection } from '@/components/AboutSection';
import { StatsSection } from '@/components/StatsSection';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

export default function About() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center text-white ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-5xl font-bold mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      <StatsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
