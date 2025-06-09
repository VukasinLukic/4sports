
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

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
    <nav className="fixed top-0 w-full bg-black border-b border-primary z-50 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* ASCII Logo */}
          <div className="text-primary font-mono text-sm hover-glow cursor-pointer">
            &#91;4sports&#93;
          </div>

          {/* Desktop Menu - Terminal Style */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-primary hover-glow transition-all"
            >
              &gt; {t('navigation.home')}
            </button>
            <button 
              onClick={() => scrollToSection('purpose')}
              className="text-primary hover-glow transition-all"
            >
              &gt; {t('navigation.purpose')}
            </button>
            <button 
              onClick={() => scrollToSection('experiences')}
              className="text-primary hover-glow transition-all"
            >
              &gt; {t('navigation.experiences')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-primary hover-glow transition-all"
            >
              &gt; {t('navigation.faq')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-primary hover-glow transition-all"
            >
              &gt; {t('navigation.contact')}
            </button>
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={toggleLanguage}
              className="border border-primary bg-black text-primary hover:bg-primary hover:text-black text-xs px-3 py-1 font-mono"
            >
              [{language.toUpperCase()}]
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="border border-primary bg-black text-primary hover:bg-primary hover:text-black text-xs px-3 py-1 font-mono"
            >
              $ {t('navigation.tryFree')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="border border-primary bg-black text-primary hover:bg-primary hover:text-black text-xs px-2 py-1 font-mono"
            >
              {isMobileMenuOpen ? '[X]' : '[≡]'}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-primary">
            <div className="py-4 space-y-2 text-sm font-mono">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-primary hover-glow py-1"
              >
                &gt; {t('navigation.home')}
              </button>
              <button 
                onClick={() => scrollToSection('purpose')}
                className="block w-full text-left text-primary hover-glow py-1"
              >
                &gt; {t('navigation.purpose')}
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="block w-full text-left text-primary hover-glow py-1"
              >
                &gt; {t('navigation.experiences')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-primary hover-glow py-1"
              >
                &gt; {t('navigation.faq')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-primary hover-glow py-1"
              >
                &gt; {t('navigation.contact')}
              </button>
              <div className="flex space-x-2 pt-2">
                <Button
                  onClick={toggleLanguage}
                  className="border border-primary bg-black text-primary hover:bg-primary hover:text-black text-xs px-2 py-1 font-mono"
                >
                  [{language.toUpperCase()}]
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="border border-primary bg-black text-primary hover:bg-primary hover:text-black text-xs px-2 py-1 font-mono"
                >
                  $ {t('navigation.tryFree')}
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
