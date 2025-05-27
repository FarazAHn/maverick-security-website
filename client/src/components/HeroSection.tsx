import { Button } from '@/components/ui/button';
import { Play, Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import convoyVideo from '@assets/A_convoy_of_202505261537.mp4';

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 176, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 176, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-tactical-white fade-in">
            {/* Mission Classification Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-mission-amber animate-pulse rounded-full"></div>
                <span className="text-xs font-mono text-mission-amber tracking-widest">CLASSIFIED: GCC OPERATIONS</span>
              </div>
              <div className="h-px bg-gradient-to-r from-mission-amber via-transparent to-mission-amber"></div>
            </div>
            
            <h1 className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
              <span className="text-mission-amber font-mono tracking-wider">CRITICAL INFRASTRUCTURE</span>
              <br />
              <span className="text-tactical-white">PROTECTION PROTOCOLS</span>
              <br />
              <span className="text-command-green text-2xl lg:text-3xl font-mono">GCC REGION</span>
            </h1>
            
            <div className="border border-mission-amber/20 rounded-lg p-4 mb-8" style={{ backgroundColor: '#000000' }}>
              <p className={`text-lg text-white leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                {t.hero.subtitle}
              </p>
            </div>
            
            {/* Tactical Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-mission-amber to-command-green hover:from-command-green hover:to-mission-amber text-white hover:text-white font-mono tracking-wider uppercase relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                <Play className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'} relative z-10 text-white`} />
                <span className="relative z-10 text-white">{t.hero.exploreServices}</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white border-white text-tactical-black hover:bg-mission-amber hover:text-tactical-black font-mono tracking-wider uppercase transition-all duration-300"
              >
                <Phone className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'} text-tactical-black`} />
                {t.hero.getConsultation}
              </Button>
            </div>
          </div>
          
          <div className="fade-in relative">
            {/* Tactical HUD Frame */}
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-mission-amber/30 rounded-lg"></div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-mission-amber"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-mission-amber"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-mission-amber"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-mission-amber"></div>
              
              <video 
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg shadow-2xl w-full h-auto relative z-10"
                src={convoyVideo}
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Status Overlay */}
              <div className="absolute top-2 left-2 bg-tactical-black/80 border border-mission-amber/50 rounded px-2 py-1">
                <span className="text-xs font-mono text-mission-amber">LIVE FEED</span>
              </div>
              <div className="absolute bottom-2 right-2 bg-tactical-black/80 border border-command-green/50 rounded px-2 py-1">
                <span className="text-xs font-mono text-command-green">SECURE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
