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

  const rotatingTexts = [
    t('hero.minimal.intro'),
    t('hero.minimal.word1'),
    t('hero.minimal.word2'),
    t('hero.minimal.word3'),
    t('hero.minimal.word4'),
    t('hero.minimal.outro1'),
    t('hero.minimal.outro2'),
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

  useEffect(() => {
    if (!showContent) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [showContent, rotatingTexts.length]);

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
          <source src="/assets/videoNovi.mp4" type="video/mp4" />
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
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.22),transparent_24%,transparent_76%,rgba(0,0,0,0.38))] pointer-events-none z-[5]" />

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 pt-28 pb-10 text-center md:pt-32 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 24 }}
          transition={{ duration: 0.9, delay: 1.1, ease: 'easeOut' }}
          className="mx-auto flex min-h-[72vh] w-full max-w-5xl flex-col items-center justify-center"
        >
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="max-w-4xl text-balance text-[3rem] font-semibold tracking-[-0.04em] text-white sm:text-[4.2rem] lg:text-[4.8rem]">
              {t('mockupShowcase.hero.title')}
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-base font-light leading-relaxed text-white/72 sm:text-lg lg:mt-6 lg:text-[1.25rem]">
              {t('mockupShowcase.hero.subtitle')}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <AppStoreButton size="lg" />
              <GooglePlayButton size="lg" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 18 }}
            transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
            className="flex min-h-[7rem] items-end justify-center pb-2 md:min-h-[9rem] md:pb-4"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="max-w-3xl text-balance text-2xl font-light tracking-tight text-white/88 sm:text-3xl lg:text-4xl"
              >
                {rotatingTexts[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default FullHeroSection;
