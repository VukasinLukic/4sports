import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationProps {
  showNav?: boolean;
}

const Navigation = ({ showNav = true }: NavigationProps) => {
  const { language, toggleLanguage, t } = useLanguage();
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
  };

  const navItems = [
    { id: 'pricing', label: t('nav.pricing') },
    { id: 'testimonials', label: t('nav.testimonials') },
    { id: 'faq', label: t('nav.faq') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: showNav ? 1 : 0,
        y: showNav ? 0 : -20
      }}
      transition={{
        duration: 1.0,
        ease: "easeOut"
      }}
      style={{
        visibility: showNav ? 'visible' : 'hidden'
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/30 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/50'
          : 'bg-transparent backdrop-blur-sm'
      } ${!showNav ? 'pointer-events-none' : ''}`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/assets/logo.jpg"
              alt="4sports"
              className="h-12 w-auto object-contain transition-all group-hover:scale-105"
            />
            <span className="text-2xl font-black text-white group-hover:text-primary transition-colors">
              4sports
            </span>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA + Language Switcher - Right */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 rounded-lg transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'SR' : 'EN'}</span>
            </button>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block relative px-6 py-2.5 border-2 border-white/20 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden group hover:border-white/40"
            >
              {/* Background fill on hover */}
              <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
              {/* Text */}
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                {t('nav.cta')}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  mobileMenu.classList.toggle('hidden');
                }
              }}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }}
                className="text-left text-gray-300 hover:text-white font-medium transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection('contact');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="relative px-6 py-2.5 border-2 border-white/20 text-white font-bold rounded-lg transition-all text-center overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white transform -translate-x-full group-active:translate-x-0 transition-transform duration-500"></span>
              <span className="relative z-10 group-active:text-black transition-colors">
                {t('nav.cta')}
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
