
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Target, Heart } from 'lucide-react';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Zap,
      titleKey: 'benefits.efficiency.title',
      descriptionKey: 'benefits.efficiency.description',
    },
    {
      icon: Target,
      titleKey: 'benefits.organization.title',
      descriptionKey: 'benefits.organization.description',
    },
    {
      icon: Heart,
      titleKey: 'benefits.parents.title',
      descriptionKey: 'benefits.parents.description',
    },
  ];

  return (
    <section id="purpose" className="section-padding organic-bg hero-pattern relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-16 left-20 w-72 h-72 gradient-orb opacity-20 animate-pulse"></div>
      <div className="absolute bottom-16 right-10 w-80 h-80 gradient-orb opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-balance mb-12 text-white">
            {t('benefits.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="glass-card p-10 rounded-3xl hover-lift group text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t(benefit.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
