
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Play } from 'lucide-react';
import AnimatedButton from '@/components/ui/animated-button';
import SimpleButton from '@/components/ui/simple-button';
import AnimatedStat from '@/components/ui/animated-stat';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center organic-bg hero-pattern pt-32">
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
            <SimpleButton 
              variant="primary"
              onClick={() => scrollToSection('contact')}
              className="min-w-[240px]"
            >
              {t('hero.cta1')}
              <ArrowRight className="ml-3 h-6 w-6" />
            </SimpleButton>
            <SimpleButton 
              variant="secondary"
              onClick={() => scrollToSection('purpose')}
              className="min-w-[240px]"
            >
              <Play className="mr-3 h-6 w-6" />
              {t('hero.cta2')}
            </SimpleButton>
          </div>

          {/* Stats with animated design */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <AnimatedStat value={t('hero.stats.clubs.value')} label={t('hero.stats.clubs.label')} />
            <AnimatedStat value={t('hero.stats.members.value')} label={t('hero.stats.members.label')} />
            <AnimatedStat value={t('hero.stats.satisfaction.value')} label={t('hero.stats.satisfaction.label')} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
