
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Users, CheckCircle, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Calendar,
      titleKey: 'features.calendar.title',
      descriptionKey: 'features.calendar.description',
    },
    {
      icon: Users,
      titleKey: 'features.members.title',
      descriptionKey: 'features.members.description',
    },
    {
      icon: CheckCircle,
      titleKey: 'features.attendance.title',
      descriptionKey: 'features.attendance.description',
    },
    {
      icon: CreditCard,
      titleKey: 'features.payments.title',
      descriptionKey: 'features.payments.description',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {t('features.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      {t(feature.titleKey)}
                    </h4>
                    <p className="text-muted-foreground">
                      {t(feature.descriptionKey)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
