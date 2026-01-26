import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
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

  // Start video playback when text appears
  useEffect(() => {
    if (videoLoaded && showContent && videoRef.current) {
      // Video počinje da se reprodukuje kada se tekst pojavi
      // Video fade in: 2s, Tekst delay: 1.5s = tekst se pojavljuje posle 3.5s
      const playTimer = setTimeout(() => {
        videoRef.current?.play().catch(err => {
          console.log('Video autoplay failed:', err);
        });
      }, 3500); // Čeka da se tekst pojavi, pa tek onda startuje video

      return () => clearTimeout(playTimer);
    }
  }, [videoLoaded, showContent]);

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
          onLoadedData={() => setVideoLoaded(true)}
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
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center min-h-screen">
        <motion.div
          className="h-40 md:h-48 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 1.5, // Container se pojavljuje 1.5s nakon što video krene
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
          className="absolute bottom-28 inset-x-0 flex flex-col sm:flex-row items-center justify-center gap-3 z-20"
        >
          <GooglePlayButton size="lg" />
          <AppStoreButton size="lg" />
        </motion.div>

        {/* Scroll indicator - positioned at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0, x: -10 }}
          transition={{ duration: 1, delay: 3.0 }}
          className="absolute bottom-12 inset-x-0 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default FullHeroSection;
