
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative container-custom text-center">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Small badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-8">
            <span className="text-sm text-muted-foreground">Presenting</span>
            <span className="ml-2 text-sm font-medium text-primary">4sports v2.0</span>
          </div>

          {/* Main heading */}
          <h1 className="text-balance mb-6">
            <span className="block text-foreground">Transform Your</span>
            <span className="block text-gradient">Sports Club Management</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary group"
            >
              {t('hero.cta1')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('purpose')}
              className="btn-secondary group"
            >
              <Play className="mr-2 h-4 w-4" />
              {t('hero.cta2')}
            </Button>
          </div>

          {/* Stats or social proof */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Active Clubs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10k+</div>
              <div className="text-sm text-muted-foreground">Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-primary rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary rounded-full opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;
