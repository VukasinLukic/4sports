
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
      color: 'bg-blue-500/10 text-blue-400',
    },
    {
      icon: Target,
      titleKey: 'benefits.organization.title',
      descriptionKey: 'benefits.organization.description',
      color: 'bg-purple-500/10 text-purple-400',
    },
    {
      icon: Heart,
      titleKey: 'benefits.parents.title',
      descriptionKey: 'benefits.parents.description',
      color: 'bg-pink-500/10 text-pink-400',
    },
  ];

  return (
    <section id="purpose" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-muted-foreground">Why Choose</span>
            <span className="ml-2 text-sm font-medium text-primary">4sports</span>
          </div>
          <h2 className="text-balance mb-6 text-foreground">
            {t('benefits.title')}
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 rounded-2xl ${benefit.color} flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
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
