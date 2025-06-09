
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="organic-bg hero-pattern relative overflow-hidden border-t border-white/10">
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-20 w-64 h-64 gradient-orb opacity-15 animate-pulse"></div>
      <div className="absolute bottom-10 left-16 w-80 h-80 gradient-orb opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container-custom py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="logo-4sports text-3xl mb-6">
              4sports
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              {t('about.description')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 text-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                {t('footer.email')}
              </div>
              <div className="flex items-center text-gray-300 text-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                {t('footer.phone')}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-xl">
              {t('footer.quickLinks')}
            </h3>
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('purpose')}
                className="block text-gray-300 hover:text-primary transition-colors text-lg nav-link"
              >
                {t('navigation.purpose')}
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="block text-gray-300 hover:text-primary transition-colors text-lg nav-link"
              >
                {t('navigation.experiences')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block text-gray-300 hover:text-primary transition-colors text-lg nav-link"
              >
                {t('navigation.faq')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-primary transition-colors text-lg nav-link"
              >
                {t('navigation.contact')}
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-6 text-xl">
              {t('footer.support')}
            </h3>
            <div className="space-y-4">
              <div className="text-gray-300 text-lg hover:text-primary transition-colors cursor-pointer">{t('footer.helpCenter')}</div>
              <div className="text-gray-300 text-lg hover:text-primary transition-colors cursor-pointer">{t('footer.privacy')}</div>
              <div className="text-gray-300 text-lg hover:text-primary transition-colors cursor-pointer">{t('footer.terms')}</div>
              <div className="text-gray-300 text-lg hover:text-primary transition-colors cursor-pointer">{t('footer.contactSupport')}</div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-16">
          <button
            onClick={scrollToTop}
            className="glass-card p-4 rounded-2xl hover-lift group"
          >
            <ArrowUp className="w-6 h-6 text-primary group-hover:translate-y-[-4px] transition-transform" />
          </button>
        </div>

        <div className="border-t border-white/10 mt-16 pt-10 text-center">
          <p className="text-gray-400 text-lg">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
