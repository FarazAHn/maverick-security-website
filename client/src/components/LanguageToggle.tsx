import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="bg-transparent border-mission-amber/40 text-tactical-white hover:bg-mission-amber hover:text-tactical-black font-mono tracking-wider transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-mission-amber to-command-green opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <Globe className="w-4 h-4 mr-2 relative z-10" />
      <span className="relative z-10 text-xs uppercase">
        {language === 'en' ? t.nav.arabic : t.nav.english}
      </span>
    </Button>
  );
}