'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface MinimalHeroSectionProps {
  isPageReady?: boolean;
  onComplete?: () => void;
}

// Timing: 800ms fade in + 2500ms visible + 800ms fade out = 4100ms minimum
const FADE_IN = 800;
const VISIBLE_MIN = 2500;
const FADE_OUT = 800;

const MinimalHeroSection = ({ isPageReady = false, onComplete }: MinimalHeroSectionProps) => {
  const [phase, setPhase] = useState<'fadeIn' | 'visible' | 'fadeOut' | 'done'>('fadeIn');
  const readyRef = useRef(false);
  const minTimeRef = useRef(false);
  const exitingRef = useRef(false);

  // Phase 1: Fade in the logo
  useEffect(() => {
    const timer = setTimeout(() => setPhase('visible'), FADE_IN);
    return () => clearTimeout(timer);
  }, []);

  // Track minimum visible time (starts after fade in)
  useEffect(() => {
    const timer = setTimeout(() => {
      minTimeRef.current = true;
      maybeExit();
    }, FADE_IN + VISIBLE_MIN);
    return () => clearTimeout(timer);
  }, []);

  // Track page ready state
  useEffect(() => {
    if (isPageReady) {
      readyRef.current = true;
      maybeExit();
    }
  }, [isPageReady]);

  const maybeExit = () => {
    // Only exit when BOTH conditions met: min time passed AND page is ready
    if (readyRef.current && minTimeRef.current && !exitingRef.current) {
      exitingRef.current = true;
      setPhase('fadeOut');
      setTimeout(() => {
        setPhase('done');
        onComplete?.();
      }, FADE_OUT);
    }
  };

  if (phase === 'done') return null;

  return (
    <section className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      {/* Logo with pulse animation while loading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: phase === 'fadeOut' ? 0 : phase === 'visible' ? 1 : 0,
          scale: phase === 'visible' ? 1 : 0.9,
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <motion.img
          src="/assets/Transparent/4sports.svg"
          alt="4sports Logo"
          className="w-32 h-auto md:w-40 lg:w-48 object-contain"
          animate={phase === 'visible' && !isPageReady ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle loading indicator under logo */}
        {phase === 'visible' && !isPageReady && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="w-12 h-0.5 bg-white/30 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Fade to black overlay for exit */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'fadeOut' ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="absolute inset-0 bg-black z-20 pointer-events-none"
      />
    </section>
  );
};

export default MinimalHeroSection;
