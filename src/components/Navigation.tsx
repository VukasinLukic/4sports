
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import SimpleButton from '@/components/ui/simple-button';
import AnimatedButton from '@/components/ui/animated-button';

const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'backdrop-blur-modern border-b border-green-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24 relative">
          {/* Logo - potpuno levo */}
          <div className="logo-4sports flex-shrink-0">
            4sports
          </div>

          {/* Desktop Menu - apsolutno centrirano */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="nav-link text-lg whitespace-nowrap"
              >
                {t('navigation.home')}
              </button>
              <button 
                onClick={() => scrollToSection('purpose')}
                className="nav-link text-lg whitespace-nowrap"
              >
                {t('navigation.purpose')}
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="nav-link text-lg whitespace-nowrap"
              >
                {t('navigation.experiences')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="nav-link text-lg whitespace-nowrap"
              >
                {t('navigation.faq')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="nav-link text-lg whitespace-nowrap"
              >
                {t('navigation.contact')}
              </button>
            </div>
          </div>

          {/* Language Toggle & CTA - fiksirana pozicija desno */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <SimpleButton
              variant="language"
              onClick={toggleLanguage}
              className="!min-w-[60px] !w-[60px] border-2 border-white/20 flex items-center justify-center"
            >
              <Globe className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'SR' : 'EN'}
              </span>
            </SimpleButton>
            <AnimatedButton 
              variant="primary"
              onClick={() => scrollToSection('contact')}
              animated={true}
              className="border-2 border-primary !min-w-[140px] !w-[140px] flex items-center justify-center"
            >
              <span className="truncate">
                {t('navigation.tryFree')}
              </span>
            </AnimatedButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <SimpleButton
              variant="secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="!min-w-0 !px-4 !py-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </SimpleButton>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-green-500/20 backdrop-blur-modern">
            <div className="py-10 space-y-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left nav-link py-3 text-lg"
              >
                {t('navigation.home')}
              </button>
              <button 
                onClick={() => scrollToSection('purpose')}
                className="block w-full text-left nav-link py-3 text-lg"
              >
                {t('navigation.purpose')}
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="block w-full text-left nav-link py-3 text-lg"
              >
                {t('navigation.experiences')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left nav-link py-3 text-lg"
              >
                {t('navigation.faq')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left nav-link py-3 text-lg"
              >
                {t('navigation.contact')}
              </button>
              <div className="flex space-x-4 pt-6">
                <SimpleButton
                  variant="language"
                  onClick={toggleLanguage}
                  className="flex-1 border-2 border-white/20"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'SR' : 'EN'}
                </SimpleButton>
                <AnimatedButton 
                  variant="primary"
                  onClick={() => scrollToSection('contact')}
                  className="flex-1 border-2 border-primary"
                  animated={true}
                >
                  {t('navigation.tryFree')}
                </AnimatedButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
