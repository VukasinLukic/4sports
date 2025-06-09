
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Iphone16Pro } from '@/components/ui/iphone-16-pro';
import { Smartphone, Monitor, Zap, Users, MessageCircle } from 'lucide-react';

const MockupSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding organic-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-balance mb-8 text-white">
            {t('mockup.title')} <span className="text-gradient">{t('mockup.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('mockup.description')}
          </p>
        </div>

        {/* Mobile Mockups Row */}
        <div className="max-w-6xl mx-auto mb-32">
          <div className="flex justify-center items-end gap-8 mb-12">
            {/* Phone 1 - Slightly lower */}
            <div className="text-center hover-lift" style={{ transform: 'translateY(20px)' }}>
              <div className="mb-6 flex justify-center relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-xl animate-pulse"></div>
                <Iphone16Pro
                  src="/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png"
                  width={220}
                  height={440}
                  className="text-gray-800 relative z-10 transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="glass-card p-6 rounded-2xl max-w-xs">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">{t('mockup.phone1.title')}</h4>
                <p className="text-gray-300 text-sm">{t('mockup.phone1.description')}</p>
              </div>
            </div>

            {/* Phone 2 - Center, highest */}
            <div className="text-center hover-lift" style={{ transform: 'translateY(-10px)' }}>
              <div className="mb-6 flex justify-center relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-2xl animate-pulse"></div>
                <Iphone16Pro
                  src="/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png"
                  width={240}
                  height={480}
                  className="text-gray-800 relative z-10 transition-transform duration-500 hover:scale-105 shadow-2xl"
                />
              </div>
              <div className="glass-card p-6 rounded-2xl max-w-xs border-2 border-primary/30">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">{t('mockup.phone2.title')}</h4>
                <p className="text-gray-300 text-sm">{t('mockup.phone2.description')}</p>
              </div>
            </div>

            {/* Phone 3 - Slightly lower */}
            <div className="text-center hover-lift" style={{ transform: 'translateY(20px)' }}>
              <div className="mb-6 flex justify-center relative">
                <div className="absolute -inset-4 bg-gradient-to-l from-primary/20 to-transparent rounded-3xl blur-xl animate-pulse"></div>
                <Iphone16Pro
                  src="/lovable-uploads/d7924c41-baea-4511-bc86-b313675ec586.png"
                  width={220}
                  height={440}
                  className="text-gray-800 relative z-10 transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="glass-card p-6 rounded-2xl max-w-xs">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-2">{t('mockup.phone3.title')}</h4>
                <p className="text-gray-300 text-sm">{t('mockup.phone3.description')}</p>
              </div>
            </div>
          </div>

          {/* Connecting Lines Animation */}
          <div className="flex justify-center mb-16">
            <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Desktop Owner Panel */}
        <div className="max-w-5xl mx-auto text-center">
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

        {/* Bottom summary */}
        <div className="text-center mt-20">
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Smartphone className="w-8 h-8 text-primary" />
              <div className="w-12 h-px bg-primary"></div>
              <Monitor className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('mockup.summary.title')}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('mockup.summary.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupSection;
