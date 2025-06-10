
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TestimonialsSection as TestimonialsSectionBlock } from "@/components/blocks/testimonials-with-marquee";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      author: {
        name: t('testimonials.testimonial1.author'),
        handle: t('testimonials.testimonial1.club'),
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: t('testimonials.testimonial1.quote'),
    },
    {
      author: {
        name: t('testimonials.testimonial2.author'),
        handle: t('testimonials.testimonial2.club'),
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: t('testimonials.testimonial2.quote'),
    },
  ];

  return (
    <div id="experiences" className="w-full">
      <TestimonialsSectionBlock
        title={t('testimonials.title')}
        description=""
        testimonials={testimonials}
        className="!py-16"
      />
    </div>
  );
};

export default TestimonialsSection;
