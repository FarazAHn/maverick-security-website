import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';
import logoIcon from '@assets/Mavericklgo.png';

export function Footer() {
  const { t, isRTL } = useLanguage();

  const serviceLinks = [
    { href: '/services', label: t.services.perimeter.title },
    { href: '/services', label: t.services.operational.title },
    { href: '/services', label: t.services.asset.title },
    { href: '/contact', label: 'Consultation' },
  ];

  const contactInfo = [
    t.contact.mainOfficeAddress.replace('\n', ', '),
    t.contact.regionalOfficeAddress,
    t.contact.phone,
    t.contact.email,
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className={`text-2xl font-bold mb-4 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <img 
                src={logoIcon} 
                alt="Maverick Security Solutions" 
                className={`h-8 w-8 ${isRTL ? 'ml-2' : 'mr-2'}`}
              />
              Maverick Security Solutions
            </div>
            <p className={`text-gray-400 mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.footer.description}
            </p>
            <div className={`flex space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className={`font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.footer.services}
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className={`text-gray-400 hover:text-white transition-colors ${isRTL ? 'text-right' : 'text-left'} block cursor-pointer`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t.footer.contact}
            </h4>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className={`text-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className={`text-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}