
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Users, CheckCircle, CreditCard, BarChart3, Clock } from 'lucide-react';

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
    {
      icon: BarChart3,
      titleKey: 'features.analytics.title',
      descriptionKey: 'features.analytics.description',
    },
    {
      icon: Clock,
      titleKey: 'features.scheduling.title',
      descriptionKey: 'features.scheduling.description',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* About Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-muted-foreground">About</span>
            <span className="ml-2 text-sm font-medium text-primary">4sports</span>
          </div>
          <h2 className="text-balance mb-6 text-foreground">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="glass-card p-8 rounded-xl hover-lift group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
