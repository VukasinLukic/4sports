
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      ascii: `
  ⚡ EFIKASNOST ⚡
 ┌─────────────┐
 │  SPEED: ███ │
 │  POWER: ███ │
 │  TIME:  ███ │
 └─────────────┘`,
      titleKey: 'benefits.efficiency.title',
      descriptionKey: 'benefits.efficiency.description',
    },
    {
      ascii: `
  🎯 ORGANIZACIJA 🎯
 ┌─────────────┐
 │  PLAN: ████ │
 │  EXEC: ████ │
 │  CTRL: ████ │
 └─────────────┘`,
      titleKey: 'benefits.organization.title',
      descriptionKey: 'benefits.organization.description',
    },
    {
      ascii: `
  💚 RODITELJI 💚
 ┌─────────────┐
 │  JOY:  ████ │
 │  INFO: ████ │
 │  EASY: ████ │
 └─────────────┘`,
      titleKey: 'benefits.parents.title',
      descriptionKey: 'benefits.parents.description',
    },
  ];

  return (
    <section id="purpose" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 font-mono">
          <div className="text-primary text-sm mb-4">
            $ grep -r "benefits" ./database
          </div>
          <h2 className="text-2xl md:text-4xl font-mono text-primary mb-6">
            {t('benefits.title')}
          </h2>
          <div className="h-px bg-primary w-48 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="ascii-border bg-black p-8 text-center hover-glow transition-all">
              <pre className="text-primary text-xs mb-6 font-mono">
                {benefit.ascii}
              </pre>
              <h3 className="text-lg font-mono text-primary mb-4">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-sm text-primary font-mono opacity-80">
                &gt; {t(benefit.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
