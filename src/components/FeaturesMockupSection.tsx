
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';
import { Calendar, Users, CheckCircle, CreditCard, BarChart3, Clock, Monitor, Smartphone, MessageCircle, Zap } from 'lucide-react';

const FeaturesMockupSection = () => {
  const { t } = useLanguage();

  const mockupFeatures = [
    {
      mockup: {
        type: 'mobile',
        src: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
        title: t('mockup.phone1.title'),
        description: t('mockup.phone1.description'),
        icon: Zap
      },
      features: [
        {
          icon: Calendar,
          title: t('features.calendar.title'),
          description: t('features.calendar.description')
        },
        {
          icon: Clock,
          title: t('features.scheduling.title'),
          description: t('features.scheduling.description')
        }
      ]
    },
    {
      mockup: {
        type: 'mobile',
        src: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
        title: t('mockup.phone2.title'),
        description: t('mockup.phone2.description'),
        icon: Users
      },
      features: [
        {
          icon: Users,
          title: t('features.members.title'),
          description: t('features.members.description')
        },
        {
          icon: CheckCircle,
          title: t('features.attendance.title'),
          description: t('features.attendance.description')
        }
      ]
    },
    {
      mockup: {
        type: 'mobile',
        src: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
        title: t('mockup.phone3.title'),
        description: t('mockup.phone3.description'),
        icon: MessageCircle
      },
      features: [
        {
          icon: CreditCard,
          title: t('features.payments.title'),
          description: t('features.payments.description')
        }
      ]
    },
    {
      mockup: {
        type: 'desktop',
        src: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
        title: t('mockup.desktop.title'),
        description: t('mockup.desktop.description'),
        icon: Monitor
      },
      features: [
        {
          icon: BarChart3,
          title: t('features.analytics.title'),
          description: t('features.analytics.description')
        }
      ]
    }
  ];

  return (
    <section className="section-padding organic-bg relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-10 w-80 h-80 gradient-orb opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 gradient-orb opacity-15 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-balance mb-8 text-white">
            {t('mockup.title')} <span className="text-gradient">{t('mockup.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            {t('mockup.description')}
          </p>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-6">{t('about.title')}</h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>

        {/* Mockup Features Grid */}
        <div className="space-y-32">
          {mockupFeatures.map((item, index) => {
            const MockupIcon = item.mockup.icon;
            const isReversed = index % 2 === 1;
            
            return (
              <div key={index} className={`flex items-center gap-16 ${isReversed ? 'flex-row-reverse' : ''}`}>
                {/* Mockup Side */}
                <div className="flex-1 flex justify-center">
                  <div className="text-center hover-lift">
                    <div className="mb-8 flex justify-center relative">
                      <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-2xl animate-pulse"></div>
                      
                      {item.mockup.type === 'mobile' ? (
                        <Iphone16Pro
                          src={item.mockup.src}
                          width={280}
                          height={560}
                          className="text-gray-800 relative z-10 transition-transform duration-500 hover:scale-105 shadow-2xl"
                        />
                      ) : (
                        <div className="relative z-10 bg-gray-800 rounded-3xl p-6 shadow-2xl transition-transform duration-700 hover:scale-105">
                          <div className="w-96 h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 mb-4">
                            <div className="w-full h-full rounded-xl overflow-hidden relative">
                              <img 
                                src={item.mockup.src}
                                alt="Desktop mockup"
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                            </div>
                          </div>
                          <div className="w-48 h-4 bg-gray-700 rounded-full mx-auto relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-2 bg-gray-600 rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Mockup Description */}
                    <div className="glass-card p-6 rounded-2xl max-w-sm mx-auto border border-primary/20">
                      <MockupIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="text-xl font-bold text-white mb-3">{item.mockup.title}</h4>
                      <p className="text-gray-300">{item.mockup.description}</p>
                    </div>
                  </div>
                </div>

                {/* Features Side */}
                <div className="flex-1">
                  <div className="space-y-8">
                    {item.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={featureIndex} className="glass-card p-8 rounded-3xl hover-lift group">
                          <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                              <FeatureIcon className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                              <h4 className="text-2xl font-bold text-white mb-4">
                                {feature.title}
                              </h4>
                              <p className="text-gray-300 text-lg leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <div className="text-center mt-32">
          <div className="glass-card p-12 rounded-3xl max-w-5xl mx-auto border border-primary/20">
            <div className="flex items-center justify-center gap-6 mb-8">
              <Smartphone className="w-10 h-10 text-primary" />
              <div className="w-16 h-px bg-primary"></div>
              <Monitor className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">{t('mockup.summary.title')}</h3>
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              {t('mockup.summary.description')}
            </p>
            
            {/* Feature highlights grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h5 className="text-lg font-bold text-white mb-2">{t('mockup.desktop.feature1')}</h5>
                <p className="text-gray-400">Detaljni izveštaji i statistike</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h5 className="text-lg font-bold text-white mb-2">{t('mockup.desktop.feature2')}</h5>
                <p className="text-gray-400">Potpuna kontrola nad klubom</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h5 className="text-lg font-bold text-white mb-2">{t('mockup.desktop.feature3')}</h5>
                <p className="text-gray-400">Optimizovani procesi rada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesMockupSection;
