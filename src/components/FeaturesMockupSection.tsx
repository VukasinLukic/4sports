
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';
import { 
  Calendar, 
  Users, 
  CheckCircle, 
  CreditCard, 
  BarChart3, 
  Clock, 
  Smartphone, 
  Monitor, 
  Zap, 
  MessageCircle 
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const FeaturesMockupSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Calendar,
      titleKey: 'features.calendar.title',
      descriptionKey: 'features.calendar.description',
      phoneImage: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
      position: "left"
    },
    {
      icon: Users,
      titleKey: 'features.members.title',
      descriptionKey: 'features.members.description',
      phoneImage: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
      position: "right"
    },
    {
      icon: CheckCircle,
      titleKey: 'features.attendance.title',
      descriptionKey: 'features.attendance.description',
      phoneImage: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
      position: "left"
    },
    {
      icon: CreditCard,
      titleKey: 'features.payments.title',
      descriptionKey: 'features.payments.description',
      phoneImage: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
      position: "right"
    },
    {
      icon: BarChart3,
      titleKey: 'features.analytics.title',
      descriptionKey: 'features.analytics.description',
      phoneImage: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
      position: "left"
    },
    {
      icon: Clock,
      titleKey: 'features.scheduling.title',
      descriptionKey: 'features.scheduling.description',
      phoneImage: "/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png",
      position: "right"
    }
  ];

  return (
    <section className="section-padding organic-bg relative overflow-hidden">
      <div className="container-custom">
        {/* Intro section */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-balance mb-8 text-white">
            {t('mockup.title')} <span className="text-gradient">{t('mockup.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('mockup.description')}
          </p>
        </div>
        
        {/* About description */}
        <div className="mb-32 glass-card p-8 rounded-3xl max-w-4xl mx-auto">
          <h2 className="text-balance mb-8 text-white text-3xl">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Phone feature showcase */}
        <div className="mb-32 relative">
          {/* Center phones showcase */}
          <div className="flex justify-center items-end gap-8 mb-20 relative z-10">
            {/* Phone 1 - Left */}
            <div className="text-center hover-lift" style={{ transform: 'translateY(20px) rotate(-5deg)' }}>
              <div className="mb-6 flex justify-center relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-xl animate-pulse"></div>
                <Iphone16Pro
                  src="/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png"
                  width={220}
                  height={440}
                  className="text-gray-800 relative z-10 transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="glass-card p-4 rounded-2xl max-w-xs">
                <h4 className="text-lg font-bold text-white mb-2">{t('mockup.phone1.title')}</h4>
                <p className="text-sm text-gray-400">{t('mockup.phone1.description')}</p>
              </div>
            </div>

            {/* Phone 2 - Center */}
            <div className="text-center hover-lift" style={{ transform: 'translateY(-30px)' }}>
              <div className="mb-6 flex justify-center relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-2xl animate-pulse"></div>
                <Iphone16Pro
                  src="/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png"
                  width={240}
                  height={480}
                  className="text-gray-800 relative z-10 transition-transform duration-500 hover:scale-105 shadow-2xl"
                />
              </div>
              <div className="glass-card p-4 rounded-2xl max-w-xs border-2 border-primary/30">
                <h4 className="text-lg font-bold text-white mb-2">{t('mockup.phone2.title')}</h4>
                <p className="text-sm text-gray-400">{t('mockup.phone2.description')}</p>
              </div>
            </div>

            {/* Phone 3 - Right */}
            <div className="text-center hover-lift" style={{ transform: 'translateY(20px) rotate(5deg)' }}>
              <div className="mb-6 flex justify-center relative">
                <div className="absolute -inset-4 bg-gradient-to-l from-primary/20 to-transparent rounded-3xl blur-xl animate-pulse"></div>
                <Iphone16Pro
                  src="/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png"
                  width={220}
                  height={440}
                  className="text-gray-800 relative z-10 transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="glass-card p-4 rounded-2xl max-w-xs">
                <h4 className="text-lg font-bold text-white mb-2">{t('mockup.phone3.title')}</h4>
                <p className="text-sm text-gray-400">{t('mockup.phone3.description')}</p>
              </div>
            </div>
          </div>
          
          {/* Desktop mockup */}
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className="mb-12 flex justify-center">
              <div className="relative hover-lift">
                {/* Glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-3xl blur-2xl animate-pulse"></div>
                
                {/* Desktop mockup */}
                <div className="relative z-10 bg-gray-800 rounded-3xl p-6 shadow-2xl transition-transform duration-700 hover:scale-105">
                  {/* Screen */}
                  <div className="w-96 h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 mb-4">
                    <div className="w-full h-full rounded-xl overflow-hidden relative">
                      <img 
                        src="/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png"
                        alt="Desktop owner panel mockup"
                        className="w-full h-full object-cover"
                      />
                      {/* Screen overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Desktop base */}
                  <div className="w-48 h-4 bg-gray-700 rounded-full mx-auto relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop description */}
            <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto border border-primary/20">
              <Monitor className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">{t('mockup.desktop.title')}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t('mockup.desktop.description')}
              </p>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📊</span>
                  </div>
                  <p className="text-sm text-gray-400">{t('mockup.desktop.feature1')}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <p className="text-sm text-gray-400">{t('mockup.desktop.feature2')}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <p className="text-sm text-gray-400">{t('mockup.desktop.feature3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
            {t('features.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-card border-none overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {t(feature.descriptionKey)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom summary */}
        <div className="text-center mt-20">
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Smartphone className="w-8 h-8 text-primary" />
              <div className="w-12 h-px bg-primary"></div>
              <Monitor className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('mockup.summary.title')}</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('mockup.summary.description')}
            </p>
            <Button className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-full">
              {t('navigation.tryFree')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background gradient orbs */}
      <div className="absolute top-10 right-10 w-80 h-80 gradient-orb opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 gradient-orb opacity-15 animate-pulse" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default FeaturesMockupSection;
