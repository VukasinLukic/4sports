'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GooglePlayButton, AppStoreButton } from '@/components/ui/AppStoreButtons';
import { useLanguage } from '@/contexts/LanguageContext';

const FullHeroSection = () => {
  const { t } = useLanguage();
  const [showContent, setShowContent] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Animation sequence: video fades in → navbar appears → text appears → video starts playing
  useEffect(() => {
    // Wait for MinimalHeroSection to COMPLETELY finish (logo fade out completed)
    // Total MinimalHero time: 800 + 2500 + 800 = 4100ms
    const showVideoTimer = setTimeout(() => {
      setShowContent(true);
    }, 4100);

    return () => clearTimeout(showVideoTimer);
  }, []);

  // Start video playback when content is shown
  useEffect(() => {
    if (showContent && videoRef.current) {
      const vid = videoRef.current;
      // Try to play immediately when content shows
      const tryPlay = () => {
        vid.play().catch(() => {
          // Safari may block autoplay - retry on user interaction
          const handler = () => {
            vid.play().catch(() => {});
            document.removeEventListener('touchstart', handler);
            document.removeEventListener('click', handler);
          };
          document.addEventListener('touchstart', handler, { once: true });
          document.addEventListener('click', handler, { once: true });
        });
      };

      if (videoLoaded) {
        tryPlay();
      } else {
        // Wait for video to be ready
        const onReady = () => tryPlay();
        vid.addEventListener('canplay', onReady, { once: true });
        return () => vid.removeEventListener('canplay', onReady);
      }
    }
  }, [showContent, videoLoaded]);

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
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => {
            if (showContent && videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
          }}
        >
          <source src="/assets/heroSekcija2.mp4" type="video/mp4" />
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
              <p className="text-3xl md:text-5xl lg:text-6xl font-light text-white/90 tracking-tight leading-relaxed">
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
