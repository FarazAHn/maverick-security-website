import { Shield, Users, MapPin, AlertTriangle, Search } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function TechnologySection() {
  const { t, isRTL } = useLanguage();

  const technologies = [
    {
      icon: Shield,
      title: t.technology.features.aiVision.title,
      description: t.technology.features.aiVision.description,
    },
    {
      icon: Users,
      title: t.technology.features.thermal.title,
      description: t.technology.features.thermal.description,
    },
    {
      icon: MapPin,
      title: t.technology.features.drone.title,
      description: t.technology.features.drone.description,
    },
    {
      icon: AlertTriangle,
      title: t.technology.features.analytics.title,
      description: t.technology.features.analytics.description,
    },
    {
      icon: Search,
      title: t.technology.features.intelligence.title,
      description: t.technology.features.intelligence.description,
    },
  ];

  return (
    <section className="py-20 bg-tactical-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-4xl font-bold text-tactical-white mb-6 font-mono tracking-wider">
            {t.technology.title.toUpperCase()}
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#ffffff]">
            {t.technology.subtitle}
          </p>
        </div>
        
        <div className="fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="tactical-card p-6 rounded-lg" style={{ animationDelay: `${index * 100}ms` }}>
                <tech.icon className="h-8 w-8 text-mission-amber mb-4" />
                <h4 className={`font-bold text-tactical-white mb-2 font-mono tracking-wide ${isRTL ? 'text-right' : 'text-left'}`}>
                  {tech.title.toUpperCase()}
                </h4>
                <p className={`text-sm text-[#ffffff] ${isRTL ? 'text-right' : 'text-left'}`}>
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
