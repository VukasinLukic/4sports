
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Quote, Star } from 'lucide-react';

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
    <section id="experiences" className="section-padding organic-bg hero-pattern relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/3 right-10 w-80 h-80 gradient-orb opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-16 w-96 h-96 gradient-orb opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20 fade-in">
          <div className="badge-modern mb-12 mx-auto w-fit">
            <Star className="w-5 h-5 text-primary mr-3" />
            <span className="text-gray-300">Success</span>
            <span className="ml-2 text-primary font-bold">Stories</span>
          </div>
          <h2 className="text-balance mb-12 text-white">
            {t('testimonials.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/60 rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-10 rounded-3xl hover-lift group">
              <div className="flex items-center mb-8">
                <Quote className="w-10 h-10 text-primary mr-4" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <blockquote className="text-xl text-white mb-10 leading-relaxed font-light">
                "{t(testimonial.quoteKey)}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-primary font-bold text-xl">
                    {t(testimonial.authorKey).charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-white text-lg">
                    {t(testimonial.authorKey)}
                  </div>
                  <div className="text-gray-300">
                    {t(testimonial.clubKey)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-20 w-4 h-4 rounded-full opacity-60 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #22c55e, #16a34a)', animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full opacity-50 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #15803d, #22c55e)'}}></div>
    </section>
  );
};

export default TestimonialsSection;
