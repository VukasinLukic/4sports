
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

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
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 gradient-orb opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 gradient-orb opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] gradient-orb opacity-10"></div>

      {/* Main content */}
      <div className="relative container-custom text-center z-10">
        <div className="max-w-6xl mx-auto fade-in">
          {/* Modern badge */}
          <div className="badge-modern mb-12 mx-auto w-fit">
            <Sparkles className="w-5 h-5 text-primary mr-3" />
            <span className="text-gray-300">Predstavljamo</span>
            <span className="ml-2 text-primary font-bold">4sports v2.0</span>
          </div>

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
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary group min-w-[240px] text-lg"
            >
              {t('hero.cta1')}
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('purpose')}
              className="btn-secondary group min-w-[240px] text-lg"
            >
              <Play className="mr-3 h-6 w-6" />
              {t('hero.cta2')}
            </Button>
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

      {/* Enhanced decorative elements */}
      <div className="absolute top-1/4 left-16 w-4 h-4 rounded-full opacity-60 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #22c55e, #16a34a)'}}></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 rounded-full opacity-80 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #16a34a, #15803d)', animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full opacity-40 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #22c55e, #16a34a)', animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full opacity-70 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #15803d, #22c55e)', animationDelay: '0.5s'}}></div>
    </section>
  );
};

export default HeroSection;
