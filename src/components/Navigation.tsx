
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-modern border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo with modern styling */}
          <div className="logo-4sports text-gradient">
            4sports
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link"
            >
              {t('navigation.home')}
            </button>
            <button 
              onClick={() => scrollToSection('purpose')}
              className="nav-link"
            >
              {t('navigation.purpose')}
            </button>
            <button 
              onClick={() => scrollToSection('experiences')}
              className="nav-link"
            >
              {t('navigation.experiences')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="nav-link"
            >
              {t('navigation.faq')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              {t('navigation.contact')}
            </button>
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={toggleLanguage}
              className="btn-secondary !px-4 !py-2 !min-w-0"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language.toUpperCase()}
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary !py-3"
            >
              {t('navigation.tryFree')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-secondary !px-3 !py-2 !min-w-0"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 backdrop-blur-modern">
            <div className="py-8 space-y-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left nav-link py-2"
              >
                {t('navigation.home')}
              </button>
              <button 
                onClick={() => scrollToSection('purpose')}
                className="block w-full text-left nav-link py-2"
              >
                {t('navigation.purpose')}
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="block w-full text-left nav-link py-2"
              >
                {t('navigation.experiences')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left nav-link py-2"
              >
                {t('navigation.faq')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left nav-link py-2"
              >
                {t('navigation.contact')}
              </button>
              <div className="flex space-x-3 pt-4">
                <Button
                  onClick={toggleLanguage}
                  className="btn-secondary flex-1"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary flex-1"
                >
                  {t('navigation.tryFree')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
