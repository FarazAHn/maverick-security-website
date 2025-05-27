import { Star } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function TestimonialsSection() {
  const { t, isRTL } = useLanguage();

  const avatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    "https://images.unsplash.com/photo-1494790108755-2616b6b1e85c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
  ];

  return (
    <section className="bg-tactical-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 fade-in ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-4xl font-bold text-tactical-black mb-6 font-mono tracking-wider">
            {t.testimonials.title.toUpperCase()}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div key={index} className="bg-steel-gray/10 border border-mission-amber/20 p-8 rounded-lg shadow-lg fade-in hover:border-mission-amber/40 transition-all duration-300" style={{ animationDelay: `${index * 150}ms` }}>
              <div className={`flex mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-mission-amber fill-current" />
                ))}
              </div>
              <p className={`text-steel-gray mb-6 italic ${isRTL ? 'text-right' : 'text-left'}`}>
                "{testimonial.text}"
              </p>
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <img 
                  src={avatars[index]} 
                  alt={testimonial.name} 
                  className={`w-12 h-12 rounded-full border border-mission-amber/30 ${isRTL ? 'ml-4' : 'mr-4'}`}
                />
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="font-semibold text-tactical-black font-mono">{testimonial.name}</div>
                  <div className="text-sm text-steel-gray">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
