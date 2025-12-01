import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { GradientButton } from './ui/gradient-button';

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
      isScrolled
        ? 'bg-black/80 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Top Left */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <img
                src="/assets/logo.jpg"
                alt="4sports Logo"
                className="h-10 w-10 rounded-lg object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                4sports
              </span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase -mt-1">
                Club Management
              </span>
            </div>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { id: 'about', label: t('navigation.purpose') },
              { id: 'features', label: 'Features' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'testimonials', label: t('navigation.experiences') },
              { id: 'faq', label: t('navigation.faq') },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-400 group-hover:w-3/4 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right Side - Language & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-200"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'SR' : 'EN'}</span>
            </button>
            <GradientButton
              onClick={() => scrollToSection('contact')}
              className="text-sm"
            >
              {t('navigation.tryFree')}
            </GradientButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-primary/10 bg-black/95 backdrop-blur-xl">
            <div className="py-6 space-y-1">
              {[
                { id: 'about', label: t('navigation.purpose') },
                { id: 'features', label: 'Features' },
                { id: 'pricing', label: 'Pricing' },
                { id: 'testimonials', label: t('navigation.experiences') },
                { id: 'faq', label: t('navigation.faq') },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex gap-3 pt-4 px-4">
                <button
                  onClick={toggleLanguage}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-200"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'en' ? 'SR' : 'EN'}</span>
                </button>
                <GradientButton
                  onClick={() => scrollToSection('contact')}
                  className="flex-1 text-sm"
                >
                  {t('navigation.tryFree')}
                </GradientButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
