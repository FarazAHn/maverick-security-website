import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import securityTeamVideo from '@assets/A_group_of_202505261556.mp4';

export function AboutSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-tactical-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {!isRTL && (
            <div className="fade-in">
              <video 
                autoPlay
                muted
                loop
                playsInline
                className="rounded-2xl shadow-lg w-full h-auto border border-steel-gray/20"
                src={securityTeamVideo}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          
          <div className="fade-in">
            <h2 className={`text-4xl font-bold text-tactical-black mb-6 font-mono tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.about.title.replace('Critical Infrastructure', '').replace('Securing the Future of', 'SECURING FUTURE')}
              <span className="text-mission-amber block">{t.about.subtitle.toUpperCase()}</span>
            </h2>
            <p className={`text-lg text-steel-gray mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.about.description}
            </p>
            
            <div className="space-y-4">
              {t.about.features.map((feature, index) => (
                <div key={index} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle className={`text-command-green text-xl ${isRTL ? 'ml-4' : 'mr-4'}`} />
                  <span className={`text-tactical-black ${isRTL ? 'text-right' : 'text-left'}`}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {isRTL && (
            <div className="fade-in">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional security consulting team" 
                className="rounded-2xl shadow-lg w-full h-auto border border-steel-gray/20"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
