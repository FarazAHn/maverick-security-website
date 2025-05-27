import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/hooks/useLanguage';
import logoIcon from '@assets/Mavericklgo.png';

export function Navigation() {
  const [location] = useLocation();
  const { t, isRTL } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/contact', label: t.nav.contact },
  ];

  const NavLink = ({ path, label }: { path: string; label: string }) => (
    <Link href={path}>
      <span
        className={`px-4 py-2 font-mono text-sm tracking-wider uppercase transition-all duration-300 relative group cursor-pointer ${
          location === path
            ? 'text-mission-amber bg-steel-gray/30 border border-mission-amber/20'
            : 'text-tactical-white hover:text-mission-amber hover:bg-steel-gray/20'
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <span className="relative z-10">{label}</span>
        {/* Tactical scan effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mission-amber/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </span>
    </Link>
  );

  return (
    <nav className="shadow-2xl sticky top-0 z-50 border-b border-mission-amber/20" style={{ background: 'linear-gradient(to right, #0F1419, #3A3F47)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Tactical Logo */}
          <Link href="/">
            <span className="flex items-center text-2xl font-bold text-tactical-white hover:text-mission-amber transition-colors duration-300 cursor-pointer">
              <div className="relative">
                <img
                  src={logoIcon}
                  alt="Maverick Security Solutions"
                  className={`h-8 w-8 ${isRTL ? 'ml-2' : 'mr-2'} animate-pulse`}
                />
                <div className="absolute inset-0 rounded-full border border-mission-amber/30 animate-ping"></div>
              </div>
              <span className="font-mono tracking-wider">MAVERICK</span>
            </span>
          </Link>

          {/* Tactical Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
            {navItems.map((item, index) => (
              <div key={item.path} className="relative group">
                <NavLink path={item.path} label={item.label} />
                {/* Mission indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-mission-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
            <div className="ml-4">
              <LanguageToggle />
            </div>
          </div>

          {/* Tactical Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-tactical-white hover:text-mission-amber hover:bg-steel-gray/50">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={isRTL ? 'left' : 'right'}
              className="w-[300px] bg-gradient-to-b from-tactical-black to-steel-gray border-l border-mission-amber/20"
            >
              <div className="flex flex-col space-y-6 mt-8">
                <div className="text-mission-amber font-mono text-sm tracking-widest border-b border-mission-amber/20 pb-2">
                  MISSION MENU
                </div>
                {navItems.map((item, index) => (
                  <div key={item.path} className="briefing-enter" style={{ animationDelay: `${index * 100}ms` }}>
                    <NavLink path={item.path} label={item.label} />
                  </div>
                ))}
                <div className="pt-4 border-t border-steel-gray">
                  <LanguageToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}