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
            ? 'bg-black/24 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
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
                src="/assets/Transparent/4sports.svg"
                alt="4sports"
                className="h-10 w-auto object-contain transition-all group-hover:opacity-85"
              />
              <span className="text-2xl font-semibold tracking-tight text-white/95 transition-colors group-hover:text-white">
                4sports
              </span>
            </div>

            <div className="hidden md:block" />

            {/* CTA + Language Switcher - Right */}
            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/76 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'SR' : 'EN'}</span>
              </button>

              {/* Contact Us Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:block rounded-full border border-white/18 bg-transparent px-5 py-2.5 text-sm font-medium text-white/88 transition-all duration-300 hover:border-white/35 hover:bg-white/8"
              >
                {t('nav.contactUs')}
              </button>

              {/* Go to App Button */}
              <a
                href="https://app.4sports.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
              >
                {t('nav.cta')}
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
              {[
                { id: 'contact', label: t('nav.contact') },
                { id: 'faq', label: t('nav.faq') },
              ].map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
                onClick={() => handleNavClick(item.id)}
                className="text-4xl font-semibold tracking-tight text-white/80 transition-colors hover:text-white"
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
                className="rounded-full border border-white/30 px-10 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
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
                className="rounded-full bg-white px-10 py-4 text-lg font-medium text-black transition-all duration-300 hover:bg-white/90"
              >
                {t('nav.cta')}
              </motion.a>

              {/* Logo below CTA */}
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                src="/assets/Transparent/4sports.svg"
                alt="4sports"
                className="mt-4 h-24 w-auto object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
