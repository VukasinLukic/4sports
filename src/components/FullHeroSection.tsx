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

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-5 pt-24 pb-8 text-center sm:px-6 md:pt-32 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 24 }}
          transition={{ duration: 0.9, delay: 1.1, ease: 'easeOut' }}
          className="mx-auto flex min-h-[78vh] w-full max-w-5xl flex-col items-center justify-between md:min-h-[72vh] md:justify-center"
        >
          <div className="flex flex-1 flex-col items-center justify-center pt-8 md:pt-0">
            <h1 className="max-w-4xl text-balance text-[2.6rem] font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-[4.2rem] lg:text-[4.8rem]">
              {t('mockupShowcase.hero.title')}
            </h1>
            <p className="mt-4 max-w-[18.5rem] text-balance text-[0.98rem] font-light leading-relaxed text-white/78 sm:max-w-2xl sm:text-lg lg:mt-6 lg:text-[1.25rem]">
              {t('mockupShowcase.hero.subtitle')}
            </p>
            <div className="mt-7 w-full max-w-[19.5rem] rounded-[1.75rem] border border-white/10 bg-black/22 px-3 py-3 backdrop-blur-md sm:mt-10 sm:max-w-none sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-0">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <AppStoreButton size="lg" />
                <GooglePlayButton size="lg" />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 18 }}
            transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
            className="flex min-h-[10rem] w-full items-end justify-center pb-1 md:min-h-[9rem] md:pb-4"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="max-w-[16rem] rounded-full border border-white/10 bg-black/28 px-5 py-3 text-balance text-[1.05rem] font-light tracking-tight text-white/90 backdrop-blur-md sm:max-w-3xl sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-3xl lg:text-4xl"
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
