import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MinimalHeroSectionProps {
  onComplete?: () => void;
}

const MinimalHeroSection = ({ onComplete }: MinimalHeroSectionProps) => {
  const [currentStep, setCurrentStep] = useState<'fadeIn' | 'showLogo' | 'fadeOut' | 'complete'>('fadeIn');

  useEffect(() => {
    // Fade from black (800ms)
    const fadeInTimer = setTimeout(() => {
      setCurrentStep('showLogo');
    }, 800);

    // Show logo (2500ms - produženo za 1 sekundu)
    const showLogoTimer = setTimeout(() => {
      setCurrentStep('fadeOut');
    }, 800 + 2500);

    // Fade to black (800ms)
    const fadeOutTimer = setTimeout(() => {
      setCurrentStep('complete');
      if (onComplete) {
        onComplete();
      }
    }, 800 + 2500 + 800);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(showLogoTimer);
      clearTimeout(fadeOutTimer);
    };
  }, [onComplete]);

  if (currentStep === 'complete') {
    return null;
  }

  return (
    <section className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: currentStep === 'showLogo' ? 1 : 0
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
        className="relative z-10"
      >
        <img
          src="/assets/logo.jpg"
          alt="4sports Logo"
          className="w-32 h-auto md:w-40 lg:w-48 object-contain"
        />
      </motion.div>

      {/* Fade to black overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: currentStep === 'fadeOut' ? 1 : 0
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-black z-20 pointer-events-none"
      />
    </section>
  );
};

export default MinimalHeroSection;
