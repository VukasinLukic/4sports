'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GooglePlayButton, AppStoreButton } from '@/components/ui/AppStoreButtons';
import { useLanguage } from '@/contexts/LanguageContext';

interface FullHeroSectionProps {
  splashDone?: boolean;
}

const FullHeroSection = ({ splashDone = false }: FullHeroSectionProps) => {
  const { t } = useLanguage();
  const [showContent, setShowContent] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // Rotating texts - like the old loading screen
  const rotatingTexts = [
    t('hero.minimal.intro'),      // "Sports clubs are complex."
    t('hero.minimal.word1'),       // "Players."
    t('hero.minimal.word2'),       // "Schedules."
    t('hero.minimal.word3'),       // "Memberships."
    t('hero.minimal.word4'),       // "Payments."
    t('hero.minimal.outro1'),      // "Too many tools."
    t('hero.minimal.outro2'),      // "Too little clarity."
  ];

  // Show content when splash screen is done
  useEffect(() => {
    if (splashDone) {
      setShowContent(true);
    }
  }, [splashDone]);

  // Try to play a video, with Safari fallback
  const tryPlayVideo = (vid: HTMLVideoElement) => {
    const attempt = () => {
      vid.play().catch(() => {
        const handler = () => {
          vid.play().catch(() => {});
          document.removeEventListener('touchstart', handler);
          document.removeEventListener('click', handler);
        };
        document.addEventListener('touchstart', handler, { once: true });
        document.addEventListener('click', handler, { once: true });
      });
    };
    if (vid.readyState >= 3) {
      attempt();
    } else {
      vid.addEventListener('canplay', attempt, { once: true });
    }
  };

  // Start desktop video when content is shown
  useEffect(() => {
    if (showContent && videoRef.current) {
      tryPlayVideo(videoRef.current);
    }
  }, [showContent, videoLoaded]);

  // Start mobile video immediately
  useEffect(() => {
    if (mobileVideoRef.current) {
      tryPlayVideo(mobileVideoRef.current);
    }
  }, []);

  // Auto-rotate text every 3 seconds
  useEffect(() => {
    if (showContent) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [showContent, rotatingTexts.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/hero-poster.webp"
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => {
            if (showContent && videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
          }}
        >
          <source src="/assets/heroSekcija2-desktop.mp4" type="video/mp4" />
        </video>
        <video
          ref={mobileVideoRef}
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          poster="/assets/hero-poster.webp"
        >
          <source src="/assets/rotated.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Subtle film grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[5]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />
      </div>

      {/* Main content - Rotating text */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-end min-h-screen pb-12">
        {/* Rotating text - just above store buttons */}
        <motion.div
          className="h-32 md:h-36 flex items-center justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 1.5,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90 tracking-tight leading-relaxed">
                {rotatingTexts[currentIndex]}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* App Store Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20, x: -12 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 z-20 mb-16"
        >
          <GooglePlayButton size="lg" />
          <AppStoreButton size="lg" />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default FullHeroSection;
