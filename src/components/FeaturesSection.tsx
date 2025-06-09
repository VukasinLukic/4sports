
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
    <section className="section-padding organic-bg hero-pattern relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-10 w-80 h-80 gradient-orb opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 gradient-orb opacity-15 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container-custom relative z-10">
        {/* About Section */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-balance mb-12 text-white">
            {t('about.title')}
          </h2>
          <p className="text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            {t('about.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="glass-card p-8 rounded-3xl hover-lift group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
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
