
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Play } from 'lucide-react';
import AnimatedButton from '@/components/ui/animated-button';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center organic-bg hero-pattern">
      {/* Main content */}
      <div className="relative container-custom text-center z-10">
        <div className="max-w-6xl mx-auto fade-in">
          {/* Main heading with enhanced styling */}
          <h1 className="text-balance mb-12">
            <span className="block text-white mb-4">{t('hero.title')}</span>
            <span className="block text-gradient">{t('hero.subtitle')}</span>
          </h1>

          {/* Subtitle with better typography */}
          <p className="text-2xl lg:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            {t('hero.description')}
          </p>

          {/* CTA buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24">
            <AnimatedButton 
              variant="primary"
              onClick={() => scrollToSection('contact')}
              className="min-w-[240px]"
            >
              Probaj Besplatno
              <ArrowRight className="ml-3 h-6 w-6" />
            </AnimatedButton>
            <AnimatedButton 
              variant="secondary"
              onClick={() => scrollToSection('purpose')}
              className="min-w-[240px]"
            >
              <Play className="mr-3 h-6 w-6" />
              Saznaj Više
            </AnimatedButton>
          </div>

          {/* Stats with modern design */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center glass-card p-8 rounded-3xl hover-lift">
              <div className="text-4xl lg:text-5xl font-black text-gradient mb-3">500+</div>
              <div className="text-sm text-gray-400 font-medium">Aktivnih Klubova</div>
            </div>
            <div className="text-center glass-card p-8 rounded-3xl hover-lift">
              <div className="text-4xl lg:text-5xl font-black text-gradient mb-3">10k+</div>
              <div className="text-sm text-gray-400 font-medium">Članova</div>
            </div>
            <div className="text-center glass-card p-8 rounded-3xl hover-lift">
              <div className="text-4xl lg:text-5xl font-black text-gradient mb-3">99%</div>
              <div className="text-sm text-gray-400 font-medium">Zadovoljstvo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
