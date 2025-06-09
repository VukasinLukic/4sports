
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quoteKey: 'testimonials.testimonial1.quote',
      authorKey: 'testimonials.testimonial1.author',
      clubKey: 'testimonials.testimonial1.club',
    },
    {
      quoteKey: 'testimonials.testimonial2.quote',
      authorKey: 'testimonials.testimonial2.author',
      clubKey: 'testimonials.testimonial2.club',
    },
  ];

  return (
    <section id="experiences" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 font-mono">
          <div className="text-primary text-sm mb-4">
            $ cat testimonials.log
          </div>
          <h2 className="text-2xl md:text-4xl font-mono text-primary mb-6">
            {t('testimonials.title')}
          </h2>
          <div className="h-px bg-primary w-56 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="ascii-border bg-black p-8 hover-glow transition-all">
              <div className="font-mono">
                <div className="text-primary text-xs mb-4">
                  OUTPUT_LOG_{index + 1}:
                </div>
                <div className="mb-6">
                  <pre className="text-primary text-sm leading-relaxed">
{`┌─ FEEDBACK ─────────────┐
│                        │
│ "${t(testimonial.quoteKey)}"
│                        │
└────────────────────────┘`}
                  </pre>
                </div>
                <div className="border-t border-primary pt-4">
                  <div className="text-primary text-sm">
                    &gt; USER: {t(testimonial.authorKey)}
                  </div>
                  <div className="text-primary text-sm">
                    &gt; ORG:  {t(testimonial.clubKey)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
