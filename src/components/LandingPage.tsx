'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import MinimalHeroSection from '@/components/MinimalHeroSection';
import FullHeroSection from '@/components/FullHeroSection';

// Lazy load below-the-fold sections for better initial load performance
const UnifiedFeaturesSection = dynamic(() => import('@/components/UnifiedFeaturesSection'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});
const TestimonialsAdvancedSection = dynamic(() => import('@/components/TestimonialsAdvancedSection'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});
const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});
const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-black" />,
  ssr: false,
});

// Loading skeleton for sections
const SectionSkeleton = () => (
  <div className="py-24 bg-black">
    <div className="container mx-auto px-4">
      <div className="animate-pulse">
        <div className="h-8 bg-white/5 rounded-full w-32 mx-auto mb-6" />
        <div className="h-12 bg-white/5 rounded-lg w-64 mx-auto mb-4" />
        <div className="h-4 bg-white/5 rounded w-96 mx-auto mb-8" />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-white/5 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const LandingPage = () => {
  const { isLoading } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);
  const [splashDone, setSplashDone] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // Page is ready when translations are loaded
  const isPageReady = !isLoading;

  // When splash completes, show the page
  useEffect(() => {
    if (splashDone) {
      setShowSplash(false);
      setShowNav(true);
    }
  }, [splashDone]);

  return (
    <div className="min-h-screen bg-black">
      {/* Logo Splash = actual loader */}
      {showSplash && (
        <MinimalHeroSection
          isPageReady={isPageReady}
          onComplete={() => setSplashDone(true)}
        />
      )}

      {/* Navigation */}
      <Navigation showNav={showNav} />

      {/* Full Hero Section - NOT scaled */}
      <FullHeroSection splashDone={splashDone} />

      {/* Main Content with responsive scaling */}
      <main>
        <div className="md:scale-[0.65] lg:scale-75 xl:scale-90 2xl:scale-100 origin-top transition-transform duration-300">
          {/* Unified Features Section - Role-based with phone mockup */}
          <UnifiedFeaturesSection />

          <TestimonialsAdvancedSection />
          <FAQSection />
          <ContactSection />
        </div>
      </main>

      {/* Footer - NOT scaled */}
      <Footer />
    </div>
  );
};

export default LandingPage;
