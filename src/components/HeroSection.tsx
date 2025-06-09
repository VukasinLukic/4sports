
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
      {/* Main content */}
      <div className="relative container-custom text-center z-10">
        <div className="max-w-5xl mx-auto fade-in">
          {/* Modern badge */}
          <div className="badge-modern mb-8 mx-auto w-fit">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-muted-foreground">Predstavljamo</span>
            <span className="ml-2 text-primary font-semibold">4sports v2.0</span>
          </div>

          {/* Main heading with better spacing */}
          <h1 className="text-balance mb-8">
            <span className="block text-foreground mb-2">{t('hero.title')}</span>
            <span className="block text-gradient">{t('hero.subtitle')}</span>
          </h1>

          {/* Subtitle with better typography */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t('hero.description')}
          </p>

          {/* CTA buttons with improved spacing */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary group min-w-[200px]"
            >
              {t('hero.cta1')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('purpose')}
              className="btn-secondary group min-w-[200px]"
            >
              <Play className="mr-2 h-5 w-5" />
              {t('hero.cta2')}
            </Button>
          </div>

          {/* Stats with modern design */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center glass-card p-6 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-sm text-muted-foreground font-medium">Aktivnih Klubova</div>
            </div>
            <div className="text-center glass-card p-6 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">10k+</div>
              <div className="text-sm text-muted-foreground font-medium">Članova</div>
            </div>
            <div className="text-center glass-card p-6 rounded-2xl">
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">99%</div>
              <div className="text-sm text-muted-foreground font-medium">Zadovoljstvo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-primary rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-primary rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary rounded-full opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
};

export default HeroSection;
