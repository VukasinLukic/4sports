import { Suspense, lazy, useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import MinimalHeroSection from '@/components/MinimalHeroSection';
import FullHeroSection from '@/components/FullHeroSection';

// Lazy load below-the-fold sections for better initial load performance
const MockupShowcase = lazy(() => import('@/components/MockupShowcase'));
const FeaturesSection = lazy(() => import('@/components/FeaturesSection'));
const PricingSection = lazy(() => import('@/components/PricingSection'));
const TestimonialsAdvancedSection = lazy(() => import('@/components/TestimonialsAdvancedSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

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

const Index = () => {
  const { isLoading } = useLanguage();
  const [showHero, setShowHero] = useState(true);
  const [heroComplete, setHeroComplete] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // TEMPORARY: Disable session storage to always show hero (for testing)
  // TODO: Re-enable session storage when ready for production
  // useEffect(() => {
  //   const heroSeen = sessionStorage.getItem('heroSeen');
  //   if (heroSeen === 'true') {
  //     setShowHero(false);
  //     setHeroComplete(true);
  //     setShowNav(true);
  //   }
  // }, []);

  // When hero completes, hide it and show navigation
  useEffect(() => {
    if (heroComplete) {
      // sessionStorage.setItem('heroSeen', 'true'); // Disabled for testing
      setShowHero(false);
      // Navbar se pojavljuje ZAJEDNO sa video-om (odmah nakon logo fade out)
      setShowNav(true);
    }
  }, [heroComplete]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Logo Loading Animation */}
      {showHero && <MinimalHeroSection onComplete={() => setHeroComplete(true)} />}

      {/* Main Content */}
      <Navigation showNav={showNav} />
      <main>
        {/* Full Hero Section with rotating text */}
        <FullHeroSection />

        {/* Mockup Showcase - Platform Features */}
        <Suspense fallback={<SectionSkeleton />}>
          <MockupShowcase />
        </Suspense>

        {/* Features Section - For Owners, Coaches, Parents */}
        <Suspense fallback={<SectionSkeleton />}>
          <FeaturesSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsAdvancedSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-64 bg-black" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
