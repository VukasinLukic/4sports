
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturesBentoSection from '@/components/FeaturesBentoSection';
import MockupSection from '@/components/MockupSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsAdvancedSection from '@/components/TestimonialsAdvancedSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const { isLoading } = useLanguage();

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
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesBentoSection />
        <MockupSection />
        <PricingSection />
        <TestimonialsAdvancedSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
