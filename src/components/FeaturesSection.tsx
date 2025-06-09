
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: '📅',
      ascii: `
 ┌─────────┐
 │ [KALENDAR] │
 │  01 02 03 │
 │  04 05 06 │
 └─────────┘`,
      titleKey: 'features.calendar.title',
      descriptionKey: 'features.calendar.description',
    },
    {
      icon: '👥',
      ascii: `
 ┌─────────┐
 │ [ČLANOVI] │
 │  ◉ ◉ ◉  │
 │  ◉ ◉ ◉  │
 └─────────┘`,
      titleKey: 'features.members.title',
      descriptionKey: 'features.members.description',
    },
    {
      icon: '✓',
      ascii: `
 ┌─────────┐
 │[PRISUTNOST]│
 │  ✓ ✓ ✗  │
 │  ✓ ✗ ✓  │
 └─────────┘`,
      titleKey: 'features.attendance.title',
      descriptionKey: 'features.attendance.description',
    },
    {
      icon: '💳',
      ascii: `
 ┌─────────┐
 │ [PLAĆANJA] │
 │  $$$ EUR │
 │  PAID ✓  │
 └─────────┘`,
      titleKey: 'features.payments.title',
      descriptionKey: 'features.payments.description',
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* About Section */}
        <div className="text-center mb-20 font-mono">
          <div className="text-primary text-sm mb-4">
            $ cat about.txt
          </div>
          <h2 className="text-2xl md:text-4xl font-mono text-primary mb-6">
            {t('about.title')}
          </h2>
          <div className="h-px bg-primary w-64 mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-primary max-w-4xl mx-auto leading-relaxed">
            &gt; {t('about.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-primary text-sm mb-8 text-center font-mono">
            $ ls features/
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="ascii-border bg-black p-6 hover-glow transition-all">
                <div className="text-center">
                  <pre className="text-primary text-xs mb-4 font-mono">
                    {feature.ascii}
                  </pre>
                  <h4 className="text-sm font-mono text-primary mb-3">
                    {t(feature.titleKey)}
                  </h4>
                  <p className="text-xs text-primary font-mono opacity-80">
                    &gt; {t(feature.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
