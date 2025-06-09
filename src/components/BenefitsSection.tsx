
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Target, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Zap,
      titleKey: 'benefits.efficiency.title',
      descriptionKey: 'benefits.efficiency.description',
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      icon: Target,
      titleKey: 'benefits.organization.title',
      descriptionKey: 'benefits.organization.description',
      gradient: 'from-blue-500/20 to-blue-500/5',
    },
    {
      icon: Heart,
      titleKey: 'benefits.parents.title',
      descriptionKey: 'benefits.parents.description',
      gradient: 'from-purple-500/20 to-purple-500/5',
    },
  ];

  return (
    <section id="purpose" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('benefits.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${benefit.gradient}`}></div>
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-6 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t(benefit.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
