
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
      gradient: 'from-primary/30 via-primary/20 to-primary/10',
    },
    {
      icon: Target,
      titleKey: 'benefits.organization.title',
      descriptionKey: 'benefits.organization.description',
      gradient: 'from-primary/25 via-primary/15 to-primary/5',
    },
    {
      icon: Heart,
      titleKey: 'benefits.parents.title',
      descriptionKey: 'benefits.parents.description',
      gradient: 'from-primary/35 via-primary/25 to-primary/15',
    },
  ];

  return (
    <section id="purpose" className="section-padding organic-bg hero-pattern relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 gradient-orb opacity-25 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 gradient-orb opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20 fade-in">
          <div className="badge-modern mb-12 mx-auto w-fit">
            <span className="text-gray-300">Why Choose</span>
            <span className="ml-2 text-primary font-bold">4sports</span>
          </div>
          <h2 className="text-balance mb-12 text-white">
            {t('benefits.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-all duration-300 glass-card`}>
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-gray-300 text-xl leading-relaxed">
                  {t(benefit.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-16 w-5 h-5 rounded-full opacity-70 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #22c55e, #16a34a)', animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full opacity-60 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #15803d, #22c55e)', animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default BenefitsSection;
