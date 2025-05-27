import { Button } from '@/components/ui/button';
import { Shield, Cog, Gem, Radar, Focus, DoorOpen, Server, Building, Users, Truck, Building2, Workflow } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function ServicesSection() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Shield,
      title: t.services.perimeter.title,
      description: t.services.perimeter.description,
      features: t.services.perimeter.features,
      featureIcons: [Radar, Focus, DoorOpen],
    },
    {
      icon: Cog,
      title: t.services.operational.title,
      description: t.services.operational.description,
      features: t.services.operational.features,
      featureIcons: [Server, Building, Users],
    },
    {
      icon: Gem,
      title: t.services.asset.title,
      description: t.services.asset.description,
      features: t.services.asset.features,
      featureIcons: [Truck, Building2, Workflow],
    },
  ];

  return (
    <section className="bg-tactical-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-4xl font-bold text-tactical-white mb-6 font-mono tracking-wider">
            {t.services.title.toUpperCase()}
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-[#ffffff]">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="tactical-card rounded-lg p-8 fade-in text-tactical-white" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Mission Status Indicator */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-mission-amber to-command-green rounded-lg flex items-center justify-center relative">
                  <service.icon className="h-8 w-8 text-tactical-black relative z-10" />
                  <div className="absolute inset-0 bg-mission-amber opacity-20 rounded-lg animate-pulse"></div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-mission-amber tracking-widest">MISSION</div>
                  <div className="text-xs font-mono text-steel-gray">STATUS: ACTIVE</div>
                </div>
              </div>
              
              <h3 className={`text-xl font-bold text-mission-amber mb-4 font-mono tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
                {service.title.toUpperCase()}
              </h3>
              
              <p className={`text-tactical-white/90 mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                {service.description}
              </p>
              
              {/* Tactical Features List */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono text-mission-amber tracking-widest border-b border-mission-amber/20 pb-1">
                  CAPABILITIES
                </div>
                {service.features.map((feature, featureIndex) => {
                  const FeatureIcon = service.featureIcons[featureIndex];
                  return (
                    <div key={featureIndex} className={`flex items-center group ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-6 h-6 bg-steel-gray/50 rounded flex items-center justify-center mr-3">
                        <FeatureIcon className="text-mission-amber h-3 w-3" />
                      </div>
                      <span className={`text-sm text-tactical-white/80 group-hover:text-tactical-white transition-colors ${isRTL ? 'text-right' : 'text-left'}`}>
                        {feature}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              {/* Mission Button */}
              <Button className="w-full bg-gradient-to-r from-mission-amber to-command-green hover:from-command-green hover:to-mission-amber text-tactical-black hover:text-tactical-black font-mono text-xs tracking-widest uppercase transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10 text-tactical-black">{t.services.learnMore}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
