
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
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
      <div className="container-custom">
        <div className="flex justify-between items-center h-24">
          {/* Logo with enhanced gradient */}
          <div className="logo-4sports">
            4sports
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link text-lg"
            >
              Početna
            </button>
            <button 
              onClick={() => scrollToSection('purpose')}
              className="nav-link text-lg"
            >
              Svrha i Prednosti
            </button>
            <button 
              onClick={() => scrollToSection('experiences')}
              className="nav-link text-lg"
            >
              Iskustva Klubova
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="nav-link text-lg"
            >
              Česta Pitanja
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link text-lg"
            >
              Kontakt i Cene
            </button>
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <AnimatedButton
              variant="secondary"
              onClick={toggleLanguage}
              className="!min-w-0"
            >
              <Globe className="w-5 h-5 mr-2" />
              {language.toUpperCase()}
            </AnimatedButton>
            <AnimatedButton 
              variant="primary"
              onClick={() => scrollToSection('contact')}
            >
              Probaj Besplatno
            </AnimatedButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <AnimatedButton
              variant="secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="!min-w-0"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </AnimatedButton>
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
                <AnimatedButton
                  variant="secondary"
                  onClick={toggleLanguage}
                  className="flex-1"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  {language.toUpperCase()}
                </AnimatedButton>
                <AnimatedButton 
                  variant="primary"
                  onClick={() => scrollToSection('contact')}
                  className="flex-1"
                >
                  Probaj Besplatno
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
