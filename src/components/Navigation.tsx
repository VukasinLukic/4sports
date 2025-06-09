
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary">
              4sports
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('navigation.home')}
              </button>
              <button 
                onClick={() => scrollToSection('purpose')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('navigation.purpose')}
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('navigation.experiences')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('navigation.faq')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors"
              >
                {t('navigation.contact')}
              </button>
            </div>
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {language.toUpperCase()}
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90"
            >
              {t('navigation.tryFree')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                {t('navigation.home')}
              </button>
              <button 
                onClick={() => scrollToSection('purpose')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                {t('navigation.purpose')}
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                {t('navigation.experiences')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                {t('navigation.faq')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                {t('navigation.contact')}
              </button>
              <div className="flex items-center space-x-2 px-3 py-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {language.toUpperCase()}
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary hover:bg-primary/90"
                  size="sm"
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
