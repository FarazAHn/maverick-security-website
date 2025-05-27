import { useLanguage } from '@/hooks/useLanguage';

export function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    { value: '150+', label: t.stats.projectsCompleted },
    { value: '6', label: t.stats.gccCountries },
    { value: '24/7', label: t.stats.monitoring },
    { value: '99.9%', label: t.stats.uptime },
  ];

  return (
    <section className="bg-tactical-black py-16 -mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Status Panel */}
        <div className="tactical-card rounded-lg p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Command Header */}
          <div className="col-span-full mb-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono text-mission-amber tracking-widest">MISSION STATISTICS</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-command-green animate-pulse rounded-full"></div>
                <span className="text-xs font-mono text-command-green">OPERATIONAL</span>
              </div>
            </div>
            <div className="h-px bg-gradient-to-r from-mission-amber via-command-green to-mission-amber mt-2"></div>
          </div>
          
          {stats.map((stat, index) => (
            <div key={index} className="text-center fade-in group" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="bg-steel-gray/30 border border-mission-amber/20 rounded-lg p-4 group-hover:border-mission-amber/50 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-mono font-bold text-mission-amber mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-mono tracking-wide uppercase text-[#ffffff]">
                  {stat.label}
                </div>
                {/* Progress indicator */}
                <div className="w-full bg-steel-gray/50 rounded-full h-1 mt-3">
                  <div 
                    className="bg-gradient-to-r from-mission-amber to-command-green h-1 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '85%', animationDelay: `${index * 200 + 500}ms` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
