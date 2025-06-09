
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Quote } from 'lucide-react';

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
    <section id="experiences" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm text-muted-foreground">Success</span>
            <span className="ml-2 text-sm font-medium text-primary">Stories</span>
          </div>
          <h2 className="text-balance mb-6 text-foreground">
            {t('testimonials.title')}
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 rounded-xl hover-lift">
              <Quote className="w-8 h-8 text-primary mb-6" />
              <blockquote className="text-lg text-foreground mb-8 leading-relaxed">
                "{t(testimonial.quoteKey)}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">
                    {t(testimonial.authorKey).charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {t(testimonial.authorKey)}
                  </div>
                  <div className="text-muted-foreground">
                    {t(testimonial.clubKey)}
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
