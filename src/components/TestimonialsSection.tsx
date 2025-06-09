
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
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
    <section id="experiences" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-primary mb-4" />
                  <p className="text-lg text-foreground leading-relaxed italic">
                    "{t(testimonial.quoteKey)}"
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="font-semibold text-foreground text-lg">
                    {t(testimonial.authorKey)}
                  </p>
                  <p className="text-primary font-medium">
                    {t(testimonial.clubKey)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
