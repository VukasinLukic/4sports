'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  showNav?: boolean;
}

const Navigation = ({ showNav = true }: NavigationProps) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'testimonials', label: t('nav.testimonials') },
    { id: 'faq', label: t('nav.faq') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 300);
  };

  return (
    <>
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

              {/* Contact Us Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:block relative px-6 py-2.5 border-2 border-white/20 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden group hover:border-white/40"
              >
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  {t('nav.contactUs')}
                </span>
              </button>

              {/* Go to App Button */}
              <a
                href="https://app.4sports.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block relative px-6 py-2.5 border-2 border-white/20 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden group hover:border-white/40"
              >
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  {t('nav.cta')}
                </span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(true)}
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
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Nav items centered */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
                  onClick={() => handleNavClick(item.id)}
                  className="text-4xl font-bold text-white/80 hover:text-white transition-colors tracking-tight"
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="w-16 h-px bg-white/20 my-2"
              />

              {/* CTA Buttons */}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                onClick={() => handleNavClick('contact')}
                className="px-10 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white hover:text-black transition-all duration-300"
              >
                {t('nav.contactUs')}
              </motion.button>

              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.4 }}
                href="https://app.4sports.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-[#22c55e] text-black font-bold text-lg rounded-xl hover:bg-[#1ea84e] transition-all duration-300"
              >
                {t('nav.cta')}
              </motion.a>

              {/* Logo below CTA */}
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                src="/assets/logo.jpg"
                alt="4sports"
                className="h-24 w-auto object-contain mt-4"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
